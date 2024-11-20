import React from "react";
import cn from "classnames/bind";
import CouponPage from "@/views/Payment/PaymentCouponPage.view";
import styles from "@/views/Payment/Payment.view.module.scss";
import Header from "@/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import PaymentCouponPageview, { CouponContentProps } from "@/views/Payment/PaymentCouponPage.view";

const cx = cn.bind(styles);

export default function PaymentCouponPage() {
  const coupons: CouponContentProps[] = [
    {
      title: "여름 파격 세일!",
      couponAmount: 5000,
      exp: "(~23.07.19 까지)",
    },
    {
      title: "떠나요 둘이서, 코코시 썸머 쿠폰",
      couponAmount: 10000,
      exp: "(~23.08.19 까지)",
    },
  ];

  return (
    <div className={cx("page-layout")}>
      <div className={cx("page")}>
        <Header title={"쿠폰 적용"} leftIcon={<FaAngleLeft />} />
        <CouponPage coupons={coupons} />
        {/* <AbleBtn
          label={`${(totalPrice || 0).toLocaleString()}원 결제하기`}
          onClick={() => router.push("/payment/complete")}
        /> */}
      </div>
    </div>
  );
}
