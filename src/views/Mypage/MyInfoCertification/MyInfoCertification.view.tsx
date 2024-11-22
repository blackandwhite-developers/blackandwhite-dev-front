"use client";

import React, { useState } from "react";
import cn from "classnames/bind";
import styles from "./MyInfoCertification.module.scss";
import { FaAngleLeft } from "react-icons/fa6";
import Header from "@/components/Header/Header";
import { AbleBtn } from "@/components/Button/AbleBtn";
import { DisableBtn } from "@/components/Button/DisableBtn";
import { useRouter } from "next/navigation";
import useMyInfo from "@/app/hooks/useMyInfo";

const cx = cn.bind(styles);

const MyInfoCertification = () => {
  const { info } = useMyInfo();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  /** 뒤로가기 */
  const handleGoBack = () => {
    router.back();
  };

  const validInfo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(info);
    if (name === info?.name && phone === info?.profile.phone) {
      router.push("/mypage/certificationComplete");
    } else {
      alert("정보가 일치하지 않습니다.");
    }
  };

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
    const input = e.target.value;
    const previousValue = e.target.defaultValue;
    let newPhone = input.replace(/[^0-9]/g, "");

    if (newPhone.length > 11) {
      newPhone = newPhone.slice(0, 11);
    }

    if (newPhone.length > 6) {
      newPhone = `${newPhone.slice(0, 3)}-${newPhone.slice(3, 7)}-${newPhone.slice(7)}`;
    } else if (newPhone.length > 3) {
      newPhone = `${newPhone.slice(0, 3)}-${newPhone.slice(3)}`;
    }

    if (previousValue && input.length < previousValue.length) {
      if (previousValue.endsWith("-") && !input.endsWith("-")) {
        newPhone = input.slice(0, -1);
      }
    }

    setPhone(newPhone);
  };

  const isFormValid = name.length > 0 && phone.length > 0;
  return (
    <div className={cx("CertificationWrapper")}>
      <Header title={"내정보 수정"} leftIcon={<FaAngleLeft onClick={handleGoBack} />} />
      <h1 className={cx("UserInfoCheck")}>회원정보 확인</h1>
      <p>
        정보를 안전하게 보호하기 위해 <br></br>본인 실명과 핸드폰 번호를 입력해주세요.
      </p>
      <div className={cx("CertificationInputWrapper")}>
        <div className={cx("CertificationInputTitle")}>
          <label htmlFor="name">이름</label>
          <input id="id" type="text" className={cx("IdInput")} value={name} onChange={handleNameChange} maxLength={20} />
        </div>
        <div className={cx("CertificationInputTitle")}>
          <label htmlFor="phone">휴대폰 번호</label>
          <input id="phone" type="text" className={cx("PhoneInput")} value={phone} onChange={handlePhoneChange} />
        </div>
      </div>

      <div className={cx("AbleBtnWrapper")}>{isFormValid ? <AbleBtn label={"확인"} onClick={validInfo} /> : <DisableBtn label={"확인"} />}</div>
    </div>
  );
};

export default MyInfoCertification;
