"use client";
import React from "react";
import styles from "./CompletePayMethod.view.module.scss";
import cn from "classnames/bind";
import PaymentCard from "./PaymentCard.view";

const cx = cn.bind(styles);

interface CompletePayProps {
    payMethodTitle: string;
    payMethodValue: string;
}

interface CompletePayMethodProps {
    paymentMethod: string;
    paymentDate: string;
    paymentStatus: string;
    orderNumber: string;
}

// 더미 데이터
const paymentData = {
    paymentMethod: "신용카드",
    paymentDate: "2024-11-12 10:57 AM",
    paymentStatus: "결제 완료",
    orderNumber: "2022122766267190",
};

const CompletePayContent = ({
    payMethodTitle,
    payMethodValue,
}: CompletePayProps) => (
    <div className={cx("paydata-box")}>
        <p className={cx("title-text")}>{payMethodTitle}</p>
        <p className={cx("value-text")}>{payMethodValue}</p>
    </div>
);

const CompletePayMethod = ({
    paymentMethod,
    paymentDate,
    paymentStatus,
    orderNumber,
}: CompletePayMethodProps) => {
    return (
        <div>
            <PaymentCard title="결제 정보">
                <div className={cx("paydata-container")}>
                    <CompletePayContent
                        payMethodTitle="결제 수단"
                        payMethodValue={paymentMethod}
                    />
                    <CompletePayContent
                        payMethodTitle="결제 일시"
                        payMethodValue={paymentDate}
                    />
                    <CompletePayContent
                        payMethodTitle="결제 상태"
                        payMethodValue={paymentStatus}
                    />
                    <CompletePayContent
                        payMethodTitle="주문 번호"
                        payMethodValue={orderNumber}
                    />
                </div>
            </PaymentCard>
        </div>
    );
};

const DummyCompletePayMethod = () => {
    return <CompletePayMethod {...paymentData} />;
};

export default DummyCompletePayMethod;
