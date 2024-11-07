import React from "react";
import "./Payment.view.css";

export default function PaymentView() {
  return (
    <div className="payment">
      <HotelName />
      <ReservationName />
    </div>
  );
}

const HotelName = () => {
  return <div className="hotelname">김포 마리나베이 호텔</div>;
};

const ReservationName = () => {
  return <div>예약자 정보</div>;
};
