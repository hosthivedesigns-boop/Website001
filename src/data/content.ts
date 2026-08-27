import { ServiceItem, StepItem, FAQItem } from '../types';

export const CLINIC_INFO = {
  name: 'Mindshift Academy',
  tagline: 'Transform Your Mind, Shift Your Life',
  location: 'Kavanur',
  fullAddress: 'Mindshift Academy Center, Main Road, Kavanur',
  phone: '0000000000',
  displayPhone: '+91 (000) 000-0000',
  email: 'xxxx@mail.domain',
  hours: 'Monday – Saturday: 9:00 AM – 7:00 PM (By Appointment)',
  responseTime: 'Same-day consultation booking confirmation',
};

export const FOUNDER_INFO = {
  name: 'Muhammad Khan',
  title: 'Lead Therapist & Founder',
  bio: 'Dedicated to empowering individuals through advanced behavioral and cognitive mind-shift strategies.',
  extendedBio: 'With years of specialized clinical experience and deep research into cognitive restructuring, Muhammad Khan bridges evidence-based psychotherapy with groundbreaking mental endurance disciplines. His holistic approach helps clients dissolve anxiety, overcome subconscious resistance, and cultivate unshakeable clarity.',
  recordHighlight: {
    title: 'Guinness World Record Holder',
    subtitle: 'Global Record-Breaking Mental Focus Act',
    description: 'Featured in the global record-breaking demonstration for the largest simultaneous telekinesis mental focus act. A testament to pioneering human mental discipline, deep focus mastery, and the boundless potential of the human mind.',
    year: 'Official Record',
    category: 'Elite Mental Focus & Concentration',
  },
  credentials: [
    'Certified Cognitive Behavioral Practitioner',
    'Specialist in Peak Mental Endurance & Focus',
    'Mind-Body Stress Regulation Facilitator',
    'Founder of the Mindshift Method'
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'individual-therapy',
    title: 'Individual Therapy',
    description: 'One-on-one sessions for stress, anxiety, and personal growth.',
    iconName: 'UserCheck',
    badge: 'Core Specialty',
    benefits: [
      'Anxiety & panic relief techniques',
      'Targeted stress reduction plans',
      'Safe, 100% confidential space',
      'Personalized emotional healing roadmap'
    ],
    sessionDuration: '50-60 Minutes'
  },
  {
    id: 'mindset-coaching',
    title: 'Mindset & Cognitive Coaching',
    description: 'Reprogram negative thought patterns and enhance mental clarity.',
    iconName: 'Brain',
    badge: 'Cognitive Shift',
    benefits: [
      'Cognitive restructuring & reframing',
      'Elimination of limiting beliefs',
      'Decision-making & mental clarity',
      'Habit transformation protocols'
    ],
    sessionDuration: '50 Minutes'
  },
  {
    id: 'focus-peak-performance',
    title: 'Focus & Peak Performance Training',
    description: 'Specialized sessions inspired by elite mental focus techniques.',
    iconName: 'Zap',
    badge: 'Record-Inspired',
    benefits: [
      'Deep work & concentration mastery',
      'Overcoming brain fog & distraction',
      'Mental endurance for professionals & athletes',
      'Neuro-focus visualization routines'
    ],
    sessionDuration: '60 Minutes'
  },
  {
    id: 'emotional-resilience',
    title: 'Emotional Resilience & Wellness',
    description: 'Grounding techniques for holistic mental balance.',
    iconName: 'HeartPulse',
    badge: 'Holistic Balance',
    benefits: [
      'Somatic grounding & breath control',
      'Emotional regulation in high stress',
      'Burnout prevention & recovery',
      'Sustainable inner calm'
    ],
    sessionDuration: '50 Minutes'
  }
];

export const METHODOLOGY_STEPS: StepItem[] = [
  {
    number: '01',
    name: 'Discover',
    tagline: 'Identify root causes',
    description: 'We begin with an in-depth exploratory conversation to uncover subconscious friction points, behavioral triggers, and emotional roadblocks.',
    points: [
      'Comprehensive mental wellness assessment',
      'Identifying negative thought loops',
      'Mapping your personal triggers & values'
    ]
  },
  {
    number: '02',
    name: 'Shift',
    tagline: 'Apply proven therapeutic tools',
    description: 'Using structured cognitive restructuring and specialized focus exercises, we systematically reprogram reactive habits into empowered responses.',
    points: [
      'Evidence-based cognitive restructuring',
      'Customized grounding & focus drills',
      'Real-world behavioral micro-shifts'
    ]
  },
  {
    number: '03',
    name: 'Thrive',
    tagline: 'Achieve long-term peace',
    description: 'Solidify your mental autonomy with sustainable self-regulation strategies, renewed vitality, and lifelong psychological resilience.',
    points: [
      'Long-term emotional self-regulation',
      'Unshakeable mental clarity in crisis',
      'Continuous personal fulfillment & strength'
    ]
  }
];

export const TRUST_METRICS = [
  { value: '1-on-1', label: 'Personalized Care', detail: 'Tailored specifically to you' },
  { value: '100%', label: 'Strict Confidentiality', detail: 'Private and secure sessions' },
  { value: 'Record', label: 'World-Class Focus', detail: 'Guinness Record-holding founder' },
  { value: 'Kavanur', label: 'Welcoming Center', detail: 'In-person & hybrid sessions' },
];

export const FAQS_DATA: FAQItem[] = [
  {
    category: 'Sessions',
    question: 'How do I schedule my first session at Mindshift Academy?',
    answer: 'Simply complete the booking form below with your preferred service and time. Our team in Kavanur will review your request and confirm your appointment with all necessary intake details within a few hours.'
  },
  {
    category: 'Privacy',
    question: 'Are sessions completely confidential?',
    answer: 'Yes, absolutely. All therapy and coaching sessions adhere to strict professional ethical codes and confidentiality standards. Your privacy and safety are our highest priorities.'
  },
  {
    category: 'Approach',
    question: 'What makes the Mindshift Academy approach unique?',
    answer: 'Led by Muhammad Khan—a Guinness World Record holder in extreme mental focus—our methodology uniquely combines clinical cognitive-behavioral tools with world-class focus training and nervous system grounding.'
  },
  {
    category: 'Logistics',
    question: 'Where is the clinic located in Kavanur and what are the session options?',
    answer: 'Our serene center is conveniently located in Kavanur. We offer both comfortable in-person therapy sessions at our clinic as well as secure virtual consultations depending on your preference.'
  }
];
