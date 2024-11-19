import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

const cx = cn.bind(styles);

type ReservationBtnProps = {
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const ReservationBtn = (props: ReservationBtnProps) => {
    const { label, onClick } = props;
    return (
        <button className={cx("ReservationBtn")} onClick={onClick}>
            {label}
        </button>
    );
};
