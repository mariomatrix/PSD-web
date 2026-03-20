import { notFound } from 'next/navigation'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Calendar, ArrowLeft } from 'lucide-react'
import { mockNews } from '../page'

export async function generateStaticParams() {
  // Generate params for HR only since news are HR only
  return mockNews.map((news) => ({
    lang: 'hr',
    slug: news.slug,
  }))
}

export default async function NewsDetailPage({ 
  params 
}: { 
  params: Promise<{ lang: string; slug: string }> 
}) {
  const { lang, slug } = await params
  
  const article = mockNews.find(n => n.slug === slug)
  if (!article) notFound()

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-8 max-w-3xl mx-auto">
      <AnimatedSection className="mb-12">
        <Link 
          href={`/${lang}/vijesti`}
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-text-muted hover:text-marine transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Natrag na vijesti
        </Link>
        
        <div className="flex items-center gap-2 text-gold mb-6 text-sm font-semibold tracking-widest uppercase">
          <Calendar className="w-4 h-4" />
          <time>
            {new Date(article.date).toLocaleDateString('hr-HR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-serif text-marine leading-tight mb-8">
          {article.title}
        </h1>
        
        <div className="w-full h-px bg-paper-warm mb-10" />
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="prose prose-lg prose-slate font-light leading-relaxed text-text-muted max-w-none">
        <p className="text-xl text-marine font-medium leading-relaxed mb-8">
          {article.excerpt}
        </p>
        <p>
          {article.content}
        </p>
      </AnimatedSection>
    </div>
  )
}
