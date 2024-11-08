import React from "react";
import "./page.scss";
import SocialLoginAlert from "./components/SocialLoginAlert/SocialLoginAlert";

export default async function Home() {
  return <React.Fragment>
    <SocialLoginAlert/>
  </React.Fragment>;
}
