import { notFound } from 'next/navigation'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Calendar, ArrowRight } from 'lucide-react'

// Placeholder data for MVP
export const mockNews = [
  {
    slug: 'koncesija-2024',
    title: 'Vlada RH donijela odluku o dodjeli koncesije za PŠD Špinut',
    excerpt: 'Nakon dugotrajnog procesa i pripreme opsežne dokumentacije, Vlada Republike Hrvatske je na sjednici donijela pozitivnu odluku...',
    date: '2024-04-15',
    content: 'Ovdje ide puni tekst vijesti o koncesiji. U pravoj aplikaciji ovaj sadržaj bi dolazio iz MDX datoteka ili Headless CMS-a. Za potrebe MVP-a prikazujemo placeholder tekst.',
  },
  {
    slug: 'pravilnik-2025',
    title: 'Novi Pravilnik o korištenju veza stupa na snagu',
    excerpt: 'Upravni odbor donio je izmjene i dopune Pravilnika o korištenju veza koji donosi važna pravila oko ekologije i sigurnosti.',
    date: '2025-12-11',
    content: 'Novi pravilnik fokusira se na ekološke standarde, obveznu upotrebu eko-otoka i zabranu ispuštanja otpadnih voda. Svaki član dužan je upoznati se s novim odredbama.',
  },
  {
    slug: 'ciscenje-podmorja',
    title: 'Uspješno provedena jesenja akcija čišćenja podmorja',
    excerpt: 'U suradnji s Ronilačkim klubom Špinut izvučeno je preko 500kg otpada iz akvatorija naše lučice.',
    date: '2025-10-20',
    content: 'Zahvaljujemo svim volonterima, roniocima i članovima uprave koji su sudjelovali u ovoj hvalevrijednoj akciji. Naše podmorje sada je čišće i sigurnije za sav morski svijet.',
  },
]

export default async function NewsIndexPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  
  // Vijesti are HR only
  if (lang !== 'hr') {
    // We could redirect to HR, but rendering is fine for MVP.
  }

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-8 max-w-5xl mx-auto">
      <AnimatedSection className="mb-16 lg:mb-20">
        <h1 className="text-5xl md:text-6xl font-serif text-marine mb-6">Vijesti i Obavijesti</h1>
        <div className="w-16 h-1 bg-gold mt-8" />
      </AnimatedSection>

      <div className="space-y-8">
        {mockNews.map((item, idx) => (
          <AnimatedSection key={item.slug} delay={idx * 0.1}>
            <article className="bg-white p-8 lg:p-10 border border-paper-warm shadow-sm hover:shadow-md transition-shadow rounded-sm group">
              <div className="flex items-center gap-2 text-gold mb-4 text-sm font-semibold tracking-widest uppercase">
                <Calendar className="w-4 h-4" />
                <time>
                  {new Date(item.date).toLocaleDateString('hr-HR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
              </div>
              
              <Link href={`/hr/vijesti/${item.slug}`} className="block">
                <h2 className="text-2xl lg:text-3xl font-serif text-marine mb-4 group-hover:text-gold transition-colors">
                  {item.title}
                </h2>
              </Link>
              
              <p className="text-text-muted font-light leading-relaxed mb-6">
                {item.excerpt}
              </p>
              
              <Link 
                href={`/hr/vijesti/${item.slug}`}
                className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-marine hover:text-gold transition-colors"
              >
                Pročitaj više <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}
