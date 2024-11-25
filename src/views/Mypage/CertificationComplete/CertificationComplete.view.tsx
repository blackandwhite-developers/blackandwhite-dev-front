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
import { useAtom } from "jotai";
import { userInfoAtom } from "@/atoms/userInfoAtom";

const cx = cn.bind(styles);

export interface CertificationCompleteProps {
    changeInfoFn: (data: {
        name: string;
        phone: string;
        birth: string;
        nickname: string;
        profilePicture: string;
    }) => Promise<boolean>;
    thumbnail?: string;
}

const CertificationComplete = (props: CertificationCompleteProps) => {
    const [userInfo, setUserInfo] = useAtom(userInfoAtom);
    const [birthError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const adjustNumber = (value: number, min: number, max: number): number => {
        if (value <= min) return min;
        if (value >= max) return max;
        return value;
    };

    /** 생일 입력 범위 */
    const validateBirthDate = (birthStr: string) => {
        const datePattern = /^\d{4}\/\d{1,2}\/\d{1,2}$/;
        if (!datePattern.test(birthStr)) {
            return false;
        }

        const [year, month, day] = birthStr.split("/").map(Number);

        if (year === 0 || month === 0 || day === 0) {
            return false;
        }
    };

    /** 전화번호 입력 범위 */
    const formatPhoneNumber = (value: string): string => {
        const numbers = value.replace(/[^\d]/g, "");
        const trimmed = numbers.slice(0, 11);

        if (trimmed.length <= 3) {
            return trimmed;
        } else if (trimmed.length <= 7) {
            return `${trimmed.slice(0, 3)}-${trimmed.slice(3)}`;
        } else {
            return `${trimmed.slice(0, 3)}-${trimmed.slice(
                3,
                7
            )}-${trimmed.slice(7)}`;
        }
    };

    const validatePhoneNumber = (phone: string): boolean => {
        const phonePattern = /^0\d{2}-\d{3,4}-\d{4}$/;
        if (!phonePattern.test(phone)) {
        }
        setPhoneError("");
        return true;
    };

    /** 생년월일 입력 범위 */
    const formatBirthDate = (value: string): string => {
        const numbers = value.replace(/[^\d/]/g, "");
        const digits = numbers.replace(/\//g, "");

        let year = "";
        let month = "";
        let day = "";

        if (digits.length >= 4) {
            const yearNum = parseInt(digits.slice(0, 4));
            year = String(adjustNumber(yearNum, 1900, 2024)).padStart(4, "0");
        } else {
            year = digits.slice(0, 4);
        }

        if (digits.length >= 6) {
            const monthNum = parseInt(digits.slice(4, 6));
            if (monthNum === 0) {
                month = "01";
            } else {
                month = String(adjustNumber(monthNum, 1, 12)).padStart(2, "0");
            }
        } else if (digits.length > 4) {
            month = digits.slice(4);
        }

        if (digits.length >= 8) {
            const dayNum = parseInt(digits.slice(6, 8));
            if (dayNum === 0) {
                day = "01";
            } else {
                const maxDays = new Date(
                    parseInt(year),
                    parseInt(month),
                    0
                ).getDate();
                day = String(adjustNumber(dayNum, 1, maxDays)).padStart(2, "0");
            }
        } else if (digits.length > 6) {
            day = digits.slice(6);
        }

        if (month && day) {
            return `${year}/${month}/${day}`;
        } else if (month) {
            return `${year}/${month}`;
        }
        return year;
    };

    const profileFields = [
        {
            label: "이름",
            name: "name",
            value: userInfo.name,
        },
        {
            label: "전화번호",
            name: "phone",
            value: userInfo.phone,
            format: formatPhoneNumber,
            validate: validatePhoneNumber,
            error: phoneError,
        },
        {
            label: "생년월일",
            name: "birth",
            value: userInfo.birth,
            format: formatBirthDate,
            validate: validateBirthDate,
            error: birthError,
        },
        {
            label: "닉네임",
            name: "nickname",
            value: userInfo.nickname,
        },
    ];

    const { thumbnail: initialThumbnail } = props;
    /** 썸네일 기본이미지 지정 */
    const [thumbnail, setThumbnail] = useState(
        initialThumbnail || "/mypage/Thumbnail.png"
    );
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        props.changeInfoFn({
            name: userInfo.name,
            phone: userInfo.phone,
            birth: userInfo.birth,
            nickname: userInfo.nickname,
            profilePicture: userInfo.profilePicture,
        });
    };

    const handleButtonClick = async (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        const isSuccess = await props.changeInfoFn(userInfo);
        if (isSuccess) {
            setUserInfo({
                name: userInfo.name,
                phone: userInfo.phone,
                birth: userInfo.birth,
                nickname: userInfo.nickname,
                profilePicture: userInfo.profilePicture,
            });
            router.push("/mypage/myinfo");
        } else {
            alert("정보 변경에 실패했습니다.");
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const field = profileFields.find((f) => f.name === name);

        let formattedValue = value;
        if (field?.format) {
            formattedValue = field.format(value);
        }

        setUserInfo((prev) => ({
            ...prev,
            [name]: formattedValue,
        }));

        if (field?.validate) {
            field.validate(formattedValue);
        }
    };

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
                            value={field.value}
                            onChange={handleInputChange}
                        />
                        {field.error && (
                            <p className={cx("ErrorMessage")}>{field.error}</p>
                        )}
                    </div>
                ))}
            </div>

            <div className={cx("SumbitBtn")}>
                <AbleBtn label={"저장하기"} onClick={handleButtonClick} />
            </div>
        </div>
    );
};

export default CertificationComplete;
