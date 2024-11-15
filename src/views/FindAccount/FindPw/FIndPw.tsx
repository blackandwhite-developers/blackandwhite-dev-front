"use client";

import React from "react";
import cn from "classnames/bind";
import styles from "./FIndPw.module.scss";
import Header from "@/app/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import { AbleBtn } from "@/app/components/Button/AbleBtn";
import { useRouter } from "next/navigation";
import Link from "next/link";

const cx = cn.bind(styles);

const FIndPw = () => {
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
                    비밀번호 찾기 위해서 <br />
                    <span className={cx("Highlight")}>이름과 이메일주소</span>를
                    입력해주세요.
                </p>
            </div>
            <div className={cx("PwInputWrapper")}>
                <label htmlFor="Pw"></label>

                <input
                    id="id"
                    type="text"
                    placeholder="이름"
                    className={cx("PwInput")}
                />
                <label htmlFor="phone"></label>

                <input
                    id="phone"
                    type="text"
                    placeholder="이메일"
                    className={cx("EmailInput")}
                />
            </div>
            <div className={cx("FindPwNextBtn")}>
                <Link href="/findaccount/newpassword">
                    <AbleBtn label={"확인"} />
                </Link>
            </div>
        </div>
    );
};

export default FIndPw;
