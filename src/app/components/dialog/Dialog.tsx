import React from "react";
import cn from "classnames/bind";
import styles from "./Dialog.module.scss";

const cx = cn.bind(styles);

type DialogProps = {
  title: string;
  content: React.ReactNode;
  leftButtonText: string;
  rightButtonText: string;
  onLeftButtonClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onRightButtonClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export const Dialog = (props: DialogProps) => {
  const { title, content, leftButtonText, rightButtonText, onLeftButtonClick, onRightButtonClick } = props;

  return (
    <div className={cx("Dialog")}>
      <div className={cx("DialogContainer")}>
        <div className={cx("ContentWrapper")}>
          <h1 className={cx("Title")}>{title}</h1>
          <div className={cx("Content")}>{content}</div>
        </div>
        <div className={cx("ButtonWrapper")}>
          <button className={cx("Button", "LeftButton")} onClick={onLeftButtonClick}>
            {leftButtonText}
          </button>
          <button className={cx("Button", "RightButton")} onClick={onRightButtonClick}>
            {rightButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};
