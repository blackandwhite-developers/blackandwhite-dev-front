"use client";

import React, { useState } from "react";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./SortOptions.module.scss";
import { FaCheck } from "react-icons/fa6";

const cx = cn.bind(styles);

type SortOptionProps = {
    sortOptions?: string[];
};

const SortOption = ({ sortOptions = [] }: SortOptionProps) => {
    return (
        <div>
            <SortOptionList sortOptions={sortOptions} />
        </div>
    );
};

const SortOptionList = ({ sortOptions }: { sortOptions: string[] }) => {
    const [selectedSortOptions, setSelectedSortOptions] = useState<
        string | null
    >(null);

    const handleSortOptionsClick = (sortOptions: string) => {
        if (selectedSortOptions === sortOptions) {
            setSelectedSortOptions(null);
        } else {
            setSelectedSortOptions(sortOptions);
        }
    };

    return (
        <div className={cx("CategoryWrapper")}>
            <div className={cx("CategoryTapBar")}>
                <Image
                    src="/images/TapBar.png"
                    alt="탭 바 이미지"
                    width={77}
                    height={3}
                />
            </div>
            <h1 className={cx("CategoryTitle")}>정렬</h1>
            <div className={cx("CategoryListWrapper")}>
                {sortOptions.map((sortOptions, index) => (
                    <div
                        className={cx("CategoryList", {
                            selectedSortOptions:
                                selectedSortOptions === sortOptions,
                        })}
                        key={index}
                        onClick={() => handleSortOptionsClick(sortOptions)}
                    >
                        <p className={cx("CategoryItem")}>{sortOptions}</p>
                        {selectedSortOptions === sortOptions && (
                            <FaCheck className={cx("CategoryItemCheck")} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SortOption;
