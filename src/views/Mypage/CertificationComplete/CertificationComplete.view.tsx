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
  changeInfoFn: (data: { name: string; phone: string; birth: string; nickname: string; profilePicture: string }) => Promise<boolean>;
  thumbnail?: string;
}

const CertificationComplete = (props: CertificationCompleteProps) => {
  const [userInfo, setUserInfo] = useAtom(userInfoAtom);
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
    },
    {
      label: "생년월일",
      name: "birthdate",
      value: userInfo.birth,
    },
    {
      label: "닉네임",
      name: "nickname",
      value: userInfo.nickname,
    },
  ];
  const { thumbnail: initialThumbnail } = props;
  /** 썸네일 기본이미지 지정 */
  const [thumbnail, setThumbnail] = useState(initialThumbnail || "/mypage/Thumbnail.png");
  const [isModalOpen, setIsModalOpen] = useState(false);

  /** 유저 정보 필드 */
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

  const handleButtonClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
    profileFields.map((field) => {
      if (field.name === name) {
        field.value = value;
      }
    });
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
      <Header title={"내정보 수정"} leftIcon={<FaAngleLeft onClick={handleGoBack} />} />
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
          <div className={cx("ModalContent")} onClick={(e) => e.stopPropagation()}>
            <label htmlFor="thumbnail-photo-upload" className={cx("Button")}>
              사진 보관함
            </label>
            <input type="file" id="thumbnail-photo-upload" name="thumbnail-photo-upload" hidden onChange={handleFileChange} />
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
            <input type="text" name={field.name} value={field.value} onChange={handleInputChange} />
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
