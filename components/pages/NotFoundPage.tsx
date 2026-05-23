import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <link rel="stylesheet" href="/page-styles/error-pages.css" />
      <section className={"error-hero"}>
        <div className={"error-hero-inner"}>
          <div className={"error-illustration"}>
            <div className={"error-number"}>{"404"}</div>
            <div className={"error-sparkles"}>
              <span className={"sparkle sparkle-1"}></span>
              <span className={"sparkle sparkle-2"}></span>
              <span className={"sparkle sparkle-3"}></span>
              <span className={"sparkle sparkle-4"}></span>
            </div>
          </div>
          <h1>
            {"Page not "}
            <span className={"accent"}>{"found"}</span>
          </h1>
          <p className={"error-lede"}>
            {
              " Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track. "
            }
          </p>
          <div className={"error-cta"}>
            <Link href={"/"} className={"btn btn-primary btn-lg"}>
              {"Back to home →"}
            </Link>
            <Link href={"/tools"} className={"btn btn-outline btn-lg"}>
              {"Browse tools"}
            </Link>
          </div>
          <div className={"error-links"}>
            <span>{"Popular pages:"}</span>
            <Link href={"/about"}>{"About"}</Link>
            <span className={"sep"}>{"·"}</span>
            <Link href={"/tools"}>{"Tools"}</Link>
            <span className={"sep"}>{"·"}</span>
            <Link href={"/contact"}>{"Contact"}</Link>
          </div>
        </div>
      </section>
    </>
  );
}