import React from 'react';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  Brain, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Activity,
  Lightbulb
} from 'lucide-react';
import { FOUNDER_INFO } from '../data/content';

interface AboutTherapistProps {
  onBookClick: () => void;
}

export const AboutTherapist: React.FC<AboutTherapistProps> = ({ onBookClick }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F4F3EE] border-y border-stone-200/80 relative overflow-hidden">
      {/* Decorative subtle ambient circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100/70 border border-teal-200/80 text-teal-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
            Leadership & Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Meet the Lead Therapist & Founder
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            Bridging compassionate psychological guidance with elite mental focus mastery.
          </p>
        </div>

        {/* Main Grid: Founder Profile + Guinness World Record Feature Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Founder Bio & Philosophy */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/80 shadow-xs space-y-8">
            <div className="space-y-6">
              
              {/* Profile Header */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 pb-6 border-b border-stone-100">
                {/* Visual Avatar / Monogram with subtle styling */}
                <div className="relative w-20 h-20 rounded-2xl bg-teal-800 text-teal-50 flex items-center justify-center font-serif text-2xl font-bold shadow-xs shrink-0">
                  <span>MK</span>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center shadow-2xs">
                    <Award className="w-3.5 h-3.5 text-stone-900" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-stone-900 tracking-tight">
                    {FOUNDER_INFO.name}
                  </h3>
                  <p className="text-teal-800 font-semibold text-sm">
                    {FOUNDER_INFO.title}
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Mindshift Academy • Kavanur Center
                  </p>
                </div>
              </div>

              {/* Bio statements from prompt */}
              <div className="space-y-4 text-stone-700 text-base leading-relaxed">
                <p className="font-medium text-stone-900">
                  &ldquo;{FOUNDER_INFO.bio}&rdquo;
                </p>
                <p className="text-sm text-stone-600">
                  {FOUNDER_INFO.extendedBio}
                </p>
              </div>

              {/* Core Expertise Credentials */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider mb-3">
                  Therapeutic Focus Areas
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {FOUNDER_INFO.credentials.map((cred, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-700 bg-stone-50 rounded-xl p-2.5 border border-stone-100">
                      <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0" />
                      <span>{cred}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA within bio */}
            <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-stone-500">
                <Shield className="w-4 h-4 text-teal-700" />
                <span>Strictly Confidential Consultations</span>
              </div>
              <button
                onClick={onBookClick}
                className="px-5 py-2.5 rounded-full bg-teal-800 hover:bg-teal-900 text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Consult with Muhammad Khan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Prominent Guinness World Record Feature Card UI */}
          <div className="lg:col-span-6 flex flex-col justify-between rounded-3xl bg-gradient-to-br from-amber-500/10 via-stone-50 to-teal-800/5 p-8 sm:p-10 border border-amber-300/70 shadow-xs relative overflow-hidden">
            
            {/* Background watermark badge */}
            <Trophy className="absolute -bottom-10 -right-10 w-64 h-64 text-amber-500/5 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              
              {/* Highlight Badge */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
                  <Trophy className="w-3.5 h-3.5 text-amber-700" />
                  Official Distinction
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-stone-900 text-amber-300">
                  Global Record
                </span>
              </div>

              {/* Title & Description of the Record from prompt */}
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-400 text-stone-950 flex items-center justify-center shadow-md">
                  <Trophy className="w-7 h-7 text-stone-900" />
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
                  {FOUNDER_INFO.recordHighlight.title}
                </h3>
                
                <p className="text-sm font-semibold text-amber-900">
                  {FOUNDER_INFO.recordHighlight.subtitle}
                </p>
                
                <p className="text-stone-700 text-sm leading-relaxed">
                  {FOUNDER_INFO.recordHighlight.description}
                </p>
              </div>

              {/* Why This Matters for Your Therapy */}
              <div className="bg-white/90 rounded-2xl p-5 border border-amber-200/60 shadow-2xs space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-stone-900 uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4 text-teal-700" />
                  How This Elevates Your Mental Journey
                </div>
                <ul className="space-y-2 text-xs text-stone-600">
                  <li className="flex items-start gap-2">
                    <Activity className="w-3.5 h-3.5 text-teal-700 mt-0.5 shrink-0" />
                    <span><strong>Unrivaled Focus Protocols:</strong> Learn the exact mental conditioning tools used to maintain laser clarity under extreme pressure.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Brain className="w-3.5 h-3.5 text-teal-700 mt-0.5 shrink-0" />
                    <span><strong>Somatic & Cognitive Mastery:</strong> Transcend everyday anxiety and mental fatigue through proven nervous system control.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom Quote Ribbon */}
            <div className="mt-6 pt-5 border-t border-amber-200/60 flex items-center justify-between text-xs text-stone-600 relative z-10">
              <span className="italic font-serif">
                &ldquo;Where focus goes, cognitive transformation follows.&rdquo;
              </span>
              <span className="font-semibold text-teal-900">
                — Muhammad Khan
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
