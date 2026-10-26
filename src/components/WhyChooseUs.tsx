import React from 'react';
import { UserCheck, MessageSquare, Sparkles, Microscope, CalendarCheck2 } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../data/clinicData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-teal-700" />;
      case 'MessageSquareCheck':
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-teal-700" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-teal-700" />;
      case 'Microscope':
        return <Microscope className="w-5 h-5 text-teal-700" />;
      case 'CalendarCheck2':
        return <CalendarCheck2 className="w-5 h-5 text-teal-700" />;
      default:
        return <UserCheck className="w-5 h-5 text-teal-700" />;
    }
  };

  return (
    <section id="why-us" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase">
            Standards &amp; Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Why Choose Daaton Ki Dukan?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We focus on honest dentistry, patient comfort, and reliable clinical outcomes. Here are the core principles that define how we practice.
          </p>
        </div>

        {/* 5 Verified Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_POINTS.map((item, index) => (
            <div
              key={item.id}
              className={`p-7 rounded-2xl border border-slate-200/90 transition-all duration-200 hover:border-slate-300 hover:shadow-xs ${
                index === 0
                  ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-br from-teal-50/50 to-white'
                  : 'bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50/80 border border-teal-100 flex items-center justify-center">
                  {getIcon(item.icon)}
                </div>
                <span className="text-xs font-mono text-slate-400">0{index + 1}</span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

          {/* Clinical Commitment Card */}
          <div className="p-7 rounded-2xl border border-teal-200/90 bg-teal-900 text-white flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-300 mb-2">
                Clinical Transparency
              </div>
              <h3 className="text-lg font-bold mb-2">Honest Patient Guidance</h3>
              <p className="text-sm text-teal-100 leading-relaxed">
                We believe an informed patient is a confident patient. You will always receive clear explanations, transparent pricing considerations, and zero unneeded treatments.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-teal-800 text-xs text-teal-200">
              Verified clinical standard · Daaton Ki Dukan
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
