"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import cn from "classnames/bind";
import styles from "@/views/Payment/Payment.view.module.scss";
// import MypageReservation from "@/views/MypageReservation/MypageReservation.view";
import { ReservationContentProps } from "@/views/Payment/Payment.view";
import PaymentCard from "@/views/Payment/PaymentCard.view";
import MypageReservationDetail from "@/views/MypageReservation/MypageReservationDetail.view";
import { UserContent } from "@/views/Payment/PaymentUesr.view";
import CompletePayMethod from "@/views/Payment/CompletePayMethod.view";
import { AbleBtn } from "@/components/Button/AbleBtn";
import Header from "@/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";

const cx = cn.bind(styles);
interface RoomData {
    reservations?: ReservationContentProps[];
    category?: string;
}
export default function MypageReservationDetailPage() {
    const router = useRouter();

    const reservations: ReservationContentProps[] = [
        {
            hotelName: "김포 마리나베이 호텔",
            roomImage: "/images/room/ordercomplete-101x101/room1.png",
            roomType: "디럭스 트윈 (기준 2명/최대 2명)",
            checkInDate: "2023.06.14(화)",
            checkInTime: "16:00",
            checkOutDate: "2023.06.15(수)",
            checkOutTime: "11:00",
            night: 1,
            visitMethod: "car",
            price: 78000,
            discountPrice: 3000,
        },
    ];
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<RoomData | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchReservations = async () => {
        try {
            setLoading(true);

            const response = await fetch("/api/reservations", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const roomData: RoomData = await response.json();

            if (!roomData.reservations) {
                throw new Error("예약 데이터가 없습니다.");
            }

            console.log("Fetched reservation data: ", roomData);
            setData(roomData);
        } catch (error: unknown) {
            console.error("Failed to fetch reservations:", error);
            setError(
                error instanceof Error
                    ? error.message
                    : "예약 정보를 불러오는 중 오류가 발생했습니다."
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReservations();
    }, []);

    const renderContent = () => {
        if (loading) {
            return (
                <div className={cx("loading-container")}>
                    <div className={cx("loading-spinner")}>로딩 중...</div>
                </div>
            );
        }

        if (error) {
            return (
                <div className={cx("error-container")}>
                    <p className={cx("error-message")}>에러: {error}</p>
                    <button
                        className={cx("retry-button")}
                        onClick={fetchReservations}
                    >
                        다시 시도
                    </button>
                </div>
            );
        }

        if (!data?.reservations?.length) {
            return (
                <div className={cx("empty-state")}>
                    <p>예약 내역이 없습니다.</p>
                </div>
            );
        }
    };

    return (
        <div className={cx("page-layout")}>
            <div className={cx("page")}>
                <Header title={"예약내역 상세"} leftIcon={<FaAngleLeft />} />
                <MypageReservationDetail reservations={reservations} />
                <PaymentCard title="예약자 정보">
                    <UserContent
                        userName="허태영"
                        userPhoneNumber="010-1234-5678"
                    />
                </PaymentCard>
                <CompletePayMethod />
                <div className={cx("ablebutton-box")}>
                    <p className={cx("error-message")}>
                        *예약 취소는 결제 후 1시간 이내로만 가능합니다.
                    </p>
                    <AbleBtn
                        label="예약 취소"
                        onClick={() =>
                            router.push("/mypage/reservation/cancle")
                        }
                        type="button"
                    />
                </div>
            </div>
        </div>
    );
    return renderContent();
}
