"use client";
import React, { useState, useEffect } from "react";
import styles from "./Search.module.scss";
import cn from "classnames/bind";
import Header from "@/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import SearchBar from "@/components/input/SearchBar/SearchBar";
import { DateBtn } from "@/components/Button/DateBtn";
import { MemberBtn } from "@/components/Button/MemberBtn";
import { TextBtn } from "@/components/Button/TextBtn";

const cx = cn.bind(styles);

export interface SearchViewProps {
  aboutData: { date: string; member: string };
  recommendData: string[];
}

const RECENT_SEARCHES_KEY = "recentSearches";
const MAX_RECENT_SEARCHES = 5;

const SearchView = (props: SearchViewProps) => {
  const { aboutData, recommendData } = props;
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const savedSearches = localStorage.getItem(RECENT_SEARCHES_KEY);
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  const addSearchTerm = (term: string) => {
    const newSearches = [term, ...recentSearches.filter((item) => item !== term)].slice(0, MAX_RECENT_SEARCHES);

    setRecentSearches(newSearches);
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(newSearches));
  };

  const handleSearch = (searchTerm: string) => {
    if (searchTerm.trim()) {
      addSearchTerm(searchTerm.trim());
    }
  };

  const deleteAllSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem(RECENT_SEARCHES_KEY);
  };

  return (
    <div className={cx("search-container")}>
      <Header title={"검색"} leftIcon={<FaAngleLeft />} />

      <div className={cx("search-input")}>
        <SearchBar placeholder="어떤 숙소를 찾으시나요?" searchFunc={handleSearch} />
      </div>

      <div className={cx("about")}>
        <DateBtn label={aboutData.date} />
        <MemberBtn label={aboutData.member} />
      </div>

      <div className={cx("search")}>
        <div className={cx("current-bar")}>
          <span>최근 검색어</span>
          <button className={cx("delete-all")} onClick={deleteAllSearches}>
            전체 삭제
          </button>
        </div>

        <div className={cx("content-wrapper")}>
          <div className={cx("current-content")}>
            {recentSearches.map((term, index) => (
              <div key={index} className={cx("search-term-wrapper")}>
                <TextBtn label={term} onClick={() => handleSearch(term)} />
              </div>
            ))}
          </div>

          <div className={cx("recommend-wrapper")}>
            <p>추천 검색어</p>
            <div className={cx("recommend-container")}>
              {recommendData.slice(0, 5).map((term, index) => (
                <div className={cx("text")}>
                  <TextBtn key={index} label={term} />
                </div>
              ))}
            </div>
          </div>

          <div className={cx("popular-content")}>
            <p>인기 검색어</p>
            <button>{recommendData}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchView;
