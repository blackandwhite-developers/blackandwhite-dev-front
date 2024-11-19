"use client";

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
    category: MypageCategory;
    categoryLinks: { title: string; href: string }[];
}

export interface MypageCategory {
    wishlist: string[];
    reservationList: string[];
    faqList: string[];
}

const Mypage = (props: MypageProps) => {
    const { thumbnail, userNickname, point, coupon, categoryLinks } = props;

    return (
        <div className={cx("MypageWrapper")}>
            <div className={cx("MyInformation")}>
                <div className={cx("Thumbnail")}>
                    <Image
                        src={thumbnail || "/mypage/Thumbnail.png"}
                        alt=""
                        width={51}
                        height={51}
                    />
                </div>
                <div className={cx("NicknameWrapper")}>
                    <p className={cx("welcomeMessage")}>안녕하세요!</p>
                    <p className={cx("Nickname")}>{userNickname}님.</p>
                </div>
                <div className={cx("EditProfileWrapper")}>
                    <Link href="/mypage/myinfo" className={cx("EditProfile")}>
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

                    <p className={cx("Amount")}>{point}P</p>
                </div>
                <div className={cx("CouponsWrapper")}>
                    <div className={cx("CouponsTitle")}>
                        <p className={cx("CouponsTitleIcon")}>
                            <RiCoupon3Line />
                        </p>
                        <p className={cx("CouponsTitleName")}>보유한 쿠폰</p>
                    </div>
                    <p className={cx("Amount")}>{coupon}개</p>
                </div>
            </div>
            <div className={cx("MypageCategoryWrapper")}>
                {categoryLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        style={{ textDecoration: "none" }}
                    >
                        <div className={cx("MypageCategory")}>
                            <p>{link.title}</p>
                            <IoIosArrowForward />
                        </div>
                    </Link>
                ))}
                <div className={cx("FooterBar")}>
                    <FooterBar />
                </div>
            </div>
        </div>
    );
};

export default Mypage;
