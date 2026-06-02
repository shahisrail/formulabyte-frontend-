import type { Metadata } from "next";
import AIPandasCodeGeneratorPage from "@/components/pages/AIPandasCodeGeneratorPage";

export const metadata: Metadata = {
  title: "AI Pandas Code Generator – Write Pandas Code Free",
  description: "Generate clean Python Pandas code using AI. Handle data cleaning, joins, grouping, and analysis instantly without syntax errors. Try free now.",
};

export default function Page() {
  return <AIPandasCodeGeneratorPage />;
}
