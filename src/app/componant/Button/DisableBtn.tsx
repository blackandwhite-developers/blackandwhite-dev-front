import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

const cx = cn.bind(styles);

type DisableBtnProps = {
  label: string;
};

export const DisableBtn = (props: DisableBtnProps) => {
  return <button className={cx("DisableBtn")}>{props.label}</button>;
};
