import type { Metadata } from "next";
import AppShell from "@/components/layout/AppShell";
import PageTransition from "@/components/layout/PageTransition";
import "./globals.css";

export const metadata: Metadata = {
  title: "Formula Byte",
  description: "AI-powered spreadsheet and data assistant.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageTransition>
          <AppShell>{children}</AppShell>
        </PageTransition>
      </body>
    </html>
  );
}
