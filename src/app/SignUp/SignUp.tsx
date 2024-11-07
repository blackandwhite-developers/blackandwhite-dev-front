"use client"
import React, { useState } from "react";
import styles from "./SignUp.module.scss";
import TextInput from "../components/input/TextInput/TextInput";
import DefaultCheckBox from "../components/checkbox/default/DefaultCheckbox";
import { AbleBtn } from "../components/Button/AbleBtn";
import { DisableBtn } from "../components/Button/DisableBtn";

const SignUp = () => {
    const [finalNextChecked, setFinalNextChecked] = useState(false);
    const isConfirmButtonEnabled = finalNextChecked;

    const handleCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setFinalNextChecked(checked);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>

                <h1>회원가입</h1>
                <TextInput type="text" placeholder="이름" className='textInput' />
                <TextInput type="text" placeholder="이메일 입력" className='textInput' />
                <TextInput type="password" placeholder="비밀번호 (영문과 숫자로 8자 이상)" showToggle className='textInput' />
                <TextInput type="password" placeholder="비밀번호 확인" showToggle className='textInput' />

                <div className={styles.checkBox}>
                    <DefaultCheckBox 
                    label="이용약관에 동의합니다."
                    checked={finalNextChecked}
                    onChange={handleCheckedChange}
                    />
                    <a href="/TermsOfService">보기</a>
                </div>
                {isConfirmButtonEnabled ? (
                    <AbleBtn label="다음" />
                ) : (
                    <DisableBtn label="다음" />
                )}
            </div>
        </div>
    )
}
export default SignUp