"use client";
import React, { useState, useEffect } from "react";
import styles from "./SignUp.view.module.scss";
import TextInput from "@/app/components/input/TextInput/TextInput";
import { AbleBtn } from "@/app/components/Button/AbleBtn";
import { DisableBtn } from "@/app/components/Button/DisableBtn";
import DefaultCheckBox from "@/app/components/checkbox/default/DefaultCheckbox";

const SignUpView = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

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

  useEffect(() => {
    setIsAllChecked(serviceTermsChecked && privacyPolicyChecked && locationTermsChecked && marketingTermsChecked);
  }, [serviceTermsChecked, privacyPolicyChecked, locationTermsChecked, marketingTermsChecked]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>회원가입</h1>
        <TextInput
          type="text"
          placeholder="이름"
          className="textInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          type="text"
          placeholder="이메일 입력"
          className="textInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="비밀번호 (영문과 숫자로 8자 이상)"
          showToggle
          className="textInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextInput
          type="password"
          placeholder="비밀번호 확인"
          showToggle
          className="textInput"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />

        <div className={styles.checkBox}>
          <DefaultCheckBox
            label="전체 동의"
            checked={isAllChecked}
            onChange={handleAllCheckedChange}
            className={styles.allCheckBox}
          />
        </div>

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
          <AbleBtn label="다음" type="submit" />
        ) : (
          <DisableBtn label="다음" />
        )}
      </div>
    </div>
  );
};
export default SignUpView;
