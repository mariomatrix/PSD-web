import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '../dictionaries'
import type { Locale } from '../dictionaries'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Leaf, Award, Recycle, Download } from 'lucide-react'
import { externalLinks } from '@/lib/constants'

export default async function EcologyPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-20 lg:mb-24">
        <div className="flex justify-center mb-6 text-success">
          <Leaf className="w-16 h-16" strokeWidth={1.5} />
        </div>
        <h1 className="text-5xl md:text-6xl font-serif text-marine mb-6">{dict.ecology.title}</h1>
        <p className="text-xl text-text-muted font-light max-w-2xl mx-auto">
          {dict.ecology.subtitle}
        </p>
        <div className="w-16 h-1 bg-gold mx-auto mt-10" />
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* ECOMAP Project block */}
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-6 text-marine">
            <Award className="w-8 h-8 text-gold" />
            <h2 className="text-3xl font-serif">{dict.ecology.ecomapTitle}</h2>
          </div>
          <p className="text-lg text-text-muted font-light leading-relaxed mb-10">
            {dict.ecology.ecomapDesc}
          </p>
          <a
            href={externalLinks.ecomapPoster}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 rounded-sm uppercase tracking-[0.2em] text-sm font-semibold transition-colors duration-300 inline-flex items-center gap-3"
          >
            <Download className="w-4 h-4" />
            {dict.ecology.posterBtn}
          </a>
        </AnimatedSection>

        {/* Practices List */}
        <AnimatedSection delay={0.2}>
          <div className="bg-paper-warm p-10 lg:p-12 rounded-sm border border-gray-100">
            <h2 className="text-2xl font-serif text-marine mb-8">{dict.ecology.practicesTitle}</h2>
            <ul className="space-y-6">
              {(dict.ecology.practicesList as string[]).map((practice, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <Recycle className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                  <span className="text-text-muted font-light leading-relaxed">{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
