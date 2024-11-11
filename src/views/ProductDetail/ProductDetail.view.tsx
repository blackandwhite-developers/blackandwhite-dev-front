"use client";

import React, { useState } from "react";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./ProductDetail.view.module.scss";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import Header from "@/app/components/Header/Header";
import { DateBtn } from "@/app/components/Button/DateBtn";
import { MemberBtn } from "@/app/components/Button/MemberBtn";
import ProductDetailCard from "@/app/components/ProductDetailCard/ProductDetailCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

const cx = cn.bind(styles);

const ProductDetail = () => {
    const title = "김포 마리나베이 호텔";

    const productDetailsArray = [
        {
            imageUrl: "/images/HotelImage1.png",
            label: "특가",
            title: "프리미엄 트윈",
            infomation: {
                parlorInfomation: "기준 2인 (최대 3인)",
                checkInInfomation: "16:00",
                checkOutInfomation: "11:00",
                lodgePrice: "75,000",
                roomCount: 1,
            },
        },
        {
            imageUrl: "/images/HotelImage1.png",
            label: "스탠다드",
            title: "디럭스 더블",
            infomation: {
                parlorInfomation: "기준 2인 (최대 2인)",
                checkInInfomation: "15:00",
                checkOutInfomation: "11:00",
                lodgePrice: "75,000",
                roomCount: 3,
            },
        },
        {
            imageUrl: "/images/HotelImage1.png",
            label: "프리미엄",
            title: "슈페리어 트윈",
            infomation: {
                parlorInfomation: "기준 3인 (최대 4인)",
                checkInInfomation: "17:00",
                checkOutInfomation: "12:00",
                lodgePrice: "75,000",
                roomCount: 2,
            },
        },
    ];

    /** 상단 이미지 더미 데이터 */
    const images = [
        "/images/HotelImage1.png",
        "/images/HotelImage1.png",
        "/images/HotelImage1.png",
    ];

    const [selectedTab, setSelectedTab] = useState("room");

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
    };

    return (
        <div className={cx("ProductDetailWrapper")}>
            <div className={cx("ProductDetailHeader")}>
                <Header title={title} />
                <a href="/product/room" className={cx("CartIcon")}>
                    <BsCart2 />
                </a>
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
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
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
                        <button
                            className={cx("CategoryLink", {
                                selected: selectedTab === "room",
                            })}
                            onClick={() => handleTabClick("room")}
                        >
                            객실 선택
                        </button>
                        <button
                            className={cx("CategoryLink", {
                                selected: selectedTab === "review",
                            })}
                            onClick={() => handleTabClick("review")}
                        >
                            후기
                        </button>
                    </div>
                    <div className={cx("ProductCategoryLine")}></div>

                    <div>
                        <div className={cx("ReservationSelectBtn")}>
                            <DateBtn label={""} />
                            <MemberBtn label={"성인 1명"} />
                        </div>

                        <div>
                            {productDetailsArray.map((product, index) => (
                                <ProductDetailCard
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
