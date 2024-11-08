import React from "react";
import cn from "classnames/bind";
import styles from "./Alert.module.scss";

const cx = cn.bind(styles);

type DialogProps = {
  title: string;
  content: React.ReactNode;
  buttonText: string;
  buttonClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Alert = (props: DialogProps) => {
  const { title, content, buttonText, buttonClick } = props;

  return (
    <div className={cx("Alert")}>
      <div className={cx("Container")}>
        <div className={cx("ContentWrapper")}>
          <h1 className={cx("Title")}>{title}</h1>
          <div className={cx("Content")}>{content}</div>
        </div>
        <div className={cx("ButtonWrapper")}>
          <button className={cx("Button")} onClick={buttonClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};
