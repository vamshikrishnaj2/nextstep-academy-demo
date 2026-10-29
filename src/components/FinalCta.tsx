import React from 'react';
import { ArrowRight, BookOpen, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';

interface FinalCtaProps {
  onEnquireClick: () => void;
  onExplorePrograms: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({
  onEnquireClick,
  onExplorePrograms,
}) => {
  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/80 mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
          <span>Fictional Demonstration · Fall 2026 Cohorts</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight max-w-3xl mx-auto leading-tight">
          Ready to build real skills with disciplined direction?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
          Explore our structured curricula, review the week-by-week syllabuses, or submit a demo enquiry to test the workflow.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            type="button"
            onClick={onEnquireClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <span>Enquire for Next Cohort</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onExplorePrograms}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
          >
            <BookOpen className="w-4 h-4 text-slate-400" />
            <span>Browse All 4 Programs</span>
          </button>
        </div>

        {/* Quiet disclaimer kicker */}
        <p className="text-xs text-slate-400 mt-6 max-w-lg mx-auto">
          NextStep Academy is a prototype portfolio website. No payment processing, real enrollment, or guaranteed job placements.
        </p>

      </div>
    </section>
  );
};
