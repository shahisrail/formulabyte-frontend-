import type { Metadata } from "next";
import TimeTrackingTemplatePage from "@/components/pages/TimeTrackingTemplatePage";

export const metadata: Metadata = {
  title: "Free AI Excel Time Tracking Template Generator",
  description: "Create free AI Excel time tracking templates for payroll, attendance, billable hours, project tracking, and workforce reporting.",
};

export default function Page() {
  return <TimeTrackingTemplatePage />;
}
