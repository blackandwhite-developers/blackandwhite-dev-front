import React from "react";
import ServiceProviderPicker from "@/app/BottomSheet/ServiceProvider/ServiceProvider";
import SortOptions from "@/app/BottomSheet/SortOptions/SortOptions";

// import cn from "classnames/bind";
// import styles from "./ProductDetail.module.scss";
// import {
//     IoIosArrowBack,
//     IoMdCart,
//     IoIosHeartEmpty,
//     IoIosStarOutline,
// } from "react-icons/io";
// import { IoLocationOutline, IoCalendarClearOutline } from "react-icons/io5";
// import { CiUser } from "react-icons/ci";

// const cx = cn.bind(styles);

const ProductDetail = () => {
    const dummyCarriers = ["SKT", "KT", "LG U+", "알뜰폰"];
    const dummySortOptions = [
        "코코시 추천순",
        "리뷰 많은 순",
        "평점 높은 순",
        "거리 순",
        "낮은 가격 순",
        "높은 가격 순",
    ];
    return (
        <div>
            <ServiceProviderPicker carriers={dummyCarriers} />
            <SortOptions sortOptions={dummySortOptions} />
            {/* <IoIosArrowBack />
            김포 마리나베이 호텔
            <IoMdCart />
            <div className={cx("ProductImage")}>사진</div>
            <div className={cx("ProductInform")}>
                <p>호텔</p>
                <h1>김포 마리나베이 호텔</h1>
                <IoIosHeartEmpty />
                <p>4.0</p>
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <IoIosStarOutline />
                <p>(1,136)</p>
                <IoLocationOutline />
                <p>김포공항역 3분</p>
            </div>
            <div>
                객실선택
                <div>
                    <IoCalendarClearOutline />
                    <p>달력</p>
                    <CiUser />
                    <p>성인 2명</p>
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
            </div> */}
        </div>
    );
};

export default ProductDetail;
