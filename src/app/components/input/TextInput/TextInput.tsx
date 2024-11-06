"use client"
import React, { useState } from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import cn from 'classnames/bind';
import styles from './TextInput.module.scss';

const cx = cn.bind(styles);

interface TextInputProps {
    type: string;
    placeholder: string;
    showToggle?: boolean;
    className?: string;
}

const TextInput = ({ type, placeholder, showToggle, className }: TextInputProps) => {
    const [inputType, setInputType] = useState(type);

    const toggleVisibility = () => {
        setInputType(inputType === 'password' ? 'text' : 'password');
    };

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
        </div>
    );
};

export default TextInput;
