"use client"
import React, { useState } from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import styles from './TextInput.module.scss';

interface TextInputProps {
    type: string;
    placeholder: string;
    showToggle?: boolean;
}

const TextInput = ({ type, placeholder, showToggle }: TextInputProps) => {
    const [inputType, setInputType] = useState(type);

    const toggleVisibility = () => {
        setInputType(inputType === 'password' ? 'text' : 'password');
    };

    return (
        <div className={styles.inputWrapper}>
            <input
                className={styles.inputField}
                type={inputType}
                placeholder={placeholder}
            />
            {showToggle && (
                <button
                    type="button"
                    className={`${styles.toggleButton} ${inputType === 'password' ? styles.eyeOff : ''}`}
                    onClick={toggleVisibility}
                >
                    {inputType === 'password' ? <LuEyeOff /> : <LuEye />}
                </button>
            )}
        </div>
    );
};

export default TextInput;
