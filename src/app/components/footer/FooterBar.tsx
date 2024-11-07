"use client";

import React from "react";
import "./FooterBar.css";
import MapIcon from "../icon/MapIcon";
import HomeIcon from "../icon/HomeIcon";
import MypageIcon from "../icon/MypageIcon";

type FooterBarProps = {
  defaultSelected?: "map" | "home" | "mypage";
};

const FooterBar = (prop: FooterBarProps) => {
  const { defaultSelected } = prop;
  const [select, setSelect] = React.useState(defaultSelected);

  const handleSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, selected: "map" | "home" | "mypage") => {
    setSelect(selected);
    // page move
  };

  return (
    <div className="container">
      <div className="foot-navigation">
        <div className={select === "map" ? "footbar-text selected" : "footbar-text"} onClick={(e) => handleSelect(e, "map")}>
          <MapIcon isSelected={select === "map"} />
          <p>지도</p>
        </div>
        <div className={select === "home" ? "footbar-text selected" : "footbar-text"} onClick={(e) => handleSelect(e, "home")}>
          <HomeIcon isSelected={select === "home"} />
          <p>홈</p>
        </div>
        <div className={select === "mypage" ? "footbar-text selected" : "footbar-text"} onClick={(e) => handleSelect(e, "mypage")}>
          <MypageIcon isSelected={select === "mypage"} />
          <p>마이페이지</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
