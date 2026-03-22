import type { Locale } from '@/app/[lang]/dictionaries'

// Navigation links
export const navLinks = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/o-nama' },
  { key: 'services', href: '/usluge' },
  { key: 'marinaPlan', href: '/tlocrt' },
  { key: 'news', href: '/vijesti' },
  { key: 'contact', href: '/kontakt' },
] as const

// Contact info
export const contact = {
  address: 'Lučica 7, Split',
  phone: '021/386-813',
  fax: '021/323-002',
  mobileDirector: '091/510-25-13',
  mobileCaptain: '091/505-59-86',
  email: 'psd-spinut@st.t-com.hr',
  workingHours: 'Pon – Pet: 08:00 – 14:00',
  coordinates: { lat: 43.5125, lng: 16.4275 },
}

// Associated clubs
export const clubs = [
  { nameKey: 'fishingClub', url: 'https://www.ksr-spinut.hr' },
  { nameKey: 'sailingClub', url: 'http://www.jk-spinut.hr' },
  { nameKey: 'divingClub', url: 'https://www.facebook.com/RonilackiKlubSpinut/' },
] as const

// External links
export const externalLinks = {
  craneApp: 'https://dizalica.duckdns.org',
  ecomapPoster: 'https://www.psd-spinut.hr/wp-content/uploads/2019/03/ecomap-poster.pdf',
}

// Berth categories from Pravilnik
export const berthCategories = [
  { category: 'A', maxWidth: '2.5m', maxLength: '6m' },
  { category: 'B mješ.', maxWidth: '3.0m', maxLength: '7m' },
  { category: 'B', maxWidth: '3.0m', maxLength: '8m' },
  { category: 'C', maxWidth: '3.5m', maxLength: '12m' },
  { category: 'C05', maxWidth: '4.0m', maxLength: '12m' },
  { category: 'D', maxWidth: '4.6m', maxLength: '14m' },
  { category: 'E', maxWidth: '4.2m', maxLength: '12m', note: 'lukobran' },
  { category: 'F', maxWidth: '4.8m', maxLength: '15m', note: 'lukobran' },
] as const

// Helper to build localized hrefs
export function localizedHref(href: string, locale: Locale): string {
  return `/${locale}${href}`
}
