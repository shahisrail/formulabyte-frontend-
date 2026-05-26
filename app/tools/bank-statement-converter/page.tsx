import type { Metadata } from "next";
import BankStatementConverterPage from "@/components/pages/BankStatementConverterPage";

export const metadata: Metadata = {
  title: "AI Bank Statement Converter – PDF to Excel Free | Formula Byte",
  description: "Convert bank statement PDFs to clean Excel using AI. Extract transactions, balances, and formats accurately. No manual work. Try free now.",
};

export default function Page() {
  return <BankStatementConverterPage />;
}