import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ToolLandingPage from '@/components/pages/ToolLandingPage';
import { getToolBySlug, tools } from '@/data/tools';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {
      title: 'Tool Not Found | Formula Byte',
    };
  }

  return {
    title: `${tool.name} | Formula Byte`,
    description: tool.shortDescription,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) notFound();

  return <ToolLandingPage tool={tool} />;
}
