import { BOOKING, WHATSAPP } from '../constants';

export default function Hero() {
  return (
    <section className="relative bg-paper dark:bg-dbg pt-[128px] pb-16 md:pt-[150px] md:pb-24 overflow-hidden" id="top">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] dark:opacity-[0.08]"
        style={{
          backgroundImage: 'repeating-linear-gradient(120deg, currentColor 0, currentColor 1px, transparent 1px, transparent 64px)',
          color: 'var(--color-ink)',
        }}
      />

      <div className="relative max-w-[1180px] mx-auto px-5 sm:px-8 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <span className="eyebrow">Bonapriso, Douala</span>
          <h1 className="mt-5 text-[clamp(40px,7vw,72px)] leading-[1.05] text-ink-soft dark:text-dtext max-w-[15ch]">
            Sculptez votre silhouette,{' '}
            <em className="italic text-brass-deep dark:text-brass-light">révélez</em> votre éclat.
          </h1>
          <p className="mt-6 max-w-[48ch] text-base md:text-lg text-stone dark:text-dmuted">
            Le tout premier centre de fitness et d'esthétique médicale du Cameroun — où la technologie clinique
            rencontre le soin haute couture, séance après séance.
          </p>
          <div className="flex flex-wrap gap-4 mt-9">
            <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn btn-brass">
              Réserver une séance
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-line">
              Discuter sur WhatsApp
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative">
          <div className="absolute -inset-3 border border-brass/40 dark:border-brass-light/25 rounded-sm hidden sm:block" />
          <img
            src="/images/exterior.jpg"
            alt="Façade de Lavish Shape & Glow Med Spa à Bonapriso, Douala"
            width="1600"
            height="900"
            fetchPriority="high"
            decoding="async"
            className="relative w-full h-auto aspect-[4/3] object-cover rounded-sm shadow-[0_30px_60px_-20px_rgba(15,30,34,0.35)]"
          />
        </div>
      </div>
    </section>
  );
}
