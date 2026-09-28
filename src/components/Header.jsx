import { useEffect, useState } from 'react';
import { NAV_LINKS, BOOKING, PHONE_TEL } from '../constants';
import { IconMenu, IconClose } from './Icons';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    document.addEventListener('scroll', onScroll, { passive: true });
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] border-b transition-all duration-300 ${
          scrolled
            ? 'bg-paper/95 dark:bg-dsurface/95 backdrop-blur border-ink/10 dark:border-white/10 py-3.5 shadow-[0_8px_24px_rgba(15,30,34,0.08)]'
            : 'bg-transparent border-transparent py-5.5'
        }`}
      >
        <div className="max-w-[1180px] mx-auto px-5 sm:px-8 flex items-center justify-between gap-6">
          <a href="#top" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="Logo Lavish Shape &amp; Glow Med Spa" width="287" height="169" className="h-9 w-auto" />
            <span className="hidden md:inline font-display italic text-2xl whitespace-nowrap text-ink-soft dark:text-dtext">
              Lavish Shape &amp; Glow
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[13px] font-semibold tracking-wide uppercase text-stone dark:text-dmuted">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-brass-deep dark:hover:text-brass-light transition-colors py-1">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3.5">
            <a href={PHONE_TEL} className="btn btn-line hidden md:inline-flex !px-[22px] !py-[11px] !text-xs">
              Appeler
            </a>
            <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn btn-brass !px-[22px] !py-[11px] !text-xs">
              Réserver
            </a>
            <button
              type="button"
              aria-label="Ouvrir le menu"
              onClick={() => setDrawerOpen(true)}
              className="md:hidden inline-flex p-2.5 cursor-pointer bg-transparent border-0 text-ink-soft dark:text-dtext"
            >
              <IconMenu />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[200] bg-ink flex flex-col p-7 transition-transform duration-[450ms] ease-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center">
          <img src="/images/logo.png" alt="" width="287" height="169" className="h-[34px] w-auto" />
          <button type="button" aria-label="Fermer le menu" onClick={() => setDrawerOpen(false)} className="text-white bg-transparent border-0 cursor-pointer p-2.5 -m-2.5">
            <IconClose />
          </button>
        </div>
        <nav className="flex flex-col gap-6 mt-16">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setDrawerOpen(false)} className="font-display italic text-4xl text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <a href={BOOKING} target="_blank" rel="noopener noreferrer" className="btn btn-brass mt-10" onClick={() => setDrawerOpen(false)}>
          Réserver une séance
        </a>
      </div>
    </>
  );
}
