import { useState } from 'react';
import { IconPin } from './Icons';
import { MAPS_EMBED } from '../constants';

export default function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        className="w-full h-full min-h-[340px] border-0 [filter:saturate(0.9)] dark:[filter:saturate(0.7)_invert(0.92)_hue-rotate(180deg)_brightness(0.95)]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={MAPS_EMBED}
        title="Carte vers Lavish Shape & Glow Med Spa"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label="Charger la carte interactive"
      className="w-full h-full min-h-[340px] flex flex-col items-center justify-center gap-2.5 cursor-pointer border-0 bg-paper-deep dark:bg-dbg-alt text-stone dark:text-dmuted text-[13px] font-semibold tracking-wide uppercase hover:text-brass-deep dark:hover:text-brass-light transition-colors"
      style={{
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(15,30,34,0.07) 0, rgba(15,30,34,0.07) 1px, transparent 1px, transparent 16px)',
      }}
    >
      <IconPin className="w-6.5 h-6.5 stroke-brass-deep dark:stroke-brass-light" />
      Voir la carte
    </button>
  );
}
