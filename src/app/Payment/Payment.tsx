import React from "react";
import styles from "./Payment.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

const ReservetionContent = () => {
  return (
    <div className={cx("Wrapper")}>
      <div className={cx("reservation-container")}>
        <p className={cx("hotelname-title")}>김포 마리나베이 호텔</p>
        <p className={cx("room-detailcontent")}>
          디럭스 트윈 (기준 2명/최대 2명)
        </p>
      </div>
      <div className={cx("reservationdate-container")}>
        <p className={cx("hotelname-title")}>김포 마리나베이 호텔</p>
        <p className={cx("room-detailcontent")}>
          디럭스 트윈 (기준 2명/최대 2명)
        </p>
      </div>
    </div>
  );
};

const ReservationName = () => {
  return <div>예약자 정보</div>;
};

export default ReservetionContent;
