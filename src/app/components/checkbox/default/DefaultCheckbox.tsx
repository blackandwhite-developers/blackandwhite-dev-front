"use client";
import React from "react";
import styles from "./DefaultCheckbox.module.scss";
import cn from "classnames/bind";
import CheckIcon from "../../icon/CheckIcon";
const cx = cn.bind(styles);

type CheckBoxProps = {
  label: string;
  checked?: boolean;
  isTransparent?: boolean;
  isLabelBold?: boolean;
  isLabelGray?: boolean;
  isShadow?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export default function DefaultCheckBox(props: CheckBoxProps) {
  const { 
    label, 
    onChange, 
    checked = false,
    isTransparent = false, 
    isLabelBold = false, 
    isLabelGray = false, 
    isShadow = false,
    className 
  } = props;
  // const [check, setCheck] = React.useState(false);
  // const handleClick = () => {
  //   setCheck((prev) => !prev);
  // };
  return (
    <div className={cx("Container", className)}>
      <label className={cx("Wrapper")}>
        <div
          className={cx("Checkmark", {
            Checked: checked,
            Transparent: isTransparent,
          })}
        >
          <CheckIcon checked={checked} isTransparent={isTransparent} shadow={isShadow} />
        </div>
        <span className={cx("Label", { isLabelBold, isLabelGray })}>{label}</span>
        <input type="checkbox" readOnly hidden  onChange={onChange} />
      </label>
    </div>
  );
}
