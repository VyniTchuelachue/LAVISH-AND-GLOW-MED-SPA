import Reveal from './Reveal';
import MapEmbed from './MapEmbed';
import { IconPin, IconPhone, IconClock } from './Icons';
import { PHONE_DISPLAY, PHONE_TEL, BOOKING, MAPS_DIRECTIONS } from '../constants';

const HOURS = [
  ['Mardi – Samedi', '9h00 – 20h00'],
  ['Dimanche', '12h00 – 20h00'],
  ['Lundi', 'Fermé'],
];

export default function Visit() {
  return (
    <section className="bg-paper-deep dark:bg-dbg-alt py-20 md:py-28" id="visiter">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <Reveal className="max-w-[640px] mb-14">
          <span className="eyebrow">Nous trouver</span>
          <h2 className="text-[clamp(32px,4vw,48px)] mt-4.5 italic">Préparez votre visite.</h2>
          <p className="mt-4.5 text-[17px] text-stone dark:text-dmuted max-w-[52ch]">
            À l'intérieur de l'École Les Ribambelles, Rue Batibois, Bonapriso — à quelques minutes d'Opium
            Bonapriso.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 dark:bg-white/10 border border-ink/10 dark:border-white/10">
          <div className="bg-paper dark:bg-dsurface p-6 sm:p-14">
            <h3 className="text-[13px] tracking-[0.14em] uppercase text-brass-deep dark:text-brass-light font-bold mb-5.5">
              Informations pratiques
            </h3>
            <div className="flex flex-col gap-5.5">
              <div className="flex gap-4">
                <IconPin className="w-5 h-5 stroke-brass-deep dark:stroke-brass-light flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-display italic text-xl">Bonapriso, Douala</div>
                  <div className="text-sm text-stone dark:text-dmuted mt-1 leading-relaxed">
                    École Les Ribambelles, Rue Batibois, Bonapriso, Douala, Cameroun — plus code 2MCX+W5.
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <IconPhone className="w-5 h-5 stroke-brass-deep dark:stroke-brass-light flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-display italic text-xl">{PHONE_DISPLAY}</div>
                  <div className="text-sm text-stone dark:text-dmuted mt-1 leading-relaxed">
                    Par téléphone ou WhatsApp, pour vos réservations et consultations.
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <IconClock className="w-5 h-5 stroke-brass-deep dark:stroke-brass-light flex-shrink-0 mt-0.5" />
                <div className="w-full">
                  <div className="font-display italic text-xl">Horaires d'ouverture</div>
                  <table className="w-full mt-1 border-collapse">
                    <tbody>
                      {HOURS.map(([day, time]) => (
                        <tr key={day} className="border-b border-ink/10 dark:border-white/10 last:border-none">
                          <td className="py-2.5 text-[14.5px]">{day}</td>
                          <td className="py-2.5 text-[14.5px] text-right text-stone dark:text-dmuted tabular-nums">{time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3.5 mt-8">
              <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn btn-brass">
                Réserver une séance
              </a>
              <a href={MAPS_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="btn btn-line">
                Itinéraire
              </a>
            </div>
          </div>
          <MapEmbed />
        </Reveal>
      </div>
    </section>
  );
}
