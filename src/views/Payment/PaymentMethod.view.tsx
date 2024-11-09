"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./PaymentMethod.view.module.scss";
import cn from "classnames/bind";
import PaymentTitle from "./PaymentTitle.view";

const cx = cn.bind(styles);

interface PaymentMethodButtonProps {
  icon: string;
  method: string;
  router: string;
}

const PaymentMethodButton = (props: PaymentMethodButtonProps) => {
  const router = useRouter();

  return (
    <div className={cx("button-box")}>
      <button
        type="button"
        className={cx("button-icon")}
        onClick={() => router.push(props.router)}
      >
        <img src={props.icon} alt="method-icon" className={cx("method-icon")} />
        <p>{props.method}</p>
      </button>
    </div>
  );
};

const PaymentMethod = () => {
  const router = useRouter();

  return (
    <PaymentTitle title="결제 수단 선택">
      <div className={cx("button-container")}>
        <PaymentMethodButton
          icon="/icon-asset/payment-asset/card.png"
          method="신용카드"
          router="/dashboard"
        />
        <PaymentMethodButton
          icon="/icon-asset/payment-asset/cash.png"
          method="실시간 계좌이체"
          router="/dashboard"
        />
        <PaymentMethodButton
          icon="/icon-asset/payment-asset/kakaopay.png"
          method="카카오페이"
          router="/dashboard"
        />
      </div>
    </PaymentTitle>
  );
};

export default PaymentMethod;
