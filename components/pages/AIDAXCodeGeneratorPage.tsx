'use client';

import React, { useState } from 'react';

export default function AIDAXCodeGeneratorPage() {
  const [inputValue, setInputValue] = useState('');

  const handleSendClick = () => {
    window.location.href = 'https://dashboard.formulabyte.com/';
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      window.location.href = 'https://dashboard.formulabyte.com/';
    }
  };

  return (
    <>
    <section className="hero">
      <div className="hero-inner">
        <div className="eyebrow">AI DAX Code Generator</div>
        <h1>
          AI DAX Code Generator –
          <span className="accent">Your Personal DAX Copilot for Power BI</span>
        </h1>
        <p className="lede">Generate accurate DAX code instantly using AI. No syntax errors. No debugging frustration. Just clean, ready-to-run DAX expressions for Power BI. Describe what you need in plain English and let Formula Byte generate the exact DAX code for you. Start free. Write DAX in seconds.</p>
        <div className="hero-trust">
          <span className="trust-pill">
            <span className="dot"></span>
            No syntax errors
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            No debugging frustration
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            Just clean DAX code
          </span>
        </div>
        <div className="prompt-card">
          <div className="prompt-input">
            <textarea
              className="prompt-textarea"
              placeholder="Describe what you need in plain English and let Formula Byte generate the exact DAX code for you."
              rows={2}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            ></textarea>
          </div>
          <div className="prompt-actions">
            <div className="prompt-hints">
              <span>0 / 500</span>
              <span>·</span>
              <span>AI-powered</span>
            </div>
            <button
              className="send-btn"
              aria-label="Generate"
              onClick={handleSendClick}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </button>
          </div>
        </div>
        <div className="example-prompts">
          <span>Try:</span>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Calculate YTD sales</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Create rolling 3-month average</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Show YoY growth percentage</button>
        </div>
      </div>
    </section>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"row"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Generate DAX Code Using AI for Power BI"}</div>
            <h2>
              {"Writing DAX often feels complex "}
              <span className={"serif-accent"}>{"and error-prone."}</span>
            </h2>
          </div>
          <div className={"row-body"}>
            <p className={"intro"}>{"The AI DAX Code Generator understands Power BI logic, data models, and relationships — not just functions. Formula Byte delivers accurate, optimized DAX every time."}</p>
            <ul className={"bulleted"}>
              <li><strong>{"An AI DAX generator"}</strong></li>
              <li><strong>{"The best AI for Power BI DAX"}</strong></li>
              <li><strong>{"Help writing complex DAX measures"}</strong></li>
            </ul>
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
              {"Why writing DAX manually "}
              <span className={"serif-accent"}>{"slows you down."}</span>
            </h2>
            <p className={"intro"}>{"Manual DAX development comes with challenges: syntax errors that break measures, incorrect filter context, complex nesting and variables, and hours lost debugging formulas. Even experienced analysts lose time fixing DAX issues. AI removes the friction from DAX coding."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Syntax errors that break measures"}</li>
              <li>{"Incorrect filter context"}</li>
              <li>{"Complex nesting and variables"}</li>
              <li>{"Hours lost debugging formulas"}</li>
              <li>{"Even experienced analysts lose time fixing DAX issues"}</li>
            </ul>
            <blockquote className={"pull-quote"}>
              {" \"I spent 4 hours debugging a single DAX measure last week. There has to be a better way.\" "}
              <cite>{"— Power BI Developer, Financial Services Company"}</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"row"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"How it works"}</div>
            <h2>{"No trial-and-error. No forum searching. No rework."}</h2>
            <p className={"intro"}>{"Four steps from describing your calculation to getting working DAX code. No trial-and-error. No forum searching. No rework."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"steps"}>
              <div className={"step"}>
                <div className={"step-num"}>{"1"}</div>
                <div>
                  <h3>{"Describe your calculation or metric in plain English"}</h3>
                  <p>{"Tell the AI what you need — KPIs, totals, percentages, time intelligence, or complex business logic."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"2"}</div>
                <div>
                  <h3>{"AI understands Power BI context and DAX logic"}</h3>
                  <p>{"The model analyzes your description and determines the right DAX functions and structure."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"3"}</div>
                <div>
                  <h3>{"A complete DAX expression is generated instantly"}</h3>
                  <p>{"Get syntactically perfect DAX code with proper measures, variables, and filter context in seconds."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"4"}</div>
                <div>
                  <h3>{"Copy and paste directly into Power BI"}</h3>
                  <p>{"Your DAX code is ready immediately. Works perfectly in Power BI Desktop and Service."}</p>
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
            <div className={"eyebrow"}>{"Capabilities"}</div>
            <h2>{"What the AI DAX Code Generator actually does."}</h2>
            <p className={"intro"}>{"This is more than a basic DAX helper. The AI works as a full DAX copilot for Power BI."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"capability-grid"}>
              <div className={"capability"}>
                <span className={"cap-num"}>{"01"}</span>
                <h3>{"Measure Generation"}</h3>
                <p>{"Creates DAX measures for KPIs, totals, percentages, rolling averages, and growth calculations."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"02"}</span>
                <h3>{"Calculated Column Creation"}</h3>
                <p>{"Generates accurate calculated column expressions based on business logic and model structure."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"03"}</span>
                <h3>{"Filter & Context Handling"}</h3>
                <p>{"Applies correct filter context, row context, and CALCULATE logic automatically."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"04"}</span>
                <h3>{"Time Intelligence Generation"}</h3>
                <p>{"Builds DAX for YTD, MTD, YoY, moving averages, and date-based analysis."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"05"}</span>
                <h3>{"Variable-Based DAX Logic"}</h3>
                <p>{"Uses VAR statements for cleaner, more readable, and easier-to-debug DAX code."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"06"}</span>
                <h3>{"Error Reduction & Optimization"}</h3>
                <p>{"Produces optimized DAX syntax that avoids common mistakes and performance issues."}</p>
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
            <div className={"eyebrow"}>{"Benefits"}</div>
            <h2>{"What You Get When You Generate DAX with AI"}</h2>
            <p className={"intro"}>{"Experience the full benefits of AI-powered DAX code generation."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"benefits-strip"}>
              <div className={"benefit-item"}>
                <h4>{"Production-ready DAX code"}</h4>
                <p>{"Clean, readable, and ready to run in Power BI"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Faster report development"}</h4>
                <p>{"Build dashboards and KPIs in minutes instead of hours"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Beginner-friendly workflow"}</h4>
                <p>{"No deep DAX expertise required"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Advanced analytical support"}</h4>
                <p>{"Handles simple calculations and complex business logic"}</p>
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
            <div className={"eyebrow"}>{"Who it's for"}</div>
            <h2>{"Who Should Use an AI DAX Code Generator"}</h2>
            <p className={"intro"}>{"If DAX is part of your workflow, this tool saves time and reduces errors."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Power BI analysts"}</li>
              <li>{"BI and data analysts"}</li>
              <li>{"Financial analysts"}</li>
              <li>{"Product and growth analysts"}</li>
              <li>{"Anyone working with DAX in Power BI"}</li>
            </ul>
            <p className={"audience-footer"}>
              {"If DAX is part of your workflow, this tool saves time and reduces errors."}
            </p>
          </div>
        </div>
      </section>
    </div>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"row-stacked"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Comparison"}</div>
            <h2>{"Why Formula Byte Is One of the Best AI Tools for DAX Code"}</h2>
            <p className={"intro"}>{"Most DAX tools fail where it matters. Here's the difference."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"compare"}>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"Most DAX tools"}</div>
                <h3>{"Limited. Basic."}</h3>
                <ul>
                  <li>{"Suggest partial formulas"}</li>
                  <li>{"Ignore model context"}</li>
                  <li>{"Fail on complex logic"}</li>
                </ul>
              </div>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"Formula Byte's AI"}</div>
                <h3>{"Complete. Intelligent."}</h3>
                <ul>
                  <li>{"Understands Power BI relationships"}</li>
                  <li>{"Generates complete DAX expressions"}</li>
                  <li>{"Acts like a personal DAX expert"}</li>
                  <li>{"This is not autocomplete — it's DAX intelligence"}</li>
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
            <div className={"eyebrow"}>{"Free & secure"}</div>
            <h2>
              {"Free AI DAX Code Generator – What "}
              <span className={"serif-accent"}>{"Free"}</span>
              {" Means"}
            </h2>
            <p className={"intro"}>{"You can use the AI DAX Code Generator for free and test its accuracy."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>
                <strong>{"Generate DAX expressions"}</strong>
              </li>
              <li>
                <strong>{"Review logic and syntax"}</strong>
              </li>
              <li>
                <strong>{"Test measures and calculations"}</strong>
              </li>
              <li>
                <strong>{"Upgrade only if you need higher limits or advanced usage"}</strong>
              </li>
            </ul>
            <div className={"free-block"}>
              <div>
                <h3>{"Start generating in seconds."}</h3>
                <p>{"No card. No download. Just a prompt."}</p>
              </div>
              <div className={"stats-inline"}>
                <div className={"stat-inline"}>
                  <div className={"stat-num"}>{"5k+"}</div>
                  <div className={"stat-label"}>{"Users"}</div>
                </div>
                <div className={"stat-inline"}>
                  <div className={"stat-num"}>{"40k+"}</div>
                  <div className={"stat-label"}>{"Measures"}</div>
                </div>
                <div className={"stat-inline"}>
                  <div className={"stat-num"}>{"4.9"}</div>
                  <div className={"stat-label"}>{"Rating"}</div>
                </div>
              </div>
            </div>
            <div className={"security-list"}>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"01"}</span>
                <span>{"No Power BI data stored permanently"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"02"}</span>
                <span>{"Safe for professional and corporate use"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"03"}</span>
                <span>{"Designed specifically for Microsoft Power BI"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"04"}</span>
                <span>{"Secure and private by default - Your data stays protected"}</span>
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
            <div className={"eyebrow"}>{"Reviews"}</div>
            <h2>{"What our users say."}</h2>
            <p className={"intro"}>{"Power BI professionals who have stopped struggling with DAX."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"reviews"}>
              <div className={"review"}>
                <div className={"review-stars"}>{"★★★★★"}</div>
                <p className={"review-quote"}>{"\"This DAX generator is incredible. What used to take me hours of trial-and-error now takes seconds. The code is production-ready and works perfectly.\""}
</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"MJ"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"Michael Johnson"}</div>
                    <div className={"role"}>{"Power BI Developer"}</div>
                  </div>
                </div>
              </div>
              <div className={"review"}>
                <div className={"review-stars"}>{"★★★★★"}</div>
                <p className={"review-quote"}>{"\"As someone new to DAX, this tool is a lifesaver. No more memorizing complex syntax — just describe what I need and get working measures.\""}
</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"SL"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"Sarah Lee"}</div>
                    <div className={"role"}>{"BI Analyst"}</div>
                  </div>
                </div>
              </div>
              <div className={"review"}>
                <div className={"review-stars"}>{"★★★★★"}</div>
                <p className={"review-quote"}>{"\"Incredibly accurate time intelligence formulas. The AI handles YTD, YoY, and moving averages with perfect syntax. Essential for financial reporting.\""}
</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"RB"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"Robert Brown"}</div>
                    <div className={"role"}>{"Financial Analyst"}</div>
                  </div>
                </div>
              </div>
              <div className={"review"}>
                <div className={"review-stars"}>{"★★★★★"}</div>
                <p className={"review-quote"}>{"\"Works perfectly for both simple measures and complex calculations. The AI generates clean, optimized DAX that saves me hours every week.\""}
</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"EW"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"Emily Wang"}</div>
                    <div className={"role"}>{"Data Analyst"}</div>
                  </div>
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
            <div className={"eyebrow"}>{"Explore more"}</div>
            <h2>{"Related products you may like."}</h2>
            <p className={"intro"}>{"More AI tools built around the same idea: describe what you need, get a usable result."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"related-grid"}>
              <a className={"related-card"} href={"/tools/excel-formula-generator"}>
                <div className={"glyph"}>{"ƒ"}</div>
                <h4>{"Excel Formula Generator"}</h4>
                <p>{"Generate Excel formulas from plain English descriptions."}</p>
                <span className={"link"}>{"Try now →"}</span>
              </a>
              <a className={"related-card"} href={"/tools/ai-pandas-code-generator"}>
                <div className={"glyph"}>{"🐼"}</div>
                <h4>{"AI Pandas Code Generator"}</h4>
                <p>{"Generate Python Pandas code for data analysis."}</p>
                <span className={"link"}>{"Try now →"}</span>
              </a>
              <a className={"related-card"} href={"/tools/ai-chatbot"}>
                <div className={"glyph"}>{"∞"}</div>
                <h4>{"AI Chatbot"}</h4>
                <p>{"Conversational assistant for your data and questions."}</p>
                <span className={"link"}>{"Try now →"}</span>
              </a>
              <a className={"related-card"} href={"/tools/sentiment-analysis"}>
                <div className={"glyph"}>{"±"}</div>
                <h4>{"Sentiment Analysis"}</h4>
                <p>{"Classify text by sentiment in bulk — positive, negative, neutral."}</p>
                <span className={"link"}>{"Try now →"}</span>
              </a>
              <a className={"related-card"} href={"/tools/bank-statement-converter"}>
                <div className={"glyph"}>{"§"}</div>
                <h4>{"Bank Statement Converter"}</h4>
                <p>{"Parse PDF statements into clean, analysis-ready tables."}</p>
                <span className={"link"}>{"Try now →"}</span>
              </a>
              <a className={"related-card"} href={"/tools/ai-qa-generator"}>
                <div className={"glyph"}>{"?"}</div>
                <h4>{"AI Q&A Generator"}</h4>
                <p>{"Bulk Q&A for docs, FAQs, and knowledge bases."}</p>
                <span className={"link"}>{"Try now →"}</span>
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
            <div className={"eyebrow"}>{"FAQ"}</div>
            <h2>{"Frequently asked questions."}</h2>
            <p className={"intro"}>{"Common questions about the AI DAX Code Generator."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"faq-list"}>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"What is an AI DAX Code Generator?"}</summary>
                <div className={"faq-a"}>{"A tool that converts plain English instructions into DAX expressions."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is Formula Byte's DAX generator free?"}</summary>
                <div className={"faq-a"}>{"Yes, free access is available with optional upgrades."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Does it work only with Power BI?"}</summary>
                <div className={"faq-a"}>{"Yes, it's designed specifically for Power BI DAX."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Can AI fix my DAX errors?"}</summary>
                <div className={"faq-a"}>{"Yes, it helps reduce syntax and logic errors."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Can beginners use this tool?"}</summary>
                <div className={"faq-a"}>{"Yes, no advanced DAX knowledge is required."}</div>
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
            {"Stop struggling with "}
            <span className={"accent"}>{"DAX formulas."}</span>
          </h2>
          <p>{"Generate accurate Power BI DAX code using AI — fast, clean, and reliable."}</p>
          <div className={"btn-row"}>
            <a href="https://dashboard.formulabyte.com/" className={"btn btn-primary btn-lg"}>{"👉 Start Free with Formula Byte"}</a>
            <a href={"/tools"} className={"btn btn-outline btn-lg"}>{"Browse all tools"}</a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}