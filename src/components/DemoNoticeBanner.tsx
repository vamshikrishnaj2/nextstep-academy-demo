import React, { useState } from 'react';
import { AlertCircle, X, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const DemoNoticeBanner: React.FC = () => {
  const [isDismissed, setIsDismissed] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);

  return (
    <>
      {!isDismissed && (
        <aside
          role="region"
          aria-label="Demo Website Notice"
          className="bg-amber-500/15 border-b border-amber-500/30 text-slate-800 text-xs py-2.5 px-4 sticky top-0 z-50 backdrop-blur-md"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1 font-bold text-amber-900 uppercase tracking-wider text-[11px] bg-amber-200/80 px-2 py-0.5 rounded">
                <AlertCircle className="w-3.5 h-3.5 text-amber-800" />
                DEMO CONCEPT — Fictional brand created for portfolio demonstration
              </span>
              <span className="text-slate-700">
                <strong>NextStep Academy</strong> is a fictional demo project.
              </span>
              <span className="hidden md:inline text-slate-500">·</span>
              <span className="hidden md:inline text-slate-700">
                All courses, faculty, schedules, and statistics are fictional samples.
              </span>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setShowDetailModal(true)}
                className="text-blue-700 hover:text-blue-900 font-semibold underline underline-offset-2 text-xs focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-1"
              >
                Read Disclaimer
              </button>
              <button
                type="button"
                onClick={() => setIsDismissed(true)}
                aria-label="Dismiss demo notice banner"
                className="p-1 text-slate-500 hover:text-slate-800 transition-colors rounded focus-visible:ring-2 focus-visible:ring-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Transparency & Demo Details Modal */}
      {showDetailModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="disclaimer-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
        >
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 md:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 id="disclaimer-title" className="text-lg font-bold text-slate-900">
                    Important Demo Notice & Disclaimer
                  </h3>
                  <p className="text-xs text-slate-500">NextStep Academy Portfolio Demonstration</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowDetailModal(false)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-5 space-y-4 text-sm text-slate-600 leading-relaxed">
              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-amber-900 text-xs">
                <strong>Fictional Demonstration Only:</strong> This website was built as an engineering design prototype. NextStep Academy does not operate classes, accept tuition fees, or award formal state/university-accredited credentials.
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  No Placement or Salary Guarantees
                </h4>
                <p>
                  We explicitly reject misleading recruitment promises. Any metrics, student profiles, outcomes, or case studies displayed on this website are mock samples created for visual layout representation.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  Fictional Faculty & Testimonials
                </h4>
                <p>
                  All faculty names, biographies, photos, quotes, and company backgrounds are simulated personas to demonstrate how an academic roster looks in a modern education web platform.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  Enquiry Form Behavior
                </h4>
                <p>
                  The interactive enquiry form runs locally in your browser. When you submit an enquiry, it creates an in-browser confirmation receipt for testing purposes. No marketing communications or real emails will be generated.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setShowDetailModal(false)}
                className="px-5 py-2.5 bg-slate-900 text-white font-medium text-sm rounded-xl hover:bg-slate-800 transition-colors"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
