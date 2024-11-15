"use client";

import { useRouter } from "next/navigation";
import React from "react";
import cn from "classnames/bind";
import styles from "./Mypage.module.scss";
import Image from "next/image";
import FooterBar from "@/app/components/footer/FooterBar";
import { PiMedalLight } from "react-icons/pi";
import { RiCoupon3Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";

const cx = cn.bind(styles);

export interface MypageProps {
    thumbnail?: string;
    userNickname: string | number;
    point: number;
    coupon: number;
    wishlist: string[];
    reservationList: string[];
}

const Mypage = (props: MypageProps) => {
    const {
        thumbnail,
        userNickname,
        point,
        coupon,
        wishlist,
        reservationList,
    } = props;
    const router = useRouter();

    return (
        <div className={cx("MypageWrapper")}>
            <div className={cx("MyInformation")}>
                <div className={cx("Thumbnail")}>
                    <Image
                        src={"/mypage/Thumbnail.png"}
                        alt=""
                        width={51}
                        height={51}
                    />
                </div>
                <div className={cx("NicknameWrapper")}>
                    <p className={cx("welcomeMessage")}>안녕하세요!</p>
                    <p className={cx("Nickname")}>KOKOSHI2024님.</p>
                </div>
                <div className={cx("EditProfileWrapper")}>
                    <Link
                        href="/mypage/certification"
                        className={cx("EditProfile")}
                    >
                        내 정보 수정
                        <IoIosArrowForward className={cx("EditProfilIcon")} />
                    </Link>
                </div>
            </div>
            <div className={cx("EarnedBenefits")}>
                <div className={cx("PointsWrapper")}>
                    <div className={cx("PointsTitle")}>
                        <p className={cx("PointsTitleIcon")}>
                            <PiMedalLight />
                        </p>
                        <p className={cx("PointsTitleName")}>포인트</p>
                    </div>

                    <p className={cx("Amount")}>500P</p>
                </div>
                <div className={cx("CouponsWrapper")}>
                    <div className={cx("CouponsTitle")}>
                        <p className={cx("CouponsTitleIcon")}>
                            <RiCoupon3Line />
                        </p>
                        <p className={cx("CouponsTitleName")}>보유한 쿠폰</p>
                    </div>
                    <p className={cx("Amount")}>3개</p>
                </div>
            </div>
            <div className={cx("MypageCategoryWrapper")}>
                <Link
                    href="/mypage/wishlist"
                    style={{ textDecoration: "none" }}
                >
                    <div className={cx("MypageCategory")}>
                        <p>위시리스트</p>
                        <IoIosArrowForward />
                    </div>
                </Link>
                <Link
                    href="/mypage/reservation"
                    style={{ textDecoration: "none" }}
                >
                    <div className={cx("MypageCategory")}>
                        <p>예약내역</p> <IoIosArrowForward />
                    </div>
                </Link>
                {/* <div className={cx("MypageCategory")}>
                    <p>1:1 카카오 문의</p>
                    <IoIosArrowForward />
                </div> */}
                <Link href="/mypage/faq" style={{ textDecoration: "none" }}>
                    <div className={cx("MypageCategory")}>
                        <p>자주 묻는 질문</p>
                        <IoIosArrowForward />
                    </div>
                </Link>
                {/* <div className={cx("MypageCategory")}>
                    <p>설정</p>
                    <IoIosArrowForward />
                </div> */}
                <div className={cx("FooterBar")}>
                    <FooterBar />
                </div>
            </div>
        </div>
    );
};

export default Mypage;
