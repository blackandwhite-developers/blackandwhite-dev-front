"use client";

import React, { useState, useEffect } from "react";
import cn from "classnames/bind";
import styles from "./FIndPw.module.scss";
import Header from "@/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import { AbleBtn } from "@/components/Button/AbleBtn";
import { DisableBtn } from "@/components/Button/DisableBtn";
import { useRouter } from "next/navigation";
import { findIdAtom } from "@/atoms/findIdAtom";
import { useAtom } from "jotai";

const cx = cn.bind(styles);

type FindPwViewProps = {
  findPwFn: (
    email: string,
    name: string
  ) => Promise<{
    result: boolean;
    error: unknown;
  }>;
};

const FIndPw = (props: FindPwViewProps) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [findId, setFindId] = useAtom(findIdAtom);
  const { findPwFn } = props;
  /** 뒤로가기 */
  const handleGoBack = () => {
    router.back();
  };

  useEffect(() => {
    if (findId.email !== "") {
      setFindId({
        email: "",
        createdAt: new Date(),
      }); // 초기화
    }
  }, []);

  const handleFindPw = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const isSuccess = await findPwFn(email, name);
    if (!isSuccess.result) {
      alert(isSuccess.error);
      return;
    }
    alert("비밀번호 재설정 메일이 발송되었습니다.");
  };

  const validateInputs = () => {
    const isValidInput = (input: string) => input.length > 0 && input.length <= 20 && !input.includes("\n");
    setIsValid(isValidInput(name) && isValidInput(email));
  };

  useEffect(() => {
    validateInputs();
  }, [name, email]);

  return (
    <div className={cx("FindPwWrapper")}>
      <Header leftIcon={<FaAngleLeft onClick={handleGoBack} />} />
      <div className={cx("FindPwContent")}>
        <p className={cx("FindPw")}>비밀번호 찾기</p>
        <p className={cx("FindPwInform")}>
          비밀번호 재설정을 위해서 <br />
          <span className={cx("Highlight")}>이름과 이메일주소</span>를 입력해주세요.
        </p>
      </div>
      <div className={cx("PwInputWrapper")}>
        <label htmlFor="Pw"></label>
        <input
          id="name"
          type="text"
          placeholder="이름"
          maxLength={20}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            validateInputs();
          }}
          className={cx("PwInput")}
        />
        <label htmlFor="phone"></label>
        <input
          id="email"
          type="text"
          placeholder="이메일"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateInputs();
          }}
          className={cx("EmailInput")}
        />
      </div>
      <div className={cx("FindPwNextBtn")}>{isValid ? <AbleBtn label={"확인"} onClick={handleFindPw} /> : <DisableBtn label={"확인"} />}</div>
    </div>
  );
};

export default FIndPw;
