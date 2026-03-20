import { notFound } from 'next/navigation'
import AnimatedSection from '@/components/ui/AnimatedSection'

// Pravilnik is HR only, so we ignore the locale Dictionary and write directly in Croatian
export default async function PravilnikPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (lang !== 'hr') {
    // Optionally redirect EN users to HR page, or show a notice in English.
    // For MVp, we just render the HR content regardless, as it's a legal document.
  }

  return (
    <div className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-8 max-w-4xl mx-auto">
      <AnimatedSection className="text-center mb-16 lg:mb-24">
        <h1 className="text-4xl md:text-5xl font-serif text-marine mb-6">Pravilnik o korištenju veza</h1>
        <div className="w-16 h-1 bg-gold mx-auto mt-8" />
      </AnimatedSection>

      <AnimatedSection className="prose prose-lg prose-slate max-w-none font-light leading-relaxed text-text-muted">
        <div className="bg-paper-warm border border-gray-200 p-8 rounded-sm mb-12">
          <p className="font-semibold text-marine mb-2">Napomena:</p>
          <p className="text-sm">
            Ovaj dokument predstavlja sažetak najvažnijih pravila iz službenog Pravilnika Pomorskog športskog društva Špinut. 
            Cijeli pravilnik dostupan je na uvid u tajništvu društva.
          </p>
        </div>

        <h3 className="text-2xl font-serif text-marine mt-12 mb-6">1. Opće odredbe</h3>
        <p>
          Pravo korištenja veza u lučici PŠD Špinut imaju članovi društva temeljem valjanog ugovora. 
          Korisnik veza dužan je pridržavati se reda, čuvati imovinu društva te paziti na sigurnost i ekologiju lučice.
        </p>

        <h3 className="text-2xl font-serif text-marine mt-12 mb-6">2. Raspodjela vezova</h3>
        <p>
          Vezovi su raspoređeni po kategorijama ovisno o dimenzijama plovila (A do F). Nije dozvoljen privez plovila 
          koja premašuju maksimalne dimenzije (dužinu, širinu i gaz) predviđene za dotičnu kategoriju veza.
        </p>

        <h3 className="text-2xl font-serif text-marine mt-12 mb-6">3. Ekologija i sigurnost</h3>
        <ul className="list-disc pl-6 space-y-3 my-6">
          <li>Strogo je zabranjeno bacanje smeća u more ili ispuštanje zauljenih voda, fekalija i kaljužnih voda unutar akvatorija lučice.</li>
          <li>Svi korisnici dužni su odlagati otpad isključivo u predviđene spremnike (eko-otok).</li>
          <li>Zabranjeno je ostavljanje zapaljivih tvari, goriva ili opasnih kemikalija na gatovima.</li>
          <li>Kretanje vozilima po gatovima je strogo zabranjeno.</li>
        </ul>

        <h3 className="text-2xl font-serif text-marine mt-12 mb-6">4. Obveze korisnika veza</h3>
        <p>
          Korisnik veza je obvezan redovito održavati svoje plovilo u ispravnom i estetski urednom stanju. 
          Privezne konope, opruge i bokobrane korisnik mora osigurati samostalno i održavati ih u sigurnom stanju.
        </p>

      </AnimatedSection>
    </div>
  )
}
