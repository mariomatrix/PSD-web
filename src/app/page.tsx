'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  CloudSun, 
  Anchor, 
  Clock, 
  Map, 
  Ship, 
  Sailboat
} from 'lucide-react';

export default function Home() {
  // Fade-in animacijske konfiguracije za framer-motion
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1E293B] font-sans selection:bg-[#C5A880] selection:text-white">
      
      {/* 1. HERO SEKCIJA */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Pozadinska slika marina (Placeholder Unsplash slika dok ne ubacite pravu) */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1575806307185-3e284a1e948c?q=80&w=2500&auto=format&fit=crop")' }}
        />
        
        {/* Tamni overlay za bolju čitljivost teksta */}
        <div className="absolute inset-0 z-10 bg-black/40" />

        {/* Sadržaj Hero sekcije */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-white font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight drop-shadow-lg"
          >
            PŠD Špinut
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="text-white/90 text-xl md:text-3xl font-light mb-12 tracking-wide drop-shadow-md"
          >
            Tvoja luka u Splitu.
          </motion.h2>
          
          <motion.a 
            href="https://dizalica.duckdns.org"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
            className="bg-[#C5A880] hover:bg-[#b0946b] text-white px-10 py-5 rounded-sm uppercase tracking-[0.2em] text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center"
          >
            Rezerviraj dizalicu
          </motion.a>
        </div>
      </section>

      {/* 2. SERVISNE INFORMACIJE */}
      <section className="bg-[#0A192F] text-white py-5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-light tracking-wide">
            <div className="flex items-center gap-3">
              <CloudSun className="w-5 h-5 text-[#C5A880]" />
              <span>Split: 22°C (Prognoza)</span>
            </div>
            
            <div className="hidden md:block w-px h-6 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <Anchor className="w-5 h-5 text-[#C5A880]" />
              <span>Status marine: Otvoreno</span>
            </div>
            
            <div className="hidden md:block w-px h-6 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#C5A880]" />
              <span>Tajništvo: 08:00 - 14:00</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. USLUGE */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#0A192F] mb-6">Naše usluge</h2>
          <div className="w-16 h-1 bg-[#C5A880] mx-auto mt-6" />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* Kartica 1 */}
          <motion.div variants={fadeIn} className="bg-white p-10 lg:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] rounded-sm flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500">
            <div className="w-16 h-16 rounded-full bg-[#FAFAFA] flex items-center justify-center mb-8 text-[#0A192F] group-hover:text-[#C5A880] transition-colors duration-300">
              <Anchor strokeWidth={1.5} className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-[#0A192F] mb-4">Vezovi i Tranzit</h3>
            <p className="text-[#1E293B]/70 font-light leading-relaxed">
              Siguran i zaštićen vez za vaše plovilo u srcu Dalmacije, uz kompletnu modernu infrastrukturu.
            </p>
          </motion.div>

          {/* Kartica 2 */}
          <motion.div variants={fadeIn} className="bg-white p-10 lg:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] rounded-sm flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500">
            <div className="w-16 h-16 rounded-full bg-[#FAFAFA] flex items-center justify-center mb-8 text-[#0A192F] group-hover:text-[#C5A880] transition-colors duration-300">
              <Ship strokeWidth={1.5} className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-[#0A192F] mb-4">Dizalica i Suhi vez</h3>
            <p className="text-[#1E293B]/70 font-light leading-relaxed mb-8 flex-grow">
              Profesionalne usluge dizanja i spuštanja plovila, te siguran prostor za suhi vez.
            </p>
            <a href="https://dizalica.duckdns.org" target="_blank" rel="noopener noreferrer" className="mt-auto text-xs font-semibold tracking-widest text-[#C5A880] hover:text-[#0A192F] uppercase transition-colors duration-300">
              Rezerviraj termin &rarr;
            </a>
          </motion.div>

          {/* Kartica 3 */}
          <motion.div variants={fadeIn} className="bg-white p-10 lg:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] rounded-sm flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500">
            <div className="w-16 h-16 rounded-full bg-[#FAFAFA] flex items-center justify-center mb-8 text-[#0A192F] group-hover:text-[#C5A880] transition-colors duration-300">
              <Sailboat strokeWidth={1.5} className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-serif text-[#0A192F] mb-4">Sportske sekcije</h3>
            <p className="text-[#1E293B]/70 font-light leading-relaxed">
              Bogat program sportskog jedrenja i ribolova koji aktivno potiče razvoj mladih i entuzijasta.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. TLOCRT MARINE TEASER */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-[#0A192F] mb-6 leading-tight">
                Istražite našu lučicu.
              </h2>
              <p className="text-lg text-[#1E293B]/70 font-light mb-10 max-w-md leading-relaxed">
                Interaktivni plan vezova i infrastrukture. Pronađite točnu lokaciju vašeg veza, dizalice, gatova i ostalih bitnih sadržaja.
              </p>
              
              <button className="border border-[#C5A880] text-[#C5A880] hover:bg-[#C5A880] hover:text-white px-8 py-4 rounded-sm uppercase tracking-[0.2em] text-sm font-semibold transition-all duration-300 inline-flex items-center gap-3">
                <Map className="w-4 h-4" />
                Pogledaj plan marine
              </button>
            </motion.div>

            {/* Grafički placeholder za mapu */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-lg aspect-square bg-[#FAFAFA] border border-gray-100 rounded-lg p-8 flex items-center justify-center shadow-inner relative group cursor-pointer transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-[#C5A880]/30">
                <div className="absolute inset-0 bg-[#0A192F]/[0.01] transition-colors duration-500 rounded-lg" />
                
                {/* Apstraktna ilustracija tlocrta u SVG formatu, dok se ne stavi stvarna slika/tlocrt */}
                <svg className="w-full h-full text-[#0A192F]/10 stroke-current group-hover:text-[#C5A880]/40 transition-colors duration-700" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 50 C 20 20, 80 20, 90 50 C 90 80, 50 90, 10 70 Z" strokeWidth="2" strokeDasharray="4 4" />
                  <rect x="25" y="40" width="10" height="40" strokeWidth="2" />
                  <rect x="45" y="30" width="10" height="50" strokeWidth="2" />
                  <rect x="65" y="45" width="10" height="35" strokeWidth="2" />
                  <circle cx="50" cy="50" r="3" fill="currentColor" />
                </svg>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

    </div>
  );
}
