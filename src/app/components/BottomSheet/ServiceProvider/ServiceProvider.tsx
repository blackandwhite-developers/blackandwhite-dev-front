"use client";

import React, { useState } from "react";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./ServiceProvider.module.scss";
import { FaCheck } from "react-icons/fa6";

const cx = cn.bind(styles);

type ServiceProviderProps = {
    carriers?: string[];
    onClose: () => void;
};

const ServiceProvider = ({ carriers = [], onClose }: ServiceProviderProps) => {
    return (
        <div>
            <CarrierList carriers={carriers} onClose={onClose} />
        </div>
    );
};

const CarrierList = ({
    carriers,
    onClose,
}: {
    carriers: string[];
    onClose: () => void;
}) => {
    const [selectedCarrier, setSelectedCarrier] = useState<string | null>(null);

    const handleCarrierClick = (carrier: string) => {
        if (selectedCarrier === carrier) {
            setSelectedCarrier(null);
        } else {
            setSelectedCarrier(carrier);
        }
    };

    return (
        <div className={cx("CategoryWrapper")}>
            <div className={cx("CategoryTapBar")} onClick={onClose}>
                <Image
                    src="/images/TapBar.png"
                    alt="탭 바 이미지"
                    width={77}
                    height={3}
                />
            </div>
            <h1 className={cx("CategoryTitle")}>통신사 선택</h1>
            <div className={cx("CategoryListWrapper")}>
                {carriers.map((carrier, index) => (
                    <div
                        className={cx("CategoryList", {
                            SelectedCarrier: selectedCarrier === carrier,
                        })}
                        key={index}
                        onClick={() => handleCarrierClick(carrier)}
                    >
                        <p className={cx("CategoryItem")}>{carrier}</p>
                        {selectedCarrier === carrier && (
                            <FaCheck className={cx("CategoryItemCheck")} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceProvider;
