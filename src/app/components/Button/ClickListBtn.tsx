import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";
import { FaListUl } from "react-icons/fa";

const cx = cn.bind(styles);

type ClickListBtnProps = {
  label: string;
};

export const ClickListBtn = (props: ClickListBtnProps) => {
  return (
    <button className={cx("ClickListBtn")}>
      {" "}
      <FaListUl />
      {props.label}
    </button>
  );
};
