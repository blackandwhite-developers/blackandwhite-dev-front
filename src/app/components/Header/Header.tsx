import React from "react";
import cn from "classnames/bind";
import styles from "./Header.module.scss";
import { IoIosArrowBack } from "react-icons/io";

const cx = cn.bind(styles);

type HeaderProps = {
    title?: string;
};

const Header = ({ title }: HeaderProps) => {
    return (
        <div className={cx("header")}>
            <IoIosArrowBack />
            {title}
        </div>
    );
};

export default Header;
