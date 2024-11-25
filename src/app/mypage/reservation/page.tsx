"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading/Loading";
import MypageReservation from "@/views/MypageReservation/MypageReservation.view";
import Header from "@/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import cn from "classnames/bind";
import styles from "@/views/Payment/Payment.view.module.scss";

const cx = cn.bind(styles);

interface LocalReservationContentProps {
    hotelName: string;
    startDate: string;
    endDate: string;
    roomId: string;
}

interface ReservationWithRoomDetails {
    roomDetails: {
        /** room 이름 */
        name: string;
        image: string;
        capacity: {
            standard: number;
            maximum: number;
        }
        price: {
            price: number;
            discount: number;
        }
        time: {
            checkIn: string;
            checkOut: string;
        },
    };
    lodgeDetails: {
        name: string;
        category: {
            title: string;
        };
    } | null;
}

const fetchReservations = async (accessToken: string) => {
    try {
        const response = await fetch("http://localhost:4000/api/reservation/me", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched Reservations:", data);

        if (!data || data.length === 0) {
            throw new Error("예약 데이터가 없습니다.1");
        }
        return data;

    } catch (error) {
        console.error("예약 정보를 불러오는 중 오류 발생", error);
        throw error;
    }
};

const fetchRoomDetails = async (roomId: string) => {
    try {
        const response = await fetch(`http://localhost:4000/api/rooms/${roomId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`Room fetch error! status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("방 정보를 불러오는 중 오류 발생", error);
        return null;
    }
};

const fetchLodgeDetails = async (lodgeId: string) => {
    const response = await fetch(`http://localhost:4000/api/lodges/${lodgeId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`Lodge fetch error! status: ${response.status}`);
    }

    return await response.json();
};

export default function MypageReservationPage() {
    const [reservations, setReservations] = useState<
        (LocalReservationContentProps & ReservationWithRoomDetails)[]
    >([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();

    const getTokenFromCookie = (cookieName: string) => {
        const match = document.cookie.match(new RegExp('(^| )' + cookieName + '=([^;]+)'));
        return match ? match[2] : null;
    };

    const accessToken = getTokenFromCookie("accessToken");
    console.log("Access Token:", accessToken);


    if (!accessToken) {
        router.push("/login");
        return <Loading />;
    }

    const fetchReservationsAndRooms = async () => {
        try {
            setLoading(true);

            const reservationData = await fetchReservations(accessToken);
            console.log("Reservation Data:", reservationData);
            if (!reservationData || reservationData.length === 0) {
                throw new Error("예약 데이터가 없습니다.2");
            }

            const reservationsWithRoomAndLodgeDetails = await Promise.all(
                reservationData.map(async (reservation: LocalReservationContentProps) => {
                    const roomDetails = await fetchRoomDetails(reservation.roomId);

                    const lodgeDetails = roomDetails?.lodgeId
                        ? await fetchLodgeDetails(roomDetails.lodgeId)
                        : null;

                    return {
                        ...reservation,
                        roomDetails,
                        lodgeDetails,
                    };
                })
            );

            setReservations(reservationsWithRoomAndLodgeDetails);
        } catch (error: unknown) {
            console.error("예약 데이터 및 방 정보를 불러오는 중 오류 발생", error);
            setError(
                error instanceof Error ? error.message : "예약 정보를 불러오는 중 오류가 발생했습니다."
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReservationsAndRooms();
    }, []);

const renderContent = () => {
    if (loading) return <Loading />;
    if (error) return <div>{`에러: ${error}`}</div>;
    if (!reservations || reservations.length === 0) return <div>예약 내역이 없습니다.</div>;
};

const handleGoBack = () => {
    router.back();
};

return (
    <>
        <div className={cx("page-layout")}>
            <div className={cx("page")}>
                <Header
                    title="예약내역"
                    leftIcon={<FaAngleLeft onClick={handleGoBack} />}
                />
                <MypageReservation reservations={reservations} />
                {renderContent()}
            </div>
        </div>
        <div className={cx("bottom-box")}>
            <p>예약/취소내역은 최대 2년까지 조회할 수 있습니다.</p>
        </div>
    </>
);
}
