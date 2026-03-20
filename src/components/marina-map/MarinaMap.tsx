'use client'

import React, { useState, useRef, useEffect } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Anchor, Maximize2 } from 'lucide-react'
import type { MarinaZoneInfo } from '@/lib/marina-data'

interface MarinaMapProps {
  zones: MarinaZoneInfo[]
  dict: any
  lang: string
}

export default function MarinaMap({ zones, dict, lang }: MarinaMapProps) {
  const [activeZoneId, setActiveZoneId] = useState<string | null>(null)
  
  // Close tooltip on esc or outside click is handled implicitly via simple UI for MVP
  const activeZone = zones.find(z => z.id === activeZoneId)

  return (
    <div className="relative w-full h-[600px] lg:h-[800px] bg-paper-warm border border-gray-200 rounded-sm overflow-hidden flex flex-col justify-end">
      
      {/* Mobile Hint */}
      <div className="absolute top-4 left-0 right-0 z-10 flex justify-center pointer-events-none">
        <div className="bg-marine/80 backdrop-blur-sm text-white text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
          <Maximize2 className="w-3 h-3" />
          {dict.marinaPlan?.landscapeHint || "Pinch to zoom / Tap to details"}
        </div>
      </div>

      <TransformWrapper
        initialScale={1}
        minScale={0.8}
        maxScale={4}
        centerOnInit
        wheel={{ step: 0.1 }}
      >
        <TransformComponent wrapperClass="w-full h-full cursor-move" contentClass="w-full h-full">
          {/* SVG Placeholder Base */}
          <div className="w-full h-full min-w-[800px] min-h-[600px] relative flex items-center justify-center p-12">
            <svg viewBox="0 0 1000 800" className="w-full h-full drop-shadow-sm" style={{ fill: 'none' }}>
              {/* Fake coastline context */}
              <path d="M 0 0 L 1000 0 L 1000 200 L 0 400 Z" fill="#E2E8F0" />
              <path d="M 0 400 L 1000 200 L 1000 800 L 0 800 Z" fill="#E0F2FE" />
              
              {/* Pier A (mol-a) */}
              <g 
                onClick={() => setActiveZoneId('mol-a')}
                className={`cursor-pointer transition-colors duration-300 ${activeZoneId === 'mol-a' ? 'fill-gold/40 stroke-gold' : 'fill-marine/20 stroke-marine/40 hover:fill-gold/20'}`}
              >
                <rect x="200" y="300" width="30" height="250" strokeWidth="2" />
                <text x="215" y="425" fill="#0A192F" fontSize="16" fontWeight="bold" textAnchor="middle" transform="rotate(-90 215 425)">A</text>
              </g>

              {/* Pier B (mol-b) */}
              <g 
                onClick={() => setActiveZoneId('mol-b')}
                className={`cursor-pointer transition-colors duration-300 ${activeZoneId === 'mol-b' ? 'fill-gold/40 stroke-gold' : 'fill-marine/20 stroke-marine/40 hover:fill-gold/20'}`}
              >
                <rect x="400" y="280" width="30" height="300" strokeWidth="2" />
                <text x="415" y="430" fill="#0A192F" fontSize="16" fontWeight="bold" textAnchor="middle" transform="rotate(-90 415 430)">B</text>
              </g>

              {/* Crane (crane) */}
              <g 
                onClick={() => setActiveZoneId('crane')}
                className={`cursor-pointer transition-colors duration-300 ${activeZoneId === 'crane' ? 'fill-gold stroke-marine' : 'fill-warning stroke-marine hover:fill-gold'}`}
              >
                <circle cx="700" cy="220" r="25" strokeWidth="3" />
                <text x="700" y="226" fill="#0A192F" fontSize="18" fontWeight="bold" textAnchor="middle">🏗️</text>
              </g>

              {/* Office (office) */}
              <g 
                onClick={() => setActiveZoneId('office')}
                className={`cursor-pointer transition-colors duration-300 ${activeZoneId === 'office' ? 'fill-marine stroke-white' : 'fill-marine/80 stroke-white hover:fill-marine'}`}
              >
                <rect x="100" y="100" width="80" height="60" strokeWidth="2" />
                <text x="140" y="136" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">🏢</text>
              </g>
            </svg>
          </div>
        </TransformComponent>
      </TransformWrapper>

      {/* Tooltip Layer - absolute bottom-left over the map */}
      <AnimatePresence>
        {activeZone && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-6 left-6 right-6 lg:left-8 lg:right-auto lg:w-80 bg-white shadow-xl border border-gray-100 p-6 rounded-sm z-20 pointer-events-auto"
          >
            <button 
              onClick={() => setActiveZoneId(null)}
              className="absolute top-4 right-4 text-text-muted hover:text-marine transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-serif text-marine mb-4 border-b border-gray-100 pb-3 flex items-center gap-2">
              <Anchor className="w-5 h-5 text-gold" />
              {/* To perfectly resolve nest keys from JSON, ideally we'd pass a flat translation or use a resolver. 
                  For MVP, we use naive lookup or hardcode if not found. */}
              {activeZone.nameKey.split('.').reduce((o, i) => o?.[i], dict) || activeZone.nameKey}
            </h3>

            <div className="space-y-2 text-sm">
              {activeZone.category && (
                <div className="flex justify-between">
                  <span className="text-text-muted">{dict.marina?.category || 'Kategorija'}:</span>
                  <span className="font-medium text-marine">{activeZone.category}</span>
                </div>
              )}
              {activeZone.berths && (
                <div className="flex justify-between">
                  <span className="text-text-muted">{dict.marina?.berths || 'Vezovi'}:</span>
                  <span className="font-medium text-marine">{activeZone.berths}</span>
                </div>
              )}
              {activeZone.maxDraft && (
                <div className="flex justify-between">
                  <span className="text-text-muted">{dict.marina?.maxDraft || 'Max gaz'}:</span>
                  <span className="font-medium text-marine">{activeZone.maxDraft}</span>
                </div>
              )}
              {activeZone.capacity && (
                <div className="flex justify-between">
                  <span className="text-text-muted">{dict.marina?.capacity || 'Kapacitet'}:</span>
                  <span className="font-medium text-marine">{activeZone.capacity}</span>
                </div>
              )}
              {activeZone.workingHours && (
                <div className="flex justify-between">
                  <span className="text-text-muted">{dict.marina?.workingHours || 'Radno vrijeme'}:</span>
                  <span className="font-medium text-marine">{activeZone.workingHours}</span>
                </div>
              )}
            </div>

            {activeZone.ctaLink && (
              <a
                href={activeZone.ctaLink}
                target={activeZone.external ? "_blank" : undefined}
                rel={activeZone.external ? "noopener noreferrer" : undefined}
                className="mt-6 block w-full text-center bg-gold hover:bg-gold-light text-white px-4 py-3 rounded-sm uppercase tracking-widest text-xs font-semibold transition-colors shadow-sm"
              >
                {/* Same naive translation lookup logic */}
                {activeZone.ctaKey ? activeZone.ctaKey.split('.').reduce((o, i) => o?.[i], dict) : 'Klikni'}
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
