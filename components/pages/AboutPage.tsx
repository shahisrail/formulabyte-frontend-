import React from 'react';

export default function AboutPage() {
  return (
    <>
    <section className={"hero"}>
      <div className={"hero-inner"}>
        <div className={"hero-eyebrow-pill"}>
          <span className={"tag"}>{"About"}</span>
          <span>{"The story behind Formula Byte"}</span>
        </div>
        <h1>
          {"Built so working with data feels"}
          <br />
          <span className={"accent"}>{"like a conversation."}</span>
        </h1>
        <p className={"lede"}>{" Formula Byte is a USA-based AI-powered data assistant that helps professionals instantly generate, explain, and debug Excel formulas, spreadsheets, queries, and code \u2014 using simple, natural language. "}</p>
        <div className={"hero-meta"}>
          <span className={"accent-meta"}>{"Founded 2025"}</span>
          <span className={"sep"}>{"\u00b7"}</span>
          <span className={"accent-meta"}>{"Sheridan, Wyoming"}</span>
          <span className={"sep"}>{"\u00b7"}</span>
          <span className={"accent-meta"}>{"Users in 30+ countries"}</span>
          <span className={"sep"}>{"\u00b7"}</span>
          <span className={"accent-meta"}>{"4.9\u2605 rated"}</span>
        </div>
      </div>
    </section>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"intro-block"}>
          <div className={"eyebrow"} style={{"justifyContent": "center"}}>{"Who we are"}</div>
          <p>
            {" Formula Byte transforms complex technical workflows into "}
            <strong>{"intuitive conversations"}</strong>
            {" \u2014 eliminating manual trial-and-error and syntax-heavy tools. Built for speed, clarity, and accessibility, it's designed for anyone who works with data, from first-time spreadsheet users to senior analysts. "}
          </p>
          <p>
            {" Founded by "}
            <strong>{"Tusar Ahmed"}</strong>
            {", Formula Byte was created to solve a real problem faced by millions of data professionals: too much time spent writing formulas, debugging errors, and searching for answers. We think there's a better way. "}
          </p>
          <div className={"address-pill"}>{"75 E 3rd St Ste 7, Sheridan, Wyoming 82801, USA"}</div>
        </div>
      </section>
    </div>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"row"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Founder story"}</div>
            <h2>
              {"From frustration to a "}
              <span className={"serif-accent"}>{"first principle"}</span>
              {"."}
            </h2>
            <p className={"intro"}>{"A simple insight from years inside data work: the problem was never the data \u2014 it was the interface."}</p>
          </div>
          <div className={"row-body"}>
            <p>{"During his journey in data science, Tusar Ahmed experienced a frustration shared by millions \u2014 hours lost debugging formulas, writing repetitive code, and switching between half a dozen tools just to complete simple tasks."}</p>
            <p>
              {"He realized the core issue wasn't data complexity. It was "}
              <strong>{"how humans were forced to interact with it"}</strong>
              {"."}
            </p>
            <p>{"That insight led to Formula Byte: a platform where users don't need to learn complex syntax. They describe what they need, and the system generates accurate, ready-to-use outputs instantly."}</p>
            <div className={"founder-card"} style={{"marginTop": "26px"}}>
              <div className={"founder-quote"}>{" The core issue wasn't data complexity \u2014 it was how humans were forced to interact with it. Formula Byte exists to fix that. "}</div>
              <div className={"founder-meta"}>
                <div className={"founder-avatar"}>{"T"}</div>
                <div className={"founder-info"}>
                  <div className={"name"}>{"Tusar Ahmed"}</div>
                  <div className={"role"}>{"Founder, Formula Byte"}</div>
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
            <div className={"eyebrow"}>{"What we do"}</div>
            <h2>
              {"Your AI-powered "}
              <span className={"serif-accent"}>{"data co-pilot"}</span>
              {"."}
            </h2>
            <p className={"intro"}>{"One platform for every data task. Describe the problem in plain English \u2014 get a ready-to-use output in seconds. All powered by advanced AI with deep contextual understanding."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"capability-grid"}>
              <div className={"capability"}>
                <span className={"cap-num"}>{"01 / SPREADSHEETS"}</span>
                <h3>{"Excel & Google Sheets formulas"}</h3>
                <p>{"Generate any formula instantly \u2014 from simple SUMIFs to nested INDEX/MATCH and array logic."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"02 / AUTOMATION"}</span>
                <h3>{"VBA & Apps Script"}</h3>
                <p>{"Automate repetitive workflows with ready-to-run scripts. No macro recording, no syntax hunting."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"03 / DATABASES"}</span>
                <h3>{"SQL queries in plain English"}</h3>
                <p>{"Describe what you need from your data \u2014 joins, aggregates, window functions \u2014 and get clean SQL."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"04 / PYTHON"}</span>
                <h3>{"Python for data analysis"}</h3>
                <p>{"Generate pandas, NumPy, and visualization code for cleaning, modeling, and exploring your datasets."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"05 / POWER BI"}</span>
                <h3>{"DAX measures, made simple"}</h3>
                <p>{"Build accurate DAX measures and calculated columns without wrestling with Power BI's quirks."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"06 / REGEX"}</span>
                <h3>{"Regex patterns, decoded"}</h3>
                <p>{"Generate and explain regular expressions for any text-matching task \u2014 no cheat sheet required."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"07 / TEXT AI"}</span>
                <h3>{"Sentiment analysis"}</h3>
                <p>{"Analyze customer feedback, reviews, and survey responses with AI-driven sentiment scoring."}</p>
              </div>
              <div className={"capability"}>
                <span className={"cap-num"}>{"08 / CHAT"}</span>
                <h3>{"Real-time AI assistance"}</h3>
                <p>{"A chat-based co-pilot for any data task. Ask follow-ups, request edits, and iterate fast."}</p>
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
            <div className={"eyebrow"}>{"Why Formula Byte"}</div>
            <h2>
              {"Plain language. "}
              <span className={"serif-accent"}>{"Powerful output"}</span>
              {"."}
            </h2>
            <p className={"intro"}>{"No syntax to memorize, no documentation to dig through. Just describe what you want \u2014 and Formula Byte handles the rest."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"feature-trio"}>
              <div className={"feature-tile"}>
                <div className={"feature-tile-icon"}>{"L"}</div>
                <h3>{"Plain language input"}</h3>
                <p>{"No syntax, no complexity. Describe your problem in everyday English \u2014 that's the only skill you need."}</p>
              </div>
              <div className={"feature-tile"}>
                <div className={"feature-tile-icon"}>{"\u26a1"}</div>
                <h3>{"Instant results"}</h3>
                <p>{"Accurate outputs delivered in seconds \u2014 not the hours you'd spend Googling, debugging, and retrying."}</p>
              </div>
              <div className={"feature-tile"}>
                <div className={"feature-tile-icon"}>{"C"}</div>
                <h3>{"Context-aware AI"}</h3>
                <p>{"Understands your intent and adapts each response. Ask follow-ups and refine \u2014 it keeps up with you."}</p>
              </div>
              <div className={"feature-tile"}>
                <div className={"feature-tile-icon"}>{"\u2200"}</div>
                <h3>{"Built for everyone"}</h3>
                <p>{"From first-time spreadsheet users to senior analysts, no coding required. Power without the steep curve."}</p>
              </div>
              <div className={"feature-tile"}>
                <div className={"feature-tile-icon"}>{"A"}</div>
                <h3>{"AI-powered accuracy"}</h3>
                <p>{"Backed by advanced language models and continuous improvement based on real user feedback."}</p>
              </div>
              <div className={"feature-tile"}>
                <div className={"feature-tile-icon"}>{"\u221e"}</div>
                <h3>{"Always improving"}</h3>
                <p>{"New capabilities and refinements ship constantly \u2014 driven by what our users actually ask for."}</p>
              </div>
            </div>
            <div className={"mini-cta"}>
              <div>
                <h3>{"Start using Formula Byte today"}</h3>
                <p>{"Ready to simplify your data workflow? Turn complex tasks into simple conversations."}</p>
              </div>
              <a href="https://dashboard.formulabyte.com/" className={"btn btn-primary btn-lg"}>{"Get started free \u2192"}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"row"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Growth & traction"}</div>
            <h2>{"Quietly gaining ground, globally."}</h2>
            <p className={"intro"}>{"Since our launch in September 2025, Formula Byte has spread across continents and earned real loyalty from real users."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"traction-grid"}>
              <div className={"traction-card"}>
                <span className={"traction-tag"}>{"REACH"}</span>
                <span className={"traction-num"}>{"30+"}</span>
                <div className={"traction-label"}>{"Countries with active users across USA, UK, Europe & Asia"}</div>
              </div>
              <div className={"traction-card"}>
                <span className={"traction-tag"}>{"EARLY MOMENTUM"}</span>
                <span className={"traction-num"}>{"100+"}</span>
                <div className={"traction-label"}>{"Users signed up in the first 3 days of launch"}</div>
              </div>
              <div className={"traction-card"}>
                <span className={"traction-tag"}>{"SATISFACTION"}</span>
                <span className={"traction-num"}>{"4.9\u2605"}</span>
                <div className={"traction-label"}>{"Average rating from verified user reviews"}</div>
              </div>
              <div className={"traction-card"}>
                <span className={"traction-tag"}>{"LAUNCHED"}</span>
                <span className={"traction-num"}>{"Sept '25"}</span>
                <div className={"traction-label"}>{"First public release \u2014 and we've shipped weekly since"}</div>
              </div>
            </div>
            <div className={"traction-callout"}>
              <span className={"traction-callout-dot"}></span>
              <span>
                {"Payments secured by "}
                <strong style={{"color": "var(--text)"}}>{"Stripe"}</strong>
                {" \u00b7 Continuous improvement driven by real user feedback \u00b7 No data resold, ever."}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"row-stacked"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Why trust us"}</div>
            <h2>
              {"Built on real experience. "}
              <span className={"serif-accent"}>{"Trusted"}</span>
              {" globally."}
            </h2>
            <p className={"intro"}>{"Trust isn't a tagline \u2014 it's the result of doing the small things right, every day, over time."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"trust-grid"}>
              <div className={"trust-cell"}>
                <h4>{"Built on real experience"}</h4>
                <p>{"Created by a data professional who lived these problems daily \u2014 every feature solves a problem we hit ourselves."}</p>
              </div>
              <div className={"trust-cell"}>
                <h4>{"Trusted globally"}</h4>
                <p>{"A growing user base spanning startups, agencies, and enterprises across multiple industries and regions."}</p>
              </div>
              <div className={"trust-cell"}>
                <h4>{"High user satisfaction"}</h4>
                <p>{"Consistent 4.9\u2605 ratings and unsolicited positive feedback from people who use Formula Byte every day."}</p>
              </div>
              <div className={"trust-cell"}>
                <h4>{"Secure & reliable"}</h4>
                <p>{"Stripe-backed payments, stable infrastructure, and a serious commitment to keeping your data private."}</p>
              </div>
              <div className={"trust-cell"}>
                <h4>{"Transparent policies"}</h4>
                <p>{"Clear, plain-English terms. No dark patterns, no hidden fees, no surprises buried in the fine print."}</p>
              </div>
              <div className={"trust-cell"}>
                <h4>{"User-first decisions"}</h4>
                <p>{"We ship based on what users actually need \u2014 not what looks good in a roadmap deck."}</p>
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
            <div className={"eyebrow"}>{"Mission & vision"}</div>
            <h2>{"What we're here to do."}</h2>
            <p className={"intro"}>{"A short statement of why we exist \u2014 and where we believe data work is heading."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"mv-grid"}>
              <div className={"mv-col"}>
                <div className={"mv-label"}>{"Our mission"}</div>
                <h3>{"Eliminate the complexity of working with data."}</h3>
                <p>{"To make powerful data tools accessible to everyone \u2014 regardless of technical background or coding skill."}</p>
              </div>
              <div className={"mv-col vision"}>
                <div className={"mv-label"}>{"Our vision"}</div>
                <h3>{"A world where data feels as natural as conversation."}</h3>
                <p>{"No syntax, no barriers \u2014 just clarity. We're building toward a future where anyone can ask anything of their data and get a real answer."}</p>
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
            <div className={"eyebrow"}>{"Core values"}</div>
            <h2>
              {"Six principles we "}
              <span className={"serif-accent"}>{"build"}</span>
              {" by."}
            </h2>
            <p className={"intro"}>{"These aren't slogans on a wall \u2014 they're the filter we run every product decision through."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"values-grid"}>
              <div className={"value-card"}>
                <span className={"value-num"}>{"01"}</span>
                <h3>{"Simplicity first"}</h3>
                <p>{"If a feature isn't immediately obvious, we redesign it. Easy and intuitive beats clever every time."}</p>
              </div>
              <div className={"value-card"}>
                <span className={"value-num"}>{"02"}</span>
                <h3>{"Human-centered"}</h3>
                <p>{"Built around how people actually think \u2014 not how machines prefer to be addressed."}</p>
              </div>
              <div className={"value-card"}>
                <span className={"value-num"}>{"03"}</span>
                <h3>{"Accuracy"}</h3>
                <p>{"Outputs that hold up in real spreadsheets, real production databases, real client decks."}</p>
              </div>
              <div className={"value-card"}>
                <span className={"value-num"}>{"04"}</span>
                <h3>{"Speed"}</h3>
                <p>{"Instant results. Less manual work. Your time is the real metric we care about."}</p>
              </div>
              <div className={"value-card"}>
                <span className={"value-num"}>{"05"}</span>
                <h3>{"Continuous improvement"}</h3>
                <p>{"Always evolving \u2014 driven by user feedback, model advances, and our own restless curiosity."}</p>
              </div>
              <div className={"value-card"}>
                <span className={"value-num"}>{"06"}</span>
                <h3>{"Accessibility"}</h3>
                <p>{"For everyone, not just experts. Power tools shouldn't require a CS degree to wield."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"future-block"}>
          <div className={"eyebrow"}>{"A new way of working"}</div>
          <h3>
            {"Formula Byte is more than a tool \u2014 it's a "}
            <span className={"serif-accent"}>{"shift"}</span>
            {" in how humans interact with data."}
          </h3>
          <p>{"Whether you're a marketer, an analyst, a student, or a business owner \u2014 here's the simple promise."}</p>
          <div className={"future-toggle"}>
            <div className={"row-line muted"}>
              <span className={"x"}>{"\u00d7"}</span>
              <span>{"Fighting with formulas"}</span>
            </div>
            <div className={"row-line"}>
              <span className={"check"}>{"\u2713"}</span>
              <span>
                <strong>{"Communicating"}</strong>
                {" with data"}
              </span>
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
              {"The basics, answered. Have something else on your mind? "}
              <a href={"/contact"}>{"Get in touch"}</a>
              {"."}
            </p>
          </div>
          <div className={"row-body"}>
            <div className={"faq-list"}>
              <details className={"faq-item"} open>
                <summary className={"faq-q"}>{"What is Formula Byte?"}</summary>
                <div className={"faq-a"}>{"Formula Byte is an AI-powered data assistant that helps users generate, explain, and debug Excel formulas, SQL queries, Python code, and other data-related tasks using natural language. Instead of writing complex formulas or searching for solutions, you describe what you need \u2014 and Formula Byte returns accurate, ready-to-use outputs instantly."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Who is Formula Byte for?"}</summary>
                <div className={"faq-a"}>{"Formula Byte is built for data professionals, analysts, marketers, students, and non-technical users who work with data regularly. If you use Excel, Google Sheets, SQL, Python, or Power BI, Formula Byte helps automate tasks, generate formulas, and simplify complex operations. It's especially useful for beginners without coding experience and teams looking to boost productivity without hiring developers."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"How does Formula Byte work?"}</summary>
                <div className={"faq-a"}>{"Formula Byte uses advanced AI and natural-language processing to understand your input and convert it into formulas, scripts, or queries. You type what you need, and the system generates accurate results instantly \u2014 no manual coding or syntax knowledge required."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"What makes Formula Byte different?"}</summary>
                <div className={"faq-a"}>{"Formula Byte is built specifically for data work, so outputs are more accurate and better-structured than what you'd get from a general-purpose AI chatbot. We focus on speed, simplicity, and real-world usability \u2014 ideal for both beginners and senior analysts."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Is Formula Byte suitable for beginners?"}</summary>
                <div className={"faq-a"}>{"Yes. Formula Byte is designed to be easy enough for first-time users while still being powerful enough for advanced ones. No coding knowledge required \u2014 if you can describe what you want in plain English, you can use Formula Byte."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Where is Formula Byte based?"}</summary>
                <div className={"faq-a"}>{"Formula Byte is headquartered at 75 E 3rd St Ste 7, Sheridan, Wyoming 82801, USA \u2014 and serves users globally."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Why should I use Formula Byte?"}</summary>
                <div className={"faq-a"}>{"Formula Byte saves time, reduces errors, and eliminates the frustration of complex formulas and repetitive tasks \u2014 so you can focus on insights and decision-making instead of technical execution."}</div>
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
            {"Stop fighting with formulas. "}
            <span className={"accent"}>{"Start now."}</span>
          </h2>
          <p>{"No credit card required. Free forever plan included. Join thousands of professionals already using Formula Byte."}</p>
          <div className={"btn-row"}>
            <a href="https://dashboard.formulabyte.com/" className={"btn btn-primary btn-lg"}>{"Get started free \u2192"}</a>
            <a href={"/#tools"} className={"btn btn-outline btn-lg"}>{"Browse all tools"}</a>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
