import type { Metadata } from "next";
import AIGoogleAppsScriptGeneratorPage from "@/components/pages/AIGoogleAppsScriptGeneratorPage";

export const metadata: Metadata = {
  title: "AI Google Apps Script Generator – Write Scripts Free",
  description: "Generate Google Apps Script code using AI. Automate Google Sheets, Docs, and Gmail without manual coding. Try free and save time.",
  alternates: {
    canonical: "https://formulabyte.com/tools/ai-google-apps-script-generator",
  },
};

export default function Page() {
  return <AIGoogleAppsScriptGeneratorPage />;
}
