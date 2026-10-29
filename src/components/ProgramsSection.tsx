import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, BookOpen, Layers, CheckCircle2, TableProperties } from 'lucide-react';
import { COURSES_DATA } from '../data/courses';
import { CourseCard } from './CourseCard';
import { Course } from '../types';

interface ProgramsSectionProps {
  onViewSyllabus: (course: Course) => void;
  onEnquireForCourse: (courseId: Course['id']) => void;
  onOpenComparison: () => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({
  onViewSyllabus,
  onEnquireForCourse,
  onOpenComparison,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'beginner' | 'intermediate'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter((course) => {
      // Filter level
      if (selectedFilter === 'beginner') {
        if (!course.level.toLowerCase().includes('beginner')) return false;
      }
      if (selectedFilter === 'intermediate') {
        if (!course.level.toLowerCase().includes('intermediate')) return false;
      }

      // Filter search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesSubtitle = course.subtitle.toLowerCase().includes(query);
        const matchesTopics = course.keyTopics.some((t) => t.toLowerCase().includes(query));
        const matchesTools = course.toolsAndStack.some((tool) => tool.toLowerCase().includes(query));
        return matchesTitle || matchesSubtitle || matchesTopics || matchesTools;
      }

      return true;
    });
  }, [selectedFilter, searchQuery]);

  return (
    <section id="programs" className="py-16 md:py-24 bg-slate-50/50 scroll-mt-12">
      <div id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-200">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>Sample Demo Programs · Fall 2026</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Programs designed for practical mastery.
            </h2>
            <p className="text-base text-slate-600 mt-2">
              Each curriculum is built around real-world projects, direct code reviews, and structured milestones.
              <span className="block text-xs text-slate-600 mt-1">
                Notice: All tracks shown below are fictional demonstration offerings.
              </span>
            </p>
          </div>

          {/* Quick Action: Comparison Matrix */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={onOpenComparison}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-300 shadow-2xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <TableProperties className="w-4 h-4 text-blue-600" />
              <span>Compare All 4 Programs</span>
            </button>
          </div>
        </div>

        {/* Search and Interactive Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          
          {/* Segmented Filter Control (Allowed per frontend-design skill for interactive buttons) */}
          <div className="flex items-center p-1 bg-slate-200/70 rounded-xl max-w-fit">
            <button
              type="button"
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All 4 Programs
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('beginner')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedFilter === 'beginner'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Beginner Friendly
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter('intermediate')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedFilter === 'intermediate'
                  ? 'bg-white text-slate-900 shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Intermediate / Advanced
            </button>
          </div>

          {/* Search Input */}
          <div className="relative max-w-xs w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics, tools (React, SQL, Git)..."
              className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl bg-white border border-slate-300 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs px-1"
              >
                Clear
              </button>
            )}
          </div>

        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onViewSyllabus={onViewSyllabus}
                onEnquire={onEnquireForCourse}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-4 rounded-2xl border border-dashed border-slate-300 bg-white">
            <p className="text-sm font-semibold text-slate-700">
              No sample programs match "{searchQuery}".
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Try searching for "React", "Python", "SQL", or clear your filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
