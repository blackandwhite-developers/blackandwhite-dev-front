"use client";
import { authAtom } from "@/atoms/authAtom";
import OnboardingView from "@/views/Onboading/Onboarding.view";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const OnboardingPage = () => {
  const [auth] = useAtom(authAtom);
  const router = useRouter();
  useEffect(() => {
    if (auth.isAuth) {
      router.push("/home");
    }
  }, [auth.isAuth, router]);
  return <OnboardingView />;
};

export default OnboardingPage;
