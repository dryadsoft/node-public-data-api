import axios from "axios";
import { ICommonResult, ICommonRes } from "./common-interface";
import { BASE_URL } from "./constants";
import ISearchStay, { ISearchStayItem } from "./searchStay-interface";

/**
 * 숙박정보 조회
 * @param param0
 * @returns
 */
export const searchStay = async ({
  language,
  numOfRows,
  pageNo,
  MobileOS,
  MobileApp,
  ServiceKey,
  arrange,
  areaCode,
  sigunguCode,
  hanOk,
  benikia,
  goodStay,
  modifiedtime,
  timeout = 3000,
}: ISearchStay): Promise<ICommonResult<ISearchStayItem[]>> => {
  try {
    const url = `${BASE_URL}/${language}Service/searchStay` as const;
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
    } = await axios.get<ICommonRes<ISearchStayItem[]>>(url, {
      params: {
        numOfRows,
        pageNo,
        MobileOS,
        MobileApp,
        ServiceKey,
        listYN: "Y",
        arrange,
        areaCode,
        sigunguCode,
        hanOk,
        benikia,
        goodStay,
        modifiedtime,
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
