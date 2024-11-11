"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./PaymentUser.view.module.scss";
import cn from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";
import PaymentCard from "./PaymentCard.view";

const cx = cn.bind(styles);

const ReservetionUser = () => {
  const router = useRouter();

  return (
    <PaymentCard title="예약자 정보" required={true}>
      <div className={cx("userdata-container")}>
        <div className={cx("userdata-box")}>
          <p className={cx("username")}>허태영</p>
          <p className={cx("phonenumber")}>010-1234-5678</p>
        </div>
        <button
          type="button"
          className={cx("arrow-icon")}
          onClick={() => router.push("/dashboard")}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </PaymentCard>
  );
};

export default ReservetionUser;
