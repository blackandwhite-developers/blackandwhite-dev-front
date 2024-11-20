"use client";
import React, { useState, ChangeEvent } from "react";
import cn from "classnames/bind";
import styles from "./PirceBar.module.scss";

const cx = cn.bind(styles);

const PriceBar = () => {
  const [minValue, setMinValue] = useState(10000); // 최소값을 10000으로 변경
  const [maxValue, setMaxValue] = useState(500000); // 최대값을 500000으로 변경

  const handleMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1000);
    setMinValue(value);
  };

  const handleMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 1000);
    setMaxValue(value);
  };

  return (
    <div className={cx("PriceBar-container")}>
      <div className={cx("header")}>
        <h4>가격대</h4>
      </div>

      <div className={cx("price-input")}>
        <div className={cx("field")}>
          <span>최솟값</span>
          <input type="number" className={cx("input-min")} value={minValue} onChange={handleMinChange} min="10000" max="500000" />
        </div>

        <div className={cx("seperator")}>-</div>
        <div className={cx("field")}>
          <span>최댓값</span>
          <input type="number" className={cx("input-max")} value={maxValue} onChange={handleMaxChange} min="10000" max="500000" />
        </div>
      </div>

      <div className={cx("slider")}>
        <div
          className={cx("progress")}
          style={{
            left: `${((minValue - 10000) / 490000) * 100}%`,
            right: `${100 - ((maxValue - 10000) / 490000) * 100}%`,
          }}
        ></div>
      </div>

      <div className={cx("range-input")}>
        <input type="range" className={cx("range-min")} min="10000" max="500000" value={minValue} step="10000" onChange={handleMinChange} />
        <input type="range" className={cx("range-max")} min="10000" max="500000" value={maxValue} step="10000" onChange={handleMaxChange} />
      </div>
    </div>
  );
};

export default PriceBar;
