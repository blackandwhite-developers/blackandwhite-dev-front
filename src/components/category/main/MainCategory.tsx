import React from "react";
import styles from "./MainCategory.module.scss";
import cn from "classnames/bind";
import { ImageIcon } from "../../imageIcon/ImageIcon";

const cx = cn.bind(styles);

type MainCategoryProps = {
  categoryName: string;
  categoryIcon: string;
  categoryKoreanName: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
};

export default function MainCategory(props: MainCategoryProps) {
  const { categoryName, categoryIcon, categoryKoreanName, onClick, className } = props;
  return (
    <div key={categoryName} className={cx("MainCategory", className)} onClick={onClick}>
      <div className={cx("CategoryIconWrapper")}>
        <ImageIcon src={categoryIcon} alt={categoryKoreanName} width={43} height={43} />
      </div>
      <p className={cx("CategoryName")}>{categoryKoreanName}</p>
    </div>
  );
}
