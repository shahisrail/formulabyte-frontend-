import Link from 'next/link';
import { tools } from '@/data/tools';

export default function ToolsIndexPage() {
  return (
    <>
      <link rel="stylesheet" href="/page-styles/tools.css" />
      <section className="hero tools-hero">
        <div className="hero-inner">
          <div className="hero-rating">
            <span className="stars">AI TOOLS</span>
            <span>One design system for every Formula Byte tool</span>
          </div>
          <h1>
            Explore every <span className="accent">AI data tool.</span>
          </h1>
          <p className="lede">
            Generate formulas, spreadsheets, DAX, Pandas code, Q&A, sentiment labels, and clean tables from one reusable tool page system.
          </p>
        </div>
      </section>

      <main className="section-wrap tools-index-wrap">
        <section className="card">
          <div className="row row-stacked">
            <div className="row-header">
              <div className="eyebrow">Tools</div>
              <h2>Choose the tool you need.</h2>
              <p className="intro">Each tool uses the same reusable page template, so adding more tools later is fast and clean.</p>
            </div>
            <div className="row-body">
              <div className="tool-page-grid">
                {tools.map((tool) => (
                  <Link href={`/tools/${tool.slug}`} className="tool-page-card" key={tool.slug}>
                    <span className="tool-page-icon">{tool.icon}</span>
                    <h3>{tool.name}</h3>
                    <p>{tool.shortDescription}</p>
                    <span className="tool-page-link">Open tool →</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
