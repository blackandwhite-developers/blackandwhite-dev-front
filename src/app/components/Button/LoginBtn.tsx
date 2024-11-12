import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

const cx = cn.bind(styles);

type LoginBtnProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const LoginBtn = (props: LoginBtnProps) => {
  const { label, onClick } = props;
  return (
    <button className={cx("LoginBtn")} onClick={onClick}>
      {label}
    </button>
  );
};
