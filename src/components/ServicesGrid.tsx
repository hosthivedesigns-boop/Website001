import React from 'react';
import { 
  UserCheck, 
  Brain, 
  Zap, 
  HeartPulse, 
  ArrowRight, 
  Check, 
  Clock, 
  Sparkles 
} from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesGridProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-teal-800" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-teal-800" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-teal-800" />;
      case 'HeartPulse':
        return <HeartPulse className="w-6 h-6 text-teal-800" />;
      default:
        return <Sparkles className="w-6 h-6 text-teal-800" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100/80 border border-teal-200/80 text-teal-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
            Specialized Care
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-stone-900">
            Services & Clinical Specialties
          </h2>
          <p className="text-stone-600 text-base leading-relaxed">
            Evidence-based therapeutic programs and focus conditioning designed for your unique personal goals.
          </p>
        </div>

        {/* 4 Clean Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {SERVICES_DATA.map((service: ServiceItem, index: number) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="group relative bg-white rounded-3xl p-8 sm:p-9 border border-stone-200/90 shadow-xs hover:shadow-md hover:border-teal-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-5">
                
                {/* Top Row: Modern Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-13 h-13 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center group-hover:bg-teal-800 group-hover:text-white transition-colors duration-300">
                    <div className="group-hover:text-white transition-colors">
                      {getIcon(service.iconName)}
                    </div>
                  </div>
                  
                  {service.badge && (
                    <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-stone-100 text-stone-700 border border-stone-200 group-hover:bg-teal-100/60 group-hover:text-teal-900 transition-colors">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Service Title & Core Description from Prompt */}
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-teal-900 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Session Duration & Benefits checklist */}
                <div className="pt-2 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-teal-700" />
                    <span>Duration: {service.sessionDuration}</span>
                  </div>

                  <ul className="space-y-2 pt-1 border-t border-stone-100">
                    {service.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2 text-xs text-stone-700">
                        <div className="w-4 h-4 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Bottom Interactive CTA */}
              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500 font-medium">
                  Available in Kavanur & Online
                </span>
                <button
                  id={`select-service-${service.id}`}
                  onClick={() => onSelectService(service.title)}
                  className="px-4 py-2 rounded-full bg-stone-100 hover:bg-teal-800 hover:text-white text-stone-800 text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 group-hover:bg-teal-800 group-hover:text-white cursor-pointer"
                >
                  <span>Select for Booking</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Reassuring note below services */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white border border-stone-200 text-xs text-stone-600 shadow-2xs">
            <span className="font-semibold text-stone-800">Unsure which service suits you best?</span>
            <span>Our intake consultation will assess your needs and tailor an exact protocol.</span>
            <button
              onClick={() => onSelectService('Individual Therapy')}
              className="text-teal-800 font-bold hover:underline ml-1 cursor-pointer"
            >
              Get Guidance →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
