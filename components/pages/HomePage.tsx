'use client';

import React, { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    // Pricing toggle functionality
    const monthlyBtn = document.getElementById('monthly-btn');
    const yearlyBtn = document.getElementById('yearly-btn');
    const pricingAmounts = document.querySelectorAll('.pricing-amount');

    const handleMonthlyClick = () => {
      if (monthlyBtn && yearlyBtn) {
        monthlyBtn.classList.add('active');
        yearlyBtn.classList.remove('active');
        pricingAmounts.forEach(amount => {
          const monthlyPrice = amount.getAttribute('data-monthly');
          amount.textContent = `$${monthlyPrice}`;
        });
      }
    };

    const handleYearlyClick = () => {
      if (monthlyBtn && yearlyBtn) {
        yearlyBtn.classList.add('active');
        monthlyBtn.classList.remove('active');
        pricingAmounts.forEach(amount => {
          const yearlyPrice = amount.getAttribute('data-yearly');
          amount.textContent = `$${yearlyPrice}`;
        });
      }
    };

    monthlyBtn?.addEventListener('click', handleMonthlyClick);
    yearlyBtn?.addEventListener('click', handleYearlyClick);

    // Scroll animation functionality
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleScrollAnimation = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    };

    const scrollObserver = new IntersectionObserver(handleScrollAnimation, observerOptions);

    // Add scroll animation classes to elements
    const animatedElements = document.querySelectorAll('.section-wrap, .benefit-card, .feature-tile, .tool-card, .pricing-card, .review, .industry-card');
    animatedElements.forEach((el, index) => {
      el.classList.add('animate-on-scroll', 'animate-fade-up');
      el.classList.add(`stagger-${(index % 6) + 1}`);
      scrollObserver.observe(el);
    });

    return () => {
      monthlyBtn?.removeEventListener('click', handleMonthlyClick);
      yearlyBtn?.removeEventListener('click', handleYearlyClick);
      scrollObserver.disconnect();
    };
  }, []);

  return (
    <>
      <link rel="stylesheet" href="/page-styles/home.css" />
    <section className={"hero"}>
      <div className={"hero-inner"}>
        <div className={"hero-rating"}>
          <span className={"stars"}>{"\u2605 4.9"}</span>
          <span>
            {"from "}
            <strong>{"2,000+"}</strong>
            {" teams"}
          </span>
        </div>
        <h1>
          {"Transform data into"}
          <br />
          <span className={"accent"}>{"actionable insights."}</span>
        </h1>
        <p className={"lede"}>{" Ask anything about your data. Get instant answers, charts, and reports in plain English \u2014 no code, no spreadsheets, no SQL required. "}</p>
        <div className={"hero-ctas"}>
          <a href={"/auth"} className={"btn btn-primary btn-lg"}>{"Get started free \u2192"}</a>
          <a href={"#how-it-works"} className={"btn btn-outline btn-lg"}>{"Book a demo"}</a>
        </div>
        <div className={"hero-trustline"}>
          <span>{"No credit card"}</span>
          <span className={"sep"}>{"\u00b7"}</span>
          <span>{"Setup in 30 seconds"}</span>
          <span className={"sep"}>{"\u00b7"}</span>
          <span>{"Cancel anytime"}</span>
          <span className={"sep"}>{"\u00b7"}</span>
          <span>{"GDPR compliant"}</span>
        </div>
        <div className={"prompt-card"}>
          <div className={"prompt-input"}>
            <textarea className={"prompt-textarea"} placeholder={"Ask anything about your data\u2026 e.g. What's driving revenue this month?"} rows={2}></textarea>
          </div>
          <div className={"prompt-actions"}>
            <div className={"prompt-hints"}>
              <span>{"Powered by AI"}</span>
              <span>{"\u00b7"}</span>
              <span>{"Works with Excel, CSV, SQL"}</span>
            </div>
            <button className={"send-btn"} aria-label={"Ask"}>
              <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                <line x1={"12"} y1={"19"} x2={"12"} y2={"5"}></line>
                <polyline points={"5 12 12 5 19 12"}></polyline>
              </svg>
            </button>
          </div>
        </div>
        <div className={"example-prompts"}>
          <span>{"Try:"}</span>
          <button className={"chip"}>{"What's driving revenue this month?"}</button>
          <button className={"chip"}>{"Which customers might cancel?"}</button>
          <button className={"chip"}>{"Forecast next quarter"}</button>
        </div>
      </div>
    </section>
    <div className={"logo-strip"}>
      <div className={"logo-strip-label"}>{"Trusted by data teams at"}</div>
      <div className={"logo-marquee-container"}>
        <div className={"logo-marquee"}>
          <div className={"logo-track"}>
            <span className={"logo-item sans"}>{"Google"}</span>
            <span className={"logo-item"}>{"Microsoft"}</span>
            <span className={"logo-item mono"}>{"amazon"}</span>
            <span className={"logo-item sans"}>{"Apple"}</span>
            <span className={"logo-item"}>{"Spotify"}</span>
            <span className={"logo-item sans"}>{"Slack"}</span>
            <span className={"logo-item"}>{"Salesforce"}</span>
            <span className={"logo-item mono"}>{"shopify"}</span>
            <span className={"logo-item sans"}>{"Google"}</span>
            <span className={"logo-item"}>{"Microsoft"}</span>
            <span className={"logo-item mono"}>{"amazon"}</span>
            <span className={"logo-item sans"}>{"Apple"}</span>
            <span className={"logo-item"}>{"Spotify"}</span>
            <span className={"logo-item sans"}>{"Slack"}</span>
            <span className={"logo-item"}>{"Salesforce"}</span>
            <span className={"logo-item mono"}>{"shopify"}</span>
          </div>
        </div>
      </div>
    </div>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"row-stacked"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Why Formula Byte"}</div>
            <h2>
              {"Why teams "}
              <span className={"serif-accent"}>{"choose"}</span>
              {" us."}
            </h2>
            <p className={"intro"}>{"Stop wrestling with spreadsheets and start getting answers. Join 50,000+ professionals who transformed their data analysis."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"benefit-grid"}>
              <div className={"benefit-card"}>
                <h3>{"10\u00d7 faster analysis"}</h3>
                <p>{"What takes hours in Excel takes seconds with Formula Byte. Ask questions in plain English and get instant insights."}</p>
                <div className={"benefit-stat"}>
                  <span className={"benefit-stat-num"}>{"87%"}</span>
                  <span className={"benefit-stat-label"}>{"Faster reporting"}</span>
                </div>
              </div>
              <div className={"benefit-card"}>
                <h3>{"No technical skills needed"}</h3>
                <p>{"No formulas, no coding, no complex setup. Just upload your data and start asking questions naturally."}</p>
                <div className={"benefit-stat"}>
                  <span className={"benefit-stat-num"}>{"Zero"}</span>
                  <span className={"benefit-stat-label"}>{"Learning curve"}</span>
                </div>
              </div>
              <div className={"benefit-card"}>
                <h3>{"Connect any data source"}</h3>
                <p>{"Excel, CSV, databases, APIs, and more. Unify all your data in one place and analyze it together."}</p>
                <div className={"benefit-stat"}>
                  <span className={"benefit-stat-num"}>{"50+"}</span>
                  <span className={"benefit-stat-label"}>{"Integrations"}</span>
                </div>
              </div>
              <div className={"benefit-card"}>
                <h3>{"Beautiful visualizations"}</h3>
                <p>{"Transform raw data into stunning charts and graphs that tell compelling stories. Export to presentations instantly."}</p>
                <div className={"benefit-stat"}>
                  <span className={"benefit-stat-num"}>{"1M+"}</span>
                  <span className={"benefit-stat-label"}>{"Charts created"}</span>
                </div>
              </div>
              <div className={"benefit-card"}>
                <h3>{"Enterprise-grade security"}</h3>
                <p>{"Bank-level encryption, GDPR compliance, and SOC 2 certified. Your data stays safe and private \u2014 always."}</p>
                <div className={"benefit-stat"}>
                  <span className={"benefit-stat-num"}>{"99.9%"}</span>
                  <span className={"benefit-stat-label"}>{"Uptime guaranteed"}</span>
                </div>
              </div>
              <div className={"benefit-card"}>
                <h3>{"Built for teams"}</h3>
                <p>{"Collaborate in real-time, share insights, and build dashboards together. Work better, faster, and in sync."}</p>
                <div className={"benefit-stat"}>
                  <span className={"benefit-stat-num"}>{"50K+"}</span>
                  <span className={"benefit-stat-label"}>{"Active teams"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className={"section-wrap"} id={"how-it-works"}>
      <section className={"card"}>
        <div className={"row"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"How it works"}</div>
            <h2>{"From question to insight in seconds."}</h2>
            <p className={"intro"}>{"Ask in plain English. Get charts, tables, and answers instantly. No technical skills required \u2014 four steps from raw data to a finished report."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"steps"}>
              <div className={"step"}>
                <div className={"step-num"}>{"1"}</div>
                <div>
                  <h3>{"Add your data"}</h3>
                  <p>{"Upload, connect, and combine your data across multiple sources. Excel, CSV, databases, APIs \u2014 all in one workspace."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"2"}</div>
                <div>
                  <h3>{"Create stunning charts"}</h3>
                  <p>{"Convert your data into clear visuals that display your insights. Beautiful charts generated in seconds, not hours."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"3"}</div>
                <div>
                  <h3>{"Manipulate & organize"}</h3>
                  <p>{"Reshape messy datasets, clean columns, merge sources, filter rows, and reformat data \u2014 all through plain English."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"4"}</div>
                <div>
                  <h3>{"Analyze text instantly"}</h3>
                  <p>{"Transform raw text into insights with sentiment detection, keyword extraction, and classification \u2014 built in."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className={"section-wrap"} id={"tools"}>
      <section className={"card"}>
        <div className={"row-stacked"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Platform capabilities"}</div>
            <h2>
              {"Everything you need to "}
              <span className={"serif-accent"}>{"analyze"}</span>
              {" data."}
            </h2>
            <p className={"intro"}>{"One platform that handles all your data needs \u2014 from formulas and dashboards to text analysis and code generation."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"feature-trio"}>
              <div className={"feature-tile"}>
                <div className={"feature-tile-icon"}>{"\u221e"}</div>
                <h3>{"AI data analysis chat"}</h3>
                <p>{"Chat with your data in plain English. Ask questions and receive instant answers, insights, and visualizations."}</p>
                <ul>
                  <li>{"Natural language queries"}</li>
                  <li>{"Instant visualizations"}</li>
                  <li>{"Context-aware responses"}</li>
                </ul>
                <span className={"feature-tile-link"}>{"Try chat analysis \u2192"}</span>
              </div>
              <div className={"feature-tile"}>
                <div className={"feature-tile-icon"}>{"\u0192"}</div>
                <h3>{"Generate formulas & code"}</h3>
                <p>{"Stop searching for formulas. Describe what you need and get accurate Excel formulas, SQL queries, Python, and more."}</p>
                <ul>
                  <li>{"Excel & Sheets formulas"}</li>
                  <li>{"SQL query generator"}</li>
                  <li>{"Python & R code"}</li>
                </ul>
                <span className={"feature-tile-link"}>{"Start generating \u2192"}</span>
              </div>
              <div className={"feature-tile"}>
                <div className={"feature-tile-icon"}>{"\u25a6"}</div>
                <h3>{"Automated dashboards"}</h3>
                <p>{"Describe your dashboard and AI generates a fully interactive view. Customize every detail and schedule auto-refreshes."}</p>
                <ul>
                  <li>{"One-click dashboards"}</li>
                  <li>{"Customizable templates"}</li>
                  <li>{"Scheduled refreshes"}</li>
                </ul>
                <span className={"feature-tile-link"}>{"Build a dashboard \u2192"}</span>
              </div>
            </div>
            <hr className={"card-divider"} />
            <div className={"card-sublabel"}>{"Powerful tools for every workflow"}</div>
            <div className={"tools-grid"}>
              <div className={"tool-card"}>
                <span className={"tool-badge"}>{"Most popular"}</span>
                <h4>{"Excel & Sheets"}</h4>
                <p>{"Generate complex formulas, pivot tables, and macros in seconds. Clean messy data automatically."}</p>
                <div className={"tool-tags"}>
                  <span className={"tool-tag"}>{"XLOOKUP"}</span>
                  <span className={"tool-tag"}>{"Pivot tables"}</span>
                  <span className={"tool-tag"}>{"Conditional formatting"}</span>
                </div>
              </div>
              <div className={"tool-card"}>
                <span className={"tool-badge"}>{"Essential"}</span>
                <h4>{"SQL databases"}</h4>
                <p>{"Write optimized queries, joins, and aggregations using plain English. Debug SQL instantly."}</p>
                <div className={"tool-tags"}>
                  <span className={"tool-tag"}>{"Complex queries"}</span>
                  <span className={"tool-tag"}>{"Multi-joins"}</span>
                  <span className={"tool-tag"}>{"Performance"}</span>
                </div>
              </div>
              <div className={"tool-card"}>
                <h4>{"Power BI & Tableau"}</h4>
                <p>{"Create stunning DAX measures and calculated fields. Build dashboards that tell stories."}</p>
                <div className={"tool-tags"}>
                  <span className={"tool-tag"}>{"DAX"}</span>
                  <span className={"tool-tag"}>{"Calculated cols"}</span>
                  <span className={"tool-tag"}>{"Visual analytics"}</span>
                </div>
              </div>
              <div className={"tool-card"}>
                <span className={"tool-badge"}>{"Advanced"}</span>
                <h4>{"Python & R"}</h4>
                <p>{"Generate production-ready code for data analysis, machine learning, and visualization."}</p>
                <div className={"tool-tags"}>
                  <span className={"tool-tag"}>{"Pandas"}</span>
                  <span className={"tool-tag"}>{"NumPy"}</span>
                  <span className={"tool-tag"}>{"ML models"}</span>
                </div>
              </div>
              <div className={"tool-card"}>
                <h4>{"Web scraping"}</h4>
                <p>{"Extract data from any website. Build scrapers without writing a single line of code."}</p>
                <div className={"tool-tags"}>
                  <span className={"tool-tag"}>{"Auto-select"}</span>
                  <span className={"tool-tag"}>{"Clean data"}</span>
                  <span className={"tool-tag"}>{"Export"}</span>
                </div>
              </div>
              <div className={"tool-card"}>
                <span className={"tool-badge"}>{"New"}</span>
                <h4>{"Regex & patterns"}</h4>
                <p>{"Generate complex regular expressions for validation, extraction, and text processing."}</p>
                <div className={"tool-tags"}>
                  <span className={"tool-tag"}>{"Validation"}</span>
                  <span className={"tool-tag"}>{"Extraction"}</span>
                  <span className={"tool-tag"}>{"Pattern match"}</span>
                </div>
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
            <div className={"eyebrow"}>{"Who uses Formula Byte"}</div>
            <h2>{"Powering data-driven teams across industries."}</h2>
            <p className={"intro"}>{"From startups to enterprises, teams across every function are transforming their workflow with AI-powered analytics."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"industry-grid"}>
              <div className={"industry-card"}>
                <h4>{"Finance & Accounting"}</h4>
                <p>{"Automate financial reporting, budget analysis, and forecasting in seconds instead of hours."}</p>
                <ul>
                  <li>{"Automated P&L reports"}</li>
                  <li>{"Budget variance analysis"}</li>
                  <li>{"Cash flow forecasting"}</li>
                </ul>
              </div>
              <div className={"industry-card"}>
                <h4>{"Marketing Teams"}</h4>
                <p>{"Unify campaign data, track ROI, and optimize marketing spend with instant insights."}</p>
                <ul>
                  <li>{"Cross-channel attribution"}</li>
                  <li>{"Campaign performance dashboards"}</li>
                  <li>{"Customer lifetime value analysis"}</li>
                </ul>
              </div>
              <div className={"industry-card"}>
                <h4>{"Sales & Revenue"}</h4>
                <p>{"Track pipeline health, forecast revenue, and identify opportunities with AI-powered insights."}</p>
                <ul>
                  <li>{"Sales pipeline analysis"}</li>
                  <li>{"Revenue forecasting"}</li>
                  <li>{"Territory performance"}</li>
                </ul>
              </div>
              <div className={"industry-card"}>
                <h4>{"Operations & Supply Chain"}</h4>
                <p>{"Optimize inventory, track KPIs, and streamline operations with real-time data analysis."}</p>
                <ul>
                  <li>{"Inventory optimization"}</li>
                  <li>{"Supplier performance metrics"}</li>
                  <li>{"Operational dashboards"}</li>
                </ul>
              </div>
              <div className={"industry-card"}>
                <h4>{"HR & People Analytics"}</h4>
                <p>{"Analyze workforce data, track retention, and make data-driven people decisions."}</p>
                <ul>
                  <li>{"Employee retention analysis"}</li>
                  <li>{"Recruiting funnel metrics"}</li>
                  <li>{"Compensation benchmarking"}</li>
                </ul>
              </div>
              <div className={"industry-card"}>
                <h4>{"Executive Leadership"}</h4>
                <p>{"Get instant answers to business questions without waiting for reports from analysts."}</p>
                <ul>
                  <li>{"Executive dashboards"}</li>
                  <li>{"Business health monitoring"}</li>
                  <li>{"Strategic planning insights"}</li>
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
            <div className={"eyebrow"}>{"Security first"}</div>
            <h2>
              {"Your data is "}
              <span className={"serif-accent"}>{"safe"}</span>
              {" with us."}
            </h2>
            <p className={"intro"}>{"Enterprise-grade security to protect your sensitive information. Built privacy-first from the ground up."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>
                <strong>{"Encrypted storage."}</strong>
                {" All data is securely stored and encrypted in isolated sandbox environments for every chat session."}
              </li>
              <li>
                <strong>{"Row-level security."}</strong>
                {" Apply row-level security to database connections for complete data isolation and access control."}
              </li>
              <li>
                <strong>{"Private by design."}</strong>
                {" Your data is never used to train models. Complete privacy and confidentiality guaranteed."}
              </li>
            </ul>
            <div className={"security-list"} style={{"marginTop": "22px"}}>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"01"}</span>
                <span>{"SOC 2 Type II certified"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"02"}</span>
                <span>{"GDPR & CCPA compliant"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"03"}</span>
                <span>{"AES-256 encryption at rest"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"04"}</span>
                <span>{"Bank-level TLS in transit"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className={"section-wrap"} id={"pricing"}>
      <section className={"card"}>
        <div className={"row-stacked"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Pricing"}</div>
            <h2>
              {"Simple, "}
              <span className={"serif-accent"}>{"transparent"}</span>
              {" pricing."}
            </h2>
            <p className={"intro"}>{"Choose the perfect plan for your needs. Save 30% with yearly billing."}</p>
          </div>
          <div className={"row-body"} style={{"display": "flex", "flexDirection": "column", "alignItems": "center"}}>
            <div className={"pricing-toggle"}>
              <button id={"monthly-btn"} className={"active"}>{"Monthly"}</button>
              <button id={"yearly-btn"}>
                {"Yearly "}
                <span className={"save-pill"}>{"Save 30%"}</span>
              </button>
            </div>
            <div className={"pricing-grid"} style={{"width": "100%"}}>
              <div className={"pricing-card"}>
                <div className={"pricing-name"}>{"Unlimited"}</div>
                <div className={"pricing-price"}>
                  <span className={"pricing-amount"} data-monthly={"12.99"} data-yearly={"9.09"}>{"$12.99"}</span>
                  <span className={"pricing-period"}>{"/ month"}</span>
                </div>
                <p className={"pricing-desc"}>{"Perfect for individuals getting started with unlimited AI analysis."}</p>
                <ul className={"pricing-features"}>
                  <li>{"Unlimited Chat Message"}</li>
                  <li>{"Unlimited Formulas (Excel & DAX)"}</li>
                  <li>{"Unlimited DAX Code Generator"}</li>
                  <li>{"50 Regex Generator"}</li>
                  <li>{"20 R-Code Generator"}</li>
                  <li>{"20 Python Data Operation"}</li>
                  <li>{"50 SQL operation"}</li>
                  <li>{"20 File Upload"}</li>
                  <li>{"25 Sentiment Enrichment"}</li>
                  <li>{"50 MB file upload limit"}</li>
                  <li>{"5 File upload / Chat"}</li>
                  <li>{"Unlimited PDF to Excel Conversion"}</li>
                  <li>{"Unlimited Excel to PDF Conversion"}</li>
                  <li>{"Unlimited Word to PDF Conversion"}</li>
                  <li>{"Unlimited PDF to Word Conversion"}</li>
                  <li>{"1 Device at a time"}</li>
                  <li>{"14 days chat history"}</li>
                </ul>
                <a href={"/auth"} className={"btn btn-outline pricing-cta"}>{"Get started"}</a>
              </div>
              <div className={"pricing-card featured"}>
                <span className={"pricing-tag"}>{"Most popular"}</span>
                <div className={"pricing-name"}>{"Unlimited Plus"}</div>
                <div className={"pricing-price"}>
                  <span className={"pricing-amount"} data-monthly={"22.99"} data-yearly={"16.09"}>{"$22.99"}</span>
                  <span className={"pricing-period"}>{"/ month"}</span>
                </div>
                <p className={"pricing-desc"}>{"For professionals who need advanced unlimited features."}</p>
                <ul className={"pricing-features"}>
                  <li>{"Everything in Unlimited"}</li>
                  <li>{"Unlimited Python Data Operation"}</li>
                  <li>{"Unlimited SQL Operation"}</li>
                  <li>{"Unlimited R Code Generator"}</li>
                  <li>{"Unlimited Regex Generator"}</li>
                  <li>{"5,000 Sentiment Analysis / Month"}</li>
                  <li>{"75 MB File upload limit"}</li>
                  <li>{"10 file upload / chat"}</li>
                  <li>{"Use on 3 device at once"}</li>
                  <li>{"30 days chat history"}</li>
                </ul>
                <a href={"/auth"} className={"btn btn-primary pricing-cta"}>{"Start free trial"}</a>
              </div>
              <div className={"pricing-card"}>
                <div className={"pricing-name"}>{"Unlimited Pro"}</div>
                <div className={"pricing-price"}>
                  <span className={"pricing-amount"} data-monthly={"32.99"} data-yearly={"23.09"}>{"$32.99"}</span>
                  <span className={"pricing-period"}>{"/ month"}</span>
                </div>
                <p className={"pricing-desc"}>{"Maximum power for teams and heavy users."}</p>
                <ul className={"pricing-features"}>
                  <li>{"Everything in Unlimited Plus"}</li>
                  <li>{"Unlimited R Expressions"}</li>
                  <li>{"15,000 Sentiment Analysis / Month"}</li>
                  <li>{"250 MB file upload limit"}</li>
                  <li>{"Use on multiple device at once"}</li>
                  <li>{"60 days chat history"}</li>
                </ul>
                <a href={"/auth"} className={"btn btn-outline pricing-cta"}>{"Get started"}</a>
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
            <div className={"eyebrow"}>{"Testimonials"}</div>
            <h2>{"Trusted by high-performing teams worldwide."}</h2>
            <p className={"intro"}>{"Join thousands of teams using Formula Byte to turn raw data into clear decisions."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"reviews"}>
              <div className={"review"}>
                <div className={"review-stars"}>{"\u2605\u2605\u2605\u2605\u2605"}</div>
                <p className={"review-quote"}>{"\"Formula Byte transformed how our team works with data. Within weeks, we cut reporting time by 80% and finally got our leadership the answers they needed in real time.\""}</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"MR"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"Maya Rahman"}</div>
                    <div className={"role"}>{"Head of Analytics, fintech startup"}</div>
                  </div>
                </div>
              </div>
              <div className={"review"}>
                <div className={"review-stars"}>{"\u2605\u2605\u2605\u2605\u2605"}</div>
                <p className={"review-quote"}>{"\"We moved off of messy spreadsheets to a cleaner, more efficient workflow. The AI handles the formula-wrangling so our team can focus on actual analysis.\""}</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"OC"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"Olivia Chen"}</div>
                    <div className={"role"}>{"Operations Manager, retail"}</div>
                  </div>
                </div>
              </div>
              <div className={"review"}>
                <div className={"review-stars"}>{"\u2605\u2605\u2605\u2605\u2605"}</div>
                <p className={"review-quote"}>{"\"Honestly the fastest path from a vague question to a working chart I've ever used. Our marketing team builds dashboards themselves now \u2014 no SQL needed.\""}</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"DC"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"Daniel Cooper"}</div>
                    <div className={"role"}>{"Marketing Director, SaaS"}</div>
                  </div>
                </div>
              </div>
              <div className={"review"}>
                <div className={"review-stars"}>{"\u2605\u2605\u2605\u2605\u2605"}</div>
                <p className={"review-quote"}>{"\"We replaced three separate tools with Formula Byte. The plain-English query layer is the unlock \u2014 anyone on the team can pull their own numbers now.\""}</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"LP"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"Liam Parker"}</div>
                    <div className={"role"}>{"Finance Lead, e-commerce"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className={"section-wrap"} id={"faq"}>
      <section className={"card"}>
        <div className={"row"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"FAQ"}</div>
            <h2>{"Frequently asked questions."}</h2>
            <p className={"intro"}>{"Everything you need to know before getting started."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"faq-list"}>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"What can Formula Byte analyze?"}</summary>
                <div className={"faq-a"}>{"Formula Byte analyzes data from Excel, CSV files, SQL databases, APIs, and more. It generates formulas, code, charts, insights, and reports \u2014 all from plain English instructions."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"How accurate is the analysis?"}</summary>
                <div className={"faq-a"}>{"Formula Byte delivers highly accurate results, though quality depends on your data structure. We always recommend human review for context and validation on important decisions."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is my data secure?"}</summary>
                <div className={"faq-a"}>{"Yes. All data is encrypted at rest and in transit, and stored in isolated sandbox environments. We never use your data to train models \u2014 full privacy is guaranteed."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Can I change plans later?"}</summary>
                <div className={"faq-a"}>{"Yes. You can upgrade or downgrade at any time. Changes take effect immediately, and we'll prorate any billing differences."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"What's your refund policy?"}</summary>
                <div className={"faq-a"}>{"Request a refund within 30 days of payment. If you've made fewer than 50 requests, you're eligible for a full refund. Email hello@formulabyte.com to start."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"How fast can I get results?"}</summary>
                <div className={"faq-a"}>{"Most analyses complete in seconds. Compared to manual work, Formula Byte is 15\u201320\u00d7 faster at generating insights, formulas, and visualizations."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Who is Formula Byte for?"}</summary>
                <div className={"faq-a"}>{"Analysts, marketers, HR teams, founders, researchers \u2014 anyone who works with data. No technical skills required. If you can describe what you want, we can build it."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"What integrations do you support?"}</summary>
                <div className={"faq-a"}>{"Excel, Google Sheets, Power BI, Tableau, SQL databases, Python, R, and more. We're constantly adding new integrations based on customer feedback."}</div>
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
            {"Start analyzing your data "}
            <span className={"accent"}>{"in 30 seconds."}</span>
          </h2>
          <p>{"No credit card required. Free forever plan included. Join 10,000+ professionals already using Formula Byte."}</p>
          <div className={"btn-row"}>
            <a href={"/auth"} className={"btn btn-primary btn-lg"}>{"Get started free \u2192"}</a>
            <a href={"/tools"} className={"btn btn-outline btn-lg"}>{"Browse all tools"}</a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
