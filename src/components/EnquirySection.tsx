import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle, Wand2, HelpCircle, ShieldAlert } from 'lucide-react';
import { EnquiryFormData, ProgramId } from '../types';
import { COURSES_DATA } from '../data/courses';

interface EnquirySectionProps {
  preselectedProgram: ProgramId | 'not-sure';
  onEnquirySuccess: (data: EnquiryFormData, refId: string) => void;
}

export const EnquirySection: React.FC<EnquirySectionProps> = ({
  preselectedProgram,
  onEnquirySuccess,
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    program: preselectedProgram || 'web-dev',
    currentLevel: 'college-student',
    preferredMode: 'weekday-evening',
    timeline: 'immediate',
    message: '',
    agreedToDemoTerms: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (preselectedProgram) {
      setFormData((prev) => ({ ...prev, program: preselectedProgram }));
    }
  }, [preselectedProgram]);

  const handleFillDemoData = () => {
    setFormData({
      fullName: 'Alex Morgan',
      email: 'alex.morgan.demo@example.com',
      phone: '+1 (555) 019-2834',
      program: preselectedProgram !== 'not-sure' ? preselectedProgram : 'web-dev',
      currentLevel: 'career-switcher',
      preferredMode: 'weekday-evening',
      timeline: 'next-month',
      message: 'I am transitioning from business operations to web engineering. Interested in knowing more about weekly 1:1 code reviews and cohort batch timings.',
      agreedToDemoTerms: true,
    });
    setErrors({});
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide a valid email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (name@domain.com).';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone or WhatsApp number.';
    } else if (formData.phone.trim().length < 7) {
      newErrors.phone = 'Phone number must have at least 7 digits.';
    }

    if (!formData.agreedToDemoTerms) {
      newErrors.agreedToDemoTerms = 'Please confirm you acknowledge this is a fictional demo enquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate network delay for realistic responsiveness
    setTimeout(() => {
      setIsSubmitting(false);
      const generatedRef = `NSA-${Math.floor(100000 + Math.random() * 900000)}`;
      onEnquirySuccess(formData, generatedRef);
    }, 600);
  };

  return (
    <section id="enquire" className="py-16 md:py-24 bg-white border-t border-slate-200 scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-2">
            <span>Admissions & Counseling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Enquire about a program.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Have questions about syllabus pacing, weekly hours, or batch schedules? Speak with our academic advisors.
          </p>
        </div>

        {/* Form Card Container */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xs relative">
          
          {/* Top Quick Actions bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-slate-200">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              <span>Fictional Demo Form · No real marketing or spam</span>
            </div>

            <button
              type="button"
              onClick={handleFillDemoData}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-semibold border border-blue-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              <Wand2 className="w-3.5 h-3.5 text-blue-600" />
              <span>Auto-fill Demo Data</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="fullName" className="block text-xs font-bold text-slate-900 mb-1.5">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                  }}
                  placeholder="e.g. Alex Morgan"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-xl bg-white border ${
                    errors.fullName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300'
                  } text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600`}
                />
                {errors.fullName && (
                  <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-900 mb-1.5">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="alex@example.com"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-xl bg-white border ${
                    errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300'
                  } text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600`}
                />
                {errors.email && (
                  <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Phone & Program Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-slate-900 mb-1.5">
                  Phone / WhatsApp <span className="text-rose-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  placeholder="+1 (555) 000-0000"
                  className={`w-full px-3.5 py-2.5 text-sm rounded-xl bg-white border ${
                    errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-300'
                  } text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600`}
                />
                {errors.phone && (
                  <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="program" className="block text-xs font-bold text-slate-900 mb-1.5">
                  Program Track of Interest <span className="text-rose-500">*</span>
                </label>
                <select
                  id="program"
                  value={formData.program}
                  onChange={(e) =>
                    setFormData({ ...formData, program: e.target.value as ProgramId | 'not-sure' })
                  }
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {COURSES_DATA.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.title} ({course.durationWeeks} Weeks · {course.level})
                    </option>
                  ))}
                  <option value="not-sure">Not sure yet / General Counseling</option>
                </select>
              </div>
            </div>

            {/* Row 3: Current Background & Preferred Batch Timing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="currentLevel" className="block text-xs font-bold text-slate-900 mb-1.5">
                  Current Background
                </label>
                <select
                  id="currentLevel"
                  value={formData.currentLevel}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      currentLevel: e.target.value as EnquiryFormData['currentLevel'],
                    })
                  }
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="college-student">University / College Student</option>
                  <option value="career-switcher">Career Switcher / Non-Tech Background</option>
                  <option value="working-tech">Working in Tech (Looking to Upskill)</option>
                  <option value="high-school">High School Student</option>
                  <option value="other">Other / Self-Taught</option>
                </select>
              </div>

              <div>
                <label htmlFor="preferredMode" className="block text-xs font-bold text-slate-900 mb-1.5">
                  Preferred Batch Timing
                </label>
                <select
                  id="preferredMode"
                  value={formData.preferredMode}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      preferredMode: e.target.value as EnquiryFormData['preferredMode'],
                    })
                  }
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-white border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="weekday-evening">Weekday Evenings (7:00 PM – 9:30 PM)</option>
                  <option value="weekend-morning">Weekend Cohort (Saturdays & Sundays 10:00 AM)</option>
                  <option value="flexible">Flexible / Recorded with Weekly 1:1 Reviews</option>
                </select>
              </div>
            </div>

            {/* Questions / Note */}
            <div>
              <label htmlFor="message" className="block text-xs font-bold text-slate-900 mb-1.5">
                Questions or Learning Goals (Optional)
              </label>
              <textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us what you are hoping to learn, your previous programming experience, or any specific questions..."
                className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            {/* Checkbox Acknowledgment */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreedToDemoTerms}
                  onChange={(e) => {
                    setFormData({ ...formData, agreedToDemoTerms: e.target.checked });
                    if (errors.agreedToDemoTerms) setErrors({ ...errors, agreedToDemoTerms: undefined });
                  }}
                  className="mt-0.5 rounded text-blue-600 focus:ring-blue-600 border-slate-300 w-4 h-4"
                />
                <span className="text-xs text-slate-600 leading-normal">
                  I understand that NextStep Academy is a <strong>fictional demonstration website</strong>. Submitting this form tests the portfolio workflow and will not contact a real institution.
                </span>
              </label>
              {errors.agreedToDemoTerms && (
                <p className="text-[11px] text-rose-600 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.agreedToDemoTerms}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-sm shadow-xs hover:shadow transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing Demo Enquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
