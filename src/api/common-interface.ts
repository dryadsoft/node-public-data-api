export interface ICommonResHeader {
  resultCode: string;
  resultMsg: string;
}
export interface ICommonResBody<T> {
  items: { item: T };
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}
export interface ICommonRes<T> {
  response: {
    header: ICommonResHeader;
    body: ICommonResBody<T>;
  };
}
export interface ICommonResult<T> extends ICommonResHeader, ICommonResBody<T> {}

export type TLanguage =
  | "Kor"
  | "Eng"
  | "Jpn"
  | "Chs"
  | "Cht"
  | "Ger"
  | "Fre"
  | "Spn"
  | "Rus";

export type TService =
  | "areaBasedSyncList" // 관광정보 동기화 목록 조회
  | "searchFestival1" // 행사정보조회
  | "searchStay1" // 숙박정보조회
  | "detailIntro1" // 소개정보조회
  | "detailInfo1" // 반복정보조회
  | "detailCommon1" // 공통정보조회
  | "areaBasedSyncList1" // 관광정보 동기화 목록 조회
  | "detailImage1" // 이미지정보조회
  | "areaCode1" // 지역코드조회
  | "categoryCode1" // 서비스분류코드조회
  | "areaBasedList1" // 지역기반 관광정보조회
  | "locationBasedList1" // 위치기반 관광정보조회
  | "searchKeyword1"; // 키워드조회

export interface ICommonReq {
  numOfRows?: number;
  pageNo?: number;
  MobileOS: "IOS" | "AND" | "WIN" | "ETC";
  MobileApp: string;
  ServiceKey: string;
  language: TLanguage;
  timeout?: number;
}
