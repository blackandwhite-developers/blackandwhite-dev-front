"use client";

import React, { useState } from "react";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./ProductDetail.view.module.scss";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa6";
import Header from "@/app/components/Header/Header";
import { DateBtn } from "@/app/components/Button/DateBtn";
import { MemberBtn } from "@/app/components/Button/MemberBtn";
import ProductDetailCard from "@/app/components/ProductDetailCard/ProductDetailCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { AbleBtn } from "@/app/components/Button/AbleBtn";
import Review from "@/app/components/Review/Review";
import TotalReviewCard from "@/app/components/TotalReviewCard/TotalReviewCard";

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

    /** 후기 더미 데이터 */
    const totalReviewData = {
        ratingAverage: "4.5",
        totalReview: 1136,
        reviewCounting: 80,
    };

    /** 후기 더미 데이터 */
    const reviews = [
        {
            imageUrl: [
                "/images/HotelImage1.png",
                "/images/HotelImage1.png",
                "/images/HotelImage1.png",
            ],
            rating: "4.5",
            nickname: "홍길동",
            date: "2024.11.23",
            serviceProduct: "[패키지] 스탠다드 디럭스 이용",
            reviewContent:
                "처음 방문했는데 너무 좋아요! 객실 상태도 정말 깔끔하고 무엇보다 직원분들이 정말 친절하셨습니다 ㅎㅎ 그리고 호텔인데 이정도면 가격도 정말 괜찮은 것 같아요~!",
        },
        {
            imageUrl: ["/images/HotelImage1.png"],
            rating: "1.0",
            nickname: "홍길동",
            date: "2024.11.10",
            serviceProduct: "[패키지] 스탠다드 디럭스 이용",
            reviewContent: "너무 추워요ㅜ",
        },
        {
            rating: "5.0",
            nickname: "홍길동",
            date: "2024.11.05",
            serviceProduct: "[패키지] 스탠다드 디럭스 이용",
            reviewContent: "너무 좋았습니당",
        },
    ];

    const [selectedTab, setSelectedTab] = useState("room");

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
    };

    return (
        <div className={cx("ProductDetailWrapper")}>
            <div className={cx("ProductDetailHeader")}>
                <Header
                    title={"객실상세"}
                    leftIcon={<FaAngleLeft />}
                    rightIcon={<BsCart2 />}
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
                        {selectedTab === "review" && (
                            <div>
                                <TotalReviewCard
                                    ratingAverage={
                                        totalReviewData.ratingAverage
                                    }
                                    totalReview={totalReviewData.totalReview}
                                    reviewCounting={
                                        totalReviewData.reviewCounting
                                    }
                                />
                                {reviews.map((review, index) => (
                                    <Review
                                        key={index}
                                        imageUrl={review.imageUrl}
                                        rating={review.rating}
                                        nickname={review.nickname}
                                        date={review.date}
                                        serviceProduct={review.serviceProduct}
                                        reviewContent={review.reviewContent}
                                    />
                                ))}
                                <div className={cx("ReviewWriteBtn")}>
                                    <AbleBtn label={"후기 작성하기"} />
                                </div>
                            </div>
                        )}

                        {selectedTab === "room" && (
                            <div>
                                {" "}
                                <div className={cx("ReservationSelectBtn")}>
                                    <DateBtn label={""} />
                                    <MemberBtn label={""} />
                                </div>
                                <div className={cx("ProductSelectCard")}>
                                    {productDetailsArray.map(
                                        (product, index) => (
                                            <ProductDetailCard
                                                key={index}
                                                imageUrl={product.imageUrl}
                                                label={product.label}
                                                title={product.title}
                                                infomation={product.infomation}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
