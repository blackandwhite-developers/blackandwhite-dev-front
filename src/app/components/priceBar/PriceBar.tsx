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
        <div className="track" />

        <div
          className="select-bar"
          style={{
            left: `${minPercent}%`,
            right: `${100 - maxPercent}%`,
          }}
        />

        <input
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={STEP}
          value={minValue}
          onChange={handleMinChange}
          className="minsilder"
          style={{
            height: "20px",
            WebkitAppearance: "none",
          }}
        />

        <input
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          step={STEP}
          value={maxValue}
          onChange={handleMaxChange}
          className="max-silder"
          style={{
            height: "20px",
            WebkitAppearance: "none",
          }}
        />
      </div>

      <div className="text-text">
        <span className="text">{minValue.toLocaleString()}원</span>
        <span className="text">{maxValue.toLocaleString()}원</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
