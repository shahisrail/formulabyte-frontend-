'use client';

import React, { useState } from 'react';

export default function ExcelFormulaGeneratorPage() {
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
        <div className="eyebrow">AI Excel Formula Generator</div>
        <h1>
          AI Excel Formula Generator –
          <span className="accent">Create Excel Formulas Instantly</span>
        </h1>
        <p className="lede">Create Excel formulas instantly using AI. No syntax errors. No guesswork. Just accurate, ready-to-use Excel formulas. Describe what you want to calculate in plain English and let Formula Byte generate the exact Excel formula for you. Start free. Get formulas in seconds.</p>
        <div className="hero-trust">
          <span className="trust-pill">
            <span className="dot"></span>
            No syntax errors
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            No guesswork
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            Just accurate formulas
          </span>
        </div>
        <div className="prompt-card">
          <div className="prompt-input">
            <textarea
              className="prompt-textarea"
              placeholder="Describe what you want to calculate in plain English and let Formula Byte generate the exact Excel formula for you."
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
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>SUM if greater than 100</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>COUNTIF between dates</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>VLOOKUP with multiple criteria</button>
          <button className={"chip"}>{"VLOOKUP with multiple criteria"}</button>
        </div>
      </div>
    </section>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"row"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Generate Excel Formulas Using AI"}</div>
            <h2>
              {"Writing Excel formulas can be confusing "}
              <span className={"serif-accent"}>{"— especially when functions become nested or complex."}</span>
            </h2>
          </div>
          <div className={"row-body"}>
            <p className={"intro"}>{"The AI Excel Formula Generator understands logic, not just syntax. Formula Byte delivers accurate Excel formulas every time."}</p>
            <ul className={"bulleted"}>
              <li><strong>{"Generate Excel formulas automatically"}</strong></li>
              <li><strong>{"Use an AI Excel formula generator free"}</strong></li>
              <li><strong>{"Build complex Excel formulas without errors"}</strong></li>
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
              {"Why manual Excel formula writing "}
              <span className={"serif-accent"}>{"fails."}</span>
            </h2>
            <p className={"intro"}>{"Excel formulas break easily. Common problems include syntax errors, incorrect function nesting, wrong cell references, and broken formulas after updates. Manual trial-and-error wastes time and causes mistakes. AI removes formula guesswork completely."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Syntax errors that break calculations"}</li>
              <li>{"Incorrect function nesting"}</li>
              <li>{"Wrong cell references"}</li>
              <li>{"Broken formulas after updates"}</li>
              <li>{"Manual trial-and-error wastes time and causes mistakes"}</li>
            </ul>
            <blockquote className={"pull-quote"}>
              {" \"I wasted 4 hours fixing spreadsheet formulas yesterday.\" "}
              <cite>{"— Finance Manager, Fortune 500 Company"}</cite>
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
            <h2>{"No memorization. No debugging. No frustration."}</h2>
            <p className={"intro"}>{"Four steps from describing your calculation to getting a perfect Excel formula. No memorization. No debugging. No frustration."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"steps"}>
              <div className={"step"}>
                <div className={"step-num"}>{"1"}</div>
                <div>
                  <h3>{"Describe your calculation in plain English"}</h3>
                  <p>{"Tell the AI what you want to calculate — sums, averages, lookups, or complex logic."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"2"}</div>
                <div>
                  <h3>{"AI understands the logic and required Excel functions"}</h3>
                  <p>{"The model analyzes your description and determines the right functions and structure."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"3"}</div>
                <div>
                  <h3>{"A correct Excel formula is generated instantly"}</h3>
                  <p>{"Get a syntactically perfect formula with proper nesting and references in seconds."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"4"}</div>
                <div>
                  <h3>{"Copy and paste directly into Excel or Sheets"}</h3>
                  <p>{"Your formula is ready immediately. Works perfectly in both Excel and Google Sheets."}</p>
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
            <h2>{"What the AI Excel Formula Generator actually does."}</h2>
            <p className={"intro"}>{"This is not a basic formula suggestion tool. The AI works across multiple Excel logic layers."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"capability-grid"}>
              <div className={"capability"}>
                <span className={"cap-num"}>{"01"}</span>
                <h3>{"Natural Language to Excel Formula Conversion"}</h3>
                <p>{"Write what you want in simple words. The AI converts it into the correct Excel formula."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"02"}</span>
                <h3>{"Function Selection & Nesting Logic"}</h3>
                <p>{"The AI automatically selects the right Excel functions and nests them correctly when needed."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"03"}</span>
                <h3>{"Error-Free Syntax Generation"}</h3>
                <p>{"Formulas are generated with proper syntax, parentheses, and separators — no manual fixes required."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"04"}</span>
                <h3>{"Dynamic Cell Reference Handling"}</h3>
                <p>{"The AI adapts formulas based on your cell ranges, rows, and columns."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"05"}</span>
                <h3>{"Complex Formula Generation"}</h3>
                <p>{"Supports advanced logic including IF statements, LOOKUPs, text functions, math, and date calculations."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"06"}</span>
                <h3>{"Excel-Ready Output"}</h3>
                <p>{"Generated formulas are ready to use immediately — no editing or formatting needed."}</p>
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
            <h2>{"What You Get When You Generate Excel Formulas"}</h2>
            <p className={"intro"}>{"Experience the full benefits of AI-powered formula generation."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"benefits-strip"}>
              <div className={"benefit-item"}>
                <h4>{"Accurate Excel formulas"}</h4>
                <p>{"Every formula is logically correct and syntactically valid"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Time savings"}</h4>
                <p>{"What takes minutes or hours manually is done in seconds"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Beginner-friendly workflow"}</h4>
                <p>{"No Excel expertise required"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Advanced support"}</h4>
                <p>{"Works for both simple and complex Excel calculations"}</p>
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
            <h2>{"Who Should Use This Excel Formula Generator"}</h2>
            <p className={"intro"}>{"If you work in Excel, this tool saves time and prevents errors."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Beginners learning Excel formulas"}</li>
              <li>{"Business users working with spreadsheets"}</li>
              <li>{"Analysts building reports and dashboards"}</li>
              <li>{"Accountants and finance professionals"}</li>
              <li>{"Anyone tired of fixing broken formulas"}</li>
            </ul>
            <p className={"audience-footer"}>
              {"If you work in Excel, this tool saves time and prevents errors."}
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
            <h2>{"Why Formula Byte Is Better Than Other Excel Formula Generators"}</h2>
            <p className={"intro"}>{"Most Excel formula generators fail where it matters. Here's the difference."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"compare"}>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"Other generators"}</div>
                <h3>{"Limited. Basic."}</h3>
                <ul>
                  <li>{"Suggest partial formulas"}</li>
                  <li>{"Fail on complex logic"}</li>
                  <li>{"Require manual correction"}</li>
                </ul>
              </div>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"Formula Byte AI"}</div>
                <h3>{"Complete. Intelligent."}</h3>
                <ul>
                  <li>{"Understands calculation intent"}</li>
                  <li>{"Generates complete formulas"}</li>
                  <li>{"Eliminates syntax and logic errors"}</li>
                  <li>{"This is not autocomplete — it's formula intelligence"}</li>
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
              {"Free AI Excel Formula Generator – What "}
              <span className={"serif-accent"}>{"Free"}</span>
              {" Means"}
            </h2>
            <p className={"intro"}>{"You can use the Excel formula generator for free and test accuracy instantly."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>
                <strong>{"Generate Excel formulas"}</strong>
              </li>
              <li>
                <strong>{"Review correctness"}</strong>
              </li>
              <li>
                <strong>{"Test simple and complex logic"}</strong>
              </li>
              <li>
                <strong>{"Upgrade only if you need higher usage limits or advanced workflows"}</strong>
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
                  <div className={"stat-num"}>{"100k+"}</div>
                  <div className={"stat-label"}>{"Formulas"}</div>
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
                <span>{"No spreadsheet data stored"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"02"}</span>
                <span>{"Works with Microsoft Excel"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"03"}</span>
                <span>{"Compatible with Google Sheets"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"04"}</span>
                <span>{"Safe and secure usage - Your data stays private"}</span>
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
            <p className={"intro"}>{"Excel users who have stopped struggling with formulas."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"reviews"}>
              <div className={"review"}>
                <div className={"review-stars"}>{"★★★★★"}</div>
                <p className={"review-quote"}>{"\"Finally I can create complex formulas without spending hours debugging. This tool understands exactly what I need.\""}
</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"DJ"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"David Johnson"}</div>
                    <div className={"role"}>{"Financial Analyst"}</div>
                  </div>
                </div>
              </div>
              <div className={"review"}>
                <div className={"review-stars"}>{"★★★★★"}</div>
                <p className={"review-quote"}>{"\"As someone new to Excel, this tool is a lifesaver. No more memorizing complex syntax — just describe what I want and get the formula.\""}
</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"SM"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"Sarah Martinez"}</div>
                    <div className={"role"}>{"Business Manager"}</div>
                  </div>
                </div>
              </div>
              <div className={"review"}>
                <div className={"review-stars"}>{"★★★★★"}</div>
                <p className={"review-quote"}>{"\"Incredibly accurate even for nested formulas. What used to take me 30 minutes now takes 30 seconds. Absolutely essential tool.\""}
</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"RP"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"Robert Park"}</div>
                    <div className={"role"}>{"Data Scientist"}</div>
                  </div>
                </div>
              </div>
              <div className={"review"}>
                <div className={"review-stars"}>{"★★★★★"}</div>
                <p className={"review-quote"}>{"\"Works perfectly with both Excel and Google Sheets. The AI generates clean, error-free formulas every single time.\""}
</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"EW"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"Emily Watson"}</div>
                    <div className={"role"}>{"Operations Lead"}</div>
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
              <a className={"related-card"} href={"/excel-spreadsheet-generator"}>
                <div className={"glyph"}>{"📊"}</div>
                <h4>{"Excel Spreadsheet Generator"}</h4>
                <p>{"Create complete Excel files from text descriptions."}</p>
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
              <a className={"related-card"} href={"/tools/ai-dax-generator"}>
                <div className={"glyph"}>{"λ"}</div>
                <h4>{"AI DAX Generator"}</h4>
                <p>{"Power BI and DAX code from plain English descriptions."}</p>
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
            <p className={"intro"}>{"Common questions about the AI Excel Formula Generator."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"faq-list"}>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is there an AI Excel formula generator?"}</summary>
                <div className={"faq-a"}>{"Yes, Formula Byte provides an AI-powered Excel formula generator."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is the Excel formula generator good for beginners?"}</summary>
                <div className={"faq-a"}>{"Yes, no Excel knowledge is required."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Can it generate complex Excel formulas?"}</summary>
                <div className={"faq-a"}>{"Yes, including nested and advanced formulas."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Does it work with Google Sheets?"}</summary>
                <div className={"faq-a"}>{"Yes, formulas are compatible with Sheets."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is the AI Excel formula generator free?"}</summary>
                <div className={"faq-a"}>{"Yes, free access is available with optional upgrades."}</div>
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
            {"Stop guessing "}
            <span className={"accent"}>{"Excel formulas."}</span>
          </h2>
          <p>{"Generate accurate Excel formulas using AI — fast, simple, and error-free."}</p>
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