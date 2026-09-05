export type ThemeMode = 'system' | 'light' | 'dark';

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  score?: string;
  period: string;
  description?: string;
  icon?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  achievements?: string[];
}

export interface WeaponItem {
  id: string;
  name: string;
  image: string;
  category: 'BI & Reporting' | 'Databases & ETL' | 'Programming' | 'Cloud & Productivity';
  level: string;
  description: string;
  highlight: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Data Analytics' | 'Machine Learning';
  description: string;
  fullDescription?: string;
  image: string;
  repoUrl?: string;
  tableauUrl?: string;
  liveDemoUrl?: string;
  technologies: string[];
  impactMetrics?: { label: string; value: string }[];
  keyFeatures?: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  description: string;
  level: number;
  iconName: string;
}

