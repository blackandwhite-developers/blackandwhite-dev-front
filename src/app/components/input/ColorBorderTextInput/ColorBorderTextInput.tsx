"use client";
import React, { useState } from "react";
import { FiDelete } from "react-icons/fi";
import styles from "./ColorBorderTextInput.module.scss";

interface ReservationTextInputProps {
  type: "text" | "password" | "number" | "tel" | "email";
  placeholder: string;
  borderColor?: string;
  isTransparent?: boolean;
}

const ReservationTextInput = ({ type, placeholder, borderColor, isTransparent = false }: ReservationTextInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClearInput = () => {
    setInputValue("");
  };

  return (
    <div className={styles.inputWrapper}>
      <input
        className={styles.inputField}
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        style={{ borderColor: borderColor || "black", backgroundColor: isTransparent ? "transparent" : "white" }}
      />
      {inputValue && (
        <button type="button" className={styles.toggleButton} onClick={handleClearInput} style={{ color: "#8728FF" }}>
          <FiDelete />
        </button>
      )}
      {!inputValue && (
        <button type="button" className={styles.toggleButton} onClick={handleClearInput} style={{ color: "#999999" }}>
          <FiDelete />
        </button>
      )}
    </div>
  );
};

export default ReservationTextInput;
