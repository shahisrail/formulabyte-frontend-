import { useEffect } from "react";

export default function ErrorPage({ reset }: { reset?: () => void }) {
  useEffect(() => {
    // Add subtle entrance animation
    const timer = setTimeout(() => {
      document.body?.classList.add("error-page-loaded");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/page-styles/error-pages.css" />
      <section className={"error-hero"}>
        <div className={"error-hero-inner"}>
          <div className={"error-illustration error-illustration-error"}>
            <div className={"error-icon"}>{"⚠"}</div>
            <div className={"error-sparkles"}>
              <span className={"sparkle sparkle-1"}></span>
              <span className={"sparkle sparkle-2"}></span>
              <span className={"sparkle sparkle-3"}></span>
            </div>
          </div>
          <h1>
            {"Something went "}
            <span className={"accent"}>{"wrong"}</span>
          </h1>
          <p className={"error-lede"}>
            {
              " We're sorry! An unexpected error occurred. Don't worry, your data is safe. Try refreshing the page or go back to the home. "
            }
          </p>
          <div className={"error-cta"}>
            {reset ? (
              <button onClick={reset} className={"btn btn-primary btn-lg"}>
                {"Try again →"}
              </button>
            ) : (
              <a href={"/"} className={"btn btn-primary btn-lg"}>
                {"Back to home →"}
              </a>
            )}
            <a href={"/contact"} className={"btn btn-outline btn-lg"}>
              {"Get help"}
            </a>
          </div>
          <div className={"error-message"}>
            <span>{"Error code:"}</span>
            <span className={"error-code"}>{"ERR-500"}</span>
          </div>
        </div>
      </section>
    </>
  );
}