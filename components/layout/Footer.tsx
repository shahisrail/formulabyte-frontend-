import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image
              src="/Formulabyte-logo.svg"
              width={200}
              height={90}
              alt="logo"
            />
            <p>
              AI-powered data analysis for teams that work with data. Ask
              anything, get instant answers, formulas, charts, and reports, all
              from plain English.
            </p>
            <div className="footer-brand-section">
              <h6>Ask AI About Formula Byte</h6>
              <div className="llm-links">
                <a href="https://chatgpt.com/?prompt=I%E2%80%99m%20researching%20AI%20data%20analysis%20tools%20and%20want%20to%20know%20how%20Formula%20Byte%20turns%20raw%20data%20into%20insights%2C%20automates%20analysis%2C%20and%20helps%20people%20work%20with%20spreadsheets%20without%20writing%20complex%20formulas.%20Summarize%20the%20highlights%20from%20Formula%20Byte%E2%80%99s%20website%3A%20https%3A%2F%2Fformulabyte.com" target="_blank" rel="noopener noreferrer" aria-label="ChatGPT">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 2H2v20h20V2zm-2 2v16H4V4h16z"/>
                    <path d="M6 6h12v2H6V6zm0 4h12v2H6v-2zm0 4h8v2H6v-2z"/>
                  </svg>
                </a>
                <a href="https://www.perplexity.ai/search/new?q=I%E2%80%99m%20researching%20AI%20data%20analysis%20tools%20and%20want%20to%20know%20how%20Formula%20Byte%20turns%20raw%20data%20into%20insights%2C%20automates%20analysis%2C%20and%20helps%20people%20work%20with%20spreadsheets%20without%20writing%20complex%20formulas.%20Summarize%20the%20highlights%20from%20Formula%20Byte%E2%80%99s%20website%3A%20https%3A%2F%2Fformulabyte.com" target="_blank" rel="noopener noreferrer" aria-label="Perplexity">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </a>
                <a href="https://claude.ai/new?q=I%E2%80%99m%20researching%20AI%20data%20analysis%20tools%20and%20want%20to%20know%20how%20Formula%20Byte%20turns%20raw%20data%20into%20insights%2C%20automates%20analysis%2C%20and%20helps%20people%20work%20with%20spreadsheets%20without%20writing%20complex%20formulas.%20Summarize%20the%20highlights%20from%20Formula%20Byte%E2%80%99s%20website%3A%20https%3A%2F%2Fformulabyte.com" target="_blank" rel="noopener noreferrer" aria-label="Claude">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </a>
                <a href="https://www.google.com/search?udm=50&aep=11&q=I%E2%80%99m%20researching%20AI%20data%20analysis%20tools%20and%20want%20to%20know%20how%20Formula%20Byte%20turns%20raw%20data%20into%20insights%2C%20automates%20analysis%2C%20and%20helps%20people%20work%20with%20spreadsheets%20without%20writing%20complex%20formulas.%20Summarize%20the%20highlights%20from%20Formula%20Byte%E2%80%99s%20website%3A%20https%3A%2F%2Fformulabyte.com" target="_blank" rel="noopener noreferrer" aria-label="Google AI">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

    

          <div className="footer-col">
            <h5>Free Tools</h5>
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
            <h5>Product</h5>
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
            <h5>Company</h5>
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
            <h5>Follow Us</h5>
            <div className="social-links">
              <a href="https://www.facebook.com/theformulabyte/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 16.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://x.com/theformulabyte" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.pinterest.com/theformulabyte" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.2-2.405.727 0 1.384.073 1.934.207.849.222 1.739.632 2.405 1.726 1.15 1.887 2.448 2.668 2.667 1.536.436 2.72.632 3.35.517.267-.083.549-.13.836-.13.757 0 1.448.063 2.084.189 1.092.22 2.234.639 3.317 1.237 1.396.732 2.669 1.852 3.771 2.662.311-.267.632-.542.976-.785.866-.543-.443-1.188-.753-1.885-.929-.717-.18-1.45-.284-2.2-.284-.903 0-1.783.159-2.606.475-.743.291-1.421.677-2.034 1.153-.528.479-1.025 1.164-1.489 2.045-.379.722-.608 1.519-.687 2.374-.08.974-.066 1.982.042 3.012-.231.99-.626 1.932-1.187 2.822-.646 1.056-1.45 1.977-2.411 2.757-.924.751-1.951 1.335-3.061 1.746-.773.271-1.573.396-2.398.376-.847-.021-1.697-.123-2.52-.306-.548-.113-.904-.415-.904-.875 0-.316.187-.59.496-.814.042-.035.091-.073.148-.114l.001-.003c.773-1.209 1.585-2.438 2.436-3.686.523-.765 1.073-1.516 1.645-2.256.571-.739 1.166-1.467 1.793-2.183.627-.731 1.289-1.443 1.966-2.141.677-.695 1.386-1.381 2.113-2.046.727-.663 1.476-1.312 2.257-1.945.78-.632 1.593-1.251 2.434-1.85.84-.598 1.714-1.178 2.618-1.739.904-.56 1.837-1.106 2.799-1.634.962-.527 1.957-1.038 2.983-1.531 1.026-.492 2.085-.967 3.177-1.424.289-.121.579-.245.875-.371.059-.025.117-.049.235-.074.354-.159.784-.306 1.574-.446 2.371-.586.797-.14 1.602-.273 2.415-.399.813-.126 1.632-.25 2.458-.375.826-.125 1.659-.249 2.5-.373.431-.108.862-.217 1.297-.323.363-.095.723-.19 1.088-.284.365-.093.73-.187 1.099-.279.37-.093.742-.186 1.117-.278.376-.093.754-.186 1.135-.278.382-.093.769-.186 1.16-.279.392-.094.787-.188 1.186-.281.399-.094.801-.189 1.207-.283.407-.095.818-.19 1.233-.285.415-.095.833-.191 1.255-.287.422-.096.849-.192 1.279-.288.43-.096.864-.193 1.302-.29.439-.097.882-.194 1.328-.291.447-.098.899-.196 1.354-.294.455-.098.914-.197 1.377-.295.463-.099.931-.198 1.402-.297.472-.099.947-.199 1.426-.298.48-.1.968-.2 1.45-.3.482-.1.969-.201 1.459-.301.49-.101.99-.202 1.493-.303.503-.101 1.013-.203 1.527-.305.515-.102 1.034-.204 1.556-.306.523-.103 1.053-.206 1.585-.309.533-.103 1.073-.207 1.617-.311.545-.104 1.095-.208 1.649-.312.555-.105 1.115-.21 1.679-.315.565-.105 1.139-.211 1.717-.317.579-.106 1.167-.213 1.76-.32.594-.107 1.2-.215 1.812-.323.612-.108 1.233-.217 1.859-.326.626-.109 1.266-.219 1.909-.329.644-.11 1.297-.221 1.955-.332.658-.111 1.325-.223 1.997-.335.672-.113 1.353-.226 2.036-.34.684-.114 1.375-.228 2.073-.343.698-.115 1.402-.23 2.11-.346.708-.116 1.423-.232 2.142-.349.72-.117 1.447-.234 2.177-.352.73-.118 1.468-.236 2.209-.355.741-.119 1.488-.239 2.238-.359.75-.121 1.511-.242 2.273-.364.762-.122 1.532-.245 2.303-.368.771-.123 1.549-.247 2.325-.371.777-.125 1.563-.25 2.345-.376.782-.126 1.573-.253 2.356-.38.786-.128 1.577-.256 2.362-.385.785-.13 1.578-.26 2.362-.391.777-.131 1.563-.263 2.34-.396.776-.133 1.559-.267 2.334-.401.775-.135 1.562-.27 2.339-.406.777-.136 1.563-.273 2.34-.411.777-.138 1.561-.276 2.337-.415.775-.139 1.556-.279 2.329-.419.772-.141 1.548-.282 2.317-.423.769-.142 1.536-.285 2.299-.427.753-.143 1.511-.287 2.264-.43.751-.145 1.499-.29 2.241-.436.742-.146 1.483-.293 2.217-.44.733-.148 1.463-.296 2.185-.445.721-.15 1.436-.3 2.146-.451.692-.152 1.378-.304 2.055-.457.676-.154 1.343-.308 2-.463.656-.157 1.303-.314 1.938-.472.634-.159 1.259-.318 1.87-.478.611-.161 1.209-.323 1.796-.486.587-.164 1.162-.328 1.725-.493.563-.166 1.113-.333 1.651-.501.539-.169 1.059-.339 1.565-.51.527-.172 1.033-.345 1.526-.519.493-.175.967-.351 1.427-.528.459-.178.907-.357 1.352-.538.445-.181.877-.363 1.295-.547.418-.185.826-.37 1.229-.556.402-.187.792-.375 1.169-.565.375-.19.736-.381 1.091-.573.354-.193.695-.387 1.022-.582.308-.198.603-.397.887-.598.282-.201.551-.404.806-.608.255-.205.497-.411.724-.619.221-.208.428-.418.621-.629.193-.211.377-.424.552-.639.175-.216.336-.433.485-.652.149-.22.279-.44.404-.666.122-.228.219-.455.325-.689.094-.245.164-.489.225-.736.054-.249.085-.503.105-.759.019-.258.028-.519.028-.781-.001-.264-.016-.529-.043-.793-.071-.267-.051-.535-.107-.8.166-.269-.06-.539-.123-.804-.19-.269-.068-.538-.138-.801-.211-.265-.074-.527-.15-.783-.23-.259-.081-.516-.165-.768-.251-.254-.087-.505-.176-.752-.267-.249-.091-.494-.184-.736-.28-.243-.096-.483-.193-.718-.292-.237-.1-.471-.201-.701-.304-.23-.104-.456-.209-.677-.315-.223-.107-.441-.215-.655-.324-.214-.11-.423-.221-.628-.334-.205-.113-.406-.228-.603-.343-.197-.116-.39-.232-.579-.35-.19-.119-.376-.238-.558-.359-.182-.121-.359-.243-.533-.367-.174-.124-.344-.249-.51-.376-.166-.127-.328-.255-.487-.385-.159-.13-.314-.261-.466-.394-.152-.133-.3-.267-.445-.403-.145-.136-.286-.272-.423-.41-.137-.138-.27-.277-.4-.417-.13-.141-.257-.282-.381-.424-.124-.143-.244-.287-.36-.432-.116-.145-.228-.29-.336-.437-.109-.147-.215-.295-.317-.445-.102-.151-.2-.303-.296-.457-.095-.154-.186-.309-.273-.466-.087-.157-.17-.315-.248-.474-.078-.16-.153-.321-.224-.484-.07-.163-.136-.327-.2-.492-.063-.165-.123-.331-.18-.497-.057-.167-.11-.334-.16-.502-.043-.169-.083-.338-.12-.507-.037-.17-.07-.34-.099-.51-.029-.171-.054-.343-.074-.515-.019-.173-.035-.346-.046-.52-.026-.174-.046-.349-.058-.525-.01-.177-.016-.355-.017-.533z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/theformulabyte/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .773 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
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
