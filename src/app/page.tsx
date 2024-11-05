import React from "react";
import CheckBox from "./components/checkbox/CheckBox";

export default function Home() {
  return (
    <React.Fragment>
      <CheckBox label="Check me" checked={true} onChange={(checked) => console.log(checked)} />
    </React.Fragment>
  );
}
