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

const MypageReservationCard = () => {
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

const MypageReservation = () => {
  const [selectedTab, setSelectedTab] = useState("reservations");

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div className={cx("category-container")}>
      <button
        className={cx("CategoryLink", {
          selected: selectedTab === "reservations",
        })}
        onClick={() => handleTabClick("reservations")}
      >
        <p>예약내역</p>
      </button>
      <button
        className={cx("CategoryLink", {
          selected: selectedTab === "cancle",
        })}
        onClick={() => handleTabClick("cancle")}
      >
        <p>취소내역</p>
      </button>
    </div>
  );
};

export default MypageReservation;
