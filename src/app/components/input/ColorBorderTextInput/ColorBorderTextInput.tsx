"use client";
import React, { useState } from "react";
import cn from "classnames/bind";
import { FiDelete } from "react-icons/fi";
import styles from "./ColorBorderTextInput.module.scss";

const cx = cn.bind(styles);

interface ReservationTextInputProps {
  type: "text" | "password" | "number" | "tel" | "email";
  placeholder: string;
  borderColor?: string;
  isTransparent?: boolean;
  className?: string;
}

const ReservationTextInput = ({
  type,
  placeholder,
  borderColor,
  isTransparent = false,
  className
}: ReservationTextInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClearInput = () => {
    setInputValue("");
  };

  return (
    <div className={cx("inputWrapper", className)}>
      <input
        className={cx("inputField")}
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        style={{ borderColor: borderColor || "black", backgroundColor: isTransparent ? "transparent" : "white" }}
      />
      {inputValue ? (
        <button
          type="button"
          className={cx("toggleButton")}
          onClick={handleClearInput}
          style={{ color: "#8728FF" }}
        >
          <FiDelete />
        </button>
      ) : (
        <button
          type="button"
          className={cx("toggleButton")}
          onClick={handleClearInput}
          style={{ color: "#999999" }}
        >
          <FiDelete />
        </button>
      )}
    </div>
  );
};

export default ReservationTextInput;
