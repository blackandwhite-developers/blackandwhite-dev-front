import React from "react";
import cn from "classnames/bind";
import CouponPage from "@/views/Payment/PaymentCouponPage.view";
import styles from "@/views/Payment/Payment.view.module.scss";

const cx = cn.bind(styles);

export default function PaymentCouponPage() {
  return (
    <div className={cx("page-layout")}>
      <div className={cx("page")}>
        <CouponPage />
      </div>
    </div>
  );
}
