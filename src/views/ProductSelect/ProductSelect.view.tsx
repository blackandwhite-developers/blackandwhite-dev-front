"use client";

import React, { useState } from "react";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./ProductSelect.view.module.scss";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import Header from "@/app/components/Header/Header";
import { DateBtn } from "@/app/components/Button/DateBtn";
import { MemberBtn } from "@/app/components/Button/MemberBtn";
import ProductSelectCard from "@/app/components/ProductSelectCard/ProductSelectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import TotalReviewCard from "@/app/components/TotalReviewCard/TotalReviewCard";
import Review from "@/app/components/Review/Review";
import { AbleBtn } from "@/app/components/Button/AbleBtn";
import Link from "next/link";

const cx = cn.bind(styles);

export interface ProductSelectProps {
    roomType: string;
    roomName: string;
    rating: number;
    review: number;
    location: string;
}

const ProductSelect = (props: ProductSelectProps) => {
    const {
        // roomType,
        // roomName,
        // rating,
        // review,
        // location,
    } = props;
    const title = "김포 마리나베이 호텔";

    /** 상품 카드 더미 데이터 */
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
                <a href="" className={cx("CartIcon")}>
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
                                <Link href="/searchResult/calander">
                                    <div className={cx("ReservationSelectBtn")}>
                                        <DateBtn label={""} />
                                        <MemberBtn label={""} />
                                    </div>
                                </Link>
                                <div className={cx("ProductSelectCard")}>
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
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSelect;
