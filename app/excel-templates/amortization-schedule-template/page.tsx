import type { Metadata } from "next";
import AmortizationScheduleTemplatePage from "@/components/pages/AmortizationScheduleTemplatePage";

export const metadata: Metadata = {
  title: "Free AI Excel Amortization Schedule Template Generator",
  description: "Create free AI-powered Excel amortization schedules for loans, mortgages, and repayment tracking with automated formulas and balance reports.",
};

export default function Page() {
  return <AmortizationScheduleTemplatePage />;
}