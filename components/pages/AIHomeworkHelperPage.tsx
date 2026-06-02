'use client';

import React, { useState } from 'react';

export default function AIHomeworkHelperPage() {
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
        <div className="eyebrow">AI Homework Helper – Get Homework Help Free Online</div>
        <h1>
          AI Homework Helper – Get Instant Help with
          <span className="accent"> Your Homework</span>
        </h1>
        <p className="lede">Get homework help instantly using AI. No confusion. No waiting. Just clear explanations and accurate answers when you need them. Ask your question and let Formula Byte help you understand and complete your homework faster. Start free. Get homework help instantly.</p>
        <div className="hero-trust">
          <span className="trust-pill">
            <span className="dot"></span>
            No confusion
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            No waiting
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            Just clear explanations
          </span>
        </div>
        <div className="prompt-card">
          <div className="prompt-input">
            <textarea
              className="prompt-textarea"
              placeholder="Ask your homework question and let Formula Byte help you understand and solve it."
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
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Solve this math problem</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Explain this science concept</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Help with this essay</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Understand this formula</button>
        </div>
      </div>
    </section>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"row"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Get Homework Help Using AI"}</div>
            <h2>
              {"Homework can be challenging"}
              <span className={"serif-accent"}>{"—especially when concepts aren't clear."}</span>
            </h2>
          </div>
          <div className={"row-body"}>
            <p className={"intro"}>{"The AI Homework Helper explains answers step by step, not just final results. Whether you need to get homework help online, use an AI homework helper for free, or understand difficult questions clearly, Formula Byte helps you learn, not just submit answers."}</p>
            <ul className={"bulleted"}>
              <li><strong>{"Get homework help online"}</strong></li>
              <li><strong>{"Use an AI homework helper for free"}</strong></li>
              <li><strong>{"Understand difficult questions clearly"}</strong></li>
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
              {"Why Doing Homework "}
              <span className={"serif-accent"}>{"Alone Feels Hard"}</span>
            </h2>
            <p className={"intro"}>{"Many students struggle because concepts aren't explained clearly. Teachers aren't always available. Searching online gives confusing answers. Copying solutions doesn't help learning. Homework shouldn't feel overwhelming. AI provides guidance, clarity, and understanding."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Concepts aren't explained clearly"}</li>
              <li>{"Teachers aren't always available"}</li>
              <li>{"Searching online gives confusing answers"}</li>
              <li>{"Copying solutions doesn't help learning"}</li>
            </ul>
            <p className={"audience-footer"}>
              {"Homework shouldn't feel overwhelming. AI provides guidance, clarity, and understanding."}
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
            <h2>{"How the AI Homework Helper Works"}</h2>
            <p className={"intro"}>{"Four steps from asking your question to understanding the solution. No pressure. No guesswork. Just help when you need it."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"steps"}>
              <div className={"step"}>
                <div className={"step-num"}>1</div>
                <div>
                  <h3>{"Enter your homework question"}</h3>
                  <p>{"Type any question — math, science, language, or general academic topics."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>2</div>
                <div>
                  <h3>{"AI understands the subject and problem"}</h3>
                  <p>{"The model analyzes what's being asked and identifies the key concepts."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>3</div>
                <div>
                  <h3>{"A clear explanation and solution is generated"}</h3>
                  <p>{"Get step-by-step guidance that helps you understand the logic and reasoning."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>4</div>
                <div>
                  <h3>{"Review, learn, and complete your homework"}</h3>
                  <p>{"Use the explanation to learn and finish your assignment with confidence."}</p>
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
            <h2>{"What the AI Homework Helper Actually Does"}</h2>
            <p className={"intro"}>{"This is not just an answer generator. The AI works as a learning assistant."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"capability-grid"}>
              <div className={"capability"}>
                <span className={"cap-num"}>01</span>
                <h3>{"Step-by-Step Explanations"}</h3>
                <p>{"Breaks down problems into easy-to-understand steps."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>02</span>
                <h3>{"Subject-Aware Assistance"}</h3>
                <p>{"Supports math, science, language, and general academic questions."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>03</span>
                <h3>{"Concept Clarification"}</h3>
                <p>{"Explains why an answer is correct, not just what the answer is."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>04</span>
                <h3>{"Instant Feedback"}</h3>
                <p>{"Get help immediately without waiting for replies."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>05</span>
                <h3>{"Learning-Focused Output"}</h3>
                <p>{"Designed to help students understand and improve—not just finish work."}</p>
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
            <h2>{"What You Get with the AI Homework Helper"}</h2>
            <p className={"intro"}>{"Experience the full benefits of AI-powered homework assistance."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"benefits-strip"}>
              <div className={"benefit-item"}>
                <h4>{"Clear explanations"}</h4>
                <p>{"Understand topics instead of memorizing answers"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Faster homework completion"}</h4>
                <p>{"Finish assignments with confidence"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Better learning outcomes"}</h4>
                <p>{"Improve understanding and grades"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"24/7 availability"}</h4>
                <p>{"Homework help anytime, anywhere"}</p>
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
            <h2>{"Who Should Use an AI Homework Helper"}</h2>
            <p className={"intro"}>{"If homework slows you down, this tool speeds you up."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"School students"}</li>
              <li>{"College and university students"}</li>
              <li>{"Online learners"}</li>
              <li>{"Parents helping children with homework"}</li>
              <li>{"Anyone needing quick academic clarification"}</li>
            </ul>
            <p className={"audience-footer"}>
              {"If homework slows you down, this tool speeds you up."}
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
            <h2>{"Why This AI Homework Helper Is Different"}</h2>
            <p className={"intro"}>{"Basic homework sites versus AI-powered learning assistance."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"compare"}>
              <div className={"compare-col"}>
                <div className={"compare-label"}>Basic homework sites</div>
                <h3>{"Answers only. Shallow."}</h3>
                <ul>
                  <li>{"Give final answers only"}</li>
                  <li>{"Encourage copying"}</li>
                  <li>{"Don't explain concepts"}</li>
                </ul>
              </div>
              <div className={"compare-col"}>
                <div className={"compare-label"}>This AI helper</div>
                <h3>{"Learning-focused. Deep."}</h3>
                <ul>
                  <li>{"Focuses on learning"}</li>
                  <li>{"Explains step by step"}</li>
                  <li>{"Helps you understand subjects better"}</li>
                  <li>{"This is not cheating — it's guided learning"}</li>
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
              {"Free AI Homework Helper – What "}
              <span className={"serif-accent"}>Free</span>
              {" Means"}
            </h2>
            <p className={"intro"}>{"You can use the AI Homework Helper for free to get instant help."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>
                <strong>{"Ask homework questions"}</strong>
              </li>
              <li>
                <strong>{"Get explanations and answers"}</strong>
              </li>
              <li>
                <strong>{"Test multiple problems"}</strong>
              </li>
              <li>
                <strong>{"Upgrade only if you need higher usage limits or advanced learning features"}</strong>
              </li>
            </ul>
            <div className={"free-block"}>
              <div>
                <h3>{"Start getting help in seconds."}</h3>
                <p>{"No card. No download. Just a question."}</p>
              </div>
              <div className={"stats-inline"}>
                <div className={"stat-inline"}>
                  <div className={"stat-num"}>5k+</div>
                  <div className={"stat-label"}>Users</div>
                </div>
                <div className={"stat-inline"}>
                  <div className={"stat-num"}>100k+</div>
                  <div className={"stat-label"}>Questions</div>
                </div>
                <div className={"stat-inline"}>
                  <div className={"stat-num"}>4.9</div>
                  <div className={"stat-label"}>Rating</div>
                </div>
              </div>
            </div>
            <div className={"security-list"}>
              <div className={"security-item"}>
                <span className={"sec-num"}>01</span>
                <span>{"No personal data stored"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>02</span>
                <span>{"Safe for students"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>03</span>
                <span>{"Designed for learning support"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>04</span>
                <span>{"Encourages understanding, not copying - Your learning stays private and secure"}</span>
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
              <a className={"related-card"} href={"/tools/ai-question-answer-generator"}>
                <div className={"glyph"}>?</div>
                <h4>{"AI Question Answer Generator"}</h4>
                <p>{"Ask questions and get instant, accurate answers."}</p>
                <span className={"link"}>Try now →</span>
              </a>
              <a className={"related-card"} href={"/tools/ai-chatbot"}>
                <div className={"glyph"}>∞</div>
                <h4>{"AI Chatbot"}</h4>
                <p>{"Conversational assistant for your data and questions."}</p>
                <span className={"link"}>Try now →</span>
              </a>
              <a className={"related-card"} href={"/tools/excel-formula-generator"}>
                <div className={"glyph"}>fx</div>
                <h4>{"Excel Formula Generator"}</h4>
                <p>{"Create Excel formulas instantly using AI."}</p>
                <span className={"link"}>Try now →</span>
              </a>
              <a className={"related-card"} href={"/tools/ai-sql-query-generator"}>
                <div className={"glyph"}>SQL</div>
                <h4>{"AI SQL Query Generator"}</h4>
                <p>{"Generate accurate SQL queries using AI."}</p>
                <span className={"link"}>Try now →</span>
              </a>
              <a className={"related-card"} href={"/tools/ai-pandas-code-generator"}>
                <div className={"glyph"}>🐼</div>
                <h4>{"AI Pandas Code Generator"}</h4>
                <p>{"Generate clean Python Pandas code using AI."}</p>
                <span className={"link"}>Try now →</span>
              </a>
              <a className={"related-card"} href={"/tools/sentiment-analysis"}>
                <div className={"glyph"}>±</div>
                <h4>{"Sentiment Analysis"}</h4>
                <p>{"Classify text by sentiment in bulk — positive, negative, neutral."}</p>
                <span className={"link"}>Try now →</span>
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
            <div className={"eyebrow"}>FAQ</div>
            <h2>{"Frequently asked questions."}</h2>
            <p className={"intro"}>Common questions about the AI Homework Helper.</p>
          </div>
          <div className={"row-body"}>
            <div className={"faq-list"}>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>What is an AI Homework Helper?</summary>
                <div className={"faq-a"}>A tool that helps students understand and solve homework questions using AI.</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>Is the AI Homework Helper free?</summary>
                <div className={"faq-a"}>Yes, free access is available.</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>Does it explain answers step by step?</summary>
                <div className={"faq-a"}>Yes, explanations are clear and student-friendly.</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>Can it help with different subjects?</summary>
                <div className={"faq-a"}>Yes, it supports multiple academic subjects.</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>Is this tool safe for students?</summary>
                <div className={"faq-a"}>Yes, it's designed for responsible learning.</div>
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
            <span className={"accent"}>homework alone.</span>
          </h2>
          <p>{"Get clear explanations and instant help using AI — free and easy to use."}</p>
          <div className={"btn-row"}>
            <a href="https://dashboard.formulabyte.com/" className={"btn btn-primary btn-lg"}>👉 Start Free with Formula Byte</a>
            <a href={"/tools"} className={"btn btn-outline btn-lg"}>Browse all tools</a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
