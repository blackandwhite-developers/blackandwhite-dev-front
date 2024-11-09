"use client";
import React, { useState } from "react";
import styles from "./PaymentSale.view.module.scss";
import cn from "classnames/bind";
import PaymentCard from "./PaymentCard.view";

const cx = cn.bind(styles);

const PaymentSale = () => {
  return (
    <PaymentCard title="할인 및 결제 정보">
      <div className={cx("sale-container")}>
        <div className={cx("box")}>
          <p className={cx("text")}>결제 금액</p>
          <p className={cx("amount")}>234,000원</p>
        </div>
        <div className={cx("box")}>
          <p className={cx("text")}>할인 금액</p>
          <p className={cx("amount")}>-9,000원</p>
        </div>
        <div className={cx("border")}></div>
        <div className={cx("box")}>
          <p className={cx("text")}>총 결제 금액</p>
          <p className={cx("amount")}>225,000원</p>
        </div>
      </div>
    </PaymentCard>
  );
};

export default PaymentSale;
