"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./RoomBooking.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const cx = cn.bind(styles);

const RoomBooking = () => {
    const [availableTimes, setAvailableTimes] = useState<string[]>([]);
    const [selectedTimes, setSelectedTimes] = useState<string[]>([]);

    useEffect(() => {
        const startHour = 14;
        const endHour = 21;
        const times = Array.from(
            { length: endHour - startHour + 1 },
            (_, i) => `${String(startHour + i).padStart(2, "0")}:00`
        );
        setAvailableTimes(times);
    }, []);

    const handleTimeSelect = (time: string) => {
        const index = availableTimes.indexOf(time);
        if (index === -1) return;

        if (selectedTimes.includes(time)) {
            const isAtEnds = index === 0 || index === availableTimes.length - 1;
            setSelectedTimes(
                isAtEnds ? selectedTimes.filter((t) => t !== time) : []
            );
        } else {
            if (
                !selectedTimes.length ||
                selectedTimes.includes(availableTimes[index - 1]) ||
                selectedTimes.includes(availableTimes[index + 1])
            ) {
                setSelectedTimes([...selectedTimes, time].sort());
            }
        }
    };

    return (
        <div className={cx("RoomBookingWrapper")}>
            <div className={cx("RoomBookingTapBar")}>
                <Image
                    src="/images/TapBar.png"
                    alt="탭 바 이미지"
                    width={77}
                    height={3}
                />
            </div>
            <h1 className={cx("RoomBookingTitle")}>대실 예약</h1>
            <div className={cx("RoomBookingDetailWrapper")}>
                <p className={cx("RoomBookingImage")}>
                    <Image
                        src="/images/Hotel.png"
                        alt="탭 바 이미지"
                        width={95}
                        height={95}
                    />
                </p>
                <div className={cx("RoomBookingDetail")}>
                    <h2 className={cx("RoomTitle")}>프리미엄 트윈</h2>
                    <div className={cx("ReservationDetail")}>
                        <ul>
                            <li className={cx("CheckIn")}>체크인</li>
                            <li>2024.11.05(화)</li>
                            <li>16:00</li>
                        </ul>
                        <p className={cx("StayHour")}>4시간</p>
                        <ul>
                            <li className={cx("CheckOut")}>체크아웃</li>
                            <li>2024.11.05(화)</li>
                            <li>20:00</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={cx("TimeSelectWrapper")}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={6}
                    scrollbar={{ draggable: true }}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {availableTimes.map((time, index) => (
                        <SwiperSlide key={index}>
                            <button
                                className={cx("TimeSelectButton", {
                                    selected: selectedTimes.includes(time),
                                })}
                                onClick={() => handleTimeSelect(time)}
                            >
                                {time}
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div>
                <ul className={cx("RoomBookingInfo")}>
                    <li>현장상황에 따라 객실 랜덤 배정(객실지정불가)</li>
                    <li>
                        예약 후 10분 내 취소될 경우 취소 수수료가 발생하지
                        않습니다. (*체크인 시간 경과 후 제외)
                    </li>
                </ul>
            </div>
            <div className={cx("ReservationInfo")}>
                <div className={cx("ReservationIfoStayNight")}>
                    <p>대실</p>
                    <span>(4시간)</span>
                </div>
                <p>75,000원</p>
            </div>
            <div className={cx("ButtonWrapper")}>
                <button className={cx("CartButton")}>장바구니 담기</button>
                <button className={cx("ReservationButton")}>예약하기</button>
            </div>
        </div>
    );
};

export default RoomBooking;
