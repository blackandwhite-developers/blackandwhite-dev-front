"use client";

import React, { useState } from "react";
import cn from "classnames/bind";
import styles from "./Phone.module.scss";
import Header from "@/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import { AbleBtn } from "@/components/Button/AbleBtn";
import { DisableBtn } from "@/components/Button/DisableBtn";
import { useRouter } from "next/navigation";

const cx = cn.bind(styles);

type PhoneProps = {
  PhoneFunc: (phone: string) => void;
};
const Phone = (props: PhoneProps) => {
  const { PhoneFunc } = props;
  const router = useRouter();
  /** 뒤로가기 */
  const handleGoBack = () => {
    router.back();
  };
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newName = e.target.value;

    // 줄바꿈 제거
    newName = newName.replace(/\n/g, "");

    if (newName.length <= 20) {
      setName(newName);
    }
  };

  // 전화번호 [000-0000-0000] 하이픈 자동 입력
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newPhone = e.target.value.replace(/[^0-9]/g, "");

    if (newPhone.length <= 11) {
      if (newPhone.length > 6) {
        newPhone = `${newPhone.slice(0, 3)}-${newPhone.slice(
          3,
          7
        )}-${newPhone.slice(7, 11)}`;
      } else if (newPhone.length > 3) {
        newPhone = `${newPhone.slice(0, 3)}-${newPhone.slice(3, 6)}`;
      }
      setPhone(newPhone);
    }
  };

  const isFormValid = name.length > 0 && phone.length > 0;

  const onPhone = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (phone === null) {
      return;
    }
    PhoneFunc(phone);
  };

  return (
    <div className={cx("SelectPhoneWrapper")}>
      <Header leftIcon={<FaAngleLeft onClick={handleGoBack} />} />
      <div className={cx("SelectPhoneContent")}>
        <p className={cx("SelectPhone")}>
          휴대폰 번호를 <br></br>입력해주세요.
        </p>
      </div>
      <div className={cx("InputWrapper")}>
        <label htmlFor="name"></label>
        <input
          id="name"
          type="text"
          className={cx("PhoneInput")}
          maxLength={20}
          placeholder="이름"
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className={cx("InputWrapper")}>
        <label htmlFor="nickname"></label>
        <input
          id="nickname"
          type="text"
          className={cx("PhoneInput")}
          maxLength={20}
          value={phone}
          onChange={handlePhoneChange}
          placeholder="휴대폰 번호"
        />
      </div>

      <div className={cx("PhoneNextBtn")}>
        {isFormValid ? (
          <AbleBtn label={"확인"} onClick={onPhone} />
        ) : (
          <DisableBtn label={"확인"} />
        )}
      </div>
    </div>
  );
};

export default Phone;
