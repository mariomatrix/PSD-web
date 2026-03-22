export type ZoneType = 'pier' | 'poi' | 'facility'

export interface MarinaZoneInfo {
  id: string
  type: ZoneType
  nameKey: string
  x: number // Percentage 0-100
  y: number // Percentage 0-100
  lat: number
  lng: number
  // Pier specific
  category?: string
  maxLength?: string
  berths?: number
  maxDraft?: string
  linkTo?: string
  // POI / Facility specific
  icon?: string
  capacity?: string
  workingHours?: string
  ctaKey?: string
  ctaLink?: string
  external?: boolean
}

export const marinaZones: MarinaZoneInfo[] = [
  {
    id: 'crane',
    type: 'poi',
    nameKey: 'marina.crane.name',
    x: 0,
    y: 0,
    lat: 43.5162689,
    lng: 16.4197004,
    icon: 'crane',
    capacity: '15t',
    workingHours: '08:00 - 14:00',
    ctaKey: 'marina.crane.cta',
    ctaLink: 'https://dizalica.duckdns.org',
    external: true,
  },
  {
    id: 'office',
    type: 'poi',
    nameKey: 'marina.office.name',
    x: 0,
    y: 0,
    lat: 43.5146186,
    lng: 16.4185524,
    icon: 'building',
    workingHours: '08:00 - 14:00',
  },
  {
    id: 'pier-4',
    type: 'pier',
    nameKey: 'marina.pier4.name',
    x: 0,
    y: 0,
    lat: 43.5148194,
    lng: 16.4163744,
    icon: 'anchor',
  },
]
