import React from "react";
import styles from "./RegionCategory.module.scss";
import Image from "next/image";
import cn from "classnames/bind";

const cx = cn.bind(styles);

type RegionCategoryProps = {
  categoryName: string;
  categoryIcon: string;
  categoryKoreanName: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
};

export default function RegionCategory(props: RegionCategoryProps) {
  const { categoryName, categoryIcon, categoryKoreanName, onClick, className } = props;
  return (
    <div key={categoryName} className={cx("RegionCategory", className)} onClick={onClick}>
      <Image src={categoryIcon} alt={categoryKoreanName} width={70} height={70} className={cx("RegionCategoryImage")} />
      <p className={cx("CategoryName")}>{categoryKoreanName}</p>
    </div>
  );
}
