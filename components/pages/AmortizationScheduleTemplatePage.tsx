'use client';

export default function AmortizationScheduleTemplatePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="breadcrumb-line">
            <a href="/excel-templates/">Templates</a>
            <span className="sep">/</span>
            <a href="/excel-templates/?cat=financial">Financial</a>
            <span className="sep">/</span>
            <span className="current">Amortization Schedule</span>
          </div>

          <div className="eyebrow">Financial template</div>
          <h1>AI Excel Amortization Schedule Template for Loan <span className="accent">Repayment Tracking</span></h1>
          <p className="lede">
            Track loan payments, interest, principal balances, and repayment progress with an AI-generated Excel amortization schedule template designed for smarter financial planning. Formula Byte helps individuals and businesses automate loan tracking using intelligent spreadsheets with built-in payment formulas, repayment summaries, and financial forecasting tools.
          </p>

          <div className="hero-specs">
            <span className="hero-spec-tag"><span className="dot"></span>Free</span>
            <span className="hero-spec"><strong>100%</strong> customizable</span>
            <span className="hero-spec-sep"></span>
            <span className="hero-spec">Excel <strong>&amp;</strong> Google Sheets</span>
            <span className="hero-spec-sep"></span>
            <span className="hero-spec">AI-generated in seconds</span>
          </div>

          <div className="hero-ctas">
            <a href="https://dashboard.formulabyte.com/" className="btn btn-primary btn-lg">Generate template →</a>
            <a href="/excel-templates/" className="btn btn-outline btn-lg">Browse all templates</a>
          </div>

          <div className="prompt-card">
            <div className="prompt-input">
              <textarea className="prompt-textarea" placeholder="Describe the amortization schedule you need… e.g. Create a loan amortization schedule with monthly payments for a 30-year mortgage" rows={2}></textarea>
            </div>
            <div className="prompt-actions">
              <div className="prompt-hints">
                <span>Powered by AI</span>
                <span>·</span>
                <span>Formulas included</span>
              </div>
              <button className="send-btn" aria-label="Generate template">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="19" x2="12" y2="5"></line>
                  <polyline points="5 12 12 5 19 12"></polyline>
                </svg>
              </button>
            </div>
          </div>
          <div className="example-prompts">
            <span>Try:</span>
            <button className="chip">30-year mortgage schedule</button>
            <button className="chip">Car loan amortization</button>
            <button className="chip">Equipment payment tracker</button>
            <button className="chip">Personal loan repayment</button>
          </div>
        </div>
      </section>

      {/* WHAT IS AMORTIZATION SCHEDULE TEMPLATE */}
      <div className="section-wrap">
        <section className="card">
          <div className="row">
            <div className="row-header">
              <div className="eyebrow">The basics</div>
              <h2>What Is an Excel Amortization Schedule Template?</h2>
              <p className="intro">An Excel amortization schedule template is a structured spreadsheet used to track loan repayment over time, showing how each payment is divided between principal and interest, and how the loan balance decreases.</p>
            </div>
            <div className="row-body">
              <p>
                <strong>Amortization schedules</strong> are essential tools for anyone managing loans, mortgages, or financing plans. They provide a clear breakdown of each payment, showing exactly how much goes toward principal versus interest, and track the remaining balance over the life of the loan.
              </p>
              <p>
                A typical amortization schedule template includes:
              </p>
              <ul className="bulleted">
                <li><strong>Payment schedule</strong> - dates and amounts for each payment</li>
                <li><strong>Principal portion</strong> - how much of each payment reduces the loan balance</li>
                <li><strong>Interest portion</strong> - cost of borrowing for each period</li>
                <li><strong>Remaining balance</strong> - outstanding loan balance after each payment</li>
                <li><strong>Cumulative interest</strong> - total interest paid over time</li>
                <li><strong>Loan summary</strong> - total payments, total interest, loan term</li>
              </ul>
              <p>
                Formula Byte goes beyond static spreadsheet downloads by generating AI-powered amortization systems based on your specific loan terms, payment frequency, and financial goals.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* HOW IT WORKS */}
      <div className="section-wrap" id="how-it-works">
        <section className="card">
          <div className="row">
            <div className="row-header">
              <div className="eyebrow">How it works</div>
              <h2>How Loan Amortization Schedules Work</h2>
              <p className="intro">Each payment is split between reducing the loan balance (principal) and paying the cost of borrowing (interest), with the balance declining over time until the loan is fully repaid.</p>
            </div>
            <div className="row-body">
              <div className="steps">
                <div className="step">
                  <div className="step-num">1</div>
                  <div>
                    <h3>Enter loan details</h3>
                    <p>Input your loan amount, interest rate, loan term, and payment frequency into the spreadsheet.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">2</div>
                  <div>
                    <h3>Calculate each payment</h3>
                    <p>The spreadsheet formulas automatically calculate the fixed payment amount using standard amortization formulas.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">3</div>
                  <div>
                    <h3>Track principal vs. interest</h3>
                    <p>Watch how each payment is divided between reducing your balance and paying interest, with the interest portion decreasing over time.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">4</div>
                  <div>
                    <h3>Monitor remaining balance</h3>
                    <p>See your loan balance decrease with each payment until reaching zero at the end of the term.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CORE FEATURES */}
      <div className="section-wrap">
        <section className="card">
          <div className="row-stacked">
            <div className="row-header">
              <div className="eyebrow">Core capabilities</div>
              <h2>Four things every amortization schedule template <span className="serif-accent">should include.</span></h2>
              <p className="intro">Beyond just a payment list — every generated amortization schedule includes payment formulas, balance tracking, interest calculations, and summary reporting.</p>
            </div>
            <div className="row-body">
              <div className="feature-quad">
                <div className="feature-tile">
                  <div className="feature-tile-icon">📅</div>
                  <h3>Payment schedule tracking</h3>
                  <p>Complete payment calendar with dates, amounts, and breakdowns automatically calculated from loan terms.</p>
                  <ul>
                    <li>Monthly payment schedule</li>
                    <li>Bi-weekly payment options</li>
                    <li>Payment due date tracking</li>
                  </ul>
                </div>
                <div className="feature-tile">
                  <div className="feature-tile-icon">📊</div>
                  <h3>Principal & interest breakdown</h3>
                  <p>Clear visualization of how each payment is split between loan reduction and borrowing cost.</p>
                  <ul>
                    <li>Principal portion calculation</li>
                    <li>Interest expense tracking</li>
                    <li>Running balance updates</li>
                  </ul>
                </div>
                <div className="feature-tile">
                  <div className="feature-tile-icon">💰</div>
                  <h3>Cumulative interest tracking</h3>
                  <p>Total interest paid over time with running totals and year-to-date summaries.</p>
                  <ul>
                    <li>Total interest calculations</li>
                    <li>Annual interest summaries</li>
                    <li>Lifetime interest projection</li>
                  </ul>
                </div>
                <div className="feature-tile">
                  <div className="feature-tile-icon">📈</div>
                  <h3>Loan summary dashboard</h3>
                  <p>Quick overview of loan terms, total payments, total interest, and payoff timeline.</p>
                  <ul>
                    <li>Loan overview section</li>
                    <li>Payoff date projection</li>
                    <li>Extra payment calculations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CAPABILITIES */}
      <div className="section-wrap">
        <section className="card">
          <div className="row-stacked">
            <div className="row-header">
              <div className="eyebrow">Capabilities</div>
              <h2>What the Amortization Schedule Template Actually Does</h2>
              <p className="intro">This is not a simple loan calculator. The template is a complete loan repayment tracking system.</p>
            </div>
            <div className="row-body">
              <div className="capability-grid">
                <div className="capability">
                  <span className="cap-num">01</span>
                  <h3>Payment Calculation Automation</h3>
                  <p>Automatically calculates fixed payment amounts using standard amortization formulas (PMT function).</p>
                </div>
                <div className="capability">
                  <span className="cap-num">02</span>
                  <h3>Principal Balance Tracking</h3>
                  <p>Monitors how each payment reduces the outstanding loan balance over time.</p>
                </div>
                <div className="capability">
                  <span className="cap-num">03</span>
                  <h3>Interest Expense Calculation</h3>
                  <p>Computes interest portion for each payment based on remaining balance and rate.</p>
                </div>
                <div className="capability">
                  <span className="cap-num">04</span>
                  <h3>Extra Payment Handling</h3>
                  <p>Includes options for additional principal payments and shows how they affect payoff timeline.</p>
                </div>
                <div className="capability">
                  <span className="cap-num">05</span>
                  <h3>Summary Reporting</h3>
                  <p>Generates year-end summaries and lifetime totals for interest and principal paid.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* BENEFITS */}
      <div className="section-wrap">
        <section className="card">
          <div className="row-stacked">
            <div className="row-header">
              <div className="eyebrow">Benefits</div>
              <h2>Why Use an Amortization Schedule Template?</h2>
              <p className="intro">Benefits of AI-generated amortization schedules for loan management and financial planning.</p>
            </div>
            <div className="row-body">
              <div className="benefits-strip">
                <div className="benefit-item">
                  <h4>Clear payment breakdown</h4>
                  <p>See exactly how each payment splits between principal and interest</p>
                </div>
                <div className="benefit-item">
                  <h4>Track payoff progress</h4>
                  <p>Monitor your loan balance reduction over the full term</p>
                </div>
                <div className="benefit-item">
                  <h4>Plan extra payments</h4>
                  <p>See how additional payments reduce your loan term and total interest</p>
                </div>
                <div className="benefit-item">
                  <h4>Better financial decisions</h4>
                  <p>Compare loan options and understand true borrowing costs</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* USE CASES */}
      <div className="section-wrap">
        <section className="card">
          <div className="row">
            <div className="row-header">
              <div className="eyebrow">Use cases</div>
              <h2>Common Loan <span className="serif-accent">Types Tracked</span></h2>
              <p className="intro">Amortization schedules work for various loan types and borrowing scenarios.</p>
            </div>
            <div className="row-body">
              <div className="use-case-grid">
                <div className="use-case-item">
                  <h4>🏠 Mortgage Amortization</h4>
                  <p>Track home loan payments for 15, 20, or 30-year fixed or adjustable-rate mortgages.</p>
                </div>
                <div className="use-case-item">
                  <h4>🚗 Auto Loan Schedule</h4>
                  <p>Monitor car loan payments with interest and track vehicle equity over time.</p>
                </div>
                <div className="use-case-item">
                  <h4>💼 Business Equipment Loan</h4>
                  <p>Track repayment for machinery, equipment, or business vehicle financing.</p>
                </div>
                <div className="use-case-item">
                  <h4>👤 Personal Loan</h4>
                  <p>Manage personal loans with fixed payments and track payoff timeline.</p>
                </div>
                <div className="use-case-item">
                  <h4>🎓 Student Loan Tracking</h4>
                  <p>Monitor student loan repayment and interest accumulation over time.</p>
                </div>
                <div className="use-case-item">
                  <h4>💳 Credit Card Payoff</h4>
                  <p>Plan fixed payments to pay off credit card debt strategically.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* WHO IT'S FOR */}
      <div className="section-wrap">
        <section className="card">
          <div className="row">
            <div className="row-header">
              <div className="eyebrow">Who it's for</div>
              <h2>Who Should Use an Amortization Schedule Template?</h2>
              <p className="intro">Whether you're a homeowner, borrower, or financial planner, this template helps track and manage loans effectively.</p>
            </div>
            <div className="row-body">
              <ul className="bulleted">
                <li><strong>Homeowners</strong> with mortgages</li>
                <li><strong>Car buyers</strong> with auto loans</li>
                <li><strong>Business owners</strong> with equipment financing</li>
                <li><strong>Students</strong> managing educational loans</li>
                <li><strong>Financial advisors</strong> helping clients plan repayment</li>
                <li><strong>Anyone</strong> with a personal loan or debt to track</li>
              </ul>
              <p className="audience-footer">
                If you have a loan, this template helps you understand and manage it better.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* VS MANUAL CALCULATION */}
      <div className="section-wrap">
        <section className="card">
          <div className="row">
            <div className="row-header">
              <div className="eyebrow">The difference</div>
              <h2>Manual Calculation vs. <span className="serif-accent">Formula Byte Template.</span></h2>
              <p className="intro">Building amortization schedules manually requires complex formulas and constant updates. Formula Byte generates complete, automated systems instantly.</p>
            </div>
            <div className="row-body">
              <div className="compare">
                <div className="compare-col">
                  <div className="compare-label">Manual calculation</div>
                  <h3>Complex, error-prone</h3>
                  <ul>
                    <li>Need to understand amortization formulas</li>
                    <li>Manual calculation for each payment</li>
                    <li>Formula errors can cause mistakes</li>
                    <li>Time-consuming to update for extra payments</li>
                    <li>Hard to compare different loan scenarios</li>
                  </ul>
                </div>
                <div className="compare-col">
                  <div className="compare-label">Formula Byte AI</div>
                  <h3>Automated, accurate</h3>
                  <ul>
                    <li>Formulas built automatically</li>
                    <li>Complete schedule generated in seconds</li>
                    <li>Error-free calculations guaranteed</li>
                    <li>Easy to add extra payments</li>
                    <li>Compare loan options instantly</li>
                    <li>This is not a calculator — it's a complete tracking system</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ */}
      <div className="section-wrap" id="faq">
        <section className="card">
          <div className="row">
            <div className="row-header">
              <div className="eyebrow">FAQ</div>
              <h2>Frequently asked questions.</h2>
              <p className="intro">Common questions about amortization schedule templates and loan tracking.</p>
            </div>
            <div className="row-body">
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-q">What is an amortization schedule template?</summary>
                  <div className="faq-a">An amortization schedule template is a spreadsheet that shows each loan payment, breaking down how much goes toward principal and interest, and tracks the remaining balance over the loan term.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">How do I calculate loan payments in Excel?</summary>
                  <div className="faq-a">Use the PMT function: =PMT(rate, nper, pv). Formula Byte automatically includes this formula and calculates payments based on your loan terms.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">Can I track extra principal payments?</summary>
                  <div className="faq-a">Yes. The template can include extra payment columns and show how additional payments reduce your loan term and total interest paid.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">Does this work for all loan types?</summary>
                  <div className="faq-a">Yes. Amortization schedules work for mortgages, auto loans, personal loans, business loans, student loans, and most fixed-term installment loans.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">Can I use this in Google Sheets?</summary>
                  <div className="faq-a">Absolutely. The template works in both Microsoft Excel and Google Sheets with compatible formulas and formatting.</div>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FINAL CTA */}
      <div className="final-cta-wrap">
        <section className="final-cta">
          <div className="final-cta-inner">
            <h2>Ready to Track Your <span className="accent">Loan Repayment?</span></h2>
            <p>Generate a complete amortization schedule with automated formulas, payment tracking, and interest calculations in seconds.</p>
            <div className="btn-row">
              <a href="https://dashboard.formulabyte.com/" className="btn btn-primary btn-lg">Generate template →</a>
              <a href="/excel-templates/" className="btn btn-outline btn-lg">Browse all templates</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
