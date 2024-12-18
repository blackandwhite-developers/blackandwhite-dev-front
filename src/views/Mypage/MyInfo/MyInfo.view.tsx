"use client";

import React, { useState } from "react";
import cn from "classnames/bind";
import styles from "./MyInfo.module.scss";
import Image from "next/image";
import { FaAngleLeft } from "react-icons/fa6";
import { MdOutlinePhotoCamera } from "react-icons/md";
import Header from "@/components/Header/Header";
import { DisableBtn } from "@/components/Button/DisableBtn";
import { Dialog } from "@/components/dialog/Dialog";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAtom } from "jotai";
import { userInfoAtom } from "@/atoms/userInfoAtom";

const cx = cn.bind(styles);

export interface MyInfoProps {
  thumbnail?: string;
  logoutFn: () => void;
  withdrawFn: () => void;
  profileFields: ProfileFields[];
}

export interface ProfileFields {
  label: string;
  name: string;
  value: string;
}

const MyInfo = (props: MyInfoProps) => {
  const [userInfo, setUserInfo] = useAtom(userInfoAtom);

  const { thumbnail: initialThumbnail, profileFields, logoutFn, withdrawFn } = props;
  /** 썸네일 기본이미지 지정 */
  const [thumbnail, setThumbnail] = useState(initialThumbnail || "/mypage/Thumbnail.png");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialog, setDialog] = useState({
    title: "",
    content: "",
    leftButtonText: "",
    rightButtonText: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  /** 로그아웃 ,탈퇴 dialog  */
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
        content: "탈퇴하면 현재 계정으로 작성한 글, 댓글 등을 수정하거나 삭제할 수 없습니다. 지금 탈퇴하시겠습니까?",
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
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
    profileFields.map((field) => {
      if (field.name === name) {
        field.value = value;
      }
    });
  };

  const handleLogout = () => {
    setIsDialogOpen(false);
    logoutFn();
  };

  const handleWithdraw = () => {
    setIsDialogOpen(false);
    withdrawFn();
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
        <Link href="/mypage/certification">
          <p className={cx("ProfileEdit")}>수정</p>
        </Link>
      </div>

      <div className={cx("ProfileInputWrapper")}>
        {profileFields.map((field) => (
          <div key={field.name} className={cx("ProfileInputTitle")}>
            <label htmlFor={field.name}>{field.label}</label>
            <input type="text" name={field.name} placeholder={field.value} value={field.value} onChange={handleInputChange} />
          </div>
        ))}
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
          onRightButtonClick={dialog.rightButtonText === "로그아웃" ? handleLogout : handleWithdraw}
        />
      )}
    </div>
  );
};

export default MyInfo;
