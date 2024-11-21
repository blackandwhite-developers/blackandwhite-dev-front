"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import styles from "./Event.view.module.scss";
import cn from "classnames/bind";
import Header from "@/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";

const cx = cn.bind(styles);

interface EventRowProps {
  bannerImage?: string;
  content: string;
}

const EventRow = (props: EventRowProps) => {
  return (
    <div className={cx("bannerbox")}>
      <p className={cx("bannerimage")}>{props.bannerImage}</p>
      <p className={cx("content")}>{props.content}</p>
      <p className={cx("content")}>{props.content}</p>
    </div>
  );
};

const EventView = () => {
  const router = useRouter();
  /** 뒤로가기 */
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className={cx("FindPwWrapper")}>
      <Header
        title="이벤트"
        leftIcon={<FaAngleLeft onClick={handleGoBack} />}
      />
      <div className={cx("event-container")}>
        <EventRow
          bannerImage="결제 금액"
          content="6~8월까지 여름동안 숙박 이벤트가 진행됩니다! 전 지역 대상으로 할인이 진행되며, SNS에 코코시 계정을 태그하고 숙박이용 시 다양한 사은품이 제공됩니다."
        />
        <EventRow content="여름휴가 마지막 기회, 무료숙박으로 특별한 추억 만들어보세요!(*이벤트 기간:23/06/01 ~ 23/08/31)" />
      </div>
    </div>
  );
};

export default EventView;
