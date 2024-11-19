"use client";
import SignUpView from "@/views/SignUp/SignUp.view";
import React from "react";
import { useRouter } from "next/navigation";
const SignUpPage = () => {
  const router = useRouter();
  const submitFunc = (data: unknown) => {
    localStorage.setItem("signUpData", JSON.stringify(data));
    router.push("/userselect");
  };

  return <SignUpView submitFunc={submitFunc} />;
};
export default SignUpPage;
