import React from "react";
import PaymentView from "@/views/Payment/Payment.view";
import PaymentUser from "@/views/Payment/Payment-uesr.view";
import PaymentCoupon from "@/views/Payment/Payment-coupon.view";
import ReservetionUser from "@/views/Payment/Payment-uesr.view";
import styles from "@/views/Payment/Payment.view.module.scss";
import cn from "classnames/bind";
import ReservetionContent from "@/views/Payment/Payment.view";

const cx = cn.bind(styles);

export default function PaymentPage() {
  return (
    <div className={cx("page-layout")}>
      <div className={cx("page")}>
        <ReservetionContent />
        <ReservetionUser />
        <PaymentCoupon />
      </div>
    </div>
  );
}
