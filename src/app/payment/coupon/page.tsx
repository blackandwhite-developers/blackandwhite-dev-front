"use client";

import React from "react";
import cn from "classnames/bind";
import CouponPage from "@/views/Payment/PaymentCouponPage.view";
import styles from "@/views/Payment/Payment.view.module.scss";
import Header from "@/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import { CouponContentProps } from "@/views/Payment/PaymentCouponPage.view";
import useMyInfo from "@/app/hooks/useMyInfo";

const cx = cn.bind(styles);

export default function PaymentCouponPage() {
  const myInfo = useMyInfo();
  const coupons: CouponContentProps[] =
    myInfo?.info?.coupon.map((coupon) => ({
      title: coupon.title,
      couponAmount: coupon.discount,
      exp: coupon.exp?.toISOString().split("T")[0],
    })) || [];

  return (
    <div className={cx("page-layout")}>
      <div className={cx("page")}>
        <Header title={"쿠폰 적용"} leftIcon={<FaAngleLeft />} />
        <CouponPage coupons={coupons} />
        {/* <AbleBtn
          label={`${(totalPrice || 0).toLocaleString()}원 결제하기`}
          onClick={() => router.push("/payment/complete")}
        /> */}
      </div>
    </div>
  );
}
