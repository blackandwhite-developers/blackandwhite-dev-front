"use client";

import React from "react";
import cn from "classnames/bind";
import styles from "./IdComplete.module.scss";
import Header from "@/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import { FindPasswordBtn } from "@/components/Button/FindPasswordBtn";
import { LoginBtn } from "@/components/Button/LoginBtn";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { findIdAtom } from "@/atoms/findIdAtom";
import { useAtom } from "jotai";

const cx = cn.bind(styles);

const FIndId = () => {
  const [findId] = useAtom(findIdAtom);
  const userId = findId.email;
  const signupDate = findId.createdAt;
  /** 뒤로가기 */
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className={cx("IdCompleteWrapper")}>
      <Header leftIcon={<FaAngleLeft onClick={handleGoBack} />} />
      <div className={cx("IdCompleteContent")}>
        <p className={cx("IdComplete")}>아이디 찾기</p>
        <p className={cx("IdCompleteInform")}>회원님이 가입하신 아이디 이력입니다.</p>
      </div>
      <div className={cx("UserIdWrapper")}>
        <p className={cx("UserId")}>{userId}</p>
        <p className={cx("UserSignupDate")}>{signupDate ? new Date(signupDate).toLocaleDateString() : "Invalid date"}</p>
      </div>
      <div className={cx("IncompleteBtn")}>
        <Link href="/findaccount/findpw">
          <FindPasswordBtn label={"비밀번호 찾기"} />
        </Link>
        <Link href="/login">
          <LoginBtn label={"로그인하기"} />
        </Link>
      </div>
    </div>
  );
};

export default FIndId;
