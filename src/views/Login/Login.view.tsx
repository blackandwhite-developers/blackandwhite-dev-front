"use client";
import React, { useState } from "react";
import styles from "./Login.view.module.scss";
import TextInput from "@/app/components/input/TextInput/TextInput";
import { AbleBtn } from "@/app/components/Button/AbleBtn";
import { DisableBtn } from "@/app/components/Button/DisableBtn";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 20) {
      setEmail(e.target.value);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 20) {
      setPassword(e.target.value);
    }
  };

  const isAbleToLogin = email && password;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>로그인</h1>
        <div className={styles.inputContainer}>
          <TextInput type="text" placeholder="이메일" className={styles.textInput} value={email} onChange={handleEmailChange} />
          <TextInput type="password" placeholder="비밀번호" showToggle className={styles.textInput} value={password} onChange={handlePasswordChange} />
        </div>

        <div className={styles.gapcontainer}>
          {isAbleToLogin ? <AbleBtn label="로그인" /> : <DisableBtn label="로그인" />}
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
