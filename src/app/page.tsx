import React from "react";
import "./page.scss";
import Chips from "./components/Chips/Chips";

export default async function Home() {
  return (
    <React.Fragment>
      <Chips>16:00</Chips>
    </React.Fragment>
  );
}
