'use client';

import React, { useEffect } from 'react';

export default function PdfToExcelAIPage() {
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
        PDF to Excel AI Converter – Fast & Accurate
      </div>
      <h1>
        PDF to Excel AI – Convert PDFs into
        <span className="accent">
          {" "}Excel Instantly
        </span>
      </h1>
      <p className="lede">
        Convert PDF files into clean, editable Excel spreadsheets using AI. No copy-paste. No broken tables. Just accurate, ready-to-use Excel data. Upload your PDF and let Formula Byte handle the conversion in seconds. Start free. Download Excel instantly.
      </p>
      <div className="hero-trust">
        <span className="trust-pill">
          <span className="dot"></span>
          No copy-paste
        </span>
        <span className="trust-pill">
          <span className="dot"></span>
          No broken tables
        </span>
        <span className="trust-pill">
          <span className="dot"></span>
          Just accurate Excel
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
          <div className={"eyebrow"}>Convert PDF to Excel Using AI</div>
          <h2>
            {"Manually converting PDFs into Excel "}
            <span className={"serif-accent"}>wastes time and creates errors.</span>
          </h2>
        </div>
        <div className={"row-body"}>
          <p className={"intro"}>PDF to Excel AI understands document structure — not just visible text. Whether you need to convert PDF tables to Excel, extract data from financial PDFs, or use a PDF to Excel AI converter for free, Formula Byte delivers reliable Excel output every time.</p>
          <ul className={"bulleted"}>
            <li><strong>{"Convert PDF tables to Excel"}</strong></li>
            <li><strong>{"Extract data from financial PDFs"}</strong></li>
            <li><strong>{"Use a PDF to Excel AI converter for free"}</strong></li>
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
            {"Why Manual PDF to Excel "}
            <span className={"serif-accent"}>Conversion Fails</span>
          </h2>
          <p className={"intro"}>PDF files are not designed for spreadsheets. Common issues include broken rows and columns, merged or missing cells, misaligned numbers, and hours spent fixing formats. Traditional converters move data — AI understands structure.</p>
        </div>
        <div className={"row-body"}>
          <ul className={"bulleted"}>
            <li>{"Broken rows and columns"}</li>
            <li>{"Merged or missing cells"}</li>
            <li>{"Misaligned numbers"}</li>
            <li>{"Hours spent fixing formats"}</li>
          </ul>
          <p className={"audience-footer"}>
            {"Traditional converters move data — AI understands structure."}
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
          <h2>{"How the PDF to Excel AI Works"}</h2>
          <p className={"intro"}>Four steps from PDF upload to downloading clean Excel data. No setup. No formatting fixes. No cleanup.</p>
        </div>
        <div className={"row-body"}>
          <div className={"steps"}>
            <div className={"step"}>
              <div className={"step-num"}>1</div>
              <div>
                <h3>{"Upload your PDF file"}</h3>
                <p>{"Select or drag any PDF document with tables or data you want to convert."}</p>
              </div>
            </div>
            <div className={"step"}>
              <div className={"step-num"}>2</div>
              <div>
                <h3>{"AI analyzes tables, rows, and layout"}</h3>
                <p>{"The model identifies table structures, headers, and data relationships in the PDF."}</p>
              </div>
            </div>
            <div className={"step"}>
              <div className={"step-num"}>3</div>
              <div>
                <h3>{"Data is structured into clean Excel columns"}</h3>
                <p>{"Information is organized into proper rows and columns with correct formatting."}</p>
              </div>
            </div>
            <div className={"step"}>
              <div className={"step-num"}>4</div>
              <div>
                <h3>{"Download a ready-to-use Excel file"}</h3>
                <p>{"Your converted Excel spreadsheet is ready for analysis, formulas, and reporting."}</p>
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
          <h2>{"What the PDF to Excel AI Actually Does"}</h2>
          <p className={"intro"}>This is not a basic PDF converter. The AI works in multiple layers to ensure accuracy.</p>
        </div>
        <div className={"row-body"}>
          <div className={"capability-grid"}>
            <div className={"capability"}>
              <span className={"cap-num"}>01</span>
              <h3>{"Table & Layout Detection"}</h3>
              <p>{"Identifies tables, headers, rows, and columns accurately."}</p>
            </div>
            <div className={"capability"}>
              <span className={"cap-num"}>02</span>
              <h3>{"Multi-Page PDF Handling"}</h3>
              <p>{"Converts single or multi-page PDFs without breaking data flow."}</p>
            </div>
            <div className={"capability"}>
              <span className={"cap-num"}>03</span>
              <h3>{"Numeric & Text Alignment"}</h3>
              <p>{"Preserves numbers, text, and spacing correctly in Excel."}</p>
            </div>
            <div className={"capability"}>
              <span className={"cap-num"}>04</span>
              <h3>{"Column Normalization"}</h3>
              <p>{"Standardizes inconsistent PDF layouts into clean Excel structures."}</p>
            </div>
            <div className={"capability"}>
              <span className={"cap-num"}>05</span>
              <h3>{"Excel-Ready Formatting"}</h3>
              <p>{"Output files are ready for formulas, reports, and analysis."}</p>
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
          <h2>{"What You Get After Converting PDF to Excel"}</h2>
          <p className={"intro"}>Experience the full benefits of AI-powered PDF to Excel conversion.</p>
        </div>
        <div className={"row-body"}>
          <div className={"benefits-strip"}>
            <div className={"benefit-item"}>
              <h4>{"Clean Excel files"}</h4>
              <p>{"Structured rows and columns — no mess"}</p>
            </div>
            <div className={"benefit-item"}>
              <h4>{"Accurate data extraction"}</h4>
              <p>{"Numbers and text preserved correctly"}</p>
            </div>
            <div className={"benefit-item"}>
              <h4>{"Time savings"}</h4>
              <p>{"Hours of manual work reduced to seconds"}</p>
            </div>
            <div className={"benefit-item"}>
              <h4>{"Analysis-ready output"}</h4>
              <p>{"Use immediately for reporting or calculations"}</p>
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
          <h2>{"Who Should Use PDF to Excel AI"}</h2>
          <p className={"intro"}>If PDFs slow down your workflow, this tool fixes that.</p>
        </div>
        <div className={"row-body"}>
          <ul className={"bulleted"}>
            <li>{"Accountants & finance teams"}</li>
            <li>{"Business analysts"}</li>
            <li>{"Operations & reporting teams"}</li>
            <li>{"Students and researchers"}</li>
            <li>{"Anyone working with PDF data"}</li>
          </ul>
          <p className={"audience-footer"}>
            {"If PDFs slow down your workflow, this tool fixes that."}
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
          <h2>{"Why Formula Byte's PDF to Excel AI Is Different"}</h2>
          <p className={"intro"}>Basic converters versus AI-powered PDF to Excel conversion.</p>
        </div>
        <div className={"row-body"}>
          <div className={"compare"}>
            <div className={"compare-col"}>
              <div className={"compare-label"}>Basic converters</div>
              <h3>{"Shallow. Broken."}</h3>
              <ul>
                <li>{"Break layouts"}</li>
                <li>{"Miss table structure"}</li>
                <li>{"Require manual fixes"}</li>
              </ul>
            </div>
            <div className={"compare-col"}>
              <div className={"compare-label"}>Formula Byte's AI</div>
              <h3>{"Smart. Accurate."}</h3>
              <ul>
                <li>{"Understands document structure"}</li>
                <li>{"Produces clean Excel output"}</li>
                <li>{"Reduces post-conversion work"}</li>
                <li>{"This is not file conversion — it's data transformation"}</li>
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
            {"Free PDF to Excel AI – What "}
            <span className={"serif-accent"}>Free</span>
            {" Means"}
          </h2>
          <p className={"intro"}>You can try PDF to Excel AI for free and test output quality.</p>
        </div>
        <div className={"row-body"}>
          <ul className={"bulleted"}>
            <li>
              <strong>{"Upload PDFs"}</strong>
            </li>
            <li>
              <strong>{"Convert to Excel"}</strong>
            </li>
            <li>
              <strong>{"Review accuracy"}</strong>
            </li>
            <li>
              <strong>{"Upgrade only if you need higher usage limits or advanced workflows"}</strong>
            </li>
          </ul>
          <div className={"free-block"}>
            <div>
              <h3>{"Start converting in seconds."}</h3>
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
              <span>{"Files are processed securely"}</span>
            </div>
            <div className={"security-item"}>
              <span className={"sec-num"}>02</span>
              <span>{"No permanent storage"}</span>
            </div>
            <div className={"security-item"}>
              <span className={"sec-num"}>03</span>
              <span>{"No manual file access"}</span>
            </div>
            <div className={"security-item"}>
              <span className={"sec-num"}>04</span>
              <span>{"Safe for business use - Your documents stay private"}</span>
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
          <div className={"eyebrow"}>Explore more</div>
          <h2>{"Related products you may like."}</h2>
          <p className={"intro"}>More AI tools built around the same idea: describe what you need, get a usable result.</p>
        </div>
        <div className={"row-body"}>
          <div className={"related-grid"}>
            <a className={"related-card"} href={"/tools/bank-statement-converter"}>
              <div className={"glyph"}>§</div>
              <h4>{"Bank Statement Converter"}</h4>
              <p>{"Parse PDF statements into clean, analysis-ready tables."}</p>
              <span className={"link"}>Try now →</span>
            </a>
            <a className={"related-card"} href={"/tools/excel-formula-generator"}>
              <div className={"glyph"}>fx</div>
              <h4>{"Excel Formula Generator"}</h4>
              <p>{"Create Excel formulas instantly using AI."}</p>
              <span className={"link"}>Try now →</span>
            </a>
            <a className={"related-card"} href={"/tools/power-query-ai"}>
              <div className={"glyph"}>PQ</div>
              <h4>{"Power Query AI"}</h4>
              <p>{"Clean, transform, and combine data using Power Query with AI."}</p>
              <span className={"link"}>Try now →</span>
            </a>
            <a className={"related-card"} href={"/tools/ai-pandas-code-generator"}>
              <div className={"glyph"}>🐼</div>
              <h4>{"AI Pandas Code Generator"}</h4>
              <p>{"Generate clean Python Pandas code using AI."}</p>
              <span className={"link"}>Try now →</span>
            </a>
            <a className={"related-card"} href={"/tools/ai-sql-query-generator"}>
              <div className={"glyph"}>SQL</div>
              <h4>{"AI SQL Query Generator"}</h4>
              <p>{"Generate accurate SQL queries using AI."}</p>
              <span className={"link"}>Try now →</span>
            </a>
            <a className={"related-card"} href={"/tools/ai-chatbot"}>
              <div className={"glyph"}>∞</div>
              <h4>{"AI Chatbot"}</h4>
              <p>{"Conversational assistant for your data and questions."}</p>
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
          <p className={"intro"}>Common questions about PDF to Excel AI.</p>
        </div>
        <div className={"row-body"}>
          <div className={"faq-list"}>
            <details className={"faq-item"}>
              <summary className={"faq-q"}>What is PDF to Excel AI?</summary>
              <div className={"faq-a"}>An AI tool that converts PDF files into structured Excel spreadsheets.</div>
            </details>
            <details className={"faq-item"}>
              <summary className={"faq-q"}>Is the PDF to Excel AI free?</summary>
              <div className={"faq-a"}>Yes, free access is available with optional upgrades.</div>
            </details>
            <details className={"faq-item"}>
              <summary className={"faq-q"}>Can it handle large or multi-page PDFs?</summary>
              <div className={"faq-a"}>Yes, multi-page PDFs are supported.</div>
            </details>
            <details className={"faq-item"}>
              <summary className={"faq-q"}>Will the Excel file be editable?</summary>
              <div className={"faq-a"}>Yes, the output Excel file is fully editable.</div>
            </details>
            <details className={"faq-item"}>
              <summary className={"faq-q"}>Is my data secure?</summary>
              <div className={"faq-a"}>Yes, files are processed securely and not stored permanently.</div>
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
          {"Stop fixing broken Excel files "}
          <span className={"accent"}>from PDFs.</span>
        </h2>
        <p>{"Convert PDFs into clean Excel spreadsheets using AI — fast, accurate, and stress-free."}</p>
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
