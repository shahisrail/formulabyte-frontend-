// app/sitemap.js
export default function sitemap() {
  const host = process.env.NEXT_PUBLIC_SITE_URL || "https://formulabyte.com";
  const today = new Date();

  // Main pages - highest priority
  const mainPages = [
    { path: "/", priority: 1.0, changeFrequency: "daily" },
    { path: "/tools", priority: 0.9, changeFrequency: "weekly" },
    { path: "/excel-templates", priority: 0.9, changeFrequency: "weekly" },
    { path: "/pricing", priority: 0.9, changeFrequency: "weekly" },
  ];

  // AI Tools pages
  const aiTools = [
    "/tools/ai-chatbot",
    "/tools/sentiment-analysis-tool",
    "/tools/excel-formula-generator",
    "/tools/ai-excel-spreadsheet-generator",
    "/tools/bank-statement-converter",
    "/tools/ai-question-answer-generator",
    "/tools/ai-qa-generator",
    "/tools/ai-dax-code-generator",
    "/tools/ai-pandas-code-generator",
    "/tools/pdf-to-excel-ai",
    "/tools/ai-sql-query-generator",
    "/tools/ai-vba-code-generator",
    "/tools/ai-regex-generator",
    "/tools/ai-google-apps-script-generator",
    "/tools/ai-r-code-generator",
    "/tools/ai-homework-helper",
    "/tools/m-code-ai",
    "/tools/power-query-ai",
    "/tools/ai-pdf-summarizer",
  ];

  // Converter and Generator pages
  const converters = [
    "/excel-file-generator",
    "/excel-spreadsheet-generator",
    "/bank-statement-converter",
  ];

  // Excel Templates pages
  const excelTemplates = [
    "/excel-templates/accounting-template",
    "/excel-templates/amortization-schedule-template",
    "/excel-templates/balance-sheet-template",
    "/excel-templates/business-budget-template",
    "/excel-templates/calendar-template-2026",
    "/excel-templates/contact-list-template",
    "/excel-templates/crm-template",
    "/excel-templates/daily-schedule-template",
    "/excel-templates/employee-schedule-template",
    "/excel-templates/expense-report-template",
    "/excel-templates/family-tree-template",
    "/excel-templates/income-statement-template",
    "/excel-templates/inventory-template",
    "/excel-templates/invoice-template",
    "/excel-templates/kpi-template",
    "/excel-templates/multiple-project-tracking-template",
    "/excel-templates/personal-financial-statement-template",
    "/excel-templates/profit-and-loss-template",
    "/excel-templates/project-timeline-template",
    "/excel-templates/purchase-order-template",
    "/excel-templates/raci-template",
    "/excel-templates/time-sheet-template",
    "/excel-templates/time-tracking-template",
    "/excel-templates/to-do-list-template",
    "/excel-templates/travel-itinerary-template",
    "/excel-templates/weekly-schedule-template",
  ];

  // Information and Comparison pages
  const infoPages = [
    { path: "/about", priority: 0.6, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.5, changeFrequency: "monthly" },
    { path: "/pricing", priority: 0.9, changeFrequency: "weekly" },
    { path: "/formula-byte-vs-formula-bot", priority: 0.7, changeFrequency: "monthly" },
    { path: "/terms", priority: 0.4, changeFrequency: "yearly" },
    { path: "/privacy-policy", priority: 0.4, changeFrequency: "yearly" },
  ];

  const toEntry = (path, priority = 0.8, changeFrequency = "weekly") => ({
    url: `${host}${path}`,
    lastModified: today,
    changeFrequency,
    priority,
  });

  return [
    // Main pages with custom priorities
    ...mainPages.map((p) => toEntry(p.path, p.priority, p.changeFrequency)),

    // AI Tools - high priority, regularly updated
    ...aiTools.map((p) => toEntry(p, 0.85, "weekly")),

    // Converters and generators
    ...converters.map((p) => toEntry(p, 0.8, "weekly")),

    // Excel templates - good SEO value
    ...excelTemplates.map((p) => toEntry(p, 0.75, "monthly")),

    // Information pages
    ...infoPages.map((p) => toEntry(p.path, p.priority, p.changeFrequency)),
  ];
}
