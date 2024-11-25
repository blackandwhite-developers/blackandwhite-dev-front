"use client";
import React, { useState } from "react";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./AccBooking.module.scss";
import Link from "next/link";
import { useAtom } from "jotai";
import { selectedDateRangeAtom } from "@/views/SearchResult/Calander/Calander.view";

const cx = cn.bind(styles);

type AccBookingProps = {
    data: {
        event: string;
        name: string;
        time: {
            checkIn: string;
            checkOut: string;
        };
        price: { price: number };
        stock: number;
        capacity: { standard: number; maximum: number };
        startDate: string;
        endDate: string;
    };
    onClose: () => void;
};

const AccBooking = ({ data, onClose }: AccBookingProps) => {
    const [isCartPopupVisible, setIsCartPopupVisible] = useState(false);

    /** 장바구니 선택 시 팝업 3초 */
    const handleAddToCart = () => {
        setIsCartPopupVisible(true);
        setTimeout(() => {
            setIsCartPopupVisible(false);
        }, 3000);
    };

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

    /** 날짜 선택 안했을 시 alert */
    const handleReservationClick = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        if (!selectedDateRange?.from || !selectedDateRange?.to) {
            alert("날짜를 선택해주세요");
            event.preventDefault();
        }
    };

    return (
        <div className={cx("AccBookingWrapper")}>
            <div className={cx("AccBookingTapBar")} onClick={onClose}>
                <Image
                    src="/images/TapBar.png"
                    alt="탭 바 이미지"
                    width={77}
                    height={3}
                />
            </div>
            <h1 className={cx("AccBookingTitle")}>숙박 예약</h1>
            <div className={cx("AccBookingDetailWrapper")}>
                <p className={cx("AccBookingImage")}>
                    <Image
                        src="/images/Hotel.png"
                        alt="호텔 이미지"
                        width={95}
                        height={95}
                    />
                </p>
                <div className={cx("AccBookingDetail")}>
                    <h2 className={cx("RoomTitle")}>{data.name}</h2>
                    <div className={cx("ReservationDetail")}>
                        <ul>
                            <li className={cx("CheckIn")}>체크인</li>
                            <li>
                                {selectedDateRange?.from
                                    ? formatDate(selectedDateRange.from)
                                    : "미선택"}
                            </li>
                            <li>{data.time.checkIn}</li>
                        </ul>
                        <p className={cx("StayNight")}>{stayNight}박</p>
                        <ul>
                            <li className={cx("CheckOut")}>체크아웃</li>
                            <li>
                                {selectedDateRange?.to
                                    ? formatDate(selectedDateRange.to)
                                    : "미선택"}
                            </li>
                            <li>{data.time.checkOut}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <ul className={cx("AccBookingInfo")}>
                    <li>현장상황에 따라 객실 랜덤 배정(객실지정불가)</li>
                    <li>
                        예약 후 10분 내 취소될 경우 취소 수수료가 발생하지
                        않습니다. (*체크인 시간 경과 후 제외)
                    </li>
                </ul>
            </div>
            <div className={cx("ReservationInfo")}>
                <div className={cx("ReservationIfoStayNight")}>
                    <p>숙박</p>
                    <span>({stayNight}박)</span>
                </div>
                <p>
                    {data.price
                        ? `${data.price.price * stayNight}원`
                        : "불러오는 중..."}
                </p>
            </div>
            <div className={cx("ButtonWrapper")}>
                <button className={cx("CartButton")} onClick={handleAddToCart}>
                    장바구니 담기
                </button>

                <Link href="/payment" style={{ textDecoration: "none" }}>
                    <button
                        className={cx("ReservationButton")}
                        onClick={handleReservationClick}
                    >
                        예약하기
                    </button>
                </Link>
            </div>

            {isCartPopupVisible && (
                <div className={cx("CartPopup")}>
                    <div className={cx("CartItem")}>
                        <p>장바구니에 상품이 담겼습니다.</p>
                        <Link href="/home/detail/cart">
                            <p className={cx("LookCart")}>장바구니 보기</p>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccBooking;
