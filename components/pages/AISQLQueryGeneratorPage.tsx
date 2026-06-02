'use client';

import React, { useState } from 'react';

export default function AISQLQueryGeneratorPage() {
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
        <div className="eyebrow">AI SQL Query Generator – Write SQL Queries Free</div>
        <h1>
          AI SQL Query Generator – Write SQL
          <span className="accent"> Queries Instantly</span>
        </h1>
        <p className="lede">Generate accurate SQL queries instantly using AI. No syntax errors. No database confusion. Just clean, ready-to-run SQL code in seconds. Describe what you want to query and let Formula Byte generate the exact SQL for you. Start free. Generate SQL queries instantly.</p>
        <div className="hero-trust">
          <span className="trust-pill">
            <span className="dot"></span>
            No syntax errors
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            No database confusion
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            Just clean SQL
          </span>
        </div>
        <div className="prompt-card">
          <div className="prompt-input">
            <textarea
              className="prompt-textarea"
              placeholder="Describe your query in plain English and let Formula Byte generate the exact SQL for you."
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
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>SELECT with JOIN</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Aggregate and GROUP BY</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>UPDATE with WHERE</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Complex nested query</button>
        </div>
      </div>
    </section>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"row"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Generate SQL Queries Using AI"}</div>
            <h2>
              {"Writing SQL queries "}
              <span className={"serif-accent"}>{"can be frustrating—especially with joins, filters, and complex conditions."}</span>
            </h2>
          </div>
          <div className={"row-body"}>
            <p className={"intro"}>{"The AI SQL Query Generator understands database logic, not just SQL keywords. Whether you need to generate SQL queries automatically, use an AI SQL query generator free, or build complex SQL queries without errors, Formula Byte delivers accurate SQL every time."}</p>
            <ul className={"bulleted"}>
              <li><strong>{"Generate SQL queries automatically"}</strong></li>
              <li><strong>{"Use an AI SQL query generator free"}</strong></li>
              <li><strong>{"Build complex SQL queries without errors"}</strong></li>
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
              {"Why Writing SQL Queries "}
              <span className={"serif-accent"}>{"Manually Is Hard"}</span>
            </h2>
            <p className={"intro"}>{"Manual SQL writing often leads to syntax errors that break queries. Incorrect joins and filters waste time. Even experienced developers lose time fixing small mistakes. AI removes SQL trial-and-error completely."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Syntax errors that break queries"}</li>
              <li>{"Incorrect joins and filters"}</li>
              <li>{"Time wasted debugging"}</li>
              <li>{"Rewriting similar queries repeatedly"}</li>
            </ul>
            <p className={"audience-footer"}>
              {"Even experienced developers lose time fixing small mistakes. AI removes SQL trial-and-error completely."}
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
            <h2>{"How the AI SQL Query Generator Works"}</h2>
            <p className={"intro"}>{"Four steps from describing your query to getting a complete SQL query. No memorizing syntax. No debugging loops. No confusion."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"steps"}>
              <div className={"step"}>
                <div className={"step-num"}>{"1"}</div>
                <div>
                  <h3>{"Describe your query in plain English"}</h3>
                  <p>{"Tell the AI what data you need — joins, filters, aggregations, or complex conditions."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"2"}</div>
                <div>
                  <h3>{"AI understands tables, conditions, and logic"}</h3>
                  <p>{"The model analyzes your description and determines the right SQL structure and syntax."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"3"}</div>
                <div>
                  <h3>{"A complete SQL query is generated instantly"}</h3>
                  <p>{"Get a syntactically perfect query with proper joins, filters, and logic in seconds."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"4"}</div>
                <div>
                  <h3>{"Copy and run the query in your database"}</h3>
                  <p>{"Your SQL is ready immediately. Works with MySQL, PostgreSQL, SQL Server, and more."}</p>
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
            <h2>{"What the AI SQL Query Generator Actually Does"}</h2>
            <p className={"intro"}>{"This is not a basic query suggestion tool. The AI works as a full SQL logic engine."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"capability-grid"}>
              <div className={"capability"}>
                <span className={"cap-num"}>{"01"}</span>
                <h3>{"SELECT Query Generation"}</h3>
                <p>{"Creates accurate SELECT queries with filters, sorting, and conditions."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"02"}</span>
                <h3>{"JOIN & Relationship Handling"}</h3>
                <p>{"Builds INNER, LEFT, RIGHT, and multiple JOIN queries correctly."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"03"}</span>
                <h3>{"INSERT, UPDATE & DELETE Queries"}</h3>
                <p>{"Generates safe data modification queries with proper conditions."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"04"}</span>
                <h3>{"WHERE, GROUP BY & HAVING Logic"}</h3>
                <p>{"Handles filtering, grouping, and aggregation correctly."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"05"}</span>
                <h3>{"Complex Query Construction"}</h3>
                <p>{"Supports nested queries, subqueries, and advanced logic."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"06"}</span>
                <h3>{"SQL-Ready Output"}</h3>
                <p>{"Queries are clean, readable, and ready to execute."}</p>
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
            <h2>{"What You Get with the AI SQL Query Generator"}</h2>
            <p className={"intro"}>{"Experience the full benefits of AI-powered SQL query generation."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"benefits-strip"}>
              <div className={"benefit-item"}>
                <h4>{"Error-free SQL queries"}</h4>
                <p>{"Correct syntax and logical structure every time"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Faster database work"}</h4>
                <p>{"Build queries in seconds instead of minutes"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Beginner-friendly usage"}</h4>
                <p>{"No advanced SQL knowledge required"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Advanced flexibility"}</h4>
                <p>{"Works for simple queries and complex database operations"}</p>
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
            <h2>{"Who Should Use an AI SQL Query Generator"}</h2>
            <p className={"intro"}>{"If SQL slows you down, this tool speeds you up."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Database administrators"}</li>
              <li>{"Backend developers"}</li>
              <li>{"Data analysts"}</li>
              <li>{"Students learning SQL"}</li>
              <li>{"Anyone working with databases"}</li>
            </ul>
            <p className={"audience-footer"}>
              {"If SQL slows you down, this tool speeds you up."}
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
            <h2>{"Why This AI SQL Query Generator Is Different"}</h2>
            <p className={"intro"}>{"Basic SQL tools versus AI-powered SQL generation."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"compare"}>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"Basic SQL tools"}</div>
                <h3>{"Limited. Basic."}</h3>
                <ul>
                  <li>{"Generate partial queries"}</li>
                  <li>{"Miss logic and structure"}</li>
                  <li>{"Require heavy editing"}</li>
                </ul>
              </div>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"This AI"}</div>
                <h3>{"Complete. Intelligent."}</h3>
                <ul>
                  <li>{"Understands query intent"}</li>
                  <li>{"Generates complete SQL logic"}</li>
                  <li>{"Reduces syntax and logic errors"}</li>
                  <li>{"This is not autocomplete — it's SQL intelligence"}</li>
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
              {"Free AI SQL Query Generator – What "}
              <span className={"serif-accent"}>{"Free"}</span>
              {" Means"}
            </h2>
            <p className={"intro"}>{"You can use the AI SQL Query Generator for free and test query accuracy."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>
                <strong>{"Generate SQL queries"}</strong>
              </li>
              <li>
                <strong>{"Review query logic"}</strong>
              </li>
              <li>
                <strong>{"Test multiple database scenarios"}</strong>
              </li>
              <li>
                <strong>{"Upgrade only if you need higher limits or advanced workflows"}</strong>
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
                <span>{"No database credentials stored"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"02"}</span>
                <span>{"No query history saved permanently"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"03"}</span>
                <span>{"Secure AI processing"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"04"}</span>
                <span>{"Safe for professional and business use - Your data stays private"}</span>
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
              <a className={"related-card"} href={"/tools/ai-dax-generator"}>
                <div className={"glyph"}>{"λ"}</div>
                <h4>{"AI DAX Generator"}</h4>
                <p>{"Power BI and DAX code from plain English descriptions."}</p>
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
            <p className={"intro"}>{"Common questions about the AI SQL Query Generator."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"faq-list"}>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"What is an AI SQL Query Generator?"}</summary>
                <div className={"faq-a"}>{"A tool that generates SQL queries from plain English instructions."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is the AI SQL Query Generator free?"}</summary>
                <div className={"faq-a"}>{"Yes, free access is available."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Can it handle complex SQL queries?"}</summary>
                <div className={"faq-a"}>{"Yes, including joins, subqueries, and aggregations."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is this suitable for beginners?"}</summary>
                <div className={"faq-a"}>{"Yes, no advanced SQL knowledge is required."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Can I use the generated SQL in production?"}</summary>
                <div className={"faq-a"}>{"Yes, the queries are clean and ready to run."}</div>
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
            <span className={"accent"}>{"SQL queries manually."}</span>
          </h2>
          <p>{"Generate accurate SQL queries instantly using AI — fast, clean, and free to try."}</p>
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
