'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeInUp, staggerContainer, buttonHover } from '@/lib/animations'
import type { Locale } from '@/app/[lang]/dictionaries'
import { localizedHref } from '@/lib/constants'

interface NewsTeaserProps {
  lang: Locale
  dict: {
    newsTeaser: { heading: string; cta: string }
  }
}

// Placeholder news items (will be replaced by real data later)
const placeholderNews = [
  {
    slug: 'koncesija-2024',
    titleHr: 'Vlada RH donijela odluku o koncesiji',
    titleEn: 'Government grants concession to PŠD Špinut',
    date: '2024-04-15',
  },
  {
    slug: 'pravilnik-2025',
    titleHr: 'Novi Pravilnik o korištenju veza',
    titleEn: 'New berth usage regulations adopted',
    date: '2025-12-11',
  },
  {
    slug: 'ciscenje-podmorja',
    titleHr: 'Akcija čišćenja podmorja lučice',
    titleEn: 'Underwater cleaning campaign in the marina',
    date: '2025-10-20',
  },
]

export default function NewsTeaser({ lang, dict }: NewsTeaserProps) {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 bg-paper-warm relative z-30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-marine mb-6">
            {dict.newsTeaser.heading}
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {placeholderNews.map((item) => (
            <motion.article
              key={item.slug}
              variants={fadeInUp}
              className="bg-white p-8 rounded-sm shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow duration-300 group"
            >
              <time className="text-xs text-text-muted uppercase tracking-widest">
                {new Date(item.date).toLocaleDateString(lang === 'hr' ? 'hr-HR' : 'en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <h3 className="text-lg font-serif text-marine mt-3 mb-4 leading-snug group-hover:text-gold transition-colors duration-300">
                {lang === 'hr' ? item.titleHr : item.titleEn}
              </h3>
              <div className="w-8 h-px bg-gold/40" />
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <motion.div whileHover={buttonHover} className="inline-block">
            <Link
              href={localizedHref('/vijesti', lang)}
              className="text-gold hover:text-marine text-sm font-semibold uppercase tracking-widest transition-colors duration-300 inline-flex items-center gap-2"
            >
              {dict.newsTeaser.cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
