import React from "react";
import cn from "classnames/bind";
import styles from "./ProductDetail.module.scss";
import {
    // IoIosArrowBack,
    IoIosHeartEmpty,
    IoIosStarOutline,
} from "react-icons/io";
import { IoLocationOutline, IoCalendarClearOutline } from "react-icons/io5";
// import { BsCart2 } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import Header from "../components/Header/Header";

const cx = cn.bind(styles);

const ProductDetail = () => {
    const title = "김포 마리나베이 호텔";
    return (
        <div>
            {/* <IoIosArrowBack />
            김포 마리나베이 호텔
            <BsCart2 /> */}
            <Header title={title} />
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
            </div>
        </div>
    );
};

export default ProductDetail;
