'use client';

import React, { useEffect } from 'react';

export default function AIPdfSummarizerPage() {
  useEffect(() => {
    const uploadZone = document.querySelector('.upload-zone');
    const fileInput = document.getElementById('file-input');

    if (!uploadZone || !fileInput) return;

    // Handle drag and drop events
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      uploadZone?.addEventListener(eventName, preventDefaults, false);
      document.body?.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e: Event) {
      e.preventDefault();
      e.stopPropagation();
    }

    // Highlight drop zone when item is dragged over it
    ['dragenter', 'dragover'].forEach(eventName => {
      uploadZone?.addEventListener(eventName, () => {
        uploadZone.classList.add('drag-over');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      uploadZone?.addEventListener(eventName, () => {
        uploadZone.classList.remove('drag-over');
      }, false);
    });

    // Handle dropped files
    uploadZone?.addEventListener('drop', (e: Event) => {
      const dt = e as DragEvent;
      const files = dt.dataTransfer?.files;
      handleFiles(files);
    }, false);

    // Handle clicked upload
    fileInput?.addEventListener('change', function(this: HTMLInputElement) {
      handleFiles(this.files);
    }, false);

    function handleFiles(files: FileList | null | undefined) {
      if (!files || files.length === 0) return;

      // Redirect to login page when files are uploaded
      window.location.href = 'https://dashboard.formulabyte.com/';
    }

    // Cleanup event listeners
    return () => {
      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        uploadZone?.removeEventListener(eventName, preventDefaults);
        document.body?.removeEventListener(eventName, preventDefaults);
      });
    };
  }, []);

  return (
    <>
    <section className="hero">
    <div className="hero-inner">
      <div className="eyebrow">
        AI PDF Summarizer – Summarize PDFs Instantly | Formula Byte
      </div>
      <h1>
        AI PDF Summarizer – Get Clear
        <span className="accent">
          {" "}Summaries in Seconds
        </span>
      </h1>
      <p className="lede">
        Summarize PDF documents instantly using AI. No page-by-page reading. No manual notes. Just clear, concise summaries that capture what matters. Upload your PDF and let Formula Byte extract the key points for you in seconds. Start free. Get instant PDF summaries.
      </p>
      <div className="hero-trust">
        <span className="trust-pill">
          <span className="dot"></span>
          No page-by-page reading
        </span>
        <span className="trust-pill">
          <span className="dot"></span>
          No manual notes
        </span>
        <span className="trust-pill">
          <span className="dot"></span>
          Just clear summaries
        </span>
      </div>
      <div className="upload-card">
        <label className="upload-zone" htmlFor="file-input">
          <div className="upload-icon-wrap">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M12 12v6"></path>
              <path d="m15 15-3-3-3 3"></path>
            </svg>
          </div>
          <h3 className="upload-title">
            Upload your PDF
          </h3>
          <p className="upload-desc">
            Drag & drop or click to browse
          </p>
          <span className="upload-hint">Supports single and multi-page PDFs</span>
        </label>
        <input type="file" id="file-input" hidden accept=".pdf" />
      </div>
    </div>
  </section>
  <div className={"section-wrap"}>
    <section className={"card"}>
      <div className={"row"}>
        <div className={"row-header"}>
          <div className={"eyebrow"}>Summarize PDFs Using AI</div>
          <h2>
            {"Reading long PDFs "}
            <span className={"serif-accent"}>takes time</span>
          </h2>
        </div>
        <div className={"row-body"}>
          <p className={"intro"}>The AI PDF Summarizer understands structure and meaning, not just text length. Whether you need to summarize long PDF documents, extract key points from reports, or use an AI PDF summarizer for free, Formula Byte delivers fast, accurate summaries every time.</p>
          <ul className={"bulleted"}>
            <li><strong>{"summarize long PDF documents"}</strong></li>
            <li><strong>{"extract key points from reports"}</strong></li>
            <li><strong>{"use an AI PDF summarizer for free"}</strong></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
  <div className={"section-wrap"}>
    <section className={"card"}>
      <div className={"row"}>
        <div className={"row-header"}>
          <div className={"eyebrow"}>The problem</div>
          <h2>
            {"Why Manual PDF "}
            <span className={"serif-accent"}>Summarization Fails</span>
          </h2>
          <p className={"intro"}>Manual summarization is slow and inconsistent. Common problems include missing important points, spending hours reading full documents, inconsistent notes across PDFs, and difficulty extracting insights quickly. AI removes information overload and delivers clarity instantly.</p>
        </div>
        <div className={"row-body"}>
          <ul className={"bulleted"}>
            <li>{"Missing important points"}</li>
            <li>{"Spending hours reading full documents"}</li>
            <li>{"Inconsistent notes across PDFs"}</li>
            <li>{"Difficulty extracting insights quickly"}</li>
          </ul>
          <p className={"audience-footer"}>
            {"AI removes information overload and delivers clarity instantly."}
          </p>
        </div>
      </div>
    </section>
  </div>
  <div className={"section-wrap"}>
    <section className={"card"}>
      <div className={"row"}>
        <div className={"row-header"}>
          <div className={"eyebrow"}>{"How it works"}</div>
          <h2>{"How the AI PDF Summarizer Works"}</h2>
          <p className={"intro"}>Four steps from uploading your PDF to getting a clear, concise summary. No highlighting. No manual effort. No information overload.</p>
        </div>
        <div className={"row-body"}>
          <div className={"steps"}>
            <div className={"step"}>
              <div className={"step-num"}>1</div>
              <div>
                <h3>{"Upload your PDF document"}</h3>
                <p>{"Select or drag any PDF document you want to summarize."}</p>
              </div>
            </div>
            <div className={"step"}>
              <div className={"step-num"}>2</div>
              <div>
                <h3>{"AI analyzes structure, headings, and context"}</h3>
                <p>{"The model identifies important sections, key ideas, and overall meaning."}</p>
              </div>
            </div>
            <div className={"step"}>
              <div className={"step-num"}>3</div>
              <div>
                <h3>{"Key points and insights are extracted"}</h3>
                <p>{"Get the most important ideas, conclusions, and takeaways organized clearly."}</p>
              </div>
            </div>
            <div className={"step"}>
              <div className={"step-num"}>4</div>
              <div>
                <h3>{"Read a clear, concise summary"}</h3>
                <p>{"Your summary is ready immediately — clear, accurate, and easy to understand."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className={"section-wrap"}>
    <section className={"card"}>
      <div className={"row-stacked"}>
        <div className={"row-header"}>
          <div className={"eyebrow"}>Capabilities</div>
          <h2>{"What the AI PDF Summarizer Actually Does"}</h2>
          <p className={"intro"}>This is not a basic text shortener. The AI works as a document-understanding system.</p>
        </div>
        <div className={"row-body"}>
          <div className={"capability-grid"}>
            <div className={"capability"}>
              <span className={"cap-num"}>01</span>
              <h3>{"Key Point Extraction"}</h3>
              <p>{"Identifies the most important ideas, sections, and conclusions."}</p>
            </div>
            <div className={"capability"}>
              <span className={"cap-num"}>02</span>
              <h3>{"Context-Aware Summarization"}</h3>
              <p>{"Understands meaning across paragraphs—not just sentence trimming."}</p>
            </div>
            <div className={"capability"}>
              <span className={"cap-num"}>03</span>
              <h3>{"Long PDF Handling"}</h3>
              <p>{"Summarizes short files or multi-page PDFs consistently."}</p>
            </div>
            <div className={"capability"}>
              <span className={"cap-num"}>04</span>
              <h3>{"Structured Summaries"}</h3>
              <p>{"Delivers readable summaries that are easy to scan and understand."}</p>
            </div>
            <div className={"capability"}>
              <span className={"cap-num"}>05</span>
              <h3>{"Fast, On-Demand Processing"}</h3>
              <p>{"Summaries are generated instantly, even for large documents."}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className={"section-wrap"}>
    <section className={"card"}>
      <div className={"row-stacked"}>
        <div className={"row-header"}>
          <div className={"eyebrow"}>Benefits</div>
          <h2>{"What You Get After Summarizing a PDF"}</h2>
          <p className={"intro"}>Experience the full benefits of AI-powered PDF summarization.</p>
        </div>
        <div className={"row-body"}>
          <div className={"benefits-strip"}>
            <div className={"benefit-item"}>
              <h4>{"Clear summaries"}</h4>
              <p>{"Understand documents in minutes, not hours"}</p>
            </div>
            <div className={"benefit-item"}>
              <h4>{"Better decision-making"}</h4>
              <p>{"Focus on insights without reading every page"}</p>
            </div>
            <div className={"benefit-item"}>
              <h4>{"Time savings"}</h4>
              <p>{"Reduce document review time dramatically"}</p>
            </div>
            <div className={"benefit-item"}>
              <h4>{"Action-ready output"}</h4>
              <p>{"Use summaries for meetings, research, or reports"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className={"section-wrap"}>
    <section className={"card"}>
      <div className={"row"}>
        <div className={"row-header"}>
          <div className={"eyebrow"}>Who it's for</div>
          <h2>{"Who Should Use an AI PDF Summarizer"}</h2>
          <p className={"intro"}>{"If PDFs slow you down, this tool speeds you up."}</p>
        </div>
        <div className={"row-body"}>
          <ul className={"bulleted"}>
            <li>{"Students and researchers"}</li>
            <li>{"Business professionals"}</li>
            <li>{"Legal and compliance teams"}</li>
            <li>{"Consultants and analysts"}</li>
            <li>{"Anyone dealing with long documents"}</li>
          </ul>
          <p className={"audience-footer"}>
            {"If PDFs slow you down, this tool speeds you up."}
          </p>
        </div>
      </div>
    </section>
  </div>
  <div className={"section-wrap"}>
    <section className={"card"}>
      <div className={"row-stacked"}>
        <div className={"row-header"}>
          <div className={"eyebrow"}>Comparison</div>
          <h2>{"Why Formula Byte's AI PDF Summarizer Is Different"}</h2>
          <p className={"intro"}>{"Basic summarizers versus AI-powered PDF summarization."}</p>
        </div>
        <div className={"row-body"}>
          <div className={"compare"}>
            <div className={"compare-col"}>
              <div className={"compare-label"}>Basic summarizers</div>
              <h3>{"Blind. Shallow."}</h3>
              <ul>
                <li>{"Cut text blindly"}</li>
                <li>{"Miss context"}</li>
                <li>{"Produce unclear summaries"}</li>
              </ul>
            </div>
            <div className={"compare-col"}>
              <div className={"compare-label"}>Formula Byte's AI</div>
              <h3>{"Smart. Deep."}</h3>
              <ul>
                <li>{"Understands document structure"}</li>
                <li>{"Extracts meaningful insights"}</li>
                <li>{"Delivers clean, readable summaries"}</li>
                <li>{"This is not shortening text — it's understanding content"}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className={"section-wrap"}>
    <section className={"card"}>
      <div className={"row"}>
        <div className={"row-header"}>
          <div className={"eyebrow"}>Free & secure</div>
          <h2>
            {"Free AI PDF Summarizer – What "}
            <span className={"serif-accent"}>Free</span>
            {" Means"}
          </h2>
          <p className={"intro"}>{"You can try the AI PDF Summarizer for free and test summary quality."}</p>
        </div>
        <div className={"row-body"}>
          <ul className={"bulleted"}>
            <li>
              <strong>{"Upload PDFs"}</strong>
            </li>
            <li>
              <strong>{"Generate summaries"}</strong>
            </li>
            <li>
              <strong>{"Review key insights"}</strong>
            </li>
            <li>
              <strong>{"Upgrade only if you need higher limits or advanced features"}</strong>
            </li>
          </ul>
          <div className={"free-block"}>
            <div>
              <h3>{"Start summarizing in seconds."}</h3>
              <p>{"No card. No download. Just upload a PDF."}</p>
            </div>
            <div className={"stats-inline"}>
              <div className={"stat-inline"}>
                <div className={"stat-num"}>5k+</div>
                <div className={"stat-label"}>Users</div>
              </div>
              <div className={"stat-inline"}>
                <div className={"stat-num"}>100k+</div>
                <div className={"stat-label"}>PDFs</div>
              </div>
              <div className={"stat-inline"}>
                <div className={"stat-num"}>4.9</div>
                <div className={"stat-label"}>Rating</div>
              </div>
            </div>
          </div>
          <div className={"security-list"}>
            <div className={"security-item"}>
              <span className={"sec-num"}>01</span>
              <span>{"PDFs are processed securely"}</span>
            </div>
            <div className={"security-item"}>
              <span className={"sec-num"}>02</span>
              <span>{"No permanent file storage"}</span>
            </div>
            <div className={"security-item"}>
              <span className={"sec-num"}>03</span>
              <span>{"No manual document access"}</span>
            </div>
            <div className={"security-item"}>
              <span className={"sec-num"}>04</span>
              <span>{"Safe for personal and business use - Your documents remain private"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className={"section-wrap"}>
    <section className={"card"}>
      <div className={"row-stacked"}>
        <div className={"row-header"}>
          <div className={"eyebrow"}>Security & File Privacy</div>
          <h2>{"Your Documents Stay Private"}</h2>
          <p className={"intro"}>PDFs are processed securely and not stored permanently. Your data remains confidential.</p>
        </div>
        <div className={"row-body"}>
          <ul className={"bulleted"}>
            <li>{"PDFs are processed securely"}</li>
            <li>{"No permanent file storage"}</li>
            <li>{"No manual document access"}</li>
            <li>{"Safe for personal and business use"}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
  <div className={"section-wrap"}>
    <section className={"card"}>
      <div className={"row-stacked"}>
        <div className={"row-header"}>
          <div className={"eyebrow"}>Explore more</div>
          <h2>{"Related products you may like."}</h2>
          <p className={"intro"}>{"More AI tools built around the same idea: describe what you need, get a usable result."}</p>
        </div>
        <div className={"row-body"}>
          <div className={"related-grid"}>
            <a className={"related-card"} href={"/tools/pdf-to-excel-ai"}>
              <div className={"glyph"}>📄</div>
              <h4>{"PDF to Excel AI"}</h4>
              <p>{"Convert PDF files into clean, editable Excel spreadsheets."}</p>
              <span className={"link"}>Try now →</span>
            </a>
            <a className={"related-card"} href={"/tools/bank-statement-converter"}>
              <div className={"glyph"}>§</div>
              <h4>{"Bank Statement Converter"}</h4>
              <p>{"Parse PDF statements into clean, analysis-ready tables."}</p>
              <span className={"link"}>Try now →</span>
            </a>
            <a className={"related-card"} href={"/tools/ai-chatbot"}>
              <div className={"glyph"}>∞</div>
              <h4>{"AI Chatbot"}</h4>
              <p>{"Conversational assistant for your data and questions."}</p>
              <span className={"link"}>Try now →</span>
            </a>
            <a className={"related-card"} href={"/tools/ai-qa-generator"}>
              <div className={"glyph"}>?</div>
              <h4>{"AI Q&A Generator"}</h4>
              <p>{"Bulk Q&A for docs, FAQs, and knowledge bases."}</p>
              <span className={"link"}>Try now →</span>
            </a>
            <a className={"related-card"} href={"/tools/excel-formula-generator"}>
              <div className={"glyph"}>fx</div>
              <h4>{"Excel Formula Generator"}</h4>
              <p>{"Create Excel formulas instantly using AI."}</p>
              <span className={"link"}>Try now →</span>
            </a>
            <a className={"related-card"} href={"/tools/ai-homework-helper"}>
              <div className={"glyph"}>📚</div>
              <h4>{"AI Homework Helper"}</h4>
              <p>{"Get homework help instantly using AI."}</p>
              <span className={"link"}>Try now →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className={"section-wrap"} id={"faq"}>
    <section className={"card"}>
      <div className={"row"}>
        <div className={"row-header"}>
          <div className={"eyebrow"}>FAQ</div>
          <h2>{"Frequently asked questions."}</h2>
          <p className={"intro"}>{"Common questions about the AI PDF Summarizer."}</p>
        </div>
        <div className={"row-body"}>
          <div className={"faq-list"}>
            <details className={"faq-item"}>
              <summary className={"faq-q"}>{"What is an AI PDF Summarizer?"}</summary>
              <div className={"faq-a"}>{"A tool that uses AI to generate concise summaries from PDF documents."}</div>
            </details>
            <details className={"faq-item"}>
              <summary className={"faq-q"}>{"Is the AI PDF Summarizer free?"}</summary>
              <div className={"faq-a"}>{"Yes, free access is available with optional upgrades."}</div>
            </details>
            <details className={"faq-item"}>
              <summary className={"faq-q"}>{"Can it summarize long PDFs?"}</summary>
              <div className={"faq-a"}>{"Yes, it supports multi-page and large documents."}</div>
            </details>
            <details className={"faq-item"}>
              <summary className={"faq-q"}>{"Does it keep important details?"}</summary>
              <div className={"faq-a"}>{"Yes, the AI focuses on key points and insights."}</div>
            </details>
            <details className={"faq-item"}>
              <summary className={"faq-q"}>{"Is my PDF data secure?"}</summary>
              <div className={"faq-a"}>{"Yes, files are processed securely and not stored permanently."}</div>
            </details>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className={"final-cta-wrap"}>
    <section className={"final-cta"}>
      <div className={"final-cta-inner"}>
        <h2>
          {"Stop reading entire PDFs "}
          <span className={"accent"}>just to find key points.</span>
        </h2>
        <p>{"Summarize PDF documents instantly using AI — fast, clear, and reliable."}</p>
        <div className={"btn-row"}>
          <a href="https://dashboard.formulabyte.com/" className={"btn btn-primary btn-lg"}>👉 Start Free with Formula Byte</a>
          <a href={"/tools"} className={"btn btn-outline btn-lg"}>Browse all tools</a>
        </div>
      </div>
    </section>
  </div>
    </>
  );
}
