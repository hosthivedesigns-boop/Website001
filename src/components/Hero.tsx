import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Trophy, 
  CheckCircle2, 
  HeartHandshake,
  BrainCircuit,
  Compass
} from 'lucide-react';
import { CLINIC_INFO, FOUNDER_INFO } from '../data/content';

interface HeroProps {
  onBookClick: () => void;
  onMeetFounderClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onMeetFounderClick }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-teal-500/8 via-amber-500/5 to-transparent rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-teal-600/5 rounded-full blur-2xl -z-10 pointer-events-none" />
      <div className="absolute top-60 left-10 w-80 h-80 bg-amber-600/5 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Quick Location & Trust Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100/90 border border-stone-200/80 text-stone-700 shadow-xs">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-teal-800">
                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                Center in {CLINIC_INFO.location}
              </span>
              <span className="w-1 h-1 rounded-full bg-stone-300"></span>
              <span className="text-xs text-stone-600 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                Private & Compassionate Care
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.12]">
                Transform Your Mind, <br className="hidden sm:inline" />
                <span className="text-teal-800 relative inline-block">
                  Shift Your Life.
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-2.5 text-teal-600/30"
                    viewBox="0 0 300 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 9.5C65.5 3.5 185.5 2.5 297.5 7.5"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-stone-600 max-w-2xl leading-relaxed font-normal">
                Professional psychological support tailored to help you gain clarity, inner strength, and mental wellness.
              </p>
            </div>

            {/* Key Trust Signals Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-sm text-stone-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Evidence-based cognitive restructuring</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Guinness Record-holding focus methodologies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Private 1-on-1 personalized sessions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Serene therapy space in Kavanur</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-book-primary-btn"
                onClick={onBookClick}
                className="px-7 py-4 rounded-full bg-teal-800 hover:bg-teal-900 text-white font-semibold text-base shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer active:scale-98"
              >
                <span>Book a Session</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-meet-founder-btn"
                onClick={onMeetFounderClick}
                className="px-6 py-4 rounded-full bg-stone-100 hover:bg-stone-200/80 text-stone-800 border border-stone-200/90 font-semibold text-base transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-teal-700" />
                <span>Meet the Founder</span>
              </button>
            </div>

            {/* Micro-proof footer */}
            <div className="pt-2 flex items-center gap-4 text-xs text-stone-500">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full bg-teal-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-teal-900">
                  MK
                </div>
                <div className="w-7 h-7 rounded-full bg-stone-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-stone-800">
                  <Trophy className="w-3.5 h-3.5 text-amber-600" />
                </div>
                <div className="w-7 h-7 rounded-full bg-teal-700 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                  <HeartHandshake className="w-3.5 h-3.5" />
                </div>
              </div>
              <div>
                <span className="font-semibold text-stone-700">Guinness Record Certified</span>
                <span className="mx-1.5">•</span>
                <span>Therapy & Mental Focus Center</span>
              </div>
            </div>

          </div>

          {/* Right Column: Serene Illustration & Modern Feature Composition Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="relative rounded-3xl bg-gradient-to-b from-stone-50 to-stone-100/90 p-6 sm:p-8 border border-stone-200/90 shadow-sm overflow-hidden">
                
                {/* Background serene organic rings pattern */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full border border-teal-600/10 pointer-events-none" />
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-48 h-48 rounded-full border border-teal-600/15 pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-56 h-56 rounded-full border border-amber-600/10 pointer-events-none" />

                {/* Central Calming Illustration / Motif Graphic */}
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/70 shadow-xs mb-6 text-center">
                  
                  {/* Calming visual emblem */}
                  <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-teal-800 via-teal-700 to-emerald-800 flex items-center justify-center text-white shadow-sm mb-5">
                    <BrainCircuit className="w-12 h-12 text-teal-100 animate-pulse" />
                    
                    {/* Floating mini beacon */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center shadow-xs">
                      <Trophy className="w-3.5 h-3.5 text-stone-900" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-100">
                      The Mindshift Philosophy
                    </span>
                    <h3 className="text-xl font-bold text-stone-900 pt-1">
                      Clarity • Strength • Peace
                    </h3>
                    <p className="text-xs text-stone-500 max-w-xs mx-auto">
                      Bridging deep psychological insight with elite mental endurance tools in Kavanur.
                    </p>
                  </div>

                  {/* 3 Core Pillars */}
                  <div className="grid grid-cols-3 gap-2 pt-5 border-t border-stone-100 mt-5 text-center">
                    <div className="bg-stone-50 rounded-xl p-2.5">
                      <p className="text-[11px] font-bold text-teal-800">Calm</p>
                      <p className="text-[10px] text-stone-500">Nervous Reset</p>
                    </div>
                    <div className="bg-stone-50 rounded-xl p-2.5">
                      <p className="text-[11px] font-bold text-teal-800">Focus</p>
                      <p className="text-[10px] text-stone-500">Record Level</p>
                    </div>
                    <div className="bg-stone-50 rounded-xl p-2.5">
                      <p className="text-[11px] font-bold text-teal-800">Growth</p>
                      <p className="text-[10px] text-stone-500">Lifelong Shift</p>
                    </div>
                  </div>
                </div>

                {/* Floating World Record Badge Container */}
                <div className="bg-amber-50/90 rounded-2xl p-4 border border-amber-200/80 flex items-start gap-3.5 shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-300 flex items-center justify-center shrink-0">
                    <Trophy className="w-5 h-5 text-amber-800" />
                  </div>
                  <div className="text-left space-y-0.5">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                        Guinness Record Distinction
                      </span>
                    </div>
                    <p className="text-xs text-amber-950 font-medium">
                      Founded by <span className="font-bold">{FOUNDER_INFO.name}</span>, global record holder for elite mental focus acts.
                    </p>
                  </div>
                </div>

                {/* Location Footer Bar on Card */}
                <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-500">
                  <span className="flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-teal-700" />
                    Kavanur, India
                  </span>
                  <span className="text-teal-800 font-semibold cursor-pointer hover:underline" onClick={onBookClick}>
                    Reserve Your Time Slot →
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
