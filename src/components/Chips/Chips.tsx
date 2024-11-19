"use client";

import React from "react";
import styles from "./Chips.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

type ChipsProps = {
  /** 문자열 children */
  children: React.ReactNode | string;
  onClickEvent?: () => void;
};

export default function Chips({ children, onClickEvent }: ChipsProps) {
  const [isChecked, setIsChecked] = React.useState(false);
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsChecked((prev) => !prev); // 이전 상태 반전
    if (onClickEvent) {
      onClickEvent();
    }
  };

  return (
    <label
      className={cx("chips", { checked: isChecked })}
      onClick={handleClick}
    >
      {children}
      <input
        type="checkbox"
        value={String(children)}
        checked={isChecked}
        readOnly
        hidden
      />
    </label>
  );
}
