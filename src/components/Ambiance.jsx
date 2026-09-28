import Reveal from './Reveal';

const SHOTS = [
  { img: '/images/treatment-room-blue.jpg', alt: 'Cabine laser bleu apaisant', w: 866, h: 1278, lead: 'Cabine laser', sub: 'Bleu apaisant' },
  { img: '/images/treatment-room-white.jpg', alt: 'Cabine de soins du visage', w: 1075, h: 605, lead: 'Cabine soins', sub: 'Équipement dédié' },
  { img: '/images/spa-suite.jpg', alt: 'Suite de massage avec deux lits', w: 1080, h: 1072, lead: 'Suite double', sub: 'Massages' },
  { img: '/images/reception-sign.jpg', alt: 'Enseigne lumineuse Lavish Shape and Glow Med Spa', w: 746, h: 1281, lead: 'Accueil signature', sub: 'Marbre & laiton' },
  { img: '/images/washroom.jpg', alt: 'Cabinet de toilette en pierre naturelle', w: 900, h: 501, lead: 'Espace bien-être', sub: 'Pierre & artisanat' },
  { img: '/images/lounge-table.jpg', alt: "Salon d'attente avec fleurs fraîches", w: 900, h: 889, lead: "Salon d'attente", sub: 'Fleurs fraîches' },
];

export default function Ambiance() {
  return (
    <section className="bg-paper dark:bg-dbg py-20 md:py-28">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <Reveal className="max-w-[640px] mb-14">
          <span className="eyebrow">L'expérience</span>
          <h2 className="text-[clamp(32px,4vw,48px)] mt-4.5 italic">Le détail, jusque dans les moindres recoins.</h2>
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
                style={{ background: 'linear-gradient(0deg, rgba(11,19,21,0.8), transparent 75%)' }}
              >
                <span className="block font-display italic text-sm sm:text-lg">{s.lead}</span>
                <span className="block text-[10px] sm:text-xs text-white/78 mt-0.5 sm:mt-1">{s.sub}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
