import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us \u2014 Formula Byte",
  description: "Get in touch with Formula Byte. Email us at hello@formulabyte.com or send us a message \u2014 we typically respond within one business day.",
};

export default function Page() {
  return <ContactPage />;
}
