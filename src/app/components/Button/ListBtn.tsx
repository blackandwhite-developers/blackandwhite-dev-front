import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";
import { FaListUl } from "react-icons/fa";

const cx = cn.bind(styles);

type ListBtnProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const ListBtn = (props: ListBtnProps) => {
  const { label, onClick } = props;
  return (
    <button className={cx("ListBtn")} onClick={onClick}>
      <FaListUl />
      {label}
    </button>
  );
};
