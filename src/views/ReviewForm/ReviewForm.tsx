"use client";

import React, { useState } from "react";
import cn from "classnames/bind";
import styles from "./ReviewForm.module.scss";
import Header from "@/app/components/Header/Header";
import { FaAngleLeft, FaRegStar } from "react-icons/fa6";
import { DisableBtn } from "@/app/components/Button/DisableBtn";
import { AbleBtn } from "@/app/components/Button/AbleBtn";

const cx = cn.bind(styles);

const ReviewForm = () => {
    const [reviewText, setReviewText] = useState("");

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReviewText(e.target.value);
    };

    return (
        <div className={cx("ReviewContainer")}>
            <Header title="후기 작성하기" leftIcon={<FaAngleLeft />} />
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
                <label
                    htmlFor="review-photo-upload"
                    className={cx("PhotoUpload")}
                >
                    +<p>사진 업로드</p>
                </label>
                <input
                    type="file"
                    id="review-photo-upload"
                    name="review-photo-upload"
                    className={cx("PhotoUploadInput")}
                    hidden
                />
            </div>
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
