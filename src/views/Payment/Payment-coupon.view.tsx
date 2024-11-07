"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./Payment-user.view.module.scss";
import cn from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";

const cx = cn.bind(styles);

const ReservetionUser = () => {
  const router = useRouter();

  return (
    <div className={cx("Wrapper")}>
      <div className={cx("reservation-person")}>
        <p className={cx("information-title")}>예약자 정보*</p>
      </div>
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
    </div>
  );
};

export default ReservetionUser;
