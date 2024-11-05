import { DisableBtn } from "../components/Button/DisableBtn";
import { NomalBtn } from "../components/Button/NomalBtn";
import { AbleBtn } from "../components/Button/AbleBtn";
import { FindPasswordBtn } from "../components/Button/FindPasswordBtn";
import { LoginBtn } from "../components/Button/LoginBtn";
import { DateBtn } from "../components/Button/DateBtn";
import { MemberBtn } from "../components/Button/MemberBtn";
import { ListBtn } from "../components/Button/ListBtn";
import { MapBtn } from "../components/Button/MapBtn";
import { ClickListBtn } from "../components/Button/ClickListBtn";
import { ResearchBtn } from "../components/Button/ResearchBtn";

const productList = () => {
  return (
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
  );
};

export default productList;
