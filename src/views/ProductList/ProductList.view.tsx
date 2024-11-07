import React from "react";
<<<<<<< HEAD
import ProductList from "./ProductList";

const ProductListView = () => {
  return <ProductList></ProductList>;
=======
import cn from "classnames/bind";
import styles from "./ProductList.view.module.scss";
import FooterBar from "@/app/components/footer/FooterBar";
import { PiBellSimpleThin } from "react-icons/pi";
import SearchBar from "@/app/components/input/SearchBar/SearchBar";
import Link from "next/link";

const cx = cn.bind(styles);

const ProductListView = () => {
  const categori = ["모텔", "호텔", "팬션/풀빌라", "캠핑", "게스트하우스", "레저/티켓", "해외숙소", "항공"];
  const categoriImg = ["Motel", "Hotel", "Pool", "Camping", "Guesthouse", "Leisure", "Othercountry", "Airport"];
  const currentDate = [
    {
      thumbnail: "/home/hotel/hotel_01.svg",
      title: "코코시하우스",
      price: "45,000",
    },
    {
      thumbnail: "/home/hotel/hotel_02.svg",
      title: "알라베티호텔",
      price: "253,000",
    },
    {
      thumbnail: "/home/hotel/hotel_03.svg",
      title: "루첼라 루 호텔",
      price: "85,000",
    },
    {
      thumbnail: "/home/hotel/hotel_02.svg",
      title: "알라베티호텔",
      price: "253,000",
    },
  ];
  return (
    <div>
      <header className={cx("header-container")}>
        <div className={cx("logo")}>
          <img src="home/img_home_logo.svg" alt="kokoshi-logo" />
        </div>
        <div className={cx("bell")}>
          <PiBellSimpleThin style={{ width: "20px", height: "20px" }} />
        </div>
      </header>

      <main className={cx("main-container")}>
        <SearchBar
          searchFunc={async (e) => {
            "use server";
            console.log(e);
          }}
        />
        <div className={cx("grid-container")}>
          {categori.map((a, i) => {
            return (
              <Link href={`/${categoriImg[i]}`} key={i}>
                <div className={cx("grid-item")}>
                  <img src={`/categoryImage/ic_home_${categoriImg[i]}.svg`} alt="motel" />
                  <div className={cx("title")}>{categori[i]}</div>
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
              <div className={cx("list-item")} key={index}>
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
>>>>>>> develop
};

export default ProductListView;
