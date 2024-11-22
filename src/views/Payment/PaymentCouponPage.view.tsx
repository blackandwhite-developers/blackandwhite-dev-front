"use client";
import React from "react";
import styles from "./PaymentCouponPage.view.module.scss";
import cn from "classnames/bind";
// import PaymentCard from "./PaymentCard.view";
// import Header from "@/components/Header/Header";
import { AbleBtn } from "@/components/Button/AbleBtn";

const cx = cn.bind(styles);

export interface CouponContentProps {
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

const CouponPage = ({ coupons }: { coupons: CouponContentProps[] }) => {
  const discountAmount = 0;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("no-coupon-container")}>
        <label className={cx("custom-checkbox")}>
          <input type="checkbox" checked />
          <span></span>
          <p>적용 안함</p>
        </label>
      </div>
      {coupons.map((data, index) => {
        return (
          <div key={index}>
            <CouponCard title={data.title} couponAmount={data.couponAmount} exp={data.exp} />
          </div>
        );
      })}{" "}
      <div className={cx("button-container")}>
        <AbleBtn label={`${discountAmount.toLocaleString()}원 적용하기`} />
      </div>
    </div>
  );
};

export default CouponPage;
