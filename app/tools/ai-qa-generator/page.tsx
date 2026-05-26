import type { Metadata } from "next";
import AIQAGeneratorPage from "@/components/pages/AIQAGeneratorPage";

export const metadata: Metadata = {
  title: "AI Question Answer Generator – Get Answers Free | Formula Byte",
  description: "Ask questions and get instant, accurate answers using AI. No searching, no confusion—just clear, context-aware responses. Try free now.",
};

export default function Page() {
  return <AIQAGeneratorPage />;
}