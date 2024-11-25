/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import styles from "./SearchResult.view.module.scss";
import cn from "classnames/bind";
import SearchBar from "@/components/input/SearchBar/SearchBar";
import { DateBtn } from "@/components/Button/DateBtn";
import { MemberBtn } from "@/components/Button/MemberBtn";
import { FaAngleDown } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import Badge from "@/components/badge/Badge";
import Header from "@/components/Header/Header";
import Link from "next/link";
import SortOptions from "@/components/BottomSheet/SortOptions/SortOptions";
import { useRouter, useSearchParams } from "next/navigation";
import Rating from "@/components/RatingStarCount/Rating";
import { useAtom } from "jotai";
import {
    adultCountAtom,
    childCountAtom,
    selectedDateRangeAtom,
} from "@/views/SearchResult/Calander/Calander.view";
const cx = cn.bind(styles);

interface SearchResultPageViewProps {
    data: any[];
}

const SearchResultPageView = (props: SearchResultPageViewProps) => {
    const { data } = props;
    const searchParams = useSearchParams();
    const query = searchParams.get("query");
    const [results, setResults] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    const filteredData = data.filter(item => item.name.includes(query || ""));

    const [isSortOptionsVisible, setSortOptionsVisible] = useState(false);
    const [selectedSortOption, setSelectedSortOption] =
        useState<string>("리뷰 많은 순");

    const handleSortOptionsOpen = () => {
        setSortOptionsVisible(true);
    };

    const handleSortOptionsClose = () => {
        setSortOptionsVisible(false);
    };

    const handleSortOptionSelect = (option: string) => {
        setSelectedSortOption(option);

        const sortedResults = [...results];
        if (option === "리뷰 많은 순") {
            sortedResults.sort((a, b) => b.count - a.count);
        } else if (option === "평점 높은 순") {
            sortedResults.sort((a, b) => b.rating - a.rating);
        } else if (option === "낮은 가격순") {
            sortedResults.sort((a, b) => a.price - b.price);
        } else if (option === "높은 가격 순") {
            sortedResults.sort((a, b) => b.price - a.price);
        }
        setResults(sortedResults);
    };



    const handleDateClick = () => {
        router.push("/searchResult/calander");
    };

    const handleMemberClick = () => {
        router.push("/searchResult/calander");
    };

    /** 날짜, 인원 불러오기 */
    const [adultCount] = useAtom(adultCountAtom);
    const [childCount] = useAtom(childCountAtom);
    const [selectedDateRange] = useAtom(selectedDateRangeAtom);

    const formatDate = (date: Date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
        const dayOfWeek = daysOfWeek[date.getDay()];

        return `${year}.${month}.${day} (${dayOfWeek})`;
    };

    useEffect(() => {
        if (query) {
            const fetchSearchResults = async () => {
                setIsLoading(true);
                try {
                    const response = await fetch(`http://localhost:4000/api/search?keyword=${query}`);
                    if (!response.ok) {
                        throw new Error("검색 결과를 가져오는 데 실패했습니다.");
                    }
                    const data = await response.json();
                    setResults(data);
                } catch (error) {
                    setError("검색 결과를 불러오지 못했습니다.");
                } finally {
                    setIsLoading(false);
                }
            };

            fetchSearchResults();
        }
    }, [query]);


    return (
        <div>
            <div className={cx("header")}>
                <Link href={"/product/list"}>
                    <Header title={"검색"} />
                </Link>
            </div>

            <div className={cx("about")}>
                <SearchBar
                    placeholder="어떤 숙소를 찾으시나요?"
                    searchFunc={(newQuery) => {
                        if (newQuery.trim()) {
                            router.push(`/searchResult?query=${encodeURIComponent(newQuery.trim())}`);
                        }
                    }}
                />

                <div className={cx("about-detail")}>
                    <DateBtn
                        label={
                            selectedDateRange &&
                                selectedDateRange.from &&
                                selectedDateRange.to
                                ? `${formatDate(
                                    selectedDateRange.from
                                )} ~ ${formatDate(selectedDateRange.to)}`
                                : "날짜를 선택해주세요"
                        }
                        onClick={handleDateClick}
                    />
                    <MemberBtn
                        label={
                            <>
                                성인 {adultCount}명
                                <br />
                                아동 {childCount}명
                            </>
                        }
                        onClick={handleMemberClick}
                    />
                </div>
            </div>

            <div className={cx("searchResult")}>
                <div className={cx("searchResult-header")}>
                    <h4>검색결과</h4>

                    <button onClick={handleSortOptionsOpen}>
                        <BiTransfer />
                        필터
                    </button>
                </div>
                <div className={cx("searchResult-main")}>
                    <div className={cx("recomend")}>
                        <button className={cx("recomend-btn")}>
                            <p>
                                {selectedSortOption} <FaAngleDown />
                            </p>
                        </button>
                        {isLoading ? (
                            <p className={cx("loading")}>검색 중입니다...</p>
                        ) : error ? (
                            <p className={cx("error")}>{error}</p>
                        ) : (
                            <div className={cx("card-container")}>
                                {data && data.length > 0 ? (
                                    data.map((a, i) => {
                                        return (
                                            <Link
                                                href={`/home/select?id=${a._id}`}
                                                key={i}
                                            >
                                                <div className={cx("card")} key={i}>
                                                    <div
                                                        className={cx("card-item")}
                                                    >
                                                        <img
                                                            src={a.image}
                                                            alt={`${a.name}`}
                                                        />
                                                        <div
                                                            className={cx("detail")}
                                                        >
                                                            <Badge shape="round">
                                                                {a.categoryTitle}
                                                            </Badge>
                                                            <p
                                                                className={cx(
                                                                    "title"
                                                                )}
                                                            >
                                                                {a.name}
                                                            </p>
                                                            <div
                                                                className={cx(
                                                                    "rate-info"
                                                                )}
                                                            >
                                                                <p
                                                                    className={cx(
                                                                        "rate"
                                                                    )}
                                                                >
                                                                    {a.rating}
                                                                </p>
                                                                <p
                                                                    className={cx(
                                                                        "rate-star"
                                                                    )}
                                                                >
                                                                    <Rating
                                                                        rating={
                                                                            a.rating
                                                                        }
                                                                        maxRating={
                                                                            5
                                                                        }
                                                                    />
                                                                </p>
                                                                <p
                                                                    className={cx(
                                                                        "count"
                                                                    )}
                                                                >
                                                                    ({a.count})
                                                                </p>
                                                            </div>
                                                            <p
                                                                className={cx(
                                                                    "distance"
                                                                )}
                                                            >
                                                                {a.distance}
                                                            </p>
                                                            <p
                                                                className={cx(
                                                                    "price"
                                                                )}
                                                            >
                                                                {a.price}원
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        );
                                    })
                                ) : (
                                    <p className={cx("no-results")}>
                                        검색 결과가 없습니다.
                                    </p>
                                )}
                            </div>
                        )}
                    </div>

                </div>
            </div>

            {isSortOptionsVisible && (
                <div className={cx("bottom-sheet")}>
                    <SortOptions
                        sortOptions={[
                            "리뷰 많은 순",
                            "평점 높은 순",
                            "낮은 가격순",
                            "높은 가격 순",
                        ]}
                        onClose={handleSortOptionsClose}
                        onSelect={handleSortOptionSelect}
                        selectedOption={selectedSortOption}
                    />
                </div>
            )}
        </div>
    );
};

export default SearchResultPageView;
