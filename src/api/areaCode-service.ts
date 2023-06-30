import axios from "axios";
import "dotenv/config";
import IAreaCode, { IAreaCodeItem } from "./areaCode-interface";
import { ICommonResult, ICommonRes } from "./common-interface";
import { getServiceUrl } from "../utils/constants";
import customAxios from "../utils/customAxios";

/**
 * 지역코드 조회
 * @param param0
 * @returns
 */
export const areaCode = async ({
  language,
  numOfRows,
  pageNo,
  MobileOS,
  MobileApp,
  ServiceKey,
  areaCode,
  timeout = 3000,
}: IAreaCode): Promise<ICommonResult<IAreaCodeItem[]>> => {
  try {
    const url = getServiceUrl({ language, service: "areaCode1" });
    const {
      data: {
        response: {
          header: { resultCode, resultMsg },
          body: { items, numOfRows: _numOfRows, pageNo: _pageNo, totalCount },
        },
      },
      status,
      statusText,
    } = await customAxios.get<ICommonRes<IAreaCodeItem[]>>(url, {
      params: {
        numOfRows,
        pageNo,
        MobileOS,
        MobileApp,
        ServiceKey,
        areaCode,
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
