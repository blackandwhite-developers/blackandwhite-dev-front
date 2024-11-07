import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";
import { CiCalendar } from "react-icons/ci";

const cx = cn.bind(styles);

type DateBtnProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const DateBtn = (props: DateBtnProps) => {
  const { label, onClick } = props;
  return (
    <button className={cx("DateBtn")} onClick={onClick}>
      <div>
        <CiCalendar />{" "}
      </div>
      {label}
    </button>
  );
};
