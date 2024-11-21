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
  const [isAlarm, setIsAlarm] = useState(false);

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

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:4000/api/event");
    eventSource.addEventListener("message", (event) => {
      const parsedEvent = JSON.parse(event.data);
      console.log(parsedEvent);
      if (parsedEvent.type === "alarm") {
        setIsAlarm(true);
      }
    });

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div className={cx("main-wrap")}>
      <header className={cx("header-container")}>
        <div className={cx("logo")}>
          <img src="/home/img_home_logo.svg" alt="kokoshi-logo" />
        </div>
        <Link href={"/alert"}>
          <div
            className={cx("bell", {
              alarm: isAlarm,
            })}
          >
            <PiBellSimpleThin style={{ width: "100%", height: "100%" }} />
          </div>
        </Link>
      </header>
      <main className={cx("main-container")}>
        <SearchBar />
        <div className={cx("grid-container")}>
          {category.map((a) => (
            <Link href={`/home/list/${a.path}`} key={a.id}>
              <MainCategory categoryName={a.title} categoryIcon={`http://${a.thumbnail}.svg`} categoryKoreanName={a.title} />
            </Link>
          ))}
        </div>
        <div className={cx("currentList")}>
          <h4>최근 본 숙소</h4>
          <div className={cx("list-container")}>
            {resentView?.map((item) => (
              <div className={cx("list-item")} key={item.id}>
                <div className={cx("list-image")}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={cx("list-title")}>
                  <p>{item.name}</p>
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
