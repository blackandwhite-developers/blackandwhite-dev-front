"use client";
import React, { useState } from "react";
import styles from "./PaymentCouponPage.view.module.scss";
import cn from "classnames/bind";
import PaymentCard from "./PaymentCard.view";
import Header from "@/app/components/Header/Header";

const cx = cn.bind(styles);

export interface ReservationContentProps {
  title: string;
  couponAmount?: string;
  exp?: string;
}

const CouponCard = (props: ReservationContentProps) => {
  const { title, couponAmount, exp } = props;

  return (
    <div className={cx("wrapper")}>
      <Header title="예약" />
      <div className={cx("reservation-container")}>
        <label className={cx("custom-checkbox")}>
          {/* <input type="checkbox" checked={visitMethod === "walking"} /> */}
          <span></span>도보
        </label>
        <p className={cx("hotelname-title")}>{title}</p>
      </div>
      <div className={cx("reservationdate-container")}>
        <div className={cx("reservationdate-box")}>
          <div className={cx("date-box")}>
            <p className={cx("check")}>체크인</p>
          </div>
          <div className={cx("date-box")}>
            <p className={cx("check")}>체크아웃</p>
          </div>
        </div>
      </div>
      <div className={cx("visit-container")}>
        <div className={cx("visit-box")}>
          <p className={cx("visit-text")}>방문수단</p>
          <div className={cx("visit-checkBox")}>
            <label className={cx("custom-checkbox")}>
              {/* <input type="checkbox" checked={visitMethod === "walking"} /> */}
              <span></span>도보
            </label>
            <label className={cx("custom-checkbox")}>
              {/* <input type="checkbox" checked={visitMethod === "car"} /> */}
              <span></span>차량
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const CouponPage = () => {
  return <CouponCard title="적용안함" />;
};

export default CouponPage;
