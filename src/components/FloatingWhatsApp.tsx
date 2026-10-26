import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { ClinicContactInfo } from '../types/clinic';

interface FloatingWhatsAppProps {
  contactInfo: ClinicContactInfo;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ contactInfo }) => {
  const [isHovered, setIsHovered] = useState(false);

  const rawWa = contactInfo.whatsapp.replace(/[^0-9]/g, '');
  const cleanWa = rawWa.startsWith('91') ? rawWa : `91${rawWa}`;
  const whatsappUrl = `https://wa.me/${cleanWa}?text=${encodeURIComponent(
    'Hello Daaton Ki Dukan! I would like to inquire about an appointment or dental treatment.'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on hover */}
      {isHovered && (
        <div className="hidden sm:block bg-slate-900 text-white text-xs font-medium py-1.5 px-3 rounded-xl shadow-lg border border-slate-800 animate-in fade-in slide-in-from-right-2 duration-150 whitespace-nowrap">
          Chat with Daaton Ki Dukan
        </div>
      )}

      {/* Floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 group"
        aria-label="Chat with Daaton Ki Dukan on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
