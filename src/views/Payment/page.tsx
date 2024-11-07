import React from "react";
import ReservetionContent from "./Payment.view";
import ReservetionUser from "./Payment-uesr.view";

export default function PaymentPage() {
  return (
    <React.Fragment>
      <ReservetionContent />
      <ReservetionUser />
    </React.Fragment>
  );
}
