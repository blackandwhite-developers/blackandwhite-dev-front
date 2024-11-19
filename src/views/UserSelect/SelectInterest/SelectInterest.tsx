"use client";

import React, { useState } from "react";
import cn from "classnames/bind";
import styles from "./SelectInterest.module.scss";
import Header from "@/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import Image from "next/image";
import { AbleBtn } from "@/components/Button/AbleBtn";
import { useRouter } from "next/navigation";
import Link from "next/link";

const cx = cn.bind(styles);

export interface SelectInterestProps {
  data: { title: string; src: string }[];
}

const SelectInterest = ({ data }: SelectInterestProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(data.length > 0 ? data[0].title : null);

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
        {data.map((category) => (
          <button
            key={category.title}
            className={cx("SelectInterestCategory", {
              selected: selectedCategory === category.title,
            })}
            onClick={() => handleCategoryClick(category.title)}
          >
            <Image src={category.src} alt={`${category.title} 이미지`} width={45} height={45} />
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
