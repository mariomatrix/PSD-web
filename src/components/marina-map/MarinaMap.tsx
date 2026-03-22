'use client'

import React, { useState } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Anchor, Maximize2, Coffee, Building2, Car, Trash2, Ship } from 'lucide-react'
import type { MarinaZoneInfo } from '@/lib/marina-data'
import Image from 'next/image'

interface MarinaMapProps {
  zones: MarinaZoneInfo[]
  dict: any
  lang: string
}

const IconMap: Record<string, any> = {
  anchor: Anchor,
  coffee: Coffee,
  building: Building2,
  parking: Car,
  trash: Trash2,
  crane: Ship,
}

export default function MarinaMap({ zones, dict, lang }: MarinaMapProps) {
  const [activeZoneId, setActiveZoneId] = useState<string | null>(null)
  const activeZone = zones.find(z => z.id === activeZoneId)

  return (
    <div className="relative w-full h-[600px] lg:h-[800px] bg-[#f8f9fa] border border-marine/10 rounded-3xl overflow-hidden flex flex-col items-center">
      
      {/* Mobile/UI Hint */}
      <div className="absolute top-6 left-0 right-0 z-10 flex justify-center pointer-events-none">
        <div className="bg-marine/90 backdrop-blur-md text-white text-[11px] uppercase tracking-widest font-bold px-6 py-2.5 rounded-full shadow-2xl flex items-center gap-3 border border-white/10">
          <Maximize2 className="w-3.5 h-3.5 text-gold" />
          {dict.marinaPlan?.landscapeHint || "Pinch to zoom / Drag to move / Tap markers"}
        </div>
      </div>

      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={4}
        centerOnInit
      >
        <TransformComponent wrapperClass="!w-full !h-full cursor-grab active:cursor-grabbing" contentClass="w-full h-full min-w-full min-h-full flex items-center justify-center">
          <div className="relative inline-block shadow-2xl rounded-lg overflow-hidden border border-marine/5">
            {/* The actual Map Image */}
            <img 
              src="/mapa_lucica_spinut.png" 
              alt="Marina Plan" 
              className="max-w-none w-auto h-[500px] lg:h-[700px] block"
              onDragStart={(e) => e.preventDefault()}
            />

            {/* Interactive Markers Layer */}
            {zones.map((zone) => {
              const Icon = IconMap[zone.icon || 'anchor'] || Anchor
              const isActive = activeZoneId === zone.id

              return (
                <button
                  key={zone.id}
                  onClick={() => setActiveZoneId(zone.id)}
                  style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-300 group
                    ${isActive ? 'scale-125 z-20' : 'hover:scale-110'}`}
                >
                  <div className={`flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full shadow-lg border-2 transition-all
                    ${isActive 
                      ? 'bg-gold border-white text-white rotate-0' 
                      : 'bg-white border-marine/20 text-marine group-hover:border-gold group-hover:bg-paper-warm'}`}
                  >
                    <Icon className={`w-5 h-5 lg:w-6 lg:h-6 ${isActive ? 'animate-pulse' : ''}`} />
                  </div>
                  
                  {/* Label (Visible on hover or if active) */}
                  <div className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-marine text-white text-[10px] font-bold uppercase tracking-tighter rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none
                    ${isActive ? 'opacity-100 scale-110' : ''}`}
                  >
                    {zone.id.replace(/-/g, ' ')}
                  </div>
                </button>
              )
            })}
          </div>
        </TransformComponent>
      </TransformWrapper>

      {/* Modern Tooltip/Info Board */}
      <AnimatePresence>
        {activeZone && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-8 left-8 right-8 lg:left-12 lg:right-auto lg:w-96 bg-white/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-marine/10 p-8 rounded-3xl z-30 pointer-events-auto"
          >
            <button 
              onClick={() => setActiveZoneId(null)}
              className="absolute top-6 right-6 p-2 text-marine/40 hover:text-marine hover:bg-marine/5 rounded-full transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-marine/5 flex items-center justify-center text-gold">
                {React.createElement(IconMap[activeZone.icon || 'anchor'] || Anchor, { className: "w-6 h-6" })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-marine leading-tight">
                  {/* Localized lookup */}
                  {activeZone.nameKey.split('.').reduce((o, i) => o?.[i], dict) || activeZone.id}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-marine/30">
                  {activeZone.type}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm mb-8">
              {activeZone.category && (
                <div className="bg-marine/5 p-4 rounded-2xl">
                  <span className="text-[10px] uppercase font-bold text-marine/40 block mb-1">Kat</span>
                  <span className="font-bold text-marine">{activeZone.category}</span>
                </div>
              )}
              {activeZone.berths && (
                <div className="bg-marine/5 p-4 rounded-2xl">
                  <span className="text-[10px] uppercase font-bold text-marine/40 block mb-1">Vezovi</span>
                  <span className="font-bold text-marine">{activeZone.berths}</span>
                </div>
              )}
              {activeZone.maxDraft && (
                <div className="bg-marine/5 p-4 rounded-2xl">
                  <span className="text-[10px] uppercase font-bold text-marine/40 block mb-1">Max gaz</span>
                  <span className="font-bold text-marine">{activeZone.maxDraft}</span>
                </div>
              )}
              {activeZone.workingHours && (
                <div className="bg-marine/5 p-4 rounded-2xl col-span-2">
                  <span className="text-[10px] uppercase font-bold text-marine/40 block mb-1">Radno vrijeme</span>
                  <span className="font-bold text-marine">{activeZone.workingHours}</span>
                </div>
              )}
            </div>

            {activeZone.ctaLink && (
              <a
                href={activeZone.ctaLink}
                target={activeZone.external ? "_blank" : undefined}
                rel={activeZone.external ? "noopener noreferrer" : undefined}
                className="block w-full text-center bg-marine hover:bg-marine-light text-white px-8 py-4 rounded-2xl uppercase tracking-widest text-xs font-bold transition-all shadow-lg hover:shadow-xl active:scale-95"
              >
                {activeZone.ctaKey ? activeZone.ctaKey.split('.').reduce((o, i) => o?.[i], dict) : 'VIŠE INFORMACIJA'}
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
