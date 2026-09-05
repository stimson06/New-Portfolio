import React, { useState } from 'react';
import { EDUCATION, EXPERIENCE, PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Briefcase, Calendar, Award, ChevronRight, FileText, CheckCircle2 } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'education'>('all');

  return (
    <section id="Resume" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="portfolio-sub-title">
              Resume & Journey
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1D2043] dark:text-white tracking-tight mt-2">
              Education & Experience
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              A comprehensive track record of turning analytical rigour into measurable operational outcomes.
            </p>
          </div>

          {/* Quick Filter / Download CV */}
          <div className="flex items-center gap-3">
            <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  activeTab === 'all'
                    ? 'bg-white dark:bg-slate-900 text-[#558b85] dark:text-[#6eb7b0] shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  activeTab === 'experience'
                    ? 'bg-white dark:bg-slate-900 text-[#558b85] dark:text-[#6eb7b0] shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                  activeTab === 'education'
                    ? 'bg-white dark:bg-slate-900 text-[#558b85] dark:text-[#6eb7b0] shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Education
              </button>
            </div>

            <a
              href={PERSONAL_INFO.resumePdf}
              download="Stimson_Pushparaj_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#558b85] hover:bg-[#467670] shadow-sm transition-all duration-150 cursor-pointer"
              title="Download Full Resume (PDF)"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Full Resume</span>
            </a>
          </div>
        </div>

        {/* Two-Column Grid matching the original design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Column 1: Education */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/60 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#558b85] dark:text-[#6eb7b0] font-semibold">
                    Qualification
                  </span>
                  <h3 className="text-xl font-bold font-display text-[#1D2043] dark:text-white">
                    My Education
                  </h3>
                </div>
              </div>

              <div className="space-y-5">
                {EDUCATION.map((edu) => (
                  <div
                    key={edu.id}
                    className="relative p-6 rounded-2xl bg-white/80 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:shadow-md transition-all duration-300 hover:border-[#558b85]/50 group"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300">
                        <Calendar className="w-3 h-3 text-[#558b85]" />
                        {edu.period}
                      </span>
                      {edu.score && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40">
                          <Award className="w-3 h-3" />
                          {edu.score}
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-[#1D2043] dark:text-white group-hover:text-[#558b85] dark:group-hover:text-[#6eb7b0] transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-medium text-[#558b85] dark:text-[#6eb7b0] mt-0.5">
                      {edu.institution}
                    </p>
                    {edu.description && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-2.5 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Column 2: Experience */}
          {(activeTab === 'all' || activeTab === 'experience') && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#558b85] dark:text-[#6eb7b0] font-semibold">
                    Experience
                  </span>
                  <h3 className="text-xl font-bold font-display text-[#1D2043] dark:text-white">
                    My Experience
                  </h3>
                </div>
              </div>

              <div className="space-y-5">
                {EXPERIENCE.map((exp) => (
                  <div
                    key={exp.id}
                    className="relative p-6 rounded-2xl bg-white/80 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:shadow-md transition-all duration-300 hover:border-[#558b85]/50 group"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300">
                        <Calendar className="w-3 h-3 text-[#558b85]" />
                        {exp.period}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#558b85]/10 text-[#558b85] dark:text-[#6eb7b0] border border-[#558b85]/20">
                        {exp.company}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#1D2043] dark:text-white group-hover:text-[#558b85] dark:group-hover:text-[#6eb7b0] transition-colors">
                      {exp.role}
                    </h4>

                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key accomplishments */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="mt-3 space-y-1.5">
                        {exp.achievements.map((ach, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#558b85] shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-100 dark:border-slate-700/50">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
