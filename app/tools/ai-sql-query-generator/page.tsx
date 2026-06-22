import type { Metadata } from "next";
import AISQLQueryGeneratorPage from "@/components/pages/AISQLQueryGeneratorPage";

export const metadata: Metadata = {
  title: "AI SQL Query Generator – Write SQL Queries Free",
  description: "Generate accurate SQL queries using AI. Write SELECT, JOIN, INSERT, and complex queries instantly without syntax errors. Try free now.",
  alternates: {
    canonical: "https://formulabyte.com/tools/ai-sql-query-generator",
  },
};

export default function Page() {
  return <AISQLQueryGeneratorPage />;
}
