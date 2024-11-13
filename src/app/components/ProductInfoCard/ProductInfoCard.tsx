"use client";

import React from "react";
import styles from "./ProductInfoCard.module.scss";
import cn from "classnames/bind";

import { FaRegStar } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
// import Image from "next/image";

const cx = cn.bind(styles);

type ProductInfoCardProps = {
    imageUrl: string;
    label: string;
    title: string;
    rating: string;
    review: string | number;
    location: string;
    price?: string | number;
};

const ProductInfoCard = (props: ProductInfoCardProps) => {
    const { imageUrl, label, title, rating, review, location, price } = props;
    return (
        <div className={cx("ProductContainer")}>
            <p className={cx("productBoxImage")}>
                <img src={`${imageUrl}`} alt={`${title}`} />
            </p>

            <div className={cx("ProductWrapper")}>
                <p className={cx("ProductCategory")}>{label}</p>
                <div className={cx("ProductTitleWrapper")}>
                    <h1 className={cx("ProductTitle")}>{title}</h1>
                </div>
                <div className={cx("ProductRating")}>
                    <p className={cx("ProductRatingText")}>{rating}</p>
                    <p className={cx("ProductStarRating")}>
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                    </p>
                    <p className={cx("ProductReviewCount")}>({review})</p>
                </div>
                <div className={cx("ProductLocation")}>
                    <p className={cx("ProductLocationIcon")}>
                        <IoLocationOutline />
                    </p>
                    <p>{location}</p>
                </div>
                <div className={cx("ProductPrice")}>{price}</div>
            </div>
        </div>
    );
};

export default ProductInfoCard;
