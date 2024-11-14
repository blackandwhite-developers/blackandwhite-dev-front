"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./Splash.view.module.scss";

const SplashView = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/onboarding");
        }, 3000);

        return () => clearTimeout(timer); 
    }, [router]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src="/images/SplashLogo.png" alt="SplashLogo" />
                    <img src="/home/img_home_logo.svg" alt="kokoshi-logo" />
                </div>
                <div className={styles.content}>
                    <p><strong>내 취향의 숙소</strong>찾기,</p>
                    <p>코코시</p>
                </div>
            </div>
        </div>
    )
}

export default SplashView;