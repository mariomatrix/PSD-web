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
            <h2 className="text-4xl md:text-6xl font-black text-marine mb-8 leading-tight tracking-tighter">
              {dict.marinaPlan.heading}
            </h2>
            <p className="text-xl text-text-muted font-light mb-12 max-w-md leading-relaxed">
              {dict.marinaPlan.description}
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={localizedHref('/tlocrt', lang)}
                className="group relative vibe-glass text-marine px-10 py-5 rounded-2xl uppercase tracking-[0.3em] text-xs font-black transition-all duration-500 overflow-hidden inline-flex items-center gap-4 bg-white/50"
              >
                <Map className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="relative z-10">{dict.marinaPlan.cta}</span>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInRight}
            className="order-1 lg:order-2 flex justify-center lg:justify-end vibe-depth-container"
          >
            <Link 
              href={localizedHref('/tlocrt', lang)}
              className="vibe-iso-card vibe-floating w-full max-w-lg aspect-square bg-white rounded-[3rem] overflow-hidden flex items-center justify-center border border-white/20 relative group cursor-pointer"
              style={{ willChange: 'transform' }}
            >
              <img 
                src="/mapa_lucica_spinut.svg" 
                alt="Marina Plan Preview" 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-marine/10 group-hover:bg-transparent transition-colors duration-700" title={dict.marinaPlan.cta} />
              
              {/* Glassy overlay icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="vibe-glass p-6 rounded-3xl shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-700">
                  <Map className="w-12 h-12 text-marine" />
                </div>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
