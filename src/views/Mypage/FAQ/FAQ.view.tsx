"use client";

import React from "react";
import cn from "classnames/bind";
import styles from "./FAQ.module.scss";
import Header from "@/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import Accordion from "@/components/accordion/Accordion";

const cx = cn.bind(styles);

export interface FAQProps {
  data: {
    question: string;
    answer: string;
  }[];
}

const FAQ = ({ data }: FAQProps) => {
  return (
    <div className={cx("AccordionContainer")}>
      <Header title={"자주 묻는 질문"} leftIcon={<FaAngleLeft />} />
      <div className={cx("AccordionWrapper")}>
        {data.map((item, index) => (
          <Accordion key={index} title={item.question}>
            {item.answer}
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
