import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

const cx = cn.bind(styles);

interface TextBtnProps {
  label: string;
  onClick?: () => void; // onClick prop 추가
}

export const TextBtn: React.FC<TextBtnProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="text-btn">
      {label}
    </button>
  );
};
