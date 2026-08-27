import React, { useState, useEffect } from 'react';
import { Sparkles, Play, Pause, RotateCcw, Heart, CheckCircle, BrainCircuit } from 'lucide-react';

export const MindsetCheckWidget: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'Inhale' | 'Hold' | 'Exhale' | 'Rest'>('Inhale');
  const [progress, setProgress] = useState(0);
  const [cyclesCompleted, setCyclesCompleted] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isActive) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            // switch phase
            setPhase((currentPhase) => {
              if (currentPhase === 'Inhale') return 'Hold';
              if (currentPhase === 'Hold') return 'Exhale';
              if (currentPhase === 'Exhale') return 'Rest';
              // Completed a full 4x4 box breathing cycle
              setCyclesCompleted((c) => c + 1);
              return 'Inhale';
            });
            return 0;
          }
          return prev + 2.5; // 4 seconds per phase (40 ticks of 100ms)
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isActive]);

  const handleReset = () => {
    setIsActive(false);
    setProgress(0);
    setPhase('Inhale');
  };

  const getPhaseInstruction = () => {
    switch (phase) {
      case 'Inhale':
        return 'Inhale deeply through your nose... expand your diaphragm.';
      case 'Hold':
        return 'Hold gently with mental stillness... observe clarity.';
      case 'Exhale':
        return 'Exhale slowly through your mouth... release tension.';
      case 'Rest':
        return 'Pause in quiet awareness before the next breath.';
    }
  };

  return (
    <section id="mindset-practice" className="py-16 bg-[#FAF9F6] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-stone-200/90 p-8 sm:p-12 shadow-xs text-center relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Section badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100/70 text-teal-900 text-xs font-semibold uppercase tracking-wider mb-4">
            <BrainCircuit className="w-3.5 h-3.5 text-teal-700" />
            Interactive Mindset Reset
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
            60-Second Clarity & Grounding Technique
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto mb-8">
            Experience the foundational nervous system reset used in Muhammad Khan's cognitive focus sessions.
          </p>

          {/* Breathing Circle Visualizer */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-8 flex items-center justify-center">
            {/* Outer pulsating ring */}
            <div
              className={`absolute inset-0 rounded-full border-2 border-teal-600/30 transition-all duration-700 ${
                isActive
                  ? phase === 'Inhale' || phase === 'Hold'
                    ? 'scale-110 border-teal-500/60 bg-teal-50/50'
                    : 'scale-95 border-teal-700/20 bg-stone-50'
                  : 'scale-100 bg-stone-50/60'
              }`}
            />

            {/* Inner Focus Core */}
            <div className="relative z-10 text-center space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-800">
                {phase}
              </span>
              <p className="text-xl sm:text-2xl font-extrabold text-stone-900 font-mono">
                {isActive ? `${Math.ceil((100 - progress) / 25)}s` : 'Ready'}
              </p>
              <span className="text-[10px] text-stone-500 block">
                {cyclesCompleted} Cycles Done
              </span>
            </div>

            {/* Progress Arc Indicator */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
              <circle
                cx="50%"
                cy="50%"
                r="44%"
                className="stroke-stone-200"
                strokeWidth="4"
                fill="transparent"
              />
              <circle
                cx="50%"
                cy="50%"
                r="44%"
                className="stroke-teal-800 transition-all duration-100"
                strokeWidth="4"
                strokeDasharray={280}
                strokeDashoffset={280 - (280 * progress) / 100}
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>
          </div>

          {/* Current instruction prompt */}
          <p className="text-sm font-medium text-stone-700 mb-6 min-h-[24px] transition-opacity duration-300">
            {isActive ? getPhaseInstruction() : 'Click "Start Exercise" to begin 4-4-4 box breathing.'}
          </p>

          {/* Controls */}
          <div className="flex items-center justify-center gap-3">
            <button
              id="breathing-toggle-btn"
              onClick={() => setIsActive(!isActive)}
              className="px-6 py-3 rounded-full bg-teal-800 hover:bg-teal-900 text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-xs hover:shadow-md cursor-pointer active:scale-98"
            >
              {isActive ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Pause Reset</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Start Exercise</span>
                </>
              )}
            </button>

            <button
              id="breathing-reset-btn"
              onClick={handleReset}
              className="p-3 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold transition-colors cursor-pointer"
              title="Reset timer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Mini benefits note */}
          <div className="mt-8 pt-6 border-t border-stone-100 flex flex-wrap items-center justify-center gap-6 text-xs text-stone-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-teal-700" /> Lowers Cortisol & Heart Rate
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-teal-700" /> Restores Prefrontal Brain Focus
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-teal-700" /> Practiced at Mindshift Academy
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
