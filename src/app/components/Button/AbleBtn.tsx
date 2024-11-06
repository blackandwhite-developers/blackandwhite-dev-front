import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

const cx = cn.bind(styles);

type AbleBtnProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const AbleBtn = (props: AbleBtnProps) => {
  const { label, onClick } = props;
  return (
    <button className={cx("AbleBtn")} onClick={onClick}>
      {label}
    </button>
  );
};
