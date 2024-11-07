import React from "react";
import cn from "classnames/bind";
import styles from "./Hotel.module.scss";

const cx = cn.bind(styles);

const Hotel = () => {
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

  return (
    <div className={cx("container")}>
      <div className={cx("header")}>헤더바 위치</div>
      <div className={cx("banner")}>
        <img src="./categoryImage/img_hotel_banner01.svg" alt="" />
      </div>

      <div className={cx("selectRegion")}>
        <h3>지역 선택</h3>

        <div className={cx("grid-container")}>
          {data.map((a, i) => {
            return (
              <div className={cx("grid-item")}>
                <img src={data[i].img} alt="motel" />
                <div className={cx("title")}>{data[i].title}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={cx("popularityRoom")}>
        <h3>지금 핫한 숙소!</h3>
      </div>
      <div className={cx("reservationClosedRoom")}>
        <h3>예약이 빨리 마감되는 숙소!</h3>
      </div>
    </div>
  );
};

export default Hotel;
