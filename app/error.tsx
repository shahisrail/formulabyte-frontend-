"use client";

import { useEffect } from "react";
import ErrorPage from "@/components/pages/ErrorPage";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return <ErrorPage reset={reset} />;
}