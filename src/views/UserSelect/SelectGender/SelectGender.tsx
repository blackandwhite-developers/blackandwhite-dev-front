"use client";

import React, { useState } from "react";
import cn from "classnames/bind";
import styles from "./SelectGender.module.scss";
import Header from "@/app/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import Radio from "@/app/components/radio/Radio";
import { AbleBtn } from "@/app/components/Button/AbleBtn";
import { useRouter } from "next/navigation";
import Link from "next/link";

const cx = cn.bind(styles);
export interface SelectGenderProps {
    gender: string | number | boolean;
}

const SelectGender = (props: SelectGenderProps) => {
    const { userGender } = props;
    const [selectedGender, setSelectedGender] = useState<string | null>(null);

    const handleGenderSelect = (gender: string) => {
        setSelectedGender(gender);
    };

    /** 뒤로가기 */
    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    };

    return (
        <div className={cx("SelectGenderWrapper")}>
            <Header leftIcon={<FaAngleLeft onClick={handleGoBack} />} />
            <div className={cx("SelectGenderContent")}>
                <p className={cx("SelectGender")}>성별선택</p>
                <p className={cx("SelectGenderInform")}>
                    회원님의 성별을 선택해주세요.
                </p>
            </div>
            <div className={cx("SelectGenderRadioBtn")}>
                <div
                    className={cx("SelectGenderBtn", {
                        selected: selectedGender === "남성",
                    })}
                    onClick={() => handleGenderSelect("남성")}
                >
                    <Radio label={"남성"} />
                </div>
                <div
                    className={cx("SelectGenderBtn", {
                        selected: selectedGender === "여성",
                    })}
                    onClick={() => handleGenderSelect("여성")}
                >
                    <Radio label={"여성"} />
                </div>
                <div
                    className={cx("SelectGenderBtn", {
                        selected: selectedGender === "기타",
                    })}
                    onClick={() => handleGenderSelect("기타")}
                >
                    <Radio label={"기타"} />
                </div>
            </div>

            <div className={cx("SelectGenderNextBtn")}>
                <Link href="userselect/userinterest">
                    <AbleBtn label={"다음"} />
                </Link>
            </div>
        </div>
    );
};

export default SelectGender;
