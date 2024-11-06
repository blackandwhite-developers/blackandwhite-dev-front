import React from "react";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./AccBooking.module.scss";
const cx = cn.bind(styles);

const AccBooking = () => {
    return (
        <div className={cx("AccBookingWrapper")}>
            <div className={cx("AccBookingTapBar")}>
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
                    {" "}
                    <Image
                        src="/images/Hotel.png"
                        alt="탭 바 이미지"
                        width={95}
                        height={95}
                    />
                </p>
                <div className={cx("AccBookingDetail")}>
                    <h2 className={cx("RoomTitle")}>프리미엄 트윈</h2>
                    <div className={cx("ReservationDetail")}>
                        <ul>
                            <li className={cx("CheckIn")}>체크인</li>
                            <li>2024.11.05(화)</li>
                            <li>16:00</li>
                        </ul>
                        <p className={cx("StayNight")}>1박</p>
                        <ul>
                            <li className={cx("CheckOut")}>체크아웃</li>
                            <li>2024.11.06(수)</li>
                            <li>11:00</li>
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
                <button className={cx("CartButton")}>장바구니 담기</button>
                <button className={cx("ReservationButton")}>예약하기</button>
            </div>
        </div>
    );
};

export default AccBooking;
