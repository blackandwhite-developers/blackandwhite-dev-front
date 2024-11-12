import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";
import { CgProfile } from "react-icons/cg";

const cx = cn.bind(styles);

type MemberBtnProps = {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const MemberBtn = (props: MemberBtnProps) => {
  const { label, onClick } = props;
  return (
    <button className={cx("MemberBtn")} onClick={onClick}>
      <CgProfile />
      {label}
    </button>
  );
};
