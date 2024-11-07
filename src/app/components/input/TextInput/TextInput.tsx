"use client"
import React, { useState } from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import cn from 'classnames/bind';
import styles from './TextInput.module.scss';

const cx = cn.bind(styles);

interface TextInputProps {
    type: "text" | "password" | "number" | "tel" | "email";
    placeholder: string;
    showToggle?: boolean;
    className?: string;
    errorMessage? : string;
}

const TextInput = ({ 
    type, 
    placeholder, 
    showToggle, 
    className, 
    errorMessage 
}: TextInputProps) => {

    const [inputType, setInputType] = useState(type);

    const toggleVisibility = () => {
        setInputType(inputType === "password" ? "text" : "password");
    };

    const isError = Boolean(errorMessage);

    return (
        <div className={cx('inputWrapper', className)}>
            <input
                className={cx('inputField')}
                type={inputType}
                placeholder={placeholder}
            />
            {showToggle && (
                <button
                    type="button"
                    className={cx('toggleButton', { eyeOff: inputType === 'password' })}
                    onClick={toggleVisibility}
                >
                    {inputType === 'password' ? <LuEyeOff /> : <LuEye />}
                </button>
            )}
            {isError && <p className={cx('errorMessage')}>{errorMessage}</p>}
        </div>
    );
};

export default TextInput;
