import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";
import { CgProfile } from "react-icons/cg";

const cx = cn.bind(styles);

type MemberBtnProps = {
  label: string;
};

export const MemberBtn = (props: MemberBtnProps) => {
  return (
    <button className={cx("MemberBtn")}>
      <CgProfile />
      {props.label}
    </button>
  );
};
