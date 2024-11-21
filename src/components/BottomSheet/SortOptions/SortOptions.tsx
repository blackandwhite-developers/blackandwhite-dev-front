"use client";

import React from "react";
import Image from "next/image";
import cn from "classnames/bind";
import styles from "./SortOptions.module.scss";
import { FaCheck } from "react-icons/fa6";

const cx = cn.bind(styles);

type SortOptionProps = {
    sortOptions?: string[];
    onClose: () => void;
    onSelect: (option: string) => void;
    selectedOption: string | null;
};

const SortOption = ({
    sortOptions = [],
    onClose,
    onSelect,
    selectedOption,
}: SortOptionProps) => {
    return (
        <div>
            <SortOptionList
                sortOptions={sortOptions}
                onClose={onClose}
                onSelect={onSelect}
                selectedOption={selectedOption}
            />
        </div>
    );
};

const SortOptionList = ({
    sortOptions,
    onClose,
    onSelect,
    selectedOption,
}: {
    sortOptions: string[];
    onClose: () => void;
    onSelect: (option: string) => void;
    selectedOption: string | null;
}) => {
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
                            selectedSortOption: selectedOption === sortOption,
                        })}
                        key={index}
                        onClick={() => {
                            onSelect(sortOption);
                            onClose();
                        }}
                    >
                        <p className={cx("CategoryItem")}>{sortOption}</p>
                        {selectedOption === sortOption && (
                            <FaCheck className={cx("CategoryItemCheck")} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SortOption;
