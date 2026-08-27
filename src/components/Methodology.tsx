import React, { useState } from 'react';
import { 
  Sparkles, 
  Search, 
  RefreshCw, 
  Sun, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { METHODOLOGY_STEPS } from '../data/content';

interface MethodologyProps {
  onBookClick: () => void;
}

export const Methodology: React.FC<MethodologyProps> = ({ onBookClick }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-teal-800" />;
      case 1:
        return <RefreshCw className="w-5 h-5 text-teal-800" />;
      case 2:
        return <Sun className="w-5 h-5 text-teal-800" />;
      default:
        return <Sparkles className="w-5 h-5 text-teal-800" />;
    }
  };

  return (
    <section id="methodology" className="py-20 lg:py-28 bg-[#F4F3EE] border-y border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100/80 border border-teal-200/80 text-teal-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
            The Mindshift Pathway
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Why Choose Mindshift Academy?
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            A structured, 3-phase therapeutic journey transforming psychological friction into sustained inner strength.
          </p>
        </div>

        {/* 3-Step Process Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {METHODOLOGY_STEPS.map((step, index) => {
            const isActive = activeStepIndex === index;
            return (
              <div
                key={step.number}
                id={`methodology-step-${index + 1}`}
                onClick={() => setActiveStepIndex(index)}
                className={`cursor-pointer rounded-3xl p-8 transition-all duration-300 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-white border-teal-600 shadow-md ring-1 ring-teal-600/20'
                    : 'bg-white/80 hover:bg-white border-stone-200/90 shadow-xs hover:border-stone-300'
                }`}
              >
                <div className="space-y-6">
                  
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                        {getStepIcon(index)}
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-stone-100 text-stone-700 font-mono">
                        STEP {step.number}
                      </span>
                    </div>

                    <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
                      Phase {index + 1}
                    </span>
                  </div>

                  {/* Step Title & Tagline from Prompt */}
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-stone-900">
                      {step.name}
                    </h3>
                    <p className="text-sm font-semibold text-teal-800">
                      ({step.tagline})
                    </p>
                  </div>

                  {/* Step Description */}
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Bullet points */}
                  <div className="pt-2 space-y-2 border-t border-stone-100">
                    {step.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-stone-700">
                        <CheckCircle2 className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Step indicator footer */}
                <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span>{index === 0 ? 'Diagnostic & Assessment' : index === 1 ? 'Cognitive Restructuring' : 'Lifelong Resilience'}</span>
                  <span className="font-semibold text-teal-800">
                    {isActive ? 'Active Focus' : 'Click to highlight'}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Interactive Deep-Dive Summary Box */}
        <div className="mt-10 rounded-3xl bg-white p-7 sm:p-9 border border-stone-200/90 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2 text-xs font-bold text-teal-800 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-teal-700" />
              Guaranteed Personalized Progression
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-stone-900">
              Ready to start your Discovery session at our Kavanur center?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 max-w-xl">
              No generic advice. We tailor every intervention to your personal psychology and neurological stress patterns.
            </p>
          </div>

          <button
            onClick={onBookClick}
            className="px-6 py-3.5 rounded-full bg-teal-800 hover:bg-teal-900 text-white text-xs font-semibold tracking-wide transition-all shadow-xs hover:shadow-md flex items-center gap-2 shrink-0 cursor-pointer active:scale-98"
          >
            <span>Begin Step 01: Discover</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
