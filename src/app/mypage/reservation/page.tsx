"use client";
import React, { useEffect, useState } from "react";
import cn from "classnames/bind";
import styles from "@/views/Payment/Payment.view.module.scss";
import MypageReservation from "@/views/MypageReservation/MypageReservation.view";
import { ReservationContentProps } from "@/views/Payment/Payment.view";
import Header from "@/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";

const cx = cn.bind(styles);

interface RoomData {
    reservations?: ReservationContentProps[];
    category?: string;
}

export default function MypageReservationPage() {
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

        return (
            <>
                <div className={cx("page-layout")}>
                    <div className={cx("page")}>
                        <Header title="예약내역" leftIcon={<FaAngleLeft />} />
                        <MypageReservation reservations={data.reservations} />
                    </div>
                </div>
                <div className={cx("bottom-box")}>
                    <p>예약/취소내역은 최대 2년까지 조회할 수 있습니다.</p>
                </div>
            </>
        );
    };

    return renderContent();
}
