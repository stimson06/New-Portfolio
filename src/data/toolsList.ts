/**
 * =======================================================================
 * LIST OF TOOLS & TECHNOLOGIES
 * =======================================================================
 * You can add, edit, or remove rows in this file anytime.
 * The total row count in this file dynamically drives the "Tools Known" KPI
 * and career analytics across the portfolio.
 */

export interface ToolEntry {
  id: string;
  name: string;
  category: 'BI & Visualization' | 'Database & SQL' | 'Programming & Analytics' | 'Data Engineering & Cloud' | 'Productivity & Collaboration';
  proficiency: 'Expert' | 'Advanced' | 'Intermediate';
  yearsUsed?: string;
  description: string;
}

export const TOOLS_LIST: ToolEntry[] = [
  {
    id: 'power-bi',
    name: 'Power BI',
    category: 'BI & Visualization',
    proficiency: 'Expert',
    yearsUsed: '4+ Yrs',
    description: 'Executive dashboards, DAX measures, row-level security, and report automation.'
  },
  {
    id: 'mssql',
    name: 'Microsoft SQL Server (T-SQL)',
    category: 'Database & SQL',
    proficiency: 'Expert',
    yearsUsed: '4+ Yrs',
    description: 'Complex queries, stored procedures, CTEs, window functions, and indexing.'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Database & SQL',
    proficiency: 'Advanced',
    yearsUsed: '3+ Yrs',
    description: 'Relational data modeling, query optimization, and warehouse analytics.'
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Programming & Analytics',
    proficiency: 'Advanced',
    yearsUsed: '4+ Yrs',
    description: 'Pandas, NumPy, Matplotlib, Seaborn for automated data pipelines and EDA.'
  },
  {
    id: 'excel',
    name: 'Advanced Excel',
    category: 'BI & Visualization',
    proficiency: 'Expert',
    yearsUsed: '5+ Yrs',
    description: 'Power Query, nested formulas, XLOOKUP, pivot modeling, and scenario analysis.'
  },
  {
    id: 'dax',
    name: 'DAX & Data Modeling',
    category: 'BI & Visualization',
    proficiency: 'Expert',
    yearsUsed: '4+ Yrs',
    description: 'Star Schema architecture, time intelligence, calculation groups, and tabular modeling.'
  },
  {
    id: 'tableau',
    name: 'Tableau',
    category: 'BI & Visualization',
    proficiency: 'Intermediate',
    yearsUsed: '2+ Yrs',
    description: 'Visual analytics, calculated fields, parameters, and interactive dashboards.'
  },
  {
    id: 'etl-pipelines',
    name: 'ETL & Data Pipelines',
    category: 'Data Engineering & Cloud',
    proficiency: 'Advanced',
    yearsUsed: '3+ Yrs',
    description: 'Data ingestion, automated extraction, transformation, and automated validation.'
  },
  {
    id: 'snowflake',
    name: 'Snowflake',
    category: 'Data Engineering & Cloud',
    proficiency: 'Intermediate',
    yearsUsed: '2+ Yrs',
    description: 'Cloud data warehousing, SQL transformations, and large-scale analytical staging.'
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'Productivity & Collaboration',
    proficiency: 'Advanced',
    yearsUsed: '4+ Yrs',
    description: 'Version control, collaborative workflows, repo governance, and code review.'
  },
  {
    id: 'eda-stats',
    name: 'EDA & Statistical Analysis',
    category: 'Programming & Analytics',
    proficiency: 'Expert',
    yearsUsed: '4+ Yrs',
    description: 'Anomaly detection, hypothesis testing, correlation analysis, and business trend forecasting.'
  },
  {
    id: 'generative-ai',
    name: 'AI Analytics & LLM Automation',
    category: 'Programming & Analytics',
    proficiency: 'Advanced',
    yearsUsed: '2+ Yrs',
    description: 'Prompt engineering, synthetic data generation, and LLM-augmented business intelligence.'
  },
  {
    id: 'jupyter',
    name: 'Jupyter & Google Colab',
    category: 'Programming & Analytics',
    proficiency: 'Advanced',
    yearsUsed: '4+ Yrs',
    description: 'Notebook-based prototyping, data exploration, and reproducible analytical workflows.'
  },
  {
    id: 'jira-confluence',
    name: 'Jira & Confluence',
    category: 'Productivity & Collaboration',
    proficiency: 'Advanced',
    yearsUsed: '3+ Yrs',
    description: 'Agile sprint tracking, analytical user stories, stakeholder documentation, and SLAs.'
  }
];

// Helper function to get the current tool count
export const getToolsCount = (): number => TOOLS_LIST.length;
