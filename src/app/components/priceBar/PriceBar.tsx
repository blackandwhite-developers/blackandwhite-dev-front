"use client";
import React, { useState, useEffect } from "react";

const PriceRangeSlider = () => {
  const [minValue, setMinValue] = useState(10000);
  const [maxValue, setMaxValue] = useState(300000);
  const [minPercent, setMinPercent] = useState(0);
  const [maxPercent, setMaxPercent] = useState(100);

  const MIN_PRICE = 10000;
  const MAX_PRICE = 300000;
  const STEP = 10000;

  useEffect(() => {
    const minPer = ((minValue - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;
    const maxPer = ((maxValue - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

    setMinPercent(minPer);
    setMaxPercent(maxPer);
  }, [minValue, maxValue]);

  const handleMinChange = (e: { target: { value: any } }) => {
    const value = Math.min(Number(e.target.value), maxValue - STEP);
    setMinValue(value);
  };

  const handleMaxChange = (e: { target: { value: any } }) => {
    const value = Math.max(Number(e.target.value), minValue + STEP);
    setMaxValue(value);
  };

  return (
    <div className="price-bar-container">
      <div className="price-bar">
        {/* 배경 트랙 */}
        <div className="absolute w-full h-1 bg-gray-200 rounded top-1/2 -translate-y-1/2" />

        {/* 선택된 범위 표시 */}
        <div
          className="absolute h-1 bg-blue-500 rounded top-1/2 -translate-y-1/2"
          style={{
            left: `${minPercent}%`,
            right: `${100 - maxPercent}%`,
          }}
        />

        {/* 최소값 슬라이더 */}
        <input
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={STEP}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full appearance-none bg-transparent pointer-events-none"
          style={{
            height: "20px",
            WebkitAppearance: "none",
          }}
        />

        {/* 최대값 슬라이더 */}
        <input
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={STEP}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full appearance-none bg-transparent pointer-events-none"
          style={{
            height: "20px",
            WebkitAppearance: "none",
          }}
        />
      </div>

      {/* 가격 표시 */}
      <div className="flex justify-between">
        <span className="text-sm">{minValue.toLocaleString()}원</span>
        <span className="text-sm">{maxValue.toLocaleString()}원</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
