"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./PaymentMethod.view.module.scss";
import cn from "classnames/bind";
import PaymentCard from "./PaymentCard.view";
import DefaultCheckBox from "@/app/components/checkbox/default/DefaultCheckbox";
import { AbleBtn } from "@/app/components/Button/AbleBtn";
import { DisableBtn } from "@/app/components/Button/DisableBtn";

const cx = cn.bind(styles);

interface PaymentMethodButtonProps {
  icon: string;
  method: string;
  router: string;
}

const PaymentMethodButton = (props: PaymentMethodButtonProps) => {
  const router = useRouter();

  return (
    <div className={cx("button-box")}>
      <button
        type="button"
        className={cx("button-icon")}
        onClick={() => router.push(props.router)}
      >
        <img src={props.icon} alt="method-icon" className={cx("method-icon")} />
        <p>{props.method}</p>
      </button>
    </div>
  );
};

const PaymentMethod = ({ totalPrice }: { totalPrice: number }) => {
  const router = useRouter();
  const [privacyChecked, setPrivacyChecked] = React.useState(false);
  const [privacy2Checked, setPrivacy2Checked] = React.useState(false);

  console.log("privacyChecked", privacyChecked, privacy2Checked);
  return (
    <PaymentCard title="결제 수단 선택">
      <div className={cx("button-container")}>
        <PaymentMethodButton
          icon="/icon-asset/payment-asset/card.png"
          method="신용카드"
          router="/dashboard"
        />
        <PaymentMethodButton
          icon="/icon-asset/payment-asset/cash.png"
          method="실시간 계좌이체"
          router="/dashboard"
        />
        <PaymentMethodButton
          icon="/icon-asset/payment-asset/kakaopay.png"
          method="카카오페이"
          router="/dashboard"
        />
      </div>
      <div className={cx("checkbox-container")}>
        <DefaultCheckBox
          label="필수 약관 전체 동의"
          checked={privacyChecked && privacy2Checked}
          onChange={(e) => {
            if (e.target.checked) {
              setPrivacy2Checked(true);
              setPrivacyChecked(true);
            } else {
              setPrivacy2Checked(false);
              setPrivacyChecked(false);
            }
          }}
          fontWeight={700}
          fontSize={14}
        />
        <DefaultCheckBox
          label="[필수] 개인정보 수집 및 이용"
          isTransparent={true}
          checked={privacyChecked}
          onChange={(e) => setPrivacyChecked(e.target.checked)}
          isLabelGray={true}
          fontWeight={400}
          fontSize={12}
        />
        <DefaultCheckBox
          label="[필수] 개인정보 제 3자 제공"
          isTransparent={true}
          checked={privacy2Checked}
          onChange={(e) => setPrivacy2Checked(e.target.checked)}
          isLabelGray={true}
          fontWeight={400}
          fontSize={12}
        />
        <div className={cx("caption-container")}>
          <span>
            • 코코시는 통신판매중개자로서 통신판매의 당사자가 아니며, 상품의
            예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
          </span>
        </div>
      </div>
      {privacyChecked && privacy2Checked ? (
        <AbleBtn
          label={`${(totalPrice || 0).toLocaleString()}원 결제하기`}
          onClick={() => router.push("/payment/complete")}
        />
      ) : (
        <DisableBtn
          label={`${(totalPrice || 0).toLocaleString()}원 결제하기`}
          onClick={() => router.push("/payment/complete")}
        />
      )}
    </PaymentCard>
  );
};

export default PaymentMethod;
