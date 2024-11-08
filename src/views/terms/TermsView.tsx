import ServiceTerms from "./ServiceTerms.view";
import LocationTerms from "./LocationTerms.view";
import PrivacyPolicy from "./PrivacyPolicy.view";
import MarketingTerms from "./MarketingTerms.view";
import React from "react";

type TermsOfServiceDetailViewProps = {
  type: "service" | "location" | "privacy" | "marketing";
};

export default function TermsOfServiceDetailView(prop: TermsOfServiceDetailViewProps) {
  switch (prop.type) {
    case "service":
      return <ServiceTerms />;
    case "location":
      return <LocationTerms />;
    case "privacy":
      return <PrivacyPolicy />;
    case "marketing":
      return <MarketingTerms />;
  }
}
