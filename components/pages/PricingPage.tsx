'use client';

import React, { useEffect, useState } from 'react';
import PageBehavior from '@/components/runtime/PageBehavior';
import { Check } from 'lucide-react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const handleBillingChange = (cycle: 'monthly' | 'yearly') => {
    setBillingCycle(cycle);
    // Update pricing amounts
    const pricingAmounts = document.querySelectorAll('.pricing-amount');
    pricingAmounts.forEach(amount => {
      const element = amount as HTMLElement;
      const monthly = element.getAttribute('data-monthly');
      const yearly = element.getAttribute('data-yearly');
      element.textContent = cycle === 'monthly' ? `$${monthly}` : `$${yearly}`;
    });

    // Update toggle buttons
    const monthlyBtn = document.getElementById('monthly-btn');
    const yearlyBtn = document.getElementById('yearly-btn');

    if (monthlyBtn && yearlyBtn) {
      if (cycle === 'monthly') {
        monthlyBtn.classList.add('active');
        yearlyBtn.classList.remove('active');
      } else {
        yearlyBtn.classList.add('active');
        monthlyBtn.classList.remove('active');
      }
    }
  };

  useEffect(() => {
    // Scroll animation functionality
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleScrollAnimation = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const scrollObserver = new IntersectionObserver(handleScrollAnimation, observerOptions);

    // Add scroll animation classes to elements
    const animatedElements = document.querySelectorAll('.section-wrap, .pricing-card, .faq-item');
    animatedElements.forEach((el, index) => {
      el.classList.add('animate-on-scroll', 'animate-fade-up');
      el.classList.add(`stagger-${(index % 6) + 1}`);
      scrollObserver.observe(el);
    });

    return () => {
      scrollObserver.disconnect();
    };
  }, []);

  return (
    <>
      <PageBehavior page="pricing" />

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-pill">
            <span className="tag">{"Pricing"}</span>
            <span className="live-dot"></span>
            <span>{"Simple, transparent pricing"}</span>
          </div>
          <h1>
            {"Choose the perfect "}
            <span className="accent">plan for your needs.</span>
          </h1>
          <p className="lede">
            {"No hidden fees, no surprises. Start free and scale as you grow. Save 30% with yearly billing on all plans."}
          </p>
          <div className="hero-ctas">
            <a href="https://dashboard.formulabyte.com/" className="btn btn-primary btn-lg">{"Start free trial →"}</a>
            <a href="#faq" className="btn btn-outline btn-lg">{"Have questions?"}</a>
          </div>
        </div>
      </section>

      <div className="section-wrap">
        <section className="card">
          <div className="row-stacked">
            <div className="row-header">
              <div className="eyebrow">{"Simple Pricing"}</div>
              <h2>
                {"Everything you need to "}
                <span className="serif-accent">analyze</span>
                {" data."}
              </h2>
              <p className="intro">{"Choose the perfect plan for your needs. Save 30% with yearly billing."}</p>
            </div>
            <div className="row-body" style={{"display": "flex", "flexDirection": "column", "alignItems": "center"}}>
              <div className="pricing-toggle">
                <button
                  id="monthly-btn"
                  className={billingCycle === 'monthly' ? 'active' : ''}
                  onClick={() => handleBillingChange('monthly')}
                >
                  {"Monthly"}
                </button>
                <button
                  id="yearly-btn"
                  className={billingCycle === 'yearly' ? 'active' : ''}
                  onClick={() => handleBillingChange('yearly')}
                >
                  {"Yearly "}
                  <span className="save-pill">{"Save 30%"}</span>
                </button>
              </div>

              <div className="pricing-grid" style={{"width": "100%"}}>
                {/* Unlimited Plan */}
                <div className="pricing-card">
                  <div className="pricing-name">{"Unlimited"}</div>
                  <div className="pricing-price">
                    <span className="pricing-amount" data-monthly="12.99" data-yearly="9.09">{"$12.99"}</span>
                    <span className="pricing-period">{"/ month"}</span>
                  </div>
                  <p className="pricing-desc">{"Perfect for individuals getting started with unlimited AI analysis."}</p>
                  <ul className="pricing-features">
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"Unlimited Chat Message"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"Unlimited Formulas (Excel & DAX)"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"Unlimited DAX Code Generator"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"50 Regex Generator"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"20 R-Code Generator"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"20 Python Data Operation"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"50 SQL operation"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"20 File Upload"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"25 Sentiment Enrichment"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"50 MB file upload limit"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"5 File upload / Chat"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"Unlimited PDF to Excel Conversion"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"Unlimited Excel to PDF Conversion"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"Unlimited Word to PDF Conversion"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"Unlimited PDF to Word Conversion"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"1 Device at a time"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"14 days chat history"}</li>
                  </ul>
                  <a href="https://dashboard.formulabyte.com/" className="btn btn-outline pricing-cta">{"Get started"}</a>
                </div>

                {/* Unlimited Plus Plan */}
                <div className="pricing-card featured">
                  <span className="pricing-tag">{"Most popular"}</span>
                  <div className="pricing-name">{"Unlimited Plus"}</div>
                  <div className="pricing-price">
                    <span className="pricing-amount" data-monthly="22.99" data-yearly="16.09">{"$22.99"}</span>
                    <span className="pricing-period">{"/ month"}</span>
                  </div>
                  <p className="pricing-desc">{"For professionals who need advanced unlimited features."}</p>
                  <ul className="pricing-features">
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"Everything in Unlimited"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"Unlimited Python Data Operation"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"Unlimited SQL Operation"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"Unlimited R Code Generator"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"Unlimited Regex Generator"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"5,000 Sentiment Analysis / Month"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"75 MB File upload limit"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"10 file upload / chat"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"Use on 3 device at once"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"30 days chat history"}</li>
                  </ul>
                  <a href="https://dashboard.formulabyte.com/" className="btn btn-primary pricing-cta">{"Start free trial"}</a>
                </div>

                {/* Unlimited Pro Plan */}
                <div className="pricing-card">
                  <div className="pricing-name">{"Unlimited Pro"}</div>
                  <div className="pricing-price">
                    <span className="pricing-amount" data-monthly="32.99" data-yearly="23.09">{"$32.99"}</span>
                    <span className="pricing-period">{"/ month"}</span>
                  </div>
                  <p className="pricing-desc">{"Maximum power for teams and heavy users."}</p>
                  <ul className="pricing-features">
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"Everything in Unlimited Plus"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"Unlimited R Expressions"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"15,000 Sentiment Analysis / Month"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"250 MB file upload limit"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"Use on multiple device at once"}</li>
                    <li><Check size={16} style={{"marginRight": "8px"}} /> {"60 days chat history"}</li>
                  </ul>
                  <a href="https://dashboard.formulabyte.com/" className="btn btn-outline pricing-cta">{"Get started"}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="section-wrap">
        <section className="card">
          <div className="row">
            <div className="row-header">
              <div className="eyebrow">{"Frequently Asked Questions"}</div>
              <h2>
                {"Common "}
                <span className="serif-accent">questions</span>
                {", answered."}
              </h2>
              <p className="intro">{"Everything you need to know about our pricing and plans."}</p>
            </div>
            <div className="row-body">
              <div className="faq-list">
                <details className="faq-item">
                  <summary className="faq-q">{"Can I change plans later?"}</summary>
                  <div className="faq-a">{"Yes. You can upgrade or downgrade at any time. Changes take effect immediately, and we'll prorate any billing differences."}</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">{"What's your refund policy?"}</summary>
                  <div className="faq-a">{"Request a refund within 30 days of payment. If you've made fewer than 50 requests, you're eligible for a full refund. Email hello@formulabyte.com to start."}</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">{"Do you offer free trials?"}</summary>
                  <div className="faq-a">{"Yes! All plans start with a free trial. You can explore all features before committing to a paid plan. No credit card required to start."}</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">{"What payment methods do you accept?"}</summary>
                  <div className="faq-a">{"We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. For enterprise plans, we also support wire transfers."}</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">{"Can I cancel anytime?"}</summary>
                  <div className="faq-a">{"Absolutely. There are no long-term contracts. You can cancel your subscription at any time, and you'll continue to have access until the end of your billing period."}</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">{"Do you offer enterprise pricing?"}</summary>
                  <div className="faq-a">{"Yes. For teams of 25+ or anyone needing SSO, custom integrations, or volume pricing, email hello@formulabyte.com with 'Enterprise' in the subject line."}</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">{"How does the 30% yearly savings work?"}</summary>
                  <div className="faq-a">{"When you choose yearly billing, you get 2 months free compared to monthly billing. The full amount is charged upfront, and you save 30% over the year."}</div>
                </details>
                <details className="faq-item">
                  <summary className="faq-q">{"What happens if I exceed my limits?"}</summary>
                  <div className="faq-a">{"We'll notify you when you're approaching your limits. You can either upgrade your plan or purchase additional capacity. We never cut off service without warning."}</div>
                </details>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="final-cta-wrap">
        <section className="final-cta">
          <div className="final-cta-inner">
            <h2>
              {"Ready to transform your "}
              <span className="accent">data analysis?</span>
            </h2>
            <p>{"Join thousands of professionals already using Formula Byte. Start your free trial today."}</p>
            <div className="btn-row">
              <a href="https://dashboard.formulabyte.com/" className="btn btn-primary btn-lg">{"Get started free →"}</a>
              <a href="/contact" className="btn btn-outline btn-lg">{"Talk to sales"}</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}