import type { Metadata } from "next";
import AIPdfSummarizerPage from "@/components/pages/AIPdfSummarizerPage";

export const metadata: Metadata = {
  title: "AI PDF Summarizer – Summarize PDFs Instantly | Formula Byte",
  description: "Summarize long PDF documents instantly using AI. Get clear, concise summaries without reading every page. Start free with Formula Byte.",
  alternates: {
    canonical: "https://formulabyte.com/tools/ai-pdf-summarizer",
  },
};

export default function Page() {
  return <AIPdfSummarizerPage />;
}
