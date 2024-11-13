"use client";

import React, { useState } from "react";
import cn from "classnames/bind";
import styles from "./Mypage.module.scss";
import Image from "next/image";
import FooterBar from "@/app/components/footer/FooterBar";
import { GoChevronRight } from "react-icons/go";
import { PiMedalLight } from "react-icons/pi";
import { RiCoupon3Line } from "react-icons/ri";
import { Dialog } from "@/app/components/dialog/Dialog";

const cx = cn.bind(styles);

const Mypage = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const myPageData = [
        { name: "위시리스트" },
        { name: "예약내역" },
        { name: "1:1 카카오 문의", onClick: () => setIsDialogOpen(true) },
        { name: "자주 묻는 질문" },
        { name: "설정" },
    ];

    const closeDialog = () => setIsDialogOpen(false);

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
                        <GoChevronRight className={cx("EditProfileIcon")} />
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
                {myPageData.map((item, index) => (
                    <button
                        key={index}
                        className={cx("MypageCategory")}
                        onClick={item.onClick}
                    >
                        <p>{item.name}</p>
                        <GoChevronRight />
                    </button>
                ))}
            </div>
            <div className={cx("FooterBar")}>
                <FooterBar />
            </div>

            {isDialogOpen && (
                <Dialog
                    content={"코코시에서 카카오톡을 연결하겠습니까?"}
                    leftButtonText="취소"
                    rightButtonText="확인"
                    onLeftButtonClick={closeDialog}
                    onRightButtonClick={closeDialog}
                />
            )}
        </div>
    );
};

export default Mypage;
