import type { Metadata } from "next";
import AIVBACodeGeneratorPage from "@/components/pages/AIVBACodeGeneratorPage";

export const metadata: Metadata = {
  title: "AI VBA Code Generator – Write Excel VBA Free",
  description: "Generate Excel VBA macros using AI. Automate tasks, write error-free VBA code, and save time without manual scripting. Try free now.",
};

export default function Page() {
  return <AIVBACodeGeneratorPage />;
}
