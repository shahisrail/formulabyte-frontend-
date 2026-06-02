'use client';

import React, { useState } from 'react';

export default function MCodeGeneratorPage() {
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
        <div className="eyebrow">M Code Generator – Write Power Query M Code Free</div>
        <h1>
          M Code Generator – Write Power Query
          <span className="accent"> M Code Instantly</span>
        </h1>
        <p className="lede">Generate Power Query M code instantly using AI. No complex syntax. No trial-and-error. Just clean, refresh-safe M code for data transformation. Describe your data task and let Formula Byte generate the exact M code in seconds. Start free. Generate M code instantly.</p>
        <div className="hero-trust">
          <span className="trust-pill">
            <span className="dot"></span>
            No complex syntax
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            No trial-and-error
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            Just clean M code
          </span>
        </div>
        <div className="prompt-card">
          <div className="prompt-input">
            <textarea
              className="prompt-textarea"
              placeholder="Describe your data transformation in plain English and let Formula Byte generate the exact M code for you."
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
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Remove duplicates and clean data</button>
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
            <div className={"eyebrow"}>{"Generate Power Query M Code Using AI"}</div>
            <h2>
              {"Writing M code manually "}
              <span className={"serif-accent"}>{"can be difficult and time-consuming."}</span>
            </h2>
          </div>
          <div className={"row-body"}>
            <p className={"intro"}>{"The AI M Code Generator understands Power Query logic — not just functions. Whether you need to generate M code automatically, use a free M code generator, or build complex Power Query transformations, this AI tool delivers accurate, reusable M code every time."}</p>
            <ul className={"bulleted"}>
              <li><strong>{"Generate M code automatically"}</strong></li>
              <li><strong>{"Use a free M code generator"}</strong></li>
              <li><strong>{"Build complex Power Query transformations"}</strong></li>
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
              {"Why Writing M Code Manually "}
              <span className={"serif-accent"}>{"Is Hard"}</span>
            </h2>
            <p className={"intro"}>{"Manual M coding often leads to syntax errors and broken steps. Queries that fail on refresh are common. Even experienced Power Query users lose time fixing M code issues. AI removes the complexity from M coding."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Syntax errors and broken steps"}</li>
              <li>{"Confusing transformations"}</li>
              <li>{"Queries that fail on refresh"}</li>
              <li>{"Rewriting the same logic repeatedly"}</li>
            </ul>
            <p className={"audience-footer"}>
              {"Even experienced Power Query users lose time fixing M code issues. AI removes the complexity from M coding."}
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
            <h2>{"How the M Code Generator Works"}</h2>
            <p className={"intro"}>{"Four steps from describing your data transformation to getting clean, refresh-safe M code. No guessing functions. No broken refreshes."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"steps"}>
              <div className={"step"}>
                <div className={"step-num"}>{"1"}</div>
                <div>
                  <h3>{"Describe your data transformation in plain English"}</h3>
                  <p>{"Tell the AI what you want to do — clean data, merge tables, transform columns, or prepare data for analysis."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"2"}</div>
                <div>
                  <h3>{"AI understands Power Query steps and logic"}</h3>
                  <p>{"The model analyzes your description and determines the right M code steps and structure."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"3"}</div>
                <div>
                  <h3>{"Clean M code is generated instantly"}</h3>
                  <p>{"Get syntactically perfect M code with proper steps, transformations, and logic in seconds."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"4"}</div>
                <div>
                  <h3>{"Copy and paste into Power Query (Excel or Power BI)"}</h3>
                  <p>{"Your M code is ready immediately. Works perfectly in both Excel Power Query and Power BI."}</p>
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
            <h2>{"What the M Code Generator Actually Does"}</h2>
            <p className={"intro"}>{"This is not a basic code suggester. The AI works as a Power Query M logic engine."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"capability-grid"}>
              <div className={"capability"}>
                <span className={"cap-num"}>{"01"}</span>
                <h3>{"Data Cleaning Logic"}</h3>
                <p>{"Generates M code to remove duplicates, change data types, trim text, and standardize values."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"02"}</span>
                <h3>{"Table Merge & Append"}</h3>
                <p>{"Creates correct M code for combining multiple tables or files."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"03"}</span>
                <h3>{"Column Transformations"}</h3>
                <p>{"Builds M logic for split, replace, pivot, unpivot, and calculated columns."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"04"}</span>
                <h3>{"Refresh-Safe Query Design"}</h3>
                <p>{"Ensures transformations refresh reliably without breaking."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"05"}</span>
                <h3>{"Power Query-Ready Output"}</h3>
                <p>{"M code is clean, readable, and ready to use."}</p>
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
            <h2>{"What You Get with the M Code Generator"}</h2>
            <p className={"intro"}>{"Experience the full benefits of AI-powered M code generation."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"benefits-strip"}>
              <div className={"benefit-item"}>
                <h4>{"Accurate M code"}</h4>
                <p>{"Logic-correct and syntax-safe scripts"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Faster data preparation"}</h4>
                <p>{"Turn hours of trial-and-error into seconds"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Reusable transformations"}</h4>
                <p>{"Apply the same logic across datasets"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Beginner-friendly usage"}</h4>
                <p>{"No deep M language knowledge required"}</p>
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
            <h2>{"Who Should Use an M Code Generator"}</h2>
            <p className={"intro"}>{"If M code slows you down, this tool speeds you up."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Excel Power Query users"}</li>
              <li>{"Power BI analysts"}</li>
              <li>{"Data and reporting teams"}</li>
              <li>{"Finance and operations teams"}</li>
              <li>{"Anyone cleaning and transforming data"}</li>
            </ul>
            <p className={"audience-footer"}>
              {"If M code slows you down, this tool speeds you up."}
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
            <h2>{"Why This M Code Generator Is Different"}</h2>
            <p className={"intro"}>{"Manual M coding versus AI-powered M code generation."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"compare"}>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"Manual M coding"}</div>
                <h3>{"Hard. Error-prone."}</h3>
                <ul>
                  <li>{"Is hard to debug"}</li>
                  <li>{"Breaks easily"}</li>
                  <li>{"Is difficult to reuse"}</li>
                </ul>
              </div>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"This AI"}</div>
                <h3>{"Smart. Reliable."}</h3>
                <ul>
                  <li>{"Understands transformation intent"}</li>
                  <li>{"Generates clean, refresh-safe M code"}</li>
                  <li>{"Reduces errors and rework"}</li>
                  <li>{"This is not copying steps — it's M code intelligence"}</li>
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
              {"Free M Code Generator – What "}
              <span className={"serif-accent"}>{"Free"}</span>
              {" Means"}
            </h2>
            <p className={"intro"}>{"You can use the M Code Generator for free and test output instantly."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>
                <strong>{"Generate M code"}</strong>
              </li>
              <li>
                <strong>{"Clean and transform data"}</strong>
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
              <a className={"related-card"} href={"/tools/ai-dax-generator"}>
                <div className={"glyph"}>{"λ"}</div>
                <h4>{"AI DAX Generator"}</h4>
                <p>{"Power BI and DAX code from plain English descriptions."}</p>
                <span className={"link"}>{"Try now →"}</span>
              </a>
              <a className={"related-card"} href={"/tools/excel-formula-generator"}>
                <div className={"glyph"}>fx</div>
                <h4>{"Excel Formula Generator"}</h4>
                <p>{"Create Excel formulas instantly using AI."}</p>
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
            <p className={"intro"}>{"Common questions about the M Code Generator."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"faq-list"}>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"What is M code?"}</summary>
                <div className={"faq-a"}>{"M code is the language used by Power Query in Excel and Power BI for data transformation."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is the M Code Generator free?"}</summary>
                <div className={"faq-a"}>{"Yes, free access is available."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Does it work with Excel and Power BI?"}</summary>
                <div className={"faq-a"}>{"Yes, generated M code works in both."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is this suitable for beginners?"}</summary>
                <div className={"faq-a"}>{"Yes, no prior M language knowledge is required."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Are the queries refresh-safe?"}</summary>
                <div className={"faq-a"}>{"Yes, the generated M code is designed for reliable refresh."}</div>
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
            <span className={"accent"}>{"Power Query M code."}</span>
          </h2>
          <p>{"Generate clean, refresh-safe M code instantly using AI — fast, accurate, and free to try."}</p>
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
