"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./ProductRoomDetail.view.module.scss";
import { BsCart2 } from "react-icons/bs";
import Header from "@/app/components/Header/Header";
import { DateBtn } from "@/app/components/Button/DateBtn";
import { MemberBtn } from "@/app/components/Button/MemberBtn";
import { FaAngleLeft } from "react-icons/fa6";
import ProductRoomDetailCard from "@/app/components/ProductRoomDetailCard/ProductRoomDetailCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Link from "next/link";
import { useRouter } from "next/navigation";

const cx = cn.bind(styles);

export interface ProductDetailProps {
    roomType: string;
    roomName: string;
    rating: number;
    review: number;
    location: number;
}

const ProductDetail = (props: ProductDetailProps) => {
    const {
        // roomType,
        // roomName,
        // rating,
        // review,
        // location,
    } = props;
    /** 상품 카드 더미 데이터 */
    const productDetailsArray = [
        {
            title: "대실" as const,
            infomation: {
                badge: "선착순 3,000원 할인",
                operationHoure: "24시간",
                useHoure: "2시간",
                checkInTime: "14:00",
                checkOutTime: "11:00",
                price: "50,000원",
                roomCount: 3,
            },
        },
        {
            title: "숙박" as const,
            infomation: {
                operationHoure: "24시간",
                useHoure: "4시간",
                checkInTime: "15:00",
                checkOutTime: "12:00",
                price: "50,000원",
                roomCount: 1,
            },
        },
    ];

    /** 상단 이미지 더미 데이터 */
    const images = [
        "/images/HotelImage1.png",
        "/images/HotelImage1.png",
        "/images/HotelImage1.png",
    ];

    const router = useRouter();
    const handleDateBtnClick = () => {
        router.push("/searchResult/calander");
    };

    const handleMemberBtnClick = () => {
        router.push("/searchResult/calander");
    };
    const [selectedDateRange, setSelectedDateRange] = useState<string>("");
    const [adultCount, setAdultCount] = useState<number>(0);
    const [childCount, setChildCount] = useState<number>(0);

    useEffect(() => {
        const storedDateRange = localStorage.getItem("selectedDateRange");
        const storedAdultCount = localStorage.getItem("adultCount");
        const storedChildCount = localStorage.getItem("childCount");

        if (storedDateRange) setSelectedDateRange(storedDateRange);
        if (storedAdultCount) setAdultCount(Number(storedAdultCount));
        if (storedChildCount) setChildCount(Number(storedChildCount));
    }, []);

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
                <div className={cx("ProductWrapper")}>
                    <div className={cx("ProductTitleWrapper")}>
                        <h1 className={cx("ProductTitle")}>프리미엄 트윈</h1>
                        <p>주차불가 / 마운틴뷰 or 오션뷰 or 시티뷰 랜덤배정</p>
                    </div>
                    <div className={cx("ProductDetailInformation")}>
                        <p className={cx("RoomInformation")}>객실 정보</p>
                        <p className={cx("PersonCountInformation")}>
                            기준 2인 (최대 3인)
                        </p>
                    </div>
                </div>

                <div className={cx("ProductCategoryWrapper")}>
                    <div className={cx("ProductCategoryLine")}></div>

                    <div className={cx("ReservationWrapper")}>
                        <div className={cx("ReservationSelectBtn")}>
                            <DateBtn
                                label={
                                    selectedDateRange || "날짜를 선택해주세요"
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

                        <div>
                            {productDetailsArray.map((product, index) => (
                                <ProductRoomDetailCard
                                    key={index}
                                    title={product.title}
                                    infomation={product.infomation}
                                    badge={product.infomation.badge || ""}
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
