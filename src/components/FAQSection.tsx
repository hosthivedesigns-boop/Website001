import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS_DATA } from '../data/content';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#F4F3EE] border-t border-stone-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100/80 border border-teal-200/80 text-teal-900 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-teal-700" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900">
            What to Expect at Mindshift Academy
          </h2>
          <p className="text-stone-600 text-sm leading-relaxed">
            Clear answers to help you feel confident and prepared for your mental wellness journey.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                id={`faq-item-${index}`}
                className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none hover:bg-stone-50/50"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-stone-900 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-teal-100 text-teal-800' : 'text-stone-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
