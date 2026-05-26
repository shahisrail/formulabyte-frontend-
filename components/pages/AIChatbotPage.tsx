'use client';

import React, { useEffect } from 'react';

export default function AIChatbotPage() {
  useEffect(() => {
    const uploadZone = document.getElementById('upload-zone');
    const fileInput = document.getElementById('file-input');

    if (!uploadZone || !fileInput) return;

    // Handle drag and drop events
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
      uploadZone?.addEventListener(eventName, preventDefaults, false);
      document.body?.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e: Event) {
      e.preventDefault();
      e.stopPropagation();
    }

    // Highlight drop zone when item is dragged over it
    ['dragenter', 'dragover'].forEach(eventName => {
      uploadZone?.addEventListener(eventName, () => {
        uploadZone.classList.add('drag-over');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      uploadZone?.addEventListener(eventName, () => {
        uploadZone.classList.remove('drag-over');
      }, false);
    });

    // Handle dropped files
    uploadZone?.addEventListener('drop', (e: Event) => {
      const dt = e as DragEvent;
      const files = dt.dataTransfer?.files;
      handleFiles(files);
    }, false);

    // Handle clicked upload
    fileInput?.addEventListener('change', function(this: HTMLInputElement) {
      handleFiles(this.files);
    }, false);

    function handleFiles(files: FileList | null | undefined) {
      if (!files || files.length === 0) return;

      // Upload files to server
      uploadFiles(files);
    }

    async function uploadFiles(files: FileList) {
      // Redirect to login page when files are uploaded
      window.location.href = 'https://dashboard.formulabyte.com/';
    }

    // Cleanup event listeners
    return () => {
      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        uploadZone?.removeEventListener(eventName, preventDefaults);
        document.body?.removeEventListener(eventName, preventDefaults);
      });
    };
  }, []);
  return (
    <>
      <link rel="stylesheet" href="/page-styles/excel-generator.css" />
    <section className="hero">
      <div className="hero-inner">
        <div className="eyebrow">AI Data Analysis Chat</div>
        <h1>
          Ask anything about your data…
          <span className="accent">e.g. What's driving revenue this month?</span>
        </h1>
        <p className="lede">Upload your data files and ask questions in plain English. Get instant insights, visualizations, and answers without writing formulas or queries. Simply drag and drop your files and start analyzing.</p>
        <div className="hero-trust">
          <span className="trust-pill">
            <span className="dot"></span>
            No formulas needed
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            Instant insights
          </span>
          <span className="trust-pill">
            <span className="dot"></span>
            Works with any data
          </span>
        </div>
        <div className="upload-card">
          <label className="upload-zone" htmlFor="file-input" id="upload-zone">
            <div className="upload-icon-wrap">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
            </div>
            <h3 className="upload-title">
              Drag and drop your data files here
            </h3>
            <p className="upload-desc">
              or
              <span className="upload-browse">
                click to browse
              </span>
              from your computer
            </p>
            <input type="file" id="file-input" hidden multiple accept=".csv,.xlsx,.xls,.json,.txt" />
          </label>
          <div className="upload-formats">
            <span className="format-pill">CSV</span>
            <span className="format-pill">XLSX</span>
            <span className="format-pill">XLS</span>
            <span className="format-pill">JSON</span>
            <span className="format-pill">TXT</span>
            <span className="format-divider">·</span>
            <span className="format-info">Up to 50 MB · Private &amp; secure</span>
          </div>
        </div>
        <div className="example-prompts">
          <span>Try asking:</span>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>What's driving revenue this month?</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Show me top performing products</button>
          <button className="chip" onClick={() => window.location.href = 'https://dashboard.formulabyte.com/'}>Compare sales by region</button>
        </div>
      </div>
    </section>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"row"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Build an AI Chatbot Using AI"}</div>
            <h2>
              {"Customers expect instant responses "}
              <span className={"serif-accent"}>{"— across websites, apps, and internal tools."}</span>
            </h2>
          </div>
          <div className={"row-body"}>
            <p className={"intro"}>{"The AI Chatbot understands intent, context, and conversation flow — not just keywords. Formula Byte helps you build reliable, intelligent chat experiences quickly."}</p>
            <ul className={"bulleted"}>
              <li><strong>{"Create an AI chatbot for customer support"}</strong></li>
              <li><strong>{"Automate responses with an AI chatbot"}</strong></li>
              <li><strong>{"Test an AI chatbot for free"}</strong></li>
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
              {"Why traditional chatbots "}
              <span className={"serif-accent"}>{"fail."}</span>
            </h2>
            <p className={"intro"}>{"Rule-based chatbots break easily. Common problems include rigid scripts that don't adapt, missed user intent, repetitive or irrelevant replies, and high maintenance with constant rule updates. Static chatbots frustrate users instead of helping them. AI replaces scripted logic with real understanding."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Rigid scripts that don't adapt"}</li>
              <li>{"Missed user intent"}</li>
              <li>{"Repetitive or irrelevant replies"}</li>
              <li>{"High maintenance and constant rule updates"}</li>
              <li>{"Static chatbots frustrate users instead of helping them"}</li>
            </ul>
            <blockquote className={"pull-quote"}>
              {" \"Our old chatbot just kept saying 'I don't understand' to every customer question. It was damaging our brand.\" "}
              <cite>{"— Customer Support Lead, SaaS Company"}</cite>
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
            <h2>{"No complex flows. No endless decision trees. No training overhead."}</h2>
            <p className={"intro"}>{"Four steps from defining your purpose to deploying a working AI chatbot. No complex flows. No endless decision trees. No training overhead."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"steps"}>
              <div className={"step"}>
                <div className={"step-num"}>{"1"}</div>
                <div>
                  <h3>{"Define your chatbot's purpose or input data"}</h3>
                  <p>{"Tell the AI what your chatbot should do — customer support, FAQs, lead qualification, or internal help."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"2"}</div>
                <div>
                  <h3>{"AI understands user intent and conversation context"}</h3>
                  <p>{"The model analyzes what users want and maintains context throughout the conversation."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"3"}</div>
                <div>
                  <h3>{"Smart responses are generated instantly"}</h3>
                  <p>{"Get intelligent, context-aware replies that feel natural and helpful in seconds."}</p>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"4"}</div>
                <div>
                  <h3>{"Deploy and start conversations"}</h3>
                  <p>{"Your AI chatbot is ready to engage users 24/7 across websites, apps, or internal tools."}</p>
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
            <h2>{"What the AI Chatbot actually does."}</h2>
            <p className={"intro"}>{"This is not a basic chatbot builder. The AI chatbot works as a complete conversation intelligence system."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"capability-grid"}>
              <div className={"capability"}>
                <span className={"cap-num"}>{"01"}</span>
                <h3>{"Natural Language Understanding"}</h3>
                <p>{"Understands what users mean, not just what they type."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"02"}</span>
                <h3>{"Context-Aware Conversations"}</h3>
                <p>{"Maintains context across messages for meaningful, continuous dialogue."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"03"}</span>
                <h3>{"Intent Detection & Routing"}</h3>
                <p>{"Identifies user intent and responds appropriately or escalates when needed."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"04"}</span>
                <h3>{"Smart Response Generation"}</h3>
                <p>{"Generates accurate, human-like replies in real time."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"05"}</span>
                <h3>{"Multi-Use Case Support"}</h3>
                <p>{"Handles customer support, FAQs, lead qualification, and internal queries."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"06"}</span>
                <h3>{"Scalable Conversation Handling"}</h3>
                <p>{"Manages multiple conversations simultaneously without performance loss."}</p>
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
            <h2>{"What You Get with the AI Chatbot"}</h2>
            <p className={"intro"}>{"Experience the full benefits of AI-powered conversation automation."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"benefits-strip"}>
              <div className={"benefit-item"}>
                <h4>{"Instant responses"}</h4>
                <p>{"24/7 automated conversations without delays"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Improved user experience"}</h4>
                <p>{"Helpful, relevant replies that feel natural"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Operational efficiency"}</h4>
                <p>{"Reduce support workload and response time"}</p>
              </div>
              <div className={"benefit-item"}>
                <h4>{"Scalable automation"}</h4>
                <p>{"Works for small teams and growing businesses alike"}</p>
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
            <h2>{"Who Should Use an AI Chatbot"}</h2>
            <p className={"intro"}>{"If conversations drive your business, an AI chatbot saves time and improves engagement."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>{"Customer support teams"}</li>
              <li>{"SaaS and product businesses"}</li>
              <li>{"E-commerce stores"}</li>
              <li>{"Sales and lead generation teams"}</li>
              <li>{"Companies automating internal help desks"}</li>
            </ul>
            <p className={"audience-footer"}>
              {"If conversations drive your business, an AI chatbot saves time and improves engagement."}
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
            <h2>{"Why Formula Byte's AI Chatbot Is Different"}</h2>
            <p className={"intro"}>{"Basic chatbots fail where it matters. Here's the difference."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"compare"}>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"Basic chatbots"}</div>
                <h3>{"Limited. Scripted."}</h3>
                <ul>
                  <li>{"Follow fixed scripts"}</li>
                  <li>{"Fail outside predefined flows"}</li>
                  <li>{"Require constant updates"}</li>
                </ul>
              </div>
              <div className={"compare-col"}>
                <div className={"compare-label"}>{"Formula Byte's AI"}</div>
                <h3>{"Intelligent. Adaptive."}</h3>
                <ul>
                  <li>{"Understands real user intent"}</li>
                  <li>{"Adapts responses dynamically"}</li>
                  <li>{"Delivers consistent conversation quality"}</li>
                  <li>{"This is not chat automation — it's conversation intelligence"}</li>
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
              {"Free AI Chatbot – What "}
              <span className={"serif-accent"}>{"Free"}</span>
              {" Means"}
            </h2>
            <p className={"intro"}>{"You can try the AI chatbot for free and test real conversations."}</p>
          </div>
          <div className={"row-body"}>
            <ul className={"bulleted"}>
              <li>
                <strong>{"Build and test chatbot responses"}</strong>
              </li>
              <li>
                <strong>{"Evaluate conversation quality"}</strong>
              </li>
              <li>
                <strong>{"Experiment with basic use cases"}</strong>
              </li>
              <li>
                <strong>{"Upgrade only if you need higher usage limits or advanced deployment"}</strong>
              </li>
            </ul>
            <div className={"free-block"}>
              <div>
                <h3>{"Start building in seconds."}</h3>
                <p>{"No card. No setup. Just describe your bot."}</p>
              </div>
              <div className={"stats-inline"}>
                <div className={"stat-inline"}>
                  <div className={"stat-num"}>{"5k+"}</div>
                  <div className={"stat-label"}>{"Users"}</div>
                </div>
                <div className={"stat-inline"}>
                  <div className={"stat-num"}>{"20k+"}</div>
                  <div className={"stat-label"}>{"Bots"}</div>
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
                <span>{"Conversations are handled securely"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"02"}</span>
                <span>{"No manual review of chat data"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"03"}</span>
                <span>{"Privacy-focused processing"}</span>
              </div>
              <div className={"security-item"}>
                <span className={"sec-num"}>{"04"}</span>
                <span>{"Safe for business and internal use - Your data stays protected"}</span>
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
            <p className={"intro"}>{"Teams using AI to transform customer conversations."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"reviews"}>
              <div className={"review"}>
                <div className={"review-stars"}>{"★★★★★"}</div>
                <p className={"review-quote"}>{"\"This AI chatbot completely transformed our customer support. Response times went from hours to seconds, and customer satisfaction is at an all-time high.\""}
</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"JW"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"James Wilson"}</div>
                    <div className={"role"}>{"Customer Support Manager"}</div>
                  </div>
                </div>
              </div>
              <div className={"review"}>
                <div className={"review-stars"}>{"★★★★★"}</div>
                <p className={"review-quote"}>{"\"We replaced our old rule-based chatbot with this AI solution. The difference is incredible — it actually understands what customers want.\""}
</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"SM"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"Sarah Martinez"}</div>
                    <div className={"role"}>{"Product Manager"}</div>
                  </div>
                </div>
              </div>
              <div className={"review"}>
                <div className={"review-stars"}>{"★★★★★"}</div>
                <p className={"review-quote"}>{"\"Setup was incredibly fast and the chatbot handles complex queries beautifully. Our support team can now focus on high-value issues.\""}
</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"MK"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"Michael Kim"}</div>
                    <div className={"role"}>{"Operations Director"}</div>
                  </div>
                </div>
              </div>
              <div className={"review"}>
                <div className={"review-stars"}>{"★★★★★"}</div>
                <p className={"review-quote"}>{"\"The AI chatbot feels natural and helpful. Our customers actually prefer using it over waiting for human agents. Game-changer for our business.\""}
</p>
                <div className={"review-author"}>
                  <div className={"review-avatar"}>{"ER"}</div>
                  <div className={"review-meta"}>
                    <div className={"name"}>{"Emily Rodriguez"}</div>
                    <div className={"role"}>{"E-commerce Owner"}</div>
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
            <p className={"intro"}>{"Common questions about the AI Chatbot."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"faq-list"}>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"What is an AI chatbot?"}</summary>
                <div className={"faq-a"}>{"An AI chatbot is a system that understands and responds to user messages intelligently."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is the AI chatbot free to use?"}</summary>
                <div className={"faq-a"}>{"Yes, free access is available with optional upgrades."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Can it handle customer support queries?"}</summary>
                <div className={"faq-a"}>{"Yes, it's designed for support, FAQs, and automation."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Does it understand context and intent?"}</summary>
                <div className={"faq-a"}>{"Yes, it uses context-aware AI for better conversations."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is this suitable for businesses?"}</summary>
                <div className={"faq-a"}>{"Yes, it's built for professional and business use cases."}</div>
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
            {"Stop relying on "}
            <span className={"accent"}>{"rigid scripts."}</span>
          </h2>
          <p>{"Build an AI chatbot that understands and responds intelligently."}</p>
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