"use client";
import { useRouter } from "next/navigation";
import React from "react";
import cn from "classnames/bind";
import styles from "./Mypage.module.scss";
import Image from "next/image";
import FooterBar from "@/app/components/footer/FooterBar";
import { GoChevronRight } from "react-icons/go";
import { PiMedalLight } from "react-icons/pi";
import { RiCoupon3Line } from "react-icons/ri";
import { Dialog } from "@/app/components/dialog/Dialog";
import { IoIosArrowForward } from "react-icons/io";

const cx = cn.bind(styles);

const Mypage = () => {
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
                    <a href="" className={cx("EditProfile")}>
                        내 정보 수정
                        <GoChevronRight className={cx("EditProfilIcon")} />
                    </a>
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
                <div className={cx("MypageCategory")}>
                    <p>위시리스트</p>
                    <GoChevronRight />
                </div>
                <div className={cx("MypageCategory")}>
                    <p>예약내역</p>
                    <button
                        type="button"
                        className={cx("arrow-icon")}
                        onClick={() => router.push("/mypage/reservation")}
                    >
                        <IoIosArrowForward />
                    </button>
                </div>
                <div className={cx("MypageCategory")}>
                    <p>1:1 카카오 문의</p>
                    <GoChevronRight />
                </div>
                <div className={cx("MypageCategory")}>
                    <p>자주 묻는 질문</p>
                    <GoChevronRight />
                </div>
                <div className={cx("MypageCategory")}>
                    <p>설정</p>
                    <GoChevronRight />
                </div>
                <div className={cx("FooterBar")}>
                    <FooterBar />
                </div>
            </div>
        </div>
    );
};

export default Mypage;
