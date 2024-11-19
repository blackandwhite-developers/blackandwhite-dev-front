import React from "react";
import styles from "./filter.view.module.scss";
import cn from "classnames/bind";
import Header from "@/app/components/Header/Header";
import { MdClose } from "react-icons/md";
import DefaultCheckBox from "@/app/components/checkbox/default/DefaultCheckbox";
import { TextBtn } from "@/app/components/Button/TextBtn";
import Radio from "@/app/components/radio/Radio";
import PriceRangeSlider from "@/app/components/priceBar/PriceBar";
import PriceBar from "@/app/components/priceBar/PriceBar";
import { AbleBtn } from "@/app/components/Button/AbleBtn";

const cx = cn.bind(styles);

export interface FilterPageViewProps {
  roomData: string[];
  keyData: string[];
}

const FilterPageView = (props: FilterPageViewProps) => {
  const { roomData, keyData } = props;
  return (
    <div className={cx("filter-container")}>
      <div>
        <Header title={"날짜 선택"} leftIcon={<MdClose />} rightIcon={"초기화"} />
      </div>

      <div className={cx("main")}>
        <div className={cx("room-container")}>
          <h3>숙소 유형</h3>
          <div className={cx("room")}>
            {roomData.map((a, i) => {
              return (
                <div className={cx("checkbox-wrapper")} key={i}>
                  <DefaultCheckBox label={a} />
                </div>
              );
            })}
          </div>
        </div>
        <div className={cx("keyword-container")}>
          <h3>키워드</h3>
          <div className={cx("keyword-wrapper")}>
            {keyData.map((a, i) => {
              return (
                <div className={cx("keyword")} key={i}>
                  <TextBtn label={a} />
                </div>
              );
            })}
          </div>
        </div>
        <div className={cx("price-container")}>
          <PriceBar />
        </div>

        <AbleBtn label={"필터 적용하기"} />
      </div>
    </div>
  );
};

export default FilterPageView;
