import React from "react";
import cn from "classnames/bind";
import styles from "@/views/Payment/Payment.view.module.scss";
import MypageReservation from "@/views/MypageReservation/MypageReservation.view";

const cx = cn.bind(styles);

export default function MypageReservationPagePage() {
  return (
    <div className={cx("page-layout")}>
      <div className={cx("page")}>
        <MypageReservation />
      </div>
    </div>
  );
}
