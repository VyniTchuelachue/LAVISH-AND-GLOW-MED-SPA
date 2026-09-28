import { BOOKING, WHATSAPP } from '../constants';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden bg-ink" id="top">
      <div className="absolute inset-0">
        <img
          src="/images/exterior.jpg"
          alt="Façade de Lavish Shape & Glow Med Spa à Bonapriso, Douala"
          width="540"
          height="341"
          fetchpriority="high"
          decoding="async"
          className="w-full h-full object-cover scale-[1.06] motion-safe:animate-[hero-zoom_18s_ease-out_forwards]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(15,13,10,0.55) 0%, rgba(15,13,10,0.25) 32%, rgba(15,13,10,0.78) 100%), linear-gradient(90deg, rgba(15,13,10,0.55) 0%, rgba(15,13,10,0.05) 45%)',
          }}
        />
      </div>

      <div className="relative z-[2] w-full max-w-[1180px] mx-auto px-8 pt-[200px] pb-24 md:pb-32 text-white">
        <span className="eyebrow text-gold-light">Bonapriso, Douala</span>
        <h1 className="text-[clamp(36px,10vw,84px)] leading-[1.12] text-white mt-5 mb-6 max-w-[16ch]">
          Sculptez votre silhouette.
          <br />
          Révélez votre <em className="italic text-gold-light">éclat.</em>
        </h1>
        <p className="max-w-[46ch] text-base md:text-lg text-white/85 mb-10">
          Le tout premier centre de fitness et d'esthétique médicale du Cameroun — où la technologie clinique
          rencontre le soin haute couture, séance après séance.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn btn-gold flex-1 sm:flex-none">
            Réserver une séance
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-line flex-1 sm:flex-none">
            Discuter sur WhatsApp
          </a>
        </div>
      </div>

      <div className="hidden md:flex absolute right-10 bottom-10 z-[2] [writing-mode:vertical-rl] text-white/75 text-[11px] tracking-[0.2em] uppercase items-center gap-3.5">
        Découvrir
        <span className="w-px h-[46px] bg-white/50 block" />
      </div>
    </section>
  );
}
