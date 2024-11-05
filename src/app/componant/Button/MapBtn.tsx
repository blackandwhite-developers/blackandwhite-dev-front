import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";
import { IoMapOutline } from "react-icons/io5";

const cx = cn.bind(styles);

type MapBtnProps = {
  label: string;
};

export const MapBtn = (props: MapBtnProps) => {
  return (
    <button className={cx("MapBtn")}>
      <IoMapOutline />
      {props.label}
    </button>
  );
};
