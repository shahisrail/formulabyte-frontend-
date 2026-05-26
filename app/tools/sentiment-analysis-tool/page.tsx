import type { Metadata } from "next";
import SentimentAnalysisToolPage from "@/components/pages/SentimentAnalysisToolPage";

export const metadata: Metadata = {
  title: "AI Sentiment Analysis Tool – Analyze Text Free | Formula Byte",
  description: "Analyze text sentiment using AI. Detect emotions, tone, and intent from reviews, feedback, and messages instantly. Try the free sentiment tool.",
};

export default function Page() {
  return <SentimentAnalysisToolPage />;
}