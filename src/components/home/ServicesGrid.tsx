'use client'

import { motion } from 'framer-motion'
import { Anchor, Ship, Sailboat, ArrowRight } from 'lucide-react'
import { fadeInUp, staggerContainer } from '@/lib/animations'

interface ServicesGridProps {
  dict: {
    services: {
      heading: string
      berths: { title: string; description: string }
      crane: { title: string; description: string; cta: string }
      sports: { title: string; description: string }
    }
  }
  craneAppUrl: string
}

export default function ServicesGrid({ dict, craneAppUrl }: ServicesGridProps) {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto relative z-30 bg-paper">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInUp}
        className="text-center mb-16 lg:mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-marine mb-6 tracking-tight">
          {dict.services.heading}
        </h2>
        <div className="w-16 h-1.5 bg-gold mx-auto mt-6 rounded-full" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
      >
        {/* Berths - Large Bento Box (Spans 2 cols, 2 rows on desktop) */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 0.98 }}
          className="md:col-span-2 md:row-span-2 bg-marine text-white p-10 lg:p-14 rounded-3xl shadow-lg relative overflow-hidden group flex flex-col justify-between transition-transform duration-300 min-h-[400px]"
        >
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-marine-light rounded-full opacity-60 blur-3xl group-hover:scale-110 group-hover:bg-gold/20 transition-all duration-700" />
          
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-10 border border-white/20">
              <Anchor strokeWidth={1.5} className="w-8 h-8 text-white" />
            </div>
            <div className="mt-auto">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">{dict.services.berths.title}</h3>
              <p className="text-white/80 font-light leading-relaxed text-lg lg:text-xl max-w-xl">
                {dict.services.berths.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Crane - Highlighted Action Box */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 0.98, y: -4 }}
          className="bg-paper-warm border border-marine/5 p-8 lg:p-10 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group relative overflow-hidden"
        >
          <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-500">
            <Ship strokeWidth={1.5} className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-marine mb-3">{dict.services.crane.title}</h3>
          <p className="text-text-muted font-light leading-relaxed mb-8 flex-grow">
            {dict.services.crane.description}
          </p>
          <a
            href={craneAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white px-6 py-3.5 rounded-xl uppercase tracking-wider text-xs font-bold transition-all shadow-md group-hover:shadow-lg w-fit"
          >
            {dict.services.crane.cta} <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Sports Box */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 0.98, y: -4 }}
          className="bg-white border border-paper-warm p-8 lg:p-10 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
        >
          <div className="w-14 h-14 rounded-2xl bg-marine/5 flex items-center justify-center mb-6 text-marine group-hover:bg-marine group-hover:text-white transition-colors duration-500">
            <Sailboat strokeWidth={1.5} className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-marine mb-3">{dict.services.sports.title}</h3>
          <p className="text-text-muted font-light leading-relaxed mb-6 flex-grow">
            {dict.services.sports.description}
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
