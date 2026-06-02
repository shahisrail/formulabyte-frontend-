import type { Metadata } from "next";
import WeeklyScheduleTemplatePage from "@/components/pages/WeeklyScheduleTemplatePage";

export const metadata: Metadata = {
  title: "Free AI Excel Weekly Schedule Template Generator",
  description: "Create free AI Excel weekly schedule templates for planning, appointments, time blocking, productivity, and shift management.",
};

export default function Page() {
  return <WeeklyScheduleTemplatePage />;
}
