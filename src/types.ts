export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  benefits: string[];
  sessionDuration: string;
}

export interface StepItem {
  number: string;
  name: string;
  tagline: string;
  description: string;
  points: string[];
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  serviceNeeded: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
}

export interface BookingSubmission extends BookingFormData {
  id: string;
  createdAt: string;
  status: 'confirmed' | 'pending';
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
