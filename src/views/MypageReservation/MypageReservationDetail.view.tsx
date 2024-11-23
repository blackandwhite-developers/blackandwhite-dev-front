"use client";
// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
import styles from "./MypageReservationDetail.view.module.scss";
import cn from "classnames/bind";
import PaymentCard from "../Payment/PaymentCard.view";
// import Header from "@/components/Header/Header";
// import { time } from "console";
// import { title } from "process";
import { ReservationContentProps } from "../Payment/Payment.view";
// import PaymentComplete from "../Payment/PaymentCompletePage.view";
import Badge from "@/components/badge/Badge";
// import { IoIosArrowForward } from "react-icons/io";
// import { UserContent } from "../Payment/PaymentUesr.view";
// import { FaAngleLeft } from "react-icons/fa";import { useAtom } from "jotai";
import { useAtom } from "jotai";
import { selectedDateRangeAtom } from "@/views/SearchResult/Calander/Calander.view";

const cx = cn.bind(styles);
export interface MypageReservationDetailProps {
    hotelName: string;
    roomImage: string;
    roomType: string;
    checkInDate: string;
    checkInTime: string;
    checkOutDate: string;
    checkOutTime: string;
    night: number;
    visitMethod: string;
    price: string | number;
    discountPrice: string | number;
}
const MypageReservationDetailCard = (props: MypageReservationDetailProps) => {
    // const router = useRouter();

    const {
        hotelName,
        roomImage,
        roomType,
        // checkInDate,
        checkInTime,
        // checkOutDate,
        checkOutTime,
        // night,
        price,
        discountPrice,
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
                <img src={roomImage} alt="room-image" />
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
                    <p className={cx("room-detailcontent")}>{roomType}</p>
                </div>
            </div>
            <div className={cx("time-content")}>
                <p className={cx("use-time")}>이용시간</p>
                <div className={cx("time-box")}>
                    <div className={cx("check-box")}>
                        <p className={cx("checktime-text")}>체크인</p>
                        <p className={cx("time-text")}>{checkInTime}</p>
                    </div>
                    <div className={cx("check-box")}>
                        <p className={cx("checktime-text")}>체크아웃</p>
                        <p className={cx("time-text")}>{checkOutTime}</p>
                    </div>
                </div>
            </div>
            <div className={cx("pay-container")}>
                <p className={cx("pay-text")}>결제금액</p>
                <p className={cx("pay-amount")}>
                    {(Number(price) - Number(discountPrice)).toLocaleString()}원
                </p>
            </div>
            <div className={cx("border")}></div>
        </div>
    );
};

const MypageReservationDetail = ({
    reservations,
}: {
    reservations: ReservationContentProps[];
}) => {
    return (
        <div className={cx("wrapper")}>
            <PaymentCard title="상품 정보">
                {reservations.map((data, index) => {
                    return (
                        <MypageReservationDetailCard
                            key={index}
                            roomImage={data.roomImage ?? ""}
                            hotelName={data.hotelName}
                            roomType={data.roomType}
                            checkInDate={data.checkInDate}
                            checkInTime={data.checkInTime}
                            checkOutDate={data.checkOutDate}
                            checkOutTime={data.checkOutTime}
                            night={data.night}
                            visitMethod={data.visitMethod}
                            price={data.price}
                            discountPrice={data.discountPrice}
                        />
                    );
                })}
            </PaymentCard>
        </div>
    );
};

export default MypageReservationDetail;
