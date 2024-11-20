"use client";

import UserSelectView from "@/views/UserSelect/SelectGender/SelectGender";

import { useRouter } from "next/navigation";

export default function UserSelect() {
  const router = useRouter();
  const signUpData = localStorage.getItem("signUpData");
  const data = signUpData ? JSON.parse(signUpData) : null;
  if (!data) {
    router.push("/signup");
  }
  const genderSelectFunc = (gender: string) => {
    const newData = {
      ...data,
      profile: {
        ...data.profile,
        gender,
      },
    };
    localStorage.setItem("signUpData", JSON.stringify(newData));
    router.push("/userselect/userinterest");
  };
  return <UserSelectView genderSelectFunc={genderSelectFunc} />;
}
