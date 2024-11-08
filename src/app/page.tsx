import React from "react";
import "./page.scss";
import Accordion from "./components/accordion/Accordion";
import Badge from "./components/badge/Badge";
import { NomalBtn } from "./components/Button/NomalBtn";
import MainCategory from "./components/category/main/MainCategory";
import RegionCategory from "./components/category/region/RegionCategory";
import DefaultCheckBox from "./components/checkbox/default/DefaultCheckbox";
import SlideCheckbox from "./components/checkbox/slide/SlideCheckbox";
import Counter from "./components/counter/Counter";
import Header from "./components/Header/Header";
import { ImageIcon } from "./components/imageIcon/ImageIcon";
import ReservationTextInput from "./components/input/ColorBorderTextInput/ColorBorderTextInput";
import PhoneConfirm from "./components/input/PhoneConfirm/PhoneConfirm";
import SearchBar from "./components/input/SearchBar/SearchBar";
import TextInput from "./components/input/TextInput/TextInput";
import FooterBar from "./components/footer/FooterBar";

export default async function Home() {
  return (
    <div className="pageContainer">
      <Header title="헤더" />
      <div className="content">
        <Accordion title="Accordion 1">
          <div>
            <p>Content 1</p>
            <p>Content 2</p>
            <p>Content 3</p>
          </div>
        </Accordion>
        <Badge shape={"round"}>Badge</Badge>
        <Badge shape={"square"}>Badge</Badge>
        <NomalBtn label={"Button"} />
        <MainCategory categoryName={"hotel"} categoryIcon={"/categoryImage/ic_home_airport.svg"} categoryKoreanName={"호텔"} />
        <RegionCategory categoryName={"hotel"} categoryIcon={"/images/local/chungcheong.png"} categoryKoreanName={"충청"} />
        <DefaultCheckBox label={"Checkbox"} />
        <SlideCheckbox label={"Slide Checkbox"} />
        <Counter />
        <ImageIcon src={"/images/banner/banner-large.png"} alt={""} width={320} height={141} />
        <ReservationTextInput type={"number"} placeholder={""} />
        <PhoneConfirm
          resendFunc={async () => {
            "use server";
            console.log("resend");
          }}
        />
        <SearchBar />
        <TextInput type={"text"} placeholder={""} />
      </div>
      <FooterBar />
    </div>
  );
}
