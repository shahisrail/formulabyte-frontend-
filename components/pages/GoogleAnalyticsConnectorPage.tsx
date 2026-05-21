import React from 'react';
import PageBehavior from '@/components/runtime/PageBehavior';

export default function GoogleAnalyticsConnectorPage() {
  return (
    <>
      <link rel="stylesheet" href="/page-styles/google-analytics-connector.css" />
      <PageBehavior page={"google-analytics-connector"} />
    <div className={"breadcrumb"}>
      <a href={"/connectors"}>{"Connectors"}</a>
      <span className={"sep"}>{"/"}</span>
      <span className={"current"}>{"Google Analytics 4"}</span>
    </div>
    <section className={"hero"}>
      <div className={"hero-inner"}>
        <div className={"hero-pill"}>
          <span className={"tag"}>{"Data Connector"}</span>
          <span>{"Google Analytics 4 \u00b7 Native integration"}</span>
        </div>
        <h1>
          {"Analyze your Google Analytics data "}
          <span className={"accent"}>{"with AI."}</span>
        </h1>
        <p className={"lede"}>{" Connect Google Analytics 4 to Formula Byte and ask questions about your website traffic, user behavior, and conversions \u2014 in plain English. No exports, no SQL, no dashboards to maintain. "}</p>
        <div className={"hero-ctas"}>
          <a href={"/auth"} className={"btn btn-primary btn-lg"}>{"Connect Google Analytics \u2192"}</a>
          <a href={"#setup"} className={"btn btn-outline btn-lg"}>{"Read setup guide"}</a>
        </div>
        <div className={"hero-trustline"}>
          <span>
            <span className={"check"}>{"\u2713"}</span>
            {"Free to try"}
          </span>
          <span className={"sep"}>{"\u00b7"}</span>
          <span>
            <span className={"check"}>{"\u2713"}</span>
            {"Read-only access"}
          </span>
          <span className={"sep"}>{"\u00b7"}</span>
          <span>
            <span className={"check"}>{"\u2713"}</span>
            {"GA4 supported"}
          </span>
          <span className={"sep"}>{"\u00b7"}</span>
          <span>
            <span className={"check"}>{"\u2713"}</span>
            {"OAuth 2.0 secure"}
          </span>
        </div>
      </div>
      <div className={"connection-wrap"}>
        <div className={"connection-card"}>
          <div className={"conn-side"}>
            <div className={"conn-mark ga4"}>{"GA"}</div>
            <div className={"conn-name"}>{"Google Analytics 4"}</div>
            <div className={"conn-meta"}>{"acme-store.com"}</div>
          </div>
          <div className={"conn-flow"} aria-hidden={"true"}>
            <div className={"flow-label"}>{"SYNC"}</div>
            <div className={"flow-line"}>
              <span className={"pulse"}></span>
              <span className={"pulse p2"}></span>
              <span className={"pulse p3"}></span>
            </div>
          </div>
          <div className={"conn-side"}>
            <div className={"conn-mark fb"}>{"f"}</div>
            <div className={"conn-name"}>{"Formula Byte"}</div>
            <div className={"conn-meta"}>{"Workspace \u00b7 main"}</div>
          </div>
          <div className={"conn-status-pill"}>
            <span className={"live-dot"}></span>
            <strong>{"Connected"}</strong>
            <span>{"\u00b7 read-only \u00b7 just now"}</span>
          </div>
        </div>
        <div className={"query-preview"} aria-hidden={"true"}>
          <div className={"query-input-mock"}>
            <span className={"q-prefix"}>{"\u203a"}</span>
            <span className={"q-text"}>{"How many sessions did we get last month?"}</span>
            <span className={"q-typed-caret"}></span>
            <span className={"q-time"}>{"2.1s"}</span>
          </div>
          <div className={"query-response"}>
            <div className={"query-response-avatar"}>{"f"}</div>
            <div className={"query-response-body"}>
              <div className={"query-response-text"}>
                {" Last month, your site had "}
                <strong>{"1,247,392 sessions"}</strong>
                {" \u2014 up "}
                <strong>{"18%"}</strong>
                {" from the previous month. Organic search drove most of the lift. "}
              </div>
              <div className={"query-stats"}>
                <span className={"qstat"}>
                  <strong>{"1.2M"}</strong>
                  {" sessions"}
                </span>
                <span className={"qstat"}>
                  <strong>{"+18%"}</strong>
                  {" vs prev. month"}
                </span>
                <span className={"qstat"}>
                  <strong>{"847K"}</strong>
                  {" users"}
                </span>
                <span className={"qstat"}>
                  <strong>{"3:42"}</strong>
                  {" avg duration"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"row-stacked"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Why this connector"}</div>
            <h2>
              {"One sign-in. "}
              <span className={"serif-accent"}>{"Real-time"}</span>
              {" answers."}
            </h2>
            <p className={"intro"}>{"No CSV exports, no manual refreshes, no dashboard maintenance. Just connect once and start asking."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"pillars-grid"}>
              <div className={"pillar"}>
                <div className={"pillar-icon"}>{"Q"}</div>
                <h3>{"Quick setup"}</h3>
                <p>{"Simple Google sign-in with no manual configuration. Select your GA4 property and start analyzing in under a minute."}</p>
              </div>
              <div className={"pillar"}>
                <div className={"pillar-icon"}>{"S"}</div>
                <h3>{"Secure connection"}</h3>
                <p>{"Enterprise-grade OAuth 2.0 authentication. Read-only access by default. Credentials stored encrypted at rest and in transit."}</p>
              </div>
              <div className={"pillar"}>
                <div className={"pillar-icon"}>{"R"}</div>
                <h3>{"Real-time access"}</h3>
                <p>{"Query your live GA4 data instantly. No exports, no stale CSVs \u2014 always the latest metrics, sub-second response times."}</p>
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
            <div className={"eyebrow"}>{"What you can analyze"}</div>
            <h2>
              {"Ask anything. Get "}
              <span className={"serif-accent"}>{"real answers"}</span>
              {"."}
            </h2>
            <p className={"intro"}>{"Four common categories of questions Formula Byte handles fluently. Click any example to see how it'd actually work \u2014 or write your own."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"analyze-grid"}>
              <div className={"analyze-card"}>
                <div className={"analyze-head"}>
                  <div className={"analyze-icon"}>{"T"}</div>
                  <h3>{"Traffic Analysis"}</h3>
                </div>
                <div className={"query-list"}>
                  <div className={"query-pill"}>
                    <span className={"q-icon"}>{"\u203a"}</span>
                    <span className={"q-text"}>{"How many sessions last month?"}</span>
                    <span className={"q-go"}>{"RUN \u21b5"}</span>
                  </div>
                  <div className={"query-pill"}>
                    <span className={"q-icon"}>{"\u203a"}</span>
                    <span className={"q-text"}>{"Top 10 pages by pageviews?"}</span>
                    <span className={"q-go"}>{"RUN \u21b5"}</span>
                  </div>
                  <div className={"query-pill"}>
                    <span className={"q-icon"}>{"\u203a"}</span>
                    <span className={"q-text"}>{"Traffic trends past 90 days"}</span>
                    <span className={"q-go"}>{"RUN \u21b5"}</span>
                  </div>
                </div>
              </div>
              <div className={"analyze-card"}>
                <div className={"analyze-head"}>
                  <div className={"analyze-icon"}>{"S"}</div>
                  <h3>{"Source & Campaign"}</h3>
                </div>
                <div className={"query-list"}>
                  <div className={"query-pill"}>
                    <span className={"q-icon"}>{"\u203a"}</span>
                    <span className={"q-text"}>{"Which channels drive the most traffic?"}</span>
                    <span className={"q-go"}>{"RUN \u21b5"}</span>
                  </div>
                  <div className={"query-pill"}>
                    <span className={"q-icon"}>{"\u203a"}</span>
                    <span className={"q-text"}>{"Organic vs paid this quarter?"}</span>
                    <span className={"q-go"}>{"RUN \u21b5"}</span>
                  </div>
                  <div className={"query-pill"}>
                    <span className={"q-icon"}>{"\u203a"}</span>
                    <span className={"q-text"}>{"Highest conversion rate campaigns?"}</span>
                    <span className={"q-go"}>{"RUN \u21b5"}</span>
                  </div>
                </div>
              </div>
              <div className={"analyze-card"}>
                <div className={"analyze-head"}>
                  <div className={"analyze-icon"}>{"U"}</div>
                  <h3>{"User Behavior"}</h3>
                </div>
                <div className={"query-list"}>
                  <div className={"query-pill"}>
                    <span className={"q-icon"}>{"\u203a"}</span>
                    <span className={"q-text"}>{"Average session duration by device?"}</span>
                    <span className={"q-go"}>{"RUN \u21b5"}</span>
                  </div>
                  <div className={"query-pill"}>
                    <span className={"q-icon"}>{"\u203a"}</span>
                    <span className={"q-text"}>{"Bounce rate by landing page?"}</span>
                    <span className={"q-go"}>{"RUN \u21b5"}</span>
                  </div>
                  <div className={"query-pill"}>
                    <span className={"q-icon"}>{"\u203a"}</span>
                    <span className={"q-text"}>{"Highest exit rate pages?"}</span>
                    <span className={"q-go"}>{"RUN \u21b5"}</span>
                  </div>
                </div>
              </div>
              <div className={"analyze-card"}>
                <div className={"analyze-head"}>
                  <div className={"analyze-icon"}>{"C"}</div>
                  <h3>{"Conversions & Revenue"}</h3>
                </div>
                <div className={"query-list"}>
                  <div className={"query-pill"}>
                    <span className={"q-icon"}>{"\u203a"}</span>
                    <span className={"q-text"}>{"Conversions from Google Ads?"}</span>
                    <span className={"q-go"}>{"RUN \u21b5"}</span>
                  </div>
                  <div className={"query-pill"}>
                    <span className={"q-icon"}>{"\u203a"}</span>
                    <span className={"q-text"}>{"Conversion rate by country?"}</span>
                    <span className={"q-go"}>{"RUN \u21b5"}</span>
                  </div>
                  <div className={"query-pill"}>
                    <span className={"q-icon"}>{"\u203a"}</span>
                    <span className={"q-text"}>{"Revenue by traffic source?"}</span>
                    <span className={"q-go"}>{"RUN \u21b5"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className={"section-wrap"} id={"setup"}>
      <section className={"card"}>
        <div className={"row"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Detailed setup guide"}</div>
            <h2>
              {"Connect in "}
              <span className={"serif-accent"}>{"under a minute"}</span>
              {"."}
            </h2>
            <p className={"intro"}>{"Step-by-step instructions for connecting and configuring Google Analytics. No technical setup, no IT ticket required."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"steps"}>
              <div className={"step"}>
                <div className={"step-num"}>{"1"}</div>
                <div>
                  <h3>{"Click \"Connect Google Analytics\""}</h3>
                  <p>{"In your Formula Byte workspace, head to Connectors and choose Google Analytics 4. Click the connect button to start the secure OAuth flow."}</p>
                  <span className={"step-meta"}>{"~ 5 seconds"}</span>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"2"}</div>
                <div>
                  <h3>{"Sign in with your Google account"}</h3>
                  <p>{"Use the Google account that has access to your GA4 property. We use Google's standard OAuth 2.0 flow \u2014 your password is never visible to us."}</p>
                  <span className={"step-meta"}>{"~ 10 seconds"}</span>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"3"}</div>
                <div>
                  <h3>{"Authorize read-only access"}</h3>
                  <p>{"Review the permissions Formula Byte requests \u2014 strictly read-only access to your analytics data. We can't modify, delete, or write anything in your GA4 account."}</p>
                  <span className={"step-meta"}>{"~ 5 seconds"}</span>
                </div>
              </div>
              <div className={"step"}>
                <div className={"step-num"}>{"4"}</div>
                <div>
                  <h3>{"Select your GA4 property & start asking"}</h3>
                  <p>{"Pick which property to connect from the dropdown. Once connected, you can immediately start asking questions in plain English. Switch properties anytime."}</p>
                  <span className={"step-meta"}>{"~ 15 seconds"}</span>
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
            <div className={"eyebrow"}>{"Explore other connectors"}</div>
            <h2>
              {"Connect "}
              <span className={"serif-accent"}>{"everything"}</span>
              {" you analyze."}
            </h2>
            <p className={"intro"}>{"Bring all your data sources together. Each connector takes under a minute to set up \u2014 and works the same way: ask in plain English."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"connector-grid"}>
              <a className={"connector-card"} href={"/connectors/google-search-console"}>
                <div className={"c-head"}>
                  <div className={"c-mark gsc"}>{"GS"}</div>
                  <h4>{"Google Search Console"}</h4>
                </div>
                <p>{"Analyze search performance, keyword rankings, and indexing with AI-powered queries."}</p>
                <div className={"c-foot"}>
                  <span className={"c-link"}>{"Connect \u2192"}</span>
                  <span className={"c-tag"}>{"SEO"}</span>
                </div>
              </a>
              <a className={"connector-card"} href={"/connectors/bigquery"}>
                <div className={"c-head"}>
                  <div className={"c-mark bq"}>{"BQ"}</div>
                  <h4>{"Google BigQuery"}</h4>
                </div>
                <p>{"Analyze massive datasets in your data warehouse using AI-powered natural language queries."}</p>
                <div className={"c-foot"}>
                  <span className={"c-link"}>{"Connect \u2192"}</span>
                  <span className={"c-tag"}>{"WAREHOUSE"}</span>
                </div>
              </a>
              <a className={"connector-card"} href={"/connectors/snowflake"}>
                <div className={"c-head"}>
                  <div className={"c-mark sf"}>{"SF"}</div>
                  <h4>{"Snowflake"}</h4>
                </div>
                <p>{"Connect your Snowflake data warehouse and analyze your data with natural language. No SQL required."}</p>
                <div className={"c-foot"}>
                  <span className={"c-link"}>{"Connect \u2192"}</span>
                  <span className={"c-tag"}>{"WAREHOUSE"}</span>
                </div>
              </a>
              <a className={"connector-card"} href={"/connectors/mysql"}>
                <div className={"c-head"}>
                  <div className={"c-mark my"}>{"My"}</div>
                  <h4>{"MySQL"}</h4>
                </div>
                <p>{"Query your MySQL database using AI-powered natural language. No SQL expertise required."}</p>
                <div className={"c-foot"}>
                  <span className={"c-link"}>{"Connect \u2192"}</span>
                  <span className={"c-tag"}>{"DATABASE"}</span>
                </div>
              </a>
              <a className={"connector-card"} href={"/connectors/postgresql"}>
                <div className={"c-head"}>
                  <div className={"c-mark pg"}>{"Pg"}</div>
                  <h4>{"PostgreSQL"}</h4>
                </div>
                <p>{"Explore your PostgreSQL data with AI-powered natural language queries. No SQL required."}</p>
                <div className={"c-foot"}>
                  <span className={"c-link"}>{"Connect \u2192"}</span>
                  <span className={"c-tag"}>{"DATABASE"}</span>
                </div>
              </a>
              <a className={"connector-card"} href={"/connectors/supabase"}>
                <div className={"c-head"}>
                  <div className={"c-mark sb"}>{"Sb"}</div>
                  <h4>{"Supabase"}</h4>
                </div>
                <p>{"Analyze live product, user, and event data from your Supabase Postgres with natural language queries."}</p>
                <div className={"c-foot"}>
                  <span className={"c-link"}>{"Connect \u2192"}</span>
                  <span className={"c-tag"}>{"DATABASE"}</span>
                </div>
              </a>
              <a className={"connector-card"} href={"/connectors/mssql"}>
                <div className={"c-head"}>
                  <div className={"c-mark ms"}>{"MS"}</div>
                  <h4>{"Microsoft SQL Server"}</h4>
                </div>
                <p>{"Explore enterprise data with AI-powered natural language queries. No SQL expertise needed."}</p>
                <div className={"c-foot"}>
                  <span className={"c-link"}>{"Connect \u2192"}</span>
                  <span className={"c-tag"}>{"ENTERPRISE"}</span>
                </div>
              </a>
              <a className={"connector-card"} href={"/connectors"}>
                <div className={"c-head"}>
                  <div className={"c-mark"} style={{"background": "linear-gradient(135deg, var(--primary) 0%, var(--primary-press) 100%)", "boxShadow": "0 3px 8px rgba(129,113,208,0.25)", "fontFamily": "var(--font-serif)", "fontStyle": "italic"}}>{"+"}</div>
                  <h4>{"View all connectors"}</h4>
                </div>
                <p>{"20+ integrations and counting. Don't see what you need? Request a new connector \u2014 we ship the most-asked first."}</p>
                <div className={"c-foot"}>
                  <span className={"c-link"}>{"Browse all \u2192"}</span>
                  <span className={"c-tag"}>{"20+"}</span>
                </div>
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
            <p className={"intro"}>
              {"Quick answers about the Google Analytics 4 connector. Still curious? "}
              <a href={"/contact"}>{"Get in touch"}</a>
              {"."}
            </p>
          </div>
          <div className={"row-body"}>
            <div className={"faq-list"}>
              <details className={"faq-item"} open>
                <summary className={"faq-q"}>{"What version of Google Analytics does Formula Byte support?"}</summary>
                <div className={"faq-a"}>
                  {"Formula Byte supports "}
                  <strong>{"Google Analytics 4 (GA4)"}</strong>
                  {", Google's current analytics platform. We do not support Universal Analytics (UA), which Google sunset in July 2023. If you've migrated to GA4, you're good to go."}
                </div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"What permissions does Formula Byte need?"}</summary>
                <div className={"faq-a"}>
                  {"Formula Byte requests "}
                  <strong>{"read-only"}</strong>
                  {" access to your GA4 reporting data through Google's official Analytics Data API. We can read sessions, events, conversions, audience, and acquisition data \u2014 but we cannot modify, delete, or write anything to your GA4 account. You can revoke access at any time from your Google account settings."}
                </div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"How do I connect Google Analytics to Formula Byte?"}</summary>
                <div className={"faq-a"}>{"In your workspace, click Connectors \u2192 Google Analytics 4 \u2192 Connect. Sign in with your Google account, authorize read-only access, and select the GA4 property you want to analyze. The full process takes under a minute and requires no manual configuration. See the setup guide above for a step-by-step walkthrough."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"What data can I analyze with Formula Byte?"}</summary>
                <div className={"faq-a"}>{"Anything available in your GA4 reports \u2014 sessions, users, pageviews, bounce rate, session duration, acquisition channels, source/medium, campaigns, conversions, events, ecommerce revenue, device breakdowns, geographic data, and audience segments. If you can build a report for it in GA4, you can ask Formula Byte about it."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is my Google Analytics data secure?"}</summary>
                <div className={"faq-a"}>{"Yes. We use Google's standard OAuth 2.0 flow \u2014 your password is never exposed to us. All credentials are encrypted at rest and in transit, and your data is processed in isolated environments. We never train AI models on your data and never share it with third parties. Read our privacy policy for full details."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Can I compare time periods in my analytics?"}</summary>
                <div className={"faq-a"}>{"Absolutely. Just ask. Examples: \"Compare sessions this month vs last month,\" \"Year-over-year revenue change,\" or \"How did organic traffic perform in Q3 vs Q2?\" Formula Byte handles relative dates (\"last week,\" \"past 90 days\") and explicit ranges equally well."}</div>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className={"final-cta-wrap"}>
      <section className={"final-cta"}>
        <div className={"final-cta-inner"}>
          <div className={"ga-mini-mark"}>{"GA"}</div>
          <h2>
            {"Ready to analyze your "}
            <span className={"accent"}>{"Google Analytics"}</span>
            {" data?"}
          </h2>
          <p>{"Free to try. No credit card. Connect in under a minute and start asking questions immediately."}</p>
          <div className={"btn-row"}>
            <a href={"/auth"} className={"btn btn-primary btn-lg"}>{"Connect Google Analytics \u2192"}</a>
            <a href={"/auth"} className={"btn btn-outline btn-lg"}>{"Sign in to existing account"}</a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
