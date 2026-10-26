import React, { useState } from 'react';
import { X, Check, RotateCcw, Building2, User, Phone, MapPin, Clock } from 'lucide-react';
import { ClinicContactInfo, DoctorProfile } from '../types/clinic';
import { INITIAL_CLINIC_CONTACT, INITIAL_DOCTOR_PROFILE } from '../data/clinicData';

interface EditClinicInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  contactInfo: ClinicContactInfo;
  doctorProfile: DoctorProfile;
  onSave: (newContact: ClinicContactInfo, newDoctor: DoctorProfile) => void;
}

export const EditClinicInfoModal: React.FC<EditClinicInfoModalProps> = ({
  isOpen,
  onClose,
  contactInfo,
  doctorProfile,
  onSave
}) => {
  const [activeTab, setActiveTab] = useState<'doctor' | 'clinic'>('doctor');

  // Doctor Form State
  const [doctorName, setDoctorName] = useState(doctorProfile.name);
  const [doctorTitle, setDoctorTitle] = useState(doctorProfile.title);
  const [qualifications, setQualifications] = useState(doctorProfile.qualifications);
  const [specialization, setSpecialization] = useState(doctorProfile.specialization);
  const [experience, setExperience] = useState(doctorProfile.experience);
  const [consultationDays, setConsultationDays] = useState(doctorProfile.consultationDays);
  const [bio, setBio] = useState(doctorProfile.bio);

  // Clinic Form State
  const [addressLine1, setAddressLine1] = useState(contactInfo.addressLine1);
  const [addressLine2, setAddressLine2] = useState(contactInfo.addressLine2);
  const [city, setCity] = useState(contactInfo.city);
  const [phone, setPhone] = useState(contactInfo.phone);
  const [whatsapp, setWhatsapp] = useState(contactInfo.whatsapp);
  const [hoursWeekday, setHoursWeekday] = useState(contactInfo.hoursWeekday);
  const [hoursSunday, setHoursSunday] = useState(contactInfo.hoursSunday);
  const [mapAddressQuery, setMapAddressQuery] = useState(contactInfo.mapAddressQuery);

  if (!isOpen) return null;

  const handleSave = () => {
    const isDocPlaceholder = doctorName.includes('[') || doctorName.includes('Placeholder');
    const isClinicPlaceholder = addressLine1.includes('[') || phone.includes('98765 43210');

    const updatedContact: ClinicContactInfo = {
      ...contactInfo,
      addressLine1,
      addressLine2,
      city,
      phone,
      whatsapp,
      hoursWeekday,
      hoursSunday,
      mapAddressQuery,
      isPlaceholder: isClinicPlaceholder
    };

    const updatedDoctor: DoctorProfile = {
      ...doctorProfile,
      name: doctorName,
      title: doctorTitle,
      qualifications,
      specialization,
      experience,
      consultationDays,
      bio,
      isPlaceholder: isDocPlaceholder
    };

    onSave(updatedContact, updatedDoctor);
    onClose();
  };

  const handleResetToPlaceholders = () => {
    setDoctorName(INITIAL_DOCTOR_PROFILE.name);
    setDoctorTitle(INITIAL_DOCTOR_PROFILE.title);
    setQualifications(INITIAL_DOCTOR_PROFILE.qualifications);
    setSpecialization(INITIAL_DOCTOR_PROFILE.specialization);
    setExperience(INITIAL_DOCTOR_PROFILE.experience);
    setConsultationDays(INITIAL_DOCTOR_PROFILE.consultationDays);
    setBio(INITIAL_DOCTOR_PROFILE.bio);

    setAddressLine1(INITIAL_CLINIC_CONTACT.addressLine1);
    setAddressLine2(INITIAL_CLINIC_CONTACT.addressLine2);
    setCity(INITIAL_CLINIC_CONTACT.city);
    setPhone(INITIAL_CLINIC_CONTACT.phone);
    setWhatsapp(INITIAL_CLINIC_CONTACT.whatsapp);
    setHoursWeekday(INITIAL_CLINIC_CONTACT.hoursWeekday);
    setHoursSunday(INITIAL_CLINIC_CONTACT.hoursSunday);
    setMapAddressQuery(INITIAL_CLINIC_CONTACT.mapAddressQuery);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6 relative">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-800">
              Live Customizer &amp; Placeholders
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-1">
              Customize Clinic &amp; Doctor Information
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Enter your clinic's accurate details or keep the development placeholders.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl">
          <button
            type="button"
            onClick={() => setActiveTab('doctor')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'doctor'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Doctor Profile</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('clinic')}
            className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'clinic'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Clinic Contact &amp; Hours</span>
          </button>
        </div>

        {/* Tab 1: Doctor Profile */}
        {activeTab === 'doctor' && (
          <div className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Doctor Full Name
              </label>
              <input
                type="text"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                placeholder="e.g. Dr. Aditya Sharma"
                className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Qualifications
                </label>
                <input
                  type="text"
                  value={qualifications}
                  onChange={(e) => setQualifications(e.target.value)}
                  placeholder="e.g. BDS, MDS (Prosthodontics)"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Specialization
                </label>
                <input
                  type="text"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  placeholder="e.g. Cosmetic &amp; Restorative Dentistry"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Years of Experience
                </label>
                <input
                  type="text"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder="e.g. 12+ Years Clinical Practice"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Consultation Schedule
                </label>
                <input
                  type="text"
                  value={consultationDays}
                  onChange={(e) => setConsultationDays(e.target.value)}
                  placeholder="e.g. Mon – Sat: 10:00 AM – 8:00 PM"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Doctor Professional Bio
              </label>
              <textarea
                rows={3}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Enter doctor's patient philosophy..."
                className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 resize-none"
              />
            </div>
          </div>
        )}

        {/* Tab 2: Clinic Contact & Hours */}
        {activeTab === 'clinic' && (
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Phone Number (for Call Now)
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  WhatsApp Number (for direct chat)
                </label>
                <input
                  type="text"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Address Line 1
              </label>
              <input
                type="text"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
                placeholder="Shop No. / Building / Floor"
                className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Area / Landmark
                </label>
                <input
                  type="text"
                  value={addressLine2}
                  onChange={(e) => setAddressLine2(e.target.value)}
                  placeholder="Sector / Road / Market"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  City, State &amp; PIN
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. New Delhi, Delhi 110001, India"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Weekday Hours
                </label>
                <input
                  type="text"
                  value={hoursWeekday}
                  onChange={(e) => setHoursWeekday(e.target.value)}
                  placeholder="Monday – Saturday: 10:00 AM – 8:00 PM"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Sunday Hours
                </label>
                <input
                  type="text"
                  value={hoursSunday}
                  onChange={(e) => setHoursSunday(e.target.value)}
                  placeholder="Sunday: By Prior Appointment"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Google Maps Location Search Query
              </label>
              <input
                type="text"
                value={mapAddressQuery}
                onChange={(e) => setMapAddressQuery(e.target.value)}
                placeholder="e.g. Connaught Place New Delhi Dental"
                className="w-full px-3.5 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
              />
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
          <button
            type="button"
            onClick={handleResetToPlaceholders}
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 transition-colors cursor-pointer self-start sm:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Default Placeholders</span>
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs transition-colors cursor-pointer"
            >
              <Check className="w-4 h-4 text-teal-400" />
              <span>Save &amp; Update Website</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
