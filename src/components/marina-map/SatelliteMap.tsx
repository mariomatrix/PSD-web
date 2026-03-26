'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Anchor, Coffee, Building2, Car, Trash2, Ship } from 'lucide-react'
import type { MarinaZoneInfo } from '@/lib/marina-data'
import 'leaflet/dist/leaflet.css'

export interface SatelliteMapProps {
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

export default function SatelliteMap({ zones, dict, lang }: SatelliteMapProps) {
  const [activeZoneId, setActiveZoneId] = useState<string | null>(null)
  const [L, setL] = useState<any>(null)
  const [ReactLeaflet, setReactLeaflet] = useState<any>(null)
  
  const activeZone = zones.find(z => z.id === activeZoneId) as any

  useEffect(() => {
    // Dynamic import to avoid SSR issues with window/Leaflet
    Promise.all([
      import('leaflet'),
      import('react-leaflet')
    ]).then(([leaflet, reactLeaflet]) => {
      setL(leaflet.default || leaflet)
      setReactLeaflet(reactLeaflet)
    })
  }, [])

  if (!L || !ReactLeaflet) {
    return (
      <div className="w-full h-[600px] lg:h-[800px] bg-marine/5 animate-pulse rounded-3xl flex items-center justify-center text-marine/20">
        <span className="text-sm font-medium tracking-widest uppercase">Učitavanje mape...</span>
      </div>
    )
  }

  const { MapContainer, TileLayer, Marker } = ReactLeaflet

  // Satellite view tiles (ESRI)
  const satelliteUrl = "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
  const attribution = "&copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EBP, and the GIS User Community"

  const createIcon = (iconName: string, isActive: boolean) => {
    return L.divIcon({
      className: 'custom-div-icon',
      html: `
        <div class="flex items-center justify-center w-12 h-12 rounded-full shadow-2xl border-4 transition-all
          ${isActive ? 'bg-gold border-white text-white scale-125' : 'bg-white border-marine text-marine'}">
          <span class="marker-icon-${iconName} scale-125"></span>
        </div>
      `,
      iconSize: [48, 48],
      iconAnchor: [24, 24],
    })
  }

  return (
    <div className="relative w-full h-[600px] lg:h-[800px] bg-marine/5 border border-marine/10 rounded-3xl overflow-hidden shadow-inner vibe-depth-container">
      <MapContainer 
        center={[43.5153347, 16.4178979]} 
        zoom={18} 
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
        className="z-0"
      >
        <TileLayer
          url={satelliteUrl}
          attribution={attribution}
        />
        
        {zones.map((zone) => (
          <Marker
            key={zone.id}
            position={[zone.lat, zone.lng]}
            icon={createIcon(zone.icon || 'anchor', activeZoneId === zone.id)}
            eventHandlers={{
              click: () => setActiveZoneId(zone.id),
            }}
          />
        ))}
      </MapContainer>
      {/* Info Modal/Panel */}
      <AnimatePresence>
        {activeZone && (
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: 20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            exit={{ opacity: 0, x: -40, rotateY: 20 }}
            transition={{ duration: 0.6, ease: [0.2, 0, 0.2, 1] }}
            className="absolute bottom-8 left-8 right-8 lg:left-12 lg:right-auto lg:bottom-12 lg:w-[420px] vibe-floating p-10 rounded-[2.5rem] z-[1000] pointer-events-auto border-2 border-white/40 bg-marine/95 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            style={{ willChange: 'transform, opacity' }}
          >
            <button 
              onClick={() => setActiveZoneId(null)}
              className="absolute top-8 right-8 p-3 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all active:scale-90"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-6 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-gold shadow-inner border border-white/10">
                {React.createElement(IconMap[activeZone.icon || 'anchor'] || Anchor, { className: "w-7 h-7" })}
              </div>
              <div>
                <h3 className="text-3xl font-black text-white leading-tight tracking-tighter">
                  {activeZone.nameKey.split('.').reduce((o: any, i: string) => o?.[i], dict) || activeZone.id}
                </h3>
                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/40">
                  {activeZone.type}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm mb-10">
              {activeZone.category && (
                <div className="bg-white/5 p-5 rounded-3xl border border-white/5">
                  <span className="text-[10px] uppercase font-black text-white/30 block mb-1 tracking-widest">Kat</span>
                  <span className="font-bold text-white text-base">{activeZone.category}</span>
                </div>
              )}
              {activeZone.berths && (
                <div className="bg-white/5 p-5 rounded-3xl border border-white/5">
                  <span className="text-[10px] uppercase font-black text-white/30 block mb-1 tracking-widest">Vezovi</span>
                  <span className="font-bold text-white text-base">{activeZone.berths}</span>
                </div>
              )}
              {activeZone.maxDraft && (
                <div className="bg-white/5 p-5 rounded-3xl border border-white/5">
                  <span className="text-[10px] uppercase font-black text-white/30 block mb-1 tracking-widest">Max gaz</span>
                  <span className="font-bold text-white text-base">{activeZone.maxDraft}</span>
                </div>
              )}
              {activeZone.workingHours && (
                <div className="bg-white/5 p-5 rounded-3xl col-span-2 border border-white/5">
                  <span className="text-[10px] uppercase font-black text-white/30 block mb-1 tracking-widest">Radno vrijeme</span>
                  <span className="font-bold text-white text-base">{activeZone.workingHours}</span>
                </div>
              )}
            </div>

            {activeZone.ctaLink && (
              <a
                href={activeZone.ctaLink}
                target={activeZone.external ? "_blank" : undefined}
                rel={activeZone.external ? "noopener noreferrer" : undefined}
                className="block w-full text-center bg-gold hover:bg-gold-light text-white px-10 py-5 rounded-2xl uppercase tracking-[0.3em] text-xs font-black transition-all shadow-xl hover:shadow-2xl active:scale-95"
              >
                {activeZone.ctaKey ? activeZone.ctaKey.split('.').reduce((o: any, i: string) => o?.[i], dict) : 'VIŠE INFORMACIJA'}
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .leaflet-container { background: #1E4A7A !important; }
        .marker-icon-anchor::after { content: '⚓'; }
        .marker-icon-coffee::after { content: '☕'; }
        .marker-icon-building::after { content: '🏢'; }
        .marker-icon-parking::after { content: '🅿️'; }
        .marker-icon-trash::after { content: '♻️'; }
        .marker-icon-crane::after { content: '🏗️'; }
        .custom-div-icon { background: transparent !important; border: none !important; }
      `}</style>
    </div>
  )
}
