import React from 'react';
import { X, Check, ArrowRight, TableProperties } from 'lucide-react';
import { COURSES_DATA } from '../data/courses';
import { Course } from '../types';

interface CourseComparisonProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCourse: (courseId: Course['id']) => void;
  onViewSyllabus: (course: Course) => void;
}

export const CourseComparison: React.FC<CourseComparisonProps> = ({
  isOpen,
  onClose,
  onSelectCourse,
  onViewSyllabus,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="comparison-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in"
    >
      <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <TableProperties className="w-5 h-5 text-blue-400" />
            <div>
              <h2 id="comparison-title" className="text-lg sm:text-xl font-bold">
                Program Comparison Matrix
              </h2>
              <p className="text-xs text-slate-300">
                Compare all 4 NextStep Academy sample demo programs side by side
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
            aria-label="Close comparison matrix"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Table Area */}
        <div className="overflow-x-auto p-4 sm:p-6">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="p-3 font-bold text-slate-600 uppercase tracking-wider w-36">
                  Attribute
                </th>
                {COURSES_DATA.map((course) => (
                  <th key={course.id} className="p-3 font-bold text-slate-900 min-w-[200px]">
                    <div className="text-sm font-extrabold">{course.title}</div>
                    <div className="text-[11px] text-slate-500 font-normal mt-0.5">{course.level}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              
              <tr>
                <td className="p-3 font-semibold text-slate-900 bg-slate-50/50">Duration</td>
                {COURSES_DATA.map((c) => (
                  <td key={c.id} className="p-3 font-medium text-slate-900">
                    {c.durationWeeks} Weeks
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold text-slate-900 bg-slate-50/50">Time Commitment</td>
                {COURSES_DATA.map((c) => (
                  <td key={c.id} className="p-3">
                    {c.hoursPerWeek}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold text-slate-900 bg-slate-50/50">Delivery Mode</td>
                {COURSES_DATA.map((c) => (
                  <td key={c.id} className="p-3">
                    {c.mode}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold text-slate-900 bg-slate-50/50">Prerequisites</td>
                {COURSES_DATA.map((c) => (
                  <td key={c.id} className="p-3 text-slate-600 leading-snug">
                    {c.prerequisites}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold text-slate-900 bg-slate-50/50">Core Tools</td>
                {COURSES_DATA.map((c) => (
                  <td key={c.id} className="p-3">
                    <div className="flex flex-wrap gap-1">
                      {c.toolsAndStack.slice(0, 4).map((tool) => (
                        <span key={tool} className="px-1.5 py-0.5 bg-slate-100 rounded text-[10px] font-mono text-slate-700">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold text-slate-900 bg-slate-50/50">Signature Capstone</td>
                {COURSES_DATA.map((c) => (
                  <td key={c.id} className="p-3 text-slate-800 font-medium">
                    {c.capstoneProject.title}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold text-slate-900 bg-slate-50/50">Ideal For</td>
                {COURSES_DATA.map((c) => (
                  <td key={c.id} className="p-3 text-slate-600 leading-snug">
                    {c.idealFor}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-3 font-semibold text-slate-900 bg-slate-50/50">Actions</td>
                {COURSES_DATA.map((c) => (
                  <td key={c.id} className="p-3 space-y-2">
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onViewSyllabus(c);
                      }}
                      className="w-full text-left font-semibold text-blue-600 hover:text-blue-800 text-xs block"
                    >
                      View Syllabus →
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onSelectCourse(c.id);
                      }}
                      className="w-full py-1.5 px-3 rounded-lg bg-slate-900 hover:bg-blue-600 text-white font-medium text-xs transition-colors"
                    >
                      Enquire
                    </button>
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>All 4 offerings are fictional demonstration programs.</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-200 text-slate-800 font-semibold hover:bg-slate-300 transition-colors"
          >
            Close Comparison
          </button>
        </div>

      </div>
    </div>
  );
};
