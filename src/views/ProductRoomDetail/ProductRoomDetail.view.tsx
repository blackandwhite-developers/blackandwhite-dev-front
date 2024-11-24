"use client";
import React from "react";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./ProductRoomDetail.view.module.scss";
import { BsCart2 } from "react-icons/bs";
import Header from "@/components/Header/Header";
import { DateBtn } from "@/components/Button/DateBtn";
import { MemberBtn } from "@/components/Button/MemberBtn";
import { FaAngleLeft } from "react-icons/fa6";
import ProductRoomDetailCard from "@/components/ProductRoomDetailCard/ProductRoomDetailCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import {
  adultCountAtom,
  childCountAtom,
  selectedDateRangeAtom,
} from "@/views/SearchResult/Calander/Calander.view";

const cx = cn.bind(styles);

export interface ProductRoomDetailProps {
  data: {
    _id: string;
    event: string;
    name: string;
    time: {
      checkIn: string;
      checkOut: string;
    };
    price: { price: number };
    stock: number;
    capacity: { standard: number; maximum: number };
    startDate: string;
    endDate: string;
  };
}

const ProductRoomDetail = (props: ProductRoomDetailProps) => {
  const { data } = props;
  /** 상단 이미지 더미 데이터 */
  const images = [
    "/images/HotelImage1.png",
    "/images/HotelImage1.png",
    "/images/HotelImage1.png",
  ];

  /** 뒤로가기 */
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  const handleDateBtnClick = () => {
    router.push("/searchResult/calander");
  };

  const handleMemberBtnClick = () => {
    router.push("/searchResult/calander");
  };

  /** 날짜, 인원 불러오기 */
  const [adultCount] = useAtom(adultCountAtom);
  const [childCount] = useAtom(childCountAtom);
  const [selectedDateRange] = useAtom(selectedDateRangeAtom);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeek = daysOfWeek[date.getDay()];

    return `${year}.${month}.${day} (${dayOfWeek})`;
  };

  return (
    <div className={cx("ProductDetailWrapper")}>
      <div className={cx("ProductDetailHeader")}>
        <Header
          title={"객실상세"}
          leftIcon={<FaAngleLeft onClick={handleGoBack} />}
          rightIcon={
            <Link href="/home/detail/cart">
              <BsCart2 />
            </Link>
          }
        />
      </div>
      <div className={cx("ProductImage")}>
        <Swiper
          modules={[Pagination]}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Image src={src} alt="호텔 이미지" width={360} height={228} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={cx("ProductInform")}>
        <div className={cx("ProductWrapper")}>
          <div className={cx("ProductTitleWrapper")}>
            <h1 className={cx("ProductTitle")}>{data.name}</h1>

            <p>주차불가 / 마운틴뷰 or 오션뷰 or 시티뷰 랜덤배정</p>
          </div>
          <div className={cx("ProductDetailInformation")}>
            <p className={cx("RoomInformation")}>객실 정보</p>
            <p className={cx("PersonCountInformation")}>
              <span>
                기준 {data.capacity.standard}인 (최대 {data.capacity.maximum}인)
              </span>
            </p>
          </div>
        </div>

        <div className={cx("ProductCategoryWrapper")}>
          <div className={cx("ProductCategoryLine")}></div>

          <div className={cx("ReservationWrapper")}>
            <div className={cx("ReservationSelectBtn")}>
              <DateBtn
                label={
                  selectedDateRange &&
                  selectedDateRange.from &&
                  selectedDateRange.to
                    ? `${formatDate(selectedDateRange.from)} ~ ${formatDate(
                        selectedDateRange.to
                      )}`
                    : "날짜를 선택해주세요"
                }
                onClick={handleDateBtnClick}
              />
              <MemberBtn
                label={
                  <>
                    성인 {adultCount}명
                    <br />
                    아동 {childCount}명
                  </>
                }
                onClick={handleMemberBtnClick}
              />
            </div>
            <ProductRoomDetailCard data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRoomDetail;
