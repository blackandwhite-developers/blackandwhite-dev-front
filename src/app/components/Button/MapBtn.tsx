import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";
import { IoMapOutline } from "react-icons/io5";

const cx = cn.bind(styles);

type MapBtnProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const MapBtn = (props: MapBtnProps) => {
  const { label, onClick } = props;
  return (
    <button className={cx("MapBtn")} onClick={onClick}>
      <IoMapOutline />
      {label}
    </button>
  );
};
