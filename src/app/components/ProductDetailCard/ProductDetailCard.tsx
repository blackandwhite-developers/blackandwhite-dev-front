/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./ProductDetailCard.module.scss";
import cn from "classnames/bind";
import { ReservationBtn } from "@/app/components/Button/ReservationBtn";
import Link from "next/link";

const cx = cn.bind(styles);

type ProductDetailInfomation = {
    /** 객실정보 */
    parlorInfomation?: string | null;
    /** 입실 */
    checkInInfomation?: string | null;
    /** 퇴실 */
    checkOutInfomation?: string | null;
    /** 숙박 가격 */
    lodgePrice?: string;
    /** 객실 갯수 */
    roomCount: number;
};

type ProductDetailCardProps = {
    imageUrl: string;
    label?: string;
    title: string;
    /** 객실정보 */
    infomation: ProductDetailInfomation;
};

export default function ProductDetailCard(props: ProductDetailCardProps) {
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
                        {infomation.checkInInfomation ? (
                            <p className={cx("checkInInfomation")}>
                                <span>입실/퇴실</span>
                                <span>
                                    입실 {infomation.checkInInfomation} / 퇴실{" "}
                                    {infomation.checkOutInfomation}
                                </span>
                            </p>
                        ) : null}
                    </div>

                    <div className={cx("priceArea")}>
                        <span>
                            {infomation.roomCount >= 1
                                ? `${infomation.roomCount}개 남음`
                                : `사용 불가`}
                        </span>
                        <span className={cx("roomPrice")}>
                            {infomation.lodgePrice} 원
                        </span>
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
