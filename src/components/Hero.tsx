import React from 'react';
import { ArrowRight, Compass, ShieldCheck, CheckCircle, Sparkles, Terminal, Database, Code2, Users } from 'lucide-react';

interface HeroProps {
  onExplorePrograms: () => void;
  onTalkToUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePrograms, onTalkToUs }) => {
  return (
    <section id="home" className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 border-b border-slate-200/60">
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
        alt="Students collaborating in a bright, modern learning environment"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-slate-50/90 pointer-events-none" />

      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy, Action Buttons */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Context kicker: clean unboxed text */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700">
              <Compass className="w-4 h-4 text-blue-600" />
              <span>NextStep Academy · Educational Demo Platform</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Learn with direction.{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">
                Grow with confidence.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal">
              Structured learning programs designed to help students build practical skills.
            </p>

            <div className="p-3.5 bg-blue-50/70 border border-blue-200/80 rounded-xl text-xs text-blue-900/90 leading-relaxed max-w-xl">
              <strong>Transparent Demo Policy:</strong> We do not offer unrealistic shortcuts or guaranteed job promises. We provide disciplined curriculum, direct 1-on-1 code reviews, and project-based skill building.
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onExplorePrograms}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-sm hover:shadow-md transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onTalkToUs}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-300 shadow-2xs hover:border-slate-400 transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400"
              >
                <span>Talk to Us</span>
              </button>
            </div>

            {/* Unboxed Highlights (Zero-Pill Discipline) */}
            <div className="pt-4 border-t border-slate-200/80">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-slate-500">
                <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Portfolio Demo Prototype
                </span>
                <span aria-hidden="true">·</span>
                <span>4 Technical Tracks</span>
                <span aria-hidden="true">·</span>
                <span>Weekly 1:1 Reviews</span>
                <span aria-hidden="true">·</span>
                <span>Sample Capstones</span>
              </div>
            </div>

          </div>

          {/* Right Column: Structured Educational Program Preview Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
              
              {/* Header bar of preview */}
              <div className="bg-slate-900 px-5 py-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-300 pl-2">
                    nextstep-curriculum.edu
                  </span>
                </div>
                <span className="text-[11px] font-mono text-blue-400 font-semibold">
                  DEMO SPEC
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-600 uppercase tracking-wider font-semibold">
                      Student Learning Loop
                    </span>
                    <h2 className="text-base font-bold text-slate-900">
                      How NextStep Cohorts Work
                    </h2>
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                    Sample Model
                  </span>
                </div>

                {/* Stepped sequence */}
                <div className="space-y-3.5">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      1
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">Direct Conceptual Teaching</h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Deep dive into core primitives, architecture, and practical engineering trade-offs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      2
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">Deliberate Code Practice</h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Hands-on laboratory tasks and exercises with automated linting and unit test suites.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      3
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">1:1 Mentorship & Code Audits</h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Line-by-line feedback from experienced engineers on style, architecture, and bugs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      4
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-slate-900">Defensible Capstone Project</h3>
                      <p className="text-xs text-slate-600 mt-0.5">
                        Production-deployed portfolio applications you can explain and demonstrate in depth.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom mini-summary */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <span>Upcoming Demo Term:</span>
                  <span className="font-semibold text-slate-800">Fall 2026 Batch</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
