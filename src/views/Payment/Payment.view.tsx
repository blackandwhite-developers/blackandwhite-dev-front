"use client";
import React, { useState } from "react";
import styles from "./Payment.view.module.scss";
import cn from "classnames/bind";
import PaymentCard from "./PaymentCard.view";
import Badge from "@/components/badge/Badge";
import Radio from "@/components/radio/Radio";

const cx = cn.bind(styles);

export interface ReservationContentProps {
  hotelName: string;
  roomImage?: string;
  roomType: string;
  night: number;
  checkInDate: string;
  checkInTime: string;
  checkOutDate: string;
  checkOutTime: string;
  visitMethod: "walking" | "car";
  price: number;
  discountPrice: number;
}

const ReservetionContent = (props: ReservationContentProps) => {
  const { hotelName, roomType, checkInDate, checkInTime, checkOutDate, checkOutTime, visitMethod, price, discountPrice } = props;
  const [visit, setVisit] = useState(visitMethod);
  return (
    <div className={cx("wrapper")}>
      {/* <Header title="예약" /> */}
      <div className={cx("reservation-container")}>
        <Badge shape="round" color="point">
          호텔
        </Badge>
        <p className={cx("hotelname-title")}>{hotelName}</p>
        <p className={cx("room-detailcontent")}>{roomType}</p>
      </div>
      <div className={cx("reservationdate-container")}>
        <div className={cx("reservationdate-box")}>
          <div className={cx("date-box")}>
            <p className={cx("check")}>체크인</p>
            <p className={cx("date-text")}>{checkInDate}</p>
            <p className={cx("date-time")}>{checkInTime}</p>
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
          <p className={cx("visit-text")}>방문수단</p>
          <div className={cx("visit-checkBox")}>
            <Radio
              name="visitMethod"
              value="walking"
              label="도보"
              onChange={() => {
                setVisit("walking");
              }}
              className={cx("custom-checkbox")}
              checked={visit === "walking"}
            />
            <Radio
              name="visitMethod"
              value="car"
              label="차량"
              onChange={() => {
                setVisit("car");
              }}
              className={cx("custom-checkbox")}
              checked={visit === "car"}
            />
          </div>
        </div>
      </div>
      <div className={cx("pay-container")}>
        <p className={cx("pay-text")}>결제금액</p>
        <div className={cx("badge-box")}>
          <Badge shape="square" color="point">
            선착순 {discountPrice.toLocaleString()}원 특가
          </Badge>
          <p className={cx("pay-amount")}>{(price - discountPrice).toLocaleString()}원</p>
        </div>
      </div>
      <div className={cx("border")}></div>
    </div>
  );
};

const ReservationSection = ({ reservations }: { reservations: ReservationContentProps[] }) => {
  return (
    <PaymentCard>
      {reservations.map((data, index) => {
        return (
          <ReservetionContent
            key={index}
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

export default ReservationSection;
