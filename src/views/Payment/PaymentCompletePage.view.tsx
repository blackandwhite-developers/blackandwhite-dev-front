"use client";
import React, { useState } from "react";
import styles from "./PaymentCompletePage.view.module.scss";
import cn from "classnames/bind";
import PaymentCard from "./PaymentCard.view";
import Header from "@/app/components/Header/Header";

const cx = cn.bind(styles);

interface CouponContentProps {
  title: string;
  rommImage?: string;
  hotelName: string;
  roomType: string;
  night: number;
  checkInDate: string;
  checkInTime: string;
  checkOutDate: string;
  checkOutTime: string;
  price: number;
}

const CouponCard = (props: CouponContentProps) => {
  const {
    title,
    rommImage,
    hotelName,
    roomType,
    night,
    checkInDate,
    checkInTime,
    checkOutDate,
    checkOutTime,
    price,
  } = props;

  return (
    <div className={cx("coupon-container")}>
      <label className={cx("custom-checkbox")}>
        <input type="checkbox" checked />
        <span></span>
        <p>{title}</p>
      </label>
      <p className={cx("coupon-amount")}>원</p>
      <p className={cx("coupon-exp")}></p>
    </div>
  );
};

const CouponPage = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("no-coupon-container")}>
        <label className={cx("custom-checkbox")}>
          <input type="checkbox" checked />
          <span></span>
          <p>적용 안함</p>
        </label>
      </div>
    </div>
  );
};

export default CouponPage;
