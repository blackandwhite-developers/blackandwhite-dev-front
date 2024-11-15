import React from "react";
import styles from "./Search.module.scss";
import cn from "classnames/bind";
import Headers from "@/app/components/Header/Header";
import Header from "@/app/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import SearchBar from "@/app/components/input/SearchBar/SearchBar";
import { DateBtn } from "@/app/components/Button/DateBtn";
import { MemberBtn } from "@/app/components/Button/MemberBtn";
import { TextBtn } from "@/app/components/Button/TextBtn";
import { number } from "yup";

const cx = cn.bind(styles);

export interface SearchViewProps {
  aboutData: { date: string; member: string };
}

const SearchView = (props: SearchViewProps) => {
  const { aboutData } = props;
  return (
    <div className={cx("search-container")}>
      <Header title={"검색"} leftIcon={<FaAngleLeft />} />

      <div className={cx("search-input")}>
        <SearchBar />
      </div>
      <div className={cx("about")}>
        <DateBtn label={aboutData.date} />
        <MemberBtn label={aboutData.member} />
      </div>

      <div className={cx("search")}>
        <div className={cx("current-bar")}>
          <span>최근 검색어</span>
          <button className={"delete-all"}>전체 삭제</button>
        </div>
        <div className={cx("content-wrapper")}>
          <div className={cx("current-content")}>
            <TextBtn label={"양양"} />
            <TextBtn label={"1"} />
            <TextBtn label={"양양 숙소 "} />
          </div>

          <div className={cx("recommend-wrapper")}>
            <p>추천 검색어</p>
            <div className={cx("recommend-container")}>
              <TextBtn label={"양양 숙소 "} />
              <TextBtn label={"양양 숙소 "} />
              <TextBtn label={"양양 숙소 "} />
            </div>
          </div>
          <div className={cx("popular-content")}>
            <p> 인기 검색어</p>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchView;
