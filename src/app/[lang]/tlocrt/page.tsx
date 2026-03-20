import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '../dictionaries'
import type { Locale } from '../dictionaries'
import { marinaZones } from '@/lib/marina-data'
import AnimatedSection from '@/components/ui/AnimatedSection'
import MarinaMap from '@/components/marina-map/MarinaMap'

export default async function MarinaPlanPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-12 lg:mb-16">
        <h1 className="text-5xl md:text-6xl font-serif text-marine mb-6">{dict.nav?.marinaPlan || 'Tlocrt'}</h1>
        <p className="text-xl text-text-muted font-light max-w-2xl mx-auto">
          {dict.marinaPlan?.description || 'Interaktivni plan vezova i infrastrukture.'}
        </p>
        <div className="w-16 h-1 bg-gold mx-auto mt-10" />
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <MarinaMap zones={marinaZones} dict={dict} lang={lang} />
      </AnimatedSection>
      
      <AnimatedSection delay={0.4} className="mt-12 text-center text-sm text-text-muted/60">
        * Plan je isključivo informativnog karaktera i skica lučice. Za precizne informacije kontaktirajte tajništvo.
      </AnimatedSection>
    </div>
  )
}
