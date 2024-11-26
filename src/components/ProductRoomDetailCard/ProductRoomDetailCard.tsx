"use client";
import React, { useState } from "react";
import styles from "./ProductRoomDetailCard.module.scss";
import cn from "classnames/bind";
import { StayReservationBtn } from "@/components/Button/StayReservationBtn";
import AccBooking from "../BottomSheet/AccBooking/AccBooking";

const cx = cn.bind(styles);

type ProductRoomDetailCardProps = {
  data: {
    lodgeData: {
      name: string;
    };
    roomData: {
      _id: string;
      event: string;
      time: {
        checkIn: string;
        checkOut: string;
      };
      price: { 
        price: number;
      };
      stock: number;
      capacity: { standard: number; maximum: number };
      startDate: string;
      endDate: string;
    };
  };
};

export default function ProductRoomDetailCard(props: ProductRoomDetailCardProps) {
  const { data } = props;
  const [selectedBookingType, setSelectedBookingType] = useState<"숙박" | null>(null);

  const handleClose = () => {
    setSelectedBookingType(null);
  };

  return (
    <div className={cx("productDetailBox")}>
      <div className={cx("productDetailBoxInn")}>
        <div className={cx("productBoxInfo")}>
          {data.roomData.event && <p className={cx("productBadge")}>{data.roomData.event}</p>}
          <h3>숙박</h3>
          <div className={cx("infomation")}>
            <div className={cx("checkInInfomation")}>
              <p>
                <span>체크인</span>
                <span>{data.roomData.time.checkIn}</span>
              </p>
              <p>
                <span>체크아웃</span>
                <span>{data.roomData.time.checkOut}</span>
              </p>
            </div>
          </div>
          <div className={cx("priceArea")}>
            <span>{data.roomData.stock >= 1 ? `${data.roomData.stock}개 남음` : `사용 불가`}</span>
            <span className={cx("roomPrice")}>{data.roomData.price.price.toLocaleString()}원</span>
          </div>
        </div>
      </div>
      <div className={cx("reservationBtn")}>
        <StayReservationBtn label={"숙박 예약"} onClick={() => setSelectedBookingType("숙박")} />
      </div>
      {selectedBookingType === "숙박" && (
        <AccBooking
          data={data}
          onClose={() => {
            handleClose();
          }}
        />
      )}
    </div>
  );
}
