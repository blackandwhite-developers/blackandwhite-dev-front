"use client";
import cn from "classnames/bind";
import styles from "./CheckIcon.module.scss";
import React from "react";
const cx = cn.bind(styles);

type CheckIconProps = {
  width?: number;
  height?: number;
  isTransparent?: boolean;
  checked?: boolean;
  shadow?: boolean;
};

export default function CheckIcon(props: CheckIconProps) {
  const { checked, isTransparent = false, width = 11, height = 8, shadow = false } = props;
  return (
    <svg
      className={cx("CheckIcon", { checked, Transparent: isTransparent, shadow })}
      width={width}
      height={height}
      strokeWidth="1.3"
      strokeLinecap="round"
      viewBox="0 0 13 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 5L5.5 9L12 1" />
    </svg>
  );
}
