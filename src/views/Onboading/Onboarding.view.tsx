"use client"
import React from "react";
import styles from "./Onboarding.view.module.scss";
import { useRouter } from "next/navigation"; 
import { AbleBtn } from "@/app/components/Button/AbleBtn";

const OnboardingView = () => {
    const router = useRouter();

    const handleStartClick = () => {
        router.push("/login");
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <img src="/home/img_home_logo_w.svg" alt="kokoshi-logo" />
                <h3>다양한 숙소,<br />코코시에서 만나보세요!</h3>
                <img src="/images/onboarding.png" alt="onboarding" />
                <h4>숙박 검색부터 예약까지!<br />코코시에서 다양한 숙소를 만나보세요.</h4>
                <AbleBtn 
                    label="시작하기" 
                    type="button" 
                    backgroundColor="#fff"
                    textColor="#8728ff" 
                    onClick={handleStartClick}
                />
            </div>
        </div>
    )
}
export default OnboardingView