/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./ProductSelectCard.module.scss";
import cn from "classnames/bind";
import { ReservationBtn } from "@/components/Button/ReservationBtn";
import Link from "next/link";
const cx = cn.bind(styles);


type ProductSelectCardProps = {
  image: string;
  event?: string;
  name: string;
  standard: number,
  maximum: number,
  checkIn: string;
  checkOut: string;
  price: {price: number;};
  stock: number;
};

export default function ProductSelectCard(props: ProductSelectCardProps) {
  const { image, event, name, standard, maximum, checkIn, checkOut, price, stock} = props;

  return (
    <div className={cx("productDetailBox")}>
      <div className={cx("productDetailBoxInn")}>
        <p className={cx("productBoxImage")}>
          <img src={`${image}`} alt={`${name}`} />
        </p>

        <div className={cx("productBoxInfo")}>
          <p className={cx("productLabel")}>{event}</p>
          <h3>{name}</h3>
          <div className={cx("infomation")}>
            {standard && maximum ? (
              <p className={cx("parlorInfomation")}>
                <span>객실 정보</span>
                <span>기준{standard}인 (최대{maximum}인)</span>
              </p>
            ) : null}
          </div>

          <div className={cx("priceArea")}>
            <div className={cx("priceWrapper")}>
              <div className={cx("lodgeArea")}>
                <div className={cx("reservationInfo")}>
                  <p className={cx("priceAreaInfo")}>
                    숙박
                  </p>
                  <p className={cx("priceAreaInfoDetail")}>
                    ({checkIn} ~ {checkOut})
                  </p>
                </div>
                <span className={cx("price")}>
                  {price.price} 원
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("reservationBtn")}>
        <Link href="/home/room" style={{ textDecoration: "none" }}>
          <ReservationBtn label={"객실 예약하기"} />
        </Link>
      </div>
    </div>
  );
}
