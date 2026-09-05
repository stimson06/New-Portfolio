import React, { useState } from 'react';
import {
  Briefcase,
  Wrench,
  BarChart3,
  PieChart as PieIcon,
  Activity,
  Calendar,
  RefreshCw,
  ArrowUp
} from 'lucide-react';
import { TOOLS_LIST } from '../data/toolsList';
import { PROJECTS_LIST } from '../data/projectsList';

// Tool Breakdown Data
const TOOL_ALLOCATION = [
  { name: 'Reporting Tools', pct: 40, color: '#e8762d', description: 'Executive Dashboards & DAX Modeling' },
  { name: 'Data Modelling', pct: 24, color: '#558b85', description: 'MSSQL, Star Schema & Data Warehouses' },
  { name: 'Data Validation', pct: 20, color: '#3b82f6', description: 'ETL Quality Assurance & Data Integrity' },
  { name: 'EDA', pct: 10, color: '#8b5cf6', description: 'Python Pandas & Exploratory Analytics' },
  { name: 'AI Tools', pct: 6, color: '#10b981', description: 'Machine Learning & Automation Utilities' }
];

// Multi-line Progression Data (Projects & Tools over Career)
const BASE_CAREER_PROGRESSION = [
  { year: 'May 2021', label: "May '21", projects: 2, tools: 4, milestone: 'Engineering Graduate & SOTA Learning' },
  { year: 'Jan 2022', label: "Jan '22", projects: 5, tools: 6, milestone: 'Huron Consulting Groups (Product Service Analyst)' },
  { year: 'Jun 2022', label: "Jun '22", projects: 8, tools: 8, milestone: 'Python Guest Lecturing' },
  { year: 'Dec 2023', label: "Dec '23", projects: 12, tools: 10, milestone: 'Stats Perform (Customer Insights Analyst)' },
  { year: 'Sept 2025', label: "Sep '25", projects: 15, tools: 12, milestone: 'Post Graduate & Part-time BI & Insights' },
  { year: 'Aug 2026', label: "Aug '26", projects: 18, tools: 14, milestone: 'Stats Perform (BI & Insight Analysts)' }
];

export const ModernBiExecutive: React.FC = () => {
  const [hoveredSlice, setHoveredSlice] = useState<number | null>(null);
  const [hoveredYear, setHoveredYear] = useState<number | null>(BASE_CAREER_PROGRESSION.length - 1);

  // Dynamic page load date for the refresh timestamp
  const [loadDate] = useState(() => {
    return new Date().toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  });

  // 1. Dynamic Experience Calculation from Jan 2022 to the current month
  const experienceData = (() => {
    const startDate = new Date(2022, 0, 1); // January 1, 2022
    const now = new Date();
    const totalMonths = Math.max(
      1,
      (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth())
    );
    const exactYears = (totalMonths / 12).toFixed(1);
    const fullYears = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;

    return {
      display: `${exactYears}+`,
      fullYears,
      remainingMonths,
      totalMonths,
      caption: `${fullYears}y ${remainingMonths}m (Since Jan '22)`
    };
  })();

  // 2. Dynamic Tools Count derived from TOOLS_LIST rows
  const toolsCount = TOOLS_LIST.length;

  // 3. Dynamic Projects Count derived from PROJECTS_LIST rows
  const projectsCount = PROJECTS_LIST.length;

  // Career progression dynamically synchronizing the latest milestone with actual counts
  const careerProgression = BASE_CAREER_PROGRESSION.map((item, idx) => {
    if (idx === BASE_CAREER_PROGRESSION.length - 1) {
      return {
        ...item,
        projects: Math.max(item.projects, projectsCount),
        tools: Math.max(item.tools, toolsCount)
      };
    }
    return item;
  });

  // Multi-line chart calculations with balanced padding
  const chartWidth = 500;
  const chartHeight = 150;
  const paddingLeft = 32;
  const paddingRight = 32;
  const paddingY = 22;
  const maxScale = Math.max(24, projectsCount + 4);

  const pointsProjects = careerProgression.map((d, i) => {
    const x = paddingLeft + (i * (chartWidth - paddingLeft - paddingRight)) / (careerProgression.length - 1);
    const y = chartHeight - paddingY - (d.projects / maxScale) * (chartHeight - paddingY * 2);
    return { x, y, ...d, val: d.projects };
  });

  const pointsTools = careerProgression.map((d, i) => {
    const x = paddingLeft + (i * (chartWidth - paddingLeft - paddingRight)) / (careerProgression.length - 1);
    const y = chartHeight - paddingY - (d.tools / maxScale) * (chartHeight - paddingY * 2);
    return { x, y, ...d, val: d.tools };
  });

  const createSvgPath = (points: { x: number; y: number }[]) => {
    return points.reduce((acc, curr, idx) => {
      if (idx === 0) return `M ${curr.x} ${curr.y}`;
      const prev = points[idx - 1];
      const cx1 = prev.x + (curr.x - prev.x) / 2;
      const cy1 = prev.y;
      const cx2 = prev.x + (curr.x - prev.x) / 2;
      const cy2 = curr.y;
      return `${acc} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${curr.x} ${curr.y}`;
    }, '');
  };

  const pathProjects = createSvgPath(pointsProjects);
  const pathTools = createSvgPath(pointsTools);

  // Compact Donut geometry for Operational Focus Allocation
  const donutRadius = 36;
  const donutCircumference = 2 * Math.PI * donutRadius;

  const selectedYearData = hoveredYear !== null ? careerProgression[hoveredYear] : careerProgression[careerProgression.length - 1];
  const activeSliceData = hoveredSlice !== null ? TOOL_ALLOCATION[hoveredSlice] : null;

  return (
    <div className="relative w-full max-w-xl lg:max-w-[580px] xl:max-w-[620px] p-4 sm:p-5 rounded-3xl bg-white/85 dark:bg-[#111425]/90 border border-slate-200/90 dark:border-slate-800 shadow-2xl backdrop-blur-md space-y-3.5 sm:space-y-4">
      {/* Console Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-bold tracking-wider text-slate-800 dark:text-slate-100 uppercase">
            Executive Analytics Profile
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[10.5px] font-mono text-[#558b85] dark:text-[#6eb7b0] bg-[#558b85]/10 dark:bg-[#558b85]/20 px-2.5 py-0.5 rounded-full font-medium">
          <RefreshCw className="w-3 h-3" />
          <span>Refreshed at: {loadDate}</span>
        </div>
      </div>

      {/* Top 3 Metric KPI Tiles */}
      <div className="grid grid-cols-3 gap-2 sm:gap-2.5 text-center">
        {/* Metric 1: Dynamic Experience from Jan 2022 */}
        <div
          className="p-2.5 sm:p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/80 flex flex-col items-center justify-center transition-all hover:border-[#558b85]/50 group"
          title={`Dynamically computed from Jan 2022 to present: ${experienceData.fullYears} years and ${experienceData.remainingMonths} months`}
        >
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl bg-[#558b85]/15 text-[#558b85] dark:text-[#6eb7b0] flex items-center justify-center transition-transform group-hover:scale-110 shrink-0">
              <Briefcase className="w-3.5 h-3.5" />
            </div>
            <div className="text-lg sm:text-xl font-bold font-mono text-[#1D2043] dark:text-white leading-tight">
              {experienceData.display}
            </div>
          </div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-1 whitespace-nowrap">
            Years Experience
          </div>
        </div>

        {/* Metric 2: Tools Known (Counted from src/data/toolsList.ts) */}
        <div
          className="p-2.5 sm:p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/80 flex flex-col items-center justify-center transition-all hover:border-blue-500/50 group"
          title={`Total tools counted dynamically from toolsList.ts: ${toolsCount} tools registered`}
        >
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl bg-blue-500/15 text-blue-600 dark:text-blue-400 flex items-center justify-center transition-transform group-hover:scale-110 shrink-0">
              <Wrench className="w-3.5 h-3.5" />
            </div>
            <div className="text-lg sm:text-xl font-bold font-mono text-[#1D2043] dark:text-white leading-tight flex items-center gap-0.5">
              <span>{toolsCount}</span>
              <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400 stroke-[2.5]" />
            </div>
          </div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-1 whitespace-nowrap">
            Tools Known
          </div>
        </div>

        {/* Metric 3: Projects (Counted from src/data/projectsList.ts) */}
        <div
          className="p-2.5 sm:p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/70 border border-slate-200/70 dark:border-slate-800/80 flex flex-col items-center justify-center transition-all hover:border-emerald-500/50 group"
          title={`Total projects counted dynamically from projectsList.ts: ${projectsCount} projects registered`}
        >
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center transition-transform group-hover:scale-110 shrink-0">
              <BarChart3 className="w-3.5 h-3.5" />
            </div>
            <div className="text-lg sm:text-xl font-bold font-mono text-[#1D2043] dark:text-white leading-tight flex items-center gap-0.5">
              <span>{projectsCount}</span>
              <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 dark:text-emerald-400 stroke-[2.5]" />
            </div>
          </div>
          <div className="text-[10px] text-slate-500 dark:text-slate-400 font-medium mt-1 whitespace-nowrap">
            Total Projects
          </div>
        </div>
      </div>

      {/* The Executive Unified Stack: Section 1 — Multi-Line Career Trajectory */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-2.5">
        {/* Section 1 Header */}
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 min-w-0">
            <Activity className="w-3.5 h-3.5 text-[#558b85] shrink-0" />
            <span className="font-bold text-slate-900 dark:text-white truncate">
              Projects & Tools Progression
            </span>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-3 text-[10px] font-mono">
            <span className="flex items-center gap-1 text-[#558b85] dark:text-[#6eb7b0] font-medium">
              <span className="w-2.5 h-0.5 bg-[#558b85] rounded-full inline-block" /> Projects
            </span>
            <span className="flex items-center gap-1 text-[#3b82f6] dark:text-[#60a5fa] font-medium">
              <span className="w-2.5 h-0.5 bg-[#3b82f6] rounded-full inline-block border-b border-dashed border-[#3b82f6]" /> Tools
            </span>
          </div>
        </div>

        {/* SVG Multi-Line Chart (Clean Lines and Points without Data Labels) */}
        <div className="relative w-full overflow-hidden">
          <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-auto overflow-visible select-none">
            {/* Horizontal grid lines */}
            {[0, 6, 12, 18, 24].map((val) => {
              const y = chartHeight - paddingY - (val / maxScale) * (chartHeight - paddingY * 2);
              return (
                <g key={val}>
                  <line
                    x1={paddingLeft}
                    y1={y}
                    x2={chartWidth - paddingRight}
                    y2={y}
                    stroke="currentColor"
                    className="text-slate-200 dark:text-slate-800"
                    strokeDasharray="3 3"
                  />
                  <text
                    x={paddingLeft - 8}
                    y={y + 3}
                    textAnchor="end"
                    className="text-[9px] fill-slate-400 dark:fill-slate-500 font-mono"
                  >
                    {val}
                  </text>
                </g>
              );
            })}

            {/* Line 1: Projects (Teal) */}
            <path
              d={pathProjects}
              fill="none"
              stroke="#558b85"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="drop-shadow-xs"
            />

            {/* Line 2: Tools Known (Blue) */}
            <path
              d={pathTools}
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2.5"
              strokeDasharray="4 2"
              strokeLinecap="round"
              className="drop-shadow-xs"
            />

            {/* Data points for Projects */}
            {pointsProjects.map((pt, idx) => {
              const isHovered = hoveredYear === idx;
              return (
                <circle
                  key={`proj-${idx}`}
                  cx={pt.x}
                  cy={pt.y}
                  r={isHovered ? 5.5 : 3.5}
                  fill="#558b85"
                  className="stroke-white dark:stroke-slate-900 transition-all duration-200 cursor-pointer"
                  strokeWidth={isHovered ? 2.5 : 1.5}
                  onMouseEnter={() => setHoveredYear(idx)}
                />
              );
            })}

            {/* Data points for Tools Known */}
            {pointsTools.map((pt, idx) => {
              const isHovered = hoveredYear === idx;
              return (
                <circle
                  key={`tool-${idx}`}
                  cx={pt.x}
                  cy={pt.y}
                  r={isHovered ? 5.5 : 3.5}
                  fill="#3b82f6"
                  className="stroke-white dark:stroke-slate-900 transition-all duration-200 cursor-pointer"
                  strokeWidth={isHovered ? 2.5 : 1.5}
                  onMouseEnter={() => setHoveredYear(idx)}
                />
              );
            })}

            {/* X-Axis Month/Year Labels */}
            {careerProgression.map((d, idx) => {
              const x = paddingLeft + (idx / (careerProgression.length - 1)) * (chartWidth - paddingLeft - paddingRight);
              const isSelected = hoveredYear === idx;
              return (
                <text
                  key={d.year}
                  x={x}
                  y={chartHeight - 4}
                  textAnchor="middle"
                  className={`text-[9px] font-mono transition-colors cursor-pointer ${
                    isSelected
                      ? 'fill-[#558b85] dark:fill-[#6eb7b0] font-bold text-[10px]'
                      : 'fill-slate-400 dark:fill-slate-500 hover:fill-slate-700 dark:hover:fill-slate-300'
                  }`}
                  onClick={() => setHoveredYear(idx)}
                >
                  {d.label}
                </text>
              );
            })}
          </svg>
        </div>

        {/* Milestone Detail Banner */}
        <div className="px-3 py-2 rounded-xl bg-white dark:bg-slate-800/95 border border-slate-200/90 dark:border-slate-700/80 flex items-center justify-between gap-2.5 text-xs overflow-hidden shadow-xs">
          <div className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden">
            <span className="font-bold font-mono text-[#558b85] dark:text-[#6eb7b0] shrink-0 text-xs px-2 py-0.5 rounded-md bg-[#558b85]/10 dark:bg-[#558b85]/20 whitespace-nowrap flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {selectedYearData.year}
            </span>
            <span
              className="text-[11px] text-slate-700 dark:text-slate-200 font-medium truncate whitespace-nowrap"
              title={selectedYearData.milestone}
            >
              {selectedYearData.milestone}
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[11px] shrink-0 whitespace-nowrap">
            <span className="text-[#558b85] dark:text-[#6eb7b0] font-bold bg-[#558b85]/10 dark:bg-[#558b85]/20 px-1.5 py-0.5 rounded-md">
              {selectedYearData.projects} Projects
            </span>
            <span className="text-[#3b82f6] dark:text-[#60a5fa] font-bold bg-blue-500/10 dark:bg-blue-500/20 px-1.5 py-0.5 rounded-md">
              {selectedYearData.tools} Tools
            </span>
          </div>
        </div>
      </div>

      {/* The Executive Unified Stack: Section 2 — Operational Focus Allocation (Compact Donut + Mini Chips) */}
      <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 space-y-3">
        {/* Section 2 Header */}
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 min-w-0">
            <PieIcon className="w-3.5 h-3.5 text-[#e8762d] shrink-0" />
            <span className="font-bold text-slate-900 dark:text-white truncate">
              Operational Focus Allocation
            </span>
          </div>
        </div>

        {/* Compact Donut + Mini Chips Flex Row */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4">
          {/* Compact Interactive SVG Donut */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible select-none">
              {/* Donut Slices */}
              <g transform="rotate(-90 50 50)">
                {TOOL_ALLOCATION.map((tool, idx) => {
                  const strokeDasharray = `${(tool.pct / 100) * donutCircumference} ${donutCircumference}`;
                  let offsetAccum = 0;
                  for (let i = 0; i < idx; i++) {
                    offsetAccum += TOOL_ALLOCATION[i].pct;
                  }
                  const strokeDashoffset = -((offsetAccum / 100) * donutCircumference);
                  const isHovered = hoveredSlice === idx;

                  return (
                    <circle
                      key={tool.name}
                      cx="50"
                      cy="50"
                      r={donutRadius}
                      fill="transparent"
                      stroke={tool.color}
                      strokeWidth={isHovered ? '13' : '10'}
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      className="transition-all duration-200 cursor-pointer"
                      style={{ opacity: hoveredSlice === null || isHovered ? 1 : 0.4 }}
                      onMouseEnter={() => setHoveredSlice(idx)}
                      onMouseLeave={() => setHoveredSlice(null)}
                    />
                  );
                })}
              </g>

              {/* Center Readout inside Donut Hole */}
              <g className="pointer-events-none">
                <text
                  x="50"
                  y="48"
                  textAnchor="middle"
                  className="text-sm sm:text-base font-bold font-mono fill-[#1D2043] dark:fill-white leading-none"
                >
                  {activeSliceData ? `${activeSliceData.pct}%` : '100%'}
                </text>
                <text
                  x="50"
                  y="60"
                  textAnchor="middle"
                  className="text-[7.5px] font-semibold uppercase tracking-wider fill-slate-500 dark:fill-slate-400"
                >
                  {activeSliceData ? activeSliceData.name.split(' ')[0] : 'All Skills'}
                </text>
              </g>
            </svg>
          </div>

          {/* Mini Chips and Focus Inspector */}
          <div className="flex-1 min-w-0 w-full space-y-2">
            {/* Interactive Mini Chips (Values Removed - Clean Category Tags) */}
            <div className="flex flex-wrap items-center gap-1.5">
              {TOOL_ALLOCATION.map((tool, idx) => {
                const isHovered = hoveredSlice === idx;
                return (
                  <button
                    key={tool.name}
                    type="button"
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10.5px] font-medium transition-all duration-150 border cursor-pointer ${
                      isHovered
                        ? 'bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 shadow-xs scale-105'
                        : 'bg-white/60 dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800'
                    }`}
                    onMouseEnter={() => setHoveredSlice(idx)}
                    onMouseLeave={() => setHoveredSlice(null)}
                    onClick={() => setHoveredSlice(hoveredSlice === idx ? null : idx)}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: tool.color }}
                    />
                    <span className="font-semibold text-slate-800 dark:text-slate-100 whitespace-nowrap">
                      {tool.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Dynamic Focus Inspection Banner */}
            <div className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800/95 border border-slate-200/90 dark:border-slate-700/80 flex items-center justify-between gap-2.5 text-xs overflow-hidden shadow-xs">
              <div className="flex items-center gap-2 min-w-0 flex-1 overflow-hidden">
                <span
                  className="font-bold font-mono text-white shrink-0 text-[10.5px] px-2 py-0.5 rounded-md whitespace-nowrap transition-colors"
                  style={{ backgroundColor: activeSliceData ? activeSliceData.color : '#558b85' }}
                >
                  {activeSliceData ? activeSliceData.name : 'All Skills'}
                </span>
                <span
                  className="text-[11px] text-slate-700 dark:text-slate-200 font-medium truncate whitespace-nowrap"
                  title={activeSliceData ? activeSliceData.description : `Total expertise across ${toolsCount} tools & 5 key domains`}
                >
                  {activeSliceData ? activeSliceData.description : `Total expertise across ${toolsCount} tools & 5 core domains`}
                </span>
              </div>
              <div
                className="flex items-center gap-1 font-mono text-[11px] shrink-0 font-bold"
                style={{ color: activeSliceData ? activeSliceData.color : '#558b85' }}
              >
                {activeSliceData ? `${activeSliceData.pct}%` : '100%'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
