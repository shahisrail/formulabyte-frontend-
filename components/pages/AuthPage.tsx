import React from 'react';
import PageBehavior from '@/components/runtime/PageBehavior';

export default function AuthPage() {
  return (
    <>
      <link rel="stylesheet" href="/page-styles/auth.css" />
      <PageBehavior page={"auth"} />
    <div className={"auth-shell"} data-mode={"signin"}>
      <aside className={"auth-showcase"}>
        <div className={"showcase-top"}>
          <div className={"eyebrow"}>{"Welcome back"}</div>
          <h1 className={"showcase-headline"}>
            {"Pick up where "}
            <span className={"accent"}>{"you left off."}</span>
          </h1>
          <p className={"showcase-sub"}>{"Your saved formulas, queries, and connected data sources are right where you left them. Sign in and keep moving."}</p>
        </div>
        <div className={"showcase-middle"}>
          <div className={"demo-wrap"}>
            <div className={"demo-orbit-card top"}>
              <span className={"mini-mark"}>{"f"}</span>
              <span>{"Generated 47 formulas this week"}</span>
            </div>
            <div className={"demo-orbit-card bottom"}>
              <span className={"trust-dot"}></span>
              <span>{"GA4 connector \u00b7 synced just now"}</span>
            </div>
            <div className={"demo-card"} aria-hidden={"true"}>
              <div className={"demo-input"}>
                <span className={"demo-prefix"}>{"\u203a"}</span>
                <span className={"demo-query"} id={"demo-query-text"}>{"What's our revenue trend this quarter?"}</span>
                <span className={"demo-caret"}></span>
                <span className={"demo-time"}>{"1.8s"}</span>
              </div>
              <div className={"demo-response"}>
                <div className={"demo-avatar"}>{"f"}</div>
                <div className={"demo-response-body"}>
                  <div className={"demo-response-text"}>
                    {" Q2 revenue is tracking at "}
                    <strong>{"$1.42M"}</strong>
                    {", up "}
                    <strong>{"23%"}</strong>
                    {" vs Q1. Subscription revenue is leading the lift. "}
                  </div>
                  <div className={"demo-stats"}>
                    <span className={"demo-stat"}>
                      <strong>{"$1.42M"}</strong>
                      {" Q2"}
                    </span>
                    <span className={"demo-stat"}>
                      <strong>{"+23%"}</strong>
                      {" vs Q1"}
                    </span>
                    <span className={"demo-stat"}>
                      <strong>{"$487K"}</strong>
                      {" MRR"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"showcase-bottom"}>
          <div className={"trust-item"}>
            <span className={"trust-stars"}>
              <span className={"star"}>{"\u2605"}</span>
              <span className={"star"}>{"\u2605"}</span>
              <span className={"star"}>{"\u2605"}</span>
              <span className={"star"}>{"\u2605"}</span>
              <span className={"star"}>{"\u2605"}</span>
            </span>
            <span>
              <strong>{"4.9"}</strong>
              {" \u00b7 2,000+ users"}
            </span>
          </div>
          <div className={"trust-item"}>
            <span className={"trust-dot"}></span>
            <span>
              <strong>{"SOC 2"}</strong>
              {" compliant"}
            </span>
          </div>
          <div className={"trust-item"}>
            <span>
              <strong>{"30+"}</strong>
              {" countries"}
            </span>
          </div>
        </div>
      </aside>
      <main className={"auth-form-side"}>
        <div className={"form-top"}>
          <a href={"/"} className={"logo"}>
            <span className={"logo-mark"}>{"f"}</span>
            <span>{"Formula Byte"}</span>
          </a>
          <div className={"form-top-aux signin-only"}>
            {" New here? "}
            <a href={"#"} className={"switch-mode"} data-target={"signup"}>{"Create account"}</a>
          </div>
          <div className={"form-top-aux signup-only"}>
            {" Have an account? "}
            <a href={"#"} className={"switch-mode"} data-target={"signin"}>{"Sign in"}</a>
          </div>
        </div>
        <div className={"form-wrap"}>
          <h1 className={"form-heading signin-only"}>
            {"Sign in to "}
            <span className={"accent"}>{"Formula Byte"}</span>
          </h1>
          <p className={"form-subheading signin-only"}>{"Welcome back. Continue where you left off."}</p>
          <h1 className={"form-heading signup-only"}>
            {"Create your "}
            <span className={"accent"}>{"free account"}</span>
          </h1>
          <p className={"form-subheading signup-only"}>{"No credit card required. Free forever plan included."}</p>
          <div className={"tabs"} role={"tablist"}>
            <button type={"button"} className={"tab active"} role={"tab"} data-target={"signin"}>{"Sign in"}</button>
            <button type={"button"} className={"tab"} role={"tab"} data-target={"signup"}>{"Sign up"}</button>
          </div>
          <div className={"oauth-stack"}>
            <button type={"button"} className={"oauth-btn"} id={"google-btn"}>
              <svg viewBox={"0 0 24 24"} xmlns={"http://www.w3.org/2000/svg"}>
                <path d={"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"} fill={"#4285F4"}></path>
                <path d={"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"} fill={"#34A853"}></path>
                <path d={"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"} fill={"#FBBC05"}></path>
                <path d={"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"} fill={"#EA4335"}></path>
              </svg>
              <span>{"Continue with Google"}</span>
              <span className={"recommended-tag"}>{"Fastest"}</span>
            </button>
            <button type={"button"} className={"oauth-btn"} id={"microsoft-btn"}>
              <svg viewBox={"0 0 24 24"} xmlns={"http://www.w3.org/2000/svg"}>
                <rect x={"2"} y={"2"} width={"9"} height={"9"} fill={"#F25022"}></rect>
                <rect x={"13"} y={"2"} width={"9"} height={"9"} fill={"#7FBA00"}></rect>
                <rect x={"2"} y={"13"} width={"9"} height={"9"} fill={"#00A4EF"}></rect>
                <rect x={"13"} y={"13"} width={"9"} height={"9"} fill={"#FFB900"}></rect>
              </svg>
              <span>{"Continue with Microsoft"}</span>
            </button>
          </div>
          <div className={"divider"}>{"or with email"}</div>
          <form id={"auth-form"} noValidate>
            <div className={"form-group signup-only"}>
              <label className={"form-label"} htmlFor={"name"}>{"Full name"}</label>
              <input className={"form-input"} id={"name"} name={"name"} type={"text"} placeholder={"Jane Smith"} autoComplete={"name"} />
            </div>
            <div className={"form-group"}>
              <label className={"form-label"} htmlFor={"email"}>{"Email address"}</label>
              <input className={"form-input"} id={"email"} name={"email"} type={"email"} placeholder={"you@company.com"} autoComplete={"email"} required />
            </div>
            <div className={"form-group"}>
              <label className={"form-label"} htmlFor={"password"}>
                <span>{"Password"}</span>
                <a href={"#"} className={"forgot-link signin-only"}>{"Forgot password?"}</a>
              </label>
              <div className={"input-wrap"}>
                <input className={"form-input has-icon"} id={"password"} name={"password"} type={"password"} placeholder={"Enter your password"} autoComplete={"current-password"} required />
                <button type={"button"} className={"input-icon-btn"} id={"pw-toggle"} aria-label={"Show password"}>
                  <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"} id={"pw-eye"}>
                    <path d={"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}></path>
                    <circle cx={"12"} cy={"12"} r={"3"}></circle>
                  </svg>
                </button>
              </div>
            </div>
            <div className={"remember-row signin-only"}>
              <label className={"checkbox-wrap"}>
                <input type={"checkbox"} id={"remember"} />
                <span className={"custom-checkbox"}>
                  <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"3.5"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <polyline points={"20 6 9 17 4 12"}></polyline>
                  </svg>
                </span>
                <span className={"checkbox-label"}>{"Keep me signed in"}</span>
              </label>
            </div>
            <button type={"submit"} className={"submit-btn"} id={"submit-btn"}>
              <span className={"submit-text signin-only"}>{"Sign in"}</span>
              <span className={"submit-text signup-only"}>{"Create account"}</span>
              <svg className={"arrow"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                <line x1={"5"} y1={"12"} x2={"19"} y2={"12"}></line>
                <polyline points={"12 5 19 12 12 19"}></polyline>
              </svg>
              <span className={"spinner"}></span>
            </button>
            <div className={"form-foot-link signin-only"}>
              {" Don't have an account? "}
              <a href={"#"} className={"switch-mode"} data-target={"signup"}>{"Sign up free"}</a>
            </div>
            <div className={"form-foot-link signup-only"}>
              {" Already a member? "}
              <a href={"#"} className={"switch-mode"} data-target={"signin"}>{"Sign in"}</a>
            </div>
            <p className={"legal-note signin-only"}>
              {" By signing in, you agree to our "}
              <a href={"/terms"}>{"Terms"}</a>
              {" and "}
              <a href={"/privacy"}>{"Privacy Policy"}</a>
              {". "}
            </p>
            <p className={"legal-note signup-only"}>
              {" By creating an account, you agree to our "}
              <a href={"/terms"}>{"Terms"}</a>
              {" and "}
              <a href={"/privacy"}>{"Privacy Policy"}</a>
              {". We'll never share your data. "}
            </p>
          </form>
        </div>
        <div className={"form-foot-secure"}>
          <span className={"lock"}>
            <svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2.5"} strokeLinecap={"round"} strokeLinejoin={"round"}>
              <rect x={"3"} y={"11"} width={"18"} height={"11"} rx={"2"} ry={"2"}></rect>
              <path d={"M7 11V7a5 5 0 0 1 10 0v4"}></path>
            </svg>
            {" Secure sign-in "}
          </span>
          <span className={"sep"}>{"\u00b7"}</span>
          <span>{"OAuth 2.0"}</span>
          <span className={"sep"}>{"\u00b7"}</span>
          <span>{"SOC 2"}</span>
          <span className={"sep"}>{"\u00b7"}</span>
          <span>{"256-bit SSL"}</span>
        </div>
      </main>
    </div>
    </>
  );
}
