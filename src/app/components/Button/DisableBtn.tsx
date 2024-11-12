import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

const cx = cn.bind(styles);

type DisableBtnProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const DisableBtn = (props: DisableBtnProps) => {
  const { label, onClick } = props;
  return (
    <button className={cx("DisableBtn")} onClick={onClick}>
      {label}
    </button>
  );
};
