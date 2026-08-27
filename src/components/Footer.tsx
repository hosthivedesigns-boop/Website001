import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Trophy, 
  ArrowUp,
  Instagram,
  Linkedin,
  Facebook,
  Youtube,
  Twitter
} from 'lucide-react';
import { CLINIC_INFO, FOUNDER_INFO } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tier: Brand, Navigation, and Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Col 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-700 flex items-center justify-center text-white shadow-xs">
                <Sparkles className="w-5 h-5 text-teal-200" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-serif">
                Mindshift Academy
              </span>
            </div>
            
            <p className="text-stone-400 text-sm max-w-sm leading-relaxed">
              Transform Your Mind, Shift Your Life. Professional psychological support and elite mental focus training founded by Guinness World Record holder Muhammad Khan in Kavanur.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-800/80 border border-stone-700 text-xs text-amber-300">
              <Trophy className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Guinness World Record Holder Certified</span>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-stone-400">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Services & Specialties
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  About Muhammad Khan
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('methodology')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  3-Step Methodology
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('mindset-practice')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Clarity Exercise
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('booking')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Book Session in Kavanur
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Clinic Contact & Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Kavanur Center
            </h4>
            <div className="space-y-2.5 text-xs text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <span>{CLINIC_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-teal-300">
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-teal-300">
                  {CLINIC_INFO.email}
                </a>
              </div>
              <p className="text-[11px] text-stone-500 pt-1">
                {CLINIC_INFO.hours}
              </p>
            </div>

            {/* Social Media Placeholders */}
            <div className="pt-3">
              <p className="text-[11px] text-stone-400 mb-2 font-medium">Connect with us</p>
              <div className="flex items-center gap-2 text-stone-400">
                <a
                  href="#social-instagram"
                  onClick={(e) => e.preventDefault()}
                  className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-teal-700 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#social-linkedin"
                  onClick={(e) => e.preventDefault()}
                  className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-teal-700 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="#social-facebook"
                  onClick={(e) => e.preventDefault()}
                  className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-teal-700 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#social-youtube"
                  onClick={(e) => e.preventDefault()}
                  className="w-8 h-8 rounded-lg bg-stone-800 hover:bg-teal-700 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Tier: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.name} — All Rights Reserved. Located in {CLINIC_INFO.location}.</p>
          
          <div className="flex items-center gap-6">
            <span className="text-stone-400">Lead Therapist: {FOUNDER_INFO.name}</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[10px]">Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
