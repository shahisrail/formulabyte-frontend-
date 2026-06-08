export default function robots() {
  const host = process.env.NEXT_PUBLIC_SITE_URL || "https://formulabyte.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: [
          // Admin and dashboard areas
          "/dashboard",
          "/admin",
          "/admin-dashboard",
          "/profiledashboard",

          // API and server routes
          "/api/",
          "/server/",

          // Next.js internal files
          "/_next/",
          "/static/",

          // Private and authentication areas
          "/private/",
          "/auth/",
          "/verify-otp",
          "/verify-reset-otp",
          "/reset-password",
          "/forgot-password",

          // User-specific and checkout areas
          "/checkout-redirect",
          "/checkout-success",
          "/user/",
          "/users/",

          // Block garbage/broken URLs
          "/undefined",
          "/$",

          // Block dynamic parameter routes
          "/tools/[slug]",

          // Development and testing areas
          "/test/",
          "/dev/",
          "/staging/",

          // Block connector callback URLs
          "/connectors/",
        ],
      },
      // Googlebot-specific optimizations
      {
        userAgent: "Googlebot",
        disallow: [
          "/*.svg$", // Block decorative SVG icons (Crawl Budget Optimization)
          "/api/*",
          "/_next/*",
          "/static/*",
        ],
      },
      // Allow specific bots for monitoring
      {
        userAgent: "Mediapartners-Google",
        allow: ["/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/"],
      },
    ],
    sitemap: `${host}/sitemap.xml`,
    host,
  };
}
