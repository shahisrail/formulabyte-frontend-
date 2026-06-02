import type { Metadata } from "next";
import ToDoListTemplatePage from "@/components/pages/ToDoListTemplatePage";

export const metadata: Metadata = {
  title: "Free AI Excel To Do List Template Generator",
  description: "Create free AI Excel to do list templates for task tracking, deadlines, priorities, workflow planning, and productivity management.",
};

export default function Page() {
  return <ToDoListTemplatePage />;
}
