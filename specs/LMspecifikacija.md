# Lmspecifikacija

Uzimajući u obzir da je samo dio članova starije dobi, dok ostatak čine mlađi i tehnički potkovaniji korisnici, web stranica mora pomiriti dva svijeta: **modernost i napredne funkcije** s jedne strane te **kristalnu jasnoću i pristupačnost** s druge.
U modernom dizajnu za 2026. godinu, ovaj se pristup naziva **"efekt spuštenog rubnika" (Curb-cut effect)** – dizajniranje s naglaskom na pristupačnost (koja je nužna starijima) zapravo rezultira znatno boljim i ugodnijim korisničkim iskustvom za sve korisnike.
Evo nove, prilagođene specifikacije koja koristi vrhunske tehnološke trendove kako bi platforma PŠD Špinut bila moderna, brza i svima jednostavna za korištenje:
1. Arhitektura i korisničko sučelje (UI/UX)
Dizajn mora ostavljati dojam vrhunske nautičke aplikacije, bez kompliciranja navigacije.
- **Bento Grid kao temelj organizacije:** Ovaj modularni, "kartični" dizajn savršen je za mješovitu demografiju. Mlađim članovima Bento Grid djeluje kao iznimno moderan, premium "app-like" raspored (slično Appleovim sučeljima) koji je responzivan i fluidan na svim uređajima. Starijim članovima uredne i vizualno odvojene kutije smanjuju kognitivno opterećenje i točno znaju gdje trebaju kliknuti.
- **Funkcionalno "Tekuće staklo" (Liquid Glass):** Iako je ranije savjetovano izbjegavanje, u mješovitom članstvu *Liquid Glass* može se primijeniti, ali **isključivo funkcionalno**, a ne samo dekorativno. Može se koristiti za navigacijske trake s "frosted glass" (zamagljenim) efektom koji stvara osjećaj dubine i hijerarhije, ali istovremeno zadržava oštre rubove i savršenu čitljivost teksta.
- **Pametni "Dark Mode" (Tamni način rada):** Automatska prilagodba svjetline sučelja ovisno o dobu dana ili postavkama uređaja. Ovo je iznimno važno za nautičare jer tamni način rada štedi bateriju i drastično olakšava pregledavanje stranice noću na brodu, bez naprezanja očiju.
- **Suptilne mikro-animacije:** Kako bi stranica djelovala živo, implementirat će se mikro-animacije. To su sitni, suptilni pokreti (npr. gumb koji lagano promijeni boju kad se preko njega prijeđe mišem) koji korisnicima služe kao vizualna potvrda da su uspješno odradili akciju, što je korisno svim generacijama.
2. Struktura sadržaja i digitalne usluge (Intranet)
Sve klupske funkcionalnosti i pravila integrirat će se na jedno mjesto, uz strogu logičku podjelu.
- **Hero sekcija usmjerena na konverziju:** Vrh početne stranice treba biti čist i bez ometanja (npr. "Split-column" raspored), s upečatljivim multimedijalnim prikazom lučice i jednim dominantnim gumbom za prijavu (Member Login).
- **Portal za članove (Member Dashboard):** Nakon prijave, svakom se članu otvara personalizirani prostor. Ovdje članovi imaju uvid u financijsko stanje (članarine) te podatke o plovilu i veza. Sustav mora programski pratiti i klupski Pravilnik (kategorije od A do F, uz ograničenje za brodice do maksimalno 15 metara).
- **Ticketing sustav i rezervacije:** Digitalni kalendar za jednostavnu rezervaciju dizalice i sustav za brzu prijavu kvarova (gdje svaki član može uslikati problem i poslati ga tehničkoj službi).
- **Sustav za tranzit i goste:** Web sučelje prilagođeno gostima koji mogu putem QR koda na vezu odmah pristupiti prijavi na engleskom jeziku i izvršiti naplatu, bez gužvi na recepciji.
3. Pristupačnost kao nevidljivi standard (Accessibility)
Pristupačnost ne smije narušavati vizualni identitet, već ga mora nadograđivati.
- **Optimizacija za dodir (Touch targets):** S obzirom na to da se platforma često koristi na mobitelima i na brodovima koji se ljuljaju, gumbi i linkovi moraju biti dovoljno veliki (minimalno 48x48 piksela) kako bi ih bilo lako kliknuti.
- **WCAG smjernice:** Implementacija visokih kontrasta boja za tekst u odnosu na pozadinu i mogućnost prilagodbe veličine fonta osigurat će lako čitanje i slabovidnim članovima.
4. Performanse, brzina i "Mobile-First" pristup
Za nautičare na moru sa slabijim mobilnim signalom, brzina je apsolutni prioritet.
- **Core Web Vitals:** Tehnička arhitektura mora zadovoljavati Googleove standarde – najveći sadržaj na ekranu (LCP) mora se učitati za manje od 2,5 sekunde, a vrijeme reakcije sučelja (INP) mora biti ispod 200 milisekundi.
- **Optimizacija medija:** Sve fotografije iz lučice i slike u oglasniku automatski će se kompresirati u moderne formate "sljedeće generacije" (poput WebP-a ili AVIF-a), čime se veličina datoteka smanjuje bez gubitka kvalitete. Također, koristit će se *Lazy Loading* (učitavanje slika tek kada korisnik do njih dođe skrolanjem).
Ovakva specifikacija kreira **"digitalni ekosustav"**; on je vizualno atraktivan i napredan za mlađe članove koji očekuju besprijekorno mobilno iskustvo, a istovremeno dovoljno jasan, organiziran i taktilno pristupačan da starijim članovima maksimalno olakša snalaženje.