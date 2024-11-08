"use client";
import React, { useState } from "react";
import styles from "./Payment.view.module.scss";
import cn from "classnames/bind";
import PaymentCard from "./PaymentCard.view";

const cx = cn.bind(styles);

interface ReservationContentProps {
  title: string;
  roomType: string;
  night: number;
  checkInDate: string;
  checkInTime: string;
  checkOutDate: string;
  checkOutTime: string;
  visitMethod: "walking" | "car";
  price: number;
}

const ReservetionContent = (props: ReservationContentProps) => {
  const {
    title,
    roomType,
    checkInDate,
    checkInTime,
    checkOutDate,
    checkOutTime,
    visitMethod,
    price,
  } = props;

  return (
    <div className={cx("Wrapper")}>
      <div className={cx("reservation-container")}>
        <p className={cx("hotelname-title")}>{title}</p>
        <p className={cx("room-detailcontent")}>{roomType}</p>
      </div>
      <div className={cx("reservationdate-container")}>
        <div className={cx("reservationdate-box")}>
          <div className={cx("date-box")}>
            <p className={cx("check")}>체크인</p>
            <p className={cx("date-text")}>{checkInDate}</p>
            <p className={cx("date-time")}>{props.checkInTime}</p>
          </div>
          <div className={cx("day-box")}>
            <p className={cx("day-text")}>{props.night}박</p>
          </div>
          <div className={cx("date-box")}>
            <p className={cx("check")}>체크아웃</p>
            <p className={cx("date-text")}>{checkOutDate}</p>
            <p className={cx("date-time")}>{checkOutTime}</p>
          </div>
        </div>
      </div>
      <div className={cx("visit-container")}>
        <div className={cx("visit-box")}>
          <p className={cx("visit-text")}>방문수단*</p>
          <div className={cx("visit-checkBox")}>
            <label className={cx("custom-checkbox")}>
              <input type="checkbox" checked={visitMethod === "walking"} />
              <span></span>도보
            </label>
            <label className={cx("custom-checkbox")}>
              <input type="checkbox" checked={visitMethod === "car"} />
              <span></span>차량
            </label>
          </div>
        </div>
      </div>
      <div className={cx("pay-container")}>
        <p className={cx("pay-text")}>결제금액</p>
        <p className={cx("pay-amount")}>{props.price.toLocaleString()}원</p>
      </div>
    </div>
  );
};

const ReservationSection = () => {
  const reservations: ReservationContentProps[] = [
    {
      title: "김포 마리나베이 호텔",
      roomType: "디럭스 트윈 (기존 2명/최대 2명)",
      checkInDate: "2023.06.14(화)",
      checkInTime: "16:00",
      checkOutDate: "2023.06.15(수)",
      checkOutTime: "11:00",
      night: 1,
      visitMethod: "car",
      price: 75000,
    },
    {
      title: "Soo 경복궁",
      roomType: "디럭스 트윈 (기존 2명/최대 2명)",
      checkInDate: "2023.06.23(화)",
      checkInTime: "16:00",
      checkOutDate: "2023.06.24(수)",
      checkOutTime: "11:00",
      night: 1,
      visitMethod: "walking",
      price: 75000,
    },
    {
      title: "양양 여름이네 펜션",
      roomType: "디럭스 트윈 (기존 2명/최대 2명)",
      checkInDate: "2023.06.23(화)",
      checkInTime: "16:00",
      checkOutDate: "2023.06.24(수)",
      checkOutTime: "11:00",
      night: 1,
      visitMethod: "car",
      price: 75000,
    },
  ];

  return (
    <PaymentCard>
      {reservations.map((data, index) => {
        return (
          <ReservetionContent
            key={index}
            title={data.title}
            roomType={data.roomType}
            checkInDate={data.checkInDate}
            checkInTime={data.checkInTime}
            checkOutDate={data.checkOutDate}
            checkOutTime={data.checkOutTime}
            night={data.night}
            visitMethod={data.visitMethod}
            price={data.price}
          />
        );
      })}
    </PaymentCard>
  );
};

export default ReservationSection;
