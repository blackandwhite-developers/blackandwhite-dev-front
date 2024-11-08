import React from "react";
import styles from "./Search.view.module.scss";
import cn from "classnames/bind";
import SearchBar from "@/app/components/input/SearchBar/SearchBar";
import { DateBtn } from "@/app/components/Button/DateBtn";
import { MemberBtn } from "@/app/components/Button/MemberBtn";
import { FaAngleDown } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";

const cx = cn.bind(styles);

const SearchPageView = () => {
  const Data = [
    {
      img: "/images/search/search_01.svg",
      title: "김포마리나베이 호텔",
      type: "호텔",
      rate: "4.0",
      rateStar: "★★★★☆",
      count: "1,136",
      distance: "김포공항역 3분",
      price: "75,000",
    },
    {
      img: "/images/search/search_02.svg",
      title: "Bon voyage 호텔",
      type: "호텔",
      rate: "4.0",
      rateStar: "★★★★☆",
      count: "1,136",
      distance: "김포공항역 4분",
      price: "75,000",
    },
    {
      img: "/images/search/search_03.svg",
      title: "스테이 위드 김포",
      type: "호텔",
      rate: "4.0",
      rateStar: "★★★★☆",
      count: "1,136",
      distance: "프리미엄 아울렛 6분",
      price: "75,000",
    },
    {
      img: "/images/search/search_04.svg",
      title: "스테이 위드 김포",
      type: "호텔",
      rate: "4.0",
      rateStar: "★★★★☆",
      count: "1,136",
      distance: "경단역 3분",
      price: "75,000",
    },
    {
      img: "/images/search/search_05.svg",
      title: "스테이 위드 김포",
      type: "호텔",
      rate: "4.0",
      rateStar: "★★★★☆",
      count: "1,136",
      distance: "아시안 게임 주 경기장 5분",
      price: "75,000",
    },
  ];

  return (
    <div>
      <div className={cx("header")}>헤더바 자리</div>

      <div className={cx("about")}>
        <SearchBar />
        <div className={cx("about-detail")}>
          <DateBtn label={"6.14 수 - 6.15 목"} />
          <MemberBtn label={"성인2명"} />
        </div>
      </div>

      <div className={cx("searchResult")}>
        <div className={cx("searchResult-header")}>
          <h4>검색결과</h4>

          <button>
            <BiTransfer />
            필터
          </button>
        </div>
        <div className={cx("searchResult-main")}>
          <div className={cx("recomend")}>
            <button className={cx("recomend-btn")}>
              <p>
                코코시 추천 순 <FaAngleDown />
              </p>
            </button>

            <div className={cx("card-container")}>
              {Data.map((a, i) => {
                return (
                  <div className={cx("card")} key={i}>
                    <div className={cx("card-item")}>
                      <img src={a.img} alt="" />
                      <div className={cx("detail")}>
                        <button>{a.type}</button>
                        <p className={cx("title")}>{a.title}</p>
                        <div className={cx("rate-info")}>
                          <p className={cx("rate")}>{a.rate}</p>
                          <p className={cx("rate-star")}>{a.rateStar}</p>
                          <p className={cx("count")}>({a.count})</p>
                        </div>
                        <p className={cx("distance")}>{a.distance}</p>
                        <p className={cx("price")}>{a.price}원</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPageView;
