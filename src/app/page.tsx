'use client';

import React from 'react';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import { 
  CloudSun, 
  Anchor, 
  Clock, 
  Map, 
  Ship, 
  Sailboat
} from 'lucide-react';

export default function Home() {
  // Za paralax u Hero sekciji
  // Pratimo scroll korisnika prema dolje i pretvaramo ga u lagan pomak (paralax)
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 800], ['0%', '20%']); // Slika putuje prema dolje sporije od sekcije

  // Animacijske varijante (suptilan i elegantan motion)
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 } 
    }
  };

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] } 
    }
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] } 
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1E293B] font-sans selection:bg-[#C5A880] selection:text-white overflow-x-hidden">
      
      {/* 1. HERO SEKCIJA */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Paralax Pozadinska slika marina */}
        <motion.div 
          className="absolute inset-x-0 -top-10 -bottom-10 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1575806307185-3e284a1e948c?q=80&w=2500&auto=format&fit=crop")',
            y: heroBgY 
          }}
        />
        
        {/* Tamni overlay za bolju čitljivost teksta */}
        <div className="absolute inset-0 z-10 bg-black/40" />

        {/* Sadržaj Hero sekcije */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 w-full max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight drop-shadow-lg"
          >
            PŠD Špinut
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white/90 text-xl md:text-3xl font-light mb-12 tracking-wide drop-shadow-md"
          >
            Tvoja luka u Splitu.
          </motion.h2>
          
          <motion.a 
            href="https://dizalica.duckdns.org"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, backgroundColor: "#D4B991" }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.1, 0.25, 1], scale: { duration: 0.4, ease: "easeOut" } }}
            className="bg-[#C5A880] text-white px-10 py-5 rounded-sm uppercase tracking-[0.2em] text-sm font-semibold transition-colors duration-300 shadow-md hover:shadow-xl inline-flex items-center"
          >
            Rezerviraj dizalicu
          </motion.a>
        </div>
      </section>

      {/* 2. SERVISNE INFORMACIJE */}
      {/* Relativni z-index da skrije preklapanje paralaxa */}
      <section className="bg-[#0A192F] text-white py-5 relative z-30">
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

      {/* 3. USLUGE (Scroll-triggered fade-in & stagger) */}
      <section className="py-24 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto relative z-30 bg-[#FAFAFA]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp}
          className="text-center mb-16 lg:mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-[#0A192F] mb-6">Naše usluge</h2>
          <div className="w-16 h-1 bg-[#C5A880] mx-auto mt-6" />
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* Kartica 1 */}
          <motion.div 
            variants={fadeInUp} 
            whileHover={{ y: -10, boxShadow: '0px 20px 40px rgba(0,0,0,0.06)' }}
            className="bg-white p-10 lg:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] rounded-sm flex flex-col items-center text-center group transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-[#FAFAFA] flex items-center justify-center mb-8 text-[#0A192F] transition-colors duration-500">
              <Anchor strokeWidth={1.5} className="w-8 h-8 group-hover:text-[#C5A880] transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-serif text-[#0A192F] mb-4">Vezovi i Tranzit</h3>
            <p className="text-[#1E293B]/70 font-light leading-relaxed">
              Siguran i zaštićen vez za vaše plovilo u srcu Dalmacije, uz kompletnu modernu infrastrukturu.
            </p>
          </motion.div>

          {/* Kartica 2 */}
          <motion.div 
            variants={fadeInUp} 
            whileHover={{ y: -10, boxShadow: '0px 20px 40px rgba(0,0,0,0.06)' }}
            className="bg-white p-10 lg:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] rounded-sm flex flex-col items-center text-center group transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-[#FAFAFA] flex items-center justify-center mb-8 text-[#0A192F] transition-colors duration-500">
              <Ship strokeWidth={1.5} className="w-8 h-8 group-hover:text-[#C5A880] transition-colors duration-500" />
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
          <motion.div 
            variants={fadeInUp} 
            whileHover={{ y: -10, boxShadow: '0px 20px 40px rgba(0,0,0,0.06)' }}
            className="bg-white p-10 lg:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] rounded-sm flex flex-col items-center text-center group transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-[#FAFAFA] flex items-center justify-center mb-8 text-[#0A192F] transition-colors duration-500">
              <Sailboat strokeWidth={1.5} className="w-8 h-8 group-hover:text-[#C5A880] transition-colors duration-500" />
            </div>
            <h3 className="text-2xl font-serif text-[#0A192F] mb-4">Sportske sekcije</h3>
            <p className="text-[#1E293B]/70 font-light leading-relaxed">
              Bogat program sportskog jedrenja i ribolova koji aktivno potiče razvoj mladih i entuzijasta.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* 4. TLOCRT MARINE TEASER (Slide-in) */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={slideInLeft}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl md:text-5xl font-serif text-[#0A192F] mb-6 leading-tight">
                Istražite našu lučicu.
              </h2>
              <p className="text-lg text-[#1E293B]/70 font-light mb-10 max-w-md leading-relaxed">
                Interaktivni plan vezova i infrastrukture. Pronađite točnu lokaciju vašeg veza, dizalice, gatova i ostalih bitnih sadržaja.
              </p>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="border border-[#C5A880] text-[#C5A880] hover:bg-[#C5A880] hover:text-white px-8 py-4 rounded-sm uppercase tracking-[0.2em] text-sm font-semibold transition-colors duration-300 inline-flex items-center gap-3"
              >
                <Map className="w-4 h-4" />
                Pogledaj plan marine
              </motion.button>
            </motion.div>

            {/* Grafički placeholder za mapu */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={slideInRight}
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
