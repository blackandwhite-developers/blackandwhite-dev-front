"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./Payment-user.module.scss";
import cn from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";

const cx = cn.bind(styles);

const ReservetionUser = () => {
  const router = useRouter();

  return (
    <div className={cx("Wrapper")}>
      <div className={cx("reservation-person")}>
        <p className={cx("username")}>예약자 정보*</p>
      </div>
      <div className={cx("reservationdate-container")}>
        <div className={cx("reservationdate-box")}>
          <p className={cx("check")}>허태영</p>
          <p className={cx("date-text")}>010-1234-5678</p>
        </div>
        <button
          type="button"
          className={cx("arrow-icon")}
          onClick={() => router.push("/dashboard")}
        >
          <IoIosArrowForward />
        </button>
        {/* <a href="#" className={cx("arrow-icon")}>
          <IoIosArrowForward />
        </a> */}
      </div>
    </div>
  );
};

export default ReservetionUser;
