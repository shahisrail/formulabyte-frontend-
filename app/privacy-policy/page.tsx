import type { Metadata } from "next";
import PrivacyPage from "@/components/pages/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Formula Byte",
  description: "Learn how Formula Byte collects, uses, and protects your personal information. Your privacy and data security are our top priorities.",
  keywords: ["privacy policy", "data protection", "personal information", "data security", "GDPR", "privacy rights"],
  alternates: {
    canonical: "https://formulabyte.com/privacy-policy",
  },
};

export default function Page() {
  return <PrivacyPage />;
}