import React from 'react';
import PageBehavior from '@/components/runtime/PageBehavior';

export default function ContactPage() {
  return (
    <>
      <link rel="stylesheet" href="/page-styles/contact.css" />
      <PageBehavior page={"contact"} />
    <section className={"hero"}>
      <div className={"hero-inner"}>
        <div className={"hero-pill"}>
          <span className={"tag"}>{"Contact"}</span>
          <span className={"live-dot"}></span>
          <span>
            {"Typically replies within "}
            <strong style={{"color": "var(--text)"}}>{"1 business day"}</strong>
          </span>
        </div>
        <h1>
          {"Have a question? "}
          <span className={"accent"}>{"Let's talk."}</span>
        </h1>
        <p className={"lede"}>{" Whether you're stuck on a feature, exploring a partnership, or just want to say hi \u2014 we read every message. Drop us a line and we'll get back to you fast. "}</p>
      </div>
    </section>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"contact-split"}>
          <div className={"contact-info"}>
            <div style={{"marginBottom": "4px"}}>
              <div className={"eyebrow"}>{"Reach us"}</div>
              <h2 style={{"fontSize": "clamp(24px, 2.4vw, 30px)"}}>
                {"Direct lines, real "}
                <span className={"serif-accent"}>{"humans"}</span>
                {"."}
              </h2>
              <p style={{"fontSize": "14.5px", "marginTop": "8px"}}>{"Skip the form if you'd rather email us straight \u2014 same inbox, same fast response."}</p>
            </div>
            <div className={"info-card featured"}>
              <div className={"info-label"}>
                <span className={"dot"}></span>
                {"Email us directly"}
              </div>
              <div className={"info-value"}>
                <a href={"mailto:hello@formulabyte.com"}>{"hello@formulabyte.com"}</a>
              </div>
              <div className={"info-sub"}>{"For general inquiries, support, and partnerships."}</div>
              <button className={"copy-btn"} data-copy={"hello@formulabyte.com"} aria-label={"Copy email"}>{"Copy"}</button>
            </div>
            <div className={"info-card"}>
              <div className={"info-label"}>
                <span className={"dot"}></span>
                {"Office"}
              </div>
              <div className={"mono-addr"}>
                {" 75 E 3rd St Ste 7"}
                <br />
                {" Sheridan, Wyoming 82801"}
                <br />
                {" United States "}
              </div>
            </div>
            <div className={"info-card"}>
              <div className={"info-label"}>
                <span className={"dot"}></span>
                {"Response time"}
              </div>
              <div className={"info-value"} style={{"fontSize": "14.5px"}}>{"Within 1 business day"}</div>
              <div className={"info-sub"}>{"Mon \u2013 Fri, weekends a bit slower. We're a small team, but we don't ghost."}</div>
            </div>
          </div>
          <div className={"form-shell"}>
            <div className={"form-eyebrow"}>{"Send a message"}</div>
            <h3 className={"form-title"}>{"Tell us what's on your mind."}</h3>
            <p className={"form-subtitle"}>{"All fields required unless marked optional. We'll reply to the email you provide below."}</p>
            <form id={"contact-form"} noValidate>
              <div className={"inquiry-chips"} role={"radiogroup"} aria-label={"Inquiry type"}>
                <span className={"chip-label"}>{"I'm here about:"}</span>
                <button type={"button"} className={"chip active"} data-type={"general"}>{"General"}</button>
                <button type={"button"} className={"chip"} data-type={"support"}>{"Support"}</button>
                <button type={"button"} className={"chip"} data-type={"partnership"}>{"Partnership"}</button>
                <button type={"button"} className={"chip"} data-type={"billing"}>{"Billing"}</button>
                <button type={"button"} className={"chip"} data-type={"feedback"}>{"Feedback"}</button>
              </div>
              <div className={"form-row"}>
                <div className={"form-group"}>
                  <label className={"form-label"} htmlFor={"name"}>{"Full name"}</label>
                  <input className={"form-input"} id={"name"} name={"name"} type={"text"} placeholder={"Jane Smith"} required />
                </div>
                <div className={"form-group"}>
                  <label className={"form-label"} htmlFor={"email"}>{"Email address"}</label>
                  <input className={"form-input"} id={"email"} name={"email"} type={"email"} placeholder={"jane@company.com"} required />
                </div>
              </div>
              <div className={"form-row"}>
                <div className={"form-group"}>
                  <label className={"form-label"} htmlFor={"company"}>
                    {"Company "}
                    <span className={"optional"}>{"Optional"}</span>
                  </label>
                  <input className={"form-input"} id={"company"} name={"company"} type={"text"} placeholder={"Acme Inc."} />
                </div>
                <div className={"form-group"}>
                  <label className={"form-label"} htmlFor={"role"}>{"I work in"}</label>
                  <select className={"form-select"} id={"role"} name={"role"}>
                    <option value={""}>{"Choose one\u2026"}</option>
                    <option>{"Data / Analytics"}</option>
                    <option>{"Finance / Accounting"}</option>
                    <option>{"Marketing"}</option>
                    <option>{"Operations"}</option>
                    <option>{"Engineering"}</option>
                    <option>{"Student / Researcher"}</option>
                    <option>{"Other"}</option>
                  </select>
                </div>
              </div>
              <div className={"form-group"}>
                <label className={"form-label"} htmlFor={"subject"}>{"Subject"}</label>
                <input className={"form-input"} id={"subject"} name={"subject"} type={"text"} placeholder={"What's this about?"} required />
              </div>
              <div className={"form-group"}>
                <label className={"form-label"} htmlFor={"message"}>{"Message"}</label>
                <textarea className={"form-textarea"} id={"message"} name={"message"} placeholder={"Tell us a bit more \u2014 the more context, the better we can help."} required></textarea>
              </div>
              <div className={"form-footer"}>
                <div className={"form-foot-note"}>
                  {" By submitting, you agree to our "}
                  <a href={"/privacy"}>{"privacy policy"}</a>
                  {"."}
                  <br />
                  <strong>{"We never share your data."}</strong>
                </div>
                <button type={"submit"} className={"form-submit"}>
                  {" Send message "}
                  <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <line x1={"5"} y1={"12"} x2={"19"} y2={"12"}></line>
                    <polyline points={"12 5 19 12 12 19"}></polyline>
                  </svg>
                </button>
              </div>
              <div className={"form-success"} id={"form-success"}>
                <div className={"form-success-icon"}>{"\u2713"}</div>
                <h4>{"Message received."}</h4>
                <p>{"Thanks \u2014 we'll be in touch at the email you provided within one business day."}</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"row-stacked"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Other ways to reach us"}</div>
            <h2>
              {"Pick the "}
              <span className={"serif-accent"}>{"right"}</span>
              {" inbox."}
            </h2>
            <p className={"intro"}>{"Sending to the right address gets your message to the right person faster."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"channels-grid"}>
              <a className={"channel-card"} href={"mailto:hello@formulabyte.com"}>
                <div className={"channel-icon"}>{"G"}</div>
                <h4>{"General inquiries"}</h4>
                <p>{"Questions, hello messages, or anything that doesn't fit a specific bucket below."}</p>
                <span className={"channel-link"}>{"hello@formulabyte.com"}</span>
              </a>
              <a className={"channel-card"} href={"mailto:hello@formulabyte.com?subject=Support%20Request"}>
                <div className={"channel-icon"}>{"S"}</div>
                <h4>{"Customer support"}</h4>
                <p>{"Bugs, account issues, formula edge cases, or anything not working as expected."}</p>
                <span className={"channel-link"}>{"hello@formulabyte.com"}</span>
              </a>
              <a className={"channel-card"} href={"mailto:hello@formulabyte.com?subject=Partnership%20Inquiry"}>
                <div className={"channel-icon"}>{"P"}</div>
                <h4>{"Partnerships"}</h4>
                <p>{"Integrations, co-marketing, affiliate, or enterprise opportunities we should hear about."}</p>
                <span className={"channel-link"}>{"hello@formulabyte.com"}</span>
              </a>
              <a className={"channel-card"} href={"mailto:hello@formulabyte.com?subject=Billing%20Question"}>
                <div className={"channel-icon"}>{"B"}</div>
                <h4>{"Billing & refunds"}</h4>
                <p>{"Plan changes, invoices, refund requests, or anything financial-flavored."}</p>
                <span className={"channel-link"}>{"hello@formulabyte.com"}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className={"section-wrap"}>
      <section className={"card"}>
        <div className={"row"}>
          <div className={"row-header"}>
            <div className={"eyebrow"}>{"Before you write"}</div>
            <h2>{"Common questions, answered."}</h2>
            <p className={"intro"}>{"A few things we get asked a lot. If your question's here, you might get an answer faster than a reply email."}</p>
          </div>
          <div className={"row-body"}>
            <div className={"faq-list"}>
              <details className={"faq-item"} open>
                <summary className={"faq-q"}>{"How fast do you typically reply?"}</summary>
                <div className={"faq-a"}>{"Most messages get a response within one business day (Mon\u2013Fri). If you write us on the weekend, expect to hear back Monday. Urgent billing or account issues are prioritized."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"I need help with a specific formula \u2014 can you help over email?"}</summary>
                <div className={"faq-a"}>{"Absolutely. Send us the problem, a sample of your data structure (column names, a few rows), and what output you're trying to get. The more context, the faster we can help \u2014 or just point you to the right tool inside Formula Byte."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"How do I request a refund?"}</summary>
                <div className={"faq-a"}>{"Email hello@formulabyte.com within 30 days of payment with your account email and we'll process it. If you've made fewer than 50 requests on the account, you qualify for a full refund."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Do you offer enterprise pricing or custom plans?"}</summary>
                <div className={"faq-a"}>{"Yes \u2014 for teams of 25+ or anyone needing SSO, custom integrations, or volume pricing, drop us a line at hello@formulabyte.com with \"Enterprise\" in the subject line and we'll set up a call."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"Where are you based, and what time zone are you in?"}</summary>
                <div className={"faq-a"}>{"Our office address is in Sheridan, Wyoming (Mountain Time, UTC\u22127/\u22126), but our team is distributed \u2014 so we cover most working hours across the US, Europe, and Asia."}</div>
              </details>
              <details className={"faq-item"}>
                <summary className={"faq-q"}>{"I have a press, podcast, or interview request."}</summary>
                <div className={"faq-a"}>{"Great \u2014 email hello@formulabyte.com with \"Press\" in the subject and a quick note on what you're working on. We're happy to chat."}</div>
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
            {"Or skip the wait and "}
            <span className={"accent"}>{"try it now."}</span>
          </h2>
          <p>{"No credit card required. Free forever plan included. You can always reach out after you've tried it."}</p>
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
