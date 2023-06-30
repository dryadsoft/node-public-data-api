import { TLanguage, TService } from "../api/common-interface";

export const BASE_URL_OLD = "https://api.visitkorea.or.kr/openapi/service/rest";
export const BASE_URL = "http://apis.data.go.kr/B551011";
export const getServiceUrl = ({
  language,
  service,
}: {
  language: TLanguage;
  service: TService;
}) => `${BASE_URL}/${language}Service1/${service}` as const;
