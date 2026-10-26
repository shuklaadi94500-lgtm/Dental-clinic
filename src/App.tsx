import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { DentistProfile } from './components/DentistProfile';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { EditClinicInfoModal } from './components/EditClinicInfoModal';

import { DentalService, DoctorProfile, ClinicContactInfo } from './types/clinic';
import { INITIAL_CLINIC_CONTACT, INITIAL_DOCTOR_PROFILE } from './data/clinicData';

export default function App() {
  const [contactInfo, setContactInfo] = useState<ClinicContactInfo>(() => {
    const saved = localStorage.getItem('ddk_clinic_contact');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        console.error('Failed to parse saved contact info:', err);
      }
    }
    return INITIAL_CLINIC_CONTACT;
  });

  const [doctorProfile, setDoctorProfile] = useState<DoctorProfile>(() => {
    const saved = localStorage.getItem('ddk_doctor_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (err) {
        console.error('Failed to parse saved doctor profile:', err);
      }
    }
    return INITIAL_DOCTOR_PROFILE;
  });

  const [selectedServiceForModal, setSelectedServiceForModal] = useState<DentalService | null>(null);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookFromHero = () => {
    scrollToSection('appointment');
  };

  const handleExploreFromHero = () => {
    scrollToSection('services');
  };

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setSelectedServiceForBooking(serviceTitle);
    scrollToSection('appointment');
  };

  const handleOpenServiceModal = (service: DentalService) => {
    setSelectedServiceForModal(service);
  };

  const handleSaveCustomDetails = (newContact: ClinicContactInfo, newDoctor: DoctorProfile) => {
    setContactInfo(newContact);
    setDoctorProfile(newDoctor);
    localStorage.setItem('ddk_clinic_contact', JSON.stringify(newContact));
    localStorage.setItem('ddk_doctor_profile', JSON.stringify(newDoctor));
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* 1. Sticky Navigation Bar */}
      <Navbar
        contactInfo={contactInfo}
        onBookClick={handleBookFromHero}
        onEditDetailsClick={() => setIsEditModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Homepage Hero Section */}
        <Hero
          onBookClick={handleBookFromHero}
          onExploreClick={handleExploreFromHero}
        />

        {/* 3. About Our Clinic Section */}
        <AboutSection
          onLearnMoreClick={() => scrollToSection('services')}
        />

        {/* 4. Dental Services Section (All 10 services) */}
        <ServicesSection
          onSelectServiceForBooking={handleSelectServiceForBooking}
          onOpenServiceModal={handleOpenServiceModal}
        />

        {/* 5. Why Choose Daaton Ki Dukan? */}
        <WhyChooseUs />

        {/* 6. Meet Our Dentist Profile Section */}
        <DentistProfile
          doctor={doctorProfile}
          onEditDoctor={() => setIsEditModalOpen(true)}
          onBookAppointment={handleBookFromHero}
        />

        {/* 7. Patient Testimonials */}
        <TestimonialsSection />

        {/* 8. Appointment Booking Section */}
        <AppointmentSection
          selectedServicePreFill={selectedServiceForBooking}
          contactInfo={contactInfo}
        />

        {/* 9. Contact Section */}
        <ContactSection
          contactInfo={contactInfo}
          onEditContact={() => setIsEditModalOpen(true)}
        />
      </main>

      {/* 10. Footer with deployment guide */}
      <Footer
        contactInfo={contactInfo}
        onBookClick={handleBookFromHero}
      />

      {/* 11. Floating WhatsApp Contact Button */}
      <FloatingWhatsApp contactInfo={contactInfo} />

      {/* Modals */}
      <ServiceDetailModal
        service={selectedServiceForModal}
        onClose={() => setSelectedServiceForModal(null)}
        onBookService={handleSelectServiceForBooking}
      />

      <EditClinicInfoModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        contactInfo={contactInfo}
        doctorProfile={doctorProfile}
        onSave={handleSaveCustomDetails}
      />
    </div>
  );
}
