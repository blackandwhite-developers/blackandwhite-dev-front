"use client";
import React, { useState, useEffect } from "react";
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

    const [adultCount, setAdultCount] = useState<number>(1);
    const [childCount, setChildCount] = useState<number>(0);
    const [selectedDateRange, setSelectedDateRange] = useState<
        DateRange | undefined
    >(undefined);

    useEffect(() => {
        const storedAdultCount = localStorage.getItem("adultCount");
        const storedChildCount = localStorage.getItem("childCount");
        const storedDateRange = localStorage.getItem("selectedDateRange");

        if (storedAdultCount) {
            setAdultCount(Number(storedAdultCount));
        }
        if (storedChildCount) {
            setChildCount(Number(storedChildCount));
        }
        if (storedDateRange) {
            const [fromDate, toDate] = storedDateRange.split(" ~ ");
            const parsedFromDate = new Date(fromDate);
            const parsedToDate = new Date(toDate);
            setSelectedDateRange({ from: parsedFromDate, to: parsedToDate });
        } else {
            const today = new Date();
            const formattedToday = {
                from: today,
                to: today,
            };
            setSelectedDateRange(formattedToday);
        }
    }, []);

    const handleAdultCountChange = (
        operation: "increase" | "decrease",
        event: React.MouseEvent
    ) => {
        event.stopPropagation();
        let newCount = adultCount;
        if (operation === "increase") {
            newCount = adultCount + 1;
        } else if (adultCount > 0) {
            newCount = adultCount - 1;
        } else {
            return alert("성인은 0명 아래로 내려갈 수 없습니다.");
        }
        setAdultCount(newCount);
        localStorage.setItem("adultCount", newCount.toString());
    };

    const handleChildCountChange = (
        operation: "increase" | "decrease",
        event: React.MouseEvent
    ) => {
        event.stopPropagation();
        let newCount = childCount;
        if (operation === "increase") {
            newCount = childCount + 1;
        } else if (childCount > 0) {
            newCount = childCount - 1;
        } else {
            return alert("아동은 0명 아래로 내려갈 수 없습니다.");
        }
        setChildCount(newCount);
        localStorage.setItem("childCount", newCount.toString());
    };

    const handleDateChange = (date: DateRange | undefined) => {
        setSelectedDateRange(date);
        if (date && date.from && date.to) {
            const formatDate = (date: Date) => {
                const year = date.getFullYear().toString();
                const month = String(date.getMonth() + 1).padStart(2, "0");
                const day = String(date.getDate()).padStart(2, "0");
                const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][
                    date.getDay()
                ];
                return `${year}.${month}.${day} (${dayOfWeek})`;
            };
            const formattedDateRange = `${formatDate(date.from)} ~ ${formatDate(
                date.to
            )}`;
            localStorage.setItem("selectedDateRange", formattedDateRange);
        }
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
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const day = String(date.getDate()).padStart(2, "0");
            const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][
                date.getDay()
            ];
            return `${year}.${month}.${day} (${dayOfWeek})`;
        };

        return `${formatDate(selectedDateRange.from)} ~ ${formatDate(
            selectedDateRange.to
        )}`;
    };

    const handleConfirmClick = () => {
        if (
            !selectedDateRange ||
            !selectedDateRange.from ||
            !selectedDateRange.to
        ) {
            alert("날짜를 선택해주세요.");
            return;
        }
        if (adultCount <= 0 && childCount <= 0) {
            alert("인원을 선택해주세요.");
            return;
        }

        router.back();
    };

    return (
        <div className={cx("calander-container")}>
            <Header
                title={"날짜 선택"}
                leftIcon={<MdClose onClick={handleGoBack} />}
            />
            <div className={cx("about")}>
                <DateBtn label={formatSelectedDate()} />
                <MemberBtn
                    label={<>{`성인 ${adultCount}명\n아동 ${childCount}명`}</>}
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
                        <div className={cx("adult-container")}>
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
                <button
                    className={cx("confirmBtn")}
                    onClick={handleConfirmClick}
                >
                    {formatSelectedDate()}, 총 {adultCount + childCount}명
                </button>
            </div>
        </div>
    );
};

export default CalanderView;
