"use client";
import React, { useState } from "react";
import styles from "./Calander.view.module.scss";
import "react-day-picker/style.css";
import cn from "classnames/bind";
import { DayPicker, DateRange } from "react-day-picker";
import Header from "@/app/components/Header/Header";
import { MdClose } from "react-icons/md";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { DateBtn } from "@/app/components/Button/DateBtn";
import { MemberBtn } from "@/app/components/Button/MemberBtn";
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
    const [selectedDateRange, setSelectedDateRange] = useState<
        DateRange | undefined
    >(undefined);

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

    /*날짜 선택*/
    const handleDateChange = (date: DateRange | undefined) => {
        setSelectedDateRange(date);
    };

    const formatSelectedDate = () => {
        if (
            !selectedDateRange ||
            !selectedDateRange.from ||
            !selectedDateRange.to
        ) {
            return "날짜를 선택해주세요";
        }

        const formatDate = (date: Date) => {
            const year = date.getFullYear().toString().slice(-2);
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const day = String(date.getDate()).padStart(2, "0");
            return `${year}.${month}.${day}`;
        };

        return `${formatDate(selectedDateRange.from)} ~ ${formatDate(
            selectedDateRange.to
        )}`;
    };

    return (
        <div className={cx("calander-contianer")}>
            <Header
                title={"날짜 선택"}
                leftIcon={<MdClose onClick={handleGoBack} />}
            />
            <div className={cx("about")}>
                <DateBtn label={formatSelectedDate()} />
                <MemberBtn
                    label={
                        <>
                            성인 {adultCount}명
                            <br />
                            아동 {childCount}명
                        </>
                    }
                />
            </div>

            <div className={cx("calander")}>
                <DayPicker
                    locale={ko}
                    mode="range"
                    selected={selectedDateRange}
                    onSelect={handleDateChange}
                />
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
                    {formatSelectedDate()}, 총 {adultCount + childCount}명
                </button>
            </div>
        </div>
    );
};

export default CalanderView;
