import React from "react";
import styles from "./filter.view.module.scss";
import cn from "classnames/bind";
import Header from "@/components/Header/Header";
import { MdClose } from "react-icons/md";
import DefaultCheckBox from "@/components/checkbox/default/DefaultCheckbox";
import { TextBtn } from "@/components/Button/TextBtn";
import Radio from "@/components/radio/Radio";
import PriceRangeSlider from "@/components/priceBar/PriceBar";

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
        <Header title={"필터"} leftIcon={<MdClose />} rightIcon={"초기화"} />
      </div>

      <div className={cx("main")}>
        <div className={cx("room-container")}>
          <h3>숙소 유형</h3>
          <div className={cx("room")}>
            {roomData.map((a, i) => {
              return (
                <div className={cx("checkbox-wrapper")} key={i}>
                  <DefaultCheckBox label={a} isCircle={true} />
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
          <PriceRangeSlider />
        </div>
      </div>
    </div>
  );
};

export default FilterPageView;
