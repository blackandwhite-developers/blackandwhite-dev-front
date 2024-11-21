import React from "react";
import cn from "classnames/bind";
import UserPage from "@/views/Payment/PaymentUserPage.view";
import styles from "@/views/Payment/Payment.view.module.scss";
import Header from "@/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import EventView from "@/views/Home/Event/Event.view";

const cx = cn.bind(styles);

export default function EventViewPage() {
  return (
    <div className={cx("page-layout")}>
      <div className={cx("page")}>
        <EventView />
      </div>
    </div>
  );
}
