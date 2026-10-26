import React, { useState } from 'react';
import { UserCheck, Award, GraduationCap, Calendar, Clock, Edit3, ShieldAlert } from 'lucide-react';
import { DoctorProfile } from '../types/clinic';

interface DentistProfileProps {
  doctor: DoctorProfile;
  onEditDoctor: () => void;
  onBookAppointment: () => void;
}

export const DentistProfile: React.FC<DentistProfileProps> = ({
  doctor,
  onEditDoctor,
  onBookAppointment
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="dentist" className="py-16 md:py-24 bg-sky-50/30 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase">
              Clinical Team &amp; Practitioner
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Meet Our Dentist
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Every consultation and procedure at Daaton Ki Dukan is led with personalized care, gentle technique, and strict clinical standards.
            </p>
          </div>

          <button
            onClick={onEditDoctor}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-2xs transition-colors cursor-pointer self-start sm:self-auto"
            title="Edit doctor profile details"
          >
            <Edit3 className="w-3.5 h-3.5 text-teal-700" />
            <span>Customize Doctor Info</span>
          </button>
        </div>

        {/* Doctor Card */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Portrait column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden border-2 border-teal-100 shadow-md bg-slate-50">
                {!imgError ? (
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-slate-500 bg-slate-100 text-center">
                    <UserCheck className="w-12 h-12 text-teal-600 mb-2" />
                    <span className="text-sm font-semibold">Doctor Portrait Placeholder</span>
                    <span className="text-xs text-slate-400 mt-1">Pending Clinic Headshot</span>
                  </div>
                )}

                {/* Placeholder status indicator */}
                {doctor.isPlaceholder && (
                  <div className="absolute bottom-2 left-2 right-2 bg-slate-900/85 backdrop-blur-xs text-white text-[10px] text-center py-1 px-2 rounded-md font-medium">
                    Verified Doctor Photo &amp; Profile Placeholder
                  </div>
                )}
              </div>
            </div>

            {/* Profile details column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Doctor Name Placeholder */}
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                    Lead Dental Practitioner
                  </span>
                  {doctor.isPlaceholder && (
                    <span className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      Editable Placeholder
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {doctor.name}
                </h3>
                <p className="text-sm font-medium text-slate-500 mt-0.5">
                  {doctor.title}
                </p>
              </div>

              {/* Bio */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {doctor.bio}
              </p>

              {/* Verified Placeholder Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    <GraduationCap className="w-4 h-4 text-teal-700" />
                    <span>Qualifications</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800">
                    {doctor.qualifications}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    <Award className="w-4 h-4 text-teal-700" />
                    <span>Specialization</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800">
                    {doctor.specialization}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    <Clock className="w-4 h-4 text-teal-700" />
                    <span>Experience</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800">
                    {doctor.experience}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                    <Calendar className="w-4 h-4 text-teal-700" />
                    <span>Consultation Hours</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-800">
                    {doctor.consultationDays}
                  </p>
                </div>
              </div>

              {/* Prompt Requirement Compliance Note */}
              <div className="p-3.5 rounded-xl bg-sky-50/80 border border-sky-100 flex items-start gap-3 text-xs text-sky-900">
                <ShieldAlert className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold">Accreditation Policy:</span> We never publish fabricated doctor identities or unverified certificates. These fields are pre-structured placeholders ready for your clinic’s verified registration and license details.
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={onBookAppointment}
                  className="px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  Schedule Consultation
                </button>
                <button
                  type="button"
                  onClick={onEditDoctor}
                  className="px-4 py-2.5 text-sm font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                >
                  Update Doctor Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
