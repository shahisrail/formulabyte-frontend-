import type { Metadata } from "next";
import AIDAXCodeGeneratorPage from "@/components/pages/AIDAXCodeGeneratorPage";

export const metadata: Metadata = {
  title: "AI DAX Code Generator – Write Power BI DAX Free | Formula Byte",
  description: "Generate accurate Power BI DAX code using AI. Create measures, columns, and time intelligence without syntax errors. Copy, paste, and try free.",
  alternates: {
    canonical: "https://formulabyte.com/tools/ai-dax-code-generator",
  },
};

export default function Page() {
  return <AIDAXCodeGeneratorPage />;
}