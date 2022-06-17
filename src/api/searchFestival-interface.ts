import { ICommonReq } from "./common-interface";

/**
 * eventStartDate: YYYYMMDD
 * eventEndDate: YYYYMMDD
 */
export default interface ISearchFestival extends ICommonReq {
  arrange?: "O" | "P" | "Q" | "R" | "S";
  areaCode?: number;
  sigunguCode?: number;
  eventStartDate: number;
  eventEndDate?: number;
  modifiedtime?: number;
}

export interface ISearchFestivalItem {
  addr1: string;
  areacode: number;
  cat1: string;
  cat2: string;
  cat3: string;
  contentid: number;
  contenttypeid: number;
  createdtime: number;
  eventenddate: number;
  eventstartdate: number;
  firstimage: string;
  firstimage2: string;
  mapx: number;
  mapy: string;
  mlevel: number;
  modifiedtime: number;
  readcount: number;
  sigungucode: number;
  tel: string;
  title: string;
}
