import React from "react";
import cn from "classnames/bind";
import UserPage from "@/views/Payment/PaymentUserPage.view";
import styles from "@/views/Payment/Payment.view.module.scss";

const cx = cn.bind(styles);

export default function PaymentUserPage() {
  return (
    <div className={cx("page-layout")}>
      <div className={cx("page")}>
        <UserPage />
      </div>
    </div>
  );
}
