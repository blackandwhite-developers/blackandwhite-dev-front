import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

const cx = cn.bind(styles);

type AbleBtnProps = {
  label: string;
};

export const AbleBtn = (props: AbleBtnProps) => {
  return <button className={cx("AbleBtn")}>{props.label}</button>;
};
