import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Sparkles, Bot, Brain } from "lucide-react";
import { FaFacebook, FaXTwitter, FaPinterest, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
            <Image
              src="/Formulabyte-logo.svg"
              width={200}
              height={90}
              alt="logo"
            />
               
            </Link>
            <p>
              AI-powered data analysis for teams that work with data. Ask
              anything, get instant answers, formulas, charts, and reports, all
              from plain English.
            </p>
            <div className="footer-brand-section">
              <p>Ask AI About Formula Byte</p>
              <div className="llm-links">
                <a href="https://chatgpt.com/?prompt=I%E2%80%99m%20researching%20AI%20data%20analysis%20tools%20and%20want%20to%20know%20how%20Formula%20Byte%20turns%20raw%20data%20into%20insights%2C%20automates%20analysis%2C%20and%20helps%20people%20work%20with%20spreadsheets%20without%20writing%20complex%20formulas.%20Summarize%20the%20highlights%20from%20Formula%20Byte%E2%80%99s%20website%3A%20https%3A%2F%2Fformulabyte.com" target="_blank" rel="noopener noreferrer" aria-label="ChatGPT">
                  <MessageSquare width={18} height={18} />
                </a>
                <a href="https://www.perplexity.ai/search/new?q=I%E2%80%99m%20researching%20AI%20data%20analysis%20tools%20and%20want%20to%20know%20how%20Formula%20Byte%20turns%20raw%20data%20into%20insights%2C%20automates%20analysis%2C%20and%20helps%20people%20work%20with%20spreadsheets%20without%20writing%20complex%20formulas.%20Summarize%20the%20highlights%20from%20Formula%20Byte%E2%80%99s%20website%3A%20https%3A%2F%2Fformulabyte.com" target="_blank" rel="noopener noreferrer" aria-label="Perplexity">
                  <Sparkles width={18} height={18} />
                </a>
                <a href="https://claude.ai/new?q=I%E2%80%99m%20researching%20AI%20data%20analysis%20tools%20and%20want%20to%20know%20how%20Formula%20Byte%20turns%20raw%20data%20into%20insights%2C%20automates%20analysis%2C%20and%20helps%20people%20work%20with%20spreadsheets%20without%20writing%20complex%20formulas.%20Summarize%20the%20highlights%20from%20Formula%20Byte%E2%80%99s%20website%3A%20https%3A%2F%2Fformulabyte.com" target="_blank" rel="noopener noreferrer" aria-label="Claude">
                  <Brain width={18} height={18} />
                </a>
                <a href="https://www.google.com/search?udm=50&aep=11&q=I%E2%80%99m%20researching%20AI%20data%20analysis%20tools%20and%20want%20to%20know%20how%20Formula%20Byte%20turns%20raw%20data%20into%20insights%2C%20automates%20analysis%2C%20and%20helps%20people%20work%20with%20spreadsheets%20without%20writing%20complex%20formulas.%20Summarize%20the%20highlights%20from%20Formula%20Byte%E2%80%99s%20website%3A%20https%3A%2F%2Fformulabyte.com" target="_blank" rel="noopener noreferrer" aria-label="Google AI">
                  <Bot width={18} height={18} />
                </a>
              </div>
            </div>
          </div>

    

          <div className="footer-col">
            <p>Free Tools</p>
            <ul>
              <li>
                <Link href="/tools/excel-formula-generator">
                  Excel Formula Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/ai-excel-spreadsheet-generator">
                  AI Spreadsheet Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/ai-chatbot">AI Chatbot</Link>
              </li>
              <li>
                <Link href="/tools/sentiment-analysis-tool">
                  Sentiment Analysis
                </Link>
              </li>
              <li>
                <Link href="/tools/bank-statement-converter">
                  Bank Statement Converter
                </Link>
              </li>
              <li>
                <Link href="/tools/ai-qa-generator">AI Q&A Generator</Link>
              </li>
              <li>
                <Link href="/tools/ai-dax-code-generator">
                  AI DAX Generator
                </Link>
              </li>
              <li>
                <Link href="/tools/ai-pandas-code-generator">
                  AI Pandas Generator
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <p>Product</p>
            <ul>
              <li>
                <Link href="/#how-it-works">How it works</Link>
              </li>
              <li>
                <Link href="/#pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/tools">Tools</Link>
              </li>
              <li>
                <Link href="/#faq">FAQ</Link>
              </li>
              {/* <li>
                <Link href="/excel-spreadsheet-generator">Excel Generator</Link>
              </li>
              <li>
                <Link href="/excel-file-generator">Excel File Generator</Link>
              </li> */}
              <li>
                <Link href="/connectors/google-analytics">
                  Google Analytics
                </Link>
              </li>
              {/* <li>
                <Link href="/bank-statement-converter">
                  Bank Statement Converter
                </Link>
              </li> */}
              <li>
                <Link href="/formula-byte-vs-formula-bot">Compare</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <p>Company</p>
            <ul>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="https://dashboard.formulabyte.com/">Log in</Link>
              </li>
              <li>
                <Link href="https://dashboard.formulabyte.com/">Try free</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <p>Follow Us</p>
            <div className="social-links">
              <a href="https://www.facebook.com/theformulabyte/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="https://x.com/theformulabyte" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <FaXTwitter size={20} />
              </a>
              <a href="https://www.pinterest.com/theformulabyte" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <FaPinterest size={20} />
              </a>
              <a href="https://www.linkedin.com/company/theformulabyte/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Formula Byte. All rights reserved.</span>
          <span>Made for people who'd rather not write SUMIFs.</span>
        </div>
      </div>
    </footer>
  );
}
