"use client";

import React, { useState } from "react";
import cn from "classnames/bind";
import styles from "./SelectInterest.module.scss";
import Header from "@/app/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import Image from "next/image";
import { AbleBtn } from "@/app/components/Button/AbleBtn";
import { useRouter } from "next/navigation";
import Link from "next/link";

const cx = cn.bind(styles);

export interface SelectInterestProps {
    title: string;
    image: string;
}

const SelectInterest = (props: SelectInterestProps) => {
    const { title, src } = props;

    /** 카테고리 데이터 */
    const categories = [
        {
            title: "호캉스",
            src: "/categoryImage/ic_home_hotel.svg",
        },
        {
            title: "풀빌라",
            src: "/categoryImage/ic_home_pool.svg",
        },
        {
            title: "모텔",
            src: "/categoryImage/ic_home_motel.svg",
        },
        {
            title: "캠핑",
            src: "/categoryImage/ic_home_camping.svg",
        },
        {
            title: "게스트하우스",
            src: "/categoryImage/ic_home_guesthouse.svg",
        },
        {
            title: "레저",
            src: "/categoryImage/ic_home_leisure.svg",
        },
        {
            title: "공항",
            src: "/categoryImage/ic_home_airport.svg",
        },
    ];

    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null
    );

    const handleCategoryClick = (category: string) => {
        setSelectedCategory((prev) => (prev === category ? null : category));
    };

    /** 뒤로가기 */
    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    };

    return (
        <div className={cx("SelectInterestWrapper")}>
            <Header leftIcon={<FaAngleLeft onClick={handleGoBack} />} />
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
                        key={category.title}
                        className={cx("SelectInterestCategory", {
                            selected: selectedCategory === category.title,
                        })}
                        onClick={() => handleCategoryClick(category.title)}
                    >
                        <Image
                            src={category.src}
                            alt={`${category.title} 이미지`}
                            width={45}
                            height={45}
                        />
                        <p>{category.title}</p>
                    </button>
                ))}
            </div>

            <div className={cx("SelectInterestNextBtn")}>
                <Link href="/userselect/nickname">
                    <AbleBtn label={"다음"} />
                </Link>
            </div>
        </div>
    );
};

export default SelectInterest;
