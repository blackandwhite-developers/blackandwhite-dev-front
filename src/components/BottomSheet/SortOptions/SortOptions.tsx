"use client";

import React, { useState } from "react";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./SortOptions.module.scss";
import { FaCheck } from "react-icons/fa6";

const cx = cn.bind(styles);

type SortOptionProps = {
    sortOptions?: string[];
    onClose: () => void;
};

const SortOption = ({ sortOptions = [], onClose }: SortOptionProps) => {
    return (
        <div>
            <SortOptionList sortOptions={sortOptions} onClose={onClose} />
        </div>
    );
};

const SortOptionList = ({
    sortOptions,
    onClose,
}: {
    sortOptions: string[];
    onClose: () => void;
}) => {
    const [selectedSortOption, setSelectedSortOption] = useState<string | null>(
        null
    );

    const handleSortOptionClick = (sortOption: string) => {
        if (selectedSortOption === sortOption) {
            setSelectedSortOption(null);
        } else {
            setSelectedSortOption(sortOption);
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
            <h1 className={cx("CategoryTitle")}>정렬</h1>
            <div className={cx("CategoryListWrapper")}>
                {sortOptions.map((sortOption, index) => (
                    <div
                        className={cx("CategoryList", {
                            selectedSortOption:
                                selectedSortOption === sortOption,
                        })}
                        key={index}
                        onClick={() => handleSortOptionClick(sortOption)}
                    >
                        <p className={cx("CategoryItem")}>{sortOption}</p>
                        {selectedSortOption === sortOption && (
                            <FaCheck className={cx("CategoryItemCheck")} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SortOption;
