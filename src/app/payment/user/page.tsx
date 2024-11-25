"use client";
import React from "react";
import cn from "classnames/bind";
import UserPage from "@/views/Payment/PaymentUserPage.view";
import styles from "@/views/Payment/Payment.view.module.scss";
import Header from "@/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import { UserContentProps } from "@/views/Payment/PaymentUserPage.view";
import { useRouter } from "next/navigation";

const cx = cn.bind(styles);

export default function PaymentUserPage() {
    const userinput: UserContentProps[] = [
        {
            title: "예약자 이름",
            inPutText: "허태영",
        },
        {
            title: "휴대폰 번호",
            inPutText: "010-1234-5678",
        },
    ];

    const router = useRouter();

    const handleGoBack = () => {
        router.back();
    };

    return (
        <div className={cx("page-layout", "user-payment-layout")}>
            <div className={cx("page")}>
                <Header
                    title={"예약자 정보"}
                    leftIcon={<FaAngleLeft onClick={handleGoBack} />}
                />
                <UserPage userinput={userinput} />
            </div>
        </div>
    );
}
