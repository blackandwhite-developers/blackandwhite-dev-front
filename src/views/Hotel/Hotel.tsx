import React from "react";
import cn from "classnames/bind";
import styles from "./Hotel.module.scss";
import Header from "@/app/components/Header/Header";
import Link from "next/link";

const cx = cn.bind(styles);

export interface HotelViewProps {
  titleData: string;
  data: Array<{ id: string; image: string; title: string }>;
  popData: Array<{ id: string; name: string; rate: string; count: string; distance: string; price: number; image: string }>;
}

const HotelView = (props: HotelViewProps) => {
  const { titleData, data, popData } = props;

  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <Link href={"/product/list"}>
          <Header title={titleData} />
        </Link>
      </div>
      <div className={cx("banner")}>
        <img src="/categoryImage/HotelImg/img_hotel_banner.svg" alt="" />
      </div>

      <div className={cx("selectRegion")}>
        <h3>지역 선택</h3>

        <div className={cx("grid-container")}>
          {data.map((a, i) => {
            return (
              <div key={a.id} className={cx("grid-item")}>
                <img src={a.image} alt="regoinImg" />
                <div className={cx("title")}>{a.title}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className={cx("popularityRoom")}>
        <h3>지금 핫한 숙소!</h3>

        <div className={cx("pop-grid")}>
          {popData.map((a, i) => (
            <div key={a.id} className={cx("pop-grid-item")}>
              <img src={a.image} alt={a.name} />
              <div className={cx("pop-title")}>{a.name}</div>
              <div className={cx("pop-rate-info")}>
                <div className={cx("pop-rate")}>{a.rate} </div>
                <div className={cx("pop-ratestar")}>★★★★☆ </div>
                <div className={cx("pop-count")}>({a.count})</div>
              </div>
              <div className={cx("pop-distance")}>{a.distance}</div>
              <div className={cx("pop-price")}>{a.price}원</div>
            </div>
          ))}
        </div>
      </div>

      {/* 데이터는 위와 동일한 데이터로 대체 */}
      <div className={cx("popularityRoom")}>
        <h3>예약이 빨리 마감되는 숙소!</h3>

        <div className={cx("pop-grid")}>
          {popData.map((a, i) => (
            <div key={i} className={cx("pop-grid-item")}>
              <img src={a.image} alt={a.name} />
              <div className={cx("pop-title")}>{a.name}</div>
              <div className={cx("pop-rate-info")}>
                <div className={cx("pop-rate")}>{a.rate} </div>
                <div className={cx("pop-ratestar")}>★★★★☆ </div>
                <div className={cx("pop-count")}>({a.count})</div>
              </div>
              <div className={cx("pop-distance")}>{a.distance}</div>
              <div className={cx("pop-price")}>{a.price}원</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelView;
