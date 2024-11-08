"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./PaymentSale.view.module.scss";
import cn from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";
import PaymentCard from "./PaymentCard.view";

const cx = cn.bind(styles);

const PaymentSale = () => {
  const router = useRouter();

  return (
    <PaymentCard title="할인 및 결제 정보">
      <div className={cx("coupon-container")}>
        <div className={cx("coupon-box")}>
          <p className={cx("coupon-text")}>결제 금액</p>
        </div>
        <div className={cx("botton-box")}>
          <p className={cx("available")}>234,000원</p>
        </div>
      </div>
      <div className={cx("coupon-container")}>
        <div className={cx("coupon-box")}>
          <p className={cx("coupon-text")}>할인 금액</p>
        </div>
        <div className={cx("botton-box")}>
          <p className={cx("available")}>-9,000원</p>
        </div>
      </div>
      <div className={cx("coupon-container")}>
        <div className={cx("coupon-box")}>
          <p className={cx("coupon-text")}>총 결제 금액</p>
        </div>
        <div className={cx("botton-box")}>
          <p className={cx("available")}>225,000원</p>
        </div>
      </div>
    </PaymentCard>
  );

  // return (
  //   <div className={cx("Wrapper")}>
  //     <div className={cx("title-box")}>
  //       <p className={cx("title-text")}>쿠폰 및 포인트 사용</p>
  //     </div>
  //     <div className={cx("coupon-container")}>
  //       <div className={cx("coupon-box")}>
  //         <p className={cx("coupon-text")}>쿠폰</p>
  //       </div>
  //       <div className={cx("botton-box")}>
  //         <p className={cx("available")}>사용 가능 쿠폰 2장</p>
  //         <button
  //           type="button"
  //           className={cx("arrow-icon")}
  //           onClick={() => router.push("/dashboard")}
  //         >
  //           <IoIosArrowForward />
  //         </button>
  //       </div>
  //     </div>
  //     <div className={cx("point-container")}>
  //       <div className={cx("point-box")}>
  //         <p className={cx("point-text")}>포인트</p>
  //         <p className={cx("point-caption")}>1,200P 사용가능</p>
  //       </div>
  //       <div className={cx("pointuse-box")}>
  //         <p className={cx("available")}>-0P</p>
  //         <button
  //           type="button"
  //           className={cx("arrow-icon")}
  //           onClick={() => router.push("/dashboard")}
  //         >
  //           {" "}
  //           <span>전액 사용</span>
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default PaymentSale;
