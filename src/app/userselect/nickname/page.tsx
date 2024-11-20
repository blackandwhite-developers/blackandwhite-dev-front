"use client";
import { userService } from "@/api/services";
import NicknameView from "@/views/UserSelect/Nickname/Nickname";
import { useRouter } from "next/navigation";

export default function Nickname() {
  const router = useRouter();
  const signUpData = localStorage.getItem("signUpData");
  const data = signUpData ? JSON.parse(signUpData) : null;
  if (!data) {
    router.push("/signup");
  }
  const nicknameSelectFunc = async (nickname: string) => {
    const newData = {
      ...data,
      profile: {
        ...data.profile,
        nickname: nickname,
      },
    };
    console.log(newData);
    const response = await userService.signUp({ body: newData });
    localStorage.removeItem("signUpData");
    if (response) {
      router.push("/login");
    } else {
      alert("회원가입에 실패했습니다.");
      router.push("/signup");
    }
  };

  return <NicknameView nicknameSelectFunc={nicknameSelectFunc} />;
}
