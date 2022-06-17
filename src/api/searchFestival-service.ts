import axios from "axios";
import { ICommonResult, ICommonRes } from "./common-interface";
import { BASE_URL } from "./constants";
import ISearchFestival, {
  ISearchFestivalItem,
} from "./searchFestival-interface";

/**
 * 행사정보 조회
 * @param param0
 * @returns
 */
export const searchFestival = async ({
  language,
  numOfRows,
  pageNo,
  MobileOS,
  MobileApp,
  ServiceKey,
  arrange,
  areaCode,
  sigunguCode,
  eventStartDate,
  eventEndDate,
  modifiedtime,
  timeout = 3000,
}: ISearchFestival): Promise<ICommonResult<ISearchFestivalItem[]>> => {
  try {
    const url = `${BASE_URL}/${language}Service/searchFestival` as const;
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
    } = await axios.get<ICommonRes<ISearchFestivalItem[]>>(url, {
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
        eventStartDate,
        eventEndDate,
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
