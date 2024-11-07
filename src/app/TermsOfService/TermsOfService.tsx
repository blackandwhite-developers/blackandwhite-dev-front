"use client";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import styles from "./TermsOfService.module.scss";
import DefaultCheckBox from "../components/checkbox/default/DefaultCheckbox";
import { AbleBtn } from "../components/Button/AbleBtn";
import { DisableBtn } from "../components/Button/DisableBtn";

interface TermsOfServiceFormInputs {
    serviceTerms: boolean;
    privacyPolicy: boolean;
    locationTerms: boolean;
    marketingTerms: boolean;
}

const TermsOfService = () => {
    const { control, handleSubmit, watch, setValue } = useForm<TermsOfServiceFormInputs>({
        defaultValues: {
            serviceTerms: false,
            privacyPolicy: false,
            locationTerms: false,
            marketingTerms: false,
        },
    });

    const onSubmit = (data: TermsOfServiceFormInputs) => {
        console.log("Form Data:", data);
    };

    const serviceTermsChecked = watch("serviceTerms");
    const privacyPolicyChecked = watch("privacyPolicy");
    const isConfirmButtonEnabled = serviceTermsChecked && privacyPolicyChecked;

    const handleAllCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setValue("serviceTerms", checked);
        setValue("privacyPolicy", checked);
        setValue("locationTerms", checked);
        setValue("marketingTerms", checked);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1>약관 동의</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <DefaultCheckBox
                        label="전체 동의"
                        checked={serviceTermsChecked && privacyPolicyChecked && watch("locationTerms") && watch("marketingTerms")}
                        onChange={handleAllCheckedChange}
                        className={styles.allCheckBox}
                    />

                    <div className={styles.checkBox}>
                        <Controller
                            name="serviceTerms"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <DefaultCheckBox
                                    {...field}
                                    label="서비스 이용약관 (필수)"
                                />
                            )}
                        />
                        <a href="/ServiceTerms">자세히 보기</a>
                    </div>

                    <div className={styles.checkBox}>
                        <Controller
                            name="privacyPolicy"
                            control={control}
                            rules={{ required: true }}
                            render={({ field }) => (
                                <DefaultCheckBox
                                    {...field}
                                    label="개인정보 수집/이용 (필수)"
                                />
                            )}
                        />
                        <a href="/PrivacyPolicy">자세히 보기</a>
                    </div>

                    <div className={styles.checkBox}>
                        <Controller
                            name="locationTerms"
                            control={control}
                            render={({ field }) => (
                                <DefaultCheckBox
                                    {...field}
                                    label="위치정보 이용 동의 (선택)"
                                />
                            )}
                        />
                        <a href="/LocationTerms">자세히 보기</a>
                    </div>

                    <div className={styles.checkBox}>
                        <Controller
                            name="marketingTerms"
                            control={control}
                            render={({ field }) => (
                                <DefaultCheckBox
                                    {...field}
                                    label="마케팅 정보 수신 동의 (선택)"
                                />
                            )}
                        />
                        <a href="/MarketingTerms">자세히 보기</a>
                    </div>

                    {isConfirmButtonEnabled ? (
                        <AbleBtn label="확인" type="submit" />
                    ) : (
                        <DisableBtn label="확인" />
                    )}
                </form>
            </div>
        </div>
    );
};

export default TermsOfService;
