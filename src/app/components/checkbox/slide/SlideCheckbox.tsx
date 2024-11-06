"use client";
import React from "react";
import styles from "./SlideCheckbox.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

type SlideCheckBoxProps = {
  label: string;
  checked?: boolean;
  isLabelBold?: boolean;
  isLabelGray?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SlideCheckbox(props: SlideCheckBoxProps) {
  const { label, onChange, checked = false, isLabelBold = false, isLabelGray = false } = props;
  const [check, setCheck] = React.useState(checked);
  const handleChange = (e: React.MouseEvent<HTMLSpanElement, MouseEvent> | React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setCheck((prev) => !prev);
  };
  return (
    <div className={cx("Container")}>
      <label className={cx("Wrapper")}>
        <span className={cx("Label", { isLabelBold, isLabelGray })}>{label}</span>
        <div className={cx("Slide", { Checked: check })} onClick={handleChange} />
        <input type="checkbox" checked={check} readOnly hidden onChange={onChange} />
      </label>
    </div>
  );
}
