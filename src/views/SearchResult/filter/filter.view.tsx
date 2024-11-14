import React from "react";
import styles from "./filter.view.module.scss";
import cn from "classnames/bind";
import Header from "@/app/components/Header/Header";
import { MdClose } from "react-icons/md";
import DefaultCheckBox from "@/app/components/checkbox/default/DefaultCheckbox";
import { TextBtn } from "@/app/components/Button/TextBtn";

const cx = cn.bind(styles);

const FilterPageView = () => {
  const roomData = ["전체", "호텔", "팬션", "풀빌라", "캠핑", "게스트하우스", "리조트"];
  const keyDate = ["여름특가", "수영장", "조식", "야외 수영장", "주차가능", "바다전망", "PC룸"];
  return (
    <div className={cx("filter-container")}>
      <div>
        <Header title={"날짜 선택"} leftIcon={<MdClose />} rightIcon={"초기화"} />
      </div>

      <div className={cx("main")}>
        <div className={cx("room-type")}>
          <h3>숙소 유형</h3>
          <div className="">
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
            {keyDate.map((a, i) => {
              return (
                <div className={cx("keyword")} key={i}>
                  <TextBtn label={a} />
                </div>
              );
            })}
          </div>

          <div className={cx("price-bar")}>
            <h3> 가격대</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPageView;
