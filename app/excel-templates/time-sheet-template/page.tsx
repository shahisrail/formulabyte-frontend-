import type { Metadata } from "next";
import TimeSheetTemplatePage from "@/components/pages/TimeSheetTemplatePage";

export const metadata: Metadata = {
  title: "Free AI Excel Time Sheet Template Generator",
  description: "Create free AI Excel time sheet templates for payroll, attendance, overtime, employee scheduling, and workforce tracking.",
};

export default function Page() {
  return <TimeSheetTemplatePage />;
}
