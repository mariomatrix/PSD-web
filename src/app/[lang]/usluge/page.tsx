import { notFound } from 'next/navigation'
import { getDictionary, hasLocale } from '../dictionaries'
import type { Locale } from '../dictionaries'
import { berthCategories } from '@/lib/constants'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Waves, Ship, Warehouse } from 'lucide-react'

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)

  const services = [
    {
      icon: Waves,
      title: dict.servicesPage.berths,
      desc: dict.servicesPage.berthsDesc,
    },
    {
      icon: Ship,
      title: dict.servicesPage.crane,
      desc: dict.servicesPage.craneDesc,
    },
    {
      icon: Warehouse,
      title: dict.servicesPage.dryBerth,
      desc: dict.servicesPage.dryBerthDesc,
    },
  ]

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-serif text-marine mb-6">{dict.servicesPage.title}</h1>
        <p className="text-xl text-text-muted font-light max-w-2xl mx-auto">
          {dict.servicesPage.subtitle}
        </p>
        <div className="w-16 h-1 bg-gold mx-auto mt-10" />
      </AnimatedSection>

      {/* Services List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
        {services.map((srv, idx) => (
          <AnimatedSection key={idx} delay={idx * 0.1} className="bg-white p-8 rounded-sm shadow-sm border border-paper-warm">
            <div className="w-14 h-14 rounded-full bg-paper flex items-center justify-center text-marine mb-6">
              <srv.icon className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-serif text-marine mb-4">{srv.title}</h2>
            <p className="text-text-muted font-light leading-relaxed">
              {srv.desc}
            </p>
          </AnimatedSection>
        ))}
      </div>

      {/* Berth Categories Table */}
      <AnimatedSection delay={0.3} className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold text-marine mb-8 text-center">{dict.marina?.category || 'Kategorije vezova'}</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-marine/10">
                <th className="py-4 px-6 font-bold text-marine uppercase tracking-wider text-xs">{dict.marina?.category}</th>
                <th className="py-4 px-6 font-semibold text-marine uppercase tracking-wider text-sm">Max dužina</th>
                <th className="py-4 px-6 font-semibold text-marine uppercase tracking-wider text-sm">Max širina</th>
                <th className="py-4 px-6 font-semibold text-marine uppercase tracking-wider text-sm">Napomena</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-paper-warm">
              {berthCategories.map((cat, idx) => (
                <tr key={idx} className="hover:bg-paper/50 transition-colors">
                  <td className="py-4 px-6 font-medium text-marine">{cat.category}</td>
                  <td className="py-4 px-6 text-text-muted">{cat.maxLength}</td>
                  <td className="py-4 px-6 text-text-muted">{cat.maxWidth}</td>
                  <td className="py-4 px-6 text-text-muted/60 text-sm">{(cat as any).note || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AnimatedSection>
    </div>
  )
}
