import React from "react";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import {
    // IoIosArrowBack,
    IoIosHeartEmpty,
    IoIosStarOutline,
} from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
// import { BsCart2 } from "react-icons/bs";
import Header from "../components/Header/Header";
import { DateBtn } from "../components/Button/DateBtn";
import { MemberBtn } from "../components/Button/MemberBtn";

const cx = cn.bind(styles);

const ProductDetail = () => {
    const title = "김포 마리나베이 호텔";
    return (
        <div className={cx("ProductDetailWrapper")}>
            <Header title={title} />
            <div className={cx("ProductImage")}>
                <Image
                    src="/images/HotelImage1.png"
                    alt="탭 바 이미지"
                    width={360}
                    height={228}
                />
            </div>
            <div className={cx("ProductInform")}>
                <p className={cx("ProductCategory")}>호텔</p>
                <div className={cx("ProductWrapper")}>
                    <div className={cx("ProductTitleWrapper")}>
                        <h1 className={cx("ProductTitle")}>{title}</h1>
                        <p className={cx("ProductFavorite")}>
                            <IoIosHeartEmpty />
                        </p>
                    </div>
                    <div className={cx("ProductRating")}>
                        <p className={cx("ProductRatingText")}>4.0</p>
                        <div className={cx("ProductStarRating")}>
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                            <IoIosStarOutline />
                        </div>
                        <p className={cx("ProductVoteTotal")}>(1,136)</p>
                    </div>
                    <div className={cx("ProductLocation")}>
                        <p className={cx("ProductLocationIcon")}>
                            <IoLocationOutline />
                        </p>
                        <p>김포공항역 3분</p>
                    </div>
                </div>

                <div className={cx("ProductSelectWrapper")}>
                    <div className={cx("ProductCategoryBadge")}>
                        <p>객실 선택</p>
                        <p>후기</p>
                    </div>

                    <div>
                        <div className={cx("ReservationSelectBtn")}>
                            <DateBtn label={""} />
                            <MemberBtn label={""} />
                        </div>

                        <div>
                            <p className={cx("ProductMainImage")}>사진</p>
                            <h1>프리미엄 트윈</h1>
                            <p>할인</p>
                            <div>
                                <p>객실정보</p>
                                <p>기준 2인 (최대 3인)</p>
                                <p>입실/퇴실</p>
                                <p>입실 16:00 퇴실 11:00</p>
                            </div>
                            <p>1개남음</p>
                            <p>75,000원</p>
                            <button>객실 예약하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
