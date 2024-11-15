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

    const generateRandomNickname = () => {
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let randomNickname = "";
        for (let i = 0; i < 8; i++) {
            randomNickname += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }
        return randomNickname;
    };

    useEffect(() => {
        const randomNickname = generateRandomNickname();
        setNickname(randomNickname);
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value);
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
                />
            </div>

            <div className={cx("SelectGenderNextBtn")}>
                {nickname ? (
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
