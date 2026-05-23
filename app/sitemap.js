// app/sitemap.js
export default function sitemap() {
  const host = process.env.NEXT_PUBLIC_SITE_URL || "https://formulabyte.com";
  const today = new Date();

  const tools = [
    "/ai-chatbot",
    "/sentiment-analysis-tool",
    "/excel-formula-generator",
    "/ai-excel-spreadsheet-generator",
    "/bank-statement-converter-pdf-to-excel",
    "/ai-question-answer-generator",
    "/ai-dax-code-generator",
    "/ai-pandas-code-generator",
    "/pdf-to-excel-ai",
    "/ai-sql-query-generator",
    "/ai-vba-code-generator",
    "/ai-regex-generator",
    "/ai-google-apps-script-generator",
    "/ai-r-code-generator",
    "/ai-homework-helper",
    "/google-sheets-formula-generator",
    "/m-code-ai",
    "/power-query-ai",
  ];

  const statics = [
    "/",
    "/contact",
    "/signup",
    "/privacy-policy",
    "/TermsConditions",
  ];

  const toEntry = (path, priority = 0.7, changeFrequency = "weekly") => ({
    url: `${host}${path}`,
    lastModified: today,
    changeFrequency,
    priority,
  });

  return [
    {
      url: `${host}/`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...tools.map((p) => toEntry(p, 0.9, "weekly")),
    ...statics.filter((p) => p !== "/").map((p) => toEntry(p, 0.5, "monthly")),
  ];
}
