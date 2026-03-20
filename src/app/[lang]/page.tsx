import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from './dictionaries'
import type { Locale } from './dictionaries'
import { externalLinks } from '@/lib/constants'
import HeroSection from '@/components/home/HeroSection'
import ServiceBar from '@/components/home/ServiceBar'
import ServicesGrid from '@/components/home/ServicesGrid'
import MarinaPlanTeaser from '@/components/home/MarinaPlanTeaser'
import NewsTeaser from '@/components/home/NewsTeaser'

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)

  return (
    <div className="overflow-x-hidden">
      <HeroSection dict={dict} craneAppUrl={externalLinks.craneApp} />
      <ServiceBar dict={dict} />
      <ServicesGrid dict={dict} craneAppUrl={externalLinks.craneApp} />
      <MarinaPlanTeaser lang={lang as Locale} dict={dict} />
      <NewsTeaser lang={lang as Locale} dict={dict} />
    </div>
  )
}
