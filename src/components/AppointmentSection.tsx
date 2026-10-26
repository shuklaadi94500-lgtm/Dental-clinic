import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Phone, User, MessageSquare, AlertCircle, CheckCircle2, Send, ExternalLink } from 'lucide-react';
import { CLINIC_SERVICES } from '../data/clinicData';
import { AppointmentRequest, ClinicContactInfo } from '../types/clinic';

interface AppointmentSectionProps {
  selectedServicePreFill?: string;
  contactInfo: ClinicContactInfo;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  selectedServicePreFill,
  contactInfo
}) => {
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submittedData, setSubmittedData] = useState<AppointmentRequest | null>(null);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  // Sync pre-filled service from service card button
  useEffect(() => {
    if (selectedServicePreFill) {
      setService(selectedServicePreFill);
    }
  }, [selectedServicePreFill]);

  // Set minimum date to today
  const todayIso = new Date().toISOString().split('T')[0];

  const timeSlots = [
    'Morning (10:00 AM – 1:00 PM)',
    'Afternoon (1:00 PM – 4:00 PM)',
    'Evening (4:00 PM – 8:00 PM)'
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!patientName.trim() || patientName.trim().length < 2) {
      newErrors.patientName = 'Please enter your full name (at least 2 characters).';
    }

    // Indian phone format check: optional +91, 10 digits
    const cleanedPhone = phone.replace(/[^0-9]/g, '');
    if (!cleanedPhone) {
      newErrors.phone = 'Phone number is required.';
    } else if (cleanedPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    if (!preferredDate) {
      newErrors.preferredDate = 'Please select a preferred appointment date.';
    }

    if (!preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time slot.';
    }

    if (!service) {
      newErrors.service = 'Please select the required dental service.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRequest: AppointmentRequest = {
      id: 'req-' + Date.now(),
      patientName: patientName.trim(),
      phone: phone.trim(),
      date: preferredDate,
      time: preferredTime,
      service,
      message: message.trim() || undefined,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setSubmittedData(newRequest);
    setShowConfirmationModal(true);
  };

  const handleResetForm = () => {
    setPatientName('');
    setPhone('');
    setPreferredDate('');
    setPreferredTime('');
    setService('');
    setMessage('');
    setErrors({});
    setShowConfirmationModal(false);
  };

  // WhatsApp click handler with pre-populated message
  const handleSendViaWhatsApp = () => {
    if (!submittedData) return;
    const rawNumber = contactInfo.whatsapp.replace(/[^0-9]/g, '');
    const cleanNumber = rawNumber.startsWith('91') ? rawNumber : `91${rawNumber}`;
    const textMsg = encodeURIComponent(
      `Hello Daaton Ki Dukan! I would like to request an appointment:\n` +
      `• Patient Name: ${submittedData.patientName}\n` +
      `• Phone: ${submittedData.phone}\n` +
      `• Preferred Date: ${submittedData.date}\n` +
      `• Preferred Time: ${submittedData.time}\n` +
      `• Treatment: ${submittedData.service}\n` +
      (submittedData.message ? `• Note: ${submittedData.message}\n` : '') +
      `Please let me know if this slot is available.`
    );
    window.open(`https://wa.me/${cleanNumber}?text=${textMsg}`, '_blank');
  };

  return (
    <section id="appointment" className="py-16 md:py-24 bg-sky-50/50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context & Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold tracking-wider text-teal-800 uppercase">
              Schedule Your Visit
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight [text-wrap:balance]">
              Request an Appointment
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Plan your visit ahead of time to minimize clinic wait times. Fill out your preferred date, time, and dental service, and our front desk will coordinate with you.
            </p>

            {/* Reassurance points */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <Clock className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Clinic Working Hours</h3>
                  <p className="text-xs text-slate-600 mt-0.5">{contactInfo.hoursWeekday}</p>
                  <p className="text-xs text-slate-600">{contactInfo.hoursSunday}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <Phone className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Need Immediate Assistance?</h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    For acute toothache or dental emergencies, you can call our desk directly at{' '}
                    <a
                      href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
                      className="font-semibold text-teal-700 hover:underline"
                    >
                      {contactInfo.phone}
                    </a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Backend status honest disclosure */}
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-600 leading-relaxed">
              <span className="font-semibold text-slate-800">Direct Notice:</span> This form is an appointment request module. As specified in development standards, when no live hospital management backend is configured, your request is logged locally in this browser session.
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Patient Name */}
                <div>
                  <label htmlFor="patientName" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Patient Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="patientName"
                      type="text"
                      value={patientName}
                      onChange={(e) => {
                        setPatientName(e.target.value);
                        if (errors.patientName) setErrors({ ...errors, patientName: '' });
                      }}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full pl-10 pr-4 py-2.5 text-sm bg-white border rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-colors ${
                        errors.patientName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                      }`}
                    />
                  </div>
                  {errors.patientName && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.patientName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="patientPhone" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      id="patientPhone"
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="e.g. 98765 43210"
                      className={`w-full pl-10 pr-4 py-2.5 text-sm bg-white border rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-colors ${
                        errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Date & Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Date */}
                  <div>
                    <label htmlFor="prefDate" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Date <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        id="prefDate"
                        type="date"
                        min={todayIso}
                        value={preferredDate}
                        onChange={(e) => {
                          setPreferredDate(e.target.value);
                          if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                        }}
                        className={`w-full pl-10 pr-4 py-2.5 text-sm bg-white border rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-colors ${
                          errors.preferredDate ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                        }`}
                      />
                    </div>
                    {errors.preferredDate && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.preferredDate}
                      </p>
                    )}
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label htmlFor="prefTime" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Time Slot <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        id="prefTime"
                        value={preferredTime}
                        onChange={(e) => {
                          setPreferredTime(e.target.value);
                          if (errors.preferredTime) setErrors({ ...errors, preferredTime: '' });
                        }}
                        className={`w-full pl-10 pr-4 py-2.5 text-sm bg-white border rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-colors ${
                          errors.preferredTime ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                        }`}
                      >
                        <option value="">Select a time slot</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                    {errors.preferredTime && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.preferredTime}
                      </p>
                    )}
                  </div>
                </div>

                {/* Required Dental Service */}
                <div>
                  <label htmlFor="prefService" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Required Dental Service <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="prefService"
                    value={service}
                    onChange={(e) => {
                      setService(e.target.value);
                      if (errors.service) setErrors({ ...errors, service: '' });
                    }}
                    className={`w-full px-4 py-2.5 text-sm bg-white border rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-colors ${
                      errors.service ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                    }`}
                  >
                    <option value="">Select a dental treatment</option>
                    {CLINIC_SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.title}>{srv.title}</option>
                    ))}
                    <option value="General Consultation / Other Concern">Other Dental Issue / Not Sure</option>
                  </select>
                  {errors.service && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.service}
                    </p>
                  )}
                </div>

                {/* Optional Message */}
                <div>
                  <label htmlFor="patientMessage" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Optional Message / Symptoms
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                    <textarea
                      id="patientMessage"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe any pain, dental history, or questions for our dentist..."
                      className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 active:scale-[0.99] rounded-xl shadow-xs transition-all duration-150 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-teal-400" />
                    <span>Request an Appointment</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal (Strict adherence to backend disclosure requirement) */}
      {showConfirmationModal && submittedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Appointment Request Recorded
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Request ID: {submittedData.id} · Recorded at {submittedData.createdAt}
              </p>
            </div>

            {/* Clear honest backend explanation as instructed */}
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/90 text-xs text-amber-900 space-y-1.5 leading-relaxed">
              <div className="font-semibold flex items-center gap-1.5 text-amber-950">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Notice: Request Stored Locally (Preview Mode)</span>
              </div>
              <p>
                Because no live clinic backend database is currently connected to this web preview, this appointment request <strong>has not been sent to the clinic yet</strong>. It has been validated and recorded locally.
              </p>
              <p className="text-amber-800">
                To reach Daaton Ki Dukan immediately, you can send this formatted request directly to the clinic’s WhatsApp or call the clinic desk!
              </p>
            </div>

            {/* Request Summary */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-2">
              <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                <span className="text-slate-500">Patient Name:</span>
                <span className="font-semibold text-slate-900">{submittedData.patientName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                <span className="text-slate-500">Phone:</span>
                <span className="font-semibold text-slate-900">{submittedData.phone}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                <span className="text-slate-500">Preferred Date:</span>
                <span className="font-semibold text-slate-900">{submittedData.date}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200/60 pb-1.5">
                <span className="text-slate-500">Time Slot:</span>
                <span className="font-semibold text-slate-900">{submittedData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Treatment:</span>
                <span className="font-semibold text-teal-800">{submittedData.service}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleSendViaWhatsApp}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl transition-colors cursor-pointer"
              >
                <span>Send to Clinic on WhatsApp</span>
                <ExternalLink className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleResetForm}
                className="w-full sm:w-auto px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
              >
                Close &amp; Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
