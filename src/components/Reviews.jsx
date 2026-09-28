import Reveal from './Reveal';
import { Stars } from './Icons';
import { GOOGLE_MAPS } from '../constants';

const REVIEWS = [
  {
    initials: 'LM',
    name: 'Lynn Mbock',
    meta: 'Avis Google · il y a un an',
    quote:
      "« Cliente fidèle depuis l'ouverture, je suis pleinement satisfaite du professionnalisme et de la qualité de service de cet institut. Les résultats de mes séances d'épilation au laser m'ont véritablement impressionnée… »",
  },
  {
    initials: 'DV',
    name: 'Diamant Virginia',
    meta: 'Avis Google · il y a un an',
    quote:
      "« Je suis ravie de mon expérience d'épilation au laser dans cet institut. L'équipe a été très professionnelle et attentionnée tout au long du processus. Les résultats sont incroyables, ma peau est plus lisse que jamais… »",
  },
  {
    initials: 'RL',
    name: 'Rym Labidi',
    meta: 'Local Guide · 13 avis · il y a un an',
    quote: "« Très bel endroit pour prendre soin de soi, accueil chaleureux, institut propre, et service de qualité, je recommande vivement. »",
  },
];

export default function Reviews() {
  return (
    <section className="bg-teal-tint dark:bg-[#0e1c1d] py-20 md:py-28" id="avis">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <Reveal className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mb-11">
          <div>
            <span className="eyebrow">Elles en parlent le mieux</span>
            <div className="flex items-center gap-4.5 mt-4">
              <span className="font-display italic text-[58px] leading-none text-teal-deep dark:text-brass-light">4,7</span>
              <div>
                <Stars />
                <span className="text-[13.5px] text-stone dark:text-dmuted mt-2 block">31 avis vérifiés sur Google</span>
              </div>
            </div>
          </div>
          <a
            href={GOOGLE_MAPS}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-semibold tracking-wide border-b border-teal-deep dark:border-brass-light text-teal-deep dark:text-brass-light pb-0.5"
          >
            Voir tous les avis sur Google ↗
          </a>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r) => (
            <Reveal key={r.name} className="bg-paper dark:bg-dsurface border border-ink/10 dark:border-white/10 p-7 flex flex-col gap-4">
              <Stars className="[&_svg]:w-3.5 [&_svg]:h-3.5" />
              <p className="text-[15px] leading-relaxed flex-1">{r.quote}</p>
              <div className="flex items-center gap-3 mt-auto">
                <span className="w-[38px] h-[38px] rounded-full bg-teal-tint dark:bg-dbg-alt flex items-center justify-center font-display italic text-base text-teal-deep dark:text-brass-light flex-shrink-0">
                  {r.initials}
                </span>
                <div>
                  <div className="text-[13.5px] font-semibold">{r.name}</div>
                  <div className="text-xs text-stone dark:text-dmuted">{r.meta}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
