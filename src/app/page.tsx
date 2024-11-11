import React from "react";
import HomeView from "@/views/Home/Home.view";
import SocialLoginAlert from "./components/alert/SocialLoginAlert/SocialLoginAlert";
import SignUpView from "@/views/SignUp/SignUp.view";

export default async function Home() {
  //return <HomeView />;
  return (
    <div>
      <SignUpView/>
    </div>

  )
}
