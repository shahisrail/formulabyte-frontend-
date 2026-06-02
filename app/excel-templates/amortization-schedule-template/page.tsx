import type { Metadata } from "next";
import AmortizationScheduleTemplatePage from "@/components/pages/AmortizationScheduleTemplatePage";

export const metadata: Metadata = {
  title: "Free AI Excel Templates for Business and Productivity",
  description: "Create free AI Excel templates for accounting, projects, scheduling, inventory, productivity, reporting, and workflow management.",
};

export default function Page() {
  return <AmortizationScheduleTemplatePage />;
}