"use client"
import React, { useState } from 'react';
import {AbleBtn} from '../Button/AbleBtn';
import {DisableBtn} from '../Button/DisableBtn';

const SocialLoginAlert = () => {
    const [isChecked, setIsChecked] = useState({
        thirdParty: false,
        gender: false,
        age: false,
        birthday: false,
    });

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setIsChecked((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };

    const isAllChecked = Object.values(isChecked).every(Boolean);

    return (
        <div>
            <h2>소셜 로그인 동의</h2>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="thirdParty"
                        checked={isChecked.thirdParty}
                        onChange={handleCheckboxChange}
                    />
                    개인정보 제 3자 제공 동의
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="gender"
                        checked={isChecked.gender}
                        onChange={handleCheckboxChange}
                    />
                    성별
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="age"
                        checked={isChecked.age}
                        onChange={handleCheckboxChange}
                    />
                    연령대
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        name="birthday"
                        checked={isChecked.birthday}
                        onChange={handleCheckboxChange}
                    />
                    생일
                </label>
            </div>

            {isAllChecked ? (
                <AbleBtn label="계속하기"onClick={() => alert('동의 완료')} />
            ) : (
                <DisableBtn label="계속하기" />
            )}
        </div>
    );
};

export default SocialLoginAlert;
