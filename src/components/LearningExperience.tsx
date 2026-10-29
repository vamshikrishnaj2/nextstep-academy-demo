import React from 'react';
import { FolderGit2, Compass, Users2, Activity, ShieldCheck, Check, ArrowRight } from 'lucide-react';

interface LearningExperienceProps {
  onTalkToUs: () => void;
}

export const LearningExperience: React.FC<LearningExperienceProps> = ({ onTalkToUs }) => {
  const pillars = [
    {
      icon: FolderGit2,
      title: 'Practical Projects',
      tagline: 'Code real systems, not superficial clones',
      description:
        'Instead of copying code line-by-line from video players, students build functional multi-page applications, optimized database schemas, and data pipelines with comprehensive test suites. You finish with defensible repositories.',
      sampleOutput: '3 Production-Grade Repositories with Continuous Deployment'
    },
    {
      icon: Compass,
      title: 'Structured Curriculum',
      tagline: 'Deliberate pacing without knowledge gaps',
      description:
        'Every course is mapped sequentially from fundamental computational logic to advanced architecture. Weekly learning objectives are clearly stated, with incremental difficulty so you never feel stranded.',
      sampleOutput: 'Weekly Milestones, Rubric Guidelines & Architecture Reviews'
    },
    {
      icon: Users2,
      title: 'Direct Mentorship',
      tagline: 'High-touch guidance from working practitioners',
      description:
        'Software engineering is a craft best learned alongside experienced mentors. NextStep learners participate in weekly 1-on-1 code critiques, live debug labs, and dedicated office hours.',
      sampleOutput: 'Weekly 1:1 Code Reviews & Live Office Hours'
    },
    {
      icon: Activity,
      title: 'Progress Tracking',
      tagline: 'Transparent feedback on competencies',
      description:
        'Understand exactly where your strengths lie and where you need reinforcement. Our structured rubrics evaluate code readability, test coverage, algorithmic efficiency, and edge case handling.',
      sampleOutput: 'Competency Heatmaps & Milestone Verification Records'
    }
  ];

  return (
    <section id="why-us" className="py-16 md:py-24 bg-white border-y border-slate-200 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-700 mb-2">
            <span>The NextStep Learning Method</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How we cultivate lasting technical confidence.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 leading-relaxed">
            We prioritize steady, disciplined practice over hype. Here are the four foundational pillars embedded across all four sample demo tracks.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-100/80 text-blue-700 flex items-center justify-center font-bold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        PILLAR 0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-blue-600 mt-0.5 mb-2">
                      {pillar.tagline}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
              alt="Mentor reviewing code with a student"
              className="w-full h-full object-cover"
            />
          </div>
        </div>


        {/* The Transparent Education Creed Banner (Avoid unsupported claims) */}
        <div className="rounded-2xl bg-slate-900 text-white p-8 md:p-10 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 font-semibold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Our Transparent Education Pledge</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                No false shortcuts. No exaggerated placement numbers.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Commercial bootcamps often promise guaranteed 6-figure salaries and miraculous transformations in weeks. At NextStep Academy, we state the truth: learning software engineering and data analytics requires sustained effort, problem-solving persistence, and high-quality feedback. We equip you with the tools and mentorship—the dedication is yours.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <button
                type="button"
                onClick={onTalkToUs}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md transition-all active:scale-[0.98]"
              >
                <span>Speak With an Advisor</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-slate-400 mt-2">
                Fictional demo guidance & batch planning
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
