import { Course } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    subtitle: 'Full-Stack Modern Web Engineering',
    tagline: 'From frontend ergonomics to robust REST APIs and database design.',
    level: 'Beginner to Intermediate',
    durationWeeks: 14,
    hoursPerWeek: '8-10 hrs / week',
    mode: 'Hybrid (Live + Lab)',
    idealFor: 'Aspiring web developers, computer science students, and career changers seeking comprehensive web engineering practice.',
    prerequisites: 'Basic computer literacy and curiosity. Prior exposure to basic HTML/CSS is helpful but not mandatory.',
    overview: 'A disciplined, hands-on path through modern web construction. You will build dynamic user interfaces with React and TypeScript, craft scalable backends with Node.js and Express, manage PostgreSQL and document databases, and ship production-ready applications with continuous deployment.',
    keyTopics: [
      'Modern JavaScript (ES2024+) & TypeScript strictly typed patterns',
      'React component hierarchy, hooks, state management & accessibility',
      'Tailwind CSS design systems, mobile responsiveness & micro-interactions',
      'Node.js & Express server architecture, RESTful API design',
      'Relational databases (PostgreSQL/SQL schema design & migrations)',
      'Authentication flows (JWT, sessions, secure cookie handling)',
      'Testing fundamentals (unit testing, end-to-end basics) and CI/CD deployment'
    ],
    capstoneProject: {
      title: 'Full-Stack Collaborative Workspace Portal',
      description: 'A complete SaaS-style web application featuring user authentication, real-time activity feeds, data visualization dashboards, and role-based permissions.',
      deliverables: [
        'Production deployed web app on modern cloud hosting',
        'Normalized database schema with automated migrations',
        'Type-safe frontend consuming custom RESTful endpoints',
        'Responsive layout validated on mobile, tablet, and desktop'
      ]
    },
    toolsAndStack: ['TypeScript', 'React 19', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Git / GitHub', 'Vite'],
    syllabus: [
      {
        weekNumber: 1,
        title: 'Foundations & Semantic Web',
        description: 'Semantic HTML5, CSS layout mastery (Flexbox, Grid), responsive principles, and developer tools workflow.',
        practicalWork: 'Build a multi-page accessible product showcase website with mobile-first CSS.'
      },
      {
        weekNumber: 2,
        title: 'Deep-Dive JavaScript (ESNext)',
        description: 'Execution context, closures, event loop, asynchronous JavaScript, Promises, and fetch API.',
        practicalWork: 'Construct an interactive dynamic weather and finance tracker consuming external public REST APIs.'
      },
      {
        weekNumber: 3,
        title: 'TypeScript for Web Engineers',
        description: 'Type annotations, interfaces, generics, union types, and strict compilation hygiene.',
        practicalWork: 'Refactor an untyped vanilla application into a strict, zero-warning TypeScript codebase.'
      },
      {
        weekNumber: 4,
        title: 'React Core Architecture',
        description: 'JSX mechanics, declarative rendering, props vs state, component lifecycles, and modern functional hooks.',
        practicalWork: 'Develop a responsive task and milestone management interface with persistent local storage.'
      },
      {
        weekNumber: 5,
        title: 'Advanced React Patterns & State Flow',
        description: 'Custom hooks, Context API, optimistic UI updates, form validation without external bloat, and memoization.',
        practicalWork: 'Create an e-commerce checkout flow with complex cart state, coupon application, and validation.'
      },
      {
        weekNumber: 6,
        title: 'Backend Fundamentals with Node & Express',
        description: 'HTTP protocol fundamentals, routing, middleware pipelines, error handling, and environment variables.',
        practicalWork: 'Write an Express REST API with CRUD operations and structured logging.'
      },
      {
        weekNumber: 7,
        title: 'Relational Database Engineering',
        description: 'Relational modeling, primary & foreign keys, indexing, JOIN operations, and query optimization.',
        practicalWork: 'Design and seed a multi-table database schema with SQL scripts and migration tooling.'
      },
      {
        weekNumber: 8,
        title: 'Full-Stack Integration & Authentication',
        description: 'Password hashing (bcrypt), JSON Web Tokens (JWT), session cookies, CORS security policies.',
        practicalWork: 'Wire frontend React auth views to secure backend auth routes with route guards.'
      },
      {
        weekNumber: 9,
        title: 'File Uploads, Storage & Cloud Services',
        description: 'Multipart form data processing, cloud object storage basics, pagination, and search filtering.',
        practicalWork: 'Implement an asset library with image upload previews, tags, and fuzzy text search.'
      },
      {
        weekNumber: 10,
        title: 'Testing & Code Quality',
        description: 'Writing unit tests with Vitest, integration tests for API endpoints, and mocking network responses.',
        practicalWork: 'Add 80%+ test coverage for critical payment and order validation logic.'
      },
      {
        weekNumber: 11,
        title: 'Performance, Accessibility & SEO',
        description: 'Core Web Vitals, code splitting, image optimization, screen reader ARIA landmarks, and SEO meta tags.',
        practicalWork: 'Audit and elevate a web application from 60 to 95+ Google Lighthouse scores.'
      },
      {
        weekNumber: 12,
        title: 'Capstone Initiation & Architecture Review',
        description: 'Sprint planning, user story mapping, API contract drafting, and technical specification reviews.',
        practicalWork: 'Finalize capstone architecture and submit MVP database schema for mentor sign-off.'
      },
      {
        weekNumber: 13,
        title: 'Capstone Development & Code Reviews',
        description: 'Building features, attending 1-on-1 code review sessions, handling edge cases and error states.',
        practicalWork: 'Iterative feature deployment and instructor peer code review audits.'
      },
      {
        weekNumber: 14,
        title: 'Deployment, Capstone Presentation & Defense',
        description: 'Continuous Integration / Continuous Delivery (CI/CD) pipelines, cloud hosting, and technical project defense.',
        practicalWork: 'Live demonstration of full-stack project followed by faculty Q&A and rubric assessment.'
      }
    ],
    upcomingBatch: 'Starts Oct 12, 2026',
    seatsStatus: 'Open for Registration',
    ratingDemo: '4.9/5 (Demo Cohort Feedback)'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    subtitle: 'Data Wrangling, SQL & Actionable Business Intelligence',
    tagline: 'Transform messy raw numbers into clear, defensible business decisions.',
    level: 'Beginner to Intermediate',
    durationWeeks: 10,
    hoursPerWeek: '6-8 hrs / week',
    mode: 'Live Online',
    idealFor: 'Professionals in finance, marketing, or operations wanting data fluency, as well as students entering data analysis.',
    prerequisites: 'Comfort with basic spreadsheet concepts (Excel / Google Sheets). No programming experience required.',
    overview: 'Learn how modern organizations extract actionable insights from data. Master relational SQL from basic queries to window functions, clean and reshape complex datasets with Python and Pandas, and craft interactive executive dashboards that communicate compelling analytical narratives.',
    keyTopics: [
      'Advanced SQL (Aggregations, Subqueries, CTEs, Window Functions)',
      'Data extraction, cleansing & transformation pipelines',
      'Python data analysis stack (Pandas, NumPy, Matplotlib, Seaborn)',
      'Exploratory Data Analysis (EDA) and anomaly detection',
      'Business metrics formulation (CAC, LTV, churn rate, retention cohorts)',
      'Interactive executive dashboards & BI storytelling principles',
      'Statistical reasoning and A/B test analysis interpretation'
    ],
    capstoneProject: {
      title: 'Retail Subscription Churn & Revenue Health Audit',
      description: 'An end-to-end analytical report examining 250,000+ transactional customer records to identify attrition drivers, segment profitability, and optimize renewal campaigns.',
      deliverables: [
        'Structured SQL query repository with reusable CTEs and views',
        'Jupyter notebook documenting exploratory data analysis and hypothesis testing',
        'Executive-ready visual dashboard with interactive filters and KPI summaries',
        '10-page executive summary slide deck with defensible strategic recommendations'
      ]
    },
    toolsAndStack: ['PostgreSQL / SQL', 'Python 3', 'Pandas', 'NumPy', 'Tableau / PowerBI concepts', 'Jupyter Lab', 'Git'],
    syllabus: [
      {
        weekNumber: 1,
        title: 'Analytical Thinking & Foundations',
        description: 'The data lifecycle, business problem decomposition, metric definition, and data types.',
        practicalWork: 'Frame 5 concrete business hypotheses using a sample customer order dataset.'
      },
      {
        weekNumber: 2,
        title: 'SQL Fundamentals & Data Retrieval',
        description: 'SELECT, WHERE, ORDER BY, GROUP BY, aggregations, and multi-table INNER and OUTER joins.',
        practicalWork: 'Query a multi-table university database to extract student enrollment trends.'
      },
      {
        weekNumber: 3,
        title: 'Advanced SQL & Analytical Windows',
        description: 'Subqueries, Common Table Expressions (CTEs), CASE WHEN logic, and Window Functions (RANK, LAG, LEAD, moving averages).',
        practicalWork: 'Calculate month-over-month revenue growth and cohort customer retention tables in pure SQL.'
      },
      {
        weekNumber: 4,
        title: 'Python for Data Analysis (NumPy & Pandas)',
        description: 'DataFrames, Series, reading messy CSV/JSON files, indexing, slicing, and reshaping.',
        practicalWork: 'Ingest and sanitize an unformatted supply chain dataset with missing and corrupted values.'
      },
      {
        weekNumber: 5,
        title: 'Data Wrangling & Feature Engineering',
        description: 'Merging, grouping, pivot tables, string manipulations, datetime operations, and outlier detection.',
        practicalWork: 'Build automated cleaning functions to standardize address and date formats across 50,000 rows.'
      },
      {
        weekNumber: 6,
        title: 'Exploratory Data Analysis (EDA) & Statistics',
        description: 'Summary statistics, variance, correlation vs causation, distributions, and hypothesis testing basics.',
        practicalWork: 'Perform exploratory analysis to discover why delivery turnaround times spike during peak holidays.'
      },
      {
        weekNumber: 7,
        title: 'Data Visualization & Storytelling',
        description: 'Design principles for charts, cognitive load reduction, choosing the right chart type, color accessibility.',
        practicalWork: 'Design publication-grade multi-panel charts communicating product engagement metrics.'
      },
      {
        weekNumber: 8,
        title: 'Executive Dashboards & KPI Monitoring',
        description: 'Dashboard architecture, interactive parameter filtering, alert triggers, and stakeholder reporting.',
        practicalWork: 'Assemble an interactive operational dashboard tracking quarterly sales targets and team quotas.'
      },
      {
        weekNumber: 9,
        title: 'Capstone Analysis & Mentored Office Hours',
        description: 'Independent investigation into capstone dataset with 1-on-1 advisor review and methodology critique.',
        practicalWork: 'Complete end-to-end data pipeline from raw database extract to executive summary draft.'
      },
      {
        weekNumber: 10,
        title: 'Capstone Presentation & Executive Defense',
        description: 'Delivering findings to non-technical stakeholders, handling scrutiny, and defending data validity.',
        practicalWork: 'Present analytical findings in a simulated executive committee meeting.'
      }
    ],
    upcomingBatch: 'Starts Oct 19, 2026',
    seatsStatus: 'Limited Seats',
    ratingDemo: '4.85/5 (Demo Cohort Feedback)'
  },
  {
    id: 'programming-fundamentals',
    title: 'Programming Fundamentals',
    subtitle: 'Core Computational Logic, Data Structures & Problem Solving',
    tagline: 'Build unbreakable problem-solving instincts before diving into complex frameworks.',
    level: 'Beginner',
    durationWeeks: 8,
    hoursPerWeek: '6-8 hrs / week',
    mode: 'Flexible Online',
    idealFor: 'Absolute beginners, non-technical professionals wanting digital literacy, and students entering software disciplines.',
    prerequisites: 'No prior coding experience required. Only a laptop and willingness to practice daily.',
    overview: 'Frameworks come and go, but computational logic, algorithmic thinking, and clean program structure endure. This course trains you to think like an engineer: decomposing complex challenges into small, deterministic functions, handling errors gracefully, and understanding memory and computational efficiency.',
    keyTopics: [
      'Variables, data types, control flow & conditional branching',
      'Loops, iteration patterns, and algorithmic decomposition',
      'Functions, scoping, pure functions, and modular code design',
      'Core data structures: Arrays, Linked Lists, Hash Maps, Stacks, Queues',
      'Object-Oriented & functional programming concepts',
      'Debugging strategies, terminal mastery & version control with Git',
      'Time complexity basics (Big-O notation introduction)'
    ],
    capstoneProject: {
      title: 'Modular Terminal Command-Line Application Suite',
      description: 'A fully tested, interactive command-line productivity suite featuring an interactive budget calculator, file-based persistence, structured error recovery, and unit test suites.',
      deliverables: [
        'Robust CLI program written in clean, modular TypeScript or Python',
        'Comprehensive error handling protecting against invalid user inputs',
        'Persistent file storage with JSON serialization',
        'Test suite verifying edge cases and boundary conditions'
      ]
    },
    toolsAndStack: ['Python 3', 'TypeScript', 'VS Code', 'Git / GitHub', 'Linux / Terminal Shell', 'Automated Test Runners'],
    syllabus: [
      {
        weekNumber: 1,
        title: 'Computational Thinking & Environment Setup',
        description: 'How computers process instructions, installing developer tools, terminal commands, and running your first scripts.',
        practicalWork: 'Configure your local terminal environment and write an automated text encryption utility.'
      },
      {
        weekNumber: 2,
        title: 'Control Flow & Decision Logic',
        description: 'Boolean algebra, relational operators, nested conditional logic, and boundary conditions.',
        practicalWork: 'Build an automated loan qualification eligibility evaluator with robust multi-condition rules.'
      },
      {
        weekNumber: 3,
        title: 'Loops, Collections & Iteration Mastery',
        description: 'While loops, for loops, nested loops, break/continue semantics, and traversing array collections.',
        practicalWork: 'Develop a statistical inventory scanner calculating stock variances and reorder alerts.'
      },
      {
        weekNumber: 4,
        title: 'Functional Decomposition & Scope',
        description: 'Designing reusable functions, parameter contracts, return values, variable scope, and pure functions.',
        practicalWork: 'Create a modular financial calculator suite with unit-tested tax calculation routines.'
      },
      {
        weekNumber: 5,
        title: 'Structured Data: Dictionaries, Sets & Records',
        description: 'Key-value maps, hashing principles, deduplication with sets, nested record traversal.',
        practicalWork: 'Write a student gradebook manager that outputs sorted academic rankings and summaries.'
      },
      {
        weekNumber: 6,
        title: 'Error Handling, File I/O & Serialization',
        description: 'Defensive programming, try/catch/finally blocks, reading and writing files safely, JSON serialization.',
        practicalWork: 'Build an offline personal transaction journal that loads and saves encrypted account logs.'
      },
      {
        weekNumber: 7,
        title: 'Intro to Data Structures & Algorithm Efficiency',
        description: 'Linear search vs binary search, sorting mechanics, and understanding time complexity (Big-O).',
        practicalWork: 'Implement custom search and sorting functions and benchmark their performance against large arrays.'
      },
      {
        weekNumber: 8,
        title: 'Capstone Project Polish & Code Review',
        description: 'Structuring your code for maintainability, documentation standards, Git commit hygiene, and peer reviews.',
        practicalWork: 'Submit and defend your terminal CLI application project during instructor code review.'
      }
    ],
    upcomingBatch: 'Starts Oct 05, 2026',
    seatsStatus: 'Open for Registration',
    ratingDemo: '4.92/5 (Demo Cohort Feedback)'
  },
  {
    id: 'interview-prep',
    title: 'Interview Preparation',
    subtitle: 'Technical Problem Solving, System Design & Behavioral Readiness',
    tagline: 'Sharpen your technical articulation and approach coding interviews with structured calmness.',
    level: 'Intermediate to Advanced',
    durationWeeks: 6,
    hoursPerWeek: '8-10 hrs / week',
    mode: 'Live Online',
    idealFor: 'Graduating students, junior to mid-level software engineers actively preparing for technical recruitment rounds.',
    prerequisites: 'Proficiency in at least one object-oriented or modern language (JavaScript/TypeScript, Python, Java, or C++).',
    overview: 'Technical interviews are a distinct skill separate from everyday coding. This intensive boot camp helps you demystify technical screens, master pattern recognition across algorithmic questions, structure scalable system designs, and articulate your project experience with poise and clarity.',
    keyTopics: [
      'Algorithmic pattern recognition (Two Pointers, Sliding Window, DFS/BFS, Dynamic Programming)',
      'System design fundamentals (Load balancing, caching, database sharding, microservices)',
      'Writing production-quality code on digital whiteboards under timed constraints',
      'Time and space complexity proofs and trade-off verbalization',
      'Behavioral interview mastery using the STAR framework',
      'Portfolio codebase defense and resume project auditing',
      '3 Live 1-on-1 mock interviews with written qualitative rubrics'
    ],
    capstoneProject: {
      title: 'Full Technical Portfolio & Mock Interview Simulation',
      description: 'A comprehensive candidate package: audited GitHub portfolio, calibrated technical resume, and 3 recorded mock interviews covering coding, system design, and behavioral questions.',
      deliverables: [
        'Polished candidate technical resume reviewed by senior engineering mentors',
        'Annotated solutions to 35 foundational algorithmic benchmark patterns',
        'Written architectural design document for a high-concurrency URL shortener or chat system',
        'Detailed personal interview feedback rubric highlighting verbalization strengths and growth areas'
      ]
    },
    toolsAndStack: ['LeetCode Benchmarks', 'Excalidraw / System Diagramming', 'Git', 'TypeScript / Python', 'Mock Rubric Platform'],
    syllabus: [
      {
        weekNumber: 1,
        title: 'Interview Mindset & Pattern Recognition I',
        description: 'How interviewers evaluate candidates; Two Pointers, Sliding Window, and Fast & Slow pointers patterns.',
        practicalWork: 'Solve and verbalize solutions to 8 benchmark array and string problems under timed 25-minute limits.'
      },
      {
        weekNumber: 2,
        title: 'Pattern Recognition II: Trees & Graphs',
        description: 'Binary trees, Binary Search Trees, Depth First Search (DFS), Breadth First Search (BFS), and recursion unwinding.',
        practicalWork: 'Implement level-order traversals and path-sum algorithms while verbally explaining state choices.'
      },
      {
        weekNumber: 3,
        title: 'Complex Patterns: Backtracking & Dynamic Programming',
        description: 'Memoization vs tabulation, sub-problem breakdown, state transitions, and greedy heuristics.',
        practicalWork: 'Deconstruct classic DP patterns (0/1 Knapsack, Coin Change, Longest Common Subsequence).'
      },
      {
        weekNumber: 4,
        title: 'System Design for Entry & Mid-Level Engineers',
        description: 'High-level architectures, stateless servers, caching strategies (Redis), SQL vs NoSQL, and CAP theorem trade-offs.',
        practicalWork: 'Design a scalable notification delivery service handling 100,000 requests/minute.'
      },
      {
        weekNumber: 5,
        title: 'Behavioral Interviews & Project Storytelling',
        description: 'The STAR method (Situation, Task, Action, Result), resolving conflict, discussing failure constructively.',
        practicalWork: 'Draft and rehearse 6 core leadership stories based on your past academic or freelance projects.'
      },
      {
        weekNumber: 6,
        title: 'Full-Spectrum Mock Interview & Feedback Calibration',
        description: 'Simulated 60-minute technical interview with real-time pressure, followed by line-by-line rubric breakdown.',
        practicalWork: 'Complete simulated technical interview defense and receive individualized improvement roadmap.'
      }
    ],
    upcomingBatch: 'Starts Oct 26, 2026',
    seatsStatus: 'Filling Fast',
    ratingDemo: '4.95/5 (Demo Cohort Feedback)'
  }
];
