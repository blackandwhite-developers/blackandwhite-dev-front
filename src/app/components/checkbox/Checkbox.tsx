"use client";
import React from "react";
import styles from "./Checkbox.module.scss";
import cn from "classnames/bind";
import CheckIcon from "../icon/CheckIcon";
const cx = cn.bind(styles);

type CheckBoxProps = {
  label: string;
  checked?: boolean;
  isTransparent?: boolean;
  isLabelBold?: boolean;
  isLabelGray?: boolean;
};

export default function CheckBox(props: CheckBoxProps) {
  const { label, checked = false, isTransparent = false, isLabelBold = false, isLabelGray = false } = props;
  const [check, setCheck] = React.useState(checked);
  const handleChange = () => {
    setCheck((prev) => !prev);
  };
  return (
    <label className={cx("Container")}>
      <div
        className={cx("Checkmark", {
          Checked: check,
          Transparent: isTransparent,
        })}
      >
        <CheckIcon checked={check} isTransparent={isTransparent} shadow={true} />
      </div>
      <span className={cx("Label", { isLabelBold, isLabelGray })}>{label}</span>
      <input type="checkbox" checked={check} hidden onChange={handleChange} />
    </label>
  );
}
