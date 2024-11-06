import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";
import { MdOutlineRefresh } from "react-icons/md";

const cx = cn.bind(styles);

type ResearchBtnProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const ResearchBtn = (props: ResearchBtnProps) => {
  const { label, onClick } = props;
  return (
    <button className={cx("ResearchBtn")} onClick={onClick}>
      <MdOutlineRefresh style={{ transform: "scaleX(-1)", fontSize: "15px" }} />
      {label}
    </button>
  );
};
