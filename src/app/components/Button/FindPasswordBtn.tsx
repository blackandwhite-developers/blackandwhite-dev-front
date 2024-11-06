import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

const cx = cn.bind(styles);

type FindPasswordBtnProps = {
  label: string;
};

export const FindPasswordBtn = (props: FindPasswordBtnProps) => {
  return <button className={cx("FindPasswordBtn")}>{props.label}</button>;
};
