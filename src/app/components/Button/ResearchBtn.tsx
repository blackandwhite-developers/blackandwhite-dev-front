import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";
import { MdOutlineRefresh } from "react-icons/md";

const cx = cn.bind(styles);

type ResearchBtnProps = {
  label: string;
};

export const ResearchBtn = (props: ResearchBtnProps) => {
  return (
    <button className={cx("ResearchBtn")}>
      <MdOutlineRefresh style={{ transform: "scaleX(-1)", fontSize: "15px" }} />
      {props.label}
    </button>
  );
};
