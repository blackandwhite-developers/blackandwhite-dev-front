"use client";

import React, { useState, useEffect } from "react";
import cn from "classnames/bind";
import styles from "./NewPassword.module.scss";
import Header from "@/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import { AbleBtn } from "@/components/Button/AbleBtn";
import { DisableBtn } from "@/components/Button/DisableBtn";
import TextInput from "@/components/input/TextInput/TextInput";
import { useRouter } from "next/navigation";

const cx = cn.bind(styles);

type NewPasswordViewProps = {
  resetPasswordFn: (password: string) => Promise<boolean>;
};

const NewPassword = (props: NewPasswordViewProps) => {
  /** 뒤로가기 */
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  const { resetPasswordFn } = props;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState(false);

  // 비밀번호 유효성 검사 [영문, 숫자 조합 8자 이상]
  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[\w\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  useEffect(() => {
    setIsValid(password.length > 0 && confirmPassword.length > 0);
  }, [password, confirmPassword]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setErrorMessage("영문, 숫자를 조합하여 8자 이상으로 입력해주세요.");
    } else if (password !== confirmPassword) {
      setErrorMessage("비밀번호가 일치하지 않습니다.");
    } else {
      setErrorMessage("");
      const isSuccess = await resetPasswordFn(password);
      if (!isSuccess) {
        alert("비밀번호 변경에 실패했습니다.");
        return;
      }
      router.push("/login");
    }
  };

  return (
    <div className={cx("FindPwWrapper")}>
      <Header leftIcon={<FaAngleLeft onClick={handleGoBack} />} />
      <div className={cx("FindPwContent")}>
        <p className={cx("FindPw")}>비밀번호 찾기</p>
        <p className={cx("FindPwInform")}>
          <span className={cx("Highlight")}>새 비밀번호</span>를 설정해주세요.
        </p>
      </div>
      <div className={cx("PwInputWrapper")}>
        <div className={cx("PasswordInputContainer")}>
          <TextInput type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange} showToggle />
        </div>

        <div className={cx("PasswordInputContainer")}>
          <TextInput type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={handleConfirmPasswordChange} showToggle />

          {errorMessage && confirmPassword && <p className={cx("ErrorMessage")}>{errorMessage}</p>}
        </div>
      </div>
      <div className={cx("ChangePwBtn")}>{isValid ? <AbleBtn label={"비밀번호 변경"} onClick={handleSubmit} /> : <DisableBtn label={"비밀번호 변경"} />}</div>
    </div>
  );
};

export default NewPassword;
