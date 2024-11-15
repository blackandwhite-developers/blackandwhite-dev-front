/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./ProductSelectCard.module.scss";
import cn from "classnames/bind";
import { ReservationBtn } from "@/app/components/Button/ReservationBtn";
import Link from "next/link";
const cx = cn.bind(styles);

type ProductSelectInfomation = {
    /** 객실정보 */
    parlorInfomation?: string | null;
    /** 숙박  */
    lodgeInformation: string;
    /** 대실 */
    roomInformation: string;
    /** 숙박 예약 정보*/
    lodgeInfoDetail: string;
    /** 대실 예약 정보*/
    roomInfoDetail: string;
    /** 숙박 가격 */
    lodgePrice: string;
    /** 대실 가격 */
    roomPrice: string;
};

type ProductSelectCardProps = {
    imageUrl: string;
    label?: string;
    title: string;
    /** 객실정보 */
    infomation: ProductSelectInfomation;
};

export default function ProductSelectCard(props: ProductSelectCardProps) {
    const { imageUrl, label, title, infomation } = props;

    return (
        <div className={cx("productDetailBox")}>
            <div className={cx("productDetailBoxInn")}>
                <p className={cx("productBoxImage")}>
                    <img src={`${imageUrl}`} alt={`${title}`} />
                </p>

                <div className={cx("productBoxInfo")}>
                    <p className={cx("productLabel")}>{label}</p>
                    <h3>{title}</h3>
                    <div className={cx("infomation")}>
                        {infomation.parlorInfomation ? (
                            <p className={cx("parlorInfomation")}>
                                <span>객실 정보</span>
                                <span>{infomation.parlorInfomation}</span>
                            </p>
                        ) : null}
                    </div>

                    <div className={cx("priceArea")}>
                        <div className={cx("priceWrapper")}>
                            <div className={cx("roomArea")}>
                                <div className={cx("reservationInfo")}>
                                    <p className={cx("priceAreaInfo")}>
                                        {infomation.roomInformation}
                                    </p>
                                    <p className={cx("priceAreaInfoDetail")}>
                                        ({infomation.roomInfoDetail})
                                    </p>
                                </div>
                                <span className={cx("price")}>
                                    {infomation.roomPrice} 원
                                </span>
                            </div>
                        </div>
                        <div className={cx("priceWrapper")}>
                            <div className={cx("lodgeArea")}>
                                <div className={cx("reservationInfo")}>
                                    <p className={cx("priceAreaInfo")}>
                                        {infomation.lodgeInformation}
                                    </p>
                                    <p className={cx("priceAreaInfoDetail")}>
                                        ({infomation.lodgeInfoDetail})
                                    </p>
                                </div>
                                <span className={cx("price")}>
                                    {infomation.lodgePrice} 원
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("reservationBtn")}>
                <Link href="/product/room">
                    <ReservationBtn label={"객실 예약하기"} />
                </Link>
            </div>
        </div>
    );
}
