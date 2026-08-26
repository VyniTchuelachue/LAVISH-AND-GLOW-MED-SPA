import Reveal from './Reveal';

const TREATMENTS = [
  {
    index: '01 — Le soin plébiscité',
    title: 'Épilation au laser',
    img: '/images/treatment-room-blue.jpg',
    alt: "Cabine laser bleu apaisant pour l'épilation au laser",
    w: 866,
    h: 1278,
    objectPosition: '50% 80%',
    text: "Notre cabine laser, habillée de bleu apaisant, accueille nos séances d'épilation les plus demandées — encadrées par une équipe formée aux technologies laser dernière génération.",
    quote: "« Les résultats de mes séances d'épilation au laser m'ont véritablement impressionnée. »",
    quoteCite: '— Lynn Mbock, avis Google',
  },
  {
    index: '02 — Visage & éclat',
    title: 'Soins du visage & anti-âge',
    img: '/images/treatment-room-white.jpg',
    alt: 'Cabine de soins du visage avec appareil professionnel',
    w: 1075,
    h: 605,
    reverse: true,
    text: 'Hydrafacial, mésothérapie et protocoles anti-âge sur mesure, réalisés dans une cabine dédiée entièrement équipée pour les soins de peau les plus pointus.',
  },
  {
    index: '03 — Corps & détente',
    title: 'Massages & remodelage corporel',
    img: '/images/spa-suite.jpg',
    alt: 'Suite de massage avec deux lits, bougies et coquillages',
    w: 1080,
    h: 1072,
    text: 'Notre suite double — bougies, coquillages, huiles chaudes — accueille massages relaxants, drainage lymphatique et protocoles de remodelage de la silhouette (pressothérapie, cavitation, liposuccion laser).',
  },
  {
    index: '04 — Pieds & mains',
    title: 'Rituel pédicure & manucure',
    img: '/images/pedicure-chairs.jpg',
    alt: 'Fauteuils en bois du salon pédicure et manucure',
    w: 1076,
    h: 1058,
    reverse: true,
    text: 'Un salon privé, à l\'écart, pensé pour les rituels pieds et mains — deux fauteuils en bois massif, dans une ambiance feutrée loin de l\'agitation.',
  },
  {
    index: '05 — Sur mesure',
    title: 'Consultation & soins vaginaux',
    img: '/images/products-room.jpg',
    alt: 'Comptoir de consultation et de produits de soin',
    w: 1080,
    h: 616,
    text: 'Chaque parcours démarre par une consultation au comptoir produits, y compris pour nos soins les plus intimes — traitement des vergetures et rajeunissement vaginal, en toute confidentialité.',
  },
];

export default function Soins() {
  return (
    <section className="bg-marble dark:bg-dbg py-24 md:py-32" id="soins">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <Reveal className="max-w-[640px] mb-14">
          <span className="eyebrow">Nos soins</span>
          <h2 className="text-[clamp(32px,4vw,46px)] mt-4.5">Des soins signature, cabine par cabine.</h2>
          <p className="mt-4.5 text-[17px] text-stone dark:text-dmuted max-w-[52ch]">
            Chaque programme est mené dans sa propre cabine, avec l'équipement dédié à sa spécialité — sur
            rendez-vous, après une consultation personnalisée.
          </p>
        </Reveal>

        <div className="flex flex-col gap-16 md:gap-24">
          {TREATMENTS.map((t) => (
            <Reveal key={t.title} className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-16 items-center">
              <div className={t.reverse ? 'md:order-2' : ''}>
                <img
                  src={t.img}
                  alt={t.alt}
                  width={t.w}
                  height={t.h}
                  loading="lazy"
                  decoding="async"
                  style={t.objectPosition ? { objectPosition: t.objectPosition } : undefined}
                  className="rounded-sm w-full h-auto aspect-[4/3.1] object-cover"
                />
              </div>
              <div>
                <span className="font-display text-[13px] tracking-wide text-gold-deep dark:text-gold-light">{t.index}</span>
                <h3 className="text-[clamp(24px,2.6vw,30px)] mt-2.5">{t.title}</h3>
                <p className="text-stone dark:text-dmuted text-base mt-4">{t.text}</p>
                {t.quote && (
                  <blockquote className="mt-5 pl-4.5 border-l-2 border-gold font-display italic text-[15px]">
                    {t.quote}
                    <cite className="block mt-2 font-body not-italic text-xs tracking-wide uppercase text-stone dark:text-dmuted">
                      {t.quoteCite}
                    </cite>
                  </blockquote>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
