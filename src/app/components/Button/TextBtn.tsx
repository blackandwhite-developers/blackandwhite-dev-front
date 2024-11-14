import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

const cx = cn.bind(styles);

type TextBtnProps = {
  label: string;
};

export const TextBtn = (props: TextBtnProps) => {
  const { label } = props;
  return <button className={cx("TextBtn")}>{label}</button>;
};
