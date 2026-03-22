'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { smoothEase } from '@/lib/animations'

interface HeroSectionProps {
  dict: {
    hero: { title: string; subtitle: string; cta: string }
  }
  craneAppUrl: string
}

export default function HeroSection({ dict, craneAppUrl }: HeroSectionProps) {
  const { scrollY } = useScroll()
  const heroBgY = useTransform(scrollY, [0, 800], ['0%', '20%'])
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0])

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-x-0 -top-10 -bottom-10 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/IMG_5405.jpg")',
          y: heroBgY,
        }}
      />
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* Content */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-20 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tighter drop-shadow-lg"
        >
          {dict.hero.title}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: smoothEase as any }}
          className="text-white/90 text-xl md:text-3xl font-light mb-12 tracking-wide drop-shadow-md"
        >
          {dict.hero.subtitle}
        </motion.h2>

        <motion.a
          href={craneAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{
            duration: 1.2,
            delay: 0.6,
            ease: smoothEase as any,
            scale: { duration: 0.4, ease: 'easeOut' },
          }}
          className="bg-gold hover:bg-gold-light text-white px-10 py-5 rounded-full uppercase tracking-[0.2em] text-sm font-bold transition-all duration-300 shadow-lg hover:shadow-2xl inline-flex items-center"
        >
          {dict.hero.cta}
        </motion.a>
      </motion.div>
    </section>
  )
}
