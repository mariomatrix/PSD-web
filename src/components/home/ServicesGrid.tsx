'use client'

import { motion } from 'framer-motion'
import { Anchor, Ship, Sailboat } from 'lucide-react'
import { fadeInUp, staggerContainer, cardHover } from '@/lib/animations'

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
  const cards = [
    {
      key: 'berths',
      Icon: Anchor,
      title: dict.services.berths.title,
      description: dict.services.berths.description,
    },
    {
      key: 'crane',
      Icon: Ship,
      title: dict.services.crane.title,
      description: dict.services.crane.description,
      ctaText: dict.services.crane.cta,
      ctaHref: craneAppUrl,
    },
    {
      key: 'sports',
      Icon: Sailboat,
      title: dict.services.sports.title,
      description: dict.services.sports.description,
    },
  ]

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto relative z-30 bg-paper">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeInUp}
        className="text-center mb-16 lg:mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-marine mb-6">
          {dict.services.heading}
        </h2>
        <div className="w-16 h-1 bg-gold mx-auto mt-6" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
      >
        {cards.map((card) => (
          <motion.div
            key={card.key}
            variants={fadeInUp}
            whileHover={cardHover}
            className="bg-white p-10 lg:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] rounded-sm flex flex-col items-center text-center group transition-shadow duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-paper flex items-center justify-center mb-8 text-marine transition-colors duration-500">
              <card.Icon
                strokeWidth={1.5}
                className="w-8 h-8 group-hover:text-gold transition-colors duration-500"
              />
            </div>
            <h3 className="text-2xl font-serif text-marine mb-4">{card.title}</h3>
            <p className="text-text-muted font-light leading-relaxed mb-6 flex-grow">
              {card.description}
            </p>
            {card.ctaText && (
              <a
                href={card.ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-xs font-semibold tracking-widest text-gold hover:text-marine uppercase transition-colors duration-300"
              >
                {card.ctaText} →
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
