import React from "react";
import DefaultCheckBox from "./components/checkbox/default/DefaultCheckbox";
import SlideCheckbox from "./components/checkbox/slide/SlideCheckbox";
import DefaultAccordion from "./components/arcodian/default/DefaultAccordion";
import "./page.scss";
import PushAlarm from "./components/pushAlarm/PushAlarm";
import Login from "./Login/Login";
import Radio from "./components/radio/Radio";
import SignUp from "./SignUp/SignUp";
import ServiceTerms from "./agree/ServiceTerms";
import PrivacyPolicy from "./agree/PrivacyPolicy";
import LocationTerms from "./agree/LocationTerms";
import MarktingTerms from "./agree/MarketingTerms";

export default function Home() {
  return (
    <React.Fragment>
      {/* <MarktingTerms/> */}
      {/* <LocationTerms /> */}
      {/* <PrivacyPolicy/> */}
      {/* <ServiceTerms/> */}
      <SignUp />
      {/* <Login /> */}
      {/*
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

      */}
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
      <FooterBar defaultSelected="home" />
    </React.Fragment>
  );
}
