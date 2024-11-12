import React from "react";
import cn from "classnames/bind";
import PaymentComplete from "@/views/Payment/PaymentCompletePage.view";
import { ReservationContentProps } from "@/views/Payment/Payment.view";
import styles from "@/views/Payment/Payment.view.module.scss";

const cx = cn.bind(styles);

export default function PaymentCompletePage() {
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
  ];

  return (
    <div className={cx("page-layout")}>
      <div className={cx("page")}>
        <PaymentComplete reservations={reservations} />
      </div>
    </div>
  );
}
