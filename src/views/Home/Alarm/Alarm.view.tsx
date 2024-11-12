import React from "react";
import styles from "./Alarm.module.scss";
import cn from "classnames/bind";
import Header from "@/app/components/Header/Header";

const cx = cn.bind(styles);

const AlarmPageView = () => {
  const Data = [
    {
      img: "/images/alert/alram_present.svg",
      title: "선물이 도착했어요",
      content: "2023/1/1일까지 사용할 수 있는 쿠폰이 도착했습니다.",
      time: "3분",
    },
    {
      img: "/images/alert/alram_point.svg",
      title: "혜택 추천",
      content: "포인트를 받을 수 있는 기간이 얼마 남지 않았어요.",
      time: "9시간",
    },
    {
      img: "/images/alert/alram_point.svg",
      title: "포인트 적립",
      content: "포인트 적립 이벤트 기간을 확인해보세요!",
      time: "10시간",
    },
  ];
  return (
    <div className={cx("alert-wrapper")}>
      <Header title="알림"></Header>
      <div className={cx("alert-container")}>
        {Data.map((a, i) => {
          return (
            <div className={cx("alert-card")} key={i}>
              <img src={a.img} alt="" />
              <div className={cx("alert-card-about")}>
                <p className={cx("title")}>{a.title}</p>
                <p className={cx("content")}>{a.content}</p>
                <div>
                  <p className={cx("time")}>{a.time} 전</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AlarmPageView;
