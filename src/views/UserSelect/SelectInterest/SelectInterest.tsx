"use client";

import React, { useState } from "react";
import cn from "classnames/bind";
import styles from "./SelectInterest.module.scss";
import Header from "@/app/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import Image from "next/image";
import { AbleBtn } from "@/app/components/Button/AbleBtn";

const cx = cn.bind(styles);

const SelectInterest = () => {
    /** 카테고리 데이터 */
    const categories = [
        {
            id: "hotel",
            label: "호캉스",
            src: "/categoryImage/ic_home_hotel.svg",
        },
        {
            id: "pool",
            label: "풀빌라",
            src: "/categoryImage/ic_home_pool.svg",
        },
        {
            id: "motel",
            label: "모텔",
            src: "/categoryImage/ic_home_motel.svg",
        },
        {
            id: "camping",
            label: "캠핑",
            src: "/categoryImage/ic_home_camping.svg",
        },
        {
            id: "guesthouse",
            label: "게스트하우스",
            src: "/categoryImage/ic_home_guesthouse.svg",
        },
        {
            id: "leisure",
            label: "레저",
            src: "/categoryImage/ic_home_leisure.svg",
        },
        {
            id: "airport",
            label: "공항",
            src: "/categoryImage/ic_home_airport.svg",
        },
    ];

    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );

    const handleCategoryClick = (category: string) => {
        setSelectedCategory((prev) => (prev === category ? null : category));
    };

    return (
        <div className={cx("SelectInterestWrapper")}>
            <Header leftIcon={<FaAngleLeft />} />
            <div className={cx("SelectInterestContent")}>
                <p className={cx("SelectInterest")}>관심사 선택</p>
                <p className={cx("SelectInterestInform")}>
                    나의 관심사에 맞는 선택지를 선택해주세요.
                    <br /> 홈 화면에 맞춤 컨텐츠가 제공됩니다.
                </p>
            </div>
            <div className={cx("SelectInterestCategoryWrapper")}>
                {categories.map((category) => (
                    <button
                        key={category.id}
                        className={cx("SelectInterestCategory", {
                            selected: selectedCategory === category.id,
                        })}
                        onClick={() => handleCategoryClick(category.id)}
                    >
                        <Image
                            src={category.src}
                            alt={`${category.label} 이미지`}
                            width={45}
                            height={45}
                        />
                        <p>{category.label}</p>
                    </button>
                ))}
            </div>
            <div className={cx("SelectInterestNextBtn")}>
                <AbleBtn label={"다음"} />
            </div>
        </div>
    );
};

export default SelectInterest;
