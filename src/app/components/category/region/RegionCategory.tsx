import React from "react";
import styles from "./RegionCategory.module.scss";
import cn from "classnames/bind";
import { ImageIcon } from "../../imageIcon/ImageIcon";

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
      <ImageIcon src={categoryIcon} alt={categoryKoreanName} width={70} height={70} borderRadius={"50%"} />
      <p className={cx("CategoryName")}>{categoryKoreanName}</p>
    </div>
  );
}
