"use client"
import React, { useState } from 'react';
import cn from 'classnames/bind';
import styles from './PhoneConfirm.module.scss';

const cx = cn.bind(styles);

interface PhoneConfirmProps {
    onResend: () => void; 
    className?: string; 
}

const PhoneConfirm = ({ onResend, className }: PhoneConfirmProps) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <div className={cx('container', className)}>
            <div className={cx('inputGroup')}>
                <input
                    type="text"
                    placeholder="이름"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={cx('inputField')}
                />
            </div>

            <div className={cx('inputGroup')}>
                <input
                    type="text"
                    placeholder="010-1234-5678"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className={cx('inputField')}
                />
                <button
                    type="button"
                    onClick={onResend}
                    className={cx('resendButton')}
                    disabled={!phoneNumber} 
                >
                    재전송
                </button>
            </div>
        </div>
    );
};

export default PhoneConfirm;
