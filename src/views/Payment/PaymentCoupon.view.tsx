"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./PaymentCoupon.view.module.scss";
import cn from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";
import PaymentCard from "./PaymentCard.view";

const cx = cn.bind(styles);

interface PaymentCouponProps {
  title: string;
  ableCoupon?: number;
  couponName?: string;
  discountAmount?: number;
}

const PaymentCoupon = (props: PaymentCouponProps) => {
  const router = useRouter();

  return (
    <div className={cx("coupon-container")}>
      <div className={cx("coupon-box")}>
        <p className={cx("coupon-text")}>{props.title}</p>
      </div>
      <div className={cx("botton-box")}>
        <p className={cx("available")}>사용 가능 쿠폰 {props.ableCoupon}장</p>
        <button
          type="button"
          className={cx("arrow-icon")}
          onClick={() => router.push("/payment/coupon")}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

interface PaymentPointProps {
  title: string;
  usablePointAmount: number;
  usableCouponCount: number;
}

const PaymentPoint = (props: PaymentPointProps) => {
  const { title, usablePointAmount, usableCouponCount } = props;
  const [usedPointAmount, setUsedPointAmount] = React.useState(0);
  const router = useRouter();

  return (
    <div className={cx("point-container")}>
      <div className={cx("point-box")}>
        <p className={cx("point-text")}>{title}</p>
        <p className={cx("point-caption")}>
          {usablePointAmount.toLocaleString()}P 사용가능
        </p>
      </div>
      <div className={cx("pointuse-box")}>
        <input
          type="number"
          className={cx("point-input")}
          min={0}
          defaultValue={0}
          value={usedPointAmount}
          onChange={(e) => {
            const newValue = e.target.value;

            setUsedPointAmount(Number(newValue));
          }}
        />
        <button
          type="button"
          className={cx("arrow-icon")}
          onClick={() => setUsedPointAmount(usablePointAmount)}
        >
          <span>전액 사용</span>
        </button>
      </div>
    </div>
  );
};

const ReservetionCoupon = ({
  usablePointAmount,
  usableCouponCount,
}: {
  usablePointAmount: number;
  usableCouponCount: number;
}) => {
  return (
    <div className={cx("reservationCoupons")}>
      <PaymentCard title="쿠폰 및 포인트 사용">
        <PaymentCoupon title="쿠폰" ableCoupon={usableCouponCount} />
        <PaymentPoint
          title="포인트"
          usablePointAmount={usablePointAmount}
          usableCouponCount={usableCouponCount}
        />
      </PaymentCard>
    </div>
  );
};

export default ReservetionCoupon;
