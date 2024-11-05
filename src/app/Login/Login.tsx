"use client"
import React from 'react';
import { LuEye, LuEyeOff } from "react-icons/lu";
import styles from './Login.module.scss';
import TextInput from "../components/TextInput/TextInput";
import ColorBorderTextInput from '../components/ColorBorderTextInput/ColorBorderTextInput';
import PhoneConfirm from '../components/PhoneConfirm/PhoneConfirm';
import SearchBar from '../components/SearchBar/SearchBar';

const Login = () => {
    console.log(styles);
    const handleResend = () => {
        alert('인증 번호를 재전송했습니다!');
    };

    const handleSearch = (query: string) => {
        alert(`검색어: ${query}`);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1>로그인</h1>
                <TextInput type="text" placeholder="이메일" />
                <TextInput type="password" placeholder="비밀번호" showToggle />


                <ColorBorderTextInput
                    type="text"
                    placeholder="예약자 이름"
                    borderColor="#8728FF" 
                />
                <ColorBorderTextInput
                    type="text"
                    placeholder="010-1234-5678"
                    borderColor="#E5E5E5" 
                />

                <PhoneConfirm onResend={handleResend} />

                <SearchBar onSearch={handleSearch} />

                <input type="button" value="로그인" />
                <a href="./Sign">회원가입</a>
            </div>
        </div>
    );
}

export default Login;
