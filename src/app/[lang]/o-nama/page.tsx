import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { getDictionary, hasLocale } from '../dictionaries'
import type { Locale } from '../dictionaries'
import { Anchor, ShieldCheck, Users, Trophy } from 'lucide-react'

// Note: To use framer-motion in a server component file, we need to extract the animated parts to a client component.
// For simplicity in this Faza 1 MVP, we will make the whole page a client component if it uses heavy animations,
// but since we want SEO, we'll keep the page as a Server Component and create an AnimatedSection wrapper.

import AnimatedSection from '@/components/ui/AnimatedSection'

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)

  const features = [
    {
      icon: Anchor,
      title: dict.about.history,
      desc: dict.about.historyText,
    },
    {
      icon: ShieldCheck,
      title: dict.about.concession,
      desc: dict.about.concessionText,
    },
    {
      icon: Users,
      title: dict.about.management,
      desc: dict.about.managementText,
    },
    {
      icon: Trophy,
      title: dict.about.clubs,
      desc: dict.about.clubsText,
    },
  ]

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-20 lg:mb-28">
        <h1 className="text-5xl md:text-6xl font-serif text-marine mb-6">{dict.about.title}</h1>
        <p className="text-xl text-text-muted font-light max-w-2xl mx-auto">
          {dict.about.subtitle}
        </p>
        <div className="w-16 h-1 bg-gold mx-auto mt-10" />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {features.map((feature, idx) => (
          <AnimatedSection key={idx} delay={idx * 0.1} className="flex gap-6">
            <div className="shrink-0 mt-1">
              <div className="w-12 h-12 rounded-full bg-paper flex items-center justify-center text-marine">
                <feature.icon className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-serif text-marine mb-4">{feature.title}</h2>
              <p className="text-text-muted font-light leading-relaxed">
                {feature.desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
