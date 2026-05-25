import type { Metadata } from "next";
import BalanceSheetTemplatePage from "@/components/pages/BalanceSheetTemplatePage";

export const metadata: Metadata = {
  title: "Free AI Excel Balance Sheet Template Generator",
  description: "Create free AI Excel balance sheet templates for assets, liabilities, equity, financial reporting, dashboards, and accounting analysis.",
};

export default function Page() {
  return <BalanceSheetTemplatePage />;
}