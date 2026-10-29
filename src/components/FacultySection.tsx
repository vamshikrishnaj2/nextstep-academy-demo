import React, { useState } from 'react';
import { UserCheck, Clock, BookOpen, MessageSquare, Quote, X, ExternalLink } from 'lucide-react';
import { FACULTY_DATA } from '../data/faculty';
import { FacultyMember } from '../types';

export const FacultySection: React.FC = () => {
  const [selectedInstructor, setSelectedInstructor] = useState<FacultyMember | null>(null);

  return (
    <section id="faculty" className="py-16 md:py-24 bg-slate-50/50 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-2">
            <UserCheck className="w-4 h-4 text-blue-600" />
            <span>Fictional Demo Instructors</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Learn directly from seasoned mentors.
          </h2>
          <p className="text-base text-slate-600 mt-2">
            Our instructional team pairs deep industry craft with an empathetic approach to teaching.
            <span className="block text-xs text-slate-500 mt-1">
              Note: All instructor names, photographs, and career histories are fictional demo personas.
            </span>
          </p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACULTY_DATA.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Photo Header */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={faculty.avatarUrl}
                    alt={faculty.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded font-semibold">
                    {faculty.experienceYears}+ Yrs Exp
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {faculty.name}
                    </h3>
                    <p className="text-xs font-semibold text-blue-600 mt-0.5">
                      {faculty.role}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {faculty.specialization}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {faculty.bio}
                  </p>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                      Active Courses:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {faculty.coursesTaught.map((course) => (
                        <span
                          key={course}
                          className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-4 bg-slate-50 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setSelectedInstructor(faculty)}
                  className="w-full py-2 px-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>View Office Hours & Bio</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Instructor Modal */}
      {selectedInstructor && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="mentor-name"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in"
        >
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3.5">
                <img
                  src={selectedInstructor.avatarUrl}
                  alt={selectedInstructor.name}
                  className="w-14 h-14 rounded-xl object-cover border border-slate-200"
                />
                <div>
                  <h3 id="mentor-name" className="text-lg font-bold text-slate-900">
                    {selectedInstructor.name}
                  </h3>
                  <p className="text-xs text-blue-600 font-medium">
                    {selectedInstructor.role}
                  </p>
                  <span className="text-[10px] text-slate-400 uppercase font-mono">
                    Fictional Demo Profile
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedInstructor(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-4 text-xs text-slate-600 leading-relaxed">
              <div>
                <span className="font-bold text-slate-900 block mb-1">Industry Background:</span>
                <p>{selectedInstructor.fictionalBackground}</p>
              </div>

              <div>
                <span className="font-bold text-slate-900 block mb-1">Weekly Office Hours:</span>
                <div className="flex items-center gap-2 text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-200 font-medium">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>{selectedInstructor.officeHours}</span>
                </div>
              </div>

              <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl text-blue-900 italic">
                <Quote className="w-4 h-4 text-blue-400 mb-1 inline mr-1" />
                {selectedInstructor.sampleQuote}
              </div>

              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                Notice: All faculty profiles on NextStep Academy are simulated demo mockups for UI demonstration.
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedInstructor(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
