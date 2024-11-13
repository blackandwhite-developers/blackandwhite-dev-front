"use client";

import React, { useState } from "react";
import cn from "classnames/bind";
import styles from "./MyInfo.module.scss";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa6";
import { MdOutlinePhotoCamera } from "react-icons/md";
import Header from "@/app/components/Header/Header";
// import { AbleBtn } from "@/app/components/Button/AbleBtn";
import { DisableBtn } from "@/app/components/Button/DisableBtn";
import { NomalBtn } from "@/app/components/Button/NomalBtn";
import { Dialog } from "@/app/components/dialog/Dialog";

const cx = cn.bind(styles);

const MyInfo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialog, setDialog] = useState({
        title: "",
        content: "",
        leftButtonText: "",
        rightButtonText: "",
    });
    const [profile, setProfile] = useState({
        name: "",
        phone: "",
        birthdate: "",
        nickname: "",
    });

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openDialog = (action: "logout" | "withdraw") => {
        if (action === "logout") {
            setDialog({
                title: "로그아웃",
                content: "로그아웃하시겠습니까?",
                leftButtonText: "취소",
                rightButtonText: "로그아웃",
            });
        } else if (action === "withdraw") {
            setDialog({
                title: "탈퇴하기",
                content:
                    "탈퇴하면 현재 계정으로 작정한 글,댓글 등을 수정하거나 삭제할 수 없습니다.지금 탈퇴하시겠습니까?",
                leftButtonText: "취소",
                rightButtonText: "탈퇴하기",
            });
        }
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    return (
        <div className={cx("MyInfoWrapper")}>
            <Header title={"내정보 수정"} leftIcon={<FaAngleLeft />} />

            <div className={cx("Thumbnail")}>
                <Image
                    src={"/mypage/Thumbnail.png"}
                    alt="Profile"
                    width={68}
                    height={68}
                />
                <div className={cx("ThumbnailEdit")} onClick={openModal}>
                    <MdOutlinePhotoCamera />
                </div>
            </div>

            {/* 모달 */}
            {isModalOpen && (
                <div className={cx("ModalWrapper")}>
                    <div className={cx("ModalContent")}>
                        <NomalBtn label={"사진 보관함"} />
                        <DisableBtn label={"취소"} onClick={closeModal} />
                    </div>
                </div>
            )}

            <div className={cx("ProfileInfoWrapper")}>
                <label htmlFor="name" className={cx("ProfileInfo")}>
                    회원 정보
                </label>
            </div>

            <div className={cx("ProfileInputWrapper")}>
                <div className={cx("ProfileInputTitle")}>
                    <label htmlFor="name">이름</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={cx("ProfileInputTitle")}>
                    <label htmlFor="phone">휴대전화 번호</label>
                    <input
                        type="text"
                        name="phone"
                        value={profile.phone}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={cx("ProfileInputTitle")}>
                    <label htmlFor="birthdate">생년월일</label>
                    <input
                        type="text"
                        name="birthdate"
                        value={profile.birthdate}
                        onChange={handleInputChange}
                    />
                </div>
                <div className={cx("ProfileInputTitle")}>
                    <label htmlFor="nickname">닉네임</label>
                    <input
                        type="text"
                        name="nickname"
                        value={profile.nickname}
                        onChange={handleInputChange}
                    />
                </div>
            </div>

            <div className={cx("LogoutWrapper")}>
                <a href="#" onClick={() => openDialog("logout")}>
                    로그아웃
                </a>
                <a href="#" onClick={() => openDialog("withdraw")}>
                    회원탈퇴
                </a>
            </div>

            {isDialogOpen && (
                <Dialog
                    title={dialog.title}
                    content={dialog.content}
                    leftButtonText={dialog.leftButtonText}
                    rightButtonText={dialog.rightButtonText}
                    onLeftButtonClick={closeDialog}
                    onRightButtonClick={closeDialog}
                />
            )}
        </div>
    );
};

export default MyInfo;
