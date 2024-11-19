import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

const cx = cn.bind(styles);

type AbleBtnProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "button" | "submit" | "reset"
  backgroundColor?: string;
  textColor?: string;
};

export const AbleBtn = (props: AbleBtnProps) => {
  const { label, onClick, type = "button",  backgroundColor = "#8728ff", textColor = "#fff" } = props;
  return (
    <button className={cx("AbleBtn")} 
    type={type} 
    onClick={onClick}
    style={{ backgroundColor, color: textColor }}
    >
      {label}
    </button>
  );
};
