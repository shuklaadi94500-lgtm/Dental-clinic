import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, ExternalLink, Edit3 } from 'lucide-react';
import { ClinicContactInfo } from '../types/clinic';

interface ContactSectionProps {
  contactInfo: ClinicContactInfo;
  onEditContact: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  contactInfo,
  onEditContact
}) => {
  const cleanPhone = contactInfo.phone.replace(/[^0-9+]/g, '');
  const rawWa = contactInfo.whatsapp.replace(/[^0-9]/g, '');
  const cleanWa = rawWa.startsWith('91') ? rawWa : `91${rawWa}`;

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    contactInfo.mapAddressQuery || `${contactInfo.name} ${contactInfo.city}`
  )}`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase">
              Location &amp; Communication
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Contact Daaton Ki Dukan
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Have a dental query or need directions to our clinic? Reach out via phone, WhatsApp, or drop by during consultation hours.
            </p>
          </div>

          <button
            onClick={onEditContact}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer self-start sm:self-auto"
            title="Edit contact placeholders"
          >
            <Edit3 className="w-3.5 h-3.5 text-teal-700" />
            <span>Customize Contact Placeholders</span>
          </button>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Card 1: Clinic Address */}
          <div className="p-6 rounded-2xl bg-sky-50/40 border border-sky-100/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Clinic Address
              </h3>
              <p className="text-sm font-semibold text-slate-900 leading-snug">
                {contactInfo.addressLine1}
              </p>
              <p className="text-xs text-slate-600 mt-1">
                {contactInfo.addressLine2}
              </p>
              <p className="text-xs font-medium text-slate-800 mt-0.5">
                {contactInfo.city}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-sky-100/60">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-950 transition-colors"
              >
                <span>Get Directions</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 2: Phone Number */}
          <div className="p-6 rounded-2xl bg-sky-50/40 border border-sky-100/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Phone Number
              </h3>
              <p className="text-base font-bold text-slate-900">
                {contactInfo.phone}
              </p>
              <p className="text-xs text-slate-600 mt-1">
                Direct front desk inquiries &amp; appointment assistance.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-sky-100/60">
              <a
                href={`tel:${cleanPhone}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-800 hover:text-sky-950 transition-colors"
              >
                <span>Call Now</span>
                <Phone className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 3: WhatsApp Number */}
          <div className="p-6 rounded-2xl bg-sky-50/40 border border-sky-100/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-1">
                WhatsApp Chat
              </h3>
              <p className="text-base font-bold text-slate-900">
                {contactInfo.whatsapp}
              </p>
              <p className="text-xs text-slate-600 mt-1">
                Instant messaging, appointment queries &amp; location shares.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-sky-100/60">
              <a
                href={`https://wa.me/${cleanWa}?text=${encodeURIComponent('Hello Daaton Ki Dukan! I have a question about dental treatments.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
              >
                <span>Chat on WhatsApp</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Card 4: Opening Hours */}
          <div className="p-6 rounded-2xl bg-sky-50/40 border border-sky-100/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Opening Hours
              </h3>
              <p className="text-xs font-semibold text-slate-800">
                {contactInfo.hoursWeekday}
              </p>
              <p className="text-xs text-slate-600 mt-1.5">
                {contactInfo.hoursSunday}
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-sky-100/60 text-[11px] text-slate-500">
              Emergency assistance available on prior call.
            </div>
          </div>
        </div>

        {/* Action Buttons Row & Map Container */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                Direct Patient Actions
              </div>
              <h3 className="text-2xl font-bold tracking-tight">
                Connect With Our Clinic Desk
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Click any of the direct action channels below to immediately ring our desk, launch a WhatsApp conversation, or open Google Maps navigation.
              </p>

              {/* Functional CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:${cleanPhone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-xl transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now</span>
                </a>

                <a
                  href={`https://wa.me/${cleanWa}?text=${encodeURIComponent('Hello Daaton Ki Dukan! I would like to inquire about dental services.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-colors cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-teal-400" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Google Maps Visual Container */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-700 bg-slate-800/90 p-6 flex flex-col justify-between min-h-[220px]">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold uppercase">
                      <MapPin className="w-4 h-4" />
                      <span>Google Maps Location</span>
                    </div>
                    <p className="text-base font-bold text-white mt-1">
                      Daaton Ki Dukan
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">
                      {contactInfo.addressLine1}, {contactInfo.city}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono bg-slate-700 text-slate-300 px-2 py-1 rounded">
                    Map Preview
                  </span>
                </div>

                <div className="my-4 py-6 border-y border-slate-700/80 flex items-center justify-center text-center">
                  <div className="space-y-1">
                    <p className="text-xs text-slate-400">
                      Coordinates linked to: <span className="text-white font-mono">{contactInfo.mapAddressQuery}</span>
                    </p>
                    <p className="text-[11px] text-teal-300">
                      Click below to open high-precision driving or walking navigation.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Ready for GPS routing</span>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-300 hover:text-white transition-colors"
                  >
                    <span>Launch in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
