export type ZoneType = 'pier' | 'poi' | 'facility'

export interface MarinaZoneInfo {
  id: string
  type: ZoneType
  nameKey: string
  x: number // Percentage 0-100
  y: number // Percentage 0-100
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
    id: 'office',
    type: 'poi',
    nameKey: 'marina.office.name',
    x: 15,
    y: 12,
    icon: 'building',
    workingHours: '08:00 - 14:00',
  },
  {
    id: 'restaurant',
    type: 'poi',
    nameKey: 'marina.restaurant.name',
    x: 28,
    y: 10,
    icon: 'coffee',
    workingHours: '08:00 - 23:00',
  },
  {
    id: 'parking',
    type: 'poi',
    nameKey: 'marina.parking.name',
    x: 10,
    y: 35,
    icon: 'parking',
  },
  {
    id: 'eco-island',
    type: 'poi',
    nameKey: 'marina.ecoIsland.name',
    x: 42,
    y: 15,
    icon: 'trash',
  },
  {
    id: 'crane',
    type: 'poi',
    nameKey: 'marina.crane.name',
    x: 72,
    y: 22,
    icon: 'crane',
    capacity: '15t',
    workingHours: '08:00 - 14:00',
    ctaKey: 'marina.crane.cta',
    ctaLink: 'https://dizalica.duckdns.org',
    external: true,
  },
  {
    id: 'mol-a',
    type: 'pier',
    nameKey: 'marina.molA.name',
    x: 22,
    y: 55,
    category: 'A',
    maxLength: '6m',
    berths: 120,
    maxDraft: '2.5m',
  },
  {
    id: 'mol-b',
    type: 'pier',
    nameKey: 'marina.molB.name',
    x: 42,
    y: 55,
    category: 'B, C',
    maxLength: '12m',
    berths: 150,
    maxDraft: '3.0m',
  },
  {
    id: 'mol-c',
    type: 'pier',
    nameKey: 'marina.molC.name',
    x: 62,
    y: 45,
    category: 'D, E',
    maxLength: '15m',
    berths: 80,
    maxDraft: '4.5m',
  },
]
