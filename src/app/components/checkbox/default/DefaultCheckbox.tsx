"use client";
import React from "react";
import styles from "./DefaultCheckbox.module.scss";
import cn from "classnames/bind";
import { FaCheck } from "react-icons/fa6";
const cx = cn.bind(styles);

type CheckBoxProps = {
  label: string;
  checked?: boolean;
  isTransparent?: boolean;
  isLabelGray?: boolean;
  isShadow?: boolean;
  isCircle?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  fontWeight?: number;
  fontSize?: number;
};

export default function DefaultCheckBox(props: CheckBoxProps) {
  const { label, onChange, checked = false, isTransparent = false, isLabelGray = false, isShadow = false, className, isCircle = false, fontWeight = 500, fontSize = 14 } = props;

  return (
    <div className={cx("Container", className)}>
      <label className={cx("Wrapper")}>
        <div
          className={cx("Checkmark", {
            Checked: checked,
            Transparent: isTransparent,
            isCircle,
          })}
        >
          <FaCheck
            className={cx("CheckIcon", {
              Transparent: isTransparent,
              Checked: checked,
              isCircle,
              Shadow: isShadow,
            })}
          />
        </div>
        {label && (
          <span
            className={cx("Label", { isLabelGray })}
            style={{
              fontWeight: fontWeight,
              fontSize: fontSize,
            }}
          >
            {label}
          </span>
        )}
        <input
          type="checkbox"
          hidden
          onChange={(e) => {
            if (onChange) onChange(e);
          }}
        />
      </label>
    </div>
  );
}
