"use client";

import React, { useState } from "react";
import cn from "classnames/bind";
import styles from "./NewPassword.module.scss";
import Header from "@/app/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import { AbleBtn } from "@/app/components/Button/AbleBtn";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";

const cx = cn.bind(styles);

const NewPassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className={cx("FindPwWrapper")}>
            <Header leftIcon={<FaAngleLeft />} />
            <div className={cx("FindPwContent")}>
                <p className={cx("FindPw")}>새 비밀번호</p>
                <p className={cx("FindPwInform")}>
                    <span className={cx("Highlight")}>새 비밀번호</span>를
                    설정해주세요.
                </p>
            </div>
            <div className={cx("PwInputWrapper")}>
                <label htmlFor="Pw"></label>
                <div className={cx("PasswordInputContainer")}>
                    <input
                        id="Pw"
                        type={showPassword ? "text" : "password"}
                        placeholder="비밀번호 (영문과 숫자로 8자 이상)"
                        className={cx("PwInput")}
                    />
                    <span
                        className={cx("PasswordToggleIcon")}
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? (
                            <IoEyeOutline style={{ color: "#8728ff" }} />
                        ) : (
                            <FaRegEyeSlash style={{ color: "#999999" }} />
                        )}
                    </span>
                </div>

                <label htmlFor="phone"></label>
                <div className={cx("PasswordInputContainer")}>
                    <input
                        id="phone"
                        type={showPassword ? "text" : "password"} //
                        placeholder="비밀번호 확인"
                        className={cx("PwCheckInput")}
                    />
                    <span
                        className={cx("PasswordToggleIcon")}
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? (
                            <IoEyeOutline style={{ color: "#8728ff" }} />
                        ) : (
                            <FaRegEyeSlash style={{ color: "#999999" }} />
                        )}
                    </span>
                </div>
            </div>
            <div className={cx("ChangePwBtn")}>
                <AbleBtn label={"비밀번호 변경"} />
            </div>
        </div>
    );
};

export default NewPassword;

//에러문구는 아직 작성 x
