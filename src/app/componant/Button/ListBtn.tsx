import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";
import { FaListUl } from "react-icons/fa";

const cx = cn.bind(styles);

type ListBtnProps = {
  label: string;
};

export const ListBtn = (props: ListBtnProps) => {
  return (
    <button className={cx("ListBtn")}>
      <FaListUl />
      {props.label}
    </button>
  );
};
