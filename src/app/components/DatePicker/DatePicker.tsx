"use client";
import React, { useState } from "react";
import { ko } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import styles from "./DatePicker.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

const DatePicker = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div className={cx("calenderWrapper")}>
                <div className={styles.customDayPicker}>
                    <DayPicker
                        mode="range"
                        locale={ko}
                        classNames={{
                            root: styles.rdpContainer,
                            day_button: styles.dayBtn,
                            day_selected: styles.selected,
                            months: styles.dayMonths,
                            month: styles.dayMonth,
                            month_caption: styles.monthCaption,
                            nav: styles.navBtn,
                            month_grid: styles.monthGrid,
                            weekday: styles.weekday,
                        }}
                    />
                    <div className={cx("buttonwrapper")}>
                        <button
                            className={cx("cancleBtn")}
                            onClick={handleClose}
                        >
                            취소
                        </button>
                        <button className={cx("confirmBtn")}>확인</button>
                    </div>
                </div>
            </div>
        )
    );
};

export default DatePicker;
