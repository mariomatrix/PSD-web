import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['hr', 'en']
const defaultLocale = 'hr'

function getLocale(request: NextRequest): string {
  const acceptLang = request.headers.get('accept-language') || ''
  // Simple check: if english is preferred, use en
  if (acceptLang.startsWith('en')) return 'en'
  return defaultLocale
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip internal paths and static assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // files like favicon.ico, images, etc.
  ) {
    return
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ['/((?!_next|api|.*\\.).*)'],
}
