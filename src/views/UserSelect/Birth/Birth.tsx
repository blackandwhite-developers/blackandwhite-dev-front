"use client";

import React from "react";
import cn from "classnames/bind";
import styles from "./Birth.module.scss";
import Header from "@/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import { AbleBtn } from "@/components/Button/AbleBtn";
import { useRouter } from "next/navigation";
import Link from "next/link";

const cx = cn.bind(styles);

const Birth = () => {
    const router = useRouter();

    /** 뒤로가기 */
    const handleGoBack = () => {
        router.back();
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
                const monthValue = parseInt(value);
                if (monthValue > 12) {
                    value = "12";
                } else if (monthValue < 1) {
                    value = "01";
                }
            } else if (type === "day") {
                const dayValue = parseInt(value);
                if (dayValue > 31) {
                    value = "31";
                } else if (dayValue < 1) {
                    value = "01";
                }
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
                <Link href="/userselect/phone">
                    <AbleBtn label={"확인"} />
                </Link>
            </div>
        </div>
    );
};

export default Birth;
