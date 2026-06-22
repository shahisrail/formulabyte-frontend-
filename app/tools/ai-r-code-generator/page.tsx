import type { Metadata } from "next";
import AIRCodeGeneratorPage from "@/components/pages/AIRCodeGeneratorPage";

export const metadata: Metadata = {
  title: "AI R Code Generator – Write R Code Free Online",
  description: "Generate accurate R code using AI for data analysis, statistics, and visualization. Write clean R scripts instantly without errors. Try free now.",
  alternates: {
    canonical: "https://formulabyte.com/tools/ai-r-code-generator",
  },
};

export default function Page() {
  return <AIRCodeGeneratorPage />;
}
