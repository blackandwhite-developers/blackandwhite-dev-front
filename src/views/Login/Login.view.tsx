"use client";
import React from "react";
import styles from "./Login.view.module.scss";
import TextInput from "@/app/components/input/TextInput/TextInput";
import { AbleBtn } from "@/app/components/Button/AbleBtn";
import Link from "next/link";

const LoginView = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>로그인</h1>
        <div className={styles.inputContainer}>
          <TextInput type="text" placeholder="이메일" className="textInput" />
          <TextInput type="password" placeholder="비밀번호" showToggle className="textInput" />
        </div>

        <AbleBtn label="로그인" />

        <div className={styles.authLinks}>
          <Link href="/findaccount/findid">아이디찾기</Link>
          <Link href="/findaccount/findpw">비밀번호 찾기</Link>
          <Link href="/signup">회원가입</Link>
        </div>
        <div className={styles.line_with_text}>
          <span>혹은</span>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
