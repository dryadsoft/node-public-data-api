import { ICommonReq } from "./common-interface";

export default interface IDetailIntro extends ICommonReq {
  contentId: number;
  contentTypeId: 76 | 78 | 85 | 75 | 80 | 79 | 82 | 77;
}

export interface IDetailIntroItem {
  contentid: string;
  contenttypeid: string;
}

/**
 * 관광지
 */
export interface IDetailIntro76 extends IDetailIntroItem {
  expguide: string;
  heritage1: string;
  infocenter: string;
  parking: string;
  restdate: string;
}
/**
 * 문화시설
 * @param
 * @param infocenterculture 문의 및 안내
 * @param parkingculture
 * @param parkingfee
 * @param restdateculture
 * @param usefee
 * @param usetimeculture
 */
export interface IDetailIntro78 extends IDetailIntroItem {
  infocenterculture: string;
  parkingculture: string;
  parkingfee: string;
  restdateculture: string;
  usefee: string;
  usetimeculture: string;
}
/**
 * 행사/공연/축제
 */
export interface IDetailIntro85 extends IDetailIntroItem {
  agelimit: string;
  bookingplace: string;
  discountinfofestival: string;
  eventenddate: number;
  eventplace: string;
  eventstartdate: number;
  placeinfo: string;
  playtime: string;
  program: string;
  spendtimefestival: string;
  sponsor1: string;
  sponsor1tel: string;
  sponsor2tel: string;
  subevent: string;
  usetimefestival: string;
}

/**
 * 레포츠
 */
export interface IDetailIntro75 extends IDetailIntroItem {
  expagerangeleports: string;
  infocenterleports: string;
  parkingfeeleports: string;
  parkingleports: string;
  reservation: string;
  restdateleports: string;
  usefeeleports: string;
  usetimeleports: string;
}
/**
 * 숙박
 */
export interface IDetailIntro80 extends IDetailIntroItem {
  accomcountlodging: string;
  benikia: number;
  checkintime: string;
  checkouttime: string;
  chkcooking: string;
  foodplace: string;
  goodstay: number;
  hanok: number;
  infocenterlodging: string;
  parkinglodging: string;
  pickup: string;
  reservationlodging: string;
  reservationurl: string;
  roomcount: number;
  roomtype: string;
  scalelodging: string;
  subfacility: string;
}
/**
 * 쇼핑
 */
export interface IDetailIntro79 extends IDetailIntroItem {
  infocentershopping: string;
  opentime: string;
  parkingshopping: string;
  restdateshopping: string;
  saleitem: string;
  scaleshopping: string;
  shopguide: string;
}
/**
 * 음식점
 */
export interface IDetailIntro82 extends IDetailIntroItem {
  firstmenu: string;
  infocenterfood: string;
  lcnsno: number;
  opentimefood: string;
  parkingfood: string;
  reservationfood: string;
  smoking: string;
  treatmenu: string;
}
/**
 * 교통
 */
export interface IDetailIntro77 extends IDetailIntroItem {
  chkcreditcardtraffic: string;
  conven: string;
  foreignerinfocenter: string;
  infocentertraffic: string;
  mainroute: string;
  operationtimetraffic: string;
  parkingtraffic: string;
  shipinfo: string;
}

export type IDetailIntros =
  | IDetailIntro76
  | IDetailIntro78
  | IDetailIntro85
  | IDetailIntro75
  | IDetailIntro80
  | IDetailIntro79
  | IDetailIntro82
  | IDetailIntro77;
