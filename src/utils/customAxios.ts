import axios, { AxiosRequestConfig, Axios } from "axios";

class CustomAxios {
  constructor(private customAxios: Axios = axios) {}

  private newAbortSignal(timeoutMs = 3000): [AbortSignal, NodeJS.Timeout] {
    const abortController = new AbortController();
    const abortTimeoutId = setTimeout(() => abortController.abort(), timeoutMs);

    return [abortController.signal, abortTimeoutId];
  }

  async get<T, D = any>(url: string, config?: AxiosRequestConfig<D>) {
    const [signal, abortTimeoutId] = this.newAbortSignal();
    return this.customAxios.get<T>(url, { ...config, signal }).finally(() => {
      clearTimeout(abortTimeoutId);
    });
  }
}

export default new CustomAxios();
