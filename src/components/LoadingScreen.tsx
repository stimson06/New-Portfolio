import React, { useEffect, useState } from 'react';
import { Database, Cpu, Share2, BarChart2, CheckCircle2 } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const PIPELINE_STAGES = [
  {
    icon: Database,
    label: 'Connecting to Database & Data Warehouses...',
    sublabel: 'MSSQL, telemetry sources & relational schemas verified'
  },
  {
    icon: Cpu,
    label: 'Transforming and Cleansing Data...',
    sublabel: 'Automated Python Pandas ETL pipelines & data validation'
  },
  {
    icon: Share2,
    label: 'Loading Data to BI Semantic Models...',
    sublabel: 'Star schema relationships & OLAP marts populated'
  },
  {
    icon: BarChart2,
    label: 'Preparing Reports & Executive Dashboards...',
    sublabel: 'DAX measures calibrated • Ready for executive insights'
  }
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Smooth progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 450); // Finish transition
          }, 300);
          return 100;
        }
        // Organic pacing
        const increment = prev < 40 ? 5 : prev < 75 ? 3 : prev < 95 ? 4 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Sync stage with progress
  useEffect(() => {
    if (progress < 25) setStageIndex(0);
    else if (progress < 55) setStageIndex(1);
    else if (progress < 85) setStageIndex(2);
    else setStageIndex(3);
  }, [progress]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(onComplete, 200);
  };

  const currentStage = PIPELINE_STAGES[stageIndex];
  const StageIcon = currentStage.icon;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-500 bg-[#fafafa] dark:bg-[#0d1021] text-[#1D2043] dark:text-[#f0f3fa] ${
        isExiting ? 'opacity-0 scale-98 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background ambient gradient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#558b85]/15 dark:bg-[#558b85]/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-md px-6 text-center">
        {/* Animated BI Data Core Graphic */}
        <div className="relative w-24 h-24 mx-auto mb-8 flex items-center justify-center">
          {/* Rotating outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#558b85]/40 dark:border-[#6eb7b0]/50 animate-spin" style={{ animationDuration: '8s' }} />
          {/* Reverse inner ring */}
          <div className="absolute inset-2 rounded-full border-2 border-dotted border-indigo-400/50 dark:border-indigo-400/40 animate-spin" style={{ animationDuration: '5s', animationDirection: 'reverse' }} />
          
          {/* Center glowing core icon */}
          <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#558b85] to-[#427d77] dark:from-[#558b85] dark:to-[#6eb7b0] flex items-center justify-center shadow-lg shadow-[#558b85]/30">
            <StageIcon className="w-7 h-7 text-white animate-pulse" />
          </div>
        </div>

        {/* Brand & Expertise Subheading */}
        <div className="portfolio-sub-title mb-2 justify-center">
          Intelligence Engine
        </div>
        <h2 className="text-2xl font-bold font-display tracking-tight text-[#1D2043] dark:text-white mb-2">
          Stimson Antony
        </h2>
        <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-6 font-medium">
          Business Intelligence & Analytics Specialist
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-slate-200/80 dark:bg-slate-800/80 rounded-full h-2.5 mb-4 p-0.5 overflow-hidden border border-slate-200 dark:border-slate-700/60 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#558b85] via-[#4ecdc4] to-indigo-500 rounded-full transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage & Live Log */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4 px-1">
          <span className="font-mono font-medium text-[#558b85] dark:text-[#6eb7b0]">
            {progress}% INITIALIZED
          </span>
          <span className="flex items-center gap-1 font-mono text-[11px]">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            LIVE ETL PIPELINE
          </span>
        </div>

        {/* Current Active Step Box */}
        <div className="bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 rounded-xl p-3.5 shadow-sm text-left backdrop-blur-sm transition-all duration-300">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#1D2043] dark:text-slate-200 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-[#558b85] animate-ping" />
            <span className="truncate">{currentStage.label}</span>
          </div>
          <div className="text-[11px] text-slate-400 dark:text-slate-500 font-mono ml-4 truncate">
            {currentStage.sublabel}
          </div>
        </div>

        {/* Fast Skip Option */}
        <div className="mt-8">
          <button
            onClick={handleSkip}
            className="text-xs text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 underline underline-offset-4 transition-colors duration-150"
          >
            Skip loading intro →
          </button>
        </div>
      </div>
    </div>
  );
};
