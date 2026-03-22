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
        className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 vibe-depth-container"
      >
        {/* Berths Box */}
        <motion.div
          variants={fadeInUp}
          className="vibe-iso-card vibe-floating relative h-[500px] rounded-[2rem] overflow-hidden group border border-white/10"
          style={{ willChange: 'transform' }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
            style={{ backgroundImage: 'url("/IMG_5409.jpg")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-marine via-marine/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative h-full p-10 flex flex-col justify-end text-white">
            <div className="w-14 h-14 rounded-2xl vibe-glass flex items-center justify-center mb-6 shadow-xl">
              <Anchor strokeWidth={1.5} className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 tracking-tight drop-shadow-sm">{dict.services.berths.title}</h3>
            <p className="text-white/90 font-light text-base leading-relaxed mb-6">
              {dict.services.berths.description}
            </p>
          </div>
        </motion.div>

        {/* Crane Box */}
        <motion.div
          variants={fadeInUp}
          className="vibe-iso-card vibe-floating relative h-[500px] rounded-[2rem] overflow-hidden group border border-gold/20"
          style={{ willChange: 'transform' }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
            style={{ backgroundImage: 'url("/IMG_5537.jpg")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-marine via-marine/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative h-full p-10 flex flex-col justify-end text-white">
            <div className="w-14 h-14 rounded-2xl bg-gold/90 backdrop-blur-md flex items-center justify-center mb-6 shadow-xl border border-white/20">
              <Ship strokeWidth={1.5} className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 tracking-tight drop-shadow-sm">{dict.services.crane.title}</h3>
            <p className="text-white/90 font-light text-base leading-relaxed mb-8">
              {dict.services.crane.description}
            </p>
            <a
              href={craneAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="vibe-glass inline-flex items-center gap-3 text-white px-8 py-4 rounded-2xl uppercase tracking-[0.2em] text-xs font-black transition-all hover:bg-gold hover:border-gold w-fit shadow-2xl active:scale-95"
            >
              {dict.services.crane.cta} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Sports Box */}
        <motion.div
          variants={fadeInUp}
          className="vibe-iso-card vibe-floating relative h-[500px] rounded-[2rem] overflow-hidden group border border-white/10"
          style={{ willChange: 'transform' }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
            style={{ backgroundImage: 'url("/IMG_5405.jpg")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-marine via-marine/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative h-full p-10 flex flex-col justify-end text-white">
            <div className="w-14 h-14 rounded-2xl vibe-glass flex items-center justify-center mb-6 shadow-xl">
              <Sailboat strokeWidth={1.5} className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-3xl font-bold mb-4 tracking-tight drop-shadow-sm">{dict.services.sports.title}</h3>
            <p className="text-white/90 font-light text-base leading-relaxed mb-6">
              {dict.services.sports.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
