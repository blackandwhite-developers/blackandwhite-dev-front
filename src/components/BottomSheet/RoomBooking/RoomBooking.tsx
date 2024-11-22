"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./RoomBooking.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useRouter } from "next/navigation";
import Link from "next/link";

type RoomBookingProps = {
    onClose: () => void;
};

const cx = cn.bind(styles);

const RoomBooking = ({ onClose }: RoomBookingProps) => {
    const [availableTimes, setAvailableTimes] = useState<string[]>([]);
    const [selectedTimes, setSelectedTimes] = useState<string[]>([]);
    const [stayDuration, setStayDuration] = useState<number>(0);
    const [isCartPopupVisible, setIsCartPopupVisible] = useState(false);
    const [checkInTime, setCheckInTime] = useState<string>("00:00");
    const [checkOutTime, setCheckOutTime] = useState<string>("00:00");
    const router = useRouter();

    /** 대실은 14시 ~ 21시까지만 가능 */
    useEffect(() => {
        const startHour = 14;
        const endHour = 21;
        const times = Array.from(
            { length: endHour - startHour + 1 },
            (_, i) => `${String(startHour + i).padStart(2, "0")}:00`
        );
        setAvailableTimes(times);
    }, []);

    /** 시간 선택 */
    const handleTimeSelect = (time: string) => {
        const index = availableTimes.indexOf(time);
        if (index === -1) return;
        if (selectedTimes.length === 0) {
            setSelectedTimes([time]);
        } else if (selectedTimes.length === 1) {
            const firstSelectedTime = selectedTimes[0];
            if (firstSelectedTime === time) {
                setSelectedTimes([]);
            } else {
                const startIndex = availableTimes.indexOf(firstSelectedTime);
                const endIndex = index;
                const timesInBetween =
                    startIndex < endIndex
                        ? availableTimes.slice(startIndex, endIndex + 1)
                        : availableTimes.slice(endIndex, startIndex + 1);

                setSelectedTimes(timesInBetween);
            }
        } else {
            const firstSelectedTime = selectedTimes[0];
            const lastSelectedTime = selectedTimes[selectedTimes.length - 1];
            const startIndex = availableTimes.indexOf(firstSelectedTime);
            const endIndex = availableTimes.indexOf(lastSelectedTime);
            const isInBetween =
                index > Math.min(startIndex, endIndex) &&
                index < Math.max(startIndex, endIndex);

            if (isInBetween) {
                setSelectedTimes([]);
            } else {
                const isAtStart = index === startIndex;
                const isAtEnd = index === endIndex;

                if (isAtStart || isAtEnd) {
                    const newSelectedTimes = selectedTimes.filter(
                        (t) => t !== time
                    );
                    setSelectedTimes(newSelectedTimes);
                } else {
                    setSelectedTimes([time]);
                }
            }
        }
    };

    /** 체크인, 체크아웃 시간 설정 (디폴트값 00:00) */
    useEffect(() => {
        if (selectedTimes.length > 0) {
            const minTime = selectedTimes[0];
            const maxTime = selectedTimes[selectedTimes.length - 1];
            setCheckInTime(minTime);
            setCheckOutTime(maxTime);
        } else {
            setCheckInTime("00:00");
            setCheckOutTime("00:00");
        }
    }, [selectedTimes]);

    /** 대실 시간 계산 */
    useEffect(() => {
        const calculateDuration = () => {
            const [startHour, startMinute] = checkInTime.split(":").map(Number);
            const [endHour, endMinute] = checkOutTime.split(":").map(Number);

            const startTotalMinutes = startHour * 60 + startMinute;
            const endTotalMinutes = endHour * 60 + endMinute;

            const duration = (endTotalMinutes - startTotalMinutes) / 60;
            setStayDuration(duration > 0 ? duration : 0);
        };

        calculateDuration();
    }, [checkInTime, checkOutTime]);

    /** 시간 선택이 없을 경우 alert / 선택된 경우 결제화면 이동 */
    const handleReservationClick = () => {
        if (selectedTimes.length === 0) {
            alert("시간을 선택해주세요!");
        } else {
            router.push("/payment");
        }
    };

    /** 장바구니 열기 */
    const handleAddToCart = () => {
        setIsCartPopupVisible(true);
        setTimeout(() => {
            setIsCartPopupVisible(false);
        }, 2000);
    };

    return (
        <div className={cx("RoomBookingWrapper")}>
            <div className={cx("RoomBookingTapBar")} onClick={onClose}>
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
                            <li>{checkInTime}</li>
                        </ul>
                        <p className={cx("StayHour")}>{stayDuration}시간</p>
                        <ul>
                            <li className={cx("CheckOut")}>체크아웃</li>
                            <li>2024.11.05(화)</li>
                            <li>{checkOutTime}</li>
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
                    <span>({stayDuration}시간)</span>
                </div>
                <p>75,000원</p>
            </div>
            <div className={cx("ButtonWrapper")}>
                <button className={cx("CartButton")} onClick={handleAddToCart}>
                    장바구니 담기
                </button>
                <button
                    className={cx("ReservationButton")}
                    onClick={handleReservationClick}
                >
                    예약하기
                </button>
            </div>
            {/* 장바구니 팝업 */}
            {isCartPopupVisible && (
                <div className={cx("CartPopup")}>
                    <div className={cx("CartItem")}>
                        <p>장바구니에 상품이 담겼습니다.</p>
                        <Link href="/detail/cart">
                            <p className={cx("LookCart")}>장바구니 보기</p>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoomBooking;
