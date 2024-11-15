"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./PaymentUser.view.module.scss";
import cn from "classnames/bind";
import { IoIosArrowForward } from "react-icons/io";
import PaymentCard from "./PaymentCard.view";

const cx = cn.bind(styles);

export interface UserContentProps {
  userName: string;
  userPhoneNumber: string;
}

export const UserContent = (props: UserContentProps) => {
  const { userName, userPhoneNumber } = props;
  const router = useRouter();

  return (
    <div className={cx("userdata-box")}>
      <p className={cx("username")}>{userName}</p>
      <p className={cx("phonenumber")}>{userPhoneNumber}</p>
    </div>
  );
};

const ReservetionUser = ({ user }: { user: UserContentProps }) => {
  const router = useRouter();

  return (
    <PaymentCard title="예약자 정보" required={true}>
      <div className={cx("userdata-container")}>
        <UserContent
          userName={user.userName}
          userPhoneNumber={user.userPhoneNumber}
        />
        <button
          type="button"
          className={cx("arrow-icon")}
          onClick={() => router.push("/payment/user")}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </PaymentCard>
  );
};

export default ReservetionUser;
