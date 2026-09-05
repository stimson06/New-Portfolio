/**
 * =======================================================================
 * LIST OF PROJECTS
 * =======================================================================
 * You can add, edit, or remove rows in this file anytime.
 * The total row count in this file dynamically drives the "Total Projects" KPI
 * and career progression analytics across the portfolio.
 */

export interface ProjectEntry {
  id: string;
  title: string;
  category: 'Enterprise BI' | 'Operations Analytics' | 'Predictive Analytics & ML' | 'Data Engineering & SQL' | 'Academic & Research';
  status: 'Completed' | 'In Production' | 'Ongoing';
  year: string;
  clientOrDomain: string;
  toolsUsed: string[];
  keyImpact: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const PROJECTS_LIST: ProjectEntry[] = [
  {
    id: 'adventure-works',
    title: 'AdventureWorks Global Sales & Revenue Intelligence',
    category: 'Enterprise BI',
    status: 'Completed',
    year: '2023',
    clientOrDomain: 'Retail / Manufacturing',
    toolsUsed: ['Power BI', 'SQL Server', 'DAX', 'Star Schema'],
    keyImpact: 'Analyzed $24M+ revenue across 6 global territories with sub-second query drill-downs.',
    githubUrl: 'https://github.com/stimson06'
  },
  {
    id: 'pizza-sales',
    title: 'Pizza Sales Operations & Revenue Optimizer',
    category: 'Operations Analytics',
    status: 'Completed',
    year: '2023',
    clientOrDomain: 'QSR / Hospitality',
    toolsUsed: ['Power BI', 'SQL', 'Data Modeling', 'KPI Scorecards'],
    keyImpact: 'Identified peak ordering windows, reducing inventory stockout incidents by 14%.',
    githubUrl: 'https://github.com/stimson06'
  },
  {
    id: 'blinkit-grocery',
    title: 'Blinkit Instant Delivery Operations BI',
    category: 'Operations Analytics',
    status: 'Completed',
    year: '2024',
    clientOrDomain: 'Quick Commerce / Logistics',
    toolsUsed: ['Power BI', 'Advanced DAX', 'SQL', 'Operations BI'],
    keyImpact: 'Monitored fulfillment SLA, dark-store throughput, and customer ratings across 10K+ orders.',
    githubUrl: 'https://github.com/stimson06'
  },
  {
    id: 'formula1-telemetry',
    title: 'Formula 1 Grand Prix Race Strategy & Lap Telemetry',
    category: 'Predictive Analytics & ML',
    status: 'Completed',
    year: '2024',
    clientOrDomain: 'Sports Analytics',
    toolsUsed: ['Python', 'Pandas', 'FastF1 API', 'Matplotlib', 'Power BI'],
    keyImpact: 'Built pit-stop simulation model comparing tire degradation vs. fresh tyre lap advantage.',
    githubUrl: 'https://github.com/stimson06'
  },
  {
    id: 'customer-churn-ml',
    title: 'Telecom Customer Churn Early Warning System',
    category: 'Predictive Analytics & ML',
    status: 'Completed',
    year: '2023',
    clientOrDomain: 'Telecommunications',
    toolsUsed: ['Python', 'scikit-learn', 'SQL', 'Seaborn', 'Power BI'],
    keyImpact: 'Achieved 86% recall predicting at-risk accounts 30 days prior to contract expiration.',
    githubUrl: 'https://github.com/stimson06'
  },
  {
    id: 'itsm-sla-monitor',
    title: 'Enterprise Incident & Service Level SLA Telemetry',
    category: 'Operations Analytics',
    status: 'In Production',
    year: '2024',
    clientOrDomain: 'IT Operations',
    toolsUsed: ['ServiceNow', 'Power BI', 'SQL Server', 'DAX'],
    keyImpact: 'Automated executive MTTR reporting, saving 6 hours per week of manual executive reporting.',
    githubUrl: 'https://github.com/stimson06'
  },
  {
    id: 'financial-fraud-detection',
    title: 'Transaction Anomaly & Anti-Fraud Screening Pipeline',
    category: 'Predictive Analytics & ML',
    status: 'Completed',
    year: '2023',
    clientOrDomain: 'FinTech / Banking',
    toolsUsed: ['Python', 'SQL', 'Isolation Forests', 'Power BI'],
    keyImpact: 'Screened 500K+ transaction records, identifying synthetic fraudulent credit card charges.',
    githubUrl: 'https://github.com/stimson06'
  },
  {
    id: 'supply-chain-inventory',
    title: 'Multi-Echelon Supply Chain Inventory Forecaster',
    category: 'Operations Analytics',
    status: 'Completed',
    year: '2024',
    clientOrDomain: 'Logistics / Supply Chain',
    toolsUsed: ['Power BI', 'SQL', 'Python', 'Excel Power Query'],
    keyImpact: 'Optimized reorder points across 4 distribution hubs, reducing carrying costs by 8.5%.',
    githubUrl: 'https://github.com/stimson06'
  },
  {
    id: 'hr-workforce-analytics',
    title: 'Strategic Talent Attrition & Workforce Diversity Dashboard',
    category: 'Enterprise BI',
    status: 'Completed',
    year: '2023',
    clientOrDomain: 'Human Resources',
    toolsUsed: ['Power BI', 'DAX', 'Excel', 'Data Modeling'],
    keyImpact: 'Visualized department flight risk factors, compensation bands, and promotion velocity.',
    githubUrl: 'https://github.com/stimson06'
  },
  {
    id: 'healthcare-patient-flow',
    title: 'Hospital Patient Flow & Bed Occupancy Analytics',
    category: 'Operations Analytics',
    status: 'Completed',
    year: '2023',
    clientOrDomain: 'Healthcare Operations',
    toolsUsed: ['SQL', 'Tableau', 'Excel', 'Statistical Modeling'],
    keyImpact: 'Modeled ER admission surges to optimize nursing shift allocation and bed turnaround.',
    githubUrl: 'https://github.com/stimson06'
  },
  {
    id: 'saas-mrr-cohort',
    title: 'B2B SaaS Net Revenue Retention & Cohort Churn Analyzer',
    category: 'Enterprise BI',
    status: 'Completed',
    year: '2024',
    clientOrDomain: 'Cloud Software',
    toolsUsed: ['Power BI', 'SQL Server', 'DAX Time Intelligence'],
    keyImpact: 'Calculated monthly NRR, ARR expansion, and logo churn cohorts across 1,200 enterprise tiers.',
    githubUrl: 'https://github.com/stimson06'
  },
  {
    id: 'ecommerce-cart-funnel',
    title: 'E-Commerce Conversion Funnel & Cart Abandonment BI',
    category: 'Operations Analytics',
    status: 'Completed',
    year: '2023',
    clientOrDomain: 'Digital Retail',
    toolsUsed: ['Google Analytics 4', 'SQL', 'Power BI', 'Python'],
    keyImpact: 'Isolated friction checkout step, yielding a +2.4% lift in completed checkout transactions.',
    githubUrl: 'https://github.com/stimson06'
  },
  {
    id: 'real-estate-valuation',
    title: 'Metropolitan Real Estate Price Prediction & Market Trends',
    category: 'Predictive Analytics & ML',
    status: 'Completed',
    year: '2022',
    clientOrDomain: 'Real Estate',
    toolsUsed: ['Python', 'XGBoost', 'Pandas', 'Folium Map Viz'],
    keyImpact: 'Engineered distance-to-transit features predicting rental yield with R² of 0.89.',
    githubUrl: 'https://github.com/stimson06'
  },
  {
    id: 'marketing-attribution-roi',
    title: 'Multi-Touch Marketing Channel Attribution & CAC Monitor',
    category: 'Enterprise BI',
    status: 'Completed',
    year: '2024',
    clientOrDomain: 'Performance Marketing',
    toolsUsed: ['Power BI', 'SQL', 'DAX', 'Markov Chains'],
    keyImpact: 'Reallocated 18% of underperforming ad spend to highest-converting bottom-funnel channels.',
    githubUrl: 'https://github.com/stimson06'
  },
  {
    id: 'airline-on-time-delays',
    title: 'Commercial Flight Delay Causation & On-Time Performance',
    category: 'Data Engineering & SQL',
    status: 'Completed',
    year: '2022',
    clientOrDomain: 'Aviation',
    toolsUsed: ['PostgreSQL', 'Python', 'Power BI', 'Weather API'],
    keyImpact: 'Aggregated 1.8M flight logs to rank delay risk factors across weather, carrier, and NAS ground stops.',
    githubUrl: 'https://github.com/stimson06'
  },
  {
    id: 'energy-grid-consumption',
    title: 'Smart Grid Energy Consumption & Peak Demand Anomaly Detector',
    category: 'Predictive Analytics & ML',
    status: 'Completed',
    year: '2023',
    clientOrDomain: 'Clean Energy & Utilities',
    toolsUsed: ['Python', 'Time Series Forecasting (Prophet)', 'Power BI'],
    keyImpact: 'Provided 24-hour lookahead peak energy demand alerts with under 4.2% MAPE.',
    githubUrl: 'https://github.com/stimson06'
  },
  {
    id: 'automated-data-auditor',
    title: 'Automated Data Quality & Schema Integrity Validator',
    category: 'Data Engineering & SQL',
    status: 'Completed',
    year: '2024',
    clientOrDomain: 'Data Governance',
    toolsUsed: ['Python', 'SQL Server', 'Great Expectations', 'Email Webhooks'],
    keyImpact: 'Automated nightly checks for primary key collisions, null spikes, and orphaned foreign keys.',
    githubUrl: 'https://github.com/stimson06'
  },
  {
    id: 'portfolio-analytics-web',
    title: 'Interactive Modern BI Executive Portfolio Platform',
    category: 'Enterprise BI',
    status: 'In Production',
    year: '2026',
    clientOrDomain: 'Personal Portfolio',
    toolsUsed: ['React', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Vite'],
    keyImpact: 'High-performance interactive 3D BI showcase with real-time KPI metrics and dynamic calculations.',
    githubUrl: 'https://github.com/stimson06/Portfolio'
  }
];

// Helper function to get the current project count
export const getProjectsCount = (): number => PROJECTS_LIST.length;
