import Reveal from './Reveal';

const SHOTS = [
  { img: '/images/reception-sign.jpg', alt: 'Enseigne lumineuse Lavish Shape and Glow Med Spa', w: 746, h: 1281, lead: 'Accueil signature', sub: 'Marbre & laiton' },
  { img: '/images/washroom.jpg', alt: 'Cabinet de toilette en pierre naturelle avec vasque artisanale', w: 800, h: 445, lead: 'Espace bien-être', sub: 'Pierre & artisanat' },
  { img: '/images/lounge-table.jpg', alt: "Salon d'attente avec fleurs fraîches et grille tarifaire", w: 800, h: 790, lead: "Salon d'attente", sub: 'Fleurs fraîches' },
];

export default function Ambiance() {
  return (
    <section className="bg-marble-deep dark:bg-dbg-alt py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <Reveal className="max-w-[640px] mb-14">
          <span className="eyebrow">L'expérience</span>
          <h2 className="text-[clamp(32px,4vw,46px)] mt-4.5">Le détail, jusque dans les moindres recoins.</h2>
          <p className="mt-4.5 text-[17px] text-stone dark:text-dmuted max-w-[52ch]">
            Marbre, laiton brossé et pierre naturelle — l'institut a été pensé pièce par pièce.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4.5">
          {SHOTS.map((s) => (
            <Reveal key={s.img} as="figure" className="relative overflow-hidden rounded-sm m-0 group">
              <img
                src={s.img}
                alt={s.alt}
                width={s.w}
                height={s.h}
                loading="lazy"
                decoding="async"
                className="w-full h-auto aspect-[4/5] object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.06]"
              />
              <figcaption
                className="absolute inset-x-0 bottom-0 px-3 py-3 sm:px-5 sm:py-4.5 text-white"
                style={{ background: 'linear-gradient(0deg, rgba(15,13,10,0.75), transparent 75%)' }}
              >
                <span className="block font-display text-xs sm:text-base">{s.lead}</span>
                <span className="block text-[10px] sm:text-xs text-white/78 mt-0.5 sm:mt-1">{s.sub}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
