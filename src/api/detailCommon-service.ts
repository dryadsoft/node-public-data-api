import axios from "axios";
import { ICommonResult, ICommonRes } from "./common-interface";
import { getServiceUrl } from "../utils/constants";
import IDetailCommon, { IDetailCommonItem } from "./detailCommon-interface";
import customAxios from "../utils/customAxios";

/**
 * 공통정보 조회
 * @param param0
 * @returns
 */
export const detailCommon = async ({
  language,
  numOfRows,
  pageNo,
  MobileOS,
  MobileApp,
  ServiceKey,
  contentId,
  contentTypeId,
  defaultYN,
  firstImageYN,
  areacodeYN,
  catcodeYN,
  addrinfoYN,
  mapinfoYN,
  overviewYN,
  transGuideYN,
  timeout = 3000,
}: IDetailCommon): Promise<ICommonResult<IDetailCommonItem>> => {
  try {
    const url = getServiceUrl({ language, service: "detailCommon1" });
    const {
      data: {
        response: {
          header: { resultCode, resultMsg },
          body: { items, numOfRows: _numOfRows, pageNo: _pageNo, totalCount },
        },
      },
      status,
      statusText,
    } = await customAxios.get<ICommonRes<IDetailCommonItem>>(url, {
      params: {
        numOfRows,
        pageNo,
        MobileOS,
        MobileApp,
        ServiceKey,
        contentId,
        contentTypeId,
        defaultYN,
        firstImageYN,
        areacodeYN,
        catcodeYN,
        addrinfoYN,
        mapinfoYN,
        overviewYN,
        transGuideYN,
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
