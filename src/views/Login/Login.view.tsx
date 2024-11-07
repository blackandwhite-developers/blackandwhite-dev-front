"use client";
import React from "react";
import styles from "./Login.view.module.scss";
import TextInput from "@/app/components/input/TextInput/TextInput";
import { AbleBtn } from "@/app/components/Button/AbleBtn";

const LoginView = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>로그인</h1>
        <TextInput type="text" placeholder="이메일" className="textInput" />
        <TextInput type="password" placeholder="비밀번호" showToggle className="textInput" />

        <AbleBtn label="로그인" />
        <div className={styles.authLinks}>
          <a href="./FindID">아이디찾기</a>
          <a href="./FindPW">비밀번호 찾기</a>
          <a href="./signup">회원가입</a>
        </div>
        <div className={styles.line_with_text}>
          <span>혹은</span>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
