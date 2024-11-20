import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

const cx = cn.bind(styles);

type NomalbtnProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const NomalBtn = (props: NomalbtnProps) => {
  const { label, onClick } = props;
  return (
    <button className={cx("NomalBtn")} onClick={onClick}>
      {label}
    </button>
  );
};
