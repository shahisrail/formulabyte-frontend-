import type { Metadata } from "next";
import RACITemplatePage from "@/components/pages/RACITemplatePage";

export const metadata: Metadata = {
  title: "Free AI Excel RACI Matrix Template Generator",
  description: "Create free AI Excel RACI matrix templates for role assignments, accountability tracking, workflows, approvals, and team coordination.",
};

export default function Page() {
  return <RACITemplatePage />;
}
