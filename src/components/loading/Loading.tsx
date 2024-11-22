import React from "react";
import styles from "./Loading.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

const Loading = () => {
  return (
    <div className={cx("loading-page")}>
      <div className={cx("spinner")}></div>
      <div className={cx("text")}>
        <h2>로딩중...</h2>
      </div>
    </div>
  );
};
export default Loading;
