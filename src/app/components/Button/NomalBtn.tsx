import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

const cx = cn.bind(styles);

type NomalbtnProps = {
  label: string;
};

export const NomalBtn = (props: NomalbtnProps) => {
  return <button className={cx("NomalBtn")}>{props.label}</button>;
};
