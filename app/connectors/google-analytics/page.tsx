import type { Metadata } from "next";
import GoogleAnalyticsConnectorPage from "@/components/pages/GoogleAnalyticsConnectorPage";

export const metadata: Metadata = {
  title: "Google Analytics Connector \u2014 Analyze GA4 Data with AI | Formula Byte",
  description: "Connect Google Analytics 4 to Formula Byte and ask questions about your traffic, user behavior, and conversions in plain English. Free to try, read-only access.",
};

export default function Page() {
  return <GoogleAnalyticsConnectorPage />;
}
