import Reveal from './Reveal';
import { IconCheck } from './Icons';

const BADGES = ['Équipements certifiés', 'Cabines privées', 'Dirigé par une femme'];

export default function About() {
  return (
    <section className="bg-marble dark:bg-dbg py-24 md:py-32" id="apropos">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-18 items-center">
        <Reveal>
          <img
            src="/images/reception.jpg"
            alt="Accueil en marbre et laiton doré de Lavish Shape & Glow Med Spa"
            width="1080"
            height="604"
            loading="lazy"
            decoding="async"
            className="rounded-sm w-full h-auto"
          />
        </Reveal>
        <Reveal>
          <span className="eyebrow">L'institut</span>
          <h2 className="text-[clamp(28px,4vw,40px)] mt-4">Un institut qui a tout d'un atelier haute couture.</h2>
          <p className="text-stone dark:text-dmuted text-[16.5px] mt-5">
            Installé à Bonapriso, Lavish Shape &amp; Glow a été fondé en 2021 par Rolande Epopa comme le tout premier
            centre de fitness et d'esthétique médicale du Cameroun — une adresse unique pour le remodelage corporel,
            l'épilation laser et le bien-être, avec le soin d'une maison de couture.
          </p>
          <p className="text-stone dark:text-dmuted text-[16.5px] mt-5">
            Chaque cabine est équipée pour sa spécialité : salles laser et radiofréquence habillées de bleu apaisant,
            accueil en marbre et laiton pour les consultations, salon privé pour les rituels pieds et mains. Rien
            n'est partagé, rien n'est précipité.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {BADGES.map((b) => (
              <span key={b} className="pill">
                <IconCheck />
                {b}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
