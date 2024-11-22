"use client";

import React, { useState } from "react";
import cn from "classnames/bind";
import styles from "./CertificationComplete.module.scss";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa6";
import { MdOutlinePhotoCamera } from "react-icons/md";
import Header from "@/components/Header/Header";
import { DisableBtn } from "@/components/Button/DisableBtn";
import { useRouter } from "next/navigation";
import { AbleBtn } from "@/components/Button/AbleBtn";

const cx = cn.bind(styles);

export interface CertificationCompleteProps {
    thumbnail?: string;

    profileFields: ProfileFields[];
}

export interface ProfileFields {
    label: string;
    name: string;
    value: string;
}

const CertificationComplete = (props: CertificationCompleteProps) => {
    const { thumbnail: initialThumbnail, profileFields } = props;
    /** 썸네일 기본이미지 지정 */
    const [thumbnail, setThumbnail] = useState(
        initialThumbnail || "/mypage/Thumbnail.png"
    );
    const [isModalOpen, setIsModalOpen] = useState(false);

    /** 유저 정보 필드 */
    const [profile, setProfile] = useState({
        name: profileFields.find((field) => field.name === "name")?.value || "",
        phone:
            profileFields.find((field) => field.name === "phone")?.value || "",
        birthdate:
            profileFields
                .find((field) => field.name === "birthdate")
                ?.value.split("T")[0] || "",
        nickname:
            profileFields.find((field) => field.name === "nickname")?.value ||
            "",
    });

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    /** 뒤로가기 */
    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setThumbnail(reader.result as string);
                setIsModalOpen(false);
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className={cx("MyInfoWrapper")}>
            <Header
                title={"내정보 수정"}
                leftIcon={<FaAngleLeft onClick={handleGoBack} />}
            />
            <div className={cx("Thumbnail")}>
                <Image src={thumbnail} alt="Profile" width={68} height={68} />
                <div className={cx("ThumbnailEdit")} onClick={openModal}>
                    <MdOutlinePhotoCamera />
                </div>
            </div>
            {/* 파일 올리는 기능 구현 필요 */}
            {/* 모달 */}
            {isModalOpen && (
                <div className={cx("ModalWrapper")}>
                    <div
                        className={cx("ModalContent")}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <label
                            htmlFor="thumbnail-photo-upload"
                            className={cx("Button")}
                        >
                            사진 보관함
                        </label>
                        <input
                            type="file"
                            id="thumbnail-photo-upload"
                            name="thumbnail-photo-upload"
                            hidden
                            onChange={handleFileChange}
                        />
                        <DisableBtn label={"취소"} onClick={closeModal} />
                    </div>
                </div>
            )}
            <div className={cx("ProfileInfoWrapper")}>
                <p className={cx("ProfileInfo")}>회원 정보</p>
            </div>
            <div className={cx("ProfileInputWrapper")}>
                {profileFields.map((field) => (
                    <div key={field.name} className={cx("ProfileInputTitle")}>
                        <label htmlFor={field.name}>{field.label}</label>
                        <input
                            type="text"
                            name={field.name}
                            value={profile[field.name as keyof typeof profile]}
                            onChange={handleInputChange}
                        />
                    </div>
                ))}
            </div>

            <div className={cx("SumbitBtn")}>
                <AbleBtn label={"저장하기"} />
            </div>
        </div>
    );
};

export default CertificationComplete;
