import { FaqItem } from '../types';

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'demo-status',
    category: 'general',
    question: 'Is NextStep Academy a real educational institution or university?',
    answer: 'No. NextStep Academy is a fictional demonstration platform created exclusively for website prototyping and UI/UX portfolio demonstration. All courses, instructors, statistics, schedules, and reviews presented on this website are fictional demo samples.'
  },
  {
    id: 'placement-claims',
    category: 'outcomes',
    question: 'Do you guarantee jobs, placements, or specific salary numbers?',
    answer: 'Never. In alignment with ethical education principles, NextStep Academy makes zero guarantees regarding employment, interviews, or salaries. Real career growth depends on personal work ethic, independent mastery, economic factors, and genuine skill. We provide structured curriculum, mentorship, code reviews, and interview simulations—not hollow promises.'
  },
  {
    id: 'course-selection',
    category: 'admissions',
    question: 'How do I know which course is right for my current background?',
    answer: 'If you have never written a line of code before, start with "Programming Fundamentals" to master core logic without framework fatigue. If you want to create real web products and full-stack software, choose "Web Development". For data-driven business careers, choose "Data Analytics". If you already know how to code and are gearing up for technical hiring rounds, choose "Interview Preparation".'
  },
  {
    id: 'time-commitment',
    category: 'curriculum',
    question: 'What is the required weekly time commitment?',
    answer: 'Our programs typically require between 6 and 10 hours per week. This includes live interactive sessions (or structured lecture modules), 1-on-1 code reviews, and dedicated hands-on coding exercises. Consistency matters much more than marathon weekend sessions.'
  },
  {
    id: 'missed-sessions',
    category: 'curriculum',
    question: 'What happens if I miss a live cohort lecture or lab session?',
    answer: 'Every live session is archived within 4 hours in the student portal, along with annotated code repositories, session notes, and supplemental exercises. You can also bring questions to the weekly instructor office hours.'
  },
  {
    id: 'hardware-prereq',
    category: 'general',
    question: 'What computer hardware and software do I need to participate?',
    answer: 'A standard modern laptop or desktop (Windows, macOS, or Linux) with at least 8 GB of RAM and a reliable internet connection is sufficient. All tools and software taught (VS Code, Python, Node.js, Git, PostgreSQL) are free and open-source.'
  },
  {
    id: 'certification',
    category: 'outcomes',
    question: 'Will I receive a certificate upon finishing a program?',
    answer: 'Students who complete all weekly assignments and successfully present their Capstone Project receive a NextStep Academy Certificate of Completion detailing the verified hours, competencies, and GitHub project link.'
  },
  {
    id: 'demo-enquiry-handling',
    category: 'admissions',
    question: 'What happens when I submit the enquiry form on this demo site?',
    answer: 'Because this is a portfolio demonstration, submitting the form activates a realistic demo confirmation receipt in your browser. No real personal emails are transmitted or marketed to, and you can test the form using our quick "Auto-fill Demo Data" button.'
  }
];
