import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '../dictionaries'
import type { Locale } from '../dictionaries'
import { contact } from '@/lib/constants'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { MapPin, Phone, Mail, Clock, Smartphone } from 'lucide-react'

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-serif text-marine mb-6">{dict.nav.contact}</h1>
        <div className="w-16 h-1 bg-gold mx-auto mt-10" />
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Contact Info */}
        <AnimatedSection>
          <div className="bg-white p-10 lg:p-12 shadow-sm border border-paper-warm rounded-sm space-y-8">
            <h2 className="text-2xl font-serif text-marine mb-8">Informacije</h2>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div>
                <p className="font-medium text-marine">Adresa</p>
                <p className="text-text-muted font-light">{contact.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div>
                <p className="font-medium text-marine">Telefoni</p>
                <p className="text-text-muted font-light">Centrala: <a href={`tel:${contact.phone.replace(/\//g, '')}`} className="hover:text-gold">{contact.phone}</a></p>
                <p className="text-text-muted font-light mt-1">Tajništvo / Fax: <a href={`tel:${contact.fax.replace(/\//g, '')}`} className="hover:text-gold">{contact.fax}</a></p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Smartphone className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div>
                <p className="font-medium text-marine">Dežurni mobiteli</p>
                <p className="text-text-muted font-light">Direktor: <a href={`tel:${contact.mobileDirector.replace(/\//g, '')}`} className="hover:text-gold">{contact.mobileDirector}</a></p>
                <p className="text-text-muted font-light mt-1">Voditelj lučice: <a href={`tel:${contact.mobileCaptain.replace(/\//g, '')}`} className="hover:text-gold">{contact.mobileCaptain}</a></p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div>
                <p className="font-medium text-marine">Email</p>
                <a href={`mailto:${contact.email}`} className="text-text-muted font-light hover:text-gold break-all">
                  {contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div>
                <p className="font-medium text-marine">Radno vrijeme</p>
                <p className="text-text-muted font-light">{contact.workingHours}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Map / Image Placeholder */}
        <AnimatedSection delay={0.2} className="h-full min-h-[400px]">
          <div className="w-full h-full bg-paper border border-gray-100 rounded-sm flex flex-col items-center justify-center p-8 text-center">
             {/* Replace with actual Google Maps embed or localized map image */}
             <MapPin className="w-12 h-12 text-gold/50 mb-4" />
             <p className="text-text-muted font-light max-w-sm">
               Interaktivna karta lokacije lučice Špinut (Google Maps embed ide ovdje).
             </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
