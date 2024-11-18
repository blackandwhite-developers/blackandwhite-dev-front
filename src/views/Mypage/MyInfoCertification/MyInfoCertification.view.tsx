"use client";

import React, { useState, useEffect } from "react";
import cn from "classnames/bind";
import styles from "./MyInfoCertification.module.scss";
import { FaAngleLeft } from "react-icons/fa6";
import Header from "@/app/components/Header/Header";
import { AbleBtn } from "@/app/components/Button/AbleBtn";
import { DisableBtn } from "@/app/components/Button/DisableBtn";
import { useRouter } from "next/navigation";
import Link from "next/link";

const cx = cn.bind(styles);

const MyInfoCertification = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (name && phone) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [name, phone]);

    const handleConfirmation = () => {
        router.push("/mypage/myinfo");
    };

    /** 뒤로가기 */
    const handleGoBack = () => {
        router.back();
    };

    return (
        <div className={cx("CertificationWrapper")}>
            <Header
                title={"내정보 수정"}
                leftIcon={<FaAngleLeft onClick={handleGoBack} />}
            />
            <h1 className={cx("UserInfoCheck")}>회원정보 확인</h1>
            <p>
                정보를 안전하게 보호하기 위해 보인인 실명과 핸드폰 뒷자리 번호를
                입력해주세요.
            </p>
            <div className={cx("CertificationInputWrapper")}>
                <div className={cx("CertificationInputTitle")}>
                    <label htmlFor="name">이름</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className={cx("CertificationInputTitle")}>
                    <label htmlFor="phone">휴대전화 번호</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
            </div>

            <div className={cx("AbleBtnWrapper")}>
                <Link href="/mypage/myinfo">
                    {isButtonDisabled ? (
                        <DisableBtn label={"확인"} />
                    ) : (
                        <AbleBtn label={"확인"} onClick={handleConfirmation} />
                    )}
                </Link>
            </div>
        </div>
    );
};

export default MyInfoCertification;
