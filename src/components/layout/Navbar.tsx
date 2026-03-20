'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
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
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 80)
  })

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          isScrolled
            ? 'bg-marine/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href={localizedHref('/', lang)}
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image 
              src="/logo.png" 
              alt="PŠD Špinut Logo" 
              width={80} 
              height={80} 
              className="w-auto h-12 lg:h-14 drop-shadow-md" 
              priority 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={localizedHref(link.href, lang)}
                className="text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-300"
              >
                {dict.nav[link.key]}
              </Link>
            ))}

            <ThemeToggle />
            <LanguageSwitcher currentLocale={lang} />

            {/* CTA Button */}
            <a
              href={externalLinks.craneApp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-white px-5 py-2.5 rounded-sm uppercase tracking-[0.15em] text-xs font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {dict.nav.bookCrane}
            </a>
          </div>

          {/* Mobile: Lang + Hamburger */}
          <div className="flex lg:hidden items-center gap-4">
            <ThemeToggle />
            <LanguageSwitcher currentLocale={lang} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-marine flex flex-col items-center justify-center gap-8 lg:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={localizedHref(link.href, lang)}
              onClick={() => setIsOpen(false)}
              className="text-white text-2xl font-light tracking-wide hover:text-gold transition-colors duration-300"
            >
              {dict.nav[link.key]}
            </Link>
          ))}

          <a
            href={externalLinks.craneApp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-gold hover:bg-gold-light text-white px-8 py-4 rounded-sm uppercase tracking-[0.2em] text-sm font-semibold transition-all duration-300"
          >
            {dict.nav.bookCrane}
          </a>
        </motion.div>
      )}
    </>
  )
}
