export type Tool = {
  slug: string;
  name: string;
  shortDescription: string;
  heroTitle: string;
  heroAccent: string;
  heroDescription: string;
  icon: string;
  promptPlaceholder: string;
  examples: string[];
  capabilities: string[];
};

export const tools: Tool[] = [
  {
    slug: 'excel-formula-generator',
    name: 'Excel Formula Generator',
    shortDescription: 'Excel/Google Sheets formulas on demand',
    heroTitle: 'Generate spreadsheet formulas',
    heroAccent: 'from plain English.',
    heroDescription: 'Describe what you need and Formula Byte creates Excel or Google Sheets formulas with clean explanations and ready-to-copy output.',
    icon: 'fx',
    promptPlaceholder: 'Example: Calculate total revenue where region is East and status is Paid',
    examples: ['SUMIFS formula', 'XLOOKUP formula', 'Date difference formula'],
    capabilities: ['Excel and Google Sheets formulas', 'Plain English explanations', 'Lookup, date, text, and finance formulas', 'Copy-ready formula output'],
  },
  {
    slug: 'ai-excel-spreadsheet-generator',
    name: 'AI Excel Spreadsheet Generator',
    shortDescription: 'Generate sheets from prompts',
    heroTitle: 'Create complete spreadsheets',
    heroAccent: 'with AI.',
    heroDescription: 'Turn a simple prompt into a clean spreadsheet layout with columns, formulas, sample data, and organized sections.',
    icon: 'xl',
    promptPlaceholder: 'Example: Create a monthly marketing budget tracker with formulas',
    examples: ['Budget tracker', 'Inventory sheet', 'Project planner'],
    capabilities: ['Spreadsheet structure generation', 'Formula-ready columns', 'Clean business layouts', 'Use cases for teams and individuals'],
  },
  {
    slug: 'ai-chatbot',
    name: 'AI Chatbot',
    shortDescription: 'Conversational assistant for your data',
    heroTitle: 'Chat with your data',
    heroAccent: 'in seconds.',
    heroDescription: 'Ask questions, explore patterns, and get clear answers without writing formulas, SQL, or Python.',
    icon: 'ai',
    promptPlaceholder: 'Example: What changed in sales performance this month?',
    examples: ['Explain this data', 'Find trends', 'Summarize performance'],
    capabilities: ['Natural language data Q&A', 'Instant summaries', 'Trend discovery', 'Business-friendly answers'],
  },
  {
    slug: 'sentiment-analysis-tool',
    name: 'Sentiment Analysis Tool',
    shortDescription: 'Classify text by sentiment',
    heroTitle: 'Analyze sentiment',
    heroAccent: 'at scale.',
    heroDescription: 'Classify reviews, survey answers, support tickets, and feedback into positive, negative, or neutral sentiment.',
    icon: 'sa',
    promptPlaceholder: 'Paste customer feedback to classify sentiment',
    examples: ['Review analysis', 'Survey sentiment', 'Support ticket tone'],
    capabilities: ['Positive, negative, neutral labels', 'Bulk text classification', 'Customer feedback analysis', 'Fast sentiment summaries'],
  },
  {
    slug: 'bank-statement-converter',
    name: 'Bank Statement Converter (PDF → Excel)',
    shortDescription: 'Parse statements into clean tables',
    heroTitle: 'Convert bank statements',
    heroAccent: 'into Excel.',
    heroDescription: 'Extract transactions from PDF statements and organize them into clean spreadsheet-ready tables for review and analysis.',
    icon: 'pdf',
    promptPlaceholder: 'Upload or describe your bank statement conversion task',
    examples: ['PDF to Excel', 'Transaction cleanup', 'Monthly statement table'],
    capabilities: ['PDF statement parsing', 'Clean transaction tables', 'Excel-ready output', 'Faster financial review'],
  },
  {
    slug: 'ai-qa-generator',
    name: 'AI Q&A Generator',
    shortDescription: 'Bulk Q&A for docs and FAQs',
    heroTitle: 'Generate useful Q&A',
    heroAccent: 'from any content.',
    heroDescription: 'Create question and answer sets for documents, FAQs, training material, product pages, and knowledge bases.',
    icon: 'qa',
    promptPlaceholder: 'Paste content and generate Q&A pairs',
    examples: ['FAQ generation', 'Training Q&A', 'Document questions'],
    capabilities: ['Bulk Q&A creation', 'FAQ-ready formatting', 'Knowledge base support', 'Content summarization'],
  },
  {
    slug: 'ai-dax-code-generator',
    name: 'AI DAX Code Generator',
    shortDescription: 'Power BI / DAX code from plain English',
    heroTitle: 'Generate DAX formulas',
    heroAccent: 'for Power BI.',
    heroDescription: 'Describe the metric you need and generate DAX measures, calculated columns, and Power BI-ready logic.',
    icon: 'dx',
    promptPlaceholder: 'Example: Create a DAX measure for year-over-year revenue growth',
    examples: ['YOY measure', 'Running total', 'Customer retention DAX'],
    capabilities: ['DAX measures', 'Calculated columns', 'Power BI logic', 'Plain English explanations'],
  },
  {
    slug: 'ai-pandas-code-generator',
    name: 'AI Pandas Code Generator',
    shortDescription: 'Data wrangling with auto-generated Pandas',
    heroTitle: 'Generate Pandas code',
    heroAccent: 'from plain English.',
    heroDescription: 'Create Python Pandas code for cleaning, filtering, grouping, merging, and analyzing datasets faster.',
    icon: 'py',
    promptPlaceholder: 'Example: Group sales by month and calculate average order value',
    examples: ['Clean missing values', 'Group by month', 'Merge datasets'],
    capabilities: ['Pandas data cleaning', 'Filtering and grouping', 'Merge and reshape code', 'Readable Python output'],
  },
];

export function getToolBySlug(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}
