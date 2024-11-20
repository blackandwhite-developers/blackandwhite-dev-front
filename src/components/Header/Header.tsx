import React from "react";
import cn from "classnames/bind";
import styles from "./Header.module.scss";

const cx = cn.bind(styles);

type HeaderProps = {
    title?: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onClickLeft?: () => void;
    onClickRight?: () => void;
    className?: string;
};

const Header = (props: HeaderProps) => {
    const { title, leftIcon, rightIcon, onClickLeft, onClickRight, className } =
        props;
    return (
        <div className={cx("Header", className)}>
            <div className={cx("Container")}>
                {leftIcon && (
                    <button className={cx("LeftIcon")} onClick={onClickLeft}>
                        {leftIcon}
                    </button>
                )}
                <div className={cx("HeaderTitle")}>{title}</div>
                {rightIcon && (
                    <button className={cx("RightIcon")} onClick={onClickRight}>
                        {rightIcon}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;
