"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./CompletePayMethod.view.module.scss";
import cn from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";
import PaymentCard from "./PaymentCard.view";
import { AbleBtn } from "@/app/components/Button/AbleBtn";

const cx = cn.bind(styles);

interface CompletePayProps {
  payMethodTitle: string;
  payMethodValue: string;
}

const CompletePayContent = (props: CompletePayProps) => {
  const { payMethodTitle, payMethodValue } = props;

  return (
    <div className={cx("paydata-box")}>
      <p className={cx("title-text")}>{payMethodTitle}</p>
      <p className={cx("value-text")}>{payMethodValue}</p>
    </div>
  );
};

const CompletePayMethod = () => {
  const router = useRouter();

  return (
    <div>
      <PaymentCard title="결제 정보">
        <div className={cx("paydata-container")}>
          <CompletePayContent
            payMethodTitle="결제 수단"
            payMethodValue="신용카드"
          />
          <CompletePayContent
            payMethodTitle="결제 일시"
            payMethodValue="2023-06-12 10:57 AM"
          />
          <CompletePayContent
            payMethodTitle="결제 상태"
            payMethodValue="결제 완료"
          />
          <CompletePayContent
            payMethodTitle="주문 번호"
            payMethodValue="2022122766267190"
          />
        </div>
      </PaymentCard>
    </div>
  );
};

export default CompletePayMethod;
