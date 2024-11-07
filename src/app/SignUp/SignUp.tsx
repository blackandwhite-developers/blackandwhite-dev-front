"use client"
import React from "react";
import styles from "./SignUp.module.scss";
import TextInput from "../components/input/TextInput/TextInput";
import DefaultCheckBox from "../components/checkbox/default/DefaultCheckbox";
import DefaultAccordion from "../components/arcodian/default/DefaultAccordion";
import TermsOfService from "./TermsOfService";
import { AbleBtn } from "../components/Button/AbleBtn";

const SignUp = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                
                <h1>회원가입</h1>
                <TextInput type="text" placeholder="이름" className='textInput' />
                <TextInput type="text" placeholder="이메일 입력" className='textInput' />
                <TextInput type="password" placeholder="비밀번호 (영문과 숫자로 8자 이상)" showToggle className='textInput' />
                <TextInput type="password" placeholder="비밀번호 확인" showToggle className='textInput' />

                <DefaultAccordion
                    isHeaderTransparent
                    title={
                        <React.Fragment>
                            <DefaultCheckBox label="이용약관에 동의합니다." />
                        </React.Fragment>
                    }
                >
                    <TermsOfService />
                </DefaultAccordion>

                <AbleBtn label="다음"/> 
            </div>
        </div>
    )
}
export default SignUp