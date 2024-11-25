"use client";

import React, { useEffect, useState } from "react";
import cn from "classnames/bind";
import styles from "./Hotel.module.scss";
import Header from "@/components/Header/Header";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Rating from "@/components/RatingStarCount/Rating";

const cx = cn.bind(styles);

export interface HotelViewProps {
  titleData: string;
  data?: Array<{ id: string; thumbnail: string; title: string }>;
  popData?: Array<{
    _id: string;
    name: string;
    rating: number;
    count: string;
    distance: string;
    price: number;
    image: string;
  }>;
}

const HotelView = (props: HotelViewProps) => {
  const { titleData, data, popData } = props;
  const [src, setSrc] = useState(
    "/categoryImage/HotelImg/img_hotel_banner.svg"
  );

  /** 뒤로가기 */
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };
  {
    popData?.map((a) => {
      console.log("Hotel ID:", a._id);
    });
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSrc("/categoryImage/HotelImg/img_hotel_banner.svg");
      } else {
        setSrc("/categoryImage/HotelImg/hotel_banner_desktop.png");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={cx("container")}>
      <div className={cx("header")}>
        <Link href={"/home"}>
          <Header
            title={titleData}
            leftIcon={<FaAngleLeft />}
            onClickLeft={handleGoBack}
          />
        </Link>
      </div>
      <div className={cx("banner")}>
        <img src={src} alt="호텔이미지" />
      </div>

      <div className={cx("selectRegion")}>
        <h3>지역 선택</h3>

        <div className={cx("grid-container")}>
          {data?.map((a, i) => {
            return (
              <div key={a.id} className={cx("grid-item")}>
                <Link href={`/searchResult`}>
                  <img src={a.thumbnail} alt="regoinImg" />
                  <div className={cx("title")}>{a.title}</div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HotelView;
