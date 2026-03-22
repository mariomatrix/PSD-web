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
        {/* Berths Box */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -8 }}
          className="relative h-[450px] rounded-3xl overflow-hidden shadow-lg group"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
            style={{ backgroundImage: 'url("/IMG_5409.jpg")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-marine via-marine/40 to-transparent" />
          
          <div className="relative h-full p-8 flex flex-col justify-end text-white">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20">
              <Anchor strokeWidth={1.5} className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{dict.services.berths.title}</h3>
            <p className="text-white/80 font-light text-sm leading-relaxed mb-4">
              {dict.services.berths.description}
            </p>
          </div>
        </motion.div>

        {/* Crane Box */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -8 }}
          className="relative h-[450px] rounded-3xl overflow-hidden shadow-lg group"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
            style={{ backgroundImage: 'url("/IMG_5537.jpg")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-marine via-marine/40 to-transparent" />
          
          <div className="relative h-full p-8 flex flex-col justify-end text-white">
            <div className="w-12 h-12 rounded-xl bg-gold/80 flex items-center justify-center mb-4">
              <Ship strokeWidth={1.5} className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{dict.services.crane.title}</h3>
            <p className="text-white/80 font-light text-sm leading-relaxed mb-6">
              {dict.services.crane.description}
            </p>
            <a
              href={craneAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-marine px-5 py-2.5 rounded-full uppercase tracking-wider text-[10px] font-bold transition-all hover:bg-gold hover:text-white w-fit shadow-md"
            >
              {dict.services.crane.cta} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Sports Box */}
        <motion.div
          variants={fadeInUp}
          whileHover={{ y: -8 }}
          className="relative h-[450px] rounded-3xl overflow-hidden shadow-lg group"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
            style={{ backgroundImage: 'url("/IMG_5405.jpg")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-marine via-marine/40 to-transparent" />
          
          <div className="relative h-full p-8 flex flex-col justify-end text-white">
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20">
              <Sailboat strokeWidth={1.5} className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3">{dict.services.sports.title}</h3>
            <p className="text-white/80 font-light text-sm leading-relaxed mb-4">
              {dict.services.sports.description}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
