import React from "react";
import DefaultCheckBox from "./components/checkbox/default/DefaultCheckbox";
import SlideCheckbox from "./components/checkbox/slide/SlideCheckbox";
import DefaultAccordion from "./components/arcodian/default/DefaultAccordion";
import "./page.scss";
import HotelName from "./Payment/Payment";
import FootBarMap from "./Component/NavigationMap";
import PushAlarm from "./Component/PushAlarm";
export default function Home() {
  return (
    <React.Fragment>
      <Login/>
      <PushAlarm />
            <DefaultCheckBox label="이용약관에 동의합니다." />
      <SlideCheckbox label={"ON / OFF"} />
      <DefaultAccordion title="아코디언 테스트">으하하</DefaultAccordion>
      <DefaultAccordion
        isHeaderTransparent
        title={
          <React.Fragment>
            <DefaultCheckBox label="이용약관에 동의합니다." />
          </React.Fragment>
        }
      >
        으하하2
              </DefaultAccordion>

    </React.Fragment>
  );
}
