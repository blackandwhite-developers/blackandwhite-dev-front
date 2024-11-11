// 화면설계서 #37 참고

import React from "react";
import styles from "./Cart.view.module.scss";
import cn from "classnames/bind";
import Header from "@/app/components/Header/Header";

const cx = cn.bind(styles);

const Cartview = () => {
  return (
    <div className={cx("cart-container")}>
      <Header title={"장바구니"}></Header>
    </div>
  );
};
export default Cartview;
