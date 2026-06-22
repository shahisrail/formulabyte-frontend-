import type { Metadata } from "next";
import AIRegexGeneratorPage from "@/components/pages/AIRegexGeneratorPage";

export const metadata: Metadata = {
  title: "AI Regex Generator – Create Regex Patterns Free",
  description: "Generate accurate regex patterns using AI. Build, test, and understand regular expressions without manual trial and error. Try free now.",
  alternates: {
    canonical: "https://formulabyte.com/tools/ai-regex-generator",
  },
};

export default function Page() {
  return <AIRegexGeneratorPage />;
}
