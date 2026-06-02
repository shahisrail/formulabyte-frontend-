export default function ExcelTemplatesPage() {
  return (
    <>

   

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-rating">
            <span className="stars">★ 4.9</span>
            <span>used by <strong>50,000+</strong> teams</span>
          </div>
          <h1>
            AI Excel templates<br />
            <span className="accent">for every workflow.</span>
          </h1>
          <p className="lede">
            Free, AI-generated Excel templates for accounting, projects, scheduling, inventory, productivity, and reporting. Describe what you need — Formula Byte builds the spreadsheet.
          </p>
          <div className="hero-ctas">
            <a href="#directory" className="btn btn-primary btn-lg">Browse 25 templates →</a>
            <a href="https://dashboard.formulabyte.com/" className="btn btn-outline btn-lg">Generate a custom one</a>
          </div>
          <div className="hero-trustline">
            <span>100% free</span>
            <span className="sep">·</span>
            <span>Works in Excel &amp; Google Sheets</span>
            <span className="sep">·</span>
            <span>AI-built in seconds</span>
            <span className="sep">·</span>
            <span>Fully customizable</span>
          </div>

          <div className="prompt-card">
            <div className="prompt-input">
              <textarea className="prompt-textarea" placeholder="Describe the spreadsheet you need… e.g. Small business accounting with monthly P&amp;L" rows={2}></textarea>
            </div>
            <div className="prompt-actions">
              <div className="prompt-hints">
                <span>Powered by AI</span>
                <span>·</span>
                <span>Formulas + dashboards included</span>
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
            <button className="chip">Small business accounting</button>
            <button className="chip">Project timeline tracker</button>
            <button className="chip">Employee payroll dashboard</button>
            <button className="chip">Weekly productivity planner</button>
          </div>
        </div>
      </section>

      {/* LOGO STRIP - MARQUEE */}
      <div className="logo-strip">
        <div className="logo-strip-label">Trusted by teams at</div>
        <div className="logo-marquee-container">
          <div className="logo-marquee">
            <span className="logo-item sans">Google</span>
            <span className="logo-item">Microsoft</span>
            <span className="logo-item mono">amazon</span>
            <span className="logo-item sans">Apple</span>
            <span className="logo-item">Spotify</span>
            <span className="logo-item sans">Slack</span>
            <span className="logo-item">Salesforce</span>
            <span className="logo-item mono">shopify</span>
            {/* Duplicate for seamless loop */}
            <span className="logo-item sans">Google</span>
            <span className="logo-item">Microsoft</span>
            <span className="logo-item mono">amazon</span>
            <span className="logo-item sans">Apple</span>
            <span className="logo-item">Spotify</span>
            <span className="logo-item sans">Slack</span>
            <span className="logo-item">Salesforce</span>
            <span className="logo-item mono">shopify</span>
          </div>
        </div>
      </div>

      {/* TEMPLATE DIRECTORY (centerpiece) */}
      <div className="section-wrap" id="directory">
        <section className="card">
          <div className="row-stacked">
            <div className="row-header">
              <div className="eyebrow">Template Library</div>
              <h2>
                16 AI Excel templates, <span className="serif-accent">ready now.</span>
              </h2>
              <p className="intro">Pick a template, describe your needs, and Formula Byte generates a fully customized spreadsheet — formulas, dashboards, and reporting included.</p>
            </div>
            <div className="row-body">

              <div className="directory-stats">
                <div className="directory-stat">
                  <span className="directory-stat-num">25</span>
                  <span className="directory-stat-label">Templates</span>
                </div>
                <span className="directory-stat-sep"></span>
                <div className="directory-stat">
                  <span className="directory-stat-num">5</span>
                  <span className="directory-stat-label">Categories</span>
                </div>
                <span className="directory-stat-sep"></span>
                <div className="directory-stat">
                  <span className="directory-stat-num">100%</span>
                  <span className="directory-stat-label">Free forever</span>
                </div>
              </div>

              <div className="filter-pills" role="tablist">
                <button className="filter-pill active" data-filter="all">All <span className="count">25</span></button>
                <button className="filter-pill" data-filter="financial">Financial <span className="count">7</span></button>
                <button className="filter-pill" data-filter="project">Project <span className="count">3</span></button>
                <button className="filter-pill" data-filter="productivity">Productivity <span className="count">9</span></button>
                <button className="filter-pill" data-filter="operations">Operations <span className="count">3</span></button>
                <button className="filter-pill" data-filter="business">Business <span className="count">3</span></button>
              </div>

              <div className="template-grid">
                {/* FINANCIAL */}
                <a href="/excel-templates/accounting-template/" className="template-card" data-cat="financial">
                  <span className="template-cat">Financial</span>
                  <div className="template-glyph">A</div>
                  <h4>Accounting Template</h4>
                  <p>Track ledgers, transactions, and accounts with automated reconciliation.</p>
                  <span className="template-link">Use template →</span>
                </a>
                <a href="/excel-templates/balance-sheet-template/" className="template-card" data-cat="financial">
                  <span className="template-cat">Financial</span>
                  <div className="template-glyph">B</div>
                  <h4>Balance Sheet</h4>
                  <p>Assets, liabilities, and equity — structured for clear financial reporting.</p>
                  <span className="template-link">Use template →</span>
                </a>
                <a href="/excel-templates/business-budget-template/" className="template-card" data-cat="financial">
                  <span className="template-cat">Financial</span>
                  <div className="template-glyph">Bg</div>
                  <h4>Business Budget</h4>
                  <p>Plan and track business expenses, revenue, and cash flow by category.</p>
                  <span className="template-link">Use template →</span>
                </a>
                <a href="/excel-templates/income-statement-template/" className="template-card" data-cat="financial">
                  <span className="template-cat">Financial</span>
                  <div className="template-glyph">I</div>
                  <h4>Income Statement</h4>
                  <p>Revenue, expenses, and net income — calculated and formatted instantly.</p>
                  <span className="template-link">Use template →</span>
                </a>
                <a href="/excel-templates/profit-and-loss-template/" className="template-card" data-cat="financial">
                  <span className="template-cat">Financial</span>
                  <div className="template-glyph compact">P&amp;L</div>
                  <h4>Profit &amp; Loss</h4>
                  <p>Monthly and yearly P&amp;L with built-in formulas and margin tracking.</p>
                  <span className="template-link">Use template →</span>
                </a>
                <a href="/excel-templates/invoice-template/" className="template-card" data-cat="financial">
                  <span className="template-cat">Financial</span>
                  <div className="template-glyph">V</div>
                  <h4>Invoice Template</h4>
                  <p>Professional invoices with auto-numbering, taxes, and totals.</p>
                  <span className="template-link">Use template →</span>
                </a>
                <a href="/excel-templates/personal-financial-statement-template/" className="template-card" data-cat="financial">
                  <span className="template-cat">Financial</span>
                  <div className="template-glyph compact">PF</div>
                  <h4>Personal Financial</h4>
                  <p>Net-worth statement: assets, liabilities, and cash-flow summary.</p>
                  <span className="template-link">Use template →</span>
                </a>

                {/* FINANCIAL - Amortization */}
                <a href="/excel-templates/amortization-schedule-template/" className="template-card" data-cat="financial">
                  <span className="template-cat">Financial</span>
                  <div className="template-glyph">Am</div>
                  <h4>Amortization Schedule</h4>
                  <p>Loan repayment schedule with principal, interest, and balance tracking.</p>
                  <span className="template-link">Use template →</span>
                </a>

                {/* PROJECT */}
                <a href="/excel-templates/project-timeline-template/" className="template-card" data-cat="project">
                  <span className="template-cat">Project</span>
                  <div className="template-glyph">T</div>
                  <h4>Project Timeline</h4>
                  <p>Gantt-style timeline with milestones, dependencies, and progress.</p>
                  <span className="template-link">Use template →</span>
                </a>
                <a href="/excel-templates/multiple-project-tracking-template/" className="template-card" data-cat="project">
                  <span className="template-cat">Project</span>
                  <div className="template-glyph compact">MP</div>
                  <h4>Multiple Projects</h4>
                  <p>Portfolio dashboard tracking many projects in a single view.</p>
                  <span className="template-link">Use template →</span>
                </a>
                <a href="/excel-templates/raci-template/" className="template-card" data-cat="project">
                  <span className="template-cat">Project</span>
                  <div className="template-glyph">R</div>
                  <h4>RACI Matrix</h4>
                  <p>Responsible, Accountable, Consulted, Informed — mapped in one grid.</p>
                  <span className="template-link">Use template →</span>
                </a>

                {/* PRODUCTIVITY */}
                <a href="/excel-templates/calendar-template-2026/" className="template-card" data-cat="productivity">
                  <span className="template-cat">Productivity</span>
                  <div className="template-glyph">C</div>
                  <h4>Calendar 2026</h4>
                  <p>Yearly calendar with holidays, events, and scheduling views.</p>
                  <span className="template-link">Use template →</span>
                </a>
                <a href="/excel-templates/contact-list-template/" className="template-card" data-cat="productivity">
                  <span className="template-cat">Productivity</span>
                  <div className="template-glyph">Co</div>
                  <h4>Contact List</h4>
                  <p>Organized contacts with emails, phones, addresses, and categories.</p>
                  <span className="template-link">Use template →</span>
                </a>
                <a href="/excel-templates/daily-schedule-template/" className="template-card" data-cat="productivity">
                  <span className="template-cat">Productivity</span>
                  <div className="template-glyph compact">DS</div>
                  <h4>Daily Schedule</h4>
                  <p>Plan your day with hourly time blocks and priority tracking.</p>
                  <span className="template-link">Use template →</span>
                </a>
                <a href="/excel-templates/employee-schedule-template/" className="template-card" data-cat="productivity">
                  <span className="template-cat">Productivity</span>
                  <div className="template-glyph compact">ES</div>
                  <h4>Employee Schedule</h4>
                  <p>Shift planning and workforce scheduling with hours tracking.</p>
                  <span className="template-link">Use template →</span>
                </a>
                <a href="/excel-templates/expense-report-template/" className="template-card" data-cat="productivity">
                  <span className="template-cat">Productivity</span>
                  <div className="template-glyph compact">ER</div>
                  <h4>Expense Report</h4>
                  <p>Track business expenses with receipts, categories, and approvals.</p>
                  <span className="template-link">Use template →</span>
                </a>
                <a href="/excel-templates/family-tree-template/" className="template-card" data-cat="productivity">
                  <span className="template-cat">Productivity</span>
                  <div className="template-glyph compact">FT</div>
                  <h4>Family Tree</h4>
                  <p>Genealogy chart with relationships, generations, and details.</p>
                  <span className="template-link">Use template →</span>
                </a>
                <a href="/excel-templates/time-sheet-template/" className="template-card" data-cat="productivity">
                  <span className="template-cat">Productivity</span>
                  <div className="template-glyph compact">TS</div>
                  <h4>Time Sheet</h4>
                  <p>Weekly and biweekly timesheets with auto-calculated hours and pay.</p>
                  <span className="template-link">Use template →</span>
                </a>
                <a href="/excel-templates/time-tracking-template/" className="template-card" data-cat="productivity">
                  <span className="template-cat">Productivity</span>
                  <div className="template-glyph compact">TT</div>
                  <h4>Time Tracking</h4>
                  <p>Log hours by project and task with summary dashboards built in.</p>
                  <span className="template-link">Use template →</span>
                </a>
                <a href="/excel-templates/to-do-list-template/" className="template-card" data-cat="productivity">
                  <span className="template-cat">Productivity</span>
                  <div className="template-glyph">D</div>
                  <h4>To-Do List</h4>
                  <p>Prioritized task list with due dates, status, and progress tracking.</p>
                  <span className="template-link">Use template →</span>
                </a>
                <a href="/excel-templates/weekly-schedule-template/" className="template-card" data-cat="productivity">
                  <span className="template-cat">Productivity</span>
                  <div className="template-glyph">W</div>
                  <h4>Weekly Schedule</h4>
                  <p>Plan your week by day and time block with recurring slots.</p>
                  <span className="template-link">Use template →</span>
                </a>
                <a href="/excel-templates/travel-itinerary-template/" className="template-card" data-cat="productivity">
                  <span className="template-cat">Productivity</span>
                  <div className="template-glyph compact">Tr</div>
                  <h4>Travel Itinerary</h4>
                  <p>Flights, stays, and activities organized by day with budgets.</p>
                  <span className="template-link">Use template →</span>
                </a>

                {/* OPERATIONS */}
                <a href="/excel-templates/inventory-template/" className="template-card" data-cat="operations">
                  <span className="template-cat">Operations</span>
                  <div className="template-glyph">N</div>
                  <h4>Inventory Template</h4>
                  <p>Stock levels, reorder points, suppliers, and movement history.</p>
                  <span className="template-link">Use template →</span>
                </a>
                <a href="/excel-templates/purchase-order-template/" className="template-card" data-cat="operations">
                  <span className="template-cat">Operations</span>
                  <div className="template-glyph compact">PO</div>
                  <h4>Purchase Order</h4>
                  <p>Standardized POs with line items, vendor info, and tax math.</p>
                  <span className="template-link">Use template →</span>
                </a>
                <a href="/excel-templates/kpi-template/" className="template-card" data-cat="operations">
                  <span className="template-cat">Operations</span>
                  <div className="template-glyph">K</div>
                  <h4>KPI Dashboard</h4>
                  <p>Track business metrics with conditional formatting and trend charts.</p>
                  <span className="template-link">Use template →</span>
                </a>

                {/* BUSINESS */}
                <a href="/excel-templates/crm-template/" className="template-card" data-cat="business">
                  <span className="template-cat">Business</span>
                  <div className="template-glyph">CR</div>
                  <h4>CRM Template</h4>
                  <p>Customer relationship management with pipeline, contacts, and tracking.</p>
                  <span className="template-link">Use template →</span>
                </a>
              </div>

              <div className="directory-footer">
              </div>

              <div className="directory-footer">
                <p className="directory-footer-text">
                  Need something specific? <em>Describe it</em> and we'll generate it.
                </p>
                <a href="https://dashboard.formulabyte.com/" className="btn btn-outline">Generate a custom template →</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* WHAT ARE AI EXCEL TEMPLATES */}
      <div className="section-wrap">
        <section className="card">
          <div className="row">
            <div className="row-header">
              <div className="eyebrow">The basics</div>
              <h2>What are AI Excel templates?</h2>
              <p className="intro">Pre-structured spreadsheets that automate the busywork — generated by AI to match your exact workflow.</p>
            </div>
            <div className="row-body">
              <p>
                <strong>Excel templates</strong> are pre-built spreadsheets designed to organize data, automate calculations, and simplify reporting. Instead of starting from a blank file, you start with a tested structure — formulas wired up, columns labeled, dashboards laid out.
              </p>
              <p>
                Formula Byte takes this a step further. Rather than downloading a generic file, you describe what you need and the AI <strong>builds a spreadsheet tailored to your workflow</strong> — with the right formulas, the right structure, and the right reports for your business.
              </p>
              <ul className="bulleted">
                <li><strong>Save time</strong> on setup, formatting, and formula-writing</li>
                <li><strong>Reduce errors</strong> with automated calculations and validation</li>
                <li><strong>Improve organization</strong> across financial, operational, and personal data</li>
                <li><strong>Track productivity</strong> with built-in dashboards and reporting</li>
                <li><strong>Streamline workflows</strong> from accounting to inventory to scheduling</li>
              </ul>
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
              <h2>From prompt to spreadsheet in seconds.</h2>
              <p className="intro">Skip the manual setup. Describe your workflow and Formula Byte generates the full Excel system — structure, formulas, dashboards, and all.</p>
            </div>
            <div className="row-body">
              <div className="steps">
                <div className="step">
                  <div className="step-num">1</div>
                  <div>
                    <h3>Describe what you need</h3>
                    <p>Tell Formula Byte the workflow you're managing — accounting, scheduling, inventory, projects. Plain English is enough.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">2</div>
                  <div>
                    <h3>AI builds the structure</h3>
                    <p>Columns, sheets, headers, validation rules, and reporting sections appear automatically — no manual layout work.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">3</div>
                  <div>
                    <h3>Formulas &amp; dashboards included</h3>
                    <p>Calculations, lookups, pivots, and visual dashboards are generated and wired up to your data ranges.</p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-num">4</div>
                  <div>
                    <h3>Customize &amp; export</h3>
                    <p>Tweak categories, add fields, or reshape the layout. Export to Excel or open directly in Google Sheets.</p>
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
              <h2>Four things every Formula Byte <span className="serif-accent">template</span> ships with.</h2>
              <p className="intro">Beyond just structure — every generated spreadsheet includes automation, dashboards, formulas, and a layout you can shape to your needs.</p>
            </div>
            <div className="row-body">
              <div className="feature-quad">
                <div className="feature-tile">
                  <div className="feature-tile-icon">∞</div>
                  <h3>AI spreadsheet automation</h3>
                  <p>Dynamic layouts, automatic formulas, and operational tracking generated from a single prompt.</p>
                  <ul>
                    <li>Automated Excel systems</li>
                    <li>Dynamic spreadsheet layouts</li>
                    <li>Operational tracking built in</li>
                  </ul>
                </div>
                <div className="feature-tile">
                  <div className="feature-tile-icon">▦</div>
                  <h3>Smart dashboards &amp; reporting</h3>
                  <p>Visibility into performance, finance, productivity, and inventory — all visualized inside the sheet.</p>
                  <ul>
                    <li>Business performance views</li>
                    <li>Financial &amp; KPI reporting</li>
                    <li>Project &amp; inventory dashboards</li>
                  </ul>
                </div>
                <div className="feature-tile">
                  <div className="feature-tile-icon">ƒ</div>
                  <h3>Formula &amp; calculation systems</h3>
                  <p>Financial math, payroll logic, KPI tracking, and budget forecasting — all formula-driven, no manual typing.</p>
                  <ul>
                    <li>Financial &amp; payroll formulas</li>
                    <li>KPI &amp; profit analysis</li>
                    <li>Budget forecasting logic</li>
                  </ul>
                </div>
                <div className="feature-tile">
                  <div className="feature-tile-icon">§</div>
                  <h3>Fully customizable layouts</h3>
                  <p>Every section is editable. Reshape categories, change workflows, redesign dashboards — keep what fits, drop the rest.</p>
                  <ul>
                    <li>Editable sections &amp; columns</li>
                    <li>Workflow-specific tuning</li>
                    <li>Reporting &amp; tracking flexibility</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* TEMPLATE CATEGORIES DEEP DIVE */}
      <div className="section-wrap" id="categories">
        <section className="card">
          <div className="row-stacked">
            <div className="row-header">
              <div className="eyebrow">By category</div>
              <h2>Four template families, <span className="serif-accent">one</span> AI engine.</h2>
              <p className="intro">From finance to scheduling — every category is built on the same intelligence, tuned to its workflow.</p>
            </div>
            <div className="row-body">
              <div className="industry-grid">
                <div className="industry-card">
                  <div className="industry-card-head">
                    <div className="industry-glyph">$</div>
                    <div>
                      <h4>Financial &amp; Accounting</h4>
                      <div className="industry-count">8 TEMPLATES</div>
                    </div>
                  </div>
                  <p>Profit tracking, statements, invoicing, and full accounting workflows — calculated and formatted on generation.</p>
                  <div className="industry-templates">
                    <a href="/excel-templates/accounting-template/">Accounting Template</a>
                    <a href="/excel-templates/amortization-schedule-template/">Amortization Schedule</a>
                    <a href="/excel-templates/balance-sheet-template/">Balance Sheet Template</a>
                    <a href="/excel-templates/business-budget-template/">Business Budget Template</a>
                    <a href="/excel-templates/income-statement-template/">Income Statement Template</a>
                    <a href="/excel-templates/profit-and-loss-template/">Profit &amp; Loss Template</a>
                    <a href="/excel-templates/invoice-template/">Invoice Template</a>
                    <a href="/excel-templates/personal-financial-statement-template/">Personal Financial Statement</a>
                  </div>
                </div>
                <div className="industry-card">
                  <div className="industry-card-head">
                    <div className="industry-glyph">T</div>
                    <div>
                      <h4>Project &amp; Workflow</h4>
                      <div className="industry-count">3 TEMPLATES</div>
                    </div>
                  </div>
                  <p>Timelines, portfolios, and responsibility matrices for keeping teams and deliverables coordinated.</p>
                  <div className="industry-templates">
                    <a href="/excel-templates/project-timeline-template/">Project Timeline Template</a>
                    <a href="/excel-templates/multiple-project-tracking-template/">Multiple Project Tracking</a>
                    <a href="/excel-templates/raci-template/">RACI Matrix Template</a>
                  </div>
                </div>
                <div className="industry-card">
                  <div className="industry-card-head">
                    <div className="industry-glyph">P</div>
                    <div>
                      <h4>Productivity &amp; Planning</h4>
                      <div className="industry-count">9 TEMPLATES</div>
                    </div>
                  </div>
                  <p>Personal organization, time management, and scheduling systems for individuals and teams.</p>
                  <div className="industry-templates">
                    <a href="/excel-templates/calendar-template-2026/">Calendar 2026</a>
                    <a href="/excel-templates/contact-list-template/">Contact List Template</a>
                    <a href="/excel-templates/daily-schedule-template/">Daily Schedule Template</a>
                    <a href="/excel-templates/employee-schedule-template/">Employee Schedule Template</a>
                    <a href="/excel-templates/expense-report-template/">Expense Report Template</a>
                    <a href="/excel-templates/family-tree-template/">Family Tree Template</a>
                    <a href="/excel-templates/to-do-list-template/">To Do List Template</a>
                    <a href="/excel-templates/travel-itinerary-template/">Travel Itinerary Template</a>
                    <a href="/excel-templates/weekly-schedule-template/">Weekly Schedule Template</a>
                  </div>
                </div>
                <div className="industry-card">
                  <div className="industry-card-head">
                    <div className="industry-glyph">O</div>
                    <div>
                      <h4>Business Operations</h4>
                      <div className="industry-count">3 TEMPLATES</div>
                    </div>
                  </div>
                  <p>Inventory, procurement, and KPI tracking — the operational backbone of growing businesses.</p>
                  <div className="industry-templates">
                    <a href="/excel-templates/inventory-template/">Inventory Template</a>
                    <a href="/excel-templates/purchase-order-template/">Purchase Order Template</a>
                    <a href="/excel-templates/kpi-template/">KPI Dashboard Template</a>
                  </div>
                </div>
                <div className="industry-card">
                  <div className="industry-card-head">
                    <div className="industry-glyph">B</div>
                    <div>
                      <h4>Business Management</h4>
                      <div className="industry-count">2 TEMPLATES</div>
                    </div>
                  </div>
                  <p>Customer relationships and business operations for growing companies.</p>
                  <div className="industry-templates">
                    <a href="/excel-templates/crm-template/">CRM Template</a>
                  </div>
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
              <div className="eyebrow">Why use them</div>
              <h2>Benefits of AI-generated <span className="serif-accent">Excel templates.</span></h2>
              <p className="intro">Faster setup, fewer errors, better dashboards — and a structure that actually fits your workflow instead of forcing you into someone else's.</p>
            </div>
            <div className="row-body">
              <div className="benefit-grid">
                <div className="benefit-card">
                  <h3>Faster spreadsheet creation</h3>
                  <p>Generate fully formatted spreadsheets in seconds instead of spending an afternoon on layout and formulas.</p>
                  <div className="benefit-stat">
                    <span className="benefit-stat-num">90%</span>
                    <span className="benefit-stat-label">Less setup time</span>
                  </div>
                </div>
                <div className="benefit-card">
                  <h3>Better workflow organization</h3>
                  <p>Structured dashboards bring clarity to operations, finances, and projects — no more hunting through tabs.</p>
                  <div className="benefit-stat">
                    <span className="benefit-stat-num">4×</span>
                    <span className="benefit-stat-label">Clearer visibility</span>
                  </div>
                </div>
                <div className="benefit-card">
                  <h3>Reduced manual errors</h3>
                  <p>AI-generated formulas mean fewer typos, broken references, and miscounted columns slipping into reports.</p>
                  <div className="benefit-stat">
                    <span className="benefit-stat-num">Zero</span>
                    <span className="benefit-stat-label">Formula typos</span>
                  </div>
                </div>
                <div className="benefit-card">
                  <h3>Improved productivity</h3>
                  <p>Spend time on the work, not on rebuilding the same spreadsheets every month for every project.</p>
                  <div className="benefit-stat">
                    <span className="benefit-stat-num">10×</span>
                    <span className="benefit-stat-label">Faster output</span>
                  </div>
                </div>
                <div className="benefit-card">
                  <h3>Easier reporting</h3>
                  <p>Dashboards, charts, and summaries appear inside every template — no extra tools, no exporting, no glue.</p>
                  <div className="benefit-stat">
                    <span className="benefit-stat-num">1-click</span>
                    <span className="benefit-stat-label">Visual reports</span>
                  </div>
                </div>
                <div className="benefit-card">
                  <h3>Works everywhere</h3>
                  <p>Every template runs in Excel and Google Sheets without changes. Open it where your team already works.</p>
                  <div className="benefit-stat">
                    <span className="benefit-stat-num">2</span>
                    <span className="benefit-stat-label">Platforms supported</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* WHY FORMULA BYTE IS DIFFERENT */}
      <div className="section-wrap">
        <section className="card">
          <div className="row">
            <div className="row-header">
              <div className="eyebrow">The difference</div>
              <h2>Generic templates vs. <span className="serif-accent">Formula Byte.</span></h2>
              <p className="intro">Most spreadsheet templates are static files. Formula Byte generates dynamic, tailored Excel systems — built for your exact workflow.</p>
            </div>
            <div className="row-body">
              <div className="compare">
                <div className="compare-col">
                  <div className="compare-label">Generic Excel templates</div>
                  <h3>Static, one-size-fits-all files</h3>
                  <ul>
                    <li>Fixed structure you have to adapt to</li>
                    <li>Generic categories that rarely match</li>
                    <li>Manual customization required</li>
                    <li>No automation or smart formulas</li>
                    <li>Dashboards have to be built by hand</li>
                    <li>Same template for every business</li>
                  </ul>
                </div>
                <div className="compare-col">
                  <div className="compare-label">Formula Byte AI templates</div>
                  <h3>Dynamic, tailored to your workflow</h3>
                  <ul>
                    <li>Structure adapts to your description</li>
                    <li>Categories match your actual operations</li>
                    <li>Auto-customized from a single prompt</li>
                    <li>Smart formulas wired up on generation</li>
                    <li>Dashboards included by default</li>
                    <li>Personalized for your business</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* WHO SHOULD USE */}
      <div className="section-wrap">
        <section className="card">
          <div className="row-stacked">
            <div className="row-header">
              <div className="eyebrow">Who it's for</div>
              <h2>Built for people who'd rather <span className="serif-accent">not</span> build spreadsheets.</h2>
              <p className="intro">Whether you need a simple tracker or a multi-sheet operational system, Formula Byte fits in.</p>
            </div>
            <div className="row-body">
              <div className="audience-grid">
                <div className="audience-cell">
                  <h4>Small businesses</h4>
                  <p>Accounting, invoicing, inventory, and reporting — without hiring an analyst.</p>
                </div>
                <div className="audience-cell">
                  <h4>Startups</h4>
                  <p>P&amp;L, runway, KPI dashboards, and operational workflows that scale.</p>
                </div>
                <div className="audience-cell">
                  <h4>Agencies</h4>
                  <p>Project trackers, time sheets, and client-ready financial reports.</p>
                </div>
                <div className="audience-cell">
                  <h4>Freelancers</h4>
                  <p>Invoices, expenses, time tracking, and personal financial statements.</p>
                </div>
                <div className="audience-cell">
                  <h4>Accountants</h4>
                  <p>Reusable financial templates for clients across industries and sizes.</p>
                </div>
                <div className="audience-cell">
                  <h4>Project managers</h4>
                  <p>Timelines, RACI matrices, and multi-project portfolios in one view.</p>
                </div>
                <div className="audience-cell">
                  <h4>HR &amp; payroll teams</h4>
                  <p>Workforce scheduling, time sheets, and payroll calculations.</p>
                </div>
                <div className="audience-cell">
                  <h4>Operations managers</h4>
                  <p>Inventory, purchase orders, KPIs, and operational reporting dashboards.</p>
                </div>
                <div className="audience-cell">
                  <h4>Students &amp; individuals</h4>
                  <p>To-do lists, weekly schedules, travel itineraries, and budget planners.</p>
                </div>
              </div>
              <div className="audience-footer">
                Need a template for something else? <em>Just describe it</em> — the AI takes it from there.
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
              <p className="intro">Everything you need to know before generating your first template.</p>
            </div>
            <div className="row-body">
              <div className="faq-list">
                <details className="faq-item" open>
                  <summary className="faq-q">Can Formula Byte generate Excel templates automatically?</summary>
                  <div className="faq-a">Yes. Formula Byte uses AI to generate fully structured Excel spreadsheets — with formulas, dashboards, tracking systems, and workflow layouts — from a single plain-English description.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">Do the templates work in Google Sheets?</summary>
                  <div className="faq-a">Yes. Every Formula Byte template works in both Microsoft Excel and Google Sheets. Open it wherever your team already works — formulas and formatting are compatible across both.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">Can I customize the spreadsheet structure?</summary>
                  <div className="faq-a">Absolutely. You can edit categories, workflows, dashboards, formulas, layouts, and reporting systems. Every section is fully editable — keep what fits, drop what doesn't.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">Are formulas included automatically?</summary>
                  <div className="faq-a">Yes. Formula Byte generates the spreadsheet formulas, calculations, and tracking logic as part of the template. For finance and operations templates, expect totals, summaries, conditional formatting, and dashboard math wired up on generation.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">Can I use these templates for my business reporting?</summary>
                  <div className="faq-a">Yes. Businesses use Formula Byte templates for accounting, project management, productivity tracking, payroll, inventory control, scheduling, and operational reporting — across industries from agencies to retail.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">Are the templates really free?</summary>
                  <div className="faq-a">Yes. Every template in the directory is free to use. For custom generation and advanced features (automated dashboards, scheduled refreshes, team collaboration), Formula Byte offers paid plans that start free.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">What if I need a template that isn't listed?</summary>
                  <div className="faq-a">Describe what you need in the prompt box on this page or in your dashboard. The AI generates a custom template from scratch — same engine that powers the listed ones, tailored to your specific workflow.</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">Do I need any technical skills?</summary>
                  <div className="faq-a">No. If you can describe your workflow in a sentence or two, you can generate a template. Formulas, formatting, and dashboards are handled by the AI.</div>
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
            <h2>Stop building spreadsheets. <span className="accent">Start describing them.</span></h2>
            <p>Pick from 25 templates, or describe your own — Formula Byte generates the spreadsheet, formulas, and dashboards in seconds.</p>
            <div className="btn-row">
              <a href="#directory" className="btn btn-primary btn-lg">Browse templates →</a>
              <a href="https://dashboard.formulabyte.com/" className="btn btn-outline btn-lg">Generate a custom one</a>
            </div>
          </div>
        </section>
      </div>

     

      <script dangerouslySetInnerHTML={{
        __html: `
          // Filter pills — show/hide template cards by category
          (function() {
            const pills = document.querySelectorAll('.filter-pill');
            const cards = document.querySelectorAll('.template-card');
            pills.forEach(pill => {
              pill.addEventListener('click', () => {
                const filter = pill.dataset.filter;
                pills.forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                cards.forEach(card => {
                  if (filter === 'all' || card.dataset.cat === filter) {
                    card.classList.remove('hidden');
                  } else {
                    card.classList.add('hidden');
                  }
                });
              });
            });

            // Example chips — fill the prompt textarea
            const chips = document.querySelectorAll('.example-prompts .chip');
            const textarea = document.querySelector('.prompt-textarea');
            chips.forEach(chip => {
              chip.addEventListener('click', () => {
                if (textarea) {
                  textarea.value = chip.textContent;
                  textarea.focus();
                }
              });
            });
          })();
        `
      }} />
    </>
  );
}
