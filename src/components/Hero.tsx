import React, { useState } from 'react';
import { Calendar, ArrowRight, ShieldCheck, Sparkles, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  const [imgError, setImgError] = useState(false);
  const heroImageSrc = '/src/assets/images/hero_dental_clinic_1792997198027.jpg';

  return (
    <section id="home" className="relative bg-gradient-to-b from-sky-50/70 via-white to-white pt-8 pb-16 md:pt-16 md:pb-24 border-b border-slate-100 overflow-hidden">
      {/* Subtle background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-100/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Subheading, CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Unboxed category tag (zero-pill discipline) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-teal-800 uppercase">
              <span>Modern Dental Practice</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Gentle &amp; Precise Dentistry</span>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-slate-900 leading-[1.15] tracking-tight [text-wrap:balance]">
              Your Smile Deserves the Best Care.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              At Daaton Ki Dukan, we combine modern dental care, a gentle approach, and personalized treatments to help you smile with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
              <button
                onClick={onBookClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-[0.99] rounded-xl shadow-sm transition-all duration-150 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-200 active:scale-[0.99] rounded-xl transition-all duration-150 cursor-pointer"
              >
                <span>Explore Our Treatments</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Trust Section displaying strictly the verified pillars without invented numbers */}
            <div className="w-full pt-6 mt-4 border-t border-slate-200/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 shrink-0 mt-0.5">
                    <HeartHandshake className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-slate-900">Patient-Focused Care</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Attentive consultations tailored to you</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-700 shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-slate-900">Modern Dental Treatments</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Precision equipment and gentle techniques</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-slate-900">Comfortable Experience</h2>
                    <p className="text-xs text-slate-500 mt-0.5">Relaxed, clean, and anxiety-free setting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero High-Quality Clinical Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-md bg-white">
              {!imgError ? (
                <img
                  src={heroImageSrc}
                  alt="Modern Daaton Ki Dukan dental examination operatory and consultation room"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover hover:scale-[1.01] transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-80 sm:h-96 lg:h-[460px] bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 flex flex-col items-center justify-center p-8 text-white text-center">
                  <Sparkles className="w-12 h-12 text-teal-400 mb-3" />
                  <span className="text-lg font-bold">Daaton Ki Dukan Dental Suite</span>
                  <p className="text-xs text-slate-300 mt-1 max-w-xs">
                    State-of-the-art operatory equipped for gentle, comfortable patient care.
                  </p>
                </div>
              )}

              {/* Floating quiet credential notice */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-slate-200/80 shadow-xs flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-900">Daaton Ki Dukan Operatory</p>
                  <p className="text-[11px] text-slate-500">Hygiene-first clinical dental suite</p>
                </div>
                <span className="text-[11px] font-medium text-teal-700 bg-teal-50 px-2 py-1 rounded">
                  Sterilized Environment
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
