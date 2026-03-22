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
            <Link 
              href={localizedHref('/tlocrt', lang)}
              className="w-full max-w-lg aspect-square bg-paper border border-gray-100 rounded-lg overflow-hidden flex items-center justify-center shadow-inner relative group cursor-pointer transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-gold/30"
            >
              <img 
                src="/mapa_lucica_spinut.svg" 
                alt="Marina Plan Preview" 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-marine/5 group-hover:bg-transparent transition-colors duration-700" title={dict.marinaPlan.cta} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
