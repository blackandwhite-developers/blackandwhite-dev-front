import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

const cx = cn.bind(styles);

type StayReservationBtnProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const StayReservationBtn = (props: StayReservationBtnProps) => {
  const { label, onClick } = props;
  return (
    <button className={cx("StayReservationBtn")} onClick={onClick}>
      {label}
    </button>
  );
};
