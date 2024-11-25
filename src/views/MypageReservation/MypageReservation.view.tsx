"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./MypageReservation.view.module.scss";
import cn from "classnames/bind";
import PaymentCard from "../Payment/PaymentCard.view";
// import Header from "@/components/Header/Header";
// import { time } from "console";
// import { title } from "process";
import { ReservationContentProps } from "../Payment/Payment.view";
// import PaymentComplete from "../Payment/PaymentCompletePage.view";
import Badge from "@/components/badge/Badge";
import { IoIosArrowForward } from "react-icons/io";
import { useAtom } from "jotai";
import { selectedDateRangeAtom } from "@/views/SearchResult/Calander/Calander.view";

const cx = cn.bind(styles);

interface LocalReservationContentProps  {
    hotelName: string;
    startDate: string;
    endDate: string;
    roomId: string;
}

interface ReservationWithRoomDetails {
    roomDetails: {
        /** room 이름 */
        name: string;
        image: string;
        capacity: {
            standard: number;
            maximum: number;
        }
        price: {
            price: number;
            discount: number;
        }
        time: {
            checkIn: string;
            checkOut: string;
        },
    };
}

const MypageReservationCard = (props: LocalReservationContentProps  & ReservationWithRoomDetails) => {
    const router = useRouter();

    const {
        hotelName,
        startDate,
        endDate,
        roomDetails,
    } = props;

    /** 날짜 불러오기 */
    const [selectedDateRange] = useAtom(selectedDateRangeAtom);

    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
        const dayOfWeek = daysOfWeek[date.getDay()];

        return `${year}.${month}.${day} (${dayOfWeek})`;
    };

    /** 숙박 일자 계산 */
    const stayNight =
        selectedDateRange?.from && selectedDateRange?.to
            ? Math.ceil(
                (selectedDateRange.to.getTime() -
                    selectedDateRange.from.getTime()) /
                (1000 * 60 * 60 * 24)
            )
            : 0;

    return (
        <div className={cx("reservation-container")}>
            <div className={cx("reservation-content")}>
                <img src={roomDetails.image} alt="room-image" />
                <div className={cx("hotel-content")}>
                    <Badge shape="round" color="point">
                        호텔
                    </Badge>
                    <p className={cx("hotel-name")}>{hotelName}</p>
                    <p className={cx("date-text")}>
                        {selectedDateRange?.from &&
                            formatDate(selectedDateRange.from)}{" "}
                        ~
                        {selectedDateRange?.to &&
                            formatDate(selectedDateRange.to)}
                        ,{stayNight}박
                    </p>
                    <p className={cx("room-detailcontent")}>{roomDetails.name}
                    기준 {roomDetails.capacity.standard}인 (최대
                        {roomDetails.capacity.maximum}인)
                    </p>
                </div>
                <button
                    type="button"
                    className={cx("arrow-icon")}
                    onClick={() => router.push("/mypage/reservation/detail")}
                >
                    상세내역
                    <IoIosArrowForward />
                </button>
            </div>
            <div className={cx("time-content")}>
                <p className={cx("use-time")}>이용시간</p>
                <div className={cx("time-box")}>
                    <div className={cx("check-box")}>
                        <p className={cx("checktime-text")}>체크인</p>
                        <p className={cx("time-text")}>{roomDetails.time.checkIn}</p>
                    </div>
                    <div className={cx("check-box")}>
                        <p className={cx("checktime-text")}>체크아웃</p>
                        <p className={cx("time-text")}>{roomDetails.time.checkOut}</p>
                    </div>
                </div>
            </div>
            <div className={cx("pay-container")}>
                <p className={cx("pay-text")}>결제금액</p>
                <p className={cx("pay-amount")}>
                    {(roomDetails.price.price - roomDetails.price.discount).toLocaleString()}원
                </p>
            </div>
            <div className={cx("border")}></div>
        </div>
    );
};

const MypageReservation = ({ reservations }: { reservations: (LocalReservationContentProps  & ReservationWithRoomDetails)[] }) => {
    const [selectedTab, setSelectedTab] = useState("reservations");

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("category-container")}>
                <button
                    className={cx("CategoryLink", {
                        selected: selectedTab === "reservations",
                    })}
                    onClick={() => handleTabClick("reservations")}
                >
                    <p>예약내역</p>
                </button>
                <button
                    className={cx("CategoryLink", {
                        selected: selectedTab === "cancle",
                    })}
                    onClick={() => handleTabClick("cancle")}
                >
                    <p>취소내역</p>
                </button>
            </div>
            
            {reservations.map((data, index) => (
                <PaymentCard title={data.startDate}>
                    <MypageReservationCard key={index} {...data} />
                    </PaymentCard>
                ))}
            
        </div>
    );
};

export default MypageReservation;
