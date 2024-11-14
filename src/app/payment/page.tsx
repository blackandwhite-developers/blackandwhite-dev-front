import React from "react";
import PaymentView, {
  ReservationContentProps,
} from "@/views/Payment/Payment.view";
import PaymentUser from "@/views/Payment/PaymentUesr.view";
import PaymentCoupon from "@/views/Payment/PaymentCoupon.view";
import ReservetionUser from "@/views/Payment/PaymentUesr.view";
import styles from "@/views/Payment/Payment.view.module.scss";
import cn from "classnames/bind";
import ReservationSection from "@/views/Payment/Payment.view";
import PaymentSale from "@/views/Payment/PaymentSale.view";
import PaymentMethod from "@/views/Payment/PaymentMethod.view";
import ReservetionCoupon from "@/views/Payment/PaymentCoupon.view";
import Header from "../components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";

const cx = cn.bind(styles);

export default function PaymentPage() {
  const reservations: ReservationContentProps[] = [
    {
      hotelName: "김포 마리나베이 호텔",
      roomType: "디럭스 트윈 (기존 2명/최대 2명)",
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
      roomType: "디럭스 트윈 (기존 2명/최대 2명)",
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
      roomType: "디럭스 트윈 (기존 2명/최대 2명)",
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

  const price = reservations.reduce((prev, cur) => {
    return cur.price + prev;
  }, 0);
  const discountPrice =
    reservations.reduce((prev, cur) => {
      return cur.discountPrice + prev;
    }, 0) * -1;
  const totalPrice = price + discountPrice;

  return (
    <div className={cx("page-layout")}>
      <div className={cx("page")}>
        <Header title={"예약"} leftIcon={<FaAngleLeft />} />
        <ReservationSection reservations={reservations} />
        <ReservetionUser />
        <ReservetionCoupon usablePointAmount={1200} usableCouponCount={2} />
        <PaymentSale
          price={price}
          discountPrice={discountPrice}
          totalPrice={totalPrice}
        />
        <PaymentMethod totalPrice={totalPrice} />
      </div>
    </div>
  );
}
