'use client';

import React, { useState } from 'react';

export default function SentimentAnalysisToolPage() {
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
        <div className="eyebrow">AI Sentiment Analysis Tool</div>
        <h1>
          AI Sentiment Analysis Tool –
          <span className="accent">Understand Text Emotions Instantly</span>
        </h1>
        <p className="lede">Analyze sentiment instantly using AI. No manual tagging. No guesswork. Just clear insights into emotions, tone, and intent. Paste your text and let Formula Byte reveal whether it's positive, negative, or neutral — in seconds. Start free. Get instant sentiment insights.</p>
        <div className="hero-trust">
          <span className="trust-pill">
            <span className="dot"></span>
            No manual tagging
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            No guesswork
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            Just clear insights
          </span>
        </div>
        <div className="prompt-card">
          <div className="prompt-input">
            <textarea
              className="prompt-textarea"
              placeholder="Paste your text and let Formula Byte reveal whether it's positive, negative, or neutral — in seconds."
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
              aria-label="Analyze"
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
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Customer review</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Email feedback</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Social media post</button>
        </div>
      </div>
    </section>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"row"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Analyze Text Sentiment Using AI"}</div>
            <h2>
              {"Understanding how people feel matters "}
              <span className={"serif-accent"}>{"— in reviews, feedback, emails, and social content."}</span>
            </h2>
          </div>
          <div className={"row-body"}>
            <p className={"intro"}>{"The AI Sentiment Analysis Tool goes beyond keywords and understands context. Formula Byte delivers fast, accurate sentiment results every time."}</p>
            <ul className={"bulleted"}>
              <li><strong>{"Analyze customer feedback sentiment"}</strong></li>
              <li><strong>{"Detect positive or negative tone in text"}</strong></li>
              <li><strong>{"Use an AI sentiment analysis tool for free"}</strong></li>
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
              {"Why manual sentiment analysis "}
              <span className={"serif-accent"}>{"fails."}</span>
            </h2>
            <p className={"intro"}>{"Human sentiment analysis is inconsistent and slow. Common problems include subjective interpretation, missed emotional cues, bias in manual labeling, and inability to scale large text volumes. Reading hundreds of messages manually doesn't work. AI removes emotion-guessing and delivers consistent results."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Subjective interpretation"}</li>
              <li>{"Missed emotional cues"}</li>
              <li>{"Bias in manual labeling"}</li>
              <li>{"Inability to scale large text volumes"}</li>
              <li>{"Reading hundreds of messages manually doesn't work"}</li>
            </ul>
            <blockquote className={"pull-quote"}>
              {" \"I spent days reading through customer feedback and still wasn't sure about the overall sentiment.\" "}
              <cite>{"— Customer Experience Manager, E-commerce Company"}</cite>
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
            <h2>{"No setup. No training data. No complex dashboards."}</h2>
            <p className={"intro"}>{"Four steps from pasting text to getting clear sentiment insights. No setup. No training data. No complex dashboards."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"steps"}>
              <div className={"step"}>
                <div className={"step-num"}>{"1"}</div>
                <div>
                  <h3>{"Paste text or upload content"}</h3>
                  <p>{"Add any text — reviews, feedback, emails, social media posts, or customer messages."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"2"}</div>
                <div>
                  <h3>{"AI analyzes language, tone, and context"}</h3>
                  <p>{"The model evaluates word choice, phrasing, and emotional indicators in the text."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"3"}</div>
                <div>
                  <h3>{"Sentiment is classified instantly"}</h3>
                  <p>{"Get clear results: positive, negative, or neutral with confidence scores in seconds."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"4"}</div>
                <div>
                  <h3>{"Review results and apply insights"}</h3>
                  <p>{"Use sentiment insights to make decisions, prioritize issues, or understand feedback trends."}</p>
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
            <h2>{"What the AI Sentiment Analysis Tool actually does."}</h2>
            <p className={"intro"}>{"This is not basic keyword sentiment detection. The AI works across multiple language-understanding layers."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"capability-grid"}>
              <div className={"capability"}>
                <span className={"cap-num"}>{"01"}</span>
                <h3>{"Sentiment Classification"}</h3>
                <p>{"Identifies whether text is positive, negative, or neutral with contextual accuracy."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"02"}</span>
                <h3>{"Emotion & Tone Detection"}</h3>
                <p>{"Detects tone such as satisfaction, frustration, urgency, or concern."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"03"}</span>
                <h3>{"Context-Aware Interpretation"}</h3>
                <p>{"Understands meaning beyond keywords — sarcasm and phrasing included."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"04"}</span>
                <h3>{"Sentence-Level Analysis"}</h3>
                <p>{"Evaluates sentiment at sentence or paragraph level for deeper insights."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"05"}</span>
                <h3>{"Real-Time Processing"}</h3>
                <p>{"Analyzes text instantly, even at high volumes."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"06"}</span>
                <h3>{"Clean, Action-Ready Output"}</h3>
                <p>{"Results are clear and easy to interpret — ready for reports or decisions."}</p>
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
            <h2>{"What You Get from AI Sentiment Analysis"}</h2>
            <p className={"intro"}>{"Experience the full benefits of AI-powered sentiment analysis."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"benefits-strip"}>
              <div className={"benefit-item"}>
                <h4>{"Clear sentiment labels"}</h4>
                <p>{"Instant insight into emotional direction"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Faster decision-making"}</h4>
                <p>{"Understand feedback without manual reading"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Consistent results"}</h4>
                <p>{"No bias, no fatigue, no interpretation errors"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Scalable analysis"}</h4>
                <p>{"Works for single messages or large text sets"}</p>
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
            <h2>{"Who Should Use a Sentiment Analysis Tool"}</h2>
            <p className={"intro"}>{"If text drives decisions, sentiment analysis saves time and improves clarity."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Marketing teams analyzing customer feedback"}</li>
              <li>{"Product teams reviewing user responses"}</li>
              <li>{"Support teams prioritizing issues"}</li>
              <li>{"Business owners monitoring brand perception"}</li>
              <li>{"Analysts working with text data"}</li>
            </ul>
            <p className={"audience-footer"}>
              {"If text drives decisions, sentiment analysis saves time and improves clarity."}
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
            <h2>{"Why Formula Byte Is Better Than Basic Sentiment Tools"}</h2>
            <p className={"intro"}>{"Basic sentiment tools fail where it matters. Here's the difference."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"compare"}>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"Basic tools"}</div>
                <h3>{"Limited. Basic."}</h3>
                <ul>
                  <li>{"Rely on keyword matching"}</li>
                  <li>{"Miss context and tone"}</li>
                  <li>{"Produce unreliable results"}</li>
                </ul>
              </div>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"Formula Byte's AI"}</div>
                <h3>{"Complete. Intelligent."}</h3>
                <ul>
                  <li>{"Understands language context"}</li>
                  <li>{"Delivers consistent sentiment logic"}</li>
                  <li>{"Produces insight-ready outputs"}</li>
                  <li>{"This is not text scoring — it's sentiment intelligence"}</li>
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
              {"Free AI Sentiment Analysis Tool – What "}
              <span className={"serif-accent"}>{"Free"}</span>
              {" Means"}
            </h2>
            <p className={"intro"}>{"You can use the sentiment analysis tool for free and test accuracy instantly."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>
                <strong>{"Analyze text sentiment"}</strong>
              </li>
              <li>
                <strong>{"Review emotional classification"}</strong>
              </li>
              <li>
                <strong>{"Test multiple text samples"}</strong>
              </li>
              <li>
                <strong>{"Upgrade only if you need higher limits or advanced workflows"}</strong>
              </li>
            </ul>
            <div className={"free-block"}>
              <div>
                <h3>{"Start analyzing in seconds."}</h3>
                <p>{"No card. No download. Just paste your text."}</p>
              </div>
              <div className={"stats-inline"}>
                <div className={"stat-inline"}>
                  <div className={"stat-num"}>{"5k+"}</div>
                  <div className={"stat-label"}>{"Users"}</div>
                </div>
                <div className={"stat-inline"}>
                  <div className={"stat-num"}>{"100k+"}</div>
                  <div className={"stat-label"}>{"Texts"}</div>
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
                <span>{"Text is not stored permanently"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"02"}</span>
                <span>{"No manual review of content"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"03"}</span>
                <span>{"Secure processing"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"04"}</span>
                <span>{"Safe for business use - Your data remains private"}</span>
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
            <p className={"intro"}>{"Teams using AI to understand customer sentiment."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"reviews"}>
              <div className={"review"}>
                <div className={"review-stars"}>{"★★★★★"}</div>
                <p className={"review-quote"}>{"\"This sentiment tool is incredibly accurate for customer reviews. What used to take hours of manual reading now takes seconds. The AI understands context perfectly.\""}
</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"LC"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"Lisa Chen"}</div>
                    <div className={"role"}>{"Customer Experience Manager"}</div>
                  </div>
                </div>
              </div>
              <div className={"review"}>
                <div className={"review-stars"}>{"★★★★★"}</div>
                <p className={"review-quote"}>{"\"We use this for product feedback analysis and it's been a game-changer. Clear sentiment insights help us prioritize features and improvements.\""}
</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"MR"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"Mark Rodriguez"}</div>
                    <div className={"role"}>{"Product Manager"}</div>
                  </div>
                </div>
              </div>
              <div className={"review"}>
                <div className={"review-stars"}>{"★★★★★"}</div>
                <p className={"review-quote"}>{"\"Finally a sentiment tool that understands sarcasm and context. The results are consistent and reliable for our social media monitoring.\""}
</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"SJ"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"Sarah Johnson"}</div>
                    <div className={"role"}>{"Marketing Director"}</div>
                  </div>
                </div>
              </div>
              <div className={"review"}>
                <div className={"review-stars"}>{"★★★★★"}</div>
                <p className={"review-quote"}>{"\"Works perfectly for support ticket analysis. The AI helps us identify frustrated customers and prioritize urgent issues effectively.\""}
</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"DP"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"David Park"}</div>
                    <div className={"role"}>{"Support Team Lead"}</div>
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
              <a className={"related-card"} href={"/tools/ai-chatbot"}>
                <div className={"glyph"}>{"∞"}</div>
                <h4>{"AI Chatbot"}</h4>
                <p>{"Conversational assistant for your data and questions."}</p>
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
            <p className={"intro"}>{"Common questions about the AI Sentiment Analysis Tool."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"faq-list"}>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"What is an AI Sentiment Analysis Tool?"}</summary>
                <div className={"faq-a"}>{"A tool that analyzes text to determine emotional tone and sentiment."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is the sentiment analysis tool free?"}</summary>
                <div className={"faq-a"}>{"Yes, free access is available with optional upgrades."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Can it analyze customer reviews and feedback?"}</summary>
                <div className={"faq-a"}>{"Yes, it works with reviews, comments, emails, and messages."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Does it understand context, not just keywords?"}</summary>
                <div className={"faq-a"}>{"Yes, the AI analyzes context and tone."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is this tool suitable for businesses?"}</summary>
                <div className={"faq-a"}>{"Yes, it's designed for professional and business use."}</div>
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
            <span className={"accent"}>{"how people feel."}</span>
          </h2>
          <p>{"Analyze sentiment instantly with AI — fast, accurate, and reliable."}</p>
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