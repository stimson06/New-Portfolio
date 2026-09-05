import React, { useState } from 'react';
import { SKILLS } from '../data/portfolioData';
import { OptimizedImage } from './OptimizedImage';
import {
  Check,
  Sparkles,
  TrendingUp,
  BarChart3,
  Presentation,
  Filter,
  Calculator,
  Brain,
  Lightbulb,
  Database,
  Layers,
  Server,
  Workflow,
  ArrowDown,
  Activity,
  Cpu
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  LineChart: TrendingUp,
  PieChart: BarChart3,
  Presentation: Presentation,
  Filter: Filter,
  Calculator: Calculator,
  Brain: Brain,
  Lightbulb: Lightbulb,
  Database: Database
};

export const SkillsSection: React.FC = () => {
  const [selectedSkillId, setSelectedSkillId] = useState<string>(SKILLS[0].id);
  const [visualMode, setVisualMode] = useState<'pipeline' | 'classic'>('pipeline');

  const activeSkill = SKILLS.find((s) => s.id === selectedSkillId) || SKILLS[0];

  return (
    <section id="Skills" className="relative py-24 bg-white/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Skills Content & List */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="portfolio-sub-title">
              Skills
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1D2043] dark:text-white tracking-tight leading-tight">
              As a Data Detective I am good with few{' '}
              <span className="text-[#558b85] dark:text-[#6eb7b0]">skills.</span>
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              With strong analytical abilities, I excel at delivering insights and solutions in the{' '}
              <strong className="text-[#1D2043] dark:text-white font-semibold">
                operations and product domain.
              </strong>
            </p>

            {/* Interactive Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {SKILLS.map((skill) => {
                const IconComponent = ICON_MAP[skill.iconName] || Sparkles;
                const isSelected = skill.id === selectedSkillId;

                return (
                  <button
                    key={skill.id}
                    onClick={() => setSelectedSkillId(skill.id)}
                    className={`flex items-center gap-3 p-3.5 rounded-2xl text-left border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-white dark:bg-slate-800/90 border-[#558b85] dark:border-[#6eb7b0] shadow-md shadow-[#558b85]/10 scale-[1.02]'
                        : 'bg-white/60 dark:bg-slate-900/50 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#558b85] text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold text-[#1D2043] dark:text-slate-100 truncate">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 bg-slate-100 dark:bg-slate-700/60 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-[#558b85] h-full rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <span className="text-[10px] font-mono font-medium text-[#558b85] dark:text-[#6eb7b0]">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Skill Detail Callout */}
            <div className="mt-4 p-4 rounded-2xl bg-white/90 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#558b85] dark:text-[#6eb7b0] mb-1">
                <Check className="w-4 h-4" />
                <span>Expertise Spotlight: {activeSkill.name}</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeSkill.description}
              </p>
            </div>
          </div>

          {/* Right Column: Visual Showcase (Enterprise Pipeline vs Classic Illustration) */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            {/* Visual Style Selector Pill */}
            <div className="mb-4 inline-flex p-1 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 shadow-xs backdrop-blur-md text-xs">
              <button
                type="button"
                onClick={() => setVisualMode('pipeline')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-medium transition-all ${
                  visualMode === 'pipeline'
                    ? 'bg-[#558b85] text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Workflow className="w-3.5 h-3.5" />
                <span>Enterprise BI Pipeline</span>
                <span className="text-[9px] px-1 py-0.2 rounded bg-white/20 text-white font-mono">Suggested</span>
              </button>
              <button
                type="button"
                onClick={() => setVisualMode('classic')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-medium transition-all ${
                  visualMode === 'classic'
                    ? 'bg-[#558b85] text-white shadow-xs font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <span>Classic Illustration</span>
              </button>
            </div>

            {visualMode === 'pipeline' ? (
              /* Modern Enterprise BI & Operations Architecture Pipeline */
              <div className="relative w-full max-w-lg p-5 rounded-3xl bg-white/70 dark:bg-[#121528]/80 border border-slate-200/80 dark:border-slate-800 shadow-2xl backdrop-blur-md space-y-3 animate-in fade-in zoom-in duration-300">
                {/* Pipeline Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#558b85] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#558b85]"></span>
                    </span>
                    <span className="text-xs font-mono font-semibold tracking-wider text-slate-700 dark:text-slate-200 uppercase">
                      End-to-End Analytics Architecture
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    ACTIVE FLOW
                  </span>
                </div>

                {/* Stage 1: Data Ingestion */}
                <div className="p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#1D2043] dark:text-white">
                        1. Ingestion & Raw Sources
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        MSSQL, Customer Ops Telemetry, REST APIs
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">100K+ msg/s</span>
                </div>

                <div className="flex justify-center -my-1 text-[#558b85]">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>

                {/* Stage 2: Data Engineering & Transformation */}
                <div className="p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#1D2043] dark:text-white">
                        2. Transformation & Cleansing
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        Python Pandas, Automated ETL Pipelines
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">Cleaned &amp; Validated</span>
                </div>

                <div className="flex justify-center -my-1 text-[#558b85]">
                  <ArrowDown className="w-4 h-4 animate-bounce" style={{ animationDelay: '0.2s' }} />
                </div>

                {/* Stage 3: Semantic Layer & OLAP Modeling */}
                <div className="p-3 rounded-2xl bg-[#558b85]/10 border border-[#558b85]/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#558b85] text-white flex items-center justify-center font-bold">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1D2043] dark:text-white">
                        3. Semantic &amp; Star Schema
                      </div>
                      <div className="text-[11px] text-slate-600 dark:text-slate-300">
                        Fact &amp; Dim Tables, Complex DAX Measures
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-[#558b85] dark:text-[#6eb7b0]">Optimized</span>
                </div>

                <div className="flex justify-center -my-1 text-[#558b85]">
                  <ArrowDown className="w-4 h-4 animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>

                {/* Stage 4: Executive Decision Support & Dashboards */}
                <div className="p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#e8762d]/15 text-[#e8762d] flex items-center justify-center font-bold">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#1D2043] dark:text-white">
                        4. Executive Dashboards &amp; Alerts
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        Power BI, Executive Dashboards, Root-Cause Alerts
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400">Live BI</span>
                </div>
              </div>
            ) : (
              /* Original SVG Illustration & Spinning Gears */
              <div className="relative w-full max-w-lg p-4">
                <div className="relative rounded-3xl overflow-hidden bg-white/30 dark:bg-slate-900/30 p-4 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-xs">
                  <OptimizedImage
                    src="/assets/images/skills/Sorting thoughts-bro.svg"
                    alt="Skills & Analytics Sorting"
                    className="w-full h-auto max-h-[440px] object-contain drop-shadow-sm"
                  />
                </div>

                {/* Original Gear 1 (Top Left) */}
                <div className="absolute top-2 left-6 w-16 h-16 animate-spin pointer-events-none" style={{ animationDuration: '14s' }}>
                  <img
                    src={`${import.meta.env.BASE_URL}assets/images/skills/gear.png`}
                    alt="Rotating Gear 1"
                    className="w-full h-full object-contain opacity-70 drop-shadow-sm"
                  />
                </div>

                {/* Original Gear 2 (Top Right) */}
                <div className="absolute top-10 right-4 w-12 h-12 animate-spin pointer-events-none" style={{ animationDuration: '10s', animationDirection: 'reverse' }}>
                  <img
                    src={`${import.meta.env.BASE_URL}assets/images/skills/gear.png`}
                    alt="Rotating Gear 2"
                    className="w-full h-full object-contain opacity-60 drop-shadow-sm"
                  />
                </div>

                {/* Original Gear 3 (Bottom Right) */}
                <div className="absolute bottom-6 right-8 w-20 h-20 animate-spin pointer-events-none" style={{ animationDuration: '18s' }}>
                  <img
                    src={`${import.meta.env.BASE_URL}assets/images/skills/gear.png`}
                    alt="Rotating Gear 3"
                    className="w-full h-full object-contain opacity-50 drop-shadow-sm"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
