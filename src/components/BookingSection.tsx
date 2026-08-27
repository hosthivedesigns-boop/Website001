import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Send, 
  HelpCircle,
  Copy,
  Check,
  Building2,
  CalendarCheck
} from 'lucide-react';
import { CLINIC_INFO, SERVICES_DATA } from '../data/content';
import { BookingFormData, BookingSubmission } from '../types';

interface BookingSectionProps {
  selectedService: string;
  onServiceChange: (service: string) => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ 
  selectedService, 
  onServiceChange 
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    serviceNeeded: selectedService || SERVICES_DATA[0].title,
    preferredDate: '',
    preferredTime: '10:00 AM',
    notes: ''
  });

  const [submittedBooking, setSubmittedBooking] = useState<BookingSubmission | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sync selectedService prop with internal state if prop updates
  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, serviceNeeded: selectedService }));
    }
  }, [selectedService]);

  // Set default date to tomorrow
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dateStr = tomorrow.toISOString().split('T')[0];
    setFormData(prev => ({
      ...prev,
      preferredDate: prev.preferredDate || dateStr
    }));
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.serviceNeeded) newErrors.serviceNeeded = 'Please select a service';
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a date';
    if (!formData.preferredTime) newErrors.preferredTime = 'Please select a time';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newSubmission: BookingSubmission = {
        ...formData,
        id: 'MS-' + Math.floor(100000 + Math.random() * 900000),
        createdAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        status: 'confirmed'
      };

      // Save submission state
      setSubmittedBooking(newSubmission);
      setIsSubmitting(false);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CLINIC_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleNewBooking = () => {
    setSubmittedBooking(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceNeeded: SERVICES_DATA[0].title,
      preferredDate: '',
      preferredTime: '10:00 AM',
      notes: ''
    });
  };

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:30 AM', 
    '02:00 PM', '03:30 PM', '05:00 PM', '06:15 PM'
  ];

  return (
    <section id="booking" className="py-20 lg:py-28 bg-[#FAF9F6] relative scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100/80 border border-teal-200/80 text-teal-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
            Appointments & Inquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Book Your Session in {CLINIC_INFO.location}
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            Take the first step towards cognitive clarity and emotional strength. Fill out the form below or reach out directly.
          </p>
        </div>

        {/* 2-Column Grid: Contact Information & Location + Interactive Booking Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Clinic Contact Details & Location Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Contact Card */}
            <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-xs space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-teal-50 text-teal-900 border border-teal-100">
                    Clinic Headquarters
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-stone-900">
                  {CLINIC_INFO.name}
                </h3>
                <p className="text-xs text-stone-500">
                  {CLINIC_INFO.tagline}
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 pt-2 border-t border-stone-100">
                
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-teal-800" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                      Location
                    </p>
                    <p className="text-sm font-semibold text-stone-800 mt-0.5">
                      {CLINIC_INFO.location}
                    </p>
                    <p className="text-xs text-stone-500">
                      {CLINIC_INFO.fullAddress}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-teal-800" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                      Phone Number
                    </p>
                    <a
                      id="contact-phone-link"
                      href={`tel:${CLINIC_INFO.phone}`}
                      className="text-sm font-semibold text-teal-800 hover:text-teal-900 hover:underline block mt-0.5"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                    <p className="text-xs text-stone-500">
                      Direct appointments & urgent queries
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-teal-800" />
                  </div>
                  <div className="w-full">
                    <p className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                      Email Address
                    </p>
                    <div className="flex items-center justify-between mt-0.5">
                      <a
                        id="contact-email-link"
                        href={`mailto:${CLINIC_INFO.email}`}
                        className="text-sm font-semibold text-teal-800 hover:underline"
                      >
                        {CLINIC_INFO.email}
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="p-1 rounded text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
                        title="Copy email"
                      >
                        {copiedEmail ? (
                          <Check className="w-3.5 h-3.5 text-teal-700" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-stone-500">
                      Confidential intake communications
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-teal-800" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-900 uppercase tracking-wider">
                      Consultation Hours
                    </p>
                    <p className="text-xs text-stone-700 font-medium mt-0.5">
                      {CLINIC_INFO.hours}
                    </p>
                  </div>
                </div>

              </div>

              {/* Trust Badge */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-teal-800 shrink-0" />
                <p className="text-xs text-stone-600">
                  <strong className="text-stone-900">Privacy Guarantee:</strong> All personal details and session notes remain strictly confidential.
                </p>
              </div>
            </div>

            {/* Visual Location Map Pin Mockup */}
            <div className="rounded-3xl bg-gradient-to-br from-teal-900 to-stone-900 p-6 text-white shadow-xs space-y-3 relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 text-white backdrop-blur-xs">
                  {CLINIC_INFO.location} Center
                </span>
                <Building2 className="w-5 h-5 text-teal-300" />
              </div>
              <h4 className="text-base font-bold">
                In-Person & Hybrid Consultations
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Located in the quiet, accessible center of {CLINIC_INFO.location}. Designed for deep relaxation and mental decompression.
              </p>
            </div>

          </div>

          {/* Right Column: High-Converting Booking Form OR Confirmation Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-sm relative">
              
              {submittedBooking ? (
                /* Interactive Success Confirmation Screen */
                <div id="booking-confirmation-card" className="space-y-6 text-center py-4">
                  
                  <div className="w-16 h-16 rounded-2xl bg-teal-100 text-teal-800 mx-auto flex items-center justify-center shadow-xs">
                    <CalendarCheck className="w-8 h-8 text-teal-800" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-teal-50 text-teal-900 border border-teal-200">
                      Appointment Request Received
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-stone-900">
                      Thank You, {submittedBooking.name}!
                    </h3>
                    <p className="text-stone-600 text-sm max-w-md mx-auto">
                      Your session request has been forwarded to Lead Therapist <strong className="text-stone-800">Muhammad Khan</strong> at our {CLINIC_INFO.location} center.
                    </p>
                  </div>

                  {/* Summary Receipt */}
                  <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200 text-left space-y-3 text-xs sm:text-sm">
                    <div className="flex justify-between pb-2 border-b border-stone-200">
                      <span className="text-stone-500">Booking Reference:</span>
                      <span className="font-mono font-bold text-stone-800">{submittedBooking.id}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-stone-200">
                      <span className="text-stone-500">Service:</span>
                      <span className="font-semibold text-teal-900">{submittedBooking.serviceNeeded}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-stone-200">
                      <span className="text-stone-500">Requested Date & Time:</span>
                      <span className="font-medium text-stone-800">{submittedBooking.preferredDate} at {submittedBooking.preferredTime}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-stone-200">
                      <span className="text-stone-500">Location:</span>
                      <span className="font-medium text-stone-800">Mindshift Academy, {CLINIC_INFO.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Contact Method:</span>
                      <span className="font-medium text-stone-800">{submittedBooking.phone} • {submittedBooking.email}</span>
                    </div>
                  </div>

                  {/* Next Steps */}
                  <div className="text-left bg-teal-50/70 rounded-2xl p-4 border border-teal-100 space-y-1 text-xs text-teal-950">
                    <p className="font-bold flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-teal-700" />
                      What Happens Next?
                    </p>
                    <p className="text-stone-600">
                      Our intake coordinator will verify the therapist schedule and reach out via phone/email within a few hours with your calendar invite and preparation guidelines.
                    </p>
                  </div>

                  {/* Reset action */}
                  <div className="pt-2">
                    <button
                      id="book-another-btn"
                      onClick={handleNewBooking}
                      className="px-6 py-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Book Another Session / Edit Details
                    </button>
                  </div>

                </div>
              ) : (
                /* The Booking Form */
                <form id="appointment-booking-form" onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-stone-900">
                      Schedule an Appointment
                    </h3>
                    <p className="text-xs text-stone-500">
                      Select your preferred session and time. We will confirm promptly.
                    </p>
                  </div>

                  {/* Service Needed Selection */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                      1. Service Needed <span className="text-amber-700">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SERVICES_DATA.map((srv) => {
                        const isSelected = formData.serviceNeeded === srv.title;
                        return (
                          <button
                            type="button"
                            key={srv.id}
                            id={`select-form-service-${srv.id}`}
                            onClick={() => {
                              setFormData({ ...formData, serviceNeeded: srv.title });
                              onServiceChange(srv.title);
                            }}
                            className={`p-3 rounded-2xl text-left border text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                              isSelected
                                ? 'bg-teal-50 border-teal-700 text-teal-950 font-bold shadow-2xs'
                                : 'bg-stone-50/70 border-stone-200 text-stone-700 hover:bg-stone-50'
                            }`}
                          >
                            <span>{srv.title}</span>
                            {isSelected && <Check className="w-3.5 h-3.5 text-teal-800" />}
                          </button>
                        );
                      })}
                    </div>
                    {errors.serviceNeeded && (
                      <p className="text-xs text-red-600 font-medium">{errors.serviceNeeded}</p>
                    )}
                  </div>

                  {/* Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="booking-name" className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                        Full Name <span className="text-amber-700">*</span>
                      </label>
                      <input
                        id="booking-name"
                        type="text"
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-stone-50 border text-sm text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700 transition-all ${
                          errors.name ? 'border-red-400 bg-red-50/30' : 'border-stone-200'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="booking-phone" className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                        Phone Number <span className="text-amber-700">*</span>
                      </label>
                      <input
                        id="booking-phone"
                        type="tel"
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-stone-50 border text-sm text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700 transition-all ${
                          errors.phone ? 'border-red-400 bg-red-50/30' : 'border-stone-200'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-600">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="booking-email" className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                      Email Address <span className="text-amber-700">*</span>
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      placeholder="e.g. yourname@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl bg-stone-50 border text-sm text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700 transition-all ${
                        errors.email ? 'border-red-400 bg-red-50/30' : 'border-stone-200'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-600">{errors.email}</p>}
                  </div>

                  {/* Preferred Date & Time Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="booking-date" className="block text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-teal-700" />
                        Preferred Date <span className="text-amber-700">*</span>
                      </label>
                      <input
                        id="booking-date"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-stone-50 border text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700 transition-all ${
                          errors.preferredDate ? 'border-red-400 bg-red-50/30' : 'border-stone-200'
                        }`}
                      />
                      {errors.preferredDate && <p className="text-xs text-red-600">{errors.preferredDate}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="booking-time" className="block text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-teal-700" />
                        Preferred Time <span className="text-amber-700">*</span>
                      </label>
                      <select
                        id="booking-time"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700 transition-all"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Optional Note / Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="booking-notes" className="block text-xs font-bold text-stone-800 uppercase tracking-wider">
                      Key Goal or Notes <span className="text-stone-400 font-normal lowercase">(optional)</span>
                    </label>
                    <textarea
                      id="booking-notes"
                      rows={3}
                      placeholder="Briefly describe what you would like to focus on (e.g. stress relief, focus training, anxiety management)..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-sm text-stone-900 placeholder:text-stone-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-700 transition-all resize-none"
                    />
                  </div>

                  {/* Prominent Submission Button */}
                  <div className="pt-2">
                    <button
                      id="booking-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-full bg-teal-800 hover:bg-teal-900 text-white text-sm font-bold tracking-wide transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Scheduling Session...</span>
                        </>
                      ) : (
                        <>
                          <span>Schedule Appointment</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-center text-stone-500 mt-3 flex items-center justify-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-teal-700" />
                      Free cancellation up to 24 hours prior • 100% confidential
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
