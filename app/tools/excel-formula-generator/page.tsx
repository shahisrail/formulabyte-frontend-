import type { Metadata } from "next";
import ExcelFormulaGeneratorPage from "@/components/pages/ExcelFormulaGeneratorPage";

export const metadata: Metadata = {
  title: "AI Excel Formula Generator – Create Formulas Free | Formula Byte",
  description: "Generate accurate Excel formulas using AI. Create simple or complex formulas instantly without syntax errors. Copy, paste, and start free.",
};

export default function Page() {
  return <ExcelFormulaGeneratorPage />;
}