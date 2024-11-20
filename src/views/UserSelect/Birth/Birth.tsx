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

    /** 뒤로가기 */
    const handleGoBack = () => {
        router.back();
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        type: "year" | "month" | "day"
    ) => {
        const value = e.target.value.replace(/[^0-9]/g, "");

        if (type === "year") {
            const yearValue = parseInt(value);
            if (value.length === 4 && (yearValue < 1900 || yearValue > 2024)) {
                setYear(yearValue < 1900 ? "1900" : "2024");
            } else {
                setYear(value);
            }
        } else if (type === "month") {
            const monthValue = parseInt(value);
            setMonth(monthValue > 12 ? "12" : monthValue < 1 ? "01" : value);
        } else if (type === "day") {
            const dayValue = parseInt(value);
            setDay(dayValue > 31 ? "31" : dayValue < 1 ? "01" : value);
        }
    };

    const onBirth = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (!year || !month || !day) {
            return;
        }
        const birth = `${year}-${month.padStart(2, "0")}-${day.padStart(
            2,
            "0"
        )}`;
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
                        value={year}
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
                        value={month}
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
                        value={day}
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
