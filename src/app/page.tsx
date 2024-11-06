import React from "react";
import DefaultCheckBox from "./components/checkbox/default/DefaultCheckbox";
import SlideCheckbox from "./components/checkbox/slide/SlideCheckbox";
import DefaultAccordion from "./components/arcodian/default/DefaultAccordion";
import "./page.scss";
import PushAlarm from "./components/footer/PushAlarm";
import Login from "./Login/Login";
import Radio from "./components/radio/Radio";
import { AbleBtn } from "./components/Button/AbleBtn";
import { ClickListBtn } from "./components/Button/ClickListBtn";
import { DateBtn } from "./components/Button/DateBtn";
import { DisableBtn } from "./components/Button/DisableBtn";
import { FindPasswordBtn } from "./components/Button/FindPasswordBtn";
import { ListBtn } from "./components/Button/ListBtn";
import { LoginBtn } from "./components/Button/LoginBtn";
import { MapBtn } from "./components/Button/MapBtn";
import { MemberBtn } from "./components/Button/MemberBtn";
import { NomalBtn } from "./components/Button/NomalBtn";
import { ResearchBtn } from "./components/Button/ResearchBtn";
export default function Home() {
  return (
    <React.Fragment>
      <Login />
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
      <Radio
        label={
          <React.Fragment>
            <span>두줄 이상</span>
            <span>라디오 버튼</span>
          </React.Fragment>
        }
        name="radio"
        value="radio"
      />
      <div>
        <NomalBtn label={"시작하기"} />
        <DisableBtn label={"다음"} />
        <AbleBtn label={"다음"} />
        <FindPasswordBtn label={"비밀번호찾기"} />
        <LoginBtn label={"로그인하기"} />
        <DateBtn label={"6.2 화 - 6.3 수"} />
        <MemberBtn label={"성인2명"} />
        <ListBtn label={"목록보기"} />
        <MapBtn label={"지도보기"} />
        <ClickListBtn label={"목록보기"} />
        <ResearchBtn label={"이 지역 재탐색"} />
      </div>
    </React.Fragment>
  );
}
