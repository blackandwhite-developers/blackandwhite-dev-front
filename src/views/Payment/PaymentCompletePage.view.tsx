"use client";
import React, { useState } from "react";
import styles from "./PaymentCompletePage.view.module.scss";
import cn from "classnames/bind";
import Header from "@/components/Header/Header";
import { ReservationContentProps } from "./Payment.view";
import Badge from "@/components/badge/Badge";
import PaymentCard from "./PaymentCard.view";

const cx = cn.bind(styles);

const PaymentCompleteCard = (props: ReservationContentProps) => {
  const { hotelName, roomImage, roomType, checkInDate, checkInTime, checkOutDate, checkOutTime, night, price, discountPrice } = props;

  return (
    <div className={cx("Reservation-container")}>
      <div className={cx("Reservation-content")}>
        <img src={roomImage} alt="room-image" />
        <div className={cx("hotel-content")}>
          <Badge shape="round" color="point">
            호텔
          </Badge>
          <p className={cx("hotel-name")}>{hotelName}</p>
          <p className={cx("date-text")}>
            {checkInDate}~{checkOutDate},{night}박
          </p>
          <p className={cx("room-detailcontent")}>{roomType}</p>
        </div>
      </div>
      <div className={cx("time-content")}>
        <p className={cx("use-time")}>이용시간</p>
        <div className={cx("time-box")}>
          <div className={cx("check-box")}>
            <p className={cx("checktime-text")}>체크인</p>
            <p className={cx("time-text")}>{checkInTime}</p>
          </div>
          <div className={cx("check-box")}>
            <p className={cx("checktime-text")}>체크아웃</p>
            <p className={cx("time-text")}>{checkOutTime}</p>
          </div>
        </div>
      </div>
      <div className={cx("pay-container")}>
        <p className={cx("pay-text")}>결제금액</p>
        <p className={cx("pay-amount")}>{(price - discountPrice).toLocaleString()}원</p>
      </div>
      <div className={cx("border")}></div>
    </div>
  );
};

const PaymentComplete = ({ reservations }: { reservations: ReservationContentProps[] }) => {
  return (
    <PaymentCard title="상품 정보 ">
      {reservations.map((data, index) => {
        return (
          <PaymentCompleteCard
            key={index}
            roomImage={data.roomImage}
            hotelName={data.hotelName}
            roomType={data.roomType}
            checkInDate={data.checkInDate}
            checkInTime={data.checkInTime}
            checkOutDate={data.checkOutDate}
            checkOutTime={data.checkOutTime}
            night={data.night}
            visitMethod={data.visitMethod}
            price={data.price}
            discountPrice={data.discountPrice}
          />
        );
      })}
    </PaymentCard>
  );
};

export default PaymentComplete;
