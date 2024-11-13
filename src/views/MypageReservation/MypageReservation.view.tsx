"use client";
import React, { useState } from "react";
import styles from "./MypageReservation.view.module.scss";
import cn from "classnames/bind";
import PaymentCard from "../Payment/PaymentCard.view";
import Header from "@/app/components/Header/Header";

const cx = cn.bind(styles);

interface CouponContentProps {
  title: string;
  couponAmount?: number;
  exp?: string;
}

const CouponCard = () => {
  return (
    <div className={cx("coupon-container")}>
      <label className={cx("custom-checkbox")}>
        <input type="checkbox" checked />
        <span></span>
        <p>dd</p>
      </label>
      <p className={cx("coupon-amount")}>dd원</p>
      <p className={cx("coupon-exp")}>dd</p>
    </div>
  );
};

const CouponPage = () => {
  return (
    <div className={cx("wrapper")}>
      {/* <button
              className={cx("CategoryLink", {
                selected: selectedTab === "room",
              })}
              onClick={() => handleTabClick("room")}
            >
              객실 선택
            </button> */}
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
