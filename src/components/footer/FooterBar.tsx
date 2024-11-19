"use client";

import React from "react";
import "./FooterBar.scss";
import MapIcon from "../icon/MapIcon";
import HomeIcon from "../icon/HomeIcon";
import MypageIcon from "../icon/MypageIcon";
import { usePathname, useRouter } from "next/navigation";

const FooterBar = () => {
  const pathName = usePathname();
  const [select, setSelect] = React.useState(pathName === "/map" ? "map" : pathName === "/home" ? "home" : "mypage");
  const router = useRouter();
  const handleSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, selected: "map" | "home" | "mypage") => {
    setSelect(selected);
    switch (selected) {
      case "map":
        router.push("/map");
        break;
      case "home":
        router.push("/home");
        break;
      case "mypage":
        router.push("/mypage");
        break;
    }
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
