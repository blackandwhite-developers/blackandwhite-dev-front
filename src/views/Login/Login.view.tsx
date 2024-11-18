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
        <div className={styles.inputContainer}>
          <TextInput
            type="text"
            placeholder="이메일"
            className={styles.textInput}
          />
          <TextInput
            type="password"
            placeholder="비밀번호"
            showToggle
            className={styles.textInput}
          />
        </div>

        <div className={styles.gapcontainer}>
          <AbleBtn label="로그인" />
          <div className={styles.authLinks}>
            <a href="./findaccount/findid">아이디찾기</a>
            <a href="./findaccount/findpw">비밀번호 찾기</a>
            <a href="./signup">회원가입</a>
          </div>
        </div>
        <div className={styles.line_with_text}>
          <span>혹은</span>
        </div>
        <div className={styles.another_login}>
          <a href="#">
            <img src="/icon-asset/login-asset/naver.png" alt="naver_login" />
          </a>
          <a href="#">
            <img src="/icon-asset/login-asset/kakao.png" alt="kakao_login" />
          </a>
          <a href="#">
            <img src="/icon-asset/login-asset/apple.png" alt="apple_login" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
