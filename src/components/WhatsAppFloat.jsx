import { WHATSAPP } from '../constants';
import { IconWhatsApp } from './Icons';

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous écrire sur WhatsApp"
      className="fixed right-4.5 bottom-4.5 sm:right-6.5 sm:bottom-6.5 z-[90] w-[50px] h-[50px] sm:w-14 sm:h-14 rounded-full bg-[#25d366] flex items-center justify-center shadow-[0_10px_26px_rgba(0,0,0,0.28)] transition-transform hover:scale-[1.08]"
    >
      <IconWhatsApp className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] fill-white" />
    </a>
  );
}
