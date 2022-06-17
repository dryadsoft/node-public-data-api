import axios from "axios";
import IAreaBasedList, { IAreaBasedListItem } from "./areaBasedList-interface";
import { ICommonResult, ICommonRes } from "./common-interface";
import { BASE_URL } from "./constants";

/**
 * 지역기반 관광정보 조회
 * @param param0
 * @returns
 */
export const areaBasedList = async ({
  language,
  numOfRows,
  pageNo,
  MobileOS,
  MobileApp,
  ServiceKey,
  arrange,
  contentTypeId,
  areaCode,
  sigunguCode,
  cat1,
  cat2,
  cat3,
  modifiedtime,
  timeout = 3000,
}: IAreaBasedList): Promise<ICommonResult<IAreaBasedListItem[]>> => {
  try {
    const url = `${BASE_URL}/${language}Service/areaBasedList` as const;
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
    } = await axios.get<ICommonRes<IAreaBasedListItem[]>>(url, {
      params: {
        numOfRows,
        pageNo,
        MobileOS,
        MobileApp,
        ServiceKey,
        listYN: "Y",
        arrange,
        contentTypeId,
        areaCode,
        sigunguCode,
        cat1,
        cat2,
        cat3,
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
