import type { Metadata } from "next";
import TermsPage from "@/components/pages/TermsPage";

export const metadata: Metadata = {
  title: "Terms & Conditions — Formula Byte",
  description: "Read our Terms & Conditions to understand your rights and responsibilities when using Formula Byte's AI-powered data analysis platform.",
  keywords: ["terms and conditions", "legal terms", "user agreement", "terms of service"],
  alternates: {
    canonical: "https://formulabyte.com/terms",
  },
};

export default function Page() {
  return <TermsPage />;
}