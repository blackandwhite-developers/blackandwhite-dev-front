"use client";

import { authAtom } from "@/atoms/authAtom";
import useMyInfo from "@/hooks/useMyInfo";
import MyInfoView from "@/views/Mypage/MyInfo/MyInfo.view";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";

const Mypage = () => {
  const router = useRouter();
  const [_, setAuth] = useAtom(authAtom);
  const res = useMyInfo();
  if (!res) return null;
  const data = [
    { label: "이름", name: "name", value: res.name },
    { label: "휴대전화 번호", name: "phone", value: res.profile.phone },
    { label: "생년월일", name: "birthdate", value: res.profile.birth },
    { label: "닉네임", name: "nickname", value: res.profile.nickname },
  ];

  const authReset = () => {
    setAuth({
      isAuth: false,
      user: null,
    });
    document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  const logoutFn = () => {
    authReset();
    router.push("/login");
  };

  const withdrawFn = () => {
    authReset();
    router.push("/login");
  };

  return <MyInfoView profileFields={data} logoutFn={logoutFn} withdrawFn={withdrawFn} />;
};

export default Mypage;
