import axios from "axios";
import { ICommonResult, ICommonRes } from "./common-interface";
import { getServiceUrl } from "../utils/constants";
import IDetailImage, { IDetailImageItem } from "./detailImage-interface";
import customAxios from "../utils/customAxios";

/**
 * 이미지정보 조회
 * @description 각 관광타입(관광지, 숙박 등)에 해당하는 이미지URL 목록을 조회하는 기능입니다.
 * @param param0
 * @returns
 */
export const detailImage = async ({
  language,
  numOfRows,
  pageNo,
  MobileOS,
  MobileApp,
  ServiceKey,
  contentId,
  imageYN,
  subImageYN,
  timeout = 3000,
}: IDetailImage): Promise<ICommonResult<IDetailImageItem[]>> => {
  try {
    const url = getServiceUrl({ language, service: "detailImage1" });
    const {
      data: {
        response: {
          header: { resultCode, resultMsg },
          body: { items, numOfRows: _numOfRows, pageNo: _pageNo, totalCount },
        },
      },
      status,
      statusText,
    } = await customAxios.get<ICommonRes<IDetailImageItem[]>>(url, {
      params: {
        numOfRows,
        pageNo,
        MobileOS,
        MobileApp,
        ServiceKey,
        contentId,
        imageYN,
        subImageYN,
        _type: "json",
      },
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
