import React from "react";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./ProductRoomDetail.module.scss";
// import IoIosArrowBack,"react-icons/io";
// import { BsCart2 } from "react-icons/bs";
import Header from "../components/Header/Header";
import { DateBtn } from "../components/Button/DateBtn";
import { MemberBtn } from "../components/Button/MemberBtn";
import ProductRoomDetailCard from "@/components/ProductRoomDetailCard/ProductRoomDetailCard";

const cx = cn.bind(styles);

const ProductDetail = () => {
    const title = "객실상세";
    const productDetailsArray = [
        {
            title: "대실" as const,
            infomation: {
                operationHoure: "24시간",
                useHoure: "2시간",
                checkInTime: "14:00",
                checkOutTime: "11:00",
                price: "50,000원",
                roomCount: 3,
            },
        },
        {
            title: "숙박" as const,
            infomation: {
                operationHoure: "24시간",
                useHoure: "4시간",
                checkInTime: "15:00",
                checkOutTime: "12:00",
                price: "50,000원",
                roomCount: 1,
            },
        },
    ];

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
                <div className={cx("ProductWrapper")}>
                    <div className={cx("ProductTitleWrapper")}>
                        <h1 className={cx("ProductTitle")}>프리미엄 트윈</h1>
                        <p>주차불가 / 마운틴뷰 or 오션뷰 or 시티뷰 랜덤배정</p>
                    </div>
                    <div className={cx("ProductDetailInformation")}>
                        <p className={cx("RoomInformation")}>객실 정보</p>
                        <p className={cx("PersonCountInformation")}>
                            기준 2인 (최대 3인)
                        </p>
                    </div>
                </div>

                <div className={cx("ProductCategoryWrapper")}>
                    <div className={cx("ProductCategoryLine")}></div>

                    <div>
                        <div className={cx("ReservationSelectBtn")}>
                            <DateBtn label={""} />
                            <MemberBtn label={""} />
                        </div>

                        <div>
                            {productDetailsArray.map((product, index) => (
                                <ProductRoomDetailCard
                                    key={index}
                                    title={product.title} // "대실" 또는 "숙박"
                                    infomation={product.infomation} // ProductDetailInfomation 타입 데이터
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
