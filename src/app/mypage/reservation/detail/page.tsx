"use client";
import { useRouter } from "next/navigation";
import React from "react";
import cn from "classnames/bind";
import styles from "@/views/Payment/Payment.view.module.scss";
import MypageReservation from "@/views/MypageReservation/MypageReservation.view";
import { ReservationContentProps } from "@/views/Payment/Payment.view";
import PaymentCard from "@/views/Payment/PaymentCard.view";
import MypageReservationDetail from "@/views/MypageReservation/MypageReservationDetail.view";
import { UserContent } from "@/views/Payment/PaymentUesr.view";
import CompletePayMethod from "@/views/Payment/CompletePayMethod.view";
import { AbleBtn } from "@/app/components/Button/AbleBtn";

const cx = cn.bind(styles);

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

  return (
    <div className={cx("page-layout")}>
      <div className={cx("page")}>
        <MypageReservationDetail reservations={reservations} />
        <PaymentCard title="예약자 정보">
          <UserContent userName="허태영" userPhoneNumber="010-1234-5678" />
        </PaymentCard>
        <CompletePayMethod />
        <div className={cx("ablebutton-box")}>
          <p className={cx("error-message")}>
            *예약 취소는 결제 후 1시간 이내로만 가능합니다.
          </p>
          <AbleBtn
            label="예약 취소"
            onClick={() => router.push("/mypage/reservation/cancle")}
            type="button"
          />
        </div>
      </div>
    </div>
  );
}
