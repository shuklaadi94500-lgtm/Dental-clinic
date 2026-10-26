import { DentalService, DoctorProfile, ClinicContactInfo, Testimonial } from '../types/clinic';

export const CLINIC_SERVICES: DentalService[] = [
  {
    id: 'general-dentistry',
    title: 'General Dentistry & Dental Check-ups',
    shortDesc: 'Comprehensive oral evaluations, intraoral examinations, and preventive care plans for optimal dental health.',
    iconName: 'Stethoscope',
    category: 'Preventive Care',
    durationEstimate: '30 - 45 mins',
    overview: 'A thorough clinical assessment of teeth, gums, enamel condition, and bite alignment to detect cavities or gingival issues early.',
    benefits: ['Early detection of decay', 'Customized home oral hygiene guide', 'Digital intraoral review'],
    recommendedFor: 'Routine 6-month check-ups, tooth sensitivity, or general oral discomfort.'
  },
  {
    id: 'teeth-cleaning',
    title: 'Teeth Cleaning & Polishing',
    shortDesc: 'Ultrasonic scaling to gently remove stubborn plaque, tartar, and surface stains, restoring natural freshness.',
    iconName: 'Sparkles',
    category: 'Preventive & Hygiene',
    durationEstimate: '45 mins',
    overview: 'Professional ultrasonic scaling that eliminates bacterial plaque and hard calculus deposits from above and below the gumline without harming enamel.',
    benefits: ['Reverses early gingivitis', 'Removes coffee/tea/tobacco stains', 'Fresh breath and smooth enamel feel'],
    recommendedFor: 'Recommended every 6 months for adults and teenagers.'
  },
  {
    id: 'tooth-filling',
    title: 'Tooth Filling',
    shortDesc: 'Natural tooth-colored composite restorations that repair cavities and minor fractures seamlessly.',
    iconName: 'ShieldCheck',
    category: 'Restorative Care',
    durationEstimate: '30 - 60 mins',
    overview: 'Minimally invasive composite resin restorations shade-matched precisely to your natural tooth enamel for an invisible, durable repair.',
    benefits: ['Zero metal / mercury-free', 'Matches natural tooth shade', 'Restores full biting function immediately'],
    recommendedFor: 'Cavities, chipped teeth, and small gaps between front teeth.'
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment (RCT)',
    shortDesc: 'Gentle, modern endodontic therapy designed to relieve severe tooth pain and preserve your natural tooth.',
    iconName: 'HeartPulse',
    category: 'Endodontics',
    durationEstimate: '1 - 2 sessions (45 mins each)',
    overview: 'Precision rotary endodontic treatment that safely removes infected dental pulp, thoroughly cleans canals, and seals them to save natural teeth.',
    benefits: ['Eliminates persistent pain and infection', 'Saves natural tooth from extraction', 'Modern single-visit options available'],
    recommendedFor: 'Deep cavities, lingering hot/cold pain, throbbing toothaches, or abscesses.'
  },
  {
    id: 'teeth-whitening',
    title: 'Teeth Whitening',
    shortDesc: 'Safe, enamel-friendly cosmetic whitening systems that gently brighten deep dental stains by several shades.',
    iconName: 'Sun',
    category: 'Cosmetic Dentistry',
    durationEstimate: '45 - 60 mins',
    overview: 'Supervised clinical whitening using tested, safe light-activated whitening gels to brighten yellowing teeth without eroding protective enamel.',
    benefits: ['Fast, visible brightening', 'Safe on gums with barrier protection', 'Long-lasting radiant smile'],
    recommendedFor: 'Weddings, professional interviews, or reversing dietary discoloration.'
  },
  {
    id: 'braces-aligners',
    title: 'Dental Braces & Aligners',
    shortDesc: 'Custom orthodontic solutions including clear aligners and modern ceramic braces for properly aligned teeth.',
    iconName: 'Smile',
    category: 'Orthodontics',
    durationEstimate: 'Consultation & scan: 30 mins',
    overview: 'State-of-the-art clear aligner digital treatment planning and bracket options tailored to straighten crooked, crowded, or spaced teeth.',
    benefits: ['Discrete clear aligner choices', 'Corrects bite and chewing efficiency', 'Tailored digital progress tracking'],
    recommendedFor: 'Crowded teeth, gap teeth, overbites, or misaligned smiles for all ages.'
  },
  {
    id: 'dental-implants',
    title: 'Dental Implants',
    shortDesc: 'Permanent titanium root replacements for missing teeth, engineered to look, feel, and function like natural teeth.',
    iconName: 'Anchor',
    category: 'Implantology',
    durationEstimate: 'Treatment consultation: 45 mins',
    overview: 'Biocompatible dental implants providing permanent stability for replacement crowns or bridges, preventing bone resorption in the jaw.',
    benefits: ['Permanent tooth replacement', 'Preserves adjacent natural teeth', 'Restores 100% natural chewing strength'],
    recommendedFor: 'One or multiple missing teeth, loose dentures, or compromised roots.'
  },
  {
    id: 'tooth-extraction',
    title: 'Tooth Extraction',
    shortDesc: 'Careful, pain-managed extractions including gentle wisdom tooth removal with focus on prompt healing.',
    iconName: 'Activity',
    category: 'Oral Surgery',
    durationEstimate: '30 - 45 mins',
    overview: 'Gentle surgical and routine extractions conducted with modern local anesthesia protocols, minimal tissue trauma, and detailed aftercare support.',
    benefits: ['Gentle, atraumatic technique', 'Pain-managed recovery protocol', 'Relieves acute crowding and infection'],
    recommendedFor: 'Severely broken teeth, impacted wisdom teeth, or orthodontic space management.'
  },
  {
    id: 'crowns-bridges',
    title: 'Crowns & Bridges',
    shortDesc: 'High-strength ceramic and zirconia crowns that reinforce damaged teeth or bridge gaps seamlessly.',
    iconName: 'Layers',
    category: 'Prosthodontics',
    durationEstimate: '2 appointments',
    overview: 'Custom-milled zirconia and porcelain-fused crowns engineered with digital precision to restore structural strength and natural aesthetics.',
    benefits: ['High tensile fracture resistance', 'Indistinguishable from natural teeth', 'Protects root canal-treated teeth'],
    recommendedFor: 'Post-RCT protection, fractured teeth, or bridging missing tooth spaces.'
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric Dentistry',
    shortDesc: 'Friendly, patient, and child-focused dental care designed to build positive lifelong oral hygiene habits.',
    iconName: 'Baby',
    category: 'Pediatric Care',
    durationEstimate: '30 mins',
    overview: 'A welcoming, fear-free environment for kids featuring fluoride varnish applications, pit & fissure sealants, and gentle primary tooth fillings.',
    benefits: ['Gentle, non-intimidating approach', 'Fluoride treatment prevents childhood caries', 'Habit counseling for parents & kids'],
    recommendedFor: 'Children of all ages, first dental visits, milk tooth care, and caries prevention.'
  }
];

export const INITIAL_DOCTOR_PROFILE: DoctorProfile = {
  name: '[Dr. Name Placeholder - e.g., Dr. A. Sharma]',
  title: 'Lead Dental Surgeon & Consultant',
  qualifications: '[BDS, MDS Placeholder - Dental Surgery & Aesthetic Restorations]',
  specialization: '[General Dentistry & Advanced Restorative Care]',
  experience: '[Years of Clinical Practice Placeholder - e.g. 10+ Years]',
  bio: 'Our lead clinician is dedicated to patient comfort, transparent treatment planning, and delivering gentle, pain-managed dental procedures. Every recommendation is tailored strictly to your individual clinical needs.',
  image: '/src/assets/images/doctor_portrait_placeholder_1792997199479.jpg',
  consultationDays: 'Monday to Saturday (10:00 AM – 8:00 PM)',
  registrationNumber: '[State Dental Council Registration No. Placeholder]',
  isPlaceholder: true
};

export const INITIAL_CLINIC_CONTACT: ClinicContactInfo = {
  name: 'Daaton Ki Dukan',
  tagline: 'Modern Dental Care & Confident Smiles',
  addressLine1: '[Clinic Address Placeholder - e.g., Shop 4, Ground Floor, Central Market]',
  addressLine2: '[Landmark / Sector / Area Placeholder]',
  city: '[City, State, PIN Code, India]',
  phone: '+91 98765 43210',
  whatsapp: '+91 98765 43210',
  email: 'contact@daatonkidukan.in',
  hoursWeekday: 'Monday – Saturday: 10:00 AM – 8:00 PM',
  hoursSunday: 'Sunday: 10:30 AM – 2:00 PM (By Prior Appointment)',
  mapAddressQuery: 'Dental Clinic India',
  isPlaceholder: true
};

export const SAMPLE_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    patientName: 'Sample Patient A.',
    treatment: 'Root Canal Treatment & Crown',
    feedback: 'I was very anxious about getting a root canal, but the procedure was surprisingly smooth and gentle. The clinic environment is calm, clean, and the doctor explained every step clearly.',
    location: 'Local Resident',
    date: 'Sample Review Placeholder',
    isPlaceholder: true
  },
  {
    id: 't-2',
    patientName: 'Sample Patient B.',
    treatment: 'Teeth Cleaning & Polishing',
    feedback: 'Prompt appointment scheduling with zero waiting time. The hygiene standards and sterilization practices are clearly visible. Highly recommended for family dental check-ups.',
    location: 'Verified Consultation',
    date: 'Sample Review Placeholder',
    isPlaceholder: true
  },
  {
    id: 't-3',
    patientName: 'Sample Patient C.',
    treatment: 'Dental Aligners Consultation',
    feedback: 'Appreciated the honest consultation—no pushy sales, just transparent guidance on what options suit my smile best. Great experience overall.',
    location: 'Patient Feedback Placeholder',
    date: 'Sample Review Placeholder',
    isPlaceholder: true
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    id: 'personalized-care',
    title: 'Personalized Patient Care',
    description: 'Every smile is unique. We take time to listen to your specific dental concerns and craft customized treatment plans that fit your lifestyle and comfort.',
    icon: 'UserCheck'
  },
  {
    id: 'clear-explanations',
    title: 'Clear Treatment Explanations',
    description: 'No medical jargon or surprise procedures. We clearly explain diagnoses, show intraoral findings, and outline all available options before beginning any treatment.',
    icon: 'MessageSquareCheck'
  },
  {
    id: 'comfort-hygiene',
    title: 'Focus on Comfort and Hygiene',
    description: 'We follow rigorous hospital-grade sterilization protocols with autoclaved instruments and single-use disposables in a relaxed, calming clinic environment.',
    icon: 'Sparkles'
  },
  {
    id: 'modern-dental-care',
    title: 'Modern Dental Care',
    description: 'Utilizing modern dental operatory equipment, digital radiography, and gentle rotary systems designed for precision, speed, and patient comfort.',
    icon: 'Microscope'
  },
  {
    id: 'convenient-booking',
    title: 'Convenient Appointment Booking',
    description: 'Simple slot reservation online, transparent scheduling, and quick follow-ups to ensure your visits fit seamlessly into your day.',
    icon: 'CalendarCheck2'
  }
];
