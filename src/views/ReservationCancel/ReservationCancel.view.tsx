"use client"
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./ReservationCancel.view.module.scss"
import { AbleBtn } from "@/app/components/Button/AbleBtn";

const reservationCancelView = () => {
    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    const handleGoToReservationHistory = () => {
        router.push("/reservation-history");
    };

    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                <img src="/icon-asset/delete.png" alt="이전으로" onClick={handleGoBack}/>
                <h1>예약취소</h1>
                </div>
                <div className={styles.content}>
                <img src="/icon-asset/completed-icon.png" alt="완료 아이콘" />
                    <strong>취소완료</strong>
                    <span>예약하신 내역에 대한<br/>취소가 완료되었습니다.</span>
                </div>
                <div className={styles.message}>
                    <ul>
                        <li>
                            <p>
                                예약 취소 후 결제하신 수단으로 영업일 7일 이내 환불 절차가 진행됩니다.
                            </p>
                        </li>
                        <li>
                            <p>
                                취소된 예약내역은 "예약내역-취소"탭에서 확인할 수 있습니다.
                            </p>
                        </li>
                    </ul>
                </div>
                <AbleBtn label="예약 내역으로 이동" type="button" onClick={handleGoToReservationHistory} />
            </div>
        </div>
    );
}

export default reservationCancelView;