import React, { useState } from 'react';
import { X, Calendar, Clock, BookOpen, Layers, CheckCircle2, ArrowRight, Download, Laptop, FileText } from 'lucide-react';
import { Course } from '../types';

interface SyllabusModalProps {
  course: Course | null;
  onClose: () => void;
  onEnquireForCourse: (courseId: Course['id']) => void;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  course,
  onClose,
  onEnquireForCourse,
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!course) return null;

  const handleSimulatedDownload = () => {
    setDownloadSuccess(true);
    // Create a mock text file download containing the course curriculum summary
    const content = `NEXTSTEP ACADEMY (DEMO PLATFORM)
SYLLABUS OUTLINE: ${course.title.toUpperCase()}
Level: ${course.level} | Duration: ${course.durationWeeks} Weeks (${course.hoursPerWeek})
Mode: ${course.mode}

OVERVIEW:
${course.overview}

KEY TOPICS COVERED:
${course.keyTopics.map((t, i) => `${i + 1}. ${t}`).join('\n')}

WEEKLY BREAKDOWN:
${course.syllabus
  .map(
    (w) => `Week ${w.weekNumber}: ${w.title}
- Focus: ${w.description}
- Practical Lab: ${w.practicalWork}`
  )
  .join('\n\n')}

CAPSTONE PROJECT: ${course.capstoneProject.title}
${course.capstoneProject.description}
Deliverables:
${course.capstoneProject.deliverables.map((d) => `- ${d}`).join('\n')}

DISCLAIMER: Fictional demonstration syllabus for NextStep Academy.`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `NextStep-Demo-Syllabus-${course.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="syllabus-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in"
    >
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-start justify-between gap-4 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold mb-1">
              <span>SAMPLE DEMO SYLLABUS</span>
              <span>·</span>
              <span>{course.upcomingBatch}</span>
            </div>
            <h2 id="syllabus-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {course.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {course.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Meta Row (Zero-pill clean typography) */}
        <div className="px-5 sm:px-6 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
          <div className="flex items-center gap-1.5 font-medium text-slate-800">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>{course.durationWeeks} Weeks ({course.hoursPerWeek})</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium text-slate-800">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>Level: {course.level}</span>
          </div>
          <div className="flex items-center gap-1.5 font-medium text-slate-800">
            <Laptop className="w-4 h-4 text-emerald-600" />
            <span>Mode: {course.mode}</span>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-slate-700 text-sm leading-relaxed">
          
          {/* Course Overview */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Program Objective
            </h3>
            <p className="text-slate-800 text-sm">{course.overview}</p>
          </div>

          {/* Prerequisites & Audience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <div>
              <span className="font-bold text-slate-900 block mb-1">Target Learner Profile</span>
              <p className="text-slate-600">{course.idealFor}</p>
            </div>
            <div>
              <span className="font-bold text-slate-900 block mb-1">Prerequisites</span>
              <p className="text-slate-600">{course.prerequisites}</p>
            </div>
          </div>

          {/* Tools & Tech Stack */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Tools & Technologies Practiced
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.toolsAndStack.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 text-xs font-mono bg-slate-100 text-slate-800 rounded-md border border-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Weekly Syllabus Breakdown */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Week-by-Week Curriculum Roadmap
              </h3>
              <span className="text-[11px] text-slate-600">
                {course.syllabus.length} Structured Modules
              </span>
            </div>

            <div className="space-y-3">
              {course.syllabus.map((week) => (
                <div
                  key={week.weekNumber}
                  className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-xs font-bold font-mono text-blue-700 shrink-0">
                      Week {week.weekNumber}:
                    </span>
                    <h4 className="text-xs font-bold text-slate-900">
                      {week.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 mb-2">
                    {week.description}
                  </p>
                  <div className="flex items-start gap-1.5 text-[11px] bg-blue-50/60 p-2 rounded-lg text-blue-900">
                    <span className="font-semibold shrink-0">Practical Work:</span>
                    <span>{week.practicalWork}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Capstone Project */}
          <div className="p-4 rounded-xl bg-slate-900 text-white space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-blue-400 font-bold uppercase tracking-wider">
                Signature Capstone Project
              </span>
              <span className="text-[11px] text-slate-400">Portfolio Grade</span>
            </div>
            <h4 className="text-base font-bold text-white">
              {course.capstoneProject.title}
            </h4>
            <p className="text-xs text-slate-300 leading-normal">
              {course.capstoneProject.description}
            </p>
            <div className="pt-2 border-t border-slate-800">
              <span className="text-xs font-semibold text-slate-200 block mb-1.5">
                Key Capstone Deliverables:
              </span>
              <ul className="space-y-1 text-xs text-slate-300">
                {course.capstoneProject.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleSimulatedDownload}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            {downloadSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Downloaded (.txt)</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Download Sample Outline</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl text-slate-600 hover:text-slate-900 text-xs font-semibold transition-colors"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onEnquireForCourse(course.id);
              }}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs hover:shadow transition-all"
            >
              <span>Enquire for {course.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
