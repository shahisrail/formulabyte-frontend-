import type { Metadata } from "next";
import PricingPage from "@/components/pages/PricingPage";

export const metadata: Metadata = {
  title: "Pricing — Formula Byte",
  description: "Simple, transparent pricing for AI-powered data analysis. Choose the perfect plan for your needs. Save 30% with yearly billing. No hidden fees.",
  keywords: ["pricing", "plans", "subscription", "AI tools pricing", "data analysis pricing", "Excel formula generator pricing"],
  alternates: {
    canonical: "https://formulabyte.com/pricing",
  },
};

export default function Page() {
  return <PricingPage />;
}