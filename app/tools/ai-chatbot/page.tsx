import type { Metadata } from "next";
import AIChatbotPage from "@/components/pages/AIChatbotPage";

export const metadata: Metadata = {
  title: "AI Chatbot – Build Intelligent Chatbots Free | Formula Byte",
  description: "Build an AI chatbot that understands intent and responds instantly. Automate support, FAQs, and conversations with smart AI. Try free now.",
};

export default function Page() {
  return <AIChatbotPage />;
}