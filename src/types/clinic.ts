export interface DentalService {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  category: string;
  durationEstimate: string;
  overview: string;
  benefits: string[];
  recommendedFor: string;
}

export interface DoctorProfile {
  name: string;
  title: string;
  qualifications: string;
  specialization: string;
  experience: string;
  bio: string;
  image: string;
  consultationDays: string;
  registrationNumber: string;
  isPlaceholder: boolean;
}

export interface ClinicContactInfo {
  name: string;
  tagline: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  phone: string;
  whatsapp: string;
  email: string;
  hoursWeekday: string;
  hoursSunday: string;
  mapAddressQuery: string;
  isPlaceholder: boolean;
}

export interface Testimonial {
  id: string;
  patientName: string;
  treatment: string;
  feedback: string;
  location: string;
  date: string;
  isPlaceholder: boolean;
}

export interface AppointmentRequest {
  id: string;
  patientName: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message?: string;
  createdAt: string;
}
