/**
 * 다국어콘텐츠 타입 코드표
 */
const contentType = [
  { contentTypeName: "관광지", contentTypeId: 76 },
  { contentTypeName: "문화시설", contentTypeId: 78 },
  { contentTypeName: "행사/공연/축제", contentTypeId: 85 },
  { contentTypeName: "레포츠", contentTypeId: 75 },
  { contentTypeName: "숙박", contentTypeId: 80 },
  { contentTypeName: "쇼핑", contentTypeId: 79 },
  { contentTypeName: "음식점", contentTypeId: 82 },
  { contentTypeName: "교통", contentTypeId: 77 },
];
/**
 * 다국어콘텐츠 타입 코드
 * @param contentTypeId
 * @returns
 */
export const contentTypeName = (contentTypeId: number) =>
  contentType.find((conentType) => conentType.contentTypeId === contentTypeId);
