import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { FAQS_DATA } from '../data/faqs';
import { FaqItem } from '../types';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('placement-claims');
  const [activeCategory, setActiveCategory] = useState<'all' | 'admissions' | 'curriculum' | 'outcomes' | 'general'>('all');
  const [search, setSearch] = useState('');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    if (activeCategory !== 'all' && faq.category !== activeCategory) {
      return false;
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <section id="faqs" className="py-16 md:py-24 bg-white border-t border-slate-200 scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-2">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Transparent answers to common questions.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Everything you need to know about our learning methodology, demo platform, and expectations.
          </p>
        </div>

        {/* Category Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {(
            [
              { key: 'all', label: 'All Questions' },
              { key: 'outcomes', label: 'Outcomes & Guarantees' },
              { key: 'curriculum', label: 'Curriculum & Hours' },
              { key: 'admissions', label: 'Admissions' },
              { key: 'general', label: 'General' },
            ] as const
          ).map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat.key
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
          <h3 className="text-base font-bold text-slate-900">
            Have a question not addressed here?
          </h3>
          <p className="text-xs text-slate-500 mt-1 mb-4">
            Send an enquiry below. While this is a demo site, submitting the form provides a simulated confirmation receipt instantly.
          </p>
          <a
            href="#enquire"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
          >
            Go to Enquiry Form
          </a>
        </div>

      </div>
    </section>
  );
};
