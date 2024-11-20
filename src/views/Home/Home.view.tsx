"use client";
import React, { useState, useEffect } from "react";
import cn from "classnames/bind";
import styles from "./Home.view.module.scss";
import FooterBar from "../../components/footer/FooterBar";
import { PiBellSimpleThin } from "react-icons/pi";
import SearchBar from "../../components/input/SearchBar/SearchBar";

import Link from "next/link";
import MainCategory from "@/components/category/main/MainCategory";

const cx = cn.bind(styles);

export interface HomeviewProps {
  category: ICategory[];
  resentView?: ILodge[];
}

const Homeview = (props: HomeviewProps) => {
  const { category, resentView } = props;
  const [src, setSrc] = useState("/home/home_banner_desktop.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSrc("/home/img_home_banner.svg");
      } else {
        setSrc("/home/home_banner_desktop.png");
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={cx("main-wrap")}>
      <header className={cx("header-container")}>
        <div className={cx("logo")}>
          <img src="/home/img_home_logo.svg" alt="kokoshi-logo" />
        </div>

        <Link href={"/alert"}>
          <div className={cx("bell")}>
            <PiBellSimpleThin style={{ width: "100%", height: "100%" }} />
          </div>
        </Link>
      </header>

      <main className={cx("main-container")}>
        <SearchBar />
        <div className={cx("grid-container")}>
          {category.map((a) => {
            return (
              <Link href={`/product/list/${a.path}`} key={a.id}>
                <MainCategory
                  categoryName={a.title}
                  categoryIcon={`Http://${a.thumbnail}.svg`}
                  categoryKoreanName={a.title}
                />
              </Link>
            );
          })}
        </div>

        <div className={cx("banner")}>
          <img src={src} alt="" />
        </div>

        <div className={cx("currentList")}>
          <h4>최근 본 숙소</h4>
          <div className={cx("list-container")}>
            {resentView?.map((item) => (
              <div className={cx("list-item")} key={item.id}>
                <div className={cx("list-image")}>
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className={cx("list-title")}>
                  <p>{item.title}</p>
                </div>
                <div className={cx("list-price")}>
                  <p>{item.price.toLocaleString()}원</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <FooterBar />
    </div>
  );
};

export default Homeview;
