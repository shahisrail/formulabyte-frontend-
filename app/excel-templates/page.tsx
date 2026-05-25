import type { Metadata } from "next";
import ExcelTemplatesPage from "@/components/pages/ExcelTemplatesPage";

export const metadata: Metadata = {
  title: "Free AI Excel Templates for Business and Productivity | Formula Byte",
  description: "Create free AI Excel templates for accounting, scheduling, projects, inventory, productivity, reporting, and workflow management.",
};

export default function Page() {
  return <ExcelTemplatesPage />;
}
