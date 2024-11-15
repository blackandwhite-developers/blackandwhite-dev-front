"use client";

import React from "react";
import cn from "classnames/bind";
import styles from "./NewPassword.module.scss";
import Header from "@/app/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import { AbleBtn } from "@/app/components/Button/AbleBtn";
import TextInput from "@/app/components/input/TextInput/TextInput";
import { useRouter } from "next/navigation";
import Link from "next/link";

const cx = cn.bind(styles);

const NewPassword = () => {
    /** 뒤로가기 */
    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    };

    return (
        <div className={cx("FindPwWrapper")}>
            <Header leftIcon={<FaAngleLeft onClick={handleGoBack} />} />
            <div className={cx("FindPwContent")}>
                <p className={cx("FindPw")}>비밀번호 찾기</p>
                <p className={cx("FindPwInform")}>
                    <span className={cx("Highlight")}>새 비밀번호</span>를
                    설정해주세요.
                </p>
            </div>
            <div className={cx("PwInputWrapper")}>
                <label htmlFor="Pw"></label>
                <div className={cx("PasswordInputContainer")}>
                    <TextInput
                        type="password"
                        placeholder="비밀번호 (영문과 숫자로 8자 이상)"
                        showToggle
                    />
                </div>

                <label htmlFor="phone"></label>
                <div className={cx("PasswordInputContainer")}>
                    <TextInput
                        type="password"
                        placeholder="비밀번호"
                        showToggle
                    />
                </div>
            </div>
            <div className={cx("ChangePwBtn")}>
                <Link href="/login">
                    <AbleBtn label={"비밀번호 변경"} />
                </Link>
            </div>
        </div>
    );
};

export default NewPassword;

//에러문구는 아직 작성 x
