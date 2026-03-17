import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

let locales = ['en', 'id']
let defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Explicitly ignore static files and API routes handled correctly by Next.js
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    pathname.startsWith('/api')
  ) {
    return
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const locale = defaultLocale

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    )
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/` at the edge level router config
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
