import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";

export const metadata: Metadata = {
  title: "About Formula Byte \u2014 AI-Powered Data Assistant | Formula Byte",
  description: "Formula Byte is a USA-based AI-powered data assistant founded by Tusar Ahmed. Generate Excel formulas, SQL queries, Python code, and more \u2014 all from plain English.",
  alternates: {
    canonical: "https://formulabyte.com/about",
  },
};

export default function Page() {
  return <AboutPage />;
}
