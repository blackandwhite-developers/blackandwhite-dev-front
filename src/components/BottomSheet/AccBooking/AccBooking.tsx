"use client";
import React, { useState } from "react";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./AccBooking.module.scss";
import Link from "next/link";
import { useAtom } from "jotai";

import { bookingDataAtom } from "@/atoms/authAtom";

const cx = cn.bind(styles);

type AccBookingProps = {
  data: {
    _id: string;
    event: string;
    name: string;
    time: {
      checkIn: string;
      checkOut: string;
    };
    price: { price: number };
    stock: number;
    capacity: { standard: number; maximum: number };
    startDate: string;
    endDate: string;
  };
  onClose: () => void;
};

const AccBooking = ({ data, onClose }: AccBookingProps) => {
  const [bookingData, setBookingData] = useAtom(bookingDataAtom);

  const [isCartPopupVisible, setIsCartPopupVisible] = useState(false);

  const handleAddToCart = () => {
    const updatedBookingData = [...bookingData, data._id];
    setBookingData(updatedBookingData);
    localStorage.setItem("bookingData", JSON.stringify(updatedBookingData));

    setIsCartPopupVisible(true);
    setTimeout(() => {
      setIsCartPopupVisible(false);
    }, 2000);
  };

  const startDate = new Date(data.startDate);
  const endDate = new Date(data.endDate);
  const stayNight = Math.ceil(
    (endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24)
  );

  // const formatDate = (date: Date) =>
  //   date.toLocaleDateString("ko-KR", {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //   });

  return (
    <div className={cx("AccBookingWrapper")}>
      <div className={cx("AccBookingTapBar")} onClick={onClose}>
        <Image
          src="/images/TapBar.png"
          alt="탭 바 이미지"
          width={77}
          height={3}
        />
      </div>
      <h1 className={cx("AccBookingTitle")}>숙박 예약</h1>
      <div className={cx("AccBookingDetailWrapper")}>
        <p className={cx("AccBookingImage")}>
          <img src="/images/Hotel.png" alt="호텔 이미지" />
        </p>
        <div className={cx("AccBookingDetail")}>
          <h2 className={cx("RoomTitle")}>{data.name}</h2>
          <div className={cx("ReservationDetail")}>
            <ul>
              <li className={cx("CheckIn")}>체크인</li>
              <li>{data.startDate}</li>
              <li>{data.time.checkIn}</li>
            </ul>
            <p className={cx("StayNight")}>{stayNight}박</p>
            <ul>
              <li className={cx("CheckOut")}>체크아웃</li>
              <li>{data.endDate}</li>
              <li>{data.time.checkOut}</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <ul className={cx("AccBookingInfo")}>
          <li>현장상황에 따라 객실 랜덤 배정(객실지정불가)</li>
          <li>
            예약 후 10분 내 취소될 경우 취소 수수료가 발생하지 않습니다.
            (*체크인 시간 경과 후 제외)
          </li>
        </ul>
      </div>
      <div className={cx("ReservationInfo")}>
        <div className={cx("ReservationIfoStayNight")}>
          <p>숙박</p>
          <span>({stayNight}박)</span>
        </div>
        <p>
          {data.price ? `${data.price.price * stayNight}원` : "불러오는 중..."}
        </p>
      </div>
      <div className={cx("ButtonWrapper")}>
        <button className={cx("CartButton")} onClick={handleAddToCart}>
          장바구니 담기
        </button>

        <Link href="/payment" style={{ textDecoration: "none" }}>
          <button className={cx("ReservationButton")}>예약하기</button>
        </Link>
      </div>

      {isCartPopupVisible && (
        <div className={cx("CartPopup")}>
          <div className={cx("CartItem")}>
            <p>장바구니에 상품이 담겼습니다.</p>
            <Link href="/home/detail/cart">
              <p className={cx("LookCart")}>장바구니 보기</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccBooking;
