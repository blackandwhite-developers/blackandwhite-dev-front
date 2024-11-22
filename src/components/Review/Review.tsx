"use client";

import { FaRegStar } from "react-icons/fa";
import styles from "./Review.module.scss";
import cn from "classnames/bind";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const cx = cn.bind(styles);

type ReviewProps = {
    image?: string[];
    rating: string;
    thumbnail?: string | { src: string };
    nickname: string;
    date: string | number;
    serviceProduct: string;
    reviewContent: string;
};

const Review = (props: ReviewProps) => {
    const {
        image,
        thumbnail = "/mypage/Thumbnail.png",
        nickname,
        date,
        serviceProduct,
        reviewContent,
        rating,
    } = props;
    const images = Array.isArray(image)
        ? image
        : image
        ? [image]
        : [];

    const thumbnailSrc =
        typeof thumbnail === "string" ? thumbnail : thumbnail.src;

    return (
        <div className={cx("ReviewContainer")}>
            <div className={cx("ReviewWriteWrapper")}>
                <div className={cx("ReviewAuthorInform")}>
                    <Image
                        src={thumbnailSrc}
                        alt="썸네일"
                        width={41}
                        height={41}
                    />
                    <div className={cx("ReviewAuthor")}>
                        <p className={cx("ReviewNickname")}>{nickname}</p>
                        <div className={cx("ReviewRationg")}>
                            <div className={cx("StarRating")}>
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <p className={cx("RatingAverage")}>{rating}</p>
                        </div>
                    </div>
                </div>
                <p className={cx("ReviewTimestamp")}>{date}</p>
                <p className={cx("ServiceProduct")}>{serviceProduct}</p>
                <div className={cx("ReviewContent")}>
                    <p>{reviewContent}</p>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={2}
                        pagination={{ clickable: true }}
                    >
                        {images.map((url: string, index: number) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={url}
                                    alt={`Review Image ${index + 1}`}
                                    width={135}
                                    height={99}
                                    style={{ borderRadius: "10px" }}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Review;
