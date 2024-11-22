import React, { useState } from "react";
import styles from "./ProductRoomDetailCard.module.scss";
import cn from "classnames/bind";
import { RoomReservationBtn } from "@/components/Button/RoomReservationBtn";
import { StayReservationBtn } from "@/components/Button/StayReservationBtn";
import AccBooking from "../BottomSheet/AccBooking/AccBooking";
import RoomBooking from "../BottomSheet/RoomBooking/RoomBooking";

const cx = cn.bind(styles);

type ProductRoomDetailCardProps = {
  event?: string;
  title: "대실" | "숙박";
  name: string;
  checkIn?: string | null;
  checkOut?: string | null;
  shortStayPrice: string; 
  overnightPrice: string;
  stock: number;
  standard: number;
  maximum: number;
};

export default function ProductRoomDetailCard(props: ProductRoomDetailCardProps) {
  const { event, title, name,  checkIn, checkOut, shortStayPrice, overnightPrice, stock, standard, maximum} = props;
  const [selectedBookingType, setSelectedBookingType] = useState<"대실" | "숙박" | null>(null);

  const handleClose = () => {
    setSelectedBookingType(null);
  };

  return (
    <div className={cx("productDetailBox")}>
      <div className={cx("productDetailBoxInn")}>
        <div className={cx("productBoxInfo")}>
          {event && <p className={cx("productBadge")}>{event}</p>}
          <h3>{title}</h3>
          <div className={cx("infomation")}>
            {title === "대실" ? (
              <div className={cx("checkInInfomation")}>
                <p>
                  <span>이용시간</span>
                  <span>최대 4시간 이용</span>
                </p>
                <p>
                  <span>운영시간</span>
                  <span>24시간</span>
                </p>
              </div>
              
            ) : (
              <div className={cx("checkInInfomation")}>
                <p>
                  <span>체크인</span>
                  <span>{checkIn}</span>
                </p>
                <p>
                  <span>체크아웃</span>
                  <span>{checkOut}</span>
                </p>
              </div>
            )}
          </div>
          <div className={cx("priceArea")}>
            <span>{stock >= 1 ? `${stock}개 남음` : `사용 불가`}</span>
            <span className={cx("roomPrice")}>{shortStayPrice}</span>
          </div>
        </div>
      </div>
      <div className={cx("reservationBtn")}>
        {title === "대실" ? (
          <RoomReservationBtn label={"대실 예약"} onClick={() => setSelectedBookingType("대실")} />
        ) : (
          <StayReservationBtn label={"숙박 예약"} onClick={() => setSelectedBookingType("숙박")} />
        )}
      </div>
      {selectedBookingType === "대실" && (
        <RoomBooking
          onClose={() => {
            console.log("RoomBooking 닫기");
            handleClose();
          }}
        />
      )}
      {selectedBookingType === "숙박" && (
        <AccBooking
          onClose={() => {
            console.log("AccBooking 닫기");
            handleClose();
          }}
        />
      )}
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
