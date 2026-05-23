export default function robots() {
  const host = process.env.NEXT_PUBLIC_SITE_URL || "https://formulabyte.com";

  // Production rules - always use these for formulabyte.com
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/dashboard",
          "/admin",
          "/admin-dashboard",
          "/profiledashboard",
          "/api/",
          "/server/",
          "/_next/",
          "/static/",
          "/private/",
          // Block garbage/broken URLs
          "/undefined",
          "/$",
          // Block auth-only pages
          "/verify-otp",
          "/verify-reset-otp",
          "/reset-password",
          "/forgot-password",
          // Block checkout redirects
          "/checkout-redirect",
          "/checkout-success",
        ],
      },
      // TASK 5: Block decorative SVG icons from Googlebot (Crawl Budget Optimization)
      {
        userAgent: "Googlebot",
        disallow: ["/*.svg$"],
      },
    ],
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}
