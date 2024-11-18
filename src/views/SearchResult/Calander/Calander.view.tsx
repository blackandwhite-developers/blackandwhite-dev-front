"use client";
import React, { useState } from "react";
import styles from "./Calander.view.module.scss";
import "react-day-picker/style.css";

import cn from "classnames/bind";
import { DayPicker } from "react-day-picker";
import Header from "@/app/components/Header/Header";
import { MdClose } from "react-icons/md";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { DateBtn } from "@/app/components/Button/DateBtn";
import { MemberBtn } from "@/app/components/Button/MemberBtn";
// import { AbleBtn } from "@/app/components/Button/AbleBtn";
import { ko } from "date-fns/locale";
import { useRouter } from "next/navigation";
const cx = cn.bind(styles);

const CalanderView = () => {
    /** 뒤로가기 */
    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    };

    const [adultCount, setAdultCount] = useState<number>(0);
    const [childCount, setChildCount] = useState<number>(0);

    const handleAdultCountChange = (
        operation: "increase" | "decrease",
        event: React.MouseEvent
    ) => {
        event.stopPropagation();
        if (operation === "increase") {
            setAdultCount(adultCount + 1);
        } else if (adultCount <= 0) {
            return alert("성인은 0명 아래로 내려갈 수 없습니다.");
        } else {
            setAdultCount(adultCount - 1);
        }
    };

    const handleChildCountChange = (
        operation: "increase" | "decrease",
        event: React.MouseEvent
    ) => {
        event.stopPropagation();
        if (operation === "increase") {
            setChildCount(childCount + 1);
        } else if (childCount <= 0) {
            return alert("아동은 0명 아래로 내려갈 수 없습니다.");
        } else {
            setChildCount(childCount - 1);
        }
    };

    return (
        <div className={cx("calander-contianer")}>
            <Header
                title={"날짜 선택"}
                leftIcon={<MdClose onClick={handleGoBack} />}
            />
            <div className={cx("about")}>
                <DateBtn label="6.2화 - 6.3수"></DateBtn>
                <MemberBtn label="성인 2명"></MemberBtn>
            </div>

            <div className={cx("calander")}>
                <DayPicker locale={ko} mode="range" />
            </div>

            <div className={cx("middle-line")}></div>

            <div className={cx("member-info")}>
                <h4>인원</h4>
                <div className={cx("member")}>
                    <div className={cx("adult")}>
                        <span>성인</span>
                        <div className={cx("adult-containder")}>
                            <button
                                className={cx("minus")}
                                onClick={(e) =>
                                    handleAdultCountChange("decrease", e)
                                }
                            >
                                <CiCircleMinus />
                            </button>
                            {adultCount}
                            <button
                                className={cx("plus")}
                                onClick={(e) =>
                                    handleAdultCountChange("increase", e)
                                }
                            >
                                <CiCirclePlus />
                            </button>
                        </div>
                    </div>

                    <div className={cx("child")}>
                        <span>아동</span>
                        <div className={cx("child-container")}>
                            <button
                                className={cx("minus")}
                                style={{ color: "#8728ff" }}
                                onClick={(e) =>
                                    handleChildCountChange("decrease", e)
                                }
                            >
                                <CiCircleMinus />
                            </button>
                            {childCount}
                            <button
                                className={cx("plus")}
                                style={{ color: "#8728ff" }}
                                onClick={(e) =>
                                    handleChildCountChange("increase", e)
                                }
                            >
                                <CiCirclePlus />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("bottomBtn")}>
                <button className={cx("confirmBtn")}>
                    2023.06.02(화) ~ 2023.06.03(수),총 2명
                </button>
            </div>
        </div>
    );
};

export default CalanderView;
