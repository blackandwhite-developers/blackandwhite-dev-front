import React from "react";
import cn from "classnames/bind";
import UserPage from "@/views/Payment/PaymentUserPage.view";
import styles from "@/views/Payment/Payment.view.module.scss";
import Header from "@/app/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";

const cx = cn.bind(styles);

export default function PaymentUserPage() {
  return (
    <div className={cx("page-layout")}>
      <div className={cx("page")}>
        <Header title={"예약자 정보"} leftIcon={<FaAngleLeft />} />
        <UserPage />
      </div>
    </div>
  );
}
