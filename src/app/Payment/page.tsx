import React from "react";
import Login from "../Login/Login";
import PushAlarm from "../components/pushAlarm/PushAlarm";
import ReservetionContent from "./Payment";
import DefaultCheckBox from "../components/checkbox/default/DefaultCheckbox";
import SlideCheckbox from "../components/checkbox/slide/SlideCheckbox";
import DefaultAccordion from "../components/arcodian/default/DefaultAccordion";

export default function PaymentPage() {
  return (
    <React.Fragment>
      <ReservetionContent />
    </React.Fragment>
  );
}
