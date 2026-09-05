import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ExternalLink, Github, BarChart2, Sparkles, X, CheckCircle2 } from 'lucide-react';
import { OptimizedImage } from './OptimizedImage';

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Data Analytics' | 'Machine Learning'>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Close on Escape key & manage body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const dataAnalyticsProjects = PROJECTS.filter((p) => p.category === 'Data Analytics');
  const machineLearningProjects = PROJECTS.filter((p) => p.category === 'Machine Learning');

  return (
    <section id="Portfolio" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="portfolio-sub-title">
              Projects
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1D2043] dark:text-white tracking-tight mt-2">
              Some of my <span className="text-[#558b85] dark:text-[#6eb7b0]">Creative Works.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-2 max-w-xl">
              End-to-end data analytics solutions, executive BI dashboards, and applied machine learning systems.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs">
            {(['All', 'Data Analytics', 'Machine Learning'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-white dark:bg-slate-900 text-[#558b85] dark:text-[#6eb7b0] shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Display layout: Either two clear category columns matching original or filtered grid */}
        {activeCategory === 'All' ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Column 1: Data Analytics */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
                <BarChart2 className="w-5 h-5 text-[#558b85]" />
                <h3 className="text-xl font-bold font-display text-[#1D2043] dark:text-white">
                  Data Analytics
                </h3>
              </div>

              <div className="space-y-6">
                {dataAnalyticsProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            </div>

            {/* Column 2: Machine Learning */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 dark:border-slate-800">
                <Sparkles className="w-5 h-5 text-indigo-500" />
                <h3 className="text-xl font-bold font-display text-[#1D2043] dark:text-white">
                  Machine Learning
                </h3>
              </div>

              <div className="space-y-6">
                {machineLearningProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={() => setSelectedProject(project)}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={() => setSelectedProject(project)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedProject(null);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
        >
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#121528] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in duration-200">
            {/* Prominent High-Contrast Close Button pinned to corner */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3.5 right-3.5 z-30 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 text-slate-800 dark:text-slate-100 border border-slate-300/90 dark:border-slate-700 shadow-lg hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950/50 dark:hover:text-red-400 transition-all cursor-pointer font-semibold text-xs tracking-tight backdrop-blur-md group"
              aria-label="Close Project Details (Press Esc)"
              title="Close (Esc)"
            >
              <X className="w-4 h-4 transition-transform group-hover:rotate-90" />
              <span>Close</span>
              <kbd className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                Esc
              </kbd>
            </button>

            {/* Modal Header Image */}
            <div className="relative h-64 bg-slate-100 dark:bg-slate-900">
              <OptimizedImage
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#558b85]/10 text-[#558b85] dark:text-[#6eb7b0]">
                  {selectedProject.category}
                </span>

                <div className="flex items-center gap-3">
                  {selectedProject.repoUrl && (
                    <a
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-[#558b85] dark:hover:text-[#6eb7b0]"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Code</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-display text-[#1D2043] dark:text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>
              </div>

              {/* Impact Metrics */}
              {selectedProject.impactMetrics && selectedProject.impactMetrics.length > 0 && (
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800">
                  {selectedProject.impactMetrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <span className="block text-base sm:text-lg font-bold font-mono text-[#558b85] dark:text-[#6eb7b0]">
                        {m.value}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Key Features */}
              {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                    Key Highlights
                  </h4>
                  <div className="space-y-1.5">
                    {selectedProject.keyFeatures.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-[#558b85] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Modal Bottom Actions */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Close Window
                </button>

                {selectedProject.repoUrl ? (
                  <a
                    href={selectedProject.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-theme-btn !py-2 !px-5 !text-xs"
                  >
                    <span>View Repository</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Sub-Component: ProjectCard matching the original layout with content on left and thumbnail on right
const ProjectCard: React.FC<{
  project: ProjectItem;
  onSelect: () => void;
}> = ({ project, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="p-5 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:shadow-lg transition-all duration-300 hover:border-[#558b85]/60 group cursor-pointer"
    >
      <div className="flex flex-col sm:flex-row gap-5 items-start">
        {/* Project Content */}
        <div className="flex-1 min-w-0 space-y-2">
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-lg font-bold text-[#1D2043] dark:text-white group-hover:text-[#558b85] dark:group-hover:text-[#6eb7b0] transition-colors flex items-center gap-2">
              <span>{project.title}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#558b85]" />
            </h4>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Quick links: GitHub if present */}
          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs">
            {project.repoUrl && (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.repoUrl, '_blank');
                }}
                className="inline-flex items-center gap-1 text-slate-500 hover:text-slate-900 dark:hover:text-white hover:underline"
              >
                <Github className="w-3.5 h-3.5" />
                Source Code
              </span>
            )}
          </div>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-[10px] text-slate-400 py-0.5">
                +{project.technologies.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Project Thumbnail on Right matching original .project-image layout */}
        <div className="w-full sm:w-40 h-28 sm:h-28 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 shrink-0 border border-slate-200 dark:border-slate-700/60 group-hover:scale-105 transition-transform duration-300">
          <OptimizedImage
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
