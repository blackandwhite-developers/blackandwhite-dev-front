"use cilent"
import React, { useState } from 'react';
import styles from './PhoneConfirm.module.scss';

interface PhoneConfirmProps {
    onResend: () => void; 
}

const PhoneConfirm = ({ onResend }: PhoneConfirmProps) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    return (
        <div className={styles.container}>
            <div className={styles.inputGroup}>
                <input
                    type="text"
                    placeholder="이름"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.inputField}
                />
            </div>

            <div className={styles.inputGroup}>
                <input
                    type="text"
                    placeholder="010-1234-5678"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className={styles.inputField}
                />
                <button
                    type="button"
                    onClick={onResend}
                    className={styles.resendButton}
                    disabled={!phoneNumber} 
                >
                    재전송
                </button>
            </div>
        </div>
    );
};

export default PhoneConfirm;