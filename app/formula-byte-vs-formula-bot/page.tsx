import type { Metadata } from "next";
import FormulaByteVsFormulaBotPage from "@/components/pages/FormulaByteVsFormulaBotPage";

export const metadata: Metadata = {
  title: "Formula Byte vs Formula Bot \u2014 Which AI Spreadsheet Tool Wins? | Formula Byte",
  description: "An honest comparison of Formula Byte vs Formula Bot. Features, formula accuracy, automation, integrations, pricing, and usability \u2014 to help you choose the right AI spreadsheet tool.",
};

export default function Page() {
  return <FormulaByteVsFormulaBotPage />;
}
