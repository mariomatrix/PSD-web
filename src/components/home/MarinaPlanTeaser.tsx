'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Map } from 'lucide-react'
import { slideInLeft, slideInRight, buttonHover } from '@/lib/animations'
import type { Locale } from '@/app/[lang]/dictionaries'
import { localizedHref } from '@/lib/constants'

interface MarinaPlanTeaserProps {
  lang: Locale
  dict: {
    marinaPlan: { heading: string; description: string; cta: string }
  }
}

export default function MarinaPlanTeaser({ lang, dict }: MarinaPlanTeaserProps) {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInLeft}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-marine mb-6 leading-tight">
              {dict.marinaPlan.heading}
            </h2>
            <p className="text-lg text-text-muted font-light mb-10 max-w-md leading-relaxed">
              {dict.marinaPlan.description}
            </p>

            <motion.div whileHover={buttonHover}>
              <Link
                href={localizedHref('/tlocrt', lang)}
                className="border border-gold text-gold hover:bg-gold hover:text-white px-8 py-4 rounded-sm uppercase tracking-[0.2em] text-sm font-semibold transition-colors duration-300 inline-flex items-center gap-3"
              >
                <Map className="w-4 h-4" />
                {dict.marinaPlan.cta}
              </Link>
            </motion.div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInRight}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-lg aspect-square bg-paper border border-gray-100 rounded-lg p-8 flex items-center justify-center shadow-inner relative group cursor-pointer transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-gold/30">
              <svg
                className="w-full h-full text-marine/10 stroke-current group-hover:text-gold/40 transition-colors duration-700"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 50 C 20 20, 80 20, 90 50 C 90 80, 50 90, 10 70 Z" strokeWidth="2" strokeDasharray="4 4" />
                <rect x="25" y="40" width="10" height="40" strokeWidth="2" />
                <rect x="45" y="30" width="10" height="50" strokeWidth="2" />
                <rect x="65" y="45" width="10" height="35" strokeWidth="2" />
                <circle cx="50" cy="50" r="3" fill="currentColor" />
              </svg>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
