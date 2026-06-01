import Link from 'next/link';
import type { Tool } from '@/data/tools';

export default function ToolLandingPage({ tool }: { tool: Tool }) {
  return (
    <>
      <section className="hero tool-detail-hero">
        <div className="hero-inner">
          <div className="hero-rating">
            <span className="stars">FREE TOOL</span>
            <span>{tool.shortDescription}</span>
          </div>

          <h1>
            {tool.heroTitle}
            <br />
            <span className="accent">{tool.heroAccent}</span>
          </h1>

          <p className="lede">{tool.heroDescription}</p>

          <div className="prompt-card tool-prompt-card">
            <div className="prompt-input">
              <textarea className="prompt-textarea" placeholder={tool.promptPlaceholder} rows={2} />
            </div>
            <div className="prompt-actions">
              <div className="prompt-hints">
                <span>Powered by Formula Byte AI</span>
                <span>·</span>
                <span>Fast, clean output</span>
              </div>
              <button className="send-btn" aria-label="Generate">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="19" x2="12" y2="5" />
                  <polyline points="5 12 12 5 19 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="example-prompts">
            <span>Try:</span>
            {tool.examples.map((example) => (
              <button className="chip" key={example}>{example}</button>
            ))}
          </div>
        </div>
      </section>

      <main className="section-wrap">
        <section className="card">
          <div className="row">
            <div className="row-header">
              <div className="eyebrow">Capabilities</div>
              <h2>What this tool can do.</h2>
              <p className="intro">This page is powered by the shared tool template, so the content changes while the layout stays consistent.</p>
            </div>
            <div className="row-body">
              <div className="capability-grid">
                {tool.capabilities.map((item, index) => (
                  <div className="capability" key={item}>
                    <span className="cap-num">{String(index + 1).padStart(2, '0')}</span>
                    <h3>{item}</h3>
                    <p>Use Formula Byte to complete this task faster with clean, structured, ready-to-use output.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="card tool-cta-card">
          <div className="mini-cta">
            <div>
              <h3>Need another AI tool page?</h3>
              <p>Add one object inside <code>data/tools.ts</code>, and Next.js will create the page with the same design.</p>
            </div>
            <Link href="/tools" className="btn btn-primary">Browse all tools</Link>
          </div>
        </section>
      </main>
    </>
  );
}
