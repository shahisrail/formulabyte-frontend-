
import Link from "next/link";
import { usePathname } from "next/navigation";
import { tools } from "@/data/tools";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="" aria-label="Formula Byte home">
        
           <Image src="/Formulabyte-logo.svg" width={200} height={90} alt="dss" />
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <Link className={pathname === "/" ? "active" : ""} href="/">
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

          <Link href="/pricing">Pricing</Link>
          <Link className={pathname === "/about" ? "active" : ""} href="/about">
            About
          </Link>
          <Link
            className={pathname === "/contact" ? "active" : ""}
            href="/contact"
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
      </div>
    </header>
  );
}
