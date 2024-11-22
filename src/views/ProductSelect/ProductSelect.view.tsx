"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./ProductSelect.view.module.scss";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaAngleLeft } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import Header from "@/components/Header/Header";
import { DateBtn } from "@/components/Button/DateBtn";
import { MemberBtn } from "@/components/Button/MemberBtn";
import ProductSelectCard from "@/components/ProductSelectCard/ProductSelectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import TotalReviewCard from "@/components/TotalReviewCard/TotalReviewCard";
import Review from "@/components/Review/Review";
import { AbleBtn } from "@/components/Button/AbleBtn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import {
    selectedDateRangeAtom,
    adultCountAtom,
    childCountAtom,
} from "@/atoms/authAtom";
import Rating from "@/components/RatingStarCount/Rating";

const cx = cn.bind(styles);

export interface DateRange {
    startDate: Date;
    endDate: Date;
}
export interface ProductSelectProps {
    data: {
        category: { id: string; title: string; thumbnail: string };
        name: string;
        rating: number;
        count: number;
        distance: string;
    };
    productSelectData: Array<{
        image: string;
        event: string;
        name: string;
        capacity: { standard: number; maximum: number };
        time: { checkIn: string; checkOut: string };
        price: {price: number};
        stock: number;
    }>;
}

const ProductSelect = (props: ProductSelectProps) => {
    const { data, productSelectData } = props;

    /** 상품 카드 더미 데이터 */
    // const productSelectData = [
    //     {
    //         image: "/images/HotelImage1.png",
    //         label: "특가",
    //         title: "프리미엄 트윈",
    //         infomation: {
    //             parlorInfomation: "기준 2인 (최대 3인)",
    //             roomInformation: "대실",
    //             roomInfoDetail: "4시간기준",
    //             roomPrice: "40000",
    //             lodgeInformation: "숙박",
    //             lodgeInfoDetail: "16:00 ~ 11:00",
    //             lodgePrice: "75000",
    //         },
    //     },
    //     {
    //         image: "/images/HotelImage1.png",
    //         label: "세일",
    //         title: "디럭스 더블",
    //         infomation: {
    //             parlorInfomation: "기준 2인 (최대 3인)",
    //             roomInformation: "대실",
    //             roomInfoDetail: "4시간기준",
    //             roomPrice: "40000",
    //             lodgeInformation: "숙박",
    //             lodgeInfoDetail: "16:00 ~ 11:00",
    //             lodgePrice: "75000",
    //         },
    //     },
    //     {
    //         image: "/images/HotelImage1.png",
    //         label: "특가",
    //         title: "스위트룸",
    //         infomation: {
    //             parlorInfomation: "기준 2인 (최대 3인)",
    //             roomInformation: "대실",
    //             roomInfoDetail: "4시간기준",
    //             roomPrice: "40000",
    //             lodgeInformation: "숙박",
    //             lodgeInfoDetail: "16:00 ~ 11:00",
    //             lodgePrice: "75000",
    //         },
    //     },
    // ];

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
            image: [
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
            image: ["/images/HotelImage1.png"],
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

    const router = useRouter();

    const handleDateBtnClick = () => {
        router.push("/searchResult/calander");
    };

    const handleMemberBtnClick = () => {
        router.push("/searchResult/calander");
    };

    const [selectedDateRange, setSelectedDateRange] = useAtom(
        selectedDateRangeAtom
    );
    const [adultCount, setAdultCount] = useAtom(adultCountAtom);
    const [childCount, setChildCount] = useAtom(childCountAtom);

    useEffect(() => {
        if (adultCount === undefined) setAdultCount(1);
        if (childCount === undefined) setChildCount(0);

        if (!selectedDateRange) {
            const today = new Date();
            setSelectedDateRange({
                startDate: today,
                endDate: today,
                from: today,
                to: today,
                selected: true,
            });
        }
    }, [adultCount, childCount, selectedDateRange, setAdultCount, setChildCount, setSelectedDateRange]);

    const formattedDateRange = selectedDateRange
        ? {
            startDate: selectedDateRange.startDate.toLocaleDateString("ko-KR", {
                weekday: "short",
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            }),
            endDate: selectedDateRange.endDate.toLocaleDateString("ko-KR", {
                weekday: "short",
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            }),
        }
        : null;
    return (
        <div className={cx("ProductDetailWrapper")}>
            <div className={cx("ProductDetailHeader")}>
                <Header
                    title={"객실상세"}
                    leftIcon={<FaAngleLeft />}
                    rightIcon={
                        <Link href="/home/detail/cart">
                            <BsCart2 />
                        </Link>
                    }
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
                <p className={cx("ProductCategory")}>{data.category.title}</p>
                <div className={cx("ProductWrapper")}>
                    <div className={cx("ProductTitleWrapper")}>
                        <h1 className={cx("ProductTitle")}>{data.name}</h1>
                        <a href="" className={cx("ProductFavorite")}>
                            <IoIosHeartEmpty />
                        </a>
                    </div>
                    <div className={cx("ProductRating")}>
                        <p className={cx("ProductRatingText")}>{data.rating}</p>
                        <p className={cx("ProductStarRating")}>
                        <Rating rating={data.rating} maxRating={5} />
                        </p>
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
                                                formattedDateRange ? (
                                                    <>
                                                        {
                                                            formattedDateRange.startDate
                                                        }{" "}
                                                        ~
                                                        <br />
                                                        {
                                                            formattedDateRange.endDate
                                                        }
                                                    </>
                                                ) : (
                                                    "날짜를 선택해주세요"
                                                )
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
                                    <div className={cx("ProductSelectCard")}>
                                        {productSelectData.map(
                                            (product, index) => (
                                                <ProductSelectCard
                                                key={index}
                                                image={product.image}
                                                event={product.event}

                                                name={product.name}
                                                standard={product.capacity.standard}
                                                maximum={product.capacity.maximum}
                                                checkIn={product.time.checkIn}
                                                checkOut={product.time.checkOut}
                                                price={{ price: product.price.price }}
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

export default ProductSelect;
