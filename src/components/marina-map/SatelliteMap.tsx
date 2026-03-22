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
        <div class="flex items-center justify-center w-10 h-10 rounded-full shadow-lg border-2 transition-all
          ${isActive ? 'bg-gold border-white text-white' : 'bg-white border-marine/20 text-marine'}">
          <span class="marker-icon-${iconName}"></span>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    })
  }

  return (
    <div className="relative w-full h-[600px] lg:h-[800px] bg-marine/5 border border-marine/10 rounded-3xl overflow-hidden shadow-inner">
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
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="absolute bottom-8 left-8 right-8 lg:left-12 lg:right-auto lg:w-96 bg-white/95 backdrop-blur-xl shadow-2xl border border-marine/10 p-8 rounded-3xl z-[1000] pointer-events-auto"
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
                  {activeZone.nameKey.split('.').reduce((o: any, i: string) => o?.[i], dict) || activeZone.id}
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
