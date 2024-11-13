import React from "react";
import cn from "classnames/bind";
import styles from "@/views/Payment/Payment.view.module.scss";
import MypageReservation from "@/views/MypageReservation/MypageReservation.view";
import { ReservationContentProps } from "@/views/Payment/Payment.view";
import PaymentCard from "@/views/Payment/PaymentCard.view";
import MypageReservationDetail from "@/views/MypageReservation/MypageReservationDetail.view";
import { UserContent } from "@/views/Payment/PaymentUesr.view";
import CompletePayMethod from "@/views/Payment/CompletePayMethod.view";

const cx = cn.bind(styles);

export default function MypageReservationDetailPage() {
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

  return (
    <div className={cx("page-layout")}>
      <div className={cx("page")}>
        <MypageReservationDetail reservations={reservations} />
        <PaymentCard title="예약자 정보">
          <UserContent userName="허태영" userPhoneNumber="010-1234-5678" />
        </PaymentCard>
        <CompletePayMethod />
      </div>
    </div>
  );
}
