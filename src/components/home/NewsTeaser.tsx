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
          className="text-center mb-20 lg:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black text-marine mb-6 leading-tight tracking-tighter">
            {dict.newsTeaser.heading}
          </h2>
          <div className="w-20 h-2 bg-gold mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(42,138,159,0.3)]" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12"
        >
          {placeholderNews.map((item) => (
            <motion.article
              key={item.slug}
              variants={fadeInUp}
              className="vibe-glass vibe-floating p-10 rounded-[2.5rem] bg-white border border-white/20 shadow-2xl transition-all duration-500 group relative overflow-hidden"
              style={{ willChange: 'transform' }}
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <ArrowRight className="w-6 h-6 text-gold -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>

              <time className="text-[10px] text-marine/40 font-black uppercase tracking-[0.3em] block mb-6">
                {new Date(item.date).toLocaleDateString(lang === 'hr' ? 'hr-HR' : 'en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </time>
              <h3 className="text-2xl font-black text-marine leading-tight group-hover:text-gold transition-colors duration-500 mb-8 min-h-[4rem]">
                {lang === 'hr' ? item.titleHr : item.titleEn}
              </h3>
              
              <Link 
                href={localizedHref(`/vijesti/${item.slug}`, lang)}
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gold hover:text-marine transition-colors duration-300"
              >
                PROČITAJ VIŠE <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-20 lg:mt-24"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Link
              href={localizedHref('/vijesti', lang)}
              className="vibe-glass text-marine px-10 py-5 rounded-2xl uppercase tracking-[0.3em] text-[11px] font-black transition-all duration-500 hover:bg-gold hover:text-white inline-flex items-center gap-3 border border-marine/5 bg-white/50"
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
