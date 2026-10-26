import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Clock, MapPin } from 'lucide-react';
import { ClinicContactInfo } from '../types/clinic';

interface NavbarProps {
  contactInfo: ClinicContactInfo;
  onBookClick: () => void;
  onEditDetailsClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  contactInfo,
  onBookClick,
  onEditDetailsClick
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Our Dentist', href: '#dentist' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      {/* Top utility notification bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span>{contactInfo.hoursWeekday}</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>{contactInfo.city}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-1.5 font-medium text-teal-300 hover:text-teal-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{contactInfo.phone}</span>
            </a>
            <button
              onClick={onEditDetailsClick}
              className="text-[11px] text-slate-400 hover:text-slate-200 underline decoration-slate-600 underline-offset-2 transition-colors cursor-pointer"
              title="Edit clinic placeholder information"
            >
              Customize Info
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar (Contract: 3 zones separated by gap-8) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element brand wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 group"
        >
          {/* Subtle dental emblem */}
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-500 to-sky-700 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform duration-200">
            <svg
              className="w-5 h-5"
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
          <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors">
            Daaton Ki Dukan
          </span>
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-teal-700 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-teal-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onBookClick}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-[0.98] rounded-xl shadow-xs transition-all duration-150 whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-teal-400" />
            <span>Book Appointment</span>
          </button>

          {/* Mobile hamburger menu */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drop-down */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-6 py-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-slate-700 hover:text-teal-700 py-1.5 border-b border-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors"
              >
                <Calendar className="w-4 h-4 text-teal-400" />
                <span>Book Appointment</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
