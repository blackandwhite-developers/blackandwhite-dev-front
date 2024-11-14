import React from "react";
import styles from "./filter.view.module.scss";
import cn from "classnames/bind";
import Header from "@/app/components/Header/Header";
import { MdClose } from "react-icons/md";
import DefaultCheckBox from "@/app/components/checkbox/default/DefaultCheckbox";

const cx = cn.bind(styles);

const FilterPageView = () => {
  return (
    <div>
      <div>
        <Header title={"날짜 선택"} leftIcon={<MdClose />} rightIcon={"초기화"} />
      </div>
      <div className={cx("room-type")}>
        <h3>숙소 유형</h3>
      </div>
    </div>
  );
};

export default FilterPageView;
