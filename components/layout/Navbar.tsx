
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { tools } from "@/data/tools";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="" aria-label="Formula Byte home">

           <Image src="/Formulabyte-logo.svg" width={200} height={90} alt="dss" />
        </Link>

        <nav className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`} aria-label="Main navigation">
          <Link className={pathname === "/" ? "active" : ""} href="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>

          {/* <div className="nav-dropdown">
            <Link className={pathname?.startsWith('/') ? 'active' : ''} href="/tools">
              Tools
              <span className="dropdown-caret">⌄</span>
            </Link>

            <div className="tools-menu" role="menu">
              <div className="tools-menu-grid">
                {tools.map((tool) => (
                  <Link href={`/tools/${tool.slug}`} className="tools-menu-item" key={tool.slug}>
                    <span className="tools-menu-icon">{tool.icon}</span>
                    <span>
                      <strong>{tool.name}</strong>
                      <small>{tool.shortDescription}</small>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div> */}

          <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
          <Link className={pathname === "/about" ? "active" : ""} href="/about" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link
            className={pathname === "/contact" ? "active" : ""}
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>

        <div className="nav-cta">
          <Link href="https://dashboard.formulabyte.com/" className="btn btn-ghost">
            Log in
          </Link>
          <Link href="https://dashboard.formulabyte.com/" className="btn btn-primary">
            Try free
          </Link>
        </div>

        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
