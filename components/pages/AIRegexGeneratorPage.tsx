'use client';

import React, { useState } from 'react';

export default function AIRegexGeneratorPage() {
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
        <div className="eyebrow">AI Regex Generator – Create Regex Patterns Free</div>
        <h1>
          AI Regex Generator – Create
          <span className="accent"> Regex Patterns Instantly</span>
        </h1>
        <p className="lede">Generate regular expressions instantly using AI. No syntax confusion. No trial-and-error. Just clean, working regex patterns in seconds. Describe what you want to match and let Formula Byte generate the correct regex for you. Start free. Generate regex instantly.</p>
        <div className="hero-trust">
          <span className="trust-pill">
            <span className="dot"></span>
            No syntax confusion
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            No trial-and-error
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            Just working regex
          </span>
        </div>
        <div className="prompt-card">
          <div className="prompt-input">
            <textarea
              className="prompt-textarea"
              placeholder="Describe what you want to match in plain English and let Formula Byte generate the correct regex for you."
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
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Match email addresses</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Validate phone numbers</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Extract URLs from text</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Match date formats</button>
        </div>
      </div>
    </section>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"row"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Generate Regex Patterns Using AI"}</div>
            <h2>
              {"Writing regex "}
              <span className={"serif-accent"}>{"is powerful—but difficult."}</span>
            </h2>
          </div>
          <div className={"row-body"}>
            <p className={"intro"}>{"The AI Regex Generator understands pattern logic, not just symbols. Whether you need to generate regex patterns automatically, use an AI regex generator free, or build complex regex without errors, Formula Byte delivers reliable regex every time."}</p>
            <ul className={"bulleted"}>
              <li><strong>{"Generate regex patterns automatically"}</strong></li>
              <li><strong>{"Use an AI regex generator free"}</strong></li>
              <li><strong>{"Build complex regex without errors"}</strong></li>
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
              {"Why Writing Regex "}
              <span className={"serif-accent"}>{"Manually Is Frustrating"}</span>
            </h2>
            <p className={"intro"}>{"Manual regex creation often leads to broken or incomplete patterns. Endless testing and tweaking wastes time. Even experienced developers struggle with regex accuracy. AI removes regex guesswork completely."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Broken or incomplete patterns"}</li>
              <li>{"Endless testing and tweaking"}</li>
              <li>{"Hard-to-read expressions"}</li>
              <li>{"Time wasted debugging edge cases"}</li>
            </ul>
            <p className={"audience-footer"}>
              {"Even experienced developers struggle with regex accuracy. AI removes regex guesswork completely."}
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
            <h2>{"How the AI Regex Generator Works"}</h2>
            <p className={"intro"}>{"Four steps from describing your match needs to getting a valid regex pattern. No memorization. No regex cheat sheets. No frustration."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"steps"}>
              <div className={"step"}>
                <div className={"step-num"}>{"1"}</div>
                <div>
                  <h3>{"Describe what you want to match (text, numbers, emails, patterns)"}</h3>
                  <p>{"Tell the AI what pattern you need — emails, URLs, phone numbers, dates, or custom formats."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"2"}</div>
                <div>
                  <h3>{"AI understands the matching rules and edge cases"}</h3>
                  <p>{"The model analyzes your description and determines the right regex structure and syntax."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"3"}</div>
                <div>
                  <h3>{"A valid regex pattern is generated instantly"}</h3>
                  <p>{"Get a syntactically perfect regex with proper escaping, groups, and quantifiers in seconds."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"4"}</div>
                <div>
                  <h3>{"Copy and use it in your code or tool"}</h3>
                  <p>{"Your regex is ready immediately. Works in JavaScript, Python, Java, and more."}</p>
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
            <h2>{"What the AI Regex Generator Actually Does"}</h2>
            <p className={"intro"}>{"This is not a simple regex suggester. The AI works as a pattern-logic engine."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"capability-grid"}>
              <div className={"capability"}>
                <span className={"cap-num"}>{"01"}</span>
                <h3>{"Pattern Matching Logic"}</h3>
                <p>{"Creates regex for strings, numbers, emails, URLs, dates, and custom formats."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"02"}</span>
                <h3>{"Validation Regex Generation"}</h3>
                <p>{"Builds regex for input validation (forms, IDs, passwords, fields)."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"03"}</span>
                <h3>{"Grouping & Quantifier Handling"}</h3>
                <p>{"Correctly applies groups, ranges, repetitions, and anchors."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"04"}</span>
                <h3>{"Escaping & Syntax Accuracy"}</h3>
                <p>{"Ensures special characters are escaped correctly."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"05"}</span>
                <h3>{"Readable, Usable Output"}</h3>
                <p>{"Regex patterns are clean, standard, and ready to use."}</p>
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
            <h2>{"What You Get with the AI Regex Generator"}</h2>
            <p className={"intro"}>{"Experience the full benefits of AI-powered regex generation."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"benefits-strip"}>
              <div className={"benefit-item"}>
                <h4>{"Working regex patterns"}</h4>
                <p>{"Accurate and syntax-safe expressions"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Time savings"}</h4>
                <p>{"Create regex in seconds instead of hours"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Beginner-friendly usage"}</h4>
                <p>{"No regex expertise required"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Advanced flexibility"}</h4>
                <p>{"Supports simple matches and complex patterns"}</p>
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
            <h2>{"Who Should Use an AI Regex Generator"}</h2>
            <p className={"intro"}>{"If regex slows you down, this tool speeds you up."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Developers and programmers"}</li>
              <li>{"QA and test engineers"}</li>
              <li>{"Data analysts"}</li>
              <li>{"Web and backend developers"}</li>
              <li>{"Anyone working with text validation"}</li>
            </ul>
            <p className={"audience-footer"}>
              {"If regex slows you down, this tool speeds you up."}
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
            <h2>{"Why This AI Regex Generator Is Different"}</h2>
            <p className={"intro"}>{"Basic regex tools versus AI-powered regex generation."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"compare"}>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"Basic regex tools"}</div>
                <h3>{"Limited. Static."}</h3>
                <ul>
                  <li>{"Show examples only"}</li>
                  <li>{"Don't explain logic"}</li>
                  <li>{"Break on edge cases"}</li>
                </ul>
              </div>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"This AI"}</div>
                <h3>{"Smart. Reliable."}</h3>
                <ul>
                  <li>{"Understands intent"}</li>
                  <li>{"Generates correct patterns"}</li>
                  <li>{"Reduces regex errors"}</li>
                  <li>{"This is not a cheat sheet — it's regex intelligence"}</li>
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
              {"Free AI Regex Generator – What "}
              <span className={"serif-accent"}>{"Free"}</span>
              {" Means"}
            </h2>
            <p className={"intro"}>{"You can use the AI Regex Generator for free and test patterns instantly."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>
                <strong>{"Generate regex patterns"}</strong>
              </li>
              <li>
                <strong>{"Review syntax"}</strong>
              </li>
              <li>
                <strong>{"Try multiple matching rules"}</strong>
              </li>
              <li>
                <strong>{"Upgrade only if you need higher usage limits or advanced tools"}</strong>
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
                  <div className={"stat-label"}>{"Patterns"}</div>
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
                <span>{"No input stored permanently"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"02"}</span>
                <span>{"No manual review of patterns"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"03"}</span>
                <span>{"Secure AI processing"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"04"}</span>
                <span>{"Safe for professional use - Your patterns stay private"}</span>
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
              <a className={"related-card"} href={"/tools/ai-sql-query-generator"}>
                <div className={"glyph"}>{"SQL"}</div>
                <h4>{"AI SQL Query Generator"}</h4>
                <p>{"Generate accurate SQL queries using AI."}</p>
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
            <p className={"intro"}>{"Common questions about the AI Regex Generator."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"faq-list"}>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"What is an AI Regex Generator?"}</summary>
                <div className={"faq-a"}>{"A tool that creates regular expression patterns from plain English instructions."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is the AI Regex Generator free?"}</summary>
                <div className={"faq-a"}>{"Yes, free access is available."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Can it generate complex regex patterns?"}</summary>
                <div className={"faq-a"}>{"Yes, including validation and advanced matching logic."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is this suitable for beginners?"}</summary>
                <div className={"faq-a"}>{"Yes, no prior regex knowledge is required."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Can I use the regex in production code?"}</summary>
                <div className={"faq-a"}>{"Yes, the generated regex is clean and usable."}</div>
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
            <span className={"accent"}>{"regex syntax."}</span>
          </h2>
          <p>{"Generate accurate regex patterns instantly using AI — fast, clean, and free to try."}</p>
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
