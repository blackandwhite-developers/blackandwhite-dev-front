"use client";
import React, { useEffect, useState } from "react";
import cn from "classnames/bind";
import styles from "@/views/Payment/Payment.view.module.scss";
import MypageReservation from "@/views/MypageReservation/MypageReservation.view";
import { ReservationContentProps } from "@/views/Payment/Payment.view";
import Header from "@/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
// import MypageReservationView from "@/views/MypageReservation/MypageReservation.view";
import Loading from "@/components/loading/Loading";

const cx = cn.bind(styles);

interface RoomData {
    reservations?: ReservationContentProps[];
    category?: string;
}

export default function MypageReservationPage() {
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
        {
            hotelName: "Soo 경복궁",
            roomImage: "/images/room/ordercomplete-101x101/room2.png",
            roomType: "디럭스 트윈 (기준 2명/최대 2명)",
            checkInDate: "2023.06.23(화)",
            checkInTime: "16:00",
            checkOutDate: "2023.06.24(수)",
            checkOutTime: "11:00",
            night: 1,
            visitMethod: "walking",
            price: 78000,
            discountPrice: 3000,
        },
        {
            hotelName: "양양 여름이네 펜션",
            roomImage: "/images/room/ordercomplete-101x101/room3.png",
            roomType: "디럭스 트윈 (기준 2명/최대 2명)",
            checkInDate: "2023.06.23(화)",
            checkInTime: "16:00",
            checkOutDate: "2023.06.24(수)",
            checkOutTime: "11:00",
            night: 1,
            visitMethod: "car",
            price: 78000,
            discountPrice: 3000,
        },
        // {
        //   hotelName: "서대문 더 베이 호텔",
        //   roomImage: "/images/room/ordercomplete-101x101/room4.png",
        //   roomType: "디럭스 트윈 (기준 2명/최대 2명)",
        //   checkInDate: "2023.03.24(화)",
        //   checkInTime: "15:00",
        //   checkOutDate: "2023.03.26(목)",
        //   checkOutTime: "11:00",
        //   night: 2,
        //   visitMethod: "car",
        //   price: 80000,
        //   discountPrice: 3000,
        // },
        // {
        //   hotelName: "서대문 Seen",
        //   roomImage: "/images/room/ordercomplete-101x101/room5.png",
        //   roomType: "디럭스 트윈 (기준 2명/최대 2명)",
        //   checkInDate: "2023.01.11(화)",
        //   checkInTime: "15:00",
        //   checkOutDate: "2023.01.14(금)",
        //   checkOutTime: "12:00",
        //   night: 3,
        //   visitMethod: "walking",
        //   price: 118000,
        //   discountPrice: 5000,
        // },
    ];
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<RoomData | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchReservations = async () => {
        try {
            setLoading(true);

            const response = await fetch("/api/reservation", {
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
                <div>
                    <Loading />
                </div>
            );
        }

        if (error) {
            return <div>에러: {error}</div>;
        }

        if (error) {
            return (
                <>
                    {data ? (
                        <RoomData data={data} />
                    ) : (
                        <div>데이터를 불러올 수 없습니다.</div>
                    )}
                </>
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
                        <MypageReservation reservations={reservations} />
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
