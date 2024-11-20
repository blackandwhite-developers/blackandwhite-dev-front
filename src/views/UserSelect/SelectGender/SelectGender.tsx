"use client";

import React, { useState } from "react";
import cn from "classnames/bind";
import styles from "./SelectGender.module.scss";
import Header from "@/components/Header/Header";
import { FaAngleLeft } from "react-icons/fa6";
import Radio from "@/components/radio/Radio";
import { AbleBtn } from "@/components/Button/AbleBtn";
import { useRouter } from "next/navigation";

const cx = cn.bind(styles);

type SelectGenderProps = {
  genderSelectFunc: (gender: string) => void;
};

const SelectGender = (props: SelectGenderProps) => {
  // Set default selectedGender to "남성"
  const [selectedGender, setSelectedGender] = useState<string | null>("M");
  const { genderSelectFunc } = props;
  const handleGenderSelect = (gender: string) => {
    setSelectedGender((prevGender) => (prevGender === gender ? null : gender));
  };

  const onGenderSelect = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (selectedGender === null) {
      return;
    }
    genderSelectFunc(selectedGender);
  };

  /** 뒤로가기 */
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className={cx("SelectGenderWrapper")}>
      <Header leftIcon={<FaAngleLeft onClick={handleGoBack} />} />
      <div className={cx("SelectGenderContent")}>
        <p className={cx("SelectGender")}>성별선택</p>
        <p className={cx("SelectGenderInform")}>회원님의 성별을 선택해주세요.</p>
      </div>
      <div className={cx("SelectGenderRadioBtn")}>
        <div
          className={cx("SelectGenderBtn", {
            selected: selectedGender === "M",
          })}
          onClick={() => handleGenderSelect("M")}
        >
          <Radio label={"남성"} checked={selectedGender === "M"} />
        </div>
        <div
          className={cx("SelectGenderBtn", {
            selected: selectedGender === "F",
          })}
          onClick={() => handleGenderSelect("F")}
        >
          <Radio label={"여성"} checked={selectedGender === "F"} />
        </div>
        <div
          className={cx("SelectGenderBtn", {
            selected: selectedGender === "E",
          })}
          onClick={() => handleGenderSelect("E")}
        >
          <Radio label={"기타"} checked={selectedGender === "E"} />
        </div>
      </div>

      <div className={cx("SelectGenderNextBtn")}>
        <AbleBtn label={"다음"} onClick={onGenderSelect} />
      </div>
    </div>
  );
};

export default SelectGender;
