import type { Metadata } from "next";
import AccountingTemplatePage from "@/components/pages/AccountingTemplatePage";

export const metadata: Metadata = {
  title: "Free AI Excel Templates for Business and Productivity",
  description: "Create free AI Excel templates for accounting, projects, scheduling, inventory, productivity, reporting, and workflow management.",
};

export default function Page() {
  return <AccountingTemplatePage />;
}
