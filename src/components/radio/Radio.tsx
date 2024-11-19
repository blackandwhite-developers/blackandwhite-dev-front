"use client";
import React, { useEffect } from "react";
import styles from "./Radio.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

type RadioProps = {
  label?: React.ReactNode;
  name?: string;
  value?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  nonBorder?: boolean;
};

export default function Radio(props: RadioProps) {
  const { label, name, value, checked, onChange, className, nonBorder = true } = props;
  const [check, setCheck] = React.useState(checked);

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  const handleClick = () => {
    if (check) {
      return;
    }
    setCheck((prev) => !prev);
  };

  return (
    <label
      className={cx(
        "Radio",
        {
          check,
          nonBorder,
        },
        className
      )}
    >
      <div className={cx("RadioMark", { check })} />
      <span
        className={cx("RadioLabel", {
          check,
        })}
      >
        <div className={cx("Label")}>{label}</div>
      </span>
      <input type="radio" name={name} value={value} defaultChecked={check} hidden onChange={onChange} onClick={handleClick} />
    </label>
  );
}
