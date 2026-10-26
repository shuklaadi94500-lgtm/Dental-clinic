import React from 'react';
import { X, CheckCircle2, Clock, Calendar, ArrowRight, Shield } from 'lucide-react';
import { DentalService } from '../types/clinic';

interface ServiceDetailModalProps {
  service: DentalService | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-xl max-h-[90vh] overflow-y-auto space-y-6 relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 space-y-1.5">
          <div className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
            {service.category}
          </div>
          <h3 className="text-2xl font-bold text-slate-900">
            {service.title}
          </h3>
          <div className="flex items-center gap-3 text-xs text-slate-500 pt-1">
            <span className="inline-flex items-center gap-1 font-mono">
              <Clock className="w-3.5 h-3.5 text-teal-600" />
              <span>Est. Duration: {service.durationEstimate}</span>
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-teal-600" />
              <span>Hospital-Grade Sterilization</span>
            </span>
          </div>
        </div>

        {/* Overview */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Procedure Overview
          </h4>
          <p className="text-sm text-slate-700 leading-relaxed bg-sky-50/50 p-4 rounded-xl border border-sky-100">
            {service.overview}
          </p>
        </div>

        {/* Clinical Benefits */}
        <div className="space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Key Clinical Benefits
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Candidates */}
        <div className="space-y-1.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
          <h4 className="text-xs font-semibold text-slate-800">
            When is this treatment recommended?
          </h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            {service.recommendedFor}
          </p>
        </div>

        {/* Modal Footer Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-slate-100">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Back to Treatments
          </button>
          <button
            type="button"
            onClick={() => {
              onClose();
              onBookService(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-teal-400" />
            <span>Book This Treatment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
