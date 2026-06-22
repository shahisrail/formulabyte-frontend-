import type { Metadata } from "next";
import MCodeGeneratorPage from "@/components/pages/MCodeGeneratorPage";

export const metadata: Metadata = {
  title: "M Code Generator – Write Power Query M Code Free",
  description: "Generate Power Query M code using AI. Clean, transform, and combine data without writing complex scripts. Try the M Code generator free.",
  alternates: {
    canonical: "https://formulabyte.com/tools/m-code-ai",
  },
};

export default function Page() {
  return <MCodeGeneratorPage />;
}
