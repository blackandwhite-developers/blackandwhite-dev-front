import React from "react";
import cn from "classnames/bind";
import styles from "./SelectGender.module.scss";
import Header from "@/app/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import Radio from "@/app/components/radio/Radio";
import { AbleBtn } from "@/app/components/Button/AbleBtn";

const cx = cn.bind(styles);

const SelectGender = () => {
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
                <Radio label={"남성"} />
                <Radio label={"여성"} />
                <Radio label={"기타"} />
            </div>
            <div className={cx("SelectGenderNextBtn")}>
                <AbleBtn label={"다음"} />
            </div>
        </div>
    );
};

export default SelectGender;
