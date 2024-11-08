"use client";

import React from "react";
import styles from "./Counter.module.scss";
import cn from "classnames/bind";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
const cx = cn.bind(styles);

type CounterProps = {
  initCount?: number;
  maxCount?: number;
};

export default function Counter(props: CounterProps) {
  const { initCount = 0, maxCount } = props;
  const [count, setCount] = React.useState(initCount);
  const [isMinusDisabled, setIsMinusDisabled] = React.useState(false);
  const [isPlusDisabled, setIsPlusDisabled] = React.useState(false);

  const handleIncrement = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (isPlusDisabled) return;
    setCount((prev) => prev + 1);
  };

  const handleDecrement = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (isMinusDisabled) return;
    setCount((prev) => prev - 1);
  };

  React.useEffect(() => {
    setIsMinusDisabled(count === 0);
  }, [count]);

  React.useEffect(() => {
    if (maxCount === undefined) return;
    setIsPlusDisabled(count >= maxCount);
  }, [count, maxCount]);

  return (
    <div className={cx("Wrapper")}>
      <button className={cx("Button", { isMinusDisabled })} onClick={handleDecrement}>
        <FiMinus />
      </button>
      <p className={cx("count")}>{count}</p>
      <button className={cx("Button", { isPlusDisabled })} onClick={handleIncrement}>
        <FiPlus />
      </button>
    </div>
  );
}
