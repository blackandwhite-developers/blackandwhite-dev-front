"use client";
import React, { useState } from "react";
import styles from "./Payment.module.scss";
import cn from "classnames/bind";
import DefaultCheckBox from "../components/checkbox/default/DefaultCheckbox";

const cx = cn.bind(styles);

const ReservetionContent = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleChange = (value: string) => {
    setSelected(selected === value ? null : value); // 동일한 값을 선택하면 취소
  };

  return (
    <div className={cx("Wrapper")}>
      <div className={cx("reservation-container")}>
        <p className={cx("hotelname-title")}>김포 마리나베이 호텔</p>
        <p className={cx("room-detailcontent")}>
          디럭스 트윈 (기준 2명/최대 2명)
        </p>
      </div>
      <div className={cx("reservationdate-container")}>
        <div className={cx("reservationdate-box")}>
          <div className={cx("date-box")}>
            <p className={cx("check")}>체크인</p>
            <p className={cx("date-text")}>2024.11.07(목)</p>
            <p className={cx("date-time")}>16:00</p>
          </div>
          <div className={cx("day-box")}>
            <p className={cx("day-text")}>1박</p>
          </div>
          <div className={cx("date-box")}>
            <p className={cx("check")}>체크아웃</p>
            <p className={cx("date-text")}>2024.11.08(금)</p>
            <p className={cx("date-time")}>11:00</p>
          </div>
        </div>
      </div>
      <div className={cx("visit-container")}>
        <div className={cx("visit-box")}>
          <p className={cx("visit-text")}>방문수단*</p>
          <div className={cx("visit-checkBox")}>
            <label className={cx("custom-checkbox")}>
              <input
                type="checkbox"
                checked={selected === "walk"}
                onChange={() => handleChange("walk")}
              />
              <span></span>도보
            </label>
            <label className={cx("custom-checkbox")}>
              <input
                type="checkbox"
                checked={selected === "car"}
                onChange={() => handleChange("car")}
              />
              <span></span>차량
            </label>
          </div>
        </div>
      </div>
      <div className={cx("pay-container")}>
        <p className={cx("pay-text")}>결제금액</p>
        <p className={cx("pay-amount")}>75,000원</p>
      </div>
    </div>
  );
};

export default ReservetionContent;
