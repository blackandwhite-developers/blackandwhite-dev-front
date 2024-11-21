interface ILodge {
  id: string;
  /** 숙소 이름 */
  name: string;
  /** 숙소 주소 */
  address: string;
  /** 숙소 상세 주소 */
  addressDetail: string;
  /**위도 */
  lat: number;
  /**경도 */
  lng: number;
  /** 숙소 전화번호 */
  phone: string;
  /** 숙소 소개 */
  description: string;
  /** 숙소 이미지 */
  image: string;
  /** 숙소 객실 종류 및 재고 */
  room: Array<IRoomTypeAndStock>;
  /** 카테고리 ID */
  categoryId: string;
  /** 평점 */
  rating: number;
  /** 리뷰 */
  review: string[]; // TODO: 리뷰 모델 추가
  /** 가격 */
  price: number;
  /** 카테고리 이름 */
  categoryName: string;
}

interface IRoomTypeAndStock {
  roomType: Array<IRoom>;
  stock: number;
}
