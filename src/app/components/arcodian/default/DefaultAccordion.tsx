"use client";

import React from "react";
import styles from "./DefautlAccordion.module.scss";
import cn from "classnames/bind";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const cx = cn.bind(styles);

type DefaultAccordionProps = {
  title?: React.ReactNode;
  children?: React.ReactNode;
  isHeaderBold?: boolean;
  isHeaderTransparent?: boolean;
  isBodyBold?: boolean;
  isBodyTransparent?: boolean;
};

export default function DefaultAccordion(props: DefaultAccordionProps) {
  const { title, children, isHeaderBold = false, isHeaderTransparent = false, isBodyBold = false, isBodyTransparent = false } = props;
  const [open, setOpen] = React.useState(false);
  const handleToggle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };
  return (
    <div className={cx("Wrapper")}>
      <div
        className={cx("AccordionHeader", {
          isHeaderBold,
          isHeaderTransparent,
        })}
        onClick={handleToggle}
      >
        <div>{title}</div>
        <span
          className={cx("OpenButton", {
            open,
          })}
        >
          <FaChevronDown />
        </span>
        <span
          className={cx("CloseButton", {
            open,
          })}
        >
          <FaChevronUp />
        </span>
      </div>
      <div
        className={cx("AccordionBody", {
          open,
          isBodyBold,
          isBodyTransparent,
        })}
      >
        {children}
      </div>
    </div>
  );
}
