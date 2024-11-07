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
        <div className={cx("date-box")}>
          <p className={cx("check in")}>체크인</p>
          <p className={cx("date-text")}>2024.11.07(목)</p>
          <p className={cx("date-time")}>16:00</p>
        </div>
        <div className={cx("day-box")}>
          <p className={cx("day-text")}>1박</p>
        </div>
        <div className={cx("date-box")}>
          <p className={cx("check out")}>체크아웃</p>
          <p className={cx("date-text")}>2024.11.08(금)</p>
          <p className={cx("date-time")}>16:00</p>
        </div>
      </div>
    </div>
  );
};

const ReservationName = () => {
  return <div>예약자 정보</div>;
};

export default ReservetionContent;
