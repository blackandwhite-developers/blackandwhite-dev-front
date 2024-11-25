"use client";

import React, { useEffect, useState } from "react";
import cn from "classnames/bind";
import styles from "./Hotel.module.scss";
import Header from "@/components/Header/Header";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import Rating from "@/components/RatingStarCount/Rating";
import ProductCard from "@/components/ProductCard/ProductCard";

const cx = cn.bind(styles);

export interface HotelViewProps {
  titleData: string;
  data: Array<ILodge>;
}

const HotelView = (props: HotelViewProps) => {
  const { titleData, data } = props;
  const [src, setSrc] = useState(
    "/categoryImage/HotelImg/img_hotel_banner.svg"
  );
  console.log(data);

  /** 뒤로가기 */
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

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
        <h3>지금 핫한 숙소</h3>

        <div className={cx("grid-container")}>
          {data.map((item) => {
            return (
              <ProductCard
                key={item.id}
                imageUrl={item.image}
                title={item.name}
                address={item.address}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HotelView;
