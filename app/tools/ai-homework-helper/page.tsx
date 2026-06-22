import type { Metadata } from "next";
import AIHomeworkHelperPage from "@/components/pages/AIHomeworkHelperPage";

export const metadata: Metadata = {
  title: "AI Homework Helper – Get Homework Help Free Online",
  description: "Get instant homework help using AI. Solve questions, understand answers, and learn faster across subjects. Try the AI Homework Helper free.",
  alternates: {
    canonical: "https://formulabyte.com/tools/ai-homework-helper",
  },
};

export default function Page() {
  return <AIHomeworkHelperPage />;
}
