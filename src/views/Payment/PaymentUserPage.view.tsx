"use client";
import React, { useState } from "react";
import styles from "./PaymentUserPage.view.module.scss";
import cn from "classnames/bind";
// import PaymentCard from "./PaymentCard.view";
// import Header from "@/components/Header/Header";
import { AbleBtn } from "@/components/Button/AbleBtn";

const cx = cn.bind(styles);

export interface UserContentProps {
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

const UserPage = ({ userinput }: { userinput: UserContentProps[] }) => {
  return (
    <div className={cx("wrapper")}>
      {userinput.map((data, index) => {
        return (
          <UserCard key={index} title={data.title} inPutText={data.inPutText} />
        );
      })}
      <div className={cx("button-container")}>
        <AbleBtn label={"설정하기"} />
      </div>
    </div>
  );
};

export default UserPage;
