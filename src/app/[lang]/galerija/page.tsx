import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '../dictionaries'
import type { Locale } from '../dictionaries'
import AnimatedSection from '@/components/ui/AnimatedSection'

// Using Unsplash placeholders for MVP as requested in the specification approval.
const PH_IMAGES = [
  'https://images.unsplash.com/photo-1544498522-bc57f9eddbda?q=80&w=800&auto=format&fit=crop', // sailboat
  'https://images.unsplash.com/photo-1577708577317-06df83020add?q=80&w=800&auto=format&fit=crop', // marina from top
  'https://images.unsplash.com/photo-1502484433618-2081e7dcd26b?q=80&w=800&auto=format&fit=crop', // sunset boats
  'https://images.unsplash.com/photo-1621271383749-d0b5e2978051?q=80&w=800&auto=format&fit=crop', // docking
  'https://images.unsplash.com/photo-1632128711581-2c0920def0a7?q=80&w=800&auto=format&fit=crop', // crystal clear water
  'https://images.unsplash.com/photo-1555582319-54bc7a6ac4d3?q=80&w=800&auto=format&fit=crop', // crane
  'https://images.unsplash.com/photo-1504900769213-3cc1cfaa6bca?q=80&w=800&auto=format&fit=crop', // flags
  'https://images.unsplash.com/photo-1497121775791-38e21aeee602?q=80&w=800&auto=format&fit=crop', // deck
  'https://images.unsplash.com/photo-1655761661706-9ab5dc825fe4?q=80&w=800&auto=format&fit=crop', // lighthouse
]

export default async function GalleryPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-16 lg:mb-24">
        <h1 className="text-5xl md:text-6xl font-serif text-marine mb-6">{dict.gallery.title}</h1>
        <p className="text-xl text-text-muted font-light max-w-2xl mx-auto">
          {dict.gallery.subtitle}
        </p>
        <div className="w-16 h-1 bg-gold mx-auto mt-10" />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {PH_IMAGES.map((src, idx) => (
          <AnimatedSection key={idx} delay={(idx % 3) * 0.1}>
            <div className="group relative aspect-square overflow-hidden bg-paper border border-gray-100 rounded-sm cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              {/* Note: In a real Next.js app, we should use next/image here. Using img for placeholder simplicity. */}
              <img
                src={src}
                alt={`PŠD Špinut galerija ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-marine/0 group-hover:bg-marine/10 transition-colors duration-500" />
            </div>
          </AnimatedSection>
        ))}
      </div>
      
      <AnimatedSection delay={0.4} className="mt-16 text-center text-sm text-text-muted/60">
        * Fotografije su ilustrativnog karaktera za potrebe MVP-a. (Unsplash placeholders)
      </AnimatedSection>
    </div>
  )
}
