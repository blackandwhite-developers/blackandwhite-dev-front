"use client";
import React, { useState } from "react";
import styles from "./PaymentUserPage.view.module.scss";
import cn from "classnames/bind";
import PaymentCard from "./PaymentCard.view";
import Header from "@/app/components/Header/Header";

const cx = cn.bind(styles);

interface UserContentProps {
  title: string;
  inPutText?: string;
}

const UserCard = (props: UserContentProps) => {
  const { title, inPutText } = props;
  const [inputValue, setInputValue] = useState(inPutText || "");

  const handleClearInput = () => setInputValue("");

  return (
    <div className={cx("user-container")}>
      <span className={cx("title-text")}>{title}</span>
      <label className={cx("custom-input")}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={inPutText}
        />
        {inputValue && (
          <button className={cx("clear-btn")} onClick={handleClearInput}>
            <img
              src="/icon-asset/payment-asset/clearbutton-purple.png"
              alt="clearbutton"
            />
          </button>
        )}
      </label>
    </div>
  );
};

const UserPage = () => {
  return (
    <div className={cx("wrapper")}>
      <UserCard title="예약자 이름" inPutText="허태영" />
      <UserCard title="휴대폰 번호" inPutText="010-1234-5678" />
    </div>
  );
};

export default UserPage;
