"use client";

import React, { useState } from "react";
import cn from "classnames/bind";
import styles from "./Birth.module.scss";
import Header from "@/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import { AbleBtn } from "@/components/Button/AbleBtn";
import { useRouter } from "next/navigation";

const cx = cn.bind(styles);

type BirthProps = {
    BirthFunc: (birth: string) => void;
};
const Birth = (props: BirthProps) => {
    const { BirthFunc } = props;
    const router = useRouter();
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");

    const handleGoBack = () => {
        router.back();
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        type: "year" | "month" | "day"
    ) => {
        let value = e.target.value.replace(/[^0-9]/g, "");

        if (type === "year") {
            const yearValue = parseInt(value);
            if (value.length === 4 && (yearValue < 1900 || yearValue > 2024)) {
                value = yearValue < 1900 ? "1900" : "2024";
            }
            setYear(value);
        } else if (type === "month") {
            const monthValue = parseInt(value);
            if (monthValue > 12) {
                value = "12";
            } else if (monthValue < 1) {
                value = "01";
            } else if (monthValue < 10 && monthValue > 0) {
                value = `0${monthValue}`;
            }
            setMonth(value);
        } else if (type === "day") {
            const dayValue = parseInt(value);
            if (dayValue > 31) {
                value = "31";
            } else if (dayValue < 1) {
                value = "01";
            } else if (dayValue < 10 && dayValue > 0) {
                value = `0${dayValue}`;
            }
            setDay(value);
        }
    };

    const onBirth = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const birth = `${year}-${month}-${day}`;
        if (!year || !month || !day || birth.length !== 10) {
            return;
        }
        BirthFunc(birth);
    };

    return (
        <div className={cx("SelectBirthWrapper")}>
            <Header leftIcon={<FaAngleLeft onClick={handleGoBack} />} />
            <div className={cx("SelectBirthContent")}>
                <p className={cx("SelectBirth")}>
                    고객님의 생일을 <br />
                    알려주세요.
                </p>
            </div>
            <form>
                <div className={cx("InputWrapper")}>
                    <input
                        type="text"
                        id="year"
                        name="year"
                        placeholder="1990"
                        className={cx("BirthInput")}
                        required
                        maxLength={4}
                        onChange={(e) => handleInputChange(e, "year")}
                    />
                    /
                    <input
                        type="text"
                        id="month"
                        name="month"
                        placeholder="01"
                        className={cx("BirthInput")}
                        required
                        maxLength={2}
                        onChange={(e) => handleInputChange(e, "month")}
                    />
                    /
                    <input
                        type="text"
                        id="day"
                        name="day"
                        placeholder="01"
                        className={cx("BirthInput")}
                        required
                        maxLength={2}
                        onChange={(e) => handleInputChange(e, "day")}
                    />
                </div>
            </form>
            <div className={cx("BirthNextBtn")}>
                <AbleBtn label={"확인"} onClick={onBirth} />
            </div>
        </div>
    );
};

export default Birth;
