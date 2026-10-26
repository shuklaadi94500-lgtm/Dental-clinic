import React from 'react';
import { Quote, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SAMPLE_TESTIMONIALS } from '../data/clinicData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10 space-y-3">
          <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase">
            Patient Experience
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            What Patients Value About Our Care
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Patient trust is earned through gentle chairside manners, transparent communication, and consistent hygiene standards.
          </p>
        </div>

        {/* Development Disclosure Notice */}
        <div className="mb-8 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3.5">
          <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-900 leading-relaxed">
            <span className="font-semibold">Patient Review Transparency:</span> The review cards below are clearly marked sample placeholders provided for website demonstration. In adherence to medical ethical standards, Daaton Ki Dukan does not fabricate patient testimonials or inflated ratings. Verified feedback will be featured here upon patient consent.
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAMPLE_TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                    Sample Placeholder
                  </span>
                </div>

                <div className="text-xs font-semibold text-teal-800 mb-2">
                  Treatment: {item.treatment}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{item.feedback}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{item.patientName}</h3>
                  <p className="text-xs text-slate-400">{item.location}</p>
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                  <HeartHandshake className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
