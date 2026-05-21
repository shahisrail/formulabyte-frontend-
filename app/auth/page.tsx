import type { Metadata } from "next";
import AuthPage from "@/components/pages/AuthPage";

export const metadata: Metadata = {
  title: "Sign in \u2014 Formula Byte",
  description: "Sign in to Formula Byte. Continue where you left off \u2014 generate formulas, analyze data, and automate spreadsheets with AI.",
};

export default function Page() {
  return <AuthPage />;
}
