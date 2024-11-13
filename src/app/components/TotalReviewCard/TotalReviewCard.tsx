"use client";

import { FaRegStar } from "react-icons/fa";
import styles from "./TotalReviewCard.module.scss";
import cn from "classnames/bind";

import "swiper/css";

const cx = cn.bind(styles);

type ReviewProps = {
    ratingAverage: string;
    totalReview: string | number;
    reviewCounting: string | number;
};

const TotalReviewCard = (props: ReviewProps) => {
    const { ratingAverage, totalReview, reviewCounting } = props;

    return (
        <div className={cx("ReviewContainer")}>
            <div className={cx("TotalReviewWrapper")}>
                <div className={cx("ReviewInform")}>
                    <p className={cx("ReviewRating")}>{ratingAverage}</p>
                    <div>
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                        <FaRegStar />
                    </div>
                    <p className={cx("ReviewCounting")}>리뷰 {totalReview}</p>
                </div>
                <div className={cx("ReviewProgressWrapper")}>
                    <ul className={cx("ReviewProgressInform")}>
                        <li className={cx("ReviewProgressBar")}>
                            <p>5점</p>
                            <progress value="80" max="100"></progress>
                            <p>{reviewCounting}</p>
                        </li>
                        <li className={cx("ReviewProgressBar")}>
                            <p>4점</p>
                            <progress value="60" max="100"></progress>
                            <p>{reviewCounting}</p>
                        </li>
                        <li className={cx("ReviewProgressBar")}>
                            <p>3점</p>
                            <progress value="40" max="100"></progress>
                            <p>{reviewCounting}</p>
                        </li>
                        <li className={cx("ReviewProgressBar")}>
                            <p>2점</p>
                            <progress value="20" max="100"></progress>
                            <p>{reviewCounting}</p>
                        </li>
                        <li className={cx("ReviewProgressBar")}>
                            <p>1점</p>
                            <progress value="10" max="100"></progress>
                            <p>{reviewCounting}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TotalReviewCard;
