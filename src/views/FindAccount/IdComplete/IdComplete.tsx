import React from "react";
import cn from "classnames/bind";
import styles from "./IdComplete.module.scss";
import Header from "@/app/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import { FindPasswordBtn } from "@/app/components/Button/FindPasswordBtn";
import { LoginBtn } from "@/app/components/Button/LoginBtn";

const cx = cn.bind(styles);

const FIndId = () => {
    return (
        <div className={cx("IdCompleteWrapper")}>
            <Header leftIcon={<FaAngleLeft />} />
            <div className={cx("IdCompleteContent")}>
                <p className={cx("IdComplete")}>아이디 찾기</p>
                <p className={cx("IdCompleteInform")}>
                    회원님이 가입하신 아이디 이력입니다.
                </p>
            </div>
            <div className={cx("UserIdWrapper")}>
                <p className={cx("UserId")}>koko****@email.com</p>
                <p className={cx("UserSignupDate")}>2024.11.12 가입</p>
            </div>
            <div className={cx("IncompleteBtn")}>
                <FindPasswordBtn label={"비밀번호 찾기"} />
                <LoginBtn label={"로그인하기"} />
            </div>
        </div>
    );
};

export default FIndId;
