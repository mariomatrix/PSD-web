import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { notFound } from 'next/navigation'
import '../globals.css'
import { getDictionary, hasLocale } from './dictionaries'
import type { Locale } from './dictionaries'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export async function generateStaticParams() {
  return [{ lang: 'hr' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isEn = lang === 'en'
  return {
    title: isEn ? 'PŠD Špinut | Your Harbour in Split' : 'PŠD Špinut | Tvoja luka u Splitu',
    description: isEn
      ? 'Maritime Sports Club Špinut offers safe berths, crane services, and sports sections in Split, Croatia.'
      : 'PŠD Špinut nudi sigurne vezove, dizalicu te sportske sekcije ribolova i jedrenja.',
  }
}

import { ThemeProvider } from '@/components/ThemeProvider'
import CookieConsent from '@/components/CookieConsent'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)

  return (
    <html lang={lang} className={`${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-paper text-text transition-colors duration-300">
        <ThemeProvider>
          <Navbar lang={lang as Locale} dict={dict} />
          <main>{children}</main>
          <Footer lang={lang as Locale} dict={dict} />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
