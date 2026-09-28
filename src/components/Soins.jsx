import Reveal from './Reveal';

const TREATMENTS = [
  {
    index: '01 — Le soin plébiscité',
    title: 'Épilation au laser',
    img: '/images/soin-laser-hair-removal.jpg',
    alt: "Séance d'épilation au laser en cabine",
    w: 1400,
    h: 1050,
    text: "Notre technologie laser dernière génération, encadrée par une équipe formée aux protocoles les plus récents — la séance la plus demandée de l'institut.",
    quote: "« Les résultats de mes séances d'épilation au laser m'ont véritablement impressionnée. »",
    quoteCite: '— Lynn Mbock, avis Google',
  },
  {
    index: '02 — Visage & fermeté',
    title: 'Soins anti-âge',
    img: '/images/soin-anti-aging.jpg',
    alt: 'Soin du visage anti-âge en cabine',
    w: 1400,
    h: 933,
    reverse: true,
    text: 'Protocoles ciblés contre les rides et le relâchement cutané — mésothérapie, radiofréquence et soins raffermissants sur mesure.',
  },
  {
    index: '03 — Peau nette & éclat',
    title: 'Soins du visage',
    img: '/images/soin-clear-skin.jpg',
    alt: 'Soin du visage pour une peau nette',
    w: 1400,
    h: 933,
    text: "Hydrafacial et nettoyage en profondeur pour traiter l'acné, les taches et le teint terne, avec un protocole adapté à chaque type de peau.",
  },
  {
    index: '04 — Silhouette',
    title: 'Remodelage corporel',
    img: '/images/soin-body-contouring.jpg',
    alt: 'Soin de remodelage corporel',
    w: 1400,
    h: 933,
    reverse: true,
    text: 'Pressothérapie, cavitation et liposuccion laser pour redessiner la silhouette, en complément de nos protocoles de drainage.',
  },
  {
    index: '05 — Détente',
    title: 'Massages & bien-être',
    img: '/images/soin-massage.jpg',
    alt: 'Massage relaxant en cabine',
    w: 1400,
    h: 933,
    text: 'Massages relaxants et drainage lymphatique dans notre suite double — bougies, huiles chaudes, ambiance feutrée.',
  },
];

const EXTRAS = [
  {
    title: 'Rituel pédicure & manucure',
    img: '/images/pedicure-chairs.jpg',
    alt: 'Fauteuils en bois du salon pédicure et manucure',
    w: 1076,
    h: 1058,
    text: 'Un salon privé pensé pour les rituels pieds et mains, à l\'écart de l\'agitation.',
  },
  {
    title: 'Consultation & soins vaginaux',
    img: '/images/products-room.jpg',
    alt: 'Comptoir de consultation et de produits de soin',
    w: 1080,
    h: 616,
    text: 'Traitement des vergetures et rajeunissement vaginal, en toute confidentialité, après consultation.',
  },
];

export default function Soins() {
  return (
    <section className="bg-paper dark:bg-dbg py-20 md:py-28" id="soins">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <Reveal className="max-w-[640px] mb-14">
          <span className="eyebrow">Nos soins</span>
          <h2 className="text-[clamp(32px,4vw,48px)] mt-4.5 italic">Des soins signature, cabine par cabine.</h2>
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
                  className="rounded-sm w-full h-auto aspect-[4/3.2] object-cover"
                />
              </div>
              <div>
                <span className="font-display italic text-base text-brass-deep dark:text-brass-light">{t.index}</span>
                <h3 className="text-[clamp(24px,2.6vw,32px)] mt-2">{t.title}</h3>
                <p className="text-stone dark:text-dmuted text-base mt-4">{t.text}</p>
                {t.quote && (
                  <blockquote className="mt-5 pl-4.5 border-l-2 border-brass font-display italic text-lg">
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

        <Reveal className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16 md:mt-24 pt-16 md:pt-20 border-t border-ink/10 dark:border-white/10">
          {EXTRAS.map((e) => (
            <div key={e.title} className="flex gap-5 items-center">
              <img
                src={e.img}
                alt={e.alt}
                width={e.w}
                height={e.h}
                loading="lazy"
                decoding="async"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-sm object-cover flex-shrink-0"
              />
              <div>
                <h4 className="font-display italic text-xl">{e.title}</h4>
                <p className="text-sm text-stone dark:text-dmuted mt-1.5">{e.text}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
