'use client';

import React, { useEffect } from 'react';

export default function BankStatementConverterPage() {
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
        AI Bank Statement Converter
      </div>
      <h1>
        Convert bank statements to Excel
        <span className="accent">
          instantly
        </span>
        <br />
        with AI precision.
      </h1>
      <p className="lede">
        Parse bank statement PDFs into clean Excel-ready tables with Formula Byte. No copy-paste. No formatting errors. Just accurate, analysis-ready data in seconds.
      </p>
      <div className="hero-trust">
        <span className="trust-pill">
          <span className="dot"></span>
          No copy-paste needed
        </span>
        <span className="trust-pill">
          <span className="dot"></span>
          Instant results
        </span>
        <span className="trust-pill">
          <span className="dot"></span>
          Works with any bank
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
            Drop your bank statement here
          </h3>
          <p className="upload-desc">
            or
            <span className="upload-browse">
              click to browse
            </span>
            from your computer
          </p>
          <input type="file" id="file-input" hidden />
        </label>
        <div className="upload-formats">
          <span className="format-pill">
            PDF
          </span>
          <span className="format-divider">
            ·
          </span>
          <span className="format-info">
            Up to 50 MB · Private &amp; secure
          </span>
        </div>
      </div>
      <div className="example-prompts">
        <span>
          Try samples from:
        </span>
        <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>
          Chase Bank
        </button>
        <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>
          Bank of America
        </button>
        <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>
          Wells Fargo
        </button>
      </div>
    </div>
  </section>
  <div className="section-wrap">
    <section className="card">
      <div className="row">
        <div className="row-header">
          <div className="eyebrow">
            The problem
          </div>
          <h2>
            Why traditional PDF to Excel tools
            <span className="serif-accent">
              fail with bank statements.
            </span>
          </h2>
          <p className="intro">
            Bank statement layouts vary by bank, making traditional converters inaccurate and time-consuming.
          </p>
        </div>
        <div className="row-body">
          <ul className="bulleted">
            <li>
              Different table layouts across banks
            </li>
            <li>
              Merged cells and inconsistent formatting
            </li>
            <li>
              Transaction rows split across pages
            </li>
            <li>
              Dates and amounts in different formats
            </li>
            <li>
              Running balances that don't export correctly
            </li>
          </ul>
          <blockquote className="pull-quote">
            "I spent 6 hours manually converting a 50-page bank statement to Excel and still had errors."
            <cite>
              — Bookkeeper, Accounting Firm
            </cite>
          </blockquote>
        </div>
      </div>
    </section>
  </div>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"row"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"The problem"}</div>
            <h2>
              {"Why manual bank statement conversion "}
              <span className={"serif-accent"}>{"fails."}</span>
            </h2>
            <p className={"intro"}>{"Bank statements are not simple documents. They contain hundreds of transactions, running balances, mixed date and currency formats, and different layouts per bank. Manual conversion leads to missing rows, decimal errors, broken formulas, and hours of wasted time. AI removes human error completely."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Hundreds of transactions"}</li>
              <li>{"Running balances"}</li>
              <li>{"Mixed date and currency formats"}</li>
              <li>{"Different layouts per bank"}</li>
              <li>{"Manual conversion leads to missing rows, decimal errors, broken formulas, and hours of wasted time"}</li>
            </ul>
            <blockquote className={"pull-quote"}>
              {" \"I spent 6 hours manually converting a 50-page bank statement to Excel and still had errors.\" "}
              <cite>{"— Bookkeeper, Accounting Firm"}</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  <div className="section-wrap">
    <section className="card">
      <div className="row">
        <div className="row-header">
          <div className="eyebrow">
            How it works
          </div>
          <h2>
            No manual data entry. No formula fixes. No cleanup.
          </h2>
          <p className="intro">
            AI-powered bank statement conversion that understands financial documents, not just tables.
          </p>
        </div>
        <div className="row-body">
          <div className="steps">
            <div className="step">
              <div className="step-num">
                1
              </div>
              <div>
                <h3>
                  Upload your bank statement PDF
                </h3>
                <p>
                  Simply upload your bank statement in PDF format — any bank, any length, multi-page files supported.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                2
              </div>
              <div>
                <h3>
                  AI reads transactions, dates, balances, and descriptions
                </h3>
                <p>
                  The model analyzes the document structure and extracts all transaction data accurately, understanding bank-specific formats.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                3
              </div>
              <div>
                <h3>
                  Data is structured into clean Excel columns
                </h3>
                <p>
                  Information is organized into proper columns: dates, descriptions, debits, credits, and running balances.
                </p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">
                4
              </div>
              <div>
                <h3>
                  Download a ready-to-use Excel file
                </h3>
                <p>
                  Get a perfectly formatted Excel spreadsheet ready for analysis, reporting, or accounting software import.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className="section-wrap">
    <section className="card">
      <div className="row-stacked">
        <div className="row-header">
          <div className="eyebrow">
            Capabilities
          </div>
          <h2>
            What the AI Bank Statement Converter actually does.
          </h2>
          <p className="intro">
            This is not a basic PDF to Excel converter. The AI works in multiple layers to handle real-world bank statements.
          </p>
        </div>
        <div className="row-body">
          <div className="capability-grid">
            <div className="capability">
              <span className="cap-num">
                01
              </span>
              <h3>
                Transaction-Level Data Extraction
              </h3>
              <p>
                The AI detects every transaction row — dates, descriptions, debit, credit, and balances — even when layouts differ across pages.
              </p>
            </div>
            <div className="capability">
              <span className="cap-num">
                02
              </span>
              <h3>
                Multi-Page & Large Statement Handling
              </h3>
              <p>
                Whether your statement is 5 pages or 100 pages long, the AI processes all pages without breaking transaction order.
              </p>
            </div>
            <div className="capability">
              <span className="cap-num">
                03
              </span>
              <h3>
                Debit and Credit Separation
              </h3>
              <p>
                Incoming and outgoing amounts are automatically classified into proper Excel columns, removing manual fixes.
              </p>
            </div>
            <div className="capability">
              <span className="cap-num">
                04
              </span>
              <h3>
                Running Balance Recognition
              </h3>
              <p>
                The AI identifies and aligns balances per transaction to maintain financial accuracy.
              </p>
            </div>
            <div className="capability">
              <span className="cap-num">
                05
              </span>
              <h3>
                Bank-Specific Layout Normalization
              </h3>
              <p>
                Different banks use different formats. The AI standardizes them into one clean, consistent Excel structure.
              </p>
            </div>
            <div className="capability">
              <span className="cap-num">
                06
              </span>
              <h3>
                Excel-Ready Formatting
              </h3>
              <p>
                The output is optimized for formulas, pivot tables, reports, and dashboards — no reformatting needed.
              </p>
            </div>
          </div>
          <div className="benefits-strip">
            <div className="benefit-item">
              <h4>
                Complete transaction data
              </h4>
              <p>
                Every row, every amount, every balance captured accurately
              </p>
            </div>
            <div className="benefit-item">
              <h4>
                Clean Excel formatting
              </h4>
              <p>
                Perfect columns for date, description, debit, credit, and balance
              </p>
            </div>
            <div className="benefit-item">
              <h4>
                Analysis-ready output
              </h4>
              <p>
                Apply formulas, build reports, or import into accounting tools
              </p>
            </div>
            <div className="benefit-item">
              <h4>
                Fast processing
              </h4>
              <p>
                Even large bank statement PDFs convert in seconds
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className="section-wrap">
    <section className="card">
      <div className="row">
        <div className="row-header">
          <div className="eyebrow">
            Who it's for
          </div>
          <h2>
            Who should use this bank statement converter.
          </h2>
          <p className="intro">
            If you work with bank statements, this tool saves hours every week.
          </p>
        </div>
        <div className="row-body">
          <div className="audience-grid">
            <div className="audience-cell">
              <h4>
                Small Business Owners
              </h4>
              <p>
                Managing expenses and cash flow
              </p>
            </div>
            <div className="audience-cell">
              <h4>
                Bookkeepers & Accountants
              </h4>
              <p>
                Handling multiple clients efficiently
              </p>
            </div>
            <div className="audience-cell">
              <h4>
                Financial Analysts
              </h4>
              <p>
                Building reports and forecasts
              </p>
            </div>
            <div className="audience-cell">
              <h4>
                Auditors & Consultants
              </h4>
              <p>
                Validating transactions quickly
              </p>
            </div>
            <div className="audience-cell">
              <h4>
                Real Estate Professionals
              </h4>
              <p>
                Reviewing payment records
              </p>
            </div>
            <div className="audience-cell">
              <h4>
                Tax Preparers
              </h4>
              <p>
                Organizing client financial data
              </p>
            </div>
          </div>
          <p className="audience-footer">
            From
            <em>
              solopreneurs
            </em>
            to
            <em>
              accounting firms.
            </em>
          </p>
        </div>
      </div>
    </section>
  </div>
  <div className="section-wrap">
    <section className="card">
      <div className="row-stacked">
        <div className="row-header">
          <div className="eyebrow">
            Comparison
          </div>
          <h2>
            Why Formula Byte beats traditional PDF to Excel tools.
          </h2>
          <p className="intro">
            Most PDF to Excel converters fail where it matters. Here's the difference.
          </p>
        </div>
        <div className="row-body">
          <div className="compare">
            <div className="compare-col">
              <div className="compare-label">
                Traditional PDF to Excel
              </div>
              <h3>
                Basic. Limited.
              </h3>
              <ul>
                <li>
                  Only extract visible tables
                </li>
                <li>
                  Break when layouts change
                </li>
                <li>
                  Require manual cleanup
                </li>
                <li>
                  Don't understand financial data
                </li>
              </ul>
            </div>
            <div className="compare-col">
              <div className="compare-label">
                Formula Byte AI
              </div>
              <h3>
                Intelligent. Complete.
              </h3>
              <ul>
                <li>
                  Understands bank-specific formats
                </li>
                <li>
                  Standardizes transaction data
                </li>
                <li>
                  Eliminates formatting fixes
                </li>
                <li>
                  Delivers analysis-ready Excel files
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className="section-wrap">
    <section className="card">
      <div className="row">
        <div className="row-header">
          <div className="eyebrow">
            Free &amp; secure
          </div>
          <h2>
            What
            <span className="serif-accent">
              free
            </span>
            means here.
          </h2>
          <p className="intro">
            Convert bank statements to Excel for free. Test the output quality instantly. No credit card, no signup gate — and your data never leaves your browser.
          </p>
        </div>
        <div className="row-body">
          <ul className="bulleted">
            <li>
              <strong>
                Upload bank statement PDFs
              </strong>
              from any bank
            </li>
            <li>
              <strong>
                Convert to Excel
              </strong>
              with accurate transaction extraction
            </li>
            <li>
              <strong>
                Review output quality
              </strong>
              before committing to anything
            </li>
          </ul>
          <div className="free-block">
            <div>
              <h3>
                Start converting in seconds.
              </h3>
              <p>
                No card. No signup. Just upload your PDF.
              </p>
            </div>
            <div className="stats-inline">
              <div className="stat-inline">
                <div className="stat-num">
                  5k+
                </div>
                <div className="stat-label">
                  Users
                </div>
              </div>
              <div className="stat-inline">
                <div className="stat-num">
                  30k+
                </div>
                <div className="stat-label">
                  Statements
                </div>
              </div>
              <div className="stat-inline">
                <div className="stat-num">
                  4.9
                </div>
                <div className="stat-label">
                  Rating
                </div>
              </div>
            </div>
          </div>
          <div className="security-list">
            <div className="security-item">
              <span className="sec-num">
                01
              </span>
              <span>
                Secure file handling
              </span>
            </div>
            <div className="security-item">
              <span className="sec-num">
                02
              </span>
              <span>
                No manual access to your data
              </span>
            </div>
            <div className="security-item">
              <span className="sec-num">
                03
              </span>
              <span>
                Works with statements from most banks worldwide
              </span>
            </div>
            <div className="security-item">
              <span className="sec-num">
                04
              </span>
              <span>
                Your financial data stays protected
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className="section-wrap">
    <section className="card">
      <div className="row-stacked">
        <div className="row-header">
          <div className="eyebrow">
            Reviews
          </div>
          <h2>
            What our users say.
          </h2>
          <p className="intro">
            Finance professionals who have stopped manual data entry.
          </p>
        </div>
        <div className="row-body">
          <div className="reviews">
            <div className="review">
              <div className="review-stars">
                ★★★★★
              </div>
              <p className="review-quote">
                "This tool saved me hours every month. Bank statement conversion used to take me half a day, now it's done in minutes with zero errors."
              </p>
              <div className="review-author">
                <div className="review-avatar">
                  RB
                </div>
                <div className="review-meta">
                  <div className="name">
                    Rachel Brown
                  </div>
                  <div className="role">
                    Bookkeeper
                  </div>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="review-stars">
                ★★★★★
              </div>
              <p className="review-quote">
                "Finally a converter that handles different bank formats correctly. The AI understands the transaction structure and outputs perfect Excel files."
              </p>
              <div className="review-author">
                <div className="review-avatar">
                  DK
                </div>
                <div className="review-meta">
                  <div className="name">
                    David Kim
                  </div>
                  <div className="role">
                    Financial Analyst
                  </div>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="review-stars">
                ★★★★★
              </div>
              <p className="review-quote">
                "I've tried many PDF to Excel tools and this is by far the best for bank statements. No cleanup needed — just perfect data extraction."
              </p>
              <div className="review-author">
                <div className="review-avatar">
                  MP
                </div>
                <div className="review-meta">
                  <div className="name">
                    Maria Perez
                  </div>
                  <div className="role">
                    Accountant
                  </div>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="review-stars">
                ★★★★★
              </div>
              <p className="review-quote">
                "Handles multi-page statements flawlessly. The AI maintains transaction order across all pages and the Excel output is ready for analysis."
              </p>
              <div className="review-author">
                <div className="review-avatar">
                  JT
                </div>
                <div className="review-meta">
                  <div className="name">
                    James Thompson
                  </div>
                  <div className="role">
                    Audit Manager
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className="section-wrap">
    <section className="card">
      <div className="row-stacked">
        <div className="row-header">
          <div className="eyebrow">
            Explore more
          </div>
          <h2>
            Related products you may like.
          </h2>
          <p className="intro">
            More AI tools built around the same idea: describe what you need, get a usable result.
          </p>
        </div>
        <div className="row-body">
          <div className="related-grid">
            <a className="related-card" href="/tools/excel-formula-generator">
              <div className="glyph">
                ƒ
              </div>
              <h4>
                Excel Formula Generator
              </h4>
              <p>
                Generate Excel formulas from plain English descriptions.
              </p>
              <span className="link">
                Try now →
              </span>
            </a>
            <a className="related-card" href="/tools/ai-excel-spreadsheet-generator">
              <div className="glyph">
                📊
              </div>
              <h4>
                AI Excel Spreadsheet Generator
              </h4>
              <p>
                Create complete Excel files from text descriptions.
              </p>
              <span className="link">
                Try now →
              </span>
            </a>
            <a className="related-card" href="/tools/ai-pandas-code-generator">
              <div className="glyph">
                🐼
              </div>
              <h4>
                AI Pandas Code Generator
              </h4>
              <p>
                Generate Python Pandas code for data analysis.
              </p>
              <span className="link">
                Try now →
              </span>
            </a>
            <a className="related-card" href="/tools/ai-dax-code-generator">
              <div className="glyph">
                📊
              </div>
              <h4>
                AI DAX Code Generator
              </h4>
              <p>
                Generate Power BI DAX code from plain English.
              </p>
              <span className="link">
                Try now →
              </span>
            </a>
            <a className="related-card" href="/tools/sentiment-analysis-tool">
              <div className="glyph">
                ±
              </div>
              <h4>
                Sentiment Analysis Tool
              </h4>
              <p>
                Analyze text sentiment and emotions using AI.
              </p>
              <span className="link">
                Try now →
              </span>
            </a>
            <a className="related-card" href="/tools/ai-chatbot">
              <div className="glyph">
                ∞
              </div>
              <h4>
                AI Chatbot
              </h4>
              <p>
                Build intelligent chatbots that understand and respond.
              </p>
              <span className="link">
                Try now →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className="section-wrap" id="faq">
    <section className="card">
      <div className="row">
        <div className="row-header">
          <div className="eyebrow">
            FAQ
          </div>
          <h2>
            Frequently asked questions.
          </h2>
          <p className="intro">
            Common questions about the Bank Statement Converter.
          </p>
        </div>
        <div className="row-body">
          <div className="faq-list">
            <details className="faq-item">
              <summary className="faq-q">
                What is a bank statement converter PDF to Excel?
              </summary>
              <div className="faq-a">
                A tool that converts bank statement PDFs into structured Excel files using AI, accurately extracting transactions, dates, and balances.
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-q">
                Is this the best PDF to Excel converter for bank statements?
              </summary>
              <div className="faq-a">
                It's built specifically for bank statements, understanding bank-specific formats that generic converters miss.
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-q">
                Is Formula Byte's bank statement converter free?
              </summary>
              <div className="faq-a">
                Yes, free access is available with optional upgrades for higher limits and advanced workflows.
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-q">
                Can I convert multiple bank statements at once?
              </summary>
              <div className="faq-a">
                Yes, batch processing is supported on higher plans for handling multiple statements efficiently.
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-q">
                Does it work with all banks?
              </summary>
              <div className="faq-a">
                It supports most bank formats globally, from major US banks to international financial institutions.
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-q">
                Can I export Excel back to PDF?
              </summary>
              <div className="faq-a">
                Yes, the converted Excel files can be easily exported back to PDF using Excel or Google Sheets.
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div className="final-cta-wrap">
    <section className="final-cta">
      <div className="final-cta-inner">
        <h2>
          Stop wasting hours on
          <span className="accent">
            manual bank statement conversion.
          </span>
        </h2>
        <p>
          Convert PDF bank statements to Excel using AI — fast, accurate, and stress-free.
        </p>
        <div className="btn-row">
          <a href="https://dashboard.formulabyte.com/" className="btn btn-primary btn-lg">
            Start free with Formula Byte →
          </a>
          <a href="/tools" className="btn btn-outline btn-lg">
            Browse all tools
          </a>
        </div>
      </div>
    </section>
  </div>
    </>
  );
}