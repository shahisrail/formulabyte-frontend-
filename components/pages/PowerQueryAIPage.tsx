'use client';

import React, { useState } from 'react';

export default function PowerQueryAIPage() {
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
        <div className="eyebrow">Power Query AI – Transform Data Free & Faster</div>
        <h1>
          Power Query AI – Clean and
          <span className="accent"> Transform Data Instantly</span>
        </h1>
        <p className="lede">Clean, transform, and combine data using Power Query with AI. No complex steps. No broken transformations. Just fast, accurate data preparation. Describe your data task and let Formula Byte generate Power Query steps instantly. Start free. Transform data faster.</p>
        <div className="hero-trust">
          <span className="trust-pill">
            <span className="dot"></span>
            No complex steps
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            No broken transformations
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            Just fast data prep
          </span>
        </div>
        <div className="prompt-card">
          <div className="prompt-input">
            <textarea
              className="prompt-textarea"
              placeholder="Describe your data task in plain English and let Formula Byte generate Power Query steps for you."
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
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Remove duplicates and clean</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Merge multiple tables</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Pivot and unpivot columns</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Split and transform text</button>
        </div>
      </div>
    </section>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"row"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Use Power Query with AI for Data Transformation"}</div>
            <h2>
              {"Power Query is powerful"}
              <span className={"serif-accent"}>{"—but building queries manually takes time and experience."}</span>
            </h2>
          </div>
          <div className={"row-body"}>
            <p className={"intro"}>{"Power Query AI understands data transformation logic, not just menu clicks. Whether you need to clean messy Excel data, combine multiple files or tables, or use Power Query automation for free, this tool delivers clean, repeatable results every time."}</p>
            <ul className={"bulleted"}>
              <li><strong>{"Clean messy Excel data"}</strong></li>
              <li><strong>{"Combine multiple files or tables"}</strong></li>
              <li><strong>{"Use Power Query automation for free"}</strong></li>
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
              {"Why Manual Power Query "}
              <span className={"serif-accent"}>{"Work Slows You Down"}</span>
            </h2>
            <p className={"intro"}>{"Manual Power Query work often causes long step-by-step trial and error. Confusing M code and broken refreshes. Even experienced users lose time fixing transformations. AI removes complexity from data preparation."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Long step-by-step trial and error"}</li>
              <li>{"Confusing M code"}</li>
              <li>{"Broken refreshes"}</li>
              <li>{"Repeating the same transformations"}</li>
            </ul>
            <p className={"audience-footer"}>
              {"Even experienced users lose time fixing transformations. AI removes complexity from data preparation."}
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
            <h2>{"How Power Query AI Works"}</h2>
            <p className={"intro"}>{"Four steps from describing your data problem to applying clean transformations. No guessing. No rewriting steps. No confusion."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"steps"}>
              <div className={"step"}>
                <div className={"step-num"}>{"1"}</div>
                <div>
                  <h3>{"Describe your data problem in plain English"}</h3>
                  <p>{"Tell the AI what you need — clean data, merge tables, transform columns, or prepare for analysis."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"2"}</div>
                <div>
                  <h3>{"AI understands Power Query logic and transformations"}</h3>
                  <p>{"The model analyzes your description and determines the right steps and M code structure."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"3"}</div>
                <div>
                  <h3>{"Power Query steps or M logic are generated"}</h3>
                  <p>{"Get clear, transformation-ready steps or M code in seconds."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"4"}</div>
                <div>
                  <h3>{"Apply and refresh your data instantly"}</h3>
                  <p>{"Your transformation is ready immediately. Works in Excel Power Query and Power BI."}</p>
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
            <h2>{"What Power Query AI Actually Does"}</h2>
            <p className={"intro"}>{"This is not a basic tutorial tool. The AI works as a Power Query transformation engine."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"capability-grid"}>
              <div className={"capability"}>
                <span className={"cap-num"}>{"01"}</span>
                <h3>{"Data Cleaning Automation"}</h3>
                <p>{"Removes duplicates, fixes formats, trims text, and standardizes values."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"02"}</span>
                <h3>{"Merge & Append Queries"}</h3>
                <p>{"Generates logic to combine multiple files, tables, or sheets correctly."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"03"}</span>
                <h3>{"Column Transformation Logic"}</h3>
                <p>{"Creates steps for split, replace, pivot, unpivot, and calculations."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"04"}</span>
                <h3>{"Refresh-Safe Query Design"}</h3>
                <p>{"Builds transformations that refresh cleanly without breaking."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"05"}</span>
                <h3>{"Power Query-Ready Output"}</h3>
                <p>{"Steps and logic are ready to apply in Excel or Power BI."}</p>
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
            <h2>{"What You Get with Power Query AI"}</h2>
            <p className={"intro"}>{"Experience the full benefits of AI-powered Power Query transformations."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"benefits-strip"}>
              <div className={"benefit-item"}>
                <h4>{"Clean, structured data"}</h4>
                <p>{"Reliable outputs ready for analysis"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Faster data prep"}</h4>
                <p>{"Reduce hours of manual steps to seconds"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Repeatable workflows"}</h4>
                <p>{"Refresh data without rebuilding queries"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Beginner-friendly usage"}</h4>
                <p>{"No deep Power Query expertise required"}</p>
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
            <h2>{"Who Should Use Power Query AI"}</h2>
            <p className={"intro"}>{"If data prep slows you down, this tool speeds you up."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Excel users"}</li>
              <li>{"Power BI analysts"}</li>
              <li>{"Data and reporting teams"}</li>
              <li>{"Finance and operations teams"}</li>
              <li>{"Anyone cleaning and combining data"}</li>
            </ul>
            <p className={"audience-footer"}>
              {"If data prep slows you down, this tool speeds you up."}
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
            <h2>{"Why This Power Query AI Is Different"}</h2>
            <p className={"intro"}>{"Manual Power Query work versus AI-powered transformations."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"compare"}>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"Manual Power Query work"}</div>
                <h3>{"Slow. Fragile."}</h3>
                <ul>
                  <li>{"Requires trial and error"}</li>
                  <li>{"Breaks easily"}</li>
                  <li>{"Is hard to reuse"}</li>
                </ul>
              </div>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"This AI"}</div>
                <h3>{"Smart. Reliable."}</h3>
                <ul>
                  <li>{"Understands transformation intent"}</li>
                  <li>{"Generates clean logic"}</li>
                  <li>{"Reduces errors and rework"}</li>
                  <li>{"This is not automation by clicks — it's data-prep intelligence"}</li>
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
              {"Free Power Query AI – What "}
              <span className={"serif-accent"}>{"Free"}</span>
              {" Means"}
            </h2>
            <p className={"intro"}>{"You can use Power Query AI for free to test transformations."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>
                <strong>{"Generate Power Query logic"}</strong>
              </li>
              <li>
                <strong>{"Clean and combine data"}</strong>
              </li>
              <li>
                <strong>{"Test multiple transformations"}</strong>
              </li>
              <li>
                <strong>{"Upgrade only if you need higher usage limits or advanced automation"}</strong>
              </li>
            </ul>
            <div className={"free-block"}>
              <div>
                <h3>{"Start transforming in seconds."}</h3>
                <p>{"No card. No download. Just a prompt."}</p>
              </div>
              <div className={"stats-inline"}>
                <div className={"stat-inline"}>
                  <div className={"stat-num"}>{"5k+"}</div>
                  <div className={"stat-label"}>{"Users"}</div>
                </div>
                <div className={"stat-inline"}>
                  <div className={"stat-num"}>{"100k+"}</div>
                  <div className={"stat-label"}>{"Queries"}</div>
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
                <span>{"No datasets stored permanently"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"02"}</span>
                <span>{"No manual data review"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"03"}</span>
                <span>{"Secure AI processing"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"04"}</span>
                <span>{"Safe for business use - Your data stays private"}</span>
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
              <a className={"related-card"} href={"/tools/m-code-ai"}>
                <div className={"glyph"}>{"M"}</div>
                <h4>{"M Code Generator"}</h4>
                <p>{"Generate Power Query M code instantly using AI."}</p>
                <span className={"link"}>{"Try now →"}</span>
              </a>
              <a className={"related-card"} href={"/tools/excel-formula-generator"}>
                <div className={"glyph"}>fx</div>
                <h4>{"Excel Formula Generator"}</h4>
                <p>{"Create Excel formulas instantly using AI."}</p>
                <span className={"link"}>{"Try now →"}</span>
              </a>
              <a className={"related-card"} href={"/tools/ai-pandas-code-generator"}>
                <div className={"glyph"}>{"🐼"}</div>
                <h4>{"AI Pandas Code Generator"}</h4>
                <p>{"Generate clean Python Pandas code using AI."}</p>
                <span className={"link"}>{"Try now →"}</span>
              </a>
              <a className={"related-card"} href={"/tools/ai-dax-generator"}>
                <div className={"glyph"}>{"λ"}</div>
                <h4>{"AI DAX Generator"}</h4>
                <p>{"Power BI and DAX code from plain English descriptions."}</p>
                <span className={"link"}>{"Try now →"}</span>
              </a>
              <a className={"related-card"} href={"/tools/ai-sql-query-generator"}>
                <div className={"glyph"}>{"SQL"}</div>
                <h4>{"AI SQL Query Generator"}</h4>
                <p>{"Generate accurate SQL queries using AI."}</p>
                <span className={"link"}>{"Try now →"}</span>
              </a>
              <a className={"related-card"} href={"/tools/ai-chatbot"}>
                <div className={"glyph"}>{"∞"}</div>
                <h4>{"AI Chatbot"}</h4>
                <p>{"Conversational assistant for your data and questions."}</p>
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
            <p className={"intro"}>{"Common questions about Power Query AI."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"faq-list"}>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"What is Power Query AI?"}</summary>
                <div className={"faq-a"}>{"A tool that uses AI to generate Power Query data transformation logic."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is Power Query AI free?"}</summary>
                <div className={"faq-a"}>{"Yes, free access is available."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Does it work with Excel and Power BI?"}</summary>
                <div className={"faq-a"}>{"Yes, it supports both."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Can beginners use this tool?"}</summary>
                <div className={"faq-a"}>{"Yes, no Power Query experience is required."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Are the transformations refresh-safe?"}</summary>
                <div className={"faq-a"}>{"Yes, queries are designed for repeatable refresh."}</div>
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
            <span className={"accent"}>{"Power Query steps."}</span>
          </h2>
          <p>{"Clean and transform data faster using AI — simple, accurate, and free to try."}</p>
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
