"use client";

import React from "react";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./ProductSelect.module.scss";
import { IoIosHeartEmpty, IoIosStarOutline } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import Header from "../components/Header/Header";
import { DateBtn } from "../components/Button/DateBtn";
import { MemberBtn } from "../components/Button/MemberBtn";
import ProductSelectCard from "@/app/components/ProductSelectCard/ProductSelectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const cx = cn.bind(styles);

const ProductDetail = () => {
    const title = "김포 마리나베이 호텔";
    const productSelectData = [
        {
            imageUrl: "/images/HotelImage1.png",
            label: "특가",
            title: "프리미엄 트윈",
            infomation: {
                parlorInfomation: "기준 2인 (최대 3인)",
                roomInformation: "대실",
                roomInfoDetail: "4시간기준",
                roomPrice: "40000",
                lodgeInformation: "숙박",
                lodgeInfoDetail: "16:00 ~ 11:00",
                lodgePrice: "75000",
            },
        },
        {
            imageUrl: "/images/HotelImage1.png",
            label: "세일",
            title: "디럭스 더블",
            infomation: {
                parlorInfomation: "기준 2인 (최대 3인)",
                roomInformation: "대실",
                roomInfoDetail: "4시간기준",
                roomPrice: "40000",
                lodgeInformation: "숙박",
                lodgeInfoDetail: "16:00 ~ 11:00",
                lodgePrice: "75000",
            },
        },
        {
            imageUrl: "/images/HotelImage1.png",
            label: "특가",
            title: "스위트룸",
            infomation: {
                parlorInfomation: "기준 2인 (최대 3인)",
                roomInformation: "대실",
                roomInfoDetail: "4시간기준",
                roomPrice: "40000",
                lodgeInformation: "숙박",
                lodgeInfoDetail: "16:00 ~ 11:00",
                lodgePrice: "75000",
            },
        },
    ];

    const images = [
        "/images/HotelImage1.png",
        "/images/HotelImage1.png",
        "/images/HotelImage1.png",
    ];

    return (
        <div className={cx("ProductDetailWrapper")}>
            <Header title={title} />
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
                            <Image
                                src={src}
                                alt="호텔 이미지"
                                width={360}
                                height={228}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={cx("ProductInform")}>
                <p className={cx("ProductCategory")}>호텔</p>
                <div className={cx("ProductWrapper")}>
                    <div className={cx("ProductTitleWrapper")}>
                        <h1 className={cx("ProductTitle")}>{title}</h1>
                        <a href="" className={cx("ProductFavorite")}>
                            <IoIosHeartEmpty />
                        </a>
                    </div>
                    <div className={cx("ProductRating")}>
                        <p className={cx("ProductRatingText")}>4.0</p>
                        <p className={cx("ProductStarRating")}>
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                        </p>
                        <p className={cx("ProductReviewCount")}>(1,136)</p>
                    </div>
                    <div className={cx("ProductLocation")}>
                        <p className={cx("ProductLocationIcon")}>
                            <IoLocationOutline />
                        </p>
                        <p>김포공항역 3분</p>
                    </div>
                </div>

                <div className={cx("ProductCategoryWrapper")}>
                    <div className={cx("ProductCategoryBadge")}>
                        <button className={cx("CategoryLink", "selected")}>
                            객실 선택
                        </button>
                        <button className={cx("CategoryLink")}>후기</button>
                    </div>
                    <div className={cx("ProductCategoryLine")}></div>

                    <div>
                        <div className={cx("ReservationSelectBtn")}>
                            <DateBtn label={""} />
                            <MemberBtn label={""} />
                        </div>

                        <div>
                            {productSelectData.map((product, index) => (
                                <ProductSelectCard
                                    key={index}
                                    imageUrl={product.imageUrl}
                                    label={product.label}
                                    title={product.title}
                                    infomation={product.infomation}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
