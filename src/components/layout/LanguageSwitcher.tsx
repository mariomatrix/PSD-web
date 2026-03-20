'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import type { Locale } from '@/app/[lang]/dictionaries'

interface LanguageSwitcherProps {
  currentLocale: Locale
}

export default function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const pathname = usePathname()

  // Replace current locale prefix with the target locale
  function getLocalizedPath(targetLocale: Locale): string {
    const segments = pathname.split('/')
    segments[1] = targetLocale
    return segments.join('/')
  }

  const otherLocale: Locale = currentLocale === 'hr' ? 'en' : 'hr'

  return (
    <Link
      href={getLocalizedPath(otherLocale)}
      className="flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold"
      aria-label={`Switch to ${otherLocale === 'en' ? 'English' : 'Hrvatski'}`}
    >
      <span className={currentLocale === 'hr' ? 'font-bold' : 'opacity-50'}>HR</span>
      <span className="opacity-30">|</span>
      <span className={currentLocale === 'en' ? 'font-bold' : 'opacity-50'}>EN</span>
    </Link>
  )
}
