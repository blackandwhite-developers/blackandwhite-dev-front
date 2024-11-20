import React from "react";
import cn from "classnames/bind";
import styles from "./Button.module.scss";

const cx = cn.bind(styles);

type RoomReservationBtnProps = {
    label: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const RoomReservationBtn = (props: RoomReservationBtnProps) => {
    const { label, onClick } = props;
    return (
        <button className={cx("RoomReservationBtn")} onClick={onClick}>
            {label}
        </button>
    );
};
