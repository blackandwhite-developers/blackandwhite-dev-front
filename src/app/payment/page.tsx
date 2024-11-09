import React from "react";
import PaymentView from "@/views/Payment/Payment.view";
import PaymentUser from "@/views/Payment/PaymentUesr.view";
import PaymentCoupon from "@/views/Payment/PaymentCoupon.view";
import ReservetionUser from "@/views/Payment/PaymentUesr.view";
import styles from "@/views/Payment/Payment.view.module.scss";
import cn from "classnames/bind";
import ReservationSection from "@/views/Payment/Payment.view";
import PaymentSale from "@/views/Payment/PaymentSale.view";
import PaymentMethod from "@/views/Payment/PaymentMethod.view";

const cx = cn.bind(styles);

export default function PaymentPage() {
  return (
    <div className={cx("page-layout")}>
      <div className={cx("page")}>
        <ReservationSection />
        <ReservetionUser />
        <PaymentCoupon />
        <PaymentSale />
        <PaymentMethod />
      </div>
    </div>
  );
}
