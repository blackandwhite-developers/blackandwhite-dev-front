import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

const cx = cn.bind(styles);

type FindPasswordBtnProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const FindPasswordBtn = (props: FindPasswordBtnProps) => {
  const { label, onClick } = props;
  return (
    <button className={cx("FindPasswordBtn")} onClick={onClick}>
      {label}
    </button>
  );
};
