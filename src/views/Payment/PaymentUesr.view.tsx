"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./PaymentUser.view.module.scss";
import cn from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";
import PaymentCard from "./PaymentCard.view";

const cx = cn.bind(styles);

interface UserContentProps {
  userName: string;
  userPhoneNumber: string;
}

const UserContent = (props: UserContentProps) => {
  const { userName, userPhoneNumber } = props;
  const router = useRouter();

  return (
    <div className={cx("userdata-container")}>
      <div className={cx("userdata-box")}>
        <p className={cx("username")}>{userName}</p>
        <p className={cx("phonenumber")}>{userPhoneNumber}</p>
      </div>
      <button
        type="button"
        className={cx("arrow-icon")}
        onClick={() => router.push("/dashboard")}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

const ReservetionUser = () => {
  return (
    <PaymentCard title="예약자 정보" required={true}>
      <UserContent userName="허태영" userPhoneNumber="010-1234-5678" />
    </PaymentCard>
  );
};

export default ReservetionUser;
