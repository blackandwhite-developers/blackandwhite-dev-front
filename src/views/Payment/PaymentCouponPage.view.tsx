"use client";
import React, { useState } from "react";
import styles from "./PaymentCouponPage.view.module.scss";
import cn from "classnames/bind";
import PaymentCard from "./PaymentCard.view";
import Header from "@/app/components/Header/Header";

const cx = cn.bind(styles);

interface CouponContentProps {
  title: string;
  couponAmount?: number;
  exp?: string;
}

const CouponCard = (props: CouponContentProps) => {
  const { title, couponAmount, exp } = props;

  return (
    <div className={cx("coupon-container")}>
      <label className={cx("custom-checkbox")}>
        <input type="checkbox" checked />
        <span></span>
        <p>{title}</p>
      </label>
      <p className={cx("coupon-amount")}>{couponAmount?.toLocaleString()}원</p>
      <p className={cx("coupon-exp")}>{exp}</p>
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
      <CouponCard
        title="여름 파격 세일!"
        couponAmount={5000}
        exp="(~23.07.19 까지)"
      />
      <CouponCard
        title="떠나요 둘이서, 코코시 썸머 쿠폰"
        couponAmount={10000}
        exp="(~23.08.19 까지)"
      />
    </div>
  );
};

export default CouponPage;
