export type ProgramId = 'web-dev' | 'data-analytics' | 'programming-fundamentals' | 'interview-prep';

export interface SyllabusWeek {
  weekNumber: number;
  title: string;
  description: string;
  practicalWork: string;
}

export interface Course {
  id: ProgramId;
  title: string;
  subtitle: string;
  tagline: string;
  level: 'Beginner' | 'Beginner to Intermediate' | 'Intermediate' | 'Intermediate to Advanced';
  durationWeeks: number;
  hoursPerWeek: string;
  mode: 'Live Online' | 'Hybrid (Live + Lab)' | 'Flexible Online';
  idealFor: string;
  prerequisites: string;
  overview: string;
  keyTopics: string[];
  capstoneProject: {
    title: string;
    description: string;
    deliverables: string[];
  };
  toolsAndStack: string[];
  syllabus: SyllabusWeek[];
  upcomingBatch: string;
  seatsStatus: 'Open for Registration' | 'Limited Seats' | 'Filling Fast';
  ratingDemo: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  specialization: string;
  bio: string;
  experienceYears: number;
  fictionalBackground: string;
  coursesTaught: string[];
  avatarUrl: string;
  officeHours: string;
  sampleQuote: string;
}

export interface FaqItem {
  id: string;
  category: 'general' | 'admissions' | 'curriculum' | 'outcomes';
  question: string;
  answer: string;
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  program: ProgramId | 'not-sure';
  currentLevel: 'high-school' | 'college-student' | 'working-tech' | 'career-switcher' | 'other';
  preferredMode: 'weekday-evening' | 'weekend-morning' | 'flexible';
  timeline: 'immediate' | 'next-month' | 'exploring';
  message: string;
  agreedToDemoTerms: boolean;
}
