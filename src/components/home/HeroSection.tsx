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

      {/* Content Area */}
      <motion.div
        style={{ opacity: heroOpacity }}
        className="relative z-20 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl mx-auto vibe-depth-container"
      >
        <motion.div
          initial={{ opacity: 0, y: 60, rotateX: -20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0, 0.2, 1] }}
          className="mb-8"
        >
          <h1 className="text-white text-6xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter drop-shadow-2xl">
            {dict.hero.title}
          </h1>
          <motion.div 
            className="w-24 h-2 bg-gold mx-auto rounded-full shadow-[0_0_20px_rgba(42,138,159,0.5)]"
            animate={{ width: [40, 96, 40] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="text-white/90 text-2xl md:text-3xl font-light mb-16 tracking-widest drop-shadow-xl"
        >
          {dict.hero.subtitle.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + (i * 0.03) }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative"
        >
          <motion.a
            href={craneAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative vibe-glass text-white px-12 py-6 rounded-2xl uppercase tracking-[0.3em] text-sm font-black transition-all duration-500 overflow-hidden"
          >
            <span className="relative z-10">{dict.hero.cta}</span>
            <div className="absolute inset-0 bg-gold/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </motion.a>
          
          {/* Subtle glow underneath the button */}
          <div className="absolute -inset-4 bg-gold/20 blur-2xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </motion.div>
      </motion.div>
    </section>
  )
}
