"use client";

import React from "react";
import cn from "classnames/bind";
import styles from "./MyInfo.module.scss";
import Image from "next/image";
// import FooterBar from "@/app/components/footer/FooterBar";
import { FaAngleLeft } from "react-icons/fa6";
import { MdOutlinePhotoCamera } from "react-icons/md";

import Header from "@/app/components/Header/Header";

const cx = cn.bind(styles);

const MyInfo = () => {
    return (
        <div className={cx("MyInfoWrapper")}>
            <Header title={"내정보 수정"} leftIcon={<FaAngleLeft />} />
            <div className={cx("Thumbnail")}>
                <Image
                    src={"/mypage/Thumbnail.png"}
                    alt=""
                    width={68}
                    height={68}
                />
                <div className={cx("ThumbnailEdit")}>
                    <MdOutlinePhotoCamera />
                </div>
            </div>
            <div className={cx("ProfileInfoWrapper")}>
                <label htmlFor="name" className={cx("ProfileInfo")}>
                    회원 정보
                </label>
                <p className={cx("ProfileEdit")}>수정</p>
            </div>
            <div className={cx("ProfileInputWrapper")}>
                <div className={cx("ProfileInputTitle")}>
                    <label htmlFor="name">이름</label>
                    <input type="text" />
                </div>
                <div className={cx("ProfileInputTitle")}>
                    <label htmlFor="phone">휴대전화 번호</label>
                    <input type="text" />
                </div>
                <div className={cx("ProfileInputTitle")}>
                    <label htmlFor="birthdate">생년월일</label>
                    <input type="text" />
                </div>
                <div className={cx("ProfileInputTitle")}>
                    <label htmlFor="nickname">닉네임</label>
                    <input type="text" />
                </div>
            </div>
            <div className={cx("LogoutWrapper")}>
                <a href="">로그아웃</a>
                <a href="">회원탈퇴</a>
            </div>
        </div>
    );
};

export default MyInfo;
