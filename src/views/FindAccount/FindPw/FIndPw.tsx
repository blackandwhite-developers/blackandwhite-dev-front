"use client";

import React, { useState } from "react";
import cn from "classnames/bind";
import styles from "./FIndPw.module.scss";
import Header from "@/app/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import { AbleBtn } from "@/app/components/Button/AbleBtn";
import { DisableBtn } from "@/app/components/Button/DisableBtn"; // Assuming you have this component
import { useRouter } from "next/navigation";
import Link from "next/link";

const cx = cn.bind(styles);

const FIndPw = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(false);

    /** 뒤로가기 */
    const handleGoBack = () => {
        router.back();
    };

    const validateInputs = () => {
        const isValidInput = (input: string) =>
            input.length > 0 && input.length <= 20 && !input.includes("\n");

        setIsValid(isValidInput(name) && isValidInput(email));
    };

    return (
        <div className={cx("FindPwWrapper")}>
            <Header leftIcon={<FaAngleLeft onClick={handleGoBack} />} />
            <div className={cx("FindPwContent")}>
                <p className={cx("FindPw")}>비밀번호 찾기</p>
                <p className={cx("FindPwInform")}>
                    비밀번호 찾기 위해서 <br />
                    <span className={cx("Highlight")}>이름과 이메일주소</span>를
                    입력해주세요.
                </p>
            </div>
            <div className={cx("PwInputWrapper")}>
                <label htmlFor="Pw"></label>
                <input
                    id="name"
                    type="text"
                    placeholder="이름"
                    maxLength={20}
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        validateInputs();
                    }}
                    className={cx("PwInput")}
                />
                <label htmlFor="phone"></label>
                <input
                    id="email"
                    type="text"
                    placeholder="이메일"
                    maxLength={20}
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        validateInputs();
                    }}
                    className={cx("EmailInput")}
                />
            </div>
            <div className={cx("FindPwNextBtn")}>
                {isValid ? (
                    <Link href="/findaccount/newpassword">
                        <AbleBtn label={"확인"} />
                    </Link>
                ) : (
                    <DisableBtn label={"확인"} />
                )}
            </div>
        </div>
    );
};

export default FIndPw;
