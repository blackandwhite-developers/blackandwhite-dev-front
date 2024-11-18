/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./SignUp.view.module.scss";
import TextInput from "@/app/components/input/TextInput/TextInput";
import { AbleBtn } from "@/app/components/Button/AbleBtn";
import { DisableBtn } from "@/app/components/Button/DisableBtn";
import DefaultCheckBox from "@/app/components/checkbox/default/DefaultCheckbox";
import HeaderOnly from "@/app/components/BottomSheet/HeaderOnly/HeaderOnly";
import Header from "@/app/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

interface FormValues {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    serviceTerms: boolean;
    privacyPolicy: boolean;
    locationTerms: boolean;
    marketingTerms: boolean;
    allAgree: boolean;
}

const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email("올바른 이메일 형식이 아닙니다.")
        .required("이메일을 입력해주세요."),
    password: yup
        .string()
        .min(8, "비밀번호는 8자 이상이어야 합니다.")
        .matches(/[A-Za-z]/, "비밀번호는 영문을 포함해야 합니다.")
        .matches(/[0-9]/, "비밀번호는 숫자를 포함해야 합니다.")
        .required("비밀번호를 입력해주세요."),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다.")
        .required("비밀번호 확인을 입력해주세요."),
    name: yup.string().required("이름을 입력해주세요."),
    serviceTerms: yup
        .boolean()
        .oneOf([true], "필수 항목에 동의해주세요.")
        .default(false),
    privacyPolicy: yup
        .boolean()
        .oneOf([true], "필수 항목에 동의해주세요.")
        .default(false),
    locationTerms: yup.boolean().default(false),
    marketingTerms: yup.boolean().default(false),
    allAgree: yup.boolean().default(false),
});

const SignUpView = () => {
    const {
        handleSubmit,
        control,
        watch,
        setValue,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: yupResolver(validationSchema),
    });

    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
    const [bottomSheetTitle, setBottomSheetTitle] =
        useState<React.ReactNode>("");
    const [bottomSheetContent, setBottomSheetContent] =
        useState<React.ReactNode>("");

    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
    };

    const openBottomSheet = (
        title: React.ReactNode,
        content: React.ReactNode
    ) => {
        setBottomSheetTitle(title);
        setBottomSheetContent(content);
        setIsBottomSheetOpen(true);
    };

    const closeBottomSheet = () => {
        setIsBottomSheetOpen(false);
    };

    const serviceTermsChecked = watch("serviceTerms");
    const privacyPolicyChecked = watch("privacyPolicy");
    const locationTermsChecked = watch("locationTerms");
    const marketingTermsChecked = watch("marketingTerms");

    const handleAllAgreeChange = (isChecked: boolean) => {
        setValue("allAgree", isChecked);
        setValue("serviceTerms", isChecked);
        setValue("privacyPolicy", isChecked);
        setValue("locationTerms", isChecked);
        setValue("marketingTerms", isChecked);
    };

    const isAllChecked =
        serviceTermsChecked &&
        privacyPolicyChecked &&
        locationTermsChecked &&
        marketingTermsChecked;
    const isConfirmButtonEnabled = serviceTermsChecked && privacyPolicyChecked;

    useEffect(() => {
        const allChecked =
            serviceTermsChecked &&
            privacyPolicyChecked &&
            locationTermsChecked &&
            marketingTermsChecked;

        setValue("allAgree", allChecked);
    }, [
        serviceTermsChecked,
        privacyPolicyChecked,
        locationTermsChecked,
        marketingTermsChecked,
        setValue,
    ]);

    /** 뒤로가기 */
    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
            <div className={styles.container}>
                <Header
                    leftIcon={
                        <FaAngleLeft
                            onClick={handleGoBack}
                            className={styles.headerIcon}
                        />
                    }
                />
                <h1>회원가입</h1>

                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextInput
                            {...field}
                            type="text"
                            placeholder="이름"
                            className={styles.textInput}
                            maxLength={20}
                        />
                    )}
                />
                {!isBottomSheetOpen && errors.name && (
                    <p className={styles.error}>{errors.name.message}</p>
                )}

                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextInput
                            {...field}
                            type="text"
                            placeholder="이메일 입력"
                            className={styles.textInput}
                        />
                    )}
                />
                {!isBottomSheetOpen && errors.email && (
                    <p className={styles.error}>{errors.email.message}</p>
                )}
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextInput
                            {...field}
                            type="password"
                            placeholder="비밀번호 (영문과 숫자로 8자 이상)"
                            showToggle
                            className={styles.textInput}
                            maxLength={20}
                        />
                    )}
                />
                {!isBottomSheetOpen && errors.password && (
                    <p className={styles.error}>{errors.password.message}</p>
                )}

                <Controller
                    name="confirmPassword"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextInput
                            {...field}
                            type="password"
                            placeholder="비밀번호 확인"
                            showToggle
                            className={styles.textInput}
                            maxLength={20}
                        />
                    )}
                />
                {!isBottomSheetOpen && errors.confirmPassword && (
                    <p className={styles.error}>
                        {errors.confirmPassword.message}
                    </p>
                )}

                <div className={styles.checkBox}>
                    <Controller
                        name="allAgree"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                            <DefaultCheckBox
                                {...field}
                                label="전체 동의"
                                fontWeight={700}
                                checked={isAllChecked}
                                onChange={(e) => {
                                    handleAllAgreeChange(e.target.checked);
                                    console.log("전체:", e.target.checked);
                                }}
                            />
                        )}
                    />
                </div>

                <div className={styles.checkBox}>
                    <Controller
                        name="serviceTerms"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                            <DefaultCheckBox
                                {...field}
                                label="서비스 이용약관 (필수)"
                                fontWeight={400}
                                checked={field.value}
                                onChange={(e) => {
                                    field.onChange(e.target.checked);
                                    console.log("서비스:", e.target.checked);
                                }}
                            />
                        )}
                    />
                    <button
                        onClick={() =>
                            openBottomSheet(
                                <span>서비스 이용약관</span>,
                                <div className={styles.wrapper_bottomSheet}>
                                    <div
                                        className={styles.container_bottomSheet}
                                    >
                                        <p>
                                            본 약관은 [서비스명] (이하
                                            &quot;회사&quot;)이 제공하는 모든
                                            서비스의 이용과 관련하여 회사와
                                            이용자 간의 권리, 의무, 책임 사항 및
                                            기타 필요한 사항을 규정함을 목적으로
                                            합니다.
                                        </p>
                                        <p>
                                            <strong>제1조 (목적)</strong>
                                            <br />이 약관은 회사가 제공하는
                                            서비스의 이용 조건 및 절차, 회사와
                                            이용자 간의 권리 및 의무, 책임 사항
                                            등을 규정하는 것을 목적으로 합니다.
                                        </p>

                                        <p>
                                            <strong>
                                                제2조 (약관의 효력과 변경)
                                            </strong>
                                            <br />
                                            ① 본 약관은 이용자가 회원가입 시
                                            동의함으로써 효력이 발생합니다.
                                            <br />
                                            ② 회사는 필요한 경우 관련 법령을
                                            위반하지 않는 범위 내에서 본 약관을
                                            개정할 수 있으며, 개정 내용은 서비스
                                            내에 공지합니다.
                                            <br />③ 이용자는 개정된 약관에
                                            동의하지 않을 경우 서비스 이용을
                                            중단하고 회원 탈퇴를 할 수 있습니다.
                                        </p>
                                        <p>
                                            <strong>
                                                제3조 (회원가입 및 이용계약)
                                            </strong>
                                            <br />
                                            ① 이용자는 회사가 정한 절차에 따라
                                            회원가입을 신청할 수 있으며, 회사는
                                            이를 승낙함으로써 이용 계약이
                                            성립됩니다.
                                            <br />② 회원가입 시 제공한 정보에
                                            허위, 기재 누락, 오기 등이 있는 경우
                                            회사는 이용 계약을 해지할 수
                                            있습니다.
                                        </p>
                                        <p>
                                            <strong>
                                                제4조 (서비스의 제공 및 변경)
                                            </strong>
                                            <br />
                                            ① 회사는 이용자에게 다양한 콘텐츠와
                                            기능을 포함한 서비스를 제공합니다.
                                            <br />② 회사는 서비스의 일부 또는
                                            전체를 변경할 수 있으며, 중요한 변경
                                            사항은 사전에 공지합니다.
                                        </p>
                                        <p>
                                            <strong>
                                                제5조 (이용자의 의무)
                                            </strong>
                                            <br />
                                            ① 이용자는 서비스 이용 시 관련 법령
                                            및 본 약관의 규정을 준수해야 합니다.
                                            <br />② 이용자는 타인의 권리나
                                            명예를 침해하거나 불법적인 행위를
                                            해서는 안 됩니다.
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                    >
                        자세히 보기
                    </button>
                </div>

                <div className={styles.checkBox}>
                    <Controller
                        name="privacyPolicy"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                            <DefaultCheckBox
                                {...field}
                                label="개인정보 수집/이용 (필수)"
                                fontWeight={400}
                                checked={field.value}
                                onChange={(e) => {
                                    field.onChange(e.target.checked);
                                    console.log("개인정보:", e.target.checked);
                                }}
                            />
                        )}
                    />
                    <button
                        onClick={() =>
                            openBottomSheet(
                                <span>개인정보 수집/이용 약관</span>,
                                <div className={styles.wrapper_bottomSheet}>
                                    <div
                                        className={styles.container_bottomSheet}
                                    >
                                        <p>
                                            회사는 회원가입 및 서비스 제공을
                                            위해 이용자의 개인정보를 수집,
                                            이용하며, 그 목적과 처리에 대해
                                            아래와 같이 안내드립니다.
                                        </p>
                                        <div>
                                            <strong>
                                                1. 수집하는 개인정보 항목
                                            </strong>
                                            <br />
                                            <ul>
                                                <li>
                                                    필수항목: 이름, 이메일,
                                                    전화번호, 생년월일, 비밀번호
                                                </li>
                                                <li>선택항목: 성별, 주소</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <strong>
                                                2. 개인정보의 수집 및 이용 목적
                                            </strong>
                                            <br />
                                            <ul>
                                                <li>회원 가입 및 본인 확인</li>
                                                <li>
                                                    서비스 제공 및 고객 지원
                                                </li>
                                                <li>
                                                    마케팅 및 이벤트 정보 제공
                                                    (동의한 경우에 한함)
                                                </li>
                                                <li>
                                                    서비스 이용 기록, 접속 로그
                                                    분석 등 통계 분석을 위한
                                                    데이터 활용
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <strong>
                                                3. 개인정보 보유 및 이용 기간
                                            </strong>
                                            <br />
                                            <ul>
                                                <li>
                                                    회원 탈퇴 시까지 보유하며,
                                                    관련 법령에 따라 보존이
                                                    필요한 경우 해당 기간 동안
                                                    보존합니다.
                                                </li>
                                                <li>
                                                    보존 기간: 전자상거래
                                                    등에서의 소비자 보호에 관한
                                                    법률에 따라 계약 또는
                                                    청약철회에 관한 기록 5년,
                                                    소비자 불만 또는 분쟁 처리에
                                                    관한 기록 3년 등.
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <strong>
                                                4. 동의 거부 권리 및 불이익
                                            </strong>
                                            <br />
                                            <ul>
                                                <li>
                                                    이용자는 개인정보 제공에
                                                    대한 동의를 거부할 권리가
                                                    있으며, 이 경우 회원가입이
                                                    제한될 수 있습니다.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    >
                        자세히 보기
                    </button>
                </div>

                <div className={styles.checkBox}>
                    <Controller
                        name="locationTerms"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                            <DefaultCheckBox
                                {...field}
                                label="위치정보 이용 동의 (선택)"
                                fontWeight={400}
                                checked={field.value}
                                onChange={(e) => {
                                    field.onChange(e.target.checked);
                                    console.log("위치:", e.target.checked);
                                }}
                            />
                        )}
                    />
                    <button
                        onClick={() =>
                            openBottomSheet(
                                <span>위치정보 이용 약관</span>,
                                <div className={styles.wrapper_bottomSheet}>
                                    <div
                                        className={styles.container_bottomSheet}
                                    >
                                        <p>
                                            회사는 위치 기반 서비스를 제공하기
                                            위해 이용자의 위치 정보를 수집,
                                            이용, 제공하며, 그 목적과 방법에
                                            대해 아래와 같이 안내드립니다.
                                        </p>
                                        <div>
                                            <strong>
                                                1. 위치정보 수집 항목 및 방법
                                            </strong>
                                            <br />
                                            <ul>
                                                <li>
                                                    위치정보: GPS, Wi-Fi, 통신사
                                                    기지국 등
                                                </li>
                                                <li>
                                                    수집 방법: 앱을 통한 위치
                                                    정보 수집 (이용자가 위치
                                                    정보 제공을 허용한 경우)
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <strong>
                                                2. 위치정보 이용 목적
                                            </strong>
                                            <br />
                                            <ul>
                                                <li>
                                                    근처 매장 검색 및 맞춤형
                                                    서비스 제공
                                                </li>
                                                <li>
                                                    고객 맞춤형 콘텐츠 및 광고
                                                    제공
                                                </li>
                                                <li>
                                                    통계 분석 및 서비스 개선
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <strong>
                                                3. 위치정보의 보유 및 이용 기간
                                            </strong>
                                            <br />
                                            <ul>
                                                <li>
                                                    위치 정보는 이용 목적이
                                                    달성된 후 지체 없이
                                                    삭제합니다.
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <strong>
                                                4. 위치정보 제3자 제공
                                            </strong>
                                            <br />
                                            <ul>
                                                <li>
                                                    위치 정보를 제3자에게
                                                    제공하지 않으며, 법률에 따라
                                                    필요한 경우에만 예외적으로
                                                    제공될 수 있습니다.
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <strong>5. 동의 거부 권리</strong>
                                            <br />
                                            <ul>
                                                <li>
                                                    이용자는 위치정보 제공에
                                                    대한 동의를 거부할 권리가
                                                    있으며, 이 경우 일부
                                                    서비스가 제한될 수 있습니다.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    >
                        자세히 보기
                    </button>
                </div>

                <div className={styles.checkBox}>
                    <Controller
                        name="marketingTerms"
                        control={control}
                        defaultValue={false}
                        render={({ field }) => (
                            <DefaultCheckBox
                                {...field}
                                label="마케팅 정보 수신 동의 (선택)"
                                fontWeight={400}
                                checked={field.value}
                                onChange={(e) => {
                                    field.onChange(e.target.checked);
                                    console.log("마케팅:", e.target.checked);
                                }}
                            />
                        )}
                    />
                    <button
                        onClick={() =>
                            openBottomSheet(
                                <span>마케팅 정보 수신 동의</span>,
                                <div className={styles.wrapper_bottomSheet}>
                                    <div
                                        className={styles.container_bottomSheet}
                                    >
                                        <p>
                                            회사는 다양한 프로모션 및 이벤트
                                            소식을 이용자에게 제공하기 위해
                                            마케팅 정보 수신에 대한 동의를 받고
                                            있습니다.
                                        </p>
                                        <div>
                                            <strong>
                                                1. 수집 및 이용 목적
                                            </strong>
                                            <br />
                                            <ul>
                                                <li>
                                                    서비스 관련 최신 정보 및
                                                    프로모션 제공
                                                </li>
                                                <li>
                                                    맞춤형 광고 및 이벤트 안내
                                                </li>
                                                <li>
                                                    할인 혜택 및 회원 대상 특별
                                                    이벤트 안내
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <strong>
                                                2. 마케팅 정보의 발송 방법
                                            </strong>
                                            <br />
                                            <ul>
                                                <li>
                                                    이메일, 문자 메시지, 푸시
                                                    알림을 통해 발송됩니다.
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <strong>
                                                3. 동의 철회 및 관리
                                            </strong>
                                            <br />
                                            <ul>
                                                <li>
                                                    위치 정보는 이용 목적이
                                                    달성된 후 지체 없이
                                                    삭제합니다.
                                                </li>
                                            </ul>
                                        </div>

                                        <div>
                                            <strong>4. 동의 거부 권리</strong>
                                            <br />
                                            <ul>
                                                <li>
                                                    이용자는 마케팅 정보 수신에
                                                    대한 동의를 거부할 권리가
                                                    있으며, 이 경우 프로모션
                                                    혜택 및 정보 제공이 제한될
                                                    수 있습니다.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    >
                        자세히 보기
                    </button>
                </div>

                {isConfirmButtonEnabled ? (
                    <AbleBtn label="다음" type="submit" />
                ) : (
                    <DisableBtn label="다음" />
                )}

                <HeaderOnly
                    title={bottomSheetTitle}
                    content={bottomSheetContent}
                    isOpen={isBottomSheetOpen}
                    onClose={closeBottomSheet}
                    className="customClassName"
                    scrollable={true}
                />
            </div>
        </form>
    );
};

export default SignUpView;
