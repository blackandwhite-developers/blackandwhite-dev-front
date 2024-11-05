import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";
import { CiCalendar } from "react-icons/ci";

const cx = cn.bind(styles);

type DateBtnProps = {
  label: string;
};

export const DateBtn = (props: DateBtnProps) => {
  return (
    <button className={cx("DateBtn")}>
      <div>
        <CiCalendar />{" "}
      </div>
      {props.label}
    </button>
  );
};
