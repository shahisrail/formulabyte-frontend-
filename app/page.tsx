import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";

export const metadata: Metadata = {
  title: "AI Excel Spreadsheet Generator \u2014 Create Sheets Free | Formula Byte",
  description: "Create complete Excel spreadsheets using AI. Generate templates, formulas, and clean layouts instantly. Download ready-to-use files. Try free.",
};

export default function Page() {
  return <HomePage />;
}
