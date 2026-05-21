import type { Metadata } from 'next';
import ToolsIndexPage from '@/components/pages/ToolsIndexPage';

export const metadata: Metadata = {
  title: 'AI Tools | Formula Byte',
  description: 'Browse Formula Byte AI tools for spreadsheets, formulas, DAX, Pandas, sentiment analysis, Q&A generation, and PDF to Excel conversion.',
};

export default function Page() {
  return <ToolsIndexPage />;
}
