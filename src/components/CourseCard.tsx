import React from 'react';
import { Clock, BarChart3, Laptop, CheckCircle, ArrowRight, FileText, Calendar } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  onViewSyllabus: (course: Course) => void;
  onEnquire: (courseId: Course['id']) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  course,
  onViewSyllabus,
  onEnquire,
}) => {
  return (
    <article className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      
      {/* Top Banner indicating Sample Demo Course */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={
            course.id === 'web-dev'
              ? 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80'
              : course.id === 'data-analytics'
              ? 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
              : course.id === 'programming-fundamentals'
              ? 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=600&q=80'
              : 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80'
          }
          alt={`${course.title} course preview`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2.5 left-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded font-semibold">
          Sample Demo Program
        </div>
        <div className="absolute bottom-2.5 right-3 bg-white/90 backdrop-blur-xs text-slate-900 text-[10px] px-2 py-0.5 rounded font-bold">
          {course.upcomingBatch}
        </div>
      </div>


      {/* Main Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div>
          {/* Unboxed Metadata Header (Zero-Pill Discipline) */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-500 mb-2">
            <span className="font-medium text-slate-700">{course.level}</span>
            <span aria-hidden="true">·</span>
            <span>{course.durationWeeks} Weeks ({course.hoursPerWeek})</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-700 font-medium">{course.mode}</span>
          </div>

          {/* Course Title & Subtitle */}
          <h3 className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
            {course.title}
          </h3>
          <p className="text-xs font-medium text-slate-600 mt-1">
            {course.subtitle}
          </p>

          {/* Tagline / Pitch */}
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            {course.tagline}
          </p>

          {/* Topics Included */}
          <div className="mt-5 pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Core Topics Included:
            </h4>
            <ul className="space-y-2 text-xs text-slate-700">
              {course.keyTopics.slice(0, 4).map((topic, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
            {course.keyTopics.length > 4 && (
              <p className="text-[11px] text-slate-600 mt-2 font-medium">
                + {course.keyTopics.length - 4} more specialized modules in full syllabus
              </p>
            )}
          </div>

          {/* Capstone Preview */}
          <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
            <span className="font-bold text-slate-900 block mb-0.5">
              Signature Capstone:
            </span>
            <p className="text-slate-600 line-clamp-2">
              {course.capstoneProject.title}
            </p>
          </div>
        </div>

        {/* Footer Meta & Seats status */}
        <div className="pt-2 flex items-center justify-between text-[11px] text-slate-600 border-t border-slate-100">
          <span>Registration Status:</span>
          <span className="font-semibold text-slate-700">{course.seatsStatus}</span>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-4 bg-slate-50/80 border-t border-slate-200/80 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onViewSyllabus(course)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200 shadow-2xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          <FileText className="w-3.5 h-3.5 text-slate-500" />
          <span>View Syllabus</span>
        </button>

        <button
          type="button"
          onClick={() => onEnquire(course.id)}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-2xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          <span>Enquire</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </article>
  );
};
