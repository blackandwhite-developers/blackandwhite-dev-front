"use client";
import React, { useState } from 'react';
import styles from "./TermsOfService.module.scss";
import DefaultCheckBox from '../components/checkbox/default/DefaultCheckbox';
import { AbleBtn } from '../components/Button/AbleBtn';
import { DisableBtn } from '../components/Button/DisableBtn';

const TermsOfService = () => {
    const [serviceTermsChecked, setServiceTermsChecked] = useState(false);
    const [privacyPolicyChecked, setPrivacyPolicyChecked] = useState(false);
    const [locationTermsChecked, setLocationTermsChecked] = useState(false);
    const [marketingTermsChecked, setMarketingTermsChecked] = useState(false);
    const [isAllChecked, setIsAllChecked] = useState(false);

    const handleAllCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setIsAllChecked(checked);
        setServiceTermsChecked(checked);
        setPrivacyPolicyChecked(checked);
        setLocationTermsChecked(checked);
        setMarketingTermsChecked(checked);
    };

    const handleServiceTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setServiceTermsChecked(e.target.checked);
    };

    const handlePrivacyPolicyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPrivacyPolicyChecked(e.target.checked);
    };

    const handleLocationTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocationTermsChecked(e.target.checked);
    };

    const handleMarketingTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMarketingTermsChecked(e.target.checked);
    };

    const isConfirmButtonEnabled = serviceTermsChecked && privacyPolicyChecked;

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1>약관 동의</h1>
                <DefaultCheckBox
                    label="전체 동의"
                    checked={isAllChecked}
                    onChange={handleAllCheckedChange}
                    className={styles.allCheckBox}
                />
                <div className={styles.checkBox}>
                    <DefaultCheckBox
                        label="서비스 이용약관 (필수)"
                        checked={serviceTermsChecked}
                        onChange={handleServiceTermsChange}
                    />
                    <a href="/ServiceTerms">자세히 보기</a>
                </div>
                <div className={styles.checkBox}>
                    <DefaultCheckBox
                        label="개인정보 수집/이용 (필수)"
                        checked={privacyPolicyChecked}
                        onChange={handlePrivacyPolicyChange}
                    />
                    <a href="/PrivacyPolicy">자세히 보기</a>
                </div>
                <div className={styles.checkBox}>
                    <DefaultCheckBox
                        label="위치정보 이용 동의 (선택)"
                        checked={locationTermsChecked}
                        onChange={handleLocationTermsChange}
                    />
                    <a href="/LocationTerms">자세히 보기</a>
                </div>
                <div className={styles.checkBox}>
                    <DefaultCheckBox
                        label="마케팅 정보 수신 동의 (선택)"
                        checked={marketingTermsChecked}
                        onChange={handleMarketingTermsChange}
                    />
                    <a href="/MarketingTerms">자세히 보기</a>
                </div>

                {isConfirmButtonEnabled ? (
                    <AbleBtn label="확인" />
                ) : (
                    <DisableBtn label="확인" />
                )}
            </div>
        </div>
    );
};

export default TermsOfService;
