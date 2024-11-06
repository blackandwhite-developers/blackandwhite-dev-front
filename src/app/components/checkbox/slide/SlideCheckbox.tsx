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
};

export default function SlideCheckbox(props: SlideCheckBoxProps) {
  const { label, checked = false, isLabelBold = false, isLabelGray = false } = props;
  const [check, setCheck] = React.useState(checked);
  const handleChange = () => {
    setCheck((prev) => !prev);
  };
  return (
    <label className={cx("Container")}>
      <span className={cx("Label", { isLabelBold, isLabelGray })}>{label}</span>
      <div className={cx("Slide", { Checked: check })} />

      <input type="checkbox" checked={check} hidden onChange={handleChange} />
    </label>
  );
}
