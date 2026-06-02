import type { Metadata } from "next";
import PdfToExcelAIPage from "@/components/pages/PdfToExcelAIPage";

export const metadata: Metadata = {
  title: "PDF to Excel AI Converter – Fast & Accurate | Formula Byte",
  description: "Convert PDF files into clean, editable Excel sheets using AI. No formatting issues, no manual work. Start free with Formula Byte.",
};

export default function Page() {
  return <PdfToExcelAIPage />;
}
