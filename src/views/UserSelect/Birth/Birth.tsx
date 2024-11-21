"use client";

import React from "react";
import cn from "classnames/bind";
import styles from "./Birth.module.scss";
import Header from "@/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import { AbleBtn } from "@/components/Button/AbleBtn";
import { useRouter } from "next/navigation";

const cx = cn.bind(styles);

type BirthProps = {
    birthFunc: (birth: string) => void;
};

const Birth = (props: BirthProps) => {
    const router = useRouter();
    const { birthFunc } = props;
    const year = React.useRef<HTMLInputElement>(null);
    const month = React.useRef<HTMLInputElement>(null);
    const day = React.useRef<HTMLInputElement>(null);
    /** 뒤로가기 */
    const handleGoBack = () => {
        router.back();
    };

    const handleNext = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const yearValue = year.current?.value;
        const monthValue = month.current?.value;
        const dayValue = day.current?.value;
        if (yearValue && monthValue && dayValue) {
            const birth = `${yearValue}-${monthValue}-${dayValue}`;
            birthFunc(birth);
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        type: "year" | "month" | "day"
    ) => {
        const target = e.target;
        if (target instanceof HTMLInputElement) {
            let value = target.value;

            value = value.replace(/[^0-9]/g, "");

            if (type === "year") {
                const yearValue = parseInt(value);
                if (
                    value.length === 4 &&
                    (yearValue < 1900 || yearValue > 2024)
                ) {
                    value = yearValue < 1900 ? "1900" : "2024";
                }
            } else if (type === "month") {
                if (value.length > 2) value = value.slice(0, 2);
                if (parseInt(value, 10) > 12) value = "12";
            } else if (type === "day") {
                if (value.length > 2) value = value.slice(0, 2);
                if (parseInt(value, 10) > 31) value = "31";
            }

            target.value = value;
        }
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
                        ref={year}
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
                        ref={month}
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
                        ref={day}
                        placeholder="01"
                        className={cx("BirthInput")}
                        required
                        maxLength={2}
                        onChange={(e) => handleInputChange(e, "day")}
                    />
                </div>
            </form>
            <div className={cx("BirthNextBtn")}>
                <AbleBtn label={"확인"} onClick={handleNext} />
            </div>
        </div>
    );
};

export default Birth;
