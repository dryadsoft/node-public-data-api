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
export interface ICommonReq {
  numOfRows?: number;
  pageNo?: number;
  MobileOS: "IOS" | "AND" | "WIN" | "ETC";
  MobileApp: string;
  ServiceKey: string;
  language: TLanguage;
  timeout?: number;
}
