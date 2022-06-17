import axios from "axios";
import { ICommonResult, ICommonRes } from "./common-interface";
import { BASE_URL } from "./constants";
import ILocationBasedList, {
  ILocationBasedListItem,
} from "./locationBased-interface";

/**
 * 위치기반 관광정보 조회
 * @param param0
 * @returns
 */
export const locationBasedList = async ({
  language,
  numOfRows,
  pageNo,
  MobileOS,
  MobileApp,
  ServiceKey,
  arrange,
  contentTypeId,
  mapX,
  mapY,
  radius,
  modifiedtime,
  timeout = 3000,
}: ILocationBasedList): Promise<ICommonResult<ILocationBasedListItem[]>> => {
  try {
    const url = `${BASE_URL}/${language}Service/locationBasedList` as const;
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
    } = await axios.get<ICommonRes<ILocationBasedListItem[]>>(url, {
      params: {
        numOfRows,
        pageNo,
        MobileOS,
        MobileApp,
        ServiceKey,
        listYN: "Y",
        arrange,
        contentTypeId,
        mapX,
        mapY,
        radius,
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
