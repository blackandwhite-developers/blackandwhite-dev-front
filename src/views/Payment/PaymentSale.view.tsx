"use client";
import React, { useState } from "react";
import styles from "./PaymentSale.view.module.scss";
import cn from "classnames/bind";
import PaymentCard from "./PaymentCard.view";

const cx = cn.bind(styles);

interface PaymentSaleRowProps {
  title: string;
  amount: number;
}

const PaymentSaleRow = (props: PaymentSaleRowProps) => {
  return (
    <div className={cx("box")}>
      <p className={cx("text")}>{props.title}</p>
      <p className={cx("amount")}>{props.amount.toLocaleString()}원</p>
    </div>
  );
};

const PaymentSale = () => {
  return (
    <PaymentCard title="할인 및 결제 정보">
      <div className={cx("sale-container")}>
        <PaymentSaleRow title="결제 금액" amount={234000} />
        <PaymentSaleRow title="할인 금액" amount={-9000} />
        <div className={cx("border")}></div>
        <PaymentSaleRow title="총 결제 금액" amount={225000} />
      </div>
    </PaymentCard>
  );
};

export default PaymentSale;
