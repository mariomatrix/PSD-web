'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'

// Hardcoding text for MVP, optimally this would use the i18n dictionary
export default function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const consent = localStorage.getItem('psd-cookie-consent')
    if (!consent) {
      // Small delay so it animates in nicely after load
      const t = setTimeout(() => setShow(true), 1500)
      return () => clearTimeout(t)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('psd-cookie-consent', 'true')
    setShow(false)
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 lg:p-6 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-marine text-white p-6 lg:p-8 rounded-sm shadow-2xl pointer-events-auto border-t-4 border-gold relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="font-serif text-xl mb-2 text-gold-light">Vaša privatnost</h3>
              <p className="text-sm text-white/80 font-light leading-relaxed">
                Naša web stranica koristi kolačiće (cookies) kako bi Vam omogućila najbolje korisničko iskustvo. 
                Nastavkom pregleda stranice slažete se s korištenjem kolačića.
              </p>
            </div>
            
            <button
              onClick={acceptCookies}
              className="w-full md:w-auto shrink-0 bg-gold hover:bg-gold-light text-white px-8 py-3 rounded-sm uppercase tracking-[0.2em] text-xs font-semibold transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <Check className="w-4 h-4" /> 
              Slažem se
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
