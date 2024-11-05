import React from "react";
import styles from "./CheckBox.module.scss";
import cn from "classnames/bind";
const cx = cn.bind(styles);

type CheckBoxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export function CheckBox(props: CheckBoxProps) {
  return (
    <label className={cx("Container")}>
      <div className={cx("Checkmark")} />
      {props.label}
      <input type="checkbox" defaultChecked={props.checked} hidden onChange={(e) => props.onChange(e.target.checked)} />
    </label>
  );
}

export default CheckBox;
