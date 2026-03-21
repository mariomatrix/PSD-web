'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from '@/components/ThemeToggle'
import type { Locale } from '@/app/[lang]/dictionaries'
import { navLinks, externalLinks, localizedHref } from '@/lib/constants'

interface NavbarProps {
  lang: Locale
  dict: {
    nav: Record<string, string>
  }
}

export default function Navbar({ lang, dict }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const { scrollY } = useScroll()
  const [lastScrollY, setLastScrollY] = useState(0)

  // Hide on scroll down, show on scroll up logic
  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > lastScrollY && latest > 150) {
      if (!isOpen) setIsVisible(false)
    } else {
      setIsVisible(true)
    }
    setLastScrollY(latest)
  })

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6 pointer-events-none"
        >
          <nav className="max-w-6xl mx-auto pointer-events-auto">
            <div className="bg-marine/80 dark:bg-marine/60 backdrop-blur-xl border border-white/10 dark:border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] rounded-[2rem] lg:rounded-full px-4 lg:px-8 py-2 lg:py-3 flex items-center justify-between">
              
              {/* Branding Section */}
              <div className="flex items-center gap-4 lg:gap-8">
                <Link
                  href={localizedHref('/', lang)}
                  className="flex flex-col hover:opacity-80 transition-opacity shrink-0 text-left"
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-white font-black tracking-tighter text-2xl lg:text-3xl">PŠD</span>
                    <span className="text-white/40 font-light text-xs uppercase tracking-[0.3em] hidden sm:block">Špinut</span>
                  </div>
                  <span className="text-gold-light text-[9px] uppercase tracking-[0.1em] font-bold block -mt-1 opacity-80">
                    Pomorsko športsko društvo Špinut
                  </span>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-6 ml-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.key}
                      href={localizedHref(link.href, lang)}
                      className="text-white/70 hover:text-white text-[13px] font-bold tracking-wide transition-all duration-300 relative group py-2"
                    >
                      {dict.nav[link.key]}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full rounded-full" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Utility & CTA Section */}
              <div className="flex items-center gap-2 lg:gap-6">
                <div className="hidden sm:flex items-center gap-2">
                  <ThemeToggle />
                  <LanguageSwitcher currentLocale={lang} />
                </div>

                {/* Main CTA */}
                <a
                  href={externalLinks.craneApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold hover:bg-gold-light text-white px-5 py-2.5 rounded-full uppercase tracking-wider text-[11px] font-bold transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
                >
                  {dict.nav.bookCrane}
                </a>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden text-white p-2 flex items-center justify-center transition-transform active:scale-95"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Overlay Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute top-24 left-4 right-4 bg-marine/95 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl p-8 lg:hidden pointer-events-auto"
              >
                <div className="flex flex-col gap-6 items-center">
                  {navLinks.map((link) => (
                    <Link
                      key={link.key}
                      href={localizedHref(link.href, lang)}
                      onClick={() => setIsOpen(false)}
                      className="text-white/90 text-xl font-bold tracking-wide hover:text-gold transition-colors"
                    >
                      {dict.nav[link.key]}
                    </Link>
                  ))}
                  
                  <div className="w-full h-px bg-white/10 my-4" />
                  
                  <div className="flex items-center gap-6 mb-4">
                    <ThemeToggle />
                    <LanguageSwitcher currentLocale={lang} />
                  </div>

                  <a
                    href={externalLinks.craneApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gold hover:bg-gold-light text-white px-8 py-4 rounded-full uppercase tracking-widest text-sm font-bold transition-all text-center shadow-lg"
                  >
                    {dict.nav.bookCrane}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  )
}
