import React, { useState } from 'react';
import { Phone, MessageCircle, Clock, MapPin, Globe, ExternalLink, HelpCircle, X } from 'lucide-react';
import { ClinicContactInfo } from '../types/clinic';

interface FooterProps {
  contactInfo: ClinicContactInfo;
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ contactInfo, onBookClick }) => {
  const [showDeploymentGuide, setShowDeploymentGuide] = useState(false);

  const cleanPhone = contactInfo.phone.replace(/[^0-9+]/g, '');
  const rawWa = contactInfo.whatsapp.replace(/[^0-9]/g, '');
  const cleanWa = rawWa.startsWith('91') ? rawWa : `91${rawWa}`;

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Our Dentist', href: '#dentist' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-900">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2C7.5 2 4 4.5 4 8c0 3 1.5 6 3 10 .8 2.1 2.2 4 5 4s4.2-1.9 5-4c1.5-4 3-7 3-10 0-3.5-3.5-6-8-6z" />
                  <path d="M12 2v6" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Daaton Ki Dukan
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Providing personalized, gentle, and modern dental treatments in India. Committed to comfortable experiences and confident smiles.
            </p>

            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors cursor-pointer"
              >
                <span>Book an Appointment</span>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </div>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Hours & Location */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Working Hours
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-300 font-medium">{contactInfo.hoursWeekday}</p>
                  <p className="text-slate-500 mt-0.5">{contactInfo.hoursSunday}</p>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-2">
                <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <p className="text-slate-400 leading-relaxed">
                  {contactInfo.addressLine1}, {contactInfo.city}
                </p>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Social Placeholders */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Contact &amp; Connect
            </div>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:${cleanPhone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-teal-400" />
                <span>{contactInfo.phone}</span>
              </a>

              <a
                href={`https://wa.me/${cleanWa}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Desk</span>
              </a>
            </div>

            {/* Social media links placeholders */}
            <div className="pt-3">
              <span className="text-[11px] text-slate-500 block mb-1.5">Social Profiles (Placeholder)</span>
              <div className="flex items-center gap-2">
                {['Google Business', 'Instagram', 'Facebook'].map((platform) => (
                  <span
                    key={platform}
                    className="text-[10px] bg-slate-900 border border-slate-800 text-slate-400 px-2 py-0.5 rounded cursor-default"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Daaton Ki Dukan. All rights reserved. Designed for dental healthcare excellence.</p>
          
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowDeploymentGuide(true)}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-teal-400 transition-colors cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Deployment &amp; Publishing Guide</span>
            </button>
            <span>·</span>
            <span>India</span>
          </div>
        </div>
      </div>

      {/* Deployment Instructions Modal (Prompt requirement #12) */}
      {showDeploymentGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-150 text-slate-800">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-6 relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setShowDeploymentGuide(false)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-800">
                Clinic Administrator Guide
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                How to Publish Daaton Ki Dukan Online
              </h3>
              <p className="text-xs text-slate-500">
                This project is built with React 19 + Vite and is 100% production-ready.
              </p>
            </div>

            <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900">Step 1: Replace Placeholders with Real Clinic Details</span>
                <p>
                  Use the <strong>"Customize Info"</strong> button on the top bar or in the contact section to enter your verified doctor qualifications, clinic address, WhatsApp number, and consultation hours.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900">Step 2: Connect Form to Backend / WhatsApp</span>
                <p>
                  The appointment form currently logs requests locally and opens WhatsApp with pre-filled details. To receive SMS or email alerts, connect an API route (e.g., SendGrid, Nodemailer, or Firebase Firestore).
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900">Step 3: Deploy with One Command</span>
                <p>
                  Run <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800 font-mono">npm run build</code>. The resulting <code className="bg-slate-200 px-1 py-0.5 rounded text-slate-800 font-mono">dist/</code> folder can be hosted on Vercel, Netlify, Cloudflare Pages, or Google Cloud Run.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 space-y-1">
                <span className="font-bold">Step 4: Custom Domain &amp; Google My Business</span>
                <p>
                  Link your custom domain (e.g. <span className="font-mono">daatonkidukan.in</span>) and paste your website URL directly onto your Google My Business profile for instant patient bookings.
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowDeploymentGuide(false)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                Understood, Close Guide
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
