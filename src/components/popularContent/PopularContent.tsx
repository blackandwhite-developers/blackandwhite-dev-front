import React from "react";
import styles from "./PopularContent.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);
interface PopularContentProps {
  rank: number;
  content: string;
  arrow: JSX.Element;
  onClick: () => void;
}

const PopularContent = (props: PopularContentProps) => {
  const { rank, content, arrow , onClick} = props;
  console.log("Rendering PopularContent", { rank, content, arrow });
  return (
    <div className={cx("popularContent-wrap")} onClick={onClick}>
      <div className={cx("rank")}>{rank}</div>
      <div className={cx("content")}>{content}</div>
      <div className={cx("arrow")}>{arrow}</div>
    </div>
  );
};

export default PopularContent;
