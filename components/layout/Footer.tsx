import Link from 'next/link';
import { tools } from '@/data/tools';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
          <Image src="/Formulabyte-logo.svg" width={200} height={90} alt="logo" />
            <p>
              AI-powered data analysis for teams that work with data. Ask anything, get instant answers, formulas,
              charts, and reports, all from plain English.
            </p>
          </div>

          <div className="footer-col">
            <h5>Free Tools</h5>
            <ul>
              {tools.slice(0, 6).map((tool) => (
                <li key={tool.slug}>
                  <Link href={`/${tool.slug}`}>{tool.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Product</h5>
            <ul>
              <li><Link href="/#how-it-works">How it works</Link></li>
              <li><Link href="/#pricing">Pricing</Link></li>
              <li><Link href="/tools">Tools</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
              <li><Link href="/excel-spreadsheet-generator">Excel Generator</Link></li>
              <li><Link href="/excel-file-generator">Excel File Generator</Link></li>
              <li><Link href="/connectors/google-analytics">Google Analytics</Link></li>
              <li><Link href="/bank-statement-converter">Bank Statement Converter</Link></li>
              <li><Link href="/formula-byte-vs-formula-bot">Compare</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/auth">Log in</Link></li>
              <li><Link href="/auth">Try free</Link></li>
            </ul>
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
