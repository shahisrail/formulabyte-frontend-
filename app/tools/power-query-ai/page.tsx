import type { Metadata } from "next";
import PowerQueryAIPage from "@/components/pages/PowerQueryAIPage";

export const metadata: Metadata = {
  title: "Power Query AI – Transform Data Free & Faster",
  description: "Clean, transform, and combine data using Power Query with AI. Automate data prep without complex steps or errors. Try Power Query AI free.",
};

export default function Page() {
  return <PowerQueryAIPage />;
}
