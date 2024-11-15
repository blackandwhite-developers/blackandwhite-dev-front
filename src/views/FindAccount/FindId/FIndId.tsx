"use client";

import React from "react";
import cn from "classnames/bind";
import styles from "./FIndId.module.scss";
import Header from "@/app/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import { AbleBtn } from "@/app/components/Button/AbleBtn";
import Link from "next/link";
import { useRouter } from "next/navigation";

const cx = cn.bind(styles);

const FIndId = () => {
    /** 뒤로가기 */
    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    };

    return (
        <div className={cx("FindIdWrapper")}>
            <Header leftIcon={<FaAngleLeft onClick={handleGoBack} />} />
            <div className={cx("FindIdContent")}>
                <p className={cx("FindId")}>아이디 찾기</p>
                <p className={cx("FindIdInform")}>
                    아이디를 찾기 위해서 <br />
                    <span className={cx("Highlight")}>이름과 휴대폰 번호</span>
                    를 입력해주세요.
                </p>
            </div>
            <div className={cx("IdInputWrapper")}>
                <label htmlFor="id"></label>

                <input
                    id="id"
                    type="text"
                    placeholder="이름"
                    className={cx("IdInput")}
                />
                <label htmlFor="phone"></label>

                <input
                    id="phone"
                    type="text"
                    placeholder="휴대폰 번호"
                    className={cx("PhoneInput")}
                />
            </div>
            <div className={cx("FindIdNextBtn")}>
                <Link href="/findaccount/idcomplete">
                    <AbleBtn label={"확인"} />
                </Link>
            </div>
        </div>
    );
};

export default FIndId;
