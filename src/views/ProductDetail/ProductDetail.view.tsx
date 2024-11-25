"use client";
import React, { useCallback, useEffect, useState } from "react";
import cn from "classnames/bind";
import styles from "./ProductDetail.view.module.scss";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { FaAngleLeft } from "react-icons/fa6";
import Header from "@/components/Header/Header";
import { DateBtn } from "@/components/Button/DateBtn";
import { MemberBtn } from "@/components/Button/MemberBtn";
import ProductDetailCard from "@/components/ProductDetailCard/ProductDetailCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { AbleBtn } from "@/components/Button/AbleBtn";
import Review from "@/components/Review/Review";
import TotalReviewCard from "@/components/TotalReviewCard/TotalReviewCard";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import {
    selectedDateRangeAtom,
    adultCountAtom,
    childCountAtom,
} from "@/views/SearchResult/Calander/Calander.view";
import Rating from "@/components/RatingStarCount/Rating";
import { recentRoomsAtom } from "@/atoms/recentRooms";

const cx = cn.bind(styles);

export interface DateRange {
    startDate: Date;
    endDate: Date;
}
export interface ProductDetailProps {
    data: {
        id: string;
        category: { id: string; title: string; thumbnail: string };
        name: string;
        rating: number;
        count: number;
        image: string;
        price: number;
        distance: string;
    };
    productDetailsArray: Array<{
        image: string;
        event: string;
        name: string;
        capacity: { standard: number; maximum: number };
        time: { checkIn: string; checkOut: string };
        price: { price: number };
        stock: number;
    }>;
}

const ProductDetail = (props: ProductDetailProps) => {
    const { data, productDetailsArray } = props;
    const [, setRecentView] = useAtom(recentRoomsAtom);

    const [selectedTab, setSelectedTab] = useState("room");

    const router = useRouter();

    const updateRecentRooms = useCallback(() => {
        if (!data) return;
        setRecentView((prev) => {
            const isExist = prev.lodges.some((lodge) => lodge.id === data.id);
            if (isExist) {
                const oldRecent = prev.lodges.filter(
                    (lodge) => lodge.id !== data.id
                );
                return { lodges: [data, ...oldRecent] };
            } else {
                return { lodges: [data, ...prev.lodges] };
            }
        });
    }, [data, setRecentView]);

    useEffect(() => {
        updateRecentRooms();
    }, [updateRecentRooms]);

    /** 상단 이미지 더미 데이터 */
    const images = [
        "/images/HotelImage1.png",
        "/images/HotelImage1.png",
        "/images/HotelImage1.png",
    ];

    /** 후기 더미 데이터 */
    const totalReviewData = {
        ratingAverage: 4.5,
        totalReview: 1136,
        reviewCounting: 80,
    };

    /** 후기 더미 데이터 */
    const reviews = [
        {
            image: [
                "/images/HotelImage1.png",
                "/images/HotelImage1.png",
                "/images/HotelImage1.png",
            ],
            rating: 4.5,
            nickname: "홍길동",
            date: "2024.11.23",
            serviceProduct: "[패키지] 스탠다드 디럭스 이용",
            reviewContent:
                "처음 방문했는데 너무 좋아요! 객실 상태도 정말 깔끔하고 무엇보다 직원분들이 정말 친절하셨습니다 ㅎㅎ 그리고 호텔인데 이정도면 가격도 정말 괜찮은 것 같아요~!",
        },
        {
            image: ["/images/HotelImage1.png"],
            rating: 1.0,
            nickname: "홍길동",
            date: "2024.11.10",
            serviceProduct: "[패키지] 스탠다드 디럭스 이용",
            reviewContent: "너무 추워요ㅜ",
        },
        {
            rating: 5.0,
            nickname: "홍길동",
            date: "2024.11.05",
            serviceProduct: "[패키지] 스탠다드 디럭스 이용",
            reviewContent: "너무 좋았습니당",
        },
    ];

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
    };

    const handleDateBtnClick = () => {
        router.push("/searchResult/calander");
    };

    const handleMemberBtnClick = () => {
        router.push("/searchResult/calander");
    };

    const [isFavorite, setIsFavorite] = useState(false);
    const handleFavoriteClick = () => {
        setIsFavorite((prevState) => !prevState);
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

    const handleGoBack = () => {
        router.back();
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
                            <img
                                src={src}
                                alt="호텔 이미지"
                                width={`100%`}
                                height={`100%`}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={cx("ProductInform")}>
                <p className={cx("ProductCategory")}>{data.category.title}</p>
                <div className={cx("ProductWrapper")}>
                    <div className={cx("ProductTitleWrapper")}>
                        <h1 className={cx("ProductTitle")}>{data.name}</h1>
                        <p
                            className="ProductFavorite"
                            onClick={handleFavoriteClick}
                        >
                            {isFavorite ? (
                                <IoIosHeart
                                    style={{
                                        fontSize: "22px",
                                        color: "#8728ff",
                                    }}
                                />
                            ) : (
                                <IoIosHeartEmpty style={{ fontSize: "22px" }} />
                            )}
                        </p>
                    </div>
                    <div className={cx("ProductRating")}>
                        <p className={cx("ProductRatingText")}>{data.rating}</p>
                        <div className={cx("ProductStarRating")}>
                            <Rating rating={data.rating} maxRating={5} />
                        </div>
                        <p className={cx("ProductReviewCount")}>{data.count}</p>
                    </div>
                    <div className={cx("ProductLocation")}>
                        <p className={cx("ProductLocationIcon")}>
                            <IoLocationOutline />
                        </p>
                        <p>{data.distance}</p>
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

                    <div className={cx("reservationSelectWrapper")}>
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
                                        image={review.image}
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

                        <div>
                            {selectedTab === "room" && (
                                <div>
                                    <div className={cx("ReservationSelectBtn")}>
                                        <DateBtn
                                            label={
                                                selectedDateRange &&
                                                selectedDateRange.from &&
                                                selectedDateRange.to
                                                    ? `${formatDate(
                                                          selectedDateRange.from
                                                      )} ~ ${formatDate(
                                                          selectedDateRange.to
                                                      )}`
                                                    : "날짜를 선택해주세요"
                                            }
                                            onClick={handleDateBtnClick}
                                        />
                                        <MemberBtn
                                            label={
                                                <>
                                                    <span>
                                                        성인 {adultCount}명
                                                    </span>
                                                    <span>
                                                        아동 {childCount}명
                                                    </span>
                                                </>
                                            }
                                            onClick={handleMemberBtnClick}
                                        />
                                    </div>
                                    <div className={cx("ProductSelectCard")}>
                                        {productDetailsArray.map(
                                            (product, index) => (
                                                <ProductDetailCard
                                                    key={index}
                                                    image={product.image}
                                                    event={product.event}
                                                    name={product.name}
                                                    standard={
                                                        product.capacity
                                                            .standard
                                                    }
                                                    maximum={
                                                        product.capacity.maximum
                                                    }
                                                    checkIn={
                                                        product.time.checkIn
                                                    }
                                                    checkOut={
                                                        product.time.checkOut
                                                    }
                                                    price={product.price.price}
                                                    stock={product.stock}
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
        </div>
    );
};

export default ProductDetail;
