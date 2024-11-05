import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

const cx = cn.bind(styles);

type LoginBtnProps = {
  label: string;
};

export const LoginBtn = (props: LoginBtnProps) => {
  return <button className={cx("LoginBtn")}>{props.label}</button>;
};
