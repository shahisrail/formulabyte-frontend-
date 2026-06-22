import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// URL redirect mappings from old to new URLs
const URL_REDIRECTS: Record<string, string> = {
  // Old tool URLs (without /tools prefix) -> New tool URLs (with /tools prefix)
  '/ai-chatbot': '/tools/ai-chatbot',
  '/sentiment-analysis-tool': '/tools/sentiment-analysis-tool',
  '/excel-formula-generator': '/tools/excel-formula-generator',
  '/ai-excel-spreadsheet-generator': '/tools/ai-excel-spreadsheet-generator',
  '/bank-statement-converter-pdf-to-excel': '/tools/bank-statement-converter',
  '/ai-question-answer-generator': '/tools/ai-question-answer-generator',
  '/ai-dax-code-generator': '/tools/ai-dax-code-generator',
  '/ai-pandas-code-generator': '/tools/ai-pandas-code-generator',
  '/pdf-to-excel-ai': '/tools/pdf-to-excel-ai',
  '/ai-sql-query-generator': '/tools/ai-sql-query-generator',
  '/ai-vba-code-generator': '/tools/ai-vba-code-generator',
  '/ai-regex-generator': '/tools/ai-regex-generator',
  '/ai-google-apps-script-generator': '/tools/ai-google-apps-script-generator',
  '/ai-r-code-generator': '/tools/ai-r-code-generator',
  '/ai-homework-helper': '/tools/ai-homework-helper',
  '/google-sheets-formula-generator': '/tools/ai-google-apps-script-generator',
  '/m-code-ai': '/tools/m-code-ai',
  '/power-query-ai': '/tools/power-query-ai',

  // Other redirects
  '/contact': '/tools/m-code-ai',
  '/signup': '/tools/ai-sql-query-generator',

  // TermsConditions -> terms (lowercase with dash)
  '/TermsConditions': '/terms',
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if this path needs to be redirected
  if (URL_REDIRECTS[pathname]) {
    const newPath = URL_REDIRECTS[pathname];
    const url = request.nextUrl.clone();
    url.pathname = newPath;

    // Return 301 permanent redirect for SEO
    return NextResponse.redirect(url, 301);
  }

  // Handle trailing slashes - redirect to non-trailing slash
  if (pathname !== '/' && pathname.endsWith('/')) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(0, -1);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
