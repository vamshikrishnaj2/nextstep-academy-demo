import React from 'react';
import { GraduationCap, ShieldAlert, ArrowUpRight, Github, Linkedin, Twitter } from 'lucide-react';
import { COURSES_DATA } from '../data/courses';

interface FooterProps {
  onSelectProgram: (id: string) => void;
  onEnquireClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectProgram, onEnquireClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs">
      
      {/* Top Disclaimer Banner inside Footer */}
      <div className="bg-slate-900/90 border-b border-slate-800 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-slate-300 leading-relaxed text-xs">
            <strong className="text-white">PORTFOLIO DEMO PROJECT DISCLAIMER:</strong> This is a fictional demonstration website designed for portfolio presentation. NextStep Academy is <strong>not</strong> an accredited educational institution. All courses, instructors, statistics, curriculum schedules, and contact details are fictional. We never guarantee exam results, job placements, or salaries.
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-base text-white tracking-tight">
                NextStep <span className="text-blue-400 font-medium">Academy</span>
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Structured learning programs designed to help students build practical skills. Real code, direct mentorship, and honest learning without misleading hype.
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
                Simulated Social Links
              </span>
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer transition-colors" title="Demo GitHub Link">
                  <Github className="w-4 h-4" />
                </span>
                <span className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer transition-colors" title="Demo LinkedIn Link">
                  <Linkedin className="w-4 h-4" />
                </span>
                <span className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer transition-colors" title="Demo Twitter Link">
                  <Twitter className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>

          {/* Programs Column */}
          <div>
            <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Sample Programs
            </h3>
            <ul className="space-y-2">
              {COURSES_DATA.map((course) => (
                <li key={course.id}>
                  <button
                    type="button"
                    onClick={() => onSelectProgram(course.id)}
                    className="text-left text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {course.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Platform Links
            </h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-blue-400 transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-blue-400 transition-colors">
                  Why Us & Pedagogy
                </a>
              </li>
              <li>
                <a href="#faculty" className="hover:text-blue-400 transition-colors">
                  Fictional Faculty
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-blue-400 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">
                  Campus & Location
                </a>
              </li>
            </ul>
          </div>

          {/* Demo Actions Column */}
          <div>
            <h3 className="font-bold text-white text-xs uppercase tracking-wider mb-3">
              Admissions
            </h3>
            <p className="text-slate-400 mb-3">
              Test our interactive enquiry workflow to explore batch timing and registration.
            </p>
            <button
              type="button"
              onClick={onEnquireClick}
              className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <span className="block text-[10px] text-slate-500 text-center mt-2">
              Instant in-browser feedback receipt
            </span>
          </div>

        </div>

        {/* Bottom copyright & disclosures */}
        <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {currentYear} NextStep Academy. Fictional demo platform for portfolio showcase.
          </div>
          <div className="flex items-center gap-4">
            <span>Portfolio Demo Terms</span>
            <span>·</span>
            <span>Zero Job Guarantees</span>
            <span>·</span>
            <span>Fictional Personas</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
