'use client';

import React, { useState } from 'react';

export default function AIRCodeGeneratorPage() {
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
        <div className="eyebrow">AI R Code Generator – Write R Code Free Online</div>
        <h1>
          AI R Code Generator – Write
          <span className="accent"> R Scripts Instantly</span>
        </h1>
        <p className="lede">Generate R code instantly using AI. No syntax errors. No guessing functions. Just clean, ready-to-run R scripts for data analysis and statistics. Describe what you want to do in R and let Formula Byte generate the exact code in seconds. Start free. Generate R code instantly.</p>
        <div className="hero-trust">
          <span className="trust-pill">
            <span className="dot"></span>
            No syntax errors
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            No guessing functions
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            Just ready-to-run code
          </span>
        </div>
        <div className="prompt-card">
          <div className="prompt-input">
            <textarea
              className="prompt-textarea"
              placeholder="Describe your task in plain English and let Formula Byte generate the exact R code for you."
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
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Data manipulation with dplyr</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Create statistical plots</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Run regression analysis</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Clean and transform data</button>
        </div>
      </div>
    </section>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"row"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Generate R Code Using AI"}</div>
            <h2>
              {"Writing R code "}
              <span className={"serif-accent"}>{"for analysis, modeling, or visualization can be slow and confusing."}</span>
            </h2>
          </div>
          <div className={"row-body"}>
            <p className={"intro"}>{"The AI R Code Generator understands R syntax, libraries, and statistical logic — not just code patterns. Whether you need to generate R code automatically, use an AI R code generator free, or write data analysis scripts faster, Formula Byte delivers reliable R code every time."}</p>
            <ul className={"bulleted"}>
              <li><strong>{"Generate R code automatically"}</strong></li>
              <li><strong>{"Use an AI R code generator free"}</strong></li>
              <li><strong>{"Write data analysis scripts faster"}</strong></li>
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
              {"Why Writing R Code "}
              <span className={"serif-accent"}>{"Manually Is Difficult"}</span>
            </h2>
            <p className={"intro"}>{"Manual R coding often leads to syntax and package errors. Incorrect data manipulation. Time wasted debugging scripts. Even experienced R users lose time fixing small issues. AI removes friction from R programming."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Syntax and package errors"}</li>
              <li>{"Incorrect data manipulation"}</li>
              <li>{"Time wasted debugging scripts"}</li>
              <li>{"Rewriting similar analysis code"}</li>
            </ul>
            <p className={"audience-footer"}>
              {"Even experienced R users lose time fixing small issues. AI removes friction from R programming."}
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
            <h2>{"How the AI R Code Generator Works"}</h2>
            <p className={"intro"}>{"Four steps from describing your task to getting clean R code. No memorizing functions. No trial-and-error loops."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"steps"}>
              <div className={"step"}>
                <div className={"step-num"}>{"1"}</div>
                <div>
                  <h3>{"Describe your task in plain English"}</h3>
                  <p>{"Tell the AI what you want to do — manipulate data, run statistics, create plots, or build models."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"2"}</div>
                <div>
                  <h3>{"AI understands the analysis or modeling logic"}</h3>
                  <p>{"The model analyzes your description and determines the right R functions and packages."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"3"}</div>
                <div>
                  <h3>{"Clean R code is generated instantly"}</h3>
                  <p>{"Get syntactically perfect R code with proper libraries and logic in seconds."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"4"}</div>
                <div>
                  <h3>{"Copy and run the code in your R environment"}</h3>
                  <p>{"Your R code is ready immediately. Works in RStudio, scripts, and notebooks."}</p>
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
            <h2>{"What the AI R Code Generator Actually Does"}</h2>
            <p className={"intro"}>{"This is not a generic code snippet tool. The AI works as an R-focused data science engine."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"capability-grid"}>
              <div className={"capability"}>
                <span className={"cap-num"}>{"01"}</span>
                <h3>{"Data Manipulation & Cleaning"}</h3>
                <p>{"Generates R code for filtering, transforming, and preparing datasets."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"02"}</span>
                <h3>{"Statistical Analysis Code"}</h3>
                <p>{"Creates scripts for descriptive statistics, hypothesis testing, and summaries."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"03"}</span>
                <h3>{"Data Visualization"}</h3>
                <p>{"Builds R code for plots, charts, and visual analysis using standard libraries."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"04"}</span>
                <h3>{"Modeling & Analysis Logic"}</h3>
                <p>{"Supports regression, classification, and basic modeling workflows."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"05"}</span>
                <h3>{"R-Ready Script Output"}</h3>
                <p>{"Code is readable, structured, and ready to run without edits."}</p>
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
            <h2>{"What You Get with the AI R Code Generator"}</h2>
            <p className={"intro"}>{"Experience the full benefits of AI-powered R code generation."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"benefits-strip"}>
              <div className={"benefit-item"}>
                <h4>{"Accurate R scripts"}</h4>
                <p>{"Logic-correct and syntax-safe code"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Faster analysis workflows"}</h4>
                <p>{"Reduce hours of coding to seconds"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Beginner-friendly usage"}</h4>
                <p>{"No advanced R expertise required"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Advanced flexibility"}</h4>
                <p>{"Supports simple scripts and complex analysis tasks"}</p>
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
            <h2>{"Who Should Use an AI R Code Generator"}</h2>
            <p className={"intro"}>{"If R coding slows you down, this tool speeds you up."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Data analysts"}</li>
              <li>{"Data scientists"}</li>
              <li>{"Students learning R"}</li>
              <li>{"Researchers and statisticians"}</li>
              <li>{"Teams working with data analysis"}</li>
            </ul>
            <p className={"audience-footer"}>
              {"If R coding slows you down, this tool speeds you up."}
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
            <h2>{"Why This AI R Code Generator Is Different"}</h2>
            <p className={"intro"}>{"Basic R code tools versus AI-powered R code generation."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"compare"}>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"Basic R code tools"}</div>
                <h3>{"Generic. Limited."}</h3>
                <ul>
                  <li>{"Generate generic snippets"}</li>
                  <li>{"Miss statistical context"}</li>
                  <li>{"Require heavy editing"}</li>
                </ul>
              </div>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"This AI"}</div>
                <h3>{"Smart. Analysis-aware."}</h3>
                <ul>
                  <li>{"Understands analysis intent"}</li>
                  <li>{"Generates task-specific R code"}</li>
                  <li>{"Reduces syntax and logic errors"}</li>
                  <li>{"This is not autocomplete — it's R intelligence"}</li>
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
              {"Free AI R Code Generator – What "}
              <span className={"serif-accent"}>{"Free"}</span>
              {" Means"}
            </h2>
            <p className={"intro"}>{"You can use the AI R Code Generator for free and test output quality."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>
                <strong>{"Generate R code"}</strong>
              </li>
              <li>
                <strong>{"Review scripts"}</strong>
              </li>
              <li>
                <strong>{"Try multiple analysis tasks"}</strong>
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
                  <div className={"stat-label"}>{"Scripts"}</div>
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
                <span>{"No manual code review"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"03"}</span>
                <span>{"Secure AI processing"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"04"}</span>
                <span>{"Safe for academic and business use - Your data stays private"}</span>
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
              <a className={"related-card"} href={"/tools/ai-sql-query-generator"}>
                <div className={"glyph"}>{"SQL"}</div>
                <h4>{"AI SQL Query Generator"}</h4>
                <p>{"Generate accurate SQL queries using AI."}</p>
                <span className={"link"}>{"Try now →"}</span>
              </a>
              <a className={"related-card"} href={"/tools/m-code-ai"}>
                <div className={"glyph"}>{"M"}</div>
                <h4>{"M Code Generator"}</h4>
                <p>{"Generate Power Query M code instantly using AI."}</p>
                <span className={"link"}>{"Try now →"}</span>
              </a>
              <a className={"related-card"} href={"/tools/ai-dax-generator"}>
                <div className={"glyph"}>{"λ"}</div>
                <h4>{"AI DAX Generator"}</h4>
                <p>{"Power BI and DAX code from plain English descriptions."}</p>
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
            <p className={"intro"}>{"Common questions about the AI R Code Generator."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"faq-list"}>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"What is an AI R Code Generator?"}</summary>
                <div className={"faq-a"}>{"A tool that generates R code from plain English instructions."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is the AI R Code Generator free?"}</summary>
                <div className={"faq-a"}>{"Yes, free access is available."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Can it handle data analysis and statistics?"}</summary>
                <div className={"faq-a"}>{"Yes, it supports analysis, visualization, and modeling."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is this suitable for beginners?"}</summary>
                <div className={"faq-a"}>{"Yes, no prior R knowledge is required."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Can I use the R code in production or research?"}</summary>
                <div className={"faq-a"}>{"Yes, the generated code is clean and ready to run."}</div>
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
            {"Stop writing "}
            <span className={"accent"}>{"R code manually."}</span>
          </h2>
          <p>{"Generate accurate R scripts instantly using AI — fast, clean, and free to try."}</p>
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
