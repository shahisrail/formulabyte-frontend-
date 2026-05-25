import type { Metadata } from "next";
import BusinessBudgetTemplatePage from "@/components/pages/BusinessBudgetTemplatePage";

export const metadata: Metadata = {
  title: "Free AI Excel Business Budget Template Generator",
  description: "Create free AI Excel business budget templates for income, expenses, cash flow, forecasting, and financial planning with automated formulas.",
};

export default function Page() {
  return <BusinessBudgetTemplatePage />;
}
