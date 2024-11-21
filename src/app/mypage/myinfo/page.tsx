"use client";
import useMyInfo from "@/app/hooks/useMyInfo";
import MyInfoView from "@/views/Mypage/MyInfo/MyInfo.view";
import { useRouter } from "next/navigation";

const Mypage = () => {
  const router = useRouter();
  const res = useMyInfo();
  if (!res) return null;
  const data = [
    { label: "이름", name: "name", value: res.info?.name ?? "" },
    { label: "휴대전화 번호", name: "phone", value: res.info?.profile.phone ?? "" },
    { label: "생년월일", name: "birthdate", value: res.info?.profile.birth ?? "" },
    { label: "닉네임", name: "nickname", value: res.info?.profile.nickname ?? "" },
  ];

  const logoutFn = () => {
    res.resetInfo();
    router.push("/login");
  };

  const withdrawFn = () => {
    res.resetInfo();
    router.push("/login");
  };

  return <MyInfoView profileFields={data} logoutFn={logoutFn} withdrawFn={withdrawFn} />;
};

export default Mypage;
