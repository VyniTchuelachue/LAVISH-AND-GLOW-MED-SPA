import { NAV_LINKS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP, BOOKING, GOOGLE_MAPS, INSTAGRAM, FACEBOOK } from '../constants';
import { IconInstagram, IconFacebook, IconWhatsApp } from './Icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-[#f2ece1]/70 pt-16 pb-7">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12 pb-11 border-b border-white/15">
          <div>
            <a href="#top" className="flex items-center gap-3 mb-4">
              <img src="/images/logo.png" alt="" width="287" height="169" className="h-[34px] w-auto" />
              <span className="font-display text-lg text-white">Lavish Shape &amp; Glow</span>
            </a>
            <p className="text-sm max-w-[34ch] leading-relaxed">
              Le tout premier centre de fitness et d'esthétique médicale du Cameroun, au cœur de Bonapriso, Douala.
            </p>
            <div className="flex gap-3.5 mt-4">
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 border border-white/20 flex items-center justify-center hover:border-gold-light hover:bg-gold-light/10 transition-colors">
                <IconInstagram className="w-4 h-4 stroke-current" />
              </a>
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-11 h-11 border border-white/20 flex items-center justify-center hover:border-gold-light hover:bg-gold-light/10 transition-colors">
                <IconFacebook className="w-4 h-4 stroke-current" />
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-11 h-11 border border-white/20 flex items-center justify-center hover:border-gold-light hover:bg-gold-light/10 transition-colors">
                <IconWhatsApp className="w-4 h-4 stroke-current" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.14em] uppercase text-gold-light mb-4.5">Explorer</h4>
            <ul className="flex flex-col gap-3 text-[14.5px]">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold-light transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.14em] uppercase text-gold-light mb-4.5">Nous contacter</h4>
            <ul className="flex flex-col gap-3 text-[14.5px]">
              <li>
                <a href={PHONE_TEL} className="hover:text-gold-light transition-colors">{PHONE_DISPLAY}</a>
              </li>
              <li>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition-colors">
                  Écrire sur WhatsApp
                </a>
              </li>
              <li>
                <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition-colors">
                  Réserver en ligne
                </a>
              </li>
              <li>
                <a href={GOOGLE_MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-gold-light transition-colors">
                  Nous trouver sur Google
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 pt-6 text-[12.5px] text-[#f2ece1]/50">
          <span>© {year} Lavish Shape &amp; Glow Med Spa. Tous droits réservés.</span>
          <span>Bonapriso, Douala — Cameroun</span>
        </div>
      </div>
    </footer>
  );
}
