import { info } from "console";
import styles from "./ProductRoomDetailCard.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

type ProductDetailInfomation = {
  /** 운영시간 */
  operationHoure?: string | null;
  /** 이용시간 */
  useHoure?: string | null;
  /** 입실 */
  checkInTime?: string | null;
  /** 퇴실 */
  checkOutTime?: string | null;
  /**  */
  /** 숙박 가격 */
  price?: number;
  /** 객실 갯수 */
  roomCount: number;
};

type ProductDetailCardProps = {
  /** 뱃지 타이틀 */
  badge?: string;
  /** 상품 명칭  */
  title: "대실" | "숙박";
  /** 객실정보 */
  infomation: ProductDetailInfomation;
};

export default function ProductRoomDetailCard(props: ProductDetailCardProps) {
  const { badge, title, infomation } = props;

  return (
    <div className={cx("productDetailBox")}>
      <div className={cx("productDetailBoxInn")}>
        <div className={cx("productBoxInfo")}>
          <p className={cx("productBadge")}>{badge}</p>
          <h3>{title}</h3>
          <div className={cx("infomation")}>
            {title === "대실" ? (
              <div className={cx("checkInInfomation")}>
                <p>
                  <span>이용시간</span>
                  <span>최대 {infomation.useHoure}시간 이용</span>
                </p>
                <p>
                  <span>운영시간</span>
                  <span>{infomation.operationHoure}</span>
                </p>
              </div>
            ) : (
              <div className={cx("checkInInfomation")}>
                <p>
                  <span>체크인</span>
                  <span>최대 {infomation.checkInTime}시간 이용</span>
                </p>
                <p>
                  <span>체크아웃</span>
                  <span>{infomation.checkOutTime}</span>
                </p>
              </div>
            )}
          </div>

          <div className={cx("priceArea")}>
            <span>
              {infomation.roomCount >= 1
                ? `${infomation.roomCount}개 남음`
                : `사용 불가`}
            </span>
            <span className={cx("roomPrice")}>{infomation.price}</span>
          </div>
        </div>
      </div>
      {/* 여기 버튼 컴포넌트 넣으시면 됩니다.*/}
    </div>
  );
}

/*
  productInfomation = {
    productName 
    입실시간
    enteringTime
    퇴실시간
    checkoutTime
  }

  
  imageUrl?
  infomation:productInfomation


  badge?
*/
