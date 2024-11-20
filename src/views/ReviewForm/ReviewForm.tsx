"use client";

import React, { useState } from "react";
import cn from "classnames/bind";
import styles from "./ReviewForm.module.scss";
import Header from "@/components/Header/Header";
import { FaAngleLeft, FaRegStar } from "react-icons/fa6";
import { DisableBtn } from "@/components/Button/DisableBtn";
import { AbleBtn } from "@/components/Button/AbleBtn";
import { useRouter } from "next/navigation";

const cx = cn.bind(styles);

const ReviewForm = () => {
    const [reviewText, setReviewText] = useState("");
    const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReviewText(e.target.value);
    };

    /** 뒤로가기 */
    const router = useRouter();
    const handleGoBack = () => {
        router.back();
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const newPhotos = Array.from(files).map((file) =>
                URL.createObjectURL(file)
            );
            setUploadedPhotos((prev) => [...prev, ...newPhotos]);
        }
        closeModal();
    };

    const handlePhotoDelete = (index: number) => {
        setUploadedPhotos((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <div className={cx("ReviewContainer")}>
            <Header
                title="후기 작성하기"
                leftIcon={<FaAngleLeft onClick={handleGoBack} />}
            />
            <div className={cx("RatingWrapper")}>
                <p className={cx("Rating")}>0.0</p>
                <div className={cx("RatingStar")}>
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                </div>

                <p className={cx("RatingInform")}>
                    숙소에 대한 별점을 눌러주세요.
                </p>
            </div>
            <div className={cx("ReviewWritingWrapper")}>
                <h1 className={cx("ReviewWritingTitle")}>후기 작성하기</h1>
                <textarea
                    className={cx("ReviewWritingArea")}
                    name="review"
                    id="review"
                    value={reviewText}
                    onChange={handleTextChange}
                    placeholder="숙소에 대한 상세한 후기를 입력해주세요."
                />
            </div>

            <div className={cx("PhotoUploadWrapper")}>
                <h1 className={cx("PhotoUploadTitle")}>사진 등록하기</h1>
                {uploadedPhotos.length > 0 && (
                    <div className={cx("UploadedPhotos")}>
                        {uploadedPhotos.map((photo, index) => (
                            <div key={index} className={cx("PhotoPreview")}>
                                <img
                                    src={photo}
                                    alt={`Uploaded photo ${index + 1}`}
                                />
                                <button
                                    className={cx("DeleteButton")}
                                    onClick={() => handlePhotoDelete(index)}
                                >
                                    삭제
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                <button className={cx("PhotoUpload")} onClick={openModal}>
                    +<p>사진 업로드</p>
                </button>
                <input
                    type="file"
                    id="review-photo-upload"
                    name="review-photo-upload"
                    className={cx("PhotoUploadInput")}
                    hidden
                    multiple
                    onChange={handleFileChange}
                />
            </div>

            {/* 모달 */}
            {isModalOpen && (
                <div className={cx("ModalWrapper")}>
                    <div
                        className={cx("ModalContent")}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <label
                            htmlFor="review-photo-upload"
                            className={cx("Button")}
                        >
                            사진 보관함
                        </label>
                        <input
                            type="file"
                            id="review-photo-upload"
                            name="review-photo-upload"
                            hidden
                            multiple
                            onChange={handleFileChange}
                        />
                        <DisableBtn label={"취소"} onClick={closeModal} />
                    </div>
                </div>
            )}
            <div className={cx("UploadButton")}>
                {reviewText === "" ? (
                    <DisableBtn label={"등록하기"} />
                ) : (
                    <AbleBtn label={"등록하기"} />
                )}
            </div>
        </div>
    );
};

export default ReviewForm;
