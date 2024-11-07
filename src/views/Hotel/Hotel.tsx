import React from "react";
import cn from "classnames/bind";
import styles from "./Hotel.module.scss";

const cx = cn.bind(styles);

const HotelView = () => {
  const data = [
    {
      img: "/categoryImage/img_hotel_seoul.svg",
      title: "서울/경기",
    },
    {
      img: "/categoryImage/img_hotel_chungcheong.svg",
      title: "충청",
    },
    {
      img: "/categoryImage/img_hotel_gyengsang.svg",
      title: "경상",
    },
    {
      img: "/categoryImage/img_hotel_jeonla.svg",
      title: "전라",
    },
    {
      img: "/categoryImage/img_hotel_gangwon.svg",
      title: "강원",
    },
    {
      img: "/categoryImage/img_hotel_jeju.svg",
      title: "제주",
    },
  ];

  const PopData = [
    {
      img: "/categoryImage/HotelImg/pop_01.svg",
      name: "김포 마리나베이 호텔",
      rate: "4.0",
      count: "136",
      distance: "김포공항역 3분",
      price: "75,000",
    },
    {
      img: "/categoryImage/HotelImg/pop_02.svg",
      name: "더블유 에비뉴 김포",
      rate: "4.0",
      count: "136",
      distance: "김포공항역 5분",
      price: "85,000",
    },
    {
      img: "/categoryImage/HotelImg/pop_03.svg",
      name: "리벨 닷지 호텔",
      rate: "4.0",
      count: "136",
      distance: "경단역 5분",
      price: "85,000",
    },
    {
      img: "/categoryImage/HotelImg/pop_04.svg",
      name: "김포 B hotel",
      rate: "4.0",
      count: "136",
      distance: "김포공항역 10분",
      price: "55,000",
    },

    {
      img: "/categoryImage/HotelImg/pop_05.svg",
      name: "호텔 Arbo",
      rate: "4.0",
      count: "136",
      distance: "아시아 게임 주 경기장 5분",
      price: "65,000",
    },
    {
      img: "/categoryImage/HotelImg/pop_06.svg",
      name: "호텔 더 루티크",
      rate: "4.0",
      count: "136",
      distance: "김포공항역 3분",
      price: "105,000",
    },
  ];

  return (
    <div className={cx("container")}>
      <div className={cx("header")}>헤더바 위치</div>
      <div className={cx("banner")}>
        <img src="./categoryImage/img_hotel_banner01.svg" alt="" />
      </div>

      <div className={cx("selectRegion")}>
        <h3>지역 선택</h3>

        <div className={cx("grid-container")}>
          {data.map((a) => {
            return (
              <div key={a.title} className={cx("grid-item")}>
                <img src={a.img} alt="regoinImg" />
                <div className={cx("title")}>{a.title}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={cx("popularityRoom")}>
        <h3>지금 핫한 숙소!</h3>
        <div className={cx("pop-grid-item")}>
          <img src={PopData[0].img} alt="" />
          <div className={cx("pop-title")}>{PopData[0].name}</div>
          <div className={cx("pop-raet-info")}>
            <div className={cx("pop-rate")}>{PopData[0].rate}</div>
            <div className={cx("pop-count")}>{PopData[0].count}</div>
          </div>
          <div className={cx("pop-distance")}>{PopData[0].distance}</div>
          <div className={cx("pop-price")}>{PopData[0].price}</div>
        </div>

        <div className={cx("pop-grid-item")}>
          <img src={PopData[1].img} alt="" />
          <div className={cx("pop-title")}>{PopData[1].name}</div>
          <div className={cx("pop-raet-info")}>
            <div className={cx("pop-rate")}>{PopData[1].rate}</div>
            <div className={cx("pop-count")}>{PopData[1].count}</div>
          </div>
          <div className={cx("pop-distance")}>{PopData[1].distance}</div>
          <div className={cx("pop-price")}>{PopData[1].price}</div>
        </div>
      </div>
      <div className={cx("reservationClosedRoom")}>
        <h3>예약이 빨리 마감되는 숙소!</h3>
      </div>
    </div>
  );
};

export default HotelView;
