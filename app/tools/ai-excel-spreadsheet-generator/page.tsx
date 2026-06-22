import type { Metadata } from "next";
import AIExcelSpreadsheetGeneratorPage from "@/components/pages/AIExcelSpreadsheetGeneratorPage";

export const metadata: Metadata = {
  title: "AI Excel Spreadsheet Generator – Create Sheets Free | Formula Byte",
  description: "Create complete Excel spreadsheets using AI. Generate templates, formulas, and clean layouts instantly. Download ready-to-use files. Try free now.",
  alternates: {
    canonical: "https://formulabyte.com/tools/ai-excel-spreadsheet-generator",
  },
};

export default function Page() {
  return <AIExcelSpreadsheetGeneratorPage />;
}