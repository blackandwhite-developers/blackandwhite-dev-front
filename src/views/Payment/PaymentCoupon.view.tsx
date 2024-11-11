"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./PaymentCoupon.view.module.scss";
import cn from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";
import PaymentTitle from "./PaymentTitle.view";

const cx = cn.bind(styles);

const ReservetionUser = () => {
  const router = useRouter();

  return (
    <PaymentTitle title="쿠폰 및 포인트 사용">
      <div className={cx("coupon-container")}>
        <div className={cx("coupon-box")}>
          <p className={cx("coupon-text")}>쿠폰</p>
        </div>
        <div className={cx("botton-box")}>
          <p className={cx("available")}>사용 가능 쿠폰 2장</p>
          <button
            type="button"
            className={cx("arrow-icon")}
            onClick={() => router.push("/payment/coupon")}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className={cx("point-container")}>
        <div className={cx("point-box")}>
          <p className={cx("point-text")}>포인트</p>
          <p className={cx("point-caption")}>1,200P 사용가능</p>
        </div>
        <div className={cx("pointuse-box")}>
          <p className={cx("available")}>-0P</p>
          <button
            type="button"
            className={cx("arrow-icon")}
            onClick={() => router.push("/dashboard")}
          >
            {" "}
            <span>전액 사용</span>
          </button>
        </div>
      </div>
    </PaymentTitle>
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

export default ReservetionUser;
