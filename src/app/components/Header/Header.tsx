import React from "react";
import cn from "classnames/bind";
import styles from "./Header.module.scss";
import { IoIosArrowBack } from "react-icons/io";

const cx = cn.bind(styles);

type HeaderProps = {
  title: string;
  onClick?: () => void;
};

const Header = ({ title, onClick }: HeaderProps) => {
  return (
    <div className={cx("Header")}>
      <div className={cx("Container")}>
        <button className={cx("BackIcon")} onClick={onClick}>
          <IoIosArrowBack />
        </button>
        <p className={cx("HeaderTitle")}>{title}</p>
      </div>
    </div>
  );
};

export default Header;
