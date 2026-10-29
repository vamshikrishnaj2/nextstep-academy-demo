import React, { useState } from 'react';
import { DemoNoticeBanner } from './components/DemoNoticeBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgramsSection } from './components/ProgramsSection';
import { SyllabusModal } from './components/SyllabusModal';
import { CourseComparison } from './components/CourseComparison';
import { LearningExperience } from './components/LearningExperience';
import { FacultySection } from './components/FacultySection';
import { FaqSection } from './components/FaqSection';
import { EnquirySection } from './components/EnquirySection';
import { EnquiryConfirmationModal } from './components/EnquiryConfirmationModal';
import { ContactLocationSection } from './components/ContactLocationSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { Course, EnquiryFormData, ProgramId } from './types';
import { COURSES_DATA } from './data/courses';

export default function App() {
  const [selectedCourseForSyllabus, setSelectedCourseForSyllabus] = useState<Course | null>(null);
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [preselectedProgram, setPreselectedProgram] = useState<ProgramId | 'not-sure'>('web-dev');
  
  // Enquiry Receipt state
  const [submittedEnquiry, setSubmittedEnquiry] = useState<EnquiryFormData | null>(null);
  const [enquiryRefId, setEnquiryRefId] = useState('');
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireForCourse = (courseId: Course['id']) => {
    setPreselectedProgram(courseId);
    scrollToSection('enquire');
  };

  const handleGeneralEnquireClick = () => {
    scrollToSection('enquire');
  };

  const handleExplorePrograms = () => {
    scrollToSection('programs');
  };

  const handleEnquirySuccess = (data: EnquiryFormData, refId: string) => {
    setSubmittedEnquiry(data);
    setEnquiryRefId(refId);
    setIsReceiptModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* 1. DEMO NOTICE BANNER */}
      <DemoNoticeBanner />

      {/* 2. NAVBAR */}
      <Navbar onEnquireClick={handleGeneralEnquireClick} />

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {/* 3. HERO SECTION */}
        <Hero
          onExplorePrograms={handleExplorePrograms}
          onTalkToUs={handleGeneralEnquireClick}
        />

        {/* 4 & 5. PROGRAMS & COURSE DETAIL CARDS */}
        <ProgramsSection
          onViewSyllabus={(course) => setSelectedCourseForSyllabus(course)}
          onEnquireForCourse={handleEnquireForCourse}
          onOpenComparison={() => setIsComparisonOpen(true)}
        />

        {/* 6. LEARNING EXPERIENCE */}
        <LearningExperience onTalkToUs={handleGeneralEnquireClick} />

        {/* 7. FACULTY */}
        <FacultySection />

        {/* 8. FAQs */}
        <FaqSection />

        {/* 9. ENQUIRY FORM */}
        <EnquirySection
          preselectedProgram={preselectedProgram}
          onEnquirySuccess={handleEnquirySuccess}
        />

        {/* 10. LOCATION + CONTACT */}
        <ContactLocationSection />

        {/* 11. FINAL CTA */}
        <FinalCta
          onEnquireClick={handleGeneralEnquireClick}
          onExplorePrograms={handleExplorePrograms}
        />
      </main>

      {/* 12. FOOTER */}
      <Footer
        onSelectProgram={(courseId) => {
          const found = COURSES_DATA.find((c) => c.id === courseId);
          if (found) {
            setSelectedCourseForSyllabus(found);
          }
        }}
        onEnquireClick={handleGeneralEnquireClick}
      />

      {/* MODALS */}
      {/* Detailed Syllabus Modal */}
      <SyllabusModal
        course={selectedCourseForSyllabus}
        onClose={() => setSelectedCourseForSyllabus(null)}
        onEnquireForCourse={handleEnquireForCourse}
      />

      {/* Side-by-side Course Comparison Modal */}
      <CourseComparison
        isOpen={isComparisonOpen}
        onClose={() => setIsComparisonOpen(false)}
        onSelectCourse={handleEnquireForCourse}
        onViewSyllabus={(course) => {
          setIsComparisonOpen(false);
          setSelectedCourseForSyllabus(course);
        }}
      />

      {/* Enquiry Submission Confirmation Modal */}
      <EnquiryConfirmationModal
        isOpen={isReceiptModalOpen}
        onClose={() => setIsReceiptModalOpen(false)}
        data={submittedEnquiry}
        referenceNumber={enquiryRefId}
      />
    </div>
  );
}
