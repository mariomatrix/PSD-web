import Link from 'next/link'
import { Anchor, Phone, Mail, Clock, MapPin } from 'lucide-react'
import type { Locale } from '@/app/[lang]/dictionaries'
import { navLinks, contact, clubs, localizedHref } from '@/lib/constants'

interface FooterProps {
  lang: Locale
  dict: {
    nav: Record<string, string>
    footer: Record<string, string>
  }
}

export default function Footer({ lang, dict }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-marine text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Column 1: Logo + Description */}
          <div className="lg:col-span-1">
            <Link href={localizedHref('/', lang)} className="flex items-center gap-2 mb-6">
              <Anchor className="w-6 h-6 text-gold" />
              <span className="text-white font-serif text-xl font-bold">PŠD Špinut</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              {dict.footer.description}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
              {dict.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={localizedHref(link.href, lang)}
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {dict.nav[link.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Associated Clubs */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
              {dict.footer.clubs}
            </h4>
            <ul className="space-y-3">
              {clubs.map((club) => (
                <li key={club.nameKey}>
                  <a
                    href={club.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {dict.footer[club.nameKey]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-6">
              {dict.footer.contactTitle}
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-white/60">{dict.footer.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a href={`tel:${contact.phone.replace(/\//g, '')}`} className="text-white/60 hover:text-gold transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a href={`mailto:${contact.email}`} className="text-white/60 hover:text-gold transition-colors break-all">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-white/60">{dict.footer.workingHours}</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>{dict.footer.copyright.replace('{year}', String(year))}</p>
          <Link href={localizedHref('/pravilnik', lang)} className="hover:text-gold transition-colors">
            {dict.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  )
}
