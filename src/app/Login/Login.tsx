"use client"
import React from 'react';
import styles from './Login.module.scss';
import TextInput from "../components/TextInput/TextInput";

const Login = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>로그인</h1>
        <TextInput type="text" placeholder="이메일" />
        <TextInput type="password" placeholder="비밀번호" showToggle />

                <input type="button" value="로그인" />
                <div className={styles.authLinks}>
                    <a href="./FindID">아이디찾기</a>
                    <a href="./FindPW">비밀번호 찾기</a>
                    <a href="./Sign">회원가입</a>
                </div>
                
            </div>
        </div>
    );
}

export default Login;
