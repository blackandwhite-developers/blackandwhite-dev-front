import React from "react";
import cn from "classnames/bind";
import styles from "./Nickname.module.scss";
import Header from "@/app/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import { AbleBtn } from "@/app/components/Button/AbleBtn";

const cx = cn.bind(styles);

const Nickname = () => {
    return (
        <div className={cx("SelectNicknameWrapper")}>
            <Header leftIcon={<FaAngleLeft />} />
            <div className={cx("SelectNicknameContent")}>
                <p className={cx("SelectNickname")}>닉네임 입력</p>
                <p className={cx("SelectNicknameInform")}>
                    앱 내에서 사용할 닉네임을 입력해주세요. 닉네임을 입력하지
                    않을 시, 랜덤생성이 됩니다.
                </p>
            </div>
            <div className={cx("InputWrapper")}>
                <label
                    htmlFor="nickname"
                    className={cx("NicknameInput")}
                ></label>
                <input
                    id="nickname"
                    type="text"
                    className={cx("NicknameInput")}
                />
            </div>
            <div className={cx("SelectGenderNextBtn")}>
                <AbleBtn label={"다음"} />
            </div>
        </div>
    );
};

export default Nickname;

//에러문구는 아직 미작업 (백엔드 완료되면 작업!)
