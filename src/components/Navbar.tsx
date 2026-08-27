import React, { useState, useEffect } from 'react';
import { Sparkles, MapPin, Phone, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/content';

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-3'
          : 'bg-[#FAF9F6]/80 backdrop-blur-xs py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-800 flex items-center justify-center text-white shadow-xs group-hover:bg-teal-900 transition-colors">
              <Sparkles className="w-5 h-5 text-teal-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight text-stone-900 font-serif">
                  Mindshift
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-teal-100/80 text-teal-800 uppercase tracking-wider">
                  Academy
                </span>
              </div>
              <p className="text-[11px] text-stone-500 font-medium tracking-wide flex items-center gap-1">
                <MapPin className="w-3 h-3 text-teal-600 inline" />
                {CLINIC_INFO.location}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-700">
            <button
              id="nav-services-btn"
              onClick={() => scrollToSection('services')}
              className="hover:text-teal-800 transition-colors cursor-pointer py-1"
            >
              Services
            </button>
            <button
              id="nav-about-btn"
              onClick={() => scrollToSection('about')}
              className="hover:text-teal-800 transition-colors cursor-pointer py-1"
            >
              About Founder
            </button>
            <button
              id="nav-why-btn"
              onClick={() => scrollToSection('methodology')}
              className="hover:text-teal-800 transition-colors cursor-pointer py-1"
            >
              Methodology
            </button>
            <button
              id="nav-practice-btn"
              onClick={() => scrollToSection('mindset-practice')}
              className="hover:text-teal-800 transition-colors cursor-pointer py-1 flex items-center gap-1.5 text-teal-700"
            >
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              Clarity Exercise
            </button>
            <button
              id="nav-contact-btn"
              onClick={() => scrollToSection('booking')}
              className="hover:text-teal-800 transition-colors cursor-pointer py-1"
            >
              Contact
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-call-link"
              href={`tel:${CLINIC_INFO.phone}`}
              className="px-3 py-2 text-xs font-semibold text-stone-600 hover:text-teal-800 flex items-center gap-1.5 transition-colors"
              title="Call Mindshift Academy"
            >
              <Phone className="w-3.5 h-3.5 text-teal-700" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            <button
              id="nav-book-session-btn"
              onClick={onBookClick}
              className="px-5 py-2.5 rounded-full bg-teal-800 hover:bg-teal-900 text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-xs hover:shadow-md flex items-center gap-2 cursor-pointer active:scale-98"
            >
              <span>Book a Session</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="nav-mobile-book-btn"
              onClick={onBookClick}
              className="px-3.5 py-1.5 rounded-full bg-teal-800 text-white text-xs font-semibold"
            >
              Book
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu-drawer"
            className="md:hidden mt-3 pt-3 pb-4 border-t border-stone-200 bg-white/95 rounded-2xl p-4 shadow-lg space-y-3"
          >
            <div className="flex items-center justify-between text-xs text-stone-500 pb-2 border-b border-stone-100">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-teal-600" /> Center: {CLINIC_INFO.location}
              </span>
              <span className="flex items-center gap-1 text-teal-700 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" /> 100% Confidential
              </span>
            </div>

            <button
              onClick={() => scrollToSection('services')}
              className="w-full text-left px-3 py-2 text-stone-800 hover:bg-stone-50 rounded-lg text-sm font-medium"
            >
              Services & Specialties
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="w-full text-left px-3 py-2 text-stone-800 hover:bg-stone-50 rounded-lg text-sm font-medium"
            >
              About Muhammad Khan & World Record
            </button>
            <button
              onClick={() => scrollToSection('methodology')}
              className="w-full text-left px-3 py-2 text-stone-800 hover:bg-stone-50 rounded-lg text-sm font-medium"
            >
              Why Choose Mindshift Academy
            </button>
            <button
              onClick={() => scrollToSection('mindset-practice')}
              className="w-full text-left px-3 py-2 text-teal-800 bg-teal-50/70 hover:bg-teal-50 rounded-lg text-sm font-medium flex items-center justify-between"
            >
              <span>Instant Clarity Reset</span>
              <span className="text-[10px] px-2 py-0.5 bg-teal-200 text-teal-900 rounded-full font-semibold">Live Exercise</span>
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="w-full text-left px-3 py-2 text-stone-800 hover:bg-stone-50 rounded-lg text-sm font-medium"
            >
              Location & Contact
            </button>

            <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3 rounded-xl bg-teal-800 text-white font-semibold text-sm text-center shadow-xs"
              >
                Book a Session in Kavanur
              </button>
              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="w-full py-2.5 rounded-xl border border-stone-200 text-stone-700 font-medium text-xs text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-teal-700" />
                Call {CLINIC_INFO.phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
