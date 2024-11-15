"use client";

import React from "react";
import cn from "classnames/bind";
import styles from "./WishList.module.scss";
import Header from "@/app/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import ProductInfoCard from "@/app/components/ProductInfoCard/ProductInfoCard";

const cx = cn.bind(styles);

export interface WishListProps {
    data: {
        roomImage: string;
        roomCategory: string;
        roomName: string;
        rating: string;
        starRating: string;
        review: number;
        location: string;
        price: string | number;
    }[];
}

const WishList = ({ data }: WishListProps) => {
    return (
        <div className={cx("WishListContainer")}>
            <Header title="위시리스트" leftIcon={<FaAngleLeft />} />
            <div className={cx("WishListWrapper")}>
                {data.map((item, index) => (
                    <ProductInfoCard
                        key={index}
                        imageUrl={item.roomImage}
                        label={item.roomCategory}
                        title={item.roomName}
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
