import axios from "axios";
import { ICommonResult, ICommonRes } from "./common-interface";
import { BASE_URL } from "./constants";
import IDetailIntro, {
  IDetailIntroItem,
  IDetailIntros,
} from "./detailIntro-interface";

/**
 * 소개정보 조회
 * @description 타입별 소개정보(휴무일, 개장시간, 주차시설 등)를 조회하는 기능입니다.
 * 각 타입마다 응답 항목이 다르게 제공됩니다.
 * @param param0
 * @returns
 */
export const detailIntro = async <T extends IDetailIntros>({
  language,
  numOfRows,
  pageNo,
  MobileOS,
  MobileApp,
  ServiceKey,
  contentId,
  contentTypeId,
  timeout = 3000,
}: IDetailIntro): Promise<ICommonResult<IDetailIntroItem & T>> => {
  try {
    const url = `${BASE_URL}/${language}Service/detailIntro` as const;
    const source = axios.CancelToken.source();
    setTimeout(() => {
      source.cancel(`request ${timeout} ms timeout error`);
    }, timeout);

    const {
      data: {
        response: {
          header: { resultCode, resultMsg },
          body: { items, numOfRows: _numOfRows, pageNo: _pageNo, totalCount },
        },
      },
      status,
      statusText,
    } = await axios.get<ICommonRes<IDetailIntroItem & T>>(url, {
      params: {
        numOfRows,
        pageNo,
        MobileOS,
        MobileApp,
        ServiceKey,
        contentId,
        contentTypeId,
        _type: "json",
      },
      cancelToken: source.token,
      timeout,
    });
    if (status === 200) {
      return {
        resultCode,
        resultMsg,
        items,
        numOfRows: _numOfRows,
        pageNo: _pageNo,
        totalCount,
      };
    }
    throw new Error(`${status}: ${statusText}`);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw new Error(`${err.code}: ${err.message}`);
    } else {
      throw err;
    }
  }
};
