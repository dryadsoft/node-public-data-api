import "dotenv/config";
import { areaBasedList } from "./api/areaBasedList-service";
import { areaCode } from "./api/areaCode-service";
import { categoryCode } from "./api/categoryCode-service";
import { detailCommon } from "./api/detailCommon-service";
import { detailImage } from "./api/detailImage-service";
import { detailInfo } from "./api/detailInfo-service";
import { IDetailIntro76, IDetailIntro78 } from "./api/detailIntro-interface";
import { detailIntro } from "./api/detailIntro-service";
import { locationBasedList } from "./api/locationBasedList-service";
import { searchFestival } from "./api/searchFestival-service";
import { searchKeyword } from "./api/searchKeyword-service";
import { searchStay } from "./api/searchStay-service";

const SERVICE_KEY = `${process.env.SERVICE_KEY}`;

(async () => {
  try {
    // const { resultCode, resultMsg, items, numOfRows, pageNo, totalCount } =
    //   await areaCode({
    //     language: "Eng",
    //     numOfRows: 50,
    //     pageNo: 1,
    //     MobileOS: "ETC",
    //     MobileApp: "apptest",
    //     ServiceKey: SERVICE_KEY,
    //   });
    // const { resultCode, resultMsg, items, numOfRows, pageNo, totalCount } =
    //   await categoryCode({
    //     language: "Eng",
    //     numOfRows: 50,
    //     pageNo: 1,
    //     MobileOS: "ETC",
    //     MobileApp: "apptest",
    //     ServiceKey: SERVICE_KEY,
    //     contentTypeId: 76, // 없으면 대분류 전체
    //     cat1: "A01", // 특정 대분류만 조회   cat2: 중분류, cat3: 소분류
    //   });
    // const { resultCode, resultMsg, items, numOfRows, pageNo, totalCount } =
    //   await areaBasedList({
    //     language: "Eng",
    //     numOfRows: 5,
    //     pageNo: 1,
    //     MobileOS: "ETC",
    //     MobileApp: "apptest",
    //     ServiceKey: SERVICE_KEY,
    //     contentTypeId: 77,
    //   });
    // const { resultCode, resultMsg, items, numOfRows, pageNo, totalCount } =
    //   await locationBasedList({
    //     language: "Eng",
    //     numOfRows: 5,
    //     pageNo: 1,
    //     MobileOS: "ETC",
    //     MobileApp: "apptest",
    //     ServiceKey: SERVICE_KEY,
    //     mapX: 126.981611,
    //     mapY: 37.568477,
    //     radius: 1000,
    //   });
    // const { resultCode, resultMsg, items, numOfRows, pageNo, totalCount } =
    //   await searchKeyword({
    //     language: "Eng",
    //     numOfRows: 5,
    //     pageNo: 1,
    //     MobileOS: "ETC",
    //     MobileApp: "apptest",
    //     ServiceKey: SERVICE_KEY,
    //     keyword: "seoul",
    //   });
    // const { resultCode, resultMsg, items, numOfRows, pageNo, totalCount } =
    //   await searchFestival({
    //     language: "Eng",
    //     numOfRows: 5,
    //     pageNo: 1,
    //     MobileOS: "ETC",
    //     MobileApp: "apptest",
    //     ServiceKey: SERVICE_KEY,
    //     eventStartDate: 20180110,
    //   });
    // const { resultCode, resultMsg, items, numOfRows, pageNo, totalCount } =
    //   await searchStay({
    //     language: "Eng",
    //     numOfRows: 5,
    //     pageNo: 1,
    //     MobileOS: "ETC",
    //     MobileApp: "apptest",
    //     ServiceKey: SERVICE_KEY,
    //   });
    // const { resultCode, resultMsg, items, numOfRows, pageNo, totalCount } =
    //   await detailCommon({
    //     language: "Eng",
    //     numOfRows: 5,
    //     pageNo: 1,
    //     MobileOS: "ETC",
    //     MobileApp: "apptest",
    //     ServiceKey: SERVICE_KEY,
    //     contentId: 1891502,
    //   });

    // contentid: 1752884,
    //   contenttypeid: 76,
    // contentid: 1870509,
    //   contenttypeid: 78,
    // contentid: 2523275,
    //   contenttypeid: 85,
    // contentid: 1064078,
    // contenttypeid: 75,
    // contentid: 2708003,
    //   contenttypeid: 80,
    // contentid: 2499122,
    // contenttypeid: 79,
    // contentid: 2694940,
    // contenttypeid: 82,
    // contentid: 1128279,
    // contenttypeid: 77,
    // const { resultCode, resultMsg, items, numOfRows, pageNo, totalCount } =
    //   await detailIntro<IDetailIntro78>({
    //     language: "Eng",
    //     numOfRows: 5,
    //     pageNo: 1,
    //     MobileOS: "ETC",
    //     MobileApp: "apptest",
    //     ServiceKey: SERVICE_KEY,
    //     contentId: 1128279,
    //     contentTypeId: 77,
    //   });

    // 관광지	76
    // 문화시설	78
    // 행사/공연/축제	85
    // 레포츠	75
    // 쇼핑	79
    // const { resultCode, resultMsg, items, numOfRows, pageNo, totalCount } =
    //   await detailInfo({
    //     language: "Eng",
    //     numOfRows: 5,
    //     pageNo: 1,
    //     MobileOS: "ETC",
    //     MobileApp: "apptest",
    //     ServiceKey: SERVICE_KEY,
    //     contentId: 1752884,
    //     contentTypeId: 76,
    //   });

    const { resultCode, resultMsg, items, numOfRows, pageNo, totalCount } =
      await detailImage({
        language: "Eng",
        numOfRows: 5,
        pageNo: 1,
        MobileOS: "ETC",
        MobileApp: "apptest",
        ServiceKey: SERVICE_KEY,
        contentId: 2507421,
        imageYN: "Y",
      });
    console.log(totalCount, resultCode, resultMsg);
    if (resultCode === "0000") {
      console.log(items);
    }
  } catch (err) {
    console.log(err);
  }
})();
