'use client';

import React, { useState } from 'react';

export default function AIExcelSpreadsheetGeneratorPage() {
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
      <link rel="stylesheet" href="/page-styles/excel-generator.css" />
    <section className="hero">
      <div className="hero-inner">
        <div className="eyebrow">AI Excel Spreadsheet Generator</div>
        <h1>
          AI Excel Spreadsheet Generator –
          <span className="accent">Create Excel Files Instantly</span>
        </h1>
        <p className="lede">Generate downloadable Excel spreadsheets instantly using AI. No formatting hassle. No formula confusion. Just ready-to-use Excel files built from text instructions. Describe what you need and let Formula Byte create a complete Excel spreadsheet for you. Start free. Download your spreadsheet in seconds.</p>
        <div className="hero-trust">
          <span className="trust-pill">
            <span className="dot"></span>
            No formatting hassle
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            No formula confusion
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            Just ready-to-use files
          </span>
        </div>
        <div className="prompt-card">
          <div className="prompt-input">
            <textarea
              className="prompt-textarea"
              placeholder="Describe what you need and let Formula Byte create a complete Excel spreadsheet for you."
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
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Monthly budget template</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Project tracking sheet</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Quarterly sales report</button>
        </div>
      </div>
    </section>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"row"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Generate Excel Spreadsheets Using AI"}</div>
            <h2>
              {"Building spreadsheets manually takes hours "}
              <span className={"serif-accent"}>{"of formatting, formulas, and trial-and-error."}</span>
            </h2>
          </div>
          <div className={"row-body"}>
            <p className={"intro"}>{"The AI Excel Spreadsheet Generator understands structure, logic, and use cases — not just cells. Formula Byte delivers clean, downloadable Excel files every time."}</p>
            <ul className={"bulleted"}>
              <li><strong>{"Create an AI Excel spreadsheet"}</strong></li>
              <li><strong>{"Use an AI spreadsheet generator free"}</strong></li>
              <li><strong>{"Generate Excel templates automatically"}</strong></li>
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
              {"Why creating spreadsheets from scratch "}
              <span className={"serif-accent"}>{"fails."}</span>
            </h2>
            <p className={"intro"}>{"Manual spreadsheet creation is slow and error-prone. Common problems include incorrect formulas, broken layouts, missing summaries or validations, and repeating the same setup every time. Formatting often takes longer than the actual work. AI removes spreadsheet busywork completely."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Incorrect formulas"}</li>
              <li>{"Broken layouts"}</li>
              <li>{"Missing summaries or validations"}</li>
              <li>{"Repeating the same setup every time"}</li>
              <li>{"Formatting often takes longer than the actual work"}</li>
            </ul>
            <blockquote className={"pull-quote"}>
              {" \"I wasted 4 hours fixing spreadsheet formulas yesterday. There has to be a better way.\" "}
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
            <h2>{"No dragging cells. No formula debugging. No setup."}</h2>
            <p className={"intro"}>{"Four steps from describing your spreadsheet to getting a working Excel file. No dragging cells. No formula debugging. No setup."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"steps"}>
              <div className={"step"}>
                <div className={"step-num"}>{"1"}</div>
                <div>
                  <h3>{"Describe your spreadsheet in plain English"}</h3>
                  <p>{"Tell the AI what you need — budgets, reports, trackers, schedules, or any other spreadsheet type."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"2"}</div>
                <div>
                  <h3>{"AI understands structure, formulas, and layout"}</h3>
                  <p>{"The model analyzes your description and creates the right structure with appropriate formulas and formatting."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"3"}</div>
                <div>
                  <h3>{"A complete Excel file is generated instantly"}</h3>
                  <p>{"Get a professional spreadsheet with correct formulas, clean layout, and proper formatting in seconds."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"4"}</div>
                <div>
                  <h3>{"Download and use it in Excel or Google Sheets"}</h3>
                  <p>{"Your spreadsheet is ready immediately. Works perfectly in both Excel and Google Sheets."}</p>
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
            <h2>{"What the AI Excel Spreadsheet Generator actually does."}</h2>
            <p className={"intro"}>{"This is more than a spreadsheet template generator. The AI works as a complete spreadsheet-building system."}</p>
          </div>
          <div className={"row-body"}>
            {/* Image Section - Same for all products */}
            <div style={{textAlign: 'center', margin: '40px 0'}}>
              <img
                src="/images/excel-spreadsheet-demo.png"
                alt="Excel Spreadsheet Generator Demo"
                style={{maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}
              />
            </div>
            <div className={"capability-grid"}>
              <div className={"capability"}>
                <span className={"cap-num"}>{"01"}</span>
                <h3>{"Spreadsheet Structure Creation"}</h3>
                <p>{"The AI builds proper rows, columns, headers, and sections based on your use case."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"02"}</span>
                <h3>{"Excel Template Generation"}</h3>
                <p>{"Creates reusable Excel templates for budgets, reports, schedules, and trackers."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"03"}</span>
                <h3>{"Formula & Logic Generation"}</h3>
                <p>{"Automatically inserts the right Excel formulas for calculations, totals, and validations."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"04"}</span>
                <h3>{"Formatting & Layout Optimization"}</h3>
                <p>{"Applies clean formatting, spacing, and organization without manual design work."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"05"}</span>
                <h3>{"Data-Ready Spreadsheet Output"}</h3>
                <p>{"Generated sheets are ready for data entry, reporting, charts, and analysis."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"06"}</span>
                <h3>{"Excel & Google Sheets Compatibility"}</h3>
                <p>{"Files work seamlessly across Excel and Google Sheets."}</p>
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
            <h2>{"What You Get When You Create a Spreadsheet with AI"}</h2>
            <p className={"intro"}>{"Experience the full benefits of AI-powered spreadsheet generation."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"benefits-strip"}>
              <div className={"benefit-item"}>
                <h4>{"Ready-to-download Excel files"}</h4>
                <p>{"Complete spreadsheets generated in seconds"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Professional templates"}</h4>
                <p>{"Clean layouts designed for real-world use"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Error-free formulas"}</h4>
                <p>{"No broken logic or syntax issues"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Time savings"}</h4>
                <p>{"Hours of setup reduced to seconds"}</p>
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
            <h2>{"When people use an AI Excel Spreadsheet Generator"}</h2>
            <p className={"intro"}>{"If spreadsheets are part of your work, this tool simplifies everything."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Finance teams creating budgets and forecasts"}</li>
              <li>{"Project managers tracking tasks and timelines"}</li>
              <li>{"Sales teams building reports and dashboards"}</li>
              <li>{"HR teams managing schedules and payroll data"}</li>
              <li>{"Small businesses handling inventory and invoices"}</li>
              <li>{"Freelancers creating client-ready reports"}</li>
            </ul>
            <p className={"audience-footer"}>
              {"If spreadsheets are part of your work, this tool simplifies everything."}
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
            <h2>{"Why Formula Byte Is Better Than Traditional Spreadsheet Templates"}</h2>
            <p className={"intro"}>{"Static templates fail where it matters. Here's the difference."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"compare"}>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"Static templates"}</div>
                <h3>{"Rigid. Basic."}</h3>
                <ul>
                  <li>{"Are rigid"}</li>
                  <li>{"Require manual edits"}</li>
                  <li>{"Break when needs change"}</li>
                </ul>
              </div>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"Formula Byte's AI"}</div>
                <h3>{"Adaptive. Generated."}</h3>
                <ul>
                  <li>{"Adapts spreadsheets to your workflow"}</li>
                  <li>{"Generates logic automatically"}</li>
                  <li>{"Delivers complete, usable files"}</li>
                  <li>{"This is not a download library — it's spreadsheet intelligence"}</li>
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
              {"Free AI Excel Spreadsheet Generator – What "}
              <span className={"serif-accent"}>{"Free"}</span>
              {" Means"}
            </h2>
            <p className={"intro"}>{"You can use the AI spreadsheet generator for free and test its output instantly."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>
                <strong>{"Generate Excel spreadsheets"}</strong>
              </li>
              <li>
                <strong>{"Download files"}</strong>
              </li>
              <li>
                <strong>{"Review accuracy and structure"}</strong>
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
                  <div className={"stat-num"}>{"50k+"}</div>
                  <div className={"stat-label"}>{"Sheets"}</div>
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
                <span>{"No spreadsheet data stored permanently"}</span>
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
                <span>{"Secure and private usage - Your data stays protected"}</span>
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
            <p className={"intro"}>{"Teams that have replaced template hunting with one prompt."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"reviews"}>
              <div className={"review"}>
                <div className={"review-stars"}>{"★★★★★"}</div>
                <p className={"review-quote"}>{"\"A game-changer. I used to spend hours building templates from scratch. Now I just describe what I need and it's done in seconds.\""}
</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"SJ"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"Sarah Johnson"}</div>
                    <div className={"role"}>{"Financial Analyst"}</div>
                  </div>
                </div>
              </div>
              <div className={"review"}>
                <div className={"review-stars"}>{"★★★★★"}</div>
                <p className={"review-quote"}>{"\"Incredibly accurate layouts. Even for complex financial models, the AI gets it right every time. Saved me countless hours.\""}
</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"MC"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"Michael Chen"}</div>
                    <div className={"role"}>{"Data Scientist"}</div>
                  </div>
                </div>
              </div>
              <div className={"review"}>
                <div className={"review-stars"}>{"★★★★★"}</div>
                <p className={"review-quote"}>{"\"Finally a tool that makes spreadsheet creation accessible to everyone on my team. No more waiting on the 'Excel expert'.\""}
</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"ER"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"Emily Rodriguez"}</div>
                    <div className={"role"}>{"Business Manager"}</div>
                  </div>
                </div>
              </div>
              <div className={"review"}>
                <div className={"review-stars"}>{"★★★★★"}</div>
                <p className={"review-quote"}>{"\"Works perfectly with both Excel and Google Sheets. The AI understands exactly what I need and delivers every time.\""}
</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"JW"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"James Wilson"}</div>
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
              <a className={"related-card"} href={"/tools/ai-dax-code-generator"}>
                <div className={"glyph"}>{"📊"}</div>
                <h4>{"AI DAX Code Generator"}</h4>
                <p>{"Generate Power BI DAX code from plain English."}</p>
                <span className={"link"}>{"Try now →"}</span>
              </a>
              <a className={"related-card"} href={"/tools/sentiment-analysis-tool"}>
                <div className={"glyph"}>{"±"}</div>
                <h4>{"Sentiment Analysis Tool"}</h4>
                <p>{"Analyze text sentiment and emotions using AI."}</p>
                <span className={"link"}>{"Try now →"}</span>
              </a>
              <a className={"related-card"} href={"/tools/ai-chatbot"}>
                <div className={"glyph"}>{"∞"}</div>
                <h4>{"AI Chatbot"}</h4>
                <p>{"Build intelligent chatbots that understand and respond."}</p>
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
            <p className={"intro"}>{"Common questions about the AI Excel Spreadsheet Generator."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"faq-list"}>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"What is the AI Spreadsheet Generator?"}</summary>
                <div className={"faq-a"}>{"It's a tool that creates complete Excel spreadsheets using AI."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"What types of spreadsheets can it generate?"}</summary>
                <div className={"faq-a"}>{"Budgets, reports, schedules, trackers, and more."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Can I create Excel templates with AI?"}</summary>
                <div className={"faq-a"}>{"Yes, reusable templates are supported."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Does it work with Google Sheets?"}</summary>
                <div className={"faq-a"}>{"Yes, generated files are compatible."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Can it handle advanced formulas?"}</summary>
                <div className={"faq-a"}>{"Yes, formulas are generated automatically when needed."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is the AI Excel Spreadsheet Generator free?"}</summary>
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
            {"Stop building spreadsheets "}
            <span className={"accent"}>{"from scratch."}</span>
          </h2>
          <p>{"Create Excel spreadsheets with AI — fast, clean, and ready to use."}</p>
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