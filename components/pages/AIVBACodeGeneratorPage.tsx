'use client';

import React, { useState } from 'react';

export default function AIVBACodeGeneratorPage() {
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
        <div className="eyebrow">AI VBA Code Generator – Write Excel VBA Free</div>
        <h1>
          AI VBA Code Generator – Create Excel
          <span className="accent"> VBA Macros Instantly</span>
        </h1>
        <p className="lede">Generate Excel VBA code instantly using AI. No syntax errors. No complex debugging. Just clean, ready-to-use VBA macros for Excel automation. Describe what you want to automate and let Formula Byte generate the exact VBA code in seconds. Start free. Generate VBA code instantly.</p>
        <div className="hero-trust">
          <span className="trust-pill">
            <span className="dot"></span>
            No syntax errors
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            No complex debugging
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            Just ready-to-use macros
          </span>
        </div>
        <div className="prompt-card">
          <div className="prompt-input">
            <textarea
              className="prompt-textarea"
              placeholder="Describe your Excel task in plain English and let Formula Byte generate the exact VBA code for you."
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
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Auto-format worksheets</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Create automated reports</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Loop through data</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Add button automation</button>
        </div>
      </div>
    </section>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"row"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Generate Excel VBA Code Using AI"}</div>
            <h2>
              {"Writing VBA macros manually "}
              <span className={"serif-accent"}>{"can be slow and frustrating."}</span>
            </h2>
          </div>
          <div className={"row-body"}>
            <p className={"intro"}>{"The AI VBA Code Generator understands Excel automation logic — not just VBA syntax. Whether you need to generate Excel VBA macros, use an AI VBA code generator free, or automate repetitive Excel tasks, Formula Byte delivers reliable VBA code every time."}</p>
            <ul className={"bulleted"}>
              <li><strong>{"Generate Excel VBA macros"}</strong></li>
              <li><strong>{"Use an AI VBA code generator free"}</strong></li>
              <li><strong>{"Automate repetitive Excel tasks"}</strong></li>
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
              {"Why Writing VBA Code "}
              <span className={"serif-accent"}>{"Manually Is Difficult"}</span>
            </h2>
            <p className={"intro"}>{"Manual VBA development often leads to syntax and runtime errors. Time wasted debugging macros. Fear of breaking Excel files. Even experienced Excel users struggle with VBA. AI removes complexity from Excel automation."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Syntax and runtime errors"}</li>
              <li>{"Time wasted debugging macros"}</li>
              <li>{"Rewriting similar automation scripts"}</li>
              <li>{"Fear of breaking Excel files"}</li>
            </ul>
            <p className={"audience-footer"}>
              {"Even experienced Excel users struggle with VBA. AI removes complexity from Excel automation."}
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
            <h2>{"How the AI VBA Code Generator Works"}</h2>
            <p className={"intro"}>{"Four steps from describing your Excel task to getting clean VBA code. No memorizing VBA syntax. No trial-and-error."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"steps"}>
              <div className={"step"}>
                <div className={"step-num"}>{"1"}</div>
                <div>
                  <h3>{"Describe your Excel task in plain English"}</h3>
                  <p>{"Tell the AI what you want to automate — format data, create reports, process rows, or add buttons."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"2"}</div>
                <div>
                  <h3>{"AI understands the automation logic"}</h3>
                  <p>{"The model analyzes your description and determines the right VBA structure and Excel objects."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"3"}</div>
                <div>
                  <h3>{"Clean VBA code is generated instantly"}</h3>
                  <p>{"Get syntactically perfect VBA with proper logic and error handling in seconds."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"4"}</div>
                <div>
                  <h3>{"Copy and paste the code into Excel"}</h3>
                  <p>{"Your VBA macro is ready immediately. Works in Excel workbooks without manual fixes."}</p>
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
            <h2>{"What the AI VBA Code Generator Actually Does"}</h2>
            <p className={"intro"}>{"This is not a basic code snippet tool. The AI works as a VBA automation engine."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"capability-grid"}>
              <div className={"capability"}>
                <span className={"cap-num"}>{"01"}</span>
                <h3>{"Excel Macro Generation"}</h3>
                <p>{"Creates VBA macros to automate formatting, calculations, and workflows."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"02"}</span>
                <h3>{"Event-Based VBA Logic"}</h3>
                <p>{"Generates VBA for buttons, worksheets, and workbook events."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"03"}</span>
                <h3>{"Data Processing Automation"}</h3>
                <p>{"Builds VBA code for loops, conditions, and data manipulation."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"04"}</span>
                <h3>{"Error-Safe Code Structure"}</h3>
                <p>{"Produces clean, readable VBA with proper error handling logic."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"05"}</span>
                <h3>{"Excel-Ready VBA Output"}</h3>
                <p>{"Macros are ready to run inside Excel without manual fixes."}</p>
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
            <h2>{"What You Get with the AI VBA Code Generator"}</h2>
            <p className={"intro"}>{"Experience the full benefits of AI-powered VBA code generation."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"benefits-strip"}>
              <div className={"benefit-item"}>
                <h4>{"Error-free VBA macros"}</h4>
                <p>{"Clean and logically correct code"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Faster Excel automation"}</h4>
                <p>{"Turn hours of work into seconds"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Beginner-friendly usage"}</h4>
                <p>{"No advanced VBA knowledge required"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Advanced flexibility"}</h4>
                <p>{"Supports simple macros and complex automation"}</p>
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
            <h2>{"Who Should Use an AI VBA Code Generator"}</h2>
            <p className={"intro"}>{"If Excel automation matters to you, this tool saves time and effort."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Excel power users"}</li>
              <li>{"Accountants and finance teams"}</li>
              <li>{"Data analysts"}</li>
              <li>{"Operations and reporting teams"}</li>
              <li>{"Anyone automating Excel tasks"}</li>
            </ul>
            <p className={"audience-footer"}>
              {"If Excel automation matters to you, this tool saves time and effort."}
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
            <h2>{"Why This AI VBA Code Generator Is Different"}</h2>
            <p className={"intro"}>{"Basic VBA tools versus AI-powered VBA code generation."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"compare"}>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"Basic VBA tools"}</div>
                <h3>{"Generic. Limited."}</h3>
                <ul>
                  <li>{"Generate incomplete code"}</li>
                  <li>{"Require heavy editing"}</li>
                  <li>{"Miss automation logic"}</li>
                </ul>
              </div>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"This AI"}</div>
                <h3>{"Smart. Excel-aware."}</h3>
                <ul>
                  <li>{"Understands Excel workflows"}</li>
                  <li>{"Generates complete VBA macros"}</li>
                  <li>{"Reduces debugging and errors"}</li>
                  <li>{"This is not code autocomplete — it's Excel automation intelligence"}</li>
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
              {"Free AI VBA Code Generator – What "}
              <span className={"serif-accent"}>{"Free"}</span>
              {" Means"}
            </h2>
            <p className={"intro"}>{"You can use the AI VBA Code Generator for free and test code accuracy."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>
                <strong>{"Generate VBA macros"}</strong>
              </li>
              <li>
                <strong>{"Review and test code"}</strong>
              </li>
              <li>
                <strong>{"Try multiple automation tasks"}</strong>
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
                  <div className={"stat-label"}>{"Macros"}</div>
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
                <span>{"No Excel files stored permanently"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"02"}</span>
                <span>{"No manual review of macros"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"03"}</span>
                <span>{"Secure AI processing"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"04"}</span>
                <span>{"Safe for business and personal use - Your files and automation logic stay private"}</span>
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
              <a className={"related-card"} href={"/tools/ai-google-apps-script-generator"}>
                <div className={"glyph"}>{"📝"}</div>
                <h4>{"AI Google Apps Script Generator"}</h4>
                <p>{"Automate Google Workspace with AI."}</p>
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
            <p className={"intro"}>{"Common questions about the AI VBA Code Generator."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"faq-list"}>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"What is an AI VBA Code Generator?"}</summary>
                <div className={"faq-a"}>{"A tool that generates Excel VBA code from plain English instructions."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is the AI VBA Code Generator free?"}</summary>
                <div className={"faq-a"}>{"Yes, free access is available."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Can it automate Excel tasks?"}</summary>
                <div className={"faq-a"}>{"Yes, it creates macros for automation and workflows."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is this suitable for beginners?"}</summary>
                <div className={"faq-a"}>{"Yes, no VBA experience is required."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Can I use the VBA code in production files?"}</summary>
                <div className={"faq-a"}>{"Yes, the code is clean and ready to run."}</div>
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
            <span className={"accent"}>{"Excel VBA macros manually."}</span>
          </h2>
          <p>{"Generate accurate VBA code instantly using AI — fast, clean, and free to try."}</p>
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
