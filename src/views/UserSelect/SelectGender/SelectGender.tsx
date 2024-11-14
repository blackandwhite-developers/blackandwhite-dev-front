"use client";

import React, { useState } from "react";
import cn from "classnames/bind";
import styles from "./SelectGender.module.scss";
import Header from "@/app/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import Radio from "@/app/components/radio/Radio";
import { AbleBtn } from "@/app/components/Button/AbleBtn";

const cx = cn.bind(styles);

const SelectGender = () => {
    const [selectedGender, setSelectedGender] = useState<string | null>(null);

    const handleGenderSelect = (gender: string) => {
        setSelectedGender(gender);
    };

    return (
        <div className={cx("SelectGenderWrapper")}>
            <Header leftIcon={<FaAngleLeft />} />
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
                <AbleBtn label={"다음"} />
            </div>
        </div>
    );
};

export default SelectGender;
