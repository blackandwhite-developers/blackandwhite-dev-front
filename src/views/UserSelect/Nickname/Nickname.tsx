"use client";

import React, { useState, useEffect } from "react";
import cn from "classnames/bind";
import styles from "./Nickname.module.scss";
import Header from "@/app/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import { AbleBtn } from "@/app/components/Button/AbleBtn";
import { DisableBtn } from "@/app/components/Button/DisableBtn";
import { useRouter } from "next/navigation";
import Link from "next/link";

const cx = cn.bind(styles);

const Nickname = () => {
    const router = useRouter();
    /** 뒤로가기 */
    const handleGoBack = () => {
        router.back();
    };

    const [nickname, setNickname] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const generateRandomNickname = () => {
        const lodgingWords = [
            "편안한방",
            "여유로운숙소",
            "힐링스테이",
            "호캉스",
            "안락한방",
            "포근한숙소",
            "편안한집",
            "휴식",
            "여유",
        ];

        const randomIndex = Math.floor(Math.random() * lodgingWords.length);
        const randomWord = lodgingWords[randomIndex];
        const randomNumber = Math.floor(Math.random() * 100000);

        return `${randomWord}${randomNumber}`;
    };

    useEffect(() => {
        const randomNickname = generateRandomNickname();
        setNickname(randomNickname);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newNickname = e.target.value;

        // 줄바꿈 제거
        newNickname = newNickname.replace(/\n/g, "");

        if (newNickname.length <= 20) {
            setNickname(newNickname);
        }

        // 국문/숫자 외의 문자 입력 시 오류 메시지
        const regex = /^[가-힣0-9]*$/;
        if (!regex.test(newNickname)) {
            setErrorMessage("닉네임은 국문/숫자만 입력 가능합니다.");
        } else {
            setErrorMessage("");
        }
    };

    return (
        <div className={cx("SelectNicknameWrapper")}>
            <Header leftIcon={<FaAngleLeft onClick={handleGoBack} />} />
            <div className={cx("SelectNicknameContent")}>
                <p className={cx("SelectNickname")}>닉네임 입력</p>
                <p className={cx("SelectNicknameInform")}>
                    앱 내에서 사용할 닉네임을 입력해주세요. 닉네임을 입력하지
                    않을 시, 랜덤생성이 됩니다.
                </p>
            </div>
            <div className={cx("InputWrapper")}>
                <label htmlFor="nickname"></label>
                <input
                    id="nickname"
                    type="text"
                    className={cx("NicknameInput")}
                    value={nickname}
                    onChange={handleInputChange}
                    maxLength={20}
                />
            </div>
            {errorMessage && (
                <p className={cx("ErrorMessage")}>{errorMessage}</p>
            )}

            <div className={cx("SelectGenderNextBtn")}>
                {nickname && !errorMessage ? (
                    <Link href="/login">
                        <AbleBtn label={"다음"} />
                    </Link>
                ) : (
                    <DisableBtn label={"다음"} />
                )}
            </div>
        </div>
    );
};

export default Nickname;
