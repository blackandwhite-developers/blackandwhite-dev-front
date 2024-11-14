"use client";
import React, { useState } from "react";
import styles from "./Calander.view.module.scss";
import cn from "classnames/bind";
import DatePicker from "@/app/components/DatePicker/DatePicker";
import Header from "@/app/components/Header/Header";
import { MdClose } from "react-icons/md";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { DateBtn } from "@/app/components/Button/DateBtn";
import { MemberBtn } from "@/app/components/Button/MemberBtn";
import { AbleBtn } from "@/app/components/Button/AbleBtn";

const cx = cn.bind(styles);

const CalanderView = () => {
  const [adultCount, setAdultCount] = useState<number>(0);
  const [childCount, setChildCount] = useState<number>(0);

  const handleAdultCountChange = (operation: "increase" | "decrease", event: React.MouseEvent) => {
    event.stopPropagation();
    if (operation === "increase") {
      setAdultCount(adultCount + 1);
    } else if (adultCount <= 0) {
      return alert("성인은 0명 아래로 내려갈 수 없습니다.");
    } else {
      setAdultCount(adultCount - 1);
    }
  };

  const handleChildCountChange = (operation: "increase" | "decrease", event: React.MouseEvent) => {
    event.stopPropagation();
    if (operation === "increase") {
      setChildCount(childCount + 1);
    } else if (childCount <= 0) {
      return alert("아동은 0명 아래로 내려갈 수 없습니다.");
    } else {
      setChildCount(childCount - 1);
    }
  };

  return (
    <div className={cx("calander-contianer")}>
      <Header title={"날짜 선택"} leftIcon={<MdClose />} />
      <div className={cx("about")}>
        <DateBtn label="6.2화 - 6.3수"></DateBtn>
        <MemberBtn label="성인 2명"></MemberBtn>
      </div>

      <div className={cx("calander")}>
        <DatePicker />
      </div>

      <div className={cx("middle-line")}></div>

      <div className={cx("member-info")}>
        <h4>인원</h4>
        <div className={cx("member")}>
          <div className={cx("adult")}>
            <span>성인</span>
            <div className={cx("adult-containder")}>
              <button className="minus" style={{ color: "#8728ff" }} onClick={(e) => handleAdultCountChange("decrease", e)}>
                <CiCircleMinus />
              </button>
              {adultCount}
              <button className="plus" style={{ color: "#8728ff" }} onClick={(e) => handleAdultCountChange("increase", e)}>
                <CiCirclePlus />
              </button>
            </div>
          </div>

          <div className={cx("child")}>
            <span>아동</span>
            <div className={cx("child-container")}>
              <button className="minus" style={{ color: "#8728ff" }} onClick={(e) => handleChildCountChange("decrease", e)}>
                <CiCircleMinus />
              </button>
              {childCount}
              <button className="plus" style={{ color: "#8728ff" }} onClick={(e) => handleChildCountChange("increase", e)}>
                <CiCirclePlus />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("bottomBtn")}>
        <AbleBtn label="2023.06.02(화) ~ 2023.06.03(수),총 2명"></AbleBtn>
      </div>
    </div>
  );
};

export default CalanderView;
