import React from "react";
import cn from "classnames/bind";
import styles from "./ProductList.module.scss";
import { PiBellSimple } from "react-icons/pi";
import exp from "constants";

const cx = cn.bind(styles);

const productList = () => {
  const categori = ["모텔", "호텔", "팬션/풀빌라", "캠핑", "게스트하우스", "레저/티켓", "해외숙소", "항공"];
  return (
    <div>
      <header className={cx("header-container")}>
        <div className={cx("logo")}>
          <img src="../public/img_home_logo.svg" alt="" />
        </div>
        <div className={cx("bell")}>
          <PiBellSimple style={{ width: "20px", height: "20px" }} />
        </div>
      </header>
      <main className={cx("main-container")}>
        <h4>서치바 넣을자리</h4>
        <div className={cx("grid-container")}>
          <div className={cx("grid-item")}>
            <div className={cx("image")}>
              <div className={cx("mock")}>목</div>
            </div>
            <div className={cx("title")}>모텔</div>
          </div>
          <div className={cx("grid-item")}>Item 2</div>
          <div className={cx("grid-item")}>Item 3</div>
          <div className={cx("grid-item")}>Item 4</div>
          <div className={cx("grid-item")}>Item 5</div>
          <div className={cx("grid-item")}>Item 6</div>
        </div>

        <div className={cx("banner")}>배너입니다</div>

        <div className={cx("currentList")}>
          <h4>최근 본 숙소</h4>
          <div className={cx("list")}>
            <div className="list-image"></div>
            <div className="list-title">
              <p>코코시하우스</p>
            </div>
            <div className="list-price">
              <p>45,000원</p>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default productList;
