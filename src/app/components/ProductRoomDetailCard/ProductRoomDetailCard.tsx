import React, { useState } from "react";
import styles from "./ProductRoomDetailCard.module.scss";
import cn from "classnames/bind";
import { RoomReservationBtn } from "@/app/components/Button/RoomReservationBtn";
import { StayReservationBtn } from "@/app/components/Button/StayReservationBtn";
import AccBooking from "../BottomSheet/AccBooking/AccBooking";
import RoomBooking from "../BottomSheet/RoomBooking/RoomBooking";

const cx = cn.bind(styles);

type ProductDetailInfomation = {
    operationHoure?: string | null;
    useHoure?: string | null;
    checkInTime?: string | null;
    checkOutTime?: string | null;
    price?: string;
    roomCount: number;
};

type ProductDetailCardProps = {
    badge?: string;
    title: "대실" | "숙박";
    infomation: ProductDetailInfomation;
};

export default function ProductRoomDetailCard(props: ProductDetailCardProps) {
    const { badge, title, infomation } = props;
    const [selectedBookingType, setSelectedBookingType] = useState<
        "대실" | "숙박" | null
    >(null);

    const handleClose = () => {
        setSelectedBookingType(null);
    };

    return (
        <div className={cx("productDetailBox")}>
            <div className={cx("productDetailBoxInn")}>
                <div className={cx("productBoxInfo")}>
                    {badge && <p className={cx("productBadge")}>{badge}</p>}
                    <h3>{title}</h3>
                    <div className={cx("infomation")}>
                        {title === "대실" ? (
                            <div className={cx("checkInInfomation")}>
                                <p>
                                    <span>이용시간</span>
                                    <span>
                                        최대 {infomation.useHoure}시간 이용
                                    </span>
                                </p>
                                <p>
                                    <span>운영시간</span>
                                    <span>{infomation.operationHoure}</span>
                                </p>
                            </div>
                        ) : (
                            <div className={cx("checkInInfomation")}>
                                <p>
                                    <span>체크인</span>
                                    <span>
                                        최대 {infomation.checkInTime}시간 이용
                                    </span>
                                </p>
                                <p>
                                    <span>체크아웃</span>
                                    <span>{infomation.checkOutTime}</span>
                                </p>
                            </div>
                        )}
                    </div>
                    <div className={cx("priceArea")}>
                        <span>
                            {infomation.roomCount >= 1
                                ? `${infomation.roomCount}개 남음`
                                : `사용 불가`}
                        </span>
                        <span className={cx("roomPrice")}>
                            {infomation.price}
                        </span>
                    </div>
                </div>
            </div>
            <div className={cx("reservationBtn")}>
                {title === "대실" ? (
                    <RoomReservationBtn
                        label={"대실 예약"}
                        onClick={() => setSelectedBookingType("대실")}
                    />
                ) : (
                    <StayReservationBtn
                        label={"숙박 예약"}
                        onClick={() => setSelectedBookingType("숙박")}
                    />
                )}
            </div>
            {selectedBookingType === "대실" && (
                <RoomBooking
                    onClose={() => {
                        console.log("RoomBooking 닫기");
                        handleClose();
                    }}
                />
            )}
            {selectedBookingType === "숙박" && (
                <AccBooking
                    onClose={() => {
                        console.log("AccBooking 닫기");
                        handleClose();
                    }}
                />
            )}
        </div>
    );
}

/*
  productInfomation = {
    productName 
    입실시간
    enteringTime
    퇴실시간
    checkoutTime
  }

  
  imageUrl?
  infomation:productInfomation


  badge?
*/
