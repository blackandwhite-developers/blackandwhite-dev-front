import React from "react";
import cn from "classnames/bind";
import styles from "./Home.view.module.scss";
import FooterBar from "../../app/components/footer/FooterBar";
import { PiBellSimpleThin } from "react-icons/pi";
import SearchBar from "../../app/components/input/SearchBar/SearchBar";

import Link from "next/link";

const cx = cn.bind(styles);

export interface HomeviewProps {
  categori: Array<{ id: string; name: string; image: string }>;
  currentDate: Array<{ id: string; thumbnail: string; title: string; price: number }>;
}

const Homeview = (props: HomeviewProps) => {
  const { categori, currentDate } = props;

  return (
    <div>
      <header className={cx("header-container")}>
        <div className={cx("logo")}>
          <img src="/home/img_home_logo.svg" alt="kokoshi-logo" />
        </div>

        <Link href={"/alert"}>
          <div className={cx("bell")}>
            <PiBellSimpleThin style={{ width: "20px", height: "20px" }} />
          </div>
        </Link>
      </header>

      <main className={cx("main-container")}>
        <SearchBar />
        <div className={cx("grid-container")}>
          {categori.map((a, i) => {
            return (
              <Link href={`/product/list/${a.image}`} key={a.id}>
                <div className={cx("grid-item")}>
                  <img src={`/categoryImage/ic_home_${a.image}.svg`} alt={a.name} />
                  <div className={cx("title")}>{a.name}</div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className={cx("banner")}>
          <img src="/home/img_home_banner.svg" alt="" />
        </div>

        <div className={cx("currentList")}>
          <h4>최근 본 숙소</h4>
          <div className={cx("list-container")}>
            {currentDate.map((item, index) => (
              <div className={cx("list-item")} key={item.id}>
                <div className={cx("list-image")}>
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className={cx("list-title")}>
                  <p>{item.title}</p>
                </div>
                <div className={cx("list-price")}>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer>
        <FooterBar />
      </footer>
    </div>
  );
};

export default Homeview;
