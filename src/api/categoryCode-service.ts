import axios from "axios";
import "dotenv/config";
import ICategoryCode, { ICategoryCodeItems } from "./categoryCode-interface";
import { ICommonRes, ICommonResult } from "./common-interface";
import { getServiceUrl } from "../utils/constants";
import customAxios from "../utils/customAxios";

/**
 * 서비스 분류코드 조회
 * @param param0
 * @returns
 */
export const categoryCode = async ({
  numOfRows,
  pageNo,
  MobileOS,
  MobileApp,
  ServiceKey,
  language,
  contentTypeId,
  cat1,
  cat2,
  cat3,
  timeout = 3000,
}: ICategoryCode): Promise<ICommonResult<ICategoryCodeItems[]>> => {
  try {
    const url = getServiceUrl({ language, service: "categoryCode1" });
    const {
      data: {
        response: {
          header: { resultCode, resultMsg },
          body: { items, numOfRows: _numOfRows, pageNo: _pageNo, totalCount },
        },
      },
      status,
      statusText,
    } = await customAxios.get<ICommonRes<ICategoryCodeItems[]>>(url, {
      params: {
        numOfRows,
        pageNo,
        MobileOS,
        MobileApp,
        ServiceKey,
        contentTypeId,
        cat1,
        cat2,
        cat3,
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
