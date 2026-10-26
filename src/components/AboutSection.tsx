import React, { useState } from 'react';
import { CheckCircle2, Shield, HeartPulse, Sparkles } from 'lucide-react';

interface AboutSectionProps {
  onLearnMoreClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMoreClick }) => {
  const [imgError, setImgError] = useState(false);
  const aboutImageSrc = '/src/assets/images/about_dental_care_1792997199760.jpg';

  const principles = [
    {
      title: 'Comfort-First Approach',
      desc: 'Gentle handling, clear step-by-step guidance, and effective pain management throughout every procedure.',
      icon: HeartPulse
    },
    {
      title: 'Strict Sterilization Protocols',
      desc: 'Hospital-grade autoclaving, sealed instrument pouches, and rigorous infection control for every patient.',
      icon: Shield
    },
    {
      title: 'Transparent Diagnosis',
      desc: 'We present clear visual assessments and discuss treatment choices thoroughly before initiating any procedure.',
      icon: CheckCircle2
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Realistic Dental Clinic Photograph */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-md bg-white">
              {!imgError ? (
                <img
                  src={aboutImageSrc}
                  alt="Doctor and patient consultation at Daaton Ki Dukan dental clinic"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-80 sm:h-96 lg:h-[480px] object-cover"
                />
              ) : (
                <div className="w-full h-80 sm:h-96 lg:h-[480px] bg-slate-100 flex flex-col items-center justify-center p-8 text-slate-700 text-center">
                  <Sparkles className="w-10 h-10 text-teal-600 mb-2" />
                  <p className="font-semibold">Gentle Patient Consultation</p>
                  <p className="text-xs text-slate-500 mt-1">
                    Personalized care and transparent treatment discussions at Daaton Ki Dukan.
                  </p>
                </div>
              )}

              {/* Accent badge overlay */}
              <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-xs text-white text-xs px-3 py-1.5 rounded-lg font-medium tracking-wide">
                Patient-Centric Dental Care
              </div>
            </div>
          </div>

          {/* Right Column: Headline, Description, Core Commitments */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase">
              About Daaton Ki Dukan
            </div>

            {/* Headline as requested */}
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight [text-wrap:balance]">
              Healthy Teeth. Confident Smiles.
            </h2>

            {/* Description as requested */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Our goal is to make dental care comfortable, accessible, and personalized. Whether you need a routine check-up or advanced dental treatment, our team is here to help you maintain a healthy, confident smile.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              At our clinic, we recognize that visiting a dentist can sometimes cause apprehension. That is why every member of our team is dedicated to listening patiently, explaining procedures with clarity, and prioritizing your physical comfort at every stage.
            </p>

            {/* Key commitments grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {principles.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.title} className="p-4 rounded-xl bg-sky-50/60 border border-sky-100">
                    <IconComponent className="w-5 h-5 text-teal-700 mb-2" />
                    <h3 className="text-sm font-semibold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                onClick={onLearnMoreClick}
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-teal-950 transition-colors group cursor-pointer"
              >
                <span>View All Dental Procedures &amp; Care Details</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
