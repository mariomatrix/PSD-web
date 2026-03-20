export type ZoneType = 'pier' | 'poi' | 'facility'

export interface MarinaZoneInfo {
  id: string
  type: ZoneType
  nameKey: string
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
    id: 'mol-a',
    type: 'pier',
    nameKey: 'marina.molA.name',
    category: 'A',
    maxLength: '6m',
    berths: 50,
    maxDraft: '2.0m',
  },
  {
    id: 'mol-b',
    type: 'pier',
    nameKey: 'marina.molB.name',
    category: 'B, C',
    maxLength: '12m',
    berths: 80,
    maxDraft: '3.0m',
  },
  {
    id: 'crane',
    type: 'poi',
    nameKey: 'marina.crane.name',
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
    icon: 'building',
    workingHours: '08:00 - 14:00',
  },
]
