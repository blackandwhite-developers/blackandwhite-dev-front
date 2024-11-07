import ServiceTerms from "./ServiceTerms.view";
import LocationTerms from "./LocationTerms.view";
import PrivacyPolicy from "./PrivacyPolicy.view";
import MarketingTerms from "./MarketingTerms.view";
import React from "react";

export default function TermsView() {
  return (
    <React.Fragment>
      <ServiceTerms />
      <LocationTerms />
      <PrivacyPolicy />
      <MarketingTerms />
    </React.Fragment>
  );
}
