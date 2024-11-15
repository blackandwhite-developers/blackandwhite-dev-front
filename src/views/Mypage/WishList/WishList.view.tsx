import React from "react";
import cn from "classnames/bind";
import styles from "./WishList.module.scss";
import Header from "@/app/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import ProductInfoCard from "@/app/components/ProductInfoCard/ProductInfoCard";

const cx = cn.bind(styles);

export interface WishListProps {
    roomImage: string;
    roomType: string;
    roomName: string;
    rating: string | number;
    starRating: string;
    review: number;
    location: string | number;
    price: string | number;
}

const wishListData = [
    {
        imageUrl: "/images/HotelImage1.png",
        label: "호텔",
        title: "김포 마리나베이 호텔",
        rating: "4.5",
        review: 1200,
        location: "김포공항역 3분",
        price: "30,000원",
    },
    {
        imageUrl: "/images/HotelImage1.png",
        label: "펜션",
        title: "고성 호크 펜션",
        rating: "4.0",
        review: 800,
        location: "부산, 대한민국",
        price: "₩ 20,000",
    },
];

const WishList = (props: WishListProps) => {
    const {
        roomImage,
        roomType,
        roomName,
        rating,
        starRating,
        review,
        location,
        price,
    } = props;
    return (
        <div className={cx("WishListContainer")}>
            <Header title="위시리스트" leftIcon={<FaAngleLeft />} />
            <div className={cx("WishListWrapper")}>
                {wishListData.map((item, index) => (
                    <ProductInfoCard
                        key={index}
                        imageUrl={item.imageUrl}
                        label={item.label}
                        title={item.title}
                        rating={item.rating}
                        review={item.review}
                        location={item.location}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default WishList;
