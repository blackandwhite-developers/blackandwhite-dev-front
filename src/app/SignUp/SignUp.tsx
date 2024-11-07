"use client";
import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import styles from "./SignUp.module.scss";
import TextInput from "../components/input/TextInput/TextInput";
import DefaultCheckBox from "../components/checkbox/default/DefaultCheckbox";
import { AbleBtn } from "../components/Button/AbleBtn";
import { DisableBtn } from "../components/Button/DisableBtn";

interface TermsOfServiceFormInputs {
    serviceTerms: boolean;
    privacyPolicy: boolean;
    locationTerms: boolean;
    marketingTerms: boolean;
}

interface SignUpFormInputs {
    email: string;
    password: string;
    passwordConfirm: string;
}

const SignUp = () => {
    const { control, handleSubmit, setValue, watch, formState: { errors }, register } = useForm<TermsOfServiceFormInputs & SignUpFormInputs>({
        defaultValues: {
            serviceTerms: false,
            privacyPolicy: false,
            locationTerms: false,
            marketingTerms: false,
            email: '',
            password: '',
            passwordConfirm: ''
        }
    });

    const serviceTermsChecked = watch("serviceTerms");
    const privacyPolicyChecked = watch("privacyPolicy");
    const locationTermsChecked = watch("locationTerms");
    const marketingTermsChecked = watch("marketingTerms");

    const isConfirmButtonEnabled = serviceTermsChecked && privacyPolicyChecked;

    const handleAllCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setValue("serviceTerms", checked);
        setValue("privacyPolicy", checked);
        setValue("locationTerms", checked);
        setValue("marketingTerms", checked);
    };

    const onSignUpSubmit: SubmitHandler<SignUpFormInputs> = (data) => {
        console.log("Sign Up Form Data:", data);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1>회원가입</h1>
                <form onSubmit={handleSubmit(onSignUpSubmit)}>
                    <TextInput
                        type="text"
                        placeholder="이름"
                        className="textInput"
                    />
                    <TextInput
                        type="text"
                        placeholder="이메일 입력"
                        className="textInput"
                        errorMessage={errors.email?.message}
                        {...register("email", {
                            required: "이메일을 입력해 주세요.",
                            pattern: {
                                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: "올바른 이메일 형식을 입력해 주세요.",
                            },
                        })}
                    />
                    <TextInput
                        type="password"
                        placeholder="비밀번호 (영문과 숫자로 8자 이상)"
                        showToggle
                        className="textInput"
                        errorMessage={errors.password?.message}
                        {...register("password", {
                            required: "비밀번호를 입력해 주세요.",
                            minLength: {
                                value: 8,
                                message: "비밀번호는 영문과 숫자 포함하여 최소 8자 이상이어야 합니다.",
                            },
                        })}
                    />
                    <TextInput
                        type="password"
                        placeholder="비밀번호 확인"
                        showToggle
                        className="textInput"
                        errorMessage={errors.passwordConfirm?.message}
                        {...register("passwordConfirm", {
                            required: "비밀번호를 다시 입력해 주세요.",
                            validate: (value) => value === watch("password") || "비밀번호가 일치하지 않습니다.",
                        })}
                    />
                    <div className={styles.checkBox}>
                        <DefaultCheckBox
                            label="전체 동의"
                            checked={serviceTermsChecked && privacyPolicyChecked && locationTermsChecked && marketingTermsChecked}
                            onChange={handleAllCheckedChange}
                            className={styles.allCheckBox}
                        />
                    </div>
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
                        <AbleBtn label="다음" type="submit" />
                    ) : (
                        <DisableBtn label="다음" />
                    )}
                </form>
            </div>
        </div>
    );
};

export default SignUp;
