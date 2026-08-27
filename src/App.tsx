import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutTherapist } from './components/AboutTherapist';
import { ServicesGrid } from './components/ServicesGrid';
import { Methodology } from './components/Methodology';
import { MindsetCheckWidget } from './components/MindsetCheckWidget';
import { BookingSection } from './components/BookingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Individual Therapy');

  const scrollToBooking = () => {
    const bookingElem = document.getElementById('booking');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutElem = document.getElementById('about');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromGrid = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-800 font-sans">
      {/* Top Navbar */}
      <Navbar onBookClick={scrollToBooking} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onBookClick={scrollToBooking}
          onMeetFounderClick={scrollToAbout}
        />

        {/* 4 Clean Feature Services & Specialties */}
        <ServicesGrid onSelectService={handleSelectServiceFromGrid} />

        {/* About Therapist & Guinness World Record Card */}
        <AboutTherapist onBookClick={scrollToBooking} />

        {/* Why Choose Mindshift Academy? (3-Step Timeline: Discover, Shift, Thrive) */}
        <Methodology onBookClick={scrollToBooking} />

        {/* 60-Second Clarity & Mindset Micro-Tool */}
        <MindsetCheckWidget />

        {/* Contact & Booking Section */}
        <BookingSection
          selectedService={selectedService}
          onServiceChange={setSelectedService}
        />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
