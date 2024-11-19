"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./AccBooking.module.scss";
import Link from "next/link";

const cx = cn.bind(styles);

type AccBookingProps = {
    onClose: () => void;
};

const AccBooking = ({ onClose }: AccBookingProps) => {
    const [checkInDate, setCheckInDate] = useState<string | null>(null);
    const [checkOutDate, setCheckOutDate] = useState<string | null>(null);
    const [isCartPopupVisible, setIsCartPopupVisible] = useState(false);

    useEffect(() => {
        const storedDateRange = localStorage.getItem("selectedDateRange");

        if (storedDateRange) {
            const [checkIn, checkOut] = storedDateRange.split(" ~ ");
            setCheckInDate(checkIn);
            setCheckOutDate(checkOut);
        }
    }, []);

    const handleAddToCart = () => {
        setIsCartPopupVisible(true);

        setTimeout(() => {
            setIsCartPopupVisible(false);
        }, 2000);
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
                    <h2 className={cx("RoomTitle")}>프리미엄 트윈</h2>
                    <div className={cx("ReservationDetail")}>
                        <ul>
                            <li className={cx("CheckIn")}>체크인</li>
                            {checkInDate && (
                                <>
                                    <li>{checkInDate}</li>
                                    <li>16:00</li>
                                </>
                            )}
                        </ul>
                        <p className={cx("StayNight")}>1박</p>
                        <ul>
                            <li className={cx("CheckOut")}>체크아웃</li>
                            {checkOutDate && (
                                <>
                                    <li>{checkOutDate}</li>
                                    <li>11:00</li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <ul className={cx("AccBookingInfo")}>
                    <li>현장상황에 따라 객실 랜덤 배정(객실지정불가)</li>
                    <li>
                        예약 후 10분 내 취소될 경우 취소 수수료가 발생하지
                        않습니다.(*체크인 시간 경과 후 제외)
                    </li>
                </ul>
            </div>
            <div className={cx("ReservationInfo")}>
                <div className={cx("ReservationIfoStayNight")}>
                    <p>숙박</p>
                    <span>(1박)</span>
                </div>
                <p>75,000원</p>
            </div>
            <div className={cx("ButtonWrapper")}>
                <button className={cx("CartButton")} onClick={handleAddToCart}>
                    장바구니 담기
                </button>

                <Link href="/payment" style={{ textDecoration: "none" }}>
                    <button className={cx("ReservationButton")}>
                        예약하기
                    </button>
                </Link>
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

export default AccBooking;