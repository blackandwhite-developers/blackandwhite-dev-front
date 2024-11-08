import React from "react";
import styles from "./Home.view.module.scss";
import { PiBellSimpleLight } from "react-icons/pi";
import cn from "classnames/bind";
import Header from "@/app/components/Header/Header";
import { ImageIcon } from "@/app/components/imageIcon/ImageIcon";
import FooterBar from "@/app/components/footer/FooterBar";
import DefaultCheckBox from "@/app/components/checkbox/default/DefaultCheckbox";
const cx = cn.bind(styles);

export default async function HomeView() {
  return (
    <div className={cx("pageContainer")}>
      <Header leftIcon={<ImageIcon src={"/home/img_home_logo.svg"} alt={"로고"} width={117} height={21} borderRadius={0} />} rightIcon={<PiBellSimpleLight />} className={cx("Header")} />
      <div className={cx("content")}>
        <DefaultCheckBox label="체크박스" />
      </div>
      <FooterBar />
    </div>
  );
}
