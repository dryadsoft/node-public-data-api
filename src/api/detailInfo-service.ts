import axios from "axios";
import { ICommonResult, ICommonRes } from "./common-interface";
import { BASE_URL } from "./constants";
import IDetailInfo, { IDetailInfoItem } from "./detailInfo-interface";

/**
 * 반복정보 조회
 * @description 타입별 반복정보를 조회하는 기능입니다.
 * “숙박”객실정보 및 “여행코스”코스정보는 국문 서비스만 제공합니다.
 * “숙박, 여행코스”를 제외한 나머지 타입은 다양한 정보를 반복적인 형태로 제공합니다.
 * @param param0
 * @returns
 */
export const detailInfo = async ({
  language,
  numOfRows,
  pageNo,
  MobileOS,
  MobileApp,
  ServiceKey,
  contentId,
  contentTypeId,
  timeout = 3000,
}: IDetailInfo): Promise<ICommonResult<IDetailInfoItem[]>> => {
  try {
    const url = `${BASE_URL}/${language}Service/detailInfo` as const;
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
    } = await axios.get<ICommonRes<IDetailInfoItem[]>>(url, {
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
        items: !Array.isArray(items.item)
          ? { item: [items.item] }
          : { item: items.item },
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
