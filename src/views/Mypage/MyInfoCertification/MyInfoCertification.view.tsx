"use client";

import React from "react";
import cn from "classnames/bind";
import styles from "./MyInfoCertification.module.scss";
import { FaAngleLeft } from "react-icons/fa6";
import Header from "@/app/components/Header/Header";
import { AbleBtn } from "@/app/components/Button/AbleBtn";

const cx = cn.bind(styles);

const MyInfo = () => {
    return (
        <div className={cx("CertificationWrapper")}>
            <Header title={"내정보 수정"} leftIcon={<FaAngleLeft />} />
            <h1 className={cx("UserInfoCheck")}>회원정보 확인</h1>
            <p>
                정보를 안전하게 보호하기 위해 보인인 실명과 핸드폰 뒷자리 번호를
                입력해주세요.
            </p>
            <div className={cx("CertificationInputWrapper")}>
                <div className={cx("CertificationInputTitle")}>
                    <label htmlFor="name">이름</label>
                    <input type="text" />
                </div>
                <div className={cx("CertificationInputTitle")}>
                    <label htmlFor="phone">휴대전화 번호</label>
                    <input type="text" />
                </div>
            </div>
            <div className={cx("AbleBtnWrapper")}>
                <AbleBtn label={"확인"} />
            </div>
        </div>
    );
};

export default MyInfo;
