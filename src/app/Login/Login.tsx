import React from 'react';
import { LuEye, LuEyeOff } from "react-icons/lu";
import styles from './Login.module.scss';

const Login = () => {
    console.log(styles);
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1>로그인</h1>
                <input type="email" name="email" id="email" />
                <input type="password" name="password" id="password" />
                <div>
                    <LuEye />
                    <LuEyeOff />
                </div>
                <input type="button" value="로그인" />
                <a href="./Sign">회원가입</a>
            </div>
        </div>
    );
}

export default Login;
