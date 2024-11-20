"use client";

import React, { useState } from "react";
import cn from "classnames/bind";
import styles from "./FIndId.module.scss";
import Header from "@/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import { AbleBtn } from "@/components/Button/AbleBtn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { DisableBtn } from "@/components/Button/DisableBtn";

const cx = cn.bind(styles);

const FIndId = () => {
  const router = useRouter();
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
        newPhone = `${newPhone.slice(0, 3)}-${newPhone.slice(3, 7)}-${newPhone.slice(7, 11)}`;
      } else if (newPhone.length > 3) {
        newPhone = `${newPhone.slice(0, 3)}-${newPhone.slice(3, 6)}`;
      }
      setPhone(newPhone);
    }
  };

  const isFormValid = name.length > 0 && phone.length > 0;

  return (
    <div className={cx("FindIdWrapper")}>
      <Header leftIcon={<FaAngleLeft onClick={handleGoBack} />} />
      <div className={cx("FindIdContent")}>
        <p className={cx("FindId")}>아이디 찾기</p>
        <p className={cx("FindIdInform")}>
          아이디를 찾기 위해서 <br />
          <span className={cx("Highlight")}>이름과 휴대폰 번호</span>를 입력해주세요.
        </p>
      </div>
      <div className={cx("IdInputWrapper")}>
        <label htmlFor="id"></label>
        <input id="id" type="text" placeholder="이름" className={cx("IdInput")} value={name} onChange={handleNameChange} maxLength={20} />
        <label htmlFor="phone"></label>
        <input id="phone" type="text" placeholder="휴대폰 번호" className={cx("PhoneInput")} value={phone} onChange={handlePhoneChange} />
      </div>
      <div className={cx("FindIdNextBtn")}>
        {isFormValid ? (
          <Link href="/findaccount/idcomplete">
            <AbleBtn label={"확인"} />
          </Link>
        ) : (
          <DisableBtn label={"확인"} />
        )}
      </div>
    </div>
  );
};

export default FIndId;
