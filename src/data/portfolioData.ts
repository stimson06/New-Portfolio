import { EducationItem, ExperienceItem, WeaponItem, ProjectItem, SkillItem } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Stimson Pushparaj',
  shortName: 'Stimson',
  role: 'BI & Analytics Specialist',
  title: 'Business Intelligence & Analytics Specialist',
  phone: '(+91)-951-423-9427',
  email: 'stimsonpushparaj@gmail.com',
  location: 'Bangalore, India (Open to Global / Remote)',
  linkedin: 'https://www.linkedin.com/in/a-stimson/',
  github: 'https://github.com/stimson06',
  portfolioRepo: 'https://github.com/stimson06/Portfolio',
  resumePdf: '/Stimson_Resume.pdf',
  // Update this Overleaf link with your Overleaf view/share link or direct PDF link
  resumeOverleafUrl: 'https://www.overleaf.com/read/6a7b7bff4cc9831c3dd7af98',
  tagline: 'Are looking for a person to unravel the insights from the data maze ? You got the right person.',
  aboutDescription: 'With strong analytical abilities, I excel at delivering insights and solutions in the operations and product domain. Passionate about transforming raw data into impactful business decisions through modern BI, robust pipelines, and actionable visualizations.'
};

export const SKILLS: SkillItem[] = [
  {
    id: 'insights',
    name: 'Insights & Analytics',
    description: 'Uncovering trends, anomalies, and operational optimization opportunities from complex enterprise data.',
    level: 95,
    iconName: 'LineChart'
  },
  {
    id: 'viz',
    name: 'Data Visualizations',
    description: 'Crafting intuitive, publication-grade executive dashboards in Power BI and modern reporting tools for rapid decision-making.',
    level: 96,
    iconName: 'PieChart'
  },
  {
    id: 'presentations',
    name: 'Engaging Presentations',
    description: 'Communicating complex analytical findings and strategic narratives clearly to executive leadership.',
    level: 90,
    iconName: 'Presentation'
  },
  {
    id: 'cleaning',
    name: 'Data Cleaning',
    description: 'Transforming unstructured, noisy raw inputs into pristine, reliable data models ready for production.',
    level: 92,
    iconName: 'Filter'
  },
  {
    id: 'stats',
    name: 'Statistical Analysis',
    description: 'Applying hypothesis testing, correlation analysis, and regression modeling to validate business decisions.',
    level: 88,
    iconName: 'Calculator'
  },
  {
    id: 'ml',
    name: 'Machine Learning Basics',
    description: 'Developing predictive classifiers, clustering algorithms, and computer vision models with Python & scikit-learn.',
    level: 84,
    iconName: 'Brain'
  },
  {
    id: 'critical',
    name: 'Critical & Operational Thinking',
    description: 'Diagnosing operational bottlenecks, SLA breaches, and workflow inefficiencies with root-cause analysis.',
    level: 94,
    iconName: 'Lightbulb'
  },
  {
    id: 'etl',
    name: 'ETL Processes',
    description: 'Engineering robust data extraction, transformation, and automated loading pipelines across diverse data warehouses.',
    level: 90,
    iconName: 'Database'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'sota',
    institution: 'SOTA Learning',
    degree: 'Computer Vision & Artificial Intelligence',
    period: '2020 - 2021',
    description: 'Intensive specialization in deep learning, neural network architectures, and OpenCV computer vision pipelines for real-world robotics.',
    icon: 'Brain'
  },
  {
    id: 'skcet',
    institution: 'Sri Krishna College of Engineering and Technology',
    degree: 'Mechatronics Engineering',
    score: 'CGPA: 7.95',
    period: '2017 - 2021',
    description: 'Core foundation in multidisciplinary engineering, automated control systems, microcontrollers, and computational data analysis.',
    icon: 'GraduationCap'
  },
  {
    id: 'stjohns',
    institution: 'St. Johns Matriculation Higher Secondary School',
    degree: 'Computer Science',
    score: 'Percentage: 85.75%',
    period: '2015 - 2017',
    description: 'Graduated with high distinction in higher secondary education focusing on mathematics, computer science, and physics.',
    icon: 'BookOpen'
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'stats-perform',
    role: 'Data & Insights Specialist',
    company: 'STATS Perform',
    period: 'Dec 2023 - Present',
    description: 'Optimizing workflows and improving data integrity through business impact reports, delivering actionable insights for the operations with Power BI, ServiceNow, and Big Data tools.',
    skills: ['Power BI', 'ServiceNow', 'Big Data', 'SQL', 'Workflow Automation', 'Operations Analytics'],
    achievements: [
      'Developed automated executive KPI dashboards monitoring global sports data operations in real-time.',
      'Reduced reporting cycle turnaround by 45% through standardized ETL and automated data health checks.',
      'Collaborated cross-functionally with operations leads to diagnose and eliminate workflow bottlenecks.'
    ]
  },
  {
    id: 'christ-univ',
    role: 'Guest Lecturer',
    company: 'Christ University',
    period: 'Nov 2022 - May 2024',
    description: 'Mentored 80+ students in programming, web development, and data analysis, fostering industry-ready skills in Python, JavaScript, and cloud tech.',
    skills: ['Python', 'JavaScript', 'Data Analysis', 'Cloud Tech', 'Mentorship', 'Curriculum Design'],
    achievements: [
      'Delivered hands-on workshops on exploratory data analysis, data storytelling, and modern web application development.',
      'Guided student capstone projects from concept ideation to production deployment.',
      'Achieved a 95% positive mentorship rating from participating students and academic coordinators.'
    ]
  },
  {
    id: 'huron',
    role: 'Senior Product Service Analyst',
    company: 'Huron Consulting Groups',
    period: 'Jan 2022 - Nov 2023',
    description: 'Streamlined revenue cycle reporting and automated legacy processes, boosting efficiency using MSSQL, PowerShell, and TIBCO.',
    skills: ['MSSQL Server', 'PowerShell', 'TIBCO', 'Revenue Cycle Analytics', 'Process Automation'],
    achievements: [
      'Automated recurring client revenue cycle extracts, saving hundreds of manual engineering hours monthly.',
      'Optimized complex SQL queries reducing report execution time from hours to minutes.',
      'Built automated alerts and monitoring scripts to catch data discrepancies prior to client delivery.'
    ]
  }
];

export const WEAPONS: WeaponItem[] = [
  {
    id: 'powerbi',
    name: 'Power BI',
    image: '/assets/images/weapons/PowerBI.png',
    category: 'BI & Reporting',
    level: 'Expert',
    description: 'Enterprise dashboard development, complex DAX modeling, row-level security, and automated report scheduling.',
    highlight: 'Daily driver for operational BI and executive scorecards'
  },
  {
    id: 'sqlserver',
    name: 'MS-SQL Server',
    image: '/assets/images/weapons/SQLServer.png',
    category: 'Databases & ETL',
    level: 'Advanced',
    description: 'Relational schema design, stored procedures, indexing, query optimization, and window functions for analytics.',
    highlight: 'Core backend engine for data warehousing & ETL pipelines'
  },
  {
    id: 'python',
    name: 'Python',
    image: '/assets/images/weapons/Python.png',
    category: 'Programming',
    level: 'Advanced',
    description: 'Data wrangling with Pandas/NumPy, machine learning modeling with scikit-learn, and workflow scripting.',
    highlight: 'Primary language for statistical computing & automation'
  },
  {
    id: 'servicenow',
    name: 'ServiceNow',
    image: '/assets/images/weapons/ServiceNow.png',
    category: 'Cloud & Productivity',
    level: 'Proficient',
    description: 'Incident/problem management telemetry, SLA tracking, workflow analytics, and operational ticket reporting.',
    highlight: 'Enterprise operations & ITSM insights engine'
  },
  {
    id: 'excel',
    name: 'Excel',
    image: '/assets/images/weapons/Excel.png',
    category: 'BI & Reporting',
    level: 'Expert',
    description: 'Advanced financial/operational models, Power Query, pivot tables, VBA macros, and ad-hoc data analysis.',
    highlight: 'Ubiquitous rapid modeling and validation workhorse'
  },
  {
    id: 'github',
    name: 'GitHub',
    image: '/assets/images/weapons/Github.jpg',
    category: 'Programming',
    level: 'Advanced',
    description: 'Version control, repository maintenance, CI/CD pipeline integration, and team collaboration.',
    highlight: 'Source code management & continuous version control'
  },
  {
    id: 'powerpoint',
    name: 'PowerPoint',
    image: '/assets/images/weapons/PowerPoint.png',
    category: 'Cloud & Productivity',
    level: 'Advanced',
    description: 'Executive pitch decks, data storytelling narratives, infographics, and stakeholder business presentations.',
    highlight: 'Transforming technical data into executive impact narratives'
  },
  {
    id: 'tableau',
    name: 'Tableau',
    image: '/assets/images/weapons/Tableau.svg',
    category: 'BI & Reporting',
    level: 'Advanced',
    description: 'Interactive analytical stories, LOD expressions, calculated fields, and enterprise dashboard publishing.',
    highlight: 'Visual storytelling platform & executive dashboards'
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    image: '/assets/images/weapons/SalesForce.png',
    category: 'Cloud & Productivity',
    level: 'Proficient',
    description: 'CRM operational analytics, lead-to-opportunity funnel telemetry, and customer lifecycle insights.',
    highlight: 'Customer intelligence & CRM operational integration'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'adventureworks',
    title: 'Adventure Works Sales Dashboard',
    category: 'Data Analytics',
    description: 'Comprehensive sales analysis using SQL & Power BI to deliver actionable revenue insights across customer demographics, regional performance, and profit margins.',
    fullDescription: 'Designed and deployed an end-to-end business intelligence solution using Microsoft SQL Server and Power BI on the AdventureWorks enterprise dataset. Modeled star schemas, calculated dynamic DAX metrics for year-over-year revenue, product return rates, and customer lifetime value, empowering leadership to identify key sales growth drivers.',
    image: '/assets/images/projects/AdventureWorks.png',
    repoUrl: 'https://github.com/stimson06',
    technologies: ['Power BI', 'SQL Server', 'DAX', 'Star Schema', 'Sales Analytics'],
    impactMetrics: [
      { label: 'Revenue Analyzed', value: '$24M+' },
      { label: 'Query Latency', value: '< 1.2s' },
      { label: 'KPIs Modeled', value: '18+' }
    ],
    keyFeatures: [
      'Dynamic Year-over-Year (YoY) variance and growth tracking',
      'Drill-through regional sales performance matrices',
      'Interactive customer demographic segmentation and basket analysis'
    ]
  },
  {
    id: 'cxi-challenge',
    title: 'CXI - Challenge',
    category: 'Data Analytics',
    description: 'Performed exploratory data analysis and visualizations in Python to identify trends in support tasks, and presented key insights with interactive dashboards for real-time monitoring.',
    fullDescription: 'Analyzed complex customer experience interaction telemetry to uncover systemic bottlenecks in customer support workflows. Leveraged Python for statistical data cleaning and exploratory analysis, then designed interactive executive reporting enabling managers to monitor agent resolution velocity, backlog surges, and customer satisfaction correlations.',
    image: '/assets/images/projects/CXI.png',
    repoUrl: 'https://github.com/stimson06/CXI-Challenge',
    technologies: ['Python', 'Pandas', 'Customer Experience (CX)', 'Operations EDA', 'BI Reporting'],
    impactMetrics: [
      { label: 'Tickets Investigated', value: '45,000+' },
      { label: 'Resolution Gain', value: '+22%' },
      { label: 'SLA Adherence', value: '99.4%' }
    ],
    keyFeatures: [
      'Python data cleaning pipeline detecting missing data anomalies',
      'Interactive executive KPI monitors for resolution velocity',
      'Agent workload distribution and first-response SLA analysis'
    ]
  },
  {
    id: 'ford-gobike',
    title: 'Ford GoBike',
    category: 'Data Analytics',
    description: 'Analyzed 2021 Capital Bikeshare data to uncover rider behavior patterns in the Washington DC metro area, comparing member and casual usage trends and presenting key seasonal and behavioral insights.',
    fullDescription: 'Executed an in-depth exploratory and explanatory data analysis on over 1.8 million bike trips from Capital Bikeshare (Ford GoBike). Discovered distinct temporal trip length distributions between annual subscriber commuters and tourist casual riders, presenting geospatial and seasonal recommendations for fleet redistribution.',
    image: '/assets/images/projects/FordgoBikes.png',
    repoUrl: 'https://github.com/stimson06/Ford_GoBike',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Geospatial EDA'],
    impactMetrics: [
      { label: 'Trips Analyzed', value: '1.8M+' },
      { label: 'Peak Patterns', value: 'Commute vs Weekend' },
      { label: 'Data Cleaning', value: '100% Validated' }
    ],
    keyFeatures: [
      'Comparative trip duration distributions across membership tiers',
      'Geospatial start-end station heatmaps and station rebalancing models',
      'Weather and seasonal sensitivity analysis on ridership numbers'
    ]
  },
  {
    id: 'ultimate-tictactoe',
    title: 'Ultimate-Tic-Tac-Toe',
    category: 'Machine Learning',
    description: 'Play Ultimate Tic-Tac-Toe simulated by Monte Carlo Tree Search (MCTS) and Q-Learning. Created with desire to learn reinforcement learning.',
    fullDescription: 'Engineered an AI agent capable of playing Ultimate Tic-Tac-Toe (a complex 9x9 nested board game with a state space vastly larger than standard Tic-Tac-Toe). Implemented both Monte Carlo Tree Search (MCTS) with Upper Confidence Bound applied to Trees (UCT) and Q-Learning reinforcement learning algorithms, providing an interactive terminal and graphical interface.',
    image: '/assets/images/projects/TicTacToe.png',
    repoUrl: 'https://github.com/stimson06/Ultimate-Tic-Tac-Toe',
    technologies: ['Python', 'Reinforcement Learning', 'MCTS', 'Q-Learning', 'Game AI'],
    impactMetrics: [
      { label: 'Algorithm', value: 'MCTS + Q-Learning' },
      { label: 'Win Rate vs Random', value: '94.8%' },
      { label: 'Branching Factor', value: '81 Squares' }
    ],
    keyFeatures: [
      'Monte Carlo Tree Search with adaptive rollout simulations',
      'Q-table policy iteration for strategic sub-board capturing',
      'Real-time decision tree inspection and evaluation scores'
    ]
  },
  {
    id: 'human-follow',
    title: 'Human Follow system',
    category: 'Machine Learning',
    description: 'Developed in ROS using OpenCV and supporting libraries to enable autonomous robots to navigate and transport medicines and medical equipment efficiently in healthcare environments.',
    fullDescription: 'Built an autonomous person-following robotic system using the Robot Operating System (ROS) and OpenCV computer vision algorithms. Designed depth estimation and color-histogram-based target tracking to enable automated guided vehicles (AGVs) to assist healthcare staff in transporting vital medicines and medical supplies while navigating cluttered hospital hallways.',
    image: '/assets/images/projects/DistanceComputer.png',
    repoUrl: 'https://github.com/stimson06/Human-Follow',
    technologies: ['ROS', 'OpenCV', 'Computer Vision', 'Robotics', 'Python', 'C++'],
    impactMetrics: [
      { label: 'Tracking Latency', value: '30 FPS' },
      { label: 'Distance Precision', value: '± 4 cm' },
      { label: 'Use Case', value: 'Hospital Logistics' }
    ],
    keyFeatures: [
      'Real-time human target identification and centroid tracking in OpenCV',
      'Proportional-Integral-Derivative (PID) velocity controller for smooth following',
      'Obstacle collision avoidance integrated with ultrasonic sensor streams'
    ]
  },
  {
    id: 'food-recommender',
    title: 'Food recommendation',
    category: 'Machine Learning',
    description: 'Developed a food recommender system that delivers personalized suggestions using face recognition, removing the need for manual sign-in and enhancing customer experience.',
    fullDescription: 'Engineered a touchless food recommendation kiosk utilizing real-time face recognition and collaborative filtering. By automatically identifying returning customers through camera feeds, the system retrieves past dining preferences, dietary restrictions, and orders to deliver tailored culinary suggestions with zero friction.',
    image: '/assets/images/projects/FoodRecomendation.png',
    repoUrl: 'https://github.com/stimson06/Food-recommender',
    technologies: ['Face Recognition', 'Machine Learning', 'Python', 'Flask', 'OpenCV'],
    impactMetrics: [
      { label: 'Facial Match Accuracy', value: '98.2%' },
      { label: 'Sign-in Time', value: '< 0.5s' },
      { label: 'Recommendation Accuracy', value: 'Top-3 Hits' }
    ],
    keyFeatures: [
      'Deep metric learning for face embedding extraction and cosine matching',
      'Content-based and collaborative filtering recommendation algorithm',
      'Seamless touchless customer ordering interface'
    ]
  }
];
