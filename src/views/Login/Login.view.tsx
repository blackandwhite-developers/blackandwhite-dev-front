"use client";
import React, { useState } from "react";
import styles from "./Login.view.module.scss";
import TextInput from "@/components/input/TextInput/TextInput";
import { AbleBtn } from "@/components/Button/AbleBtn";
import { DisableBtn } from "@/components/Button/DisableBtn";
type LoginViewProps = {
  loginFn: (email: string, password: string) => void;
};
const LoginView = (props: LoginViewProps) => {
  const { loginFn } = props;

  const handleButtonClick = () => {
    loginFn(email, password); // 로그인 함수 호출
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 20) {
      setPassword(e.target.value);
    }
  };

  const isAbleToLogin = password;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>로그인</h1>
        <div className={styles.inputContainer}>
          <TextInput type="text" placeholder="이메일" className={styles.textInput} onChange={handleEmailChange} />
          <TextInput type="password" placeholder="비밀번호" showToggle className={styles.textInput} value={password} onChange={handlePasswordChange} />
        </div>

        <div className={styles.gapcontainer}>
          {isAbleToLogin ? <AbleBtn label="로그인" onClick={handleButtonClick} /> : <DisableBtn label="로그인" />}
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
