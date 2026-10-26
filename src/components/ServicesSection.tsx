import React, { useState } from 'react';
import { 
  Stethoscope, 
  Sparkles, 
  ShieldCheck, 
  HeartPulse, 
  Sun, 
  Smile, 
  Anchor, 
  Activity, 
  Layers, 
  Baby, 
  Calendar, 
  Info,
  Clock
} from 'lucide-react';
import { DentalService } from '../types/clinic';
import { CLINIC_SERVICES } from '../data/clinicData';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
  onOpenServiceModal: (service: DentalService) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
  onOpenServiceModal
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Services' },
    { id: 'preventive', label: 'Preventive Care' },
    { id: 'restorative', label: 'Restorative' },
    { id: 'cosmetic', label: 'Aesthetics & Ortho' },
    { id: 'specialized', label: 'Specialized' }
  ];

  const getFilteredServices = () => {
    if (selectedFilter === 'all') return CLINIC_SERVICES;
    if (selectedFilter === 'preventive') {
      return CLINIC_SERVICES.filter(s => s.id === 'general-dentistry' || s.id === 'teeth-cleaning');
    }
    if (selectedFilter === 'restorative') {
      return CLINIC_SERVICES.filter(s => s.id === 'tooth-filling' || s.id === 'root-canal' || s.id === 'crowns-bridges');
    }
    if (selectedFilter === 'cosmetic') {
      return CLINIC_SERVICES.filter(s => s.id === 'teeth-whitening' || s.id === 'braces-aligners');
    }
    if (selectedFilter === 'specialized') {
      return CLINIC_SERVICES.filter(s => s.id === 'dental-implants' || s.id === 'tooth-extraction' || s.id === 'pediatric-dentistry');
    }
    return CLINIC_SERVICES;
  };

  const renderServiceIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-teal-700' };
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'HeartPulse': return <HeartPulse {...props} />;
      case 'Sun': return <Sun {...props} />;
      case 'Smile': return <Smile {...props} />;
      case 'Anchor': return <Anchor {...props} />;
      case 'Activity': return <Activity {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Baby': return <Baby {...props} />;
      default: return <Stethoscope {...props} />;
    }
  };

  const filteredList = getFilteredServices();

  return (
    <section id="services" className="py-16 md:py-24 bg-sky-50/40 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase">
              Dental Treatments &amp; Procedures
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Comprehensive Dental Care for the Whole Family
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              From routine maintenance to advanced restorative and aesthetic procedures, every treatment at Daaton Ki Dukan is performed with gentle care and modern dental protocols.
            </p>
          </div>

          {/* Interactive filter control (zero-pill discipline: quiet segmented control with click handlers) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200/90 shadow-2xs">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  selectedFilter === tab.id
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-teal-200 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Top card row: Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {renderServiceIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{service.durationEstimate}</span>
                  </div>
                </div>

                {/* Editorial index & category text */}
                <div className="text-xs text-slate-400 mb-1 font-medium">
                  {String(index + 1).padStart(2, '0')} · {service.category}
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-900 transition-colors">
                  {service.title}
                </h3>

                {/* Service Short Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.shortDesc}
                </p>
              </div>

              {/* Card Actions: Book Appointment & Learn More */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => onOpenServiceModal(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-teal-800 transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Learn More</span>
                </button>

                <button
                  type="button"
                  onClick={() => onSelectServiceForBooking(service.title)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-teal-800 hover:text-white bg-teal-50 hover:bg-teal-700 rounded-lg transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance note */}
        <div className="mt-12 text-center text-xs text-slate-500">
          Not sure which procedure is appropriate for your symptoms? Our dental team conducts an initial diagnostic check-up before any treatment.
        </div>
      </div>
    </section>
  );
};
