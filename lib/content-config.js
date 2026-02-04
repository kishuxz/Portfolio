// lib/content-config.js
// CONFIGURATION FILE - Update this file with your personal information

export const personalInfo = {
    name: "Kishore Kumar",
    email: "kishoresk0123@gmail.com",
    tagline: "Full-stack engineer with hands-on experience building frontend applications, scalable data pipelines, and applied ML/LLM systems",
    shortBio: "Full-Stack Developer · Data Engineer · ML/LLM Systems Engineer",
    availability: "Available for new opportunities",
    social: {
        github: "https://github.com/kishuxz",
        linkedin: "https://www.linkedin.com/in/kishore-kumar-ramkumar-425744279/",
        leetcode: "https://leetcode.com/u/Kishore_0123/",
        twitter: null,
        portfolio: "https://yourportfolio.com"
    },
    stats: {
        experience: "2+",
        projects: "15+",
        companies: "5+",
    },
    trustedBy: [
        "React", "Next.js", "Python", "PostgreSQL", "AWS"
    ],
    education: {
        degree: "MS Data Science",
        school: "Indiana University",
        location: "Bloomington, IN",
        year: "2024",
        focus: "Machine Learning, Distributed Systems, NLP"
    },
    resumePdfUrl: "/Portfolio/KISHORE%20KUMAR%20RAMKUMAR%20SDE%202026.pdf",
};

export const experiences = [
    {
        company: 'Indiana University – The Media School',
        role: 'Research Assistant (Data Scientist)',
        location: 'Bloomington, IN',
        period: 'Jan 2026 - Present',
        description: 'Developing automated data pipelines for media content analysis and research.',
        achievements: [
            'Developed automated data pipelines to transcribe television program audio and transform unstructured media content into structured, analysis-ready datasets',
            'Designed scalable preprocessing workflows to clean, standardize, and normalize transcripts, enabling large-scale longitudinal media analysis',
            'Built datasets extending media research coverage beyond 2015 using program-level and character-level metadata extraction'
        ],
        tech: ['Python', 'Pandas', 'Data Pipelines', 'NLP', 'Audio Processing']
    },
    {
        company: 'Indiana University – O\'Neill School',
        role: 'Data Engineer / Research Assistant',
        location: 'Bloomington, IN',
        period: 'May 2025 - Aug 2025',
        description: 'Built distributed data processing pipelines for climate research.',
        achievements: [
            'Built and operated a distributed data processing pipeline to process 530+ GB of CMIP6 precipitation data using Python (xarray, xESMF) on HPC',
            'Reduced preprocessing time by 32% on Quartz HPC by parallelizing workloads and optimizing I/O throughput',
            'Implemented automated data validation, drift checks, and rolling aggregates generating CONUS maps for drought analysis'
        ],
        tech: ['Python', 'xarray', 'HPC', 'NetCDF', 'Data Validation']
    },
    {
        company: 'MRAR Intellect Solutions',
        role: 'ML Associate Engineer Intern',
        location: 'Mississauga, Canada',
        period: 'Jan 2024 - Aug 2024',
        description: 'Built and deployed GPU-backed ML systems on AWS.',
        achievements: [
            'Built and deployed GPU-backed RAG chatbot using PyTorch, FAISS-GPU, and FastAPI on AWS EKS',
            'Maintained 95% of inferences under 150ms using CUDA FP16 optimizations with autoscaling and CloudWatch monitoring',
            'Designed distributed multi-GPU training for GPT-J-6B using Ray and DeepSpeed ZeRO-3, improving evaluation throughput by 18%'
        ],
        tech: ['PyTorch', 'AWS', 'FastAPI', 'Ray', 'DeepSpeed', 'FAISS']
    },
    {
        company: 'IVIEWSENSE Private Limited',
        role: 'Data Analyst Intern',
        location: 'Chennai, India',
        period: 'Jan 2022 - Dec 2022',
        description: 'Built interactive dashboards and business intelligence solutions.',
        achievements: [
            'Collaborated with stakeholders to define KPIs and built interactive Power BI dashboards using SQL and EDA',
            'Implemented scheduled refresh and validation checks, reducing dashboard refresh time from 42 to 33 minutes',
            'Maintained 98% on-time data updates, improving reliability of reporting workflows'
        ],
        tech: ['SQL', 'Power BI', 'Python', 'EDA', 'Data Visualization']
    }
];

export const skillCategories = [
    {
        name: 'Cloud & Infrastructure',
        color: 'border-stone-400',
        skills: ['AWS', 'Docker', 'Kubernetes', 'CloudWatch', 'Linux']
    },
    {
        name: 'Data Engineering',
        color: 'border-stone-300',
        skills: ['SQL', 'PostgreSQL', 'NetCDF', 'Parquet', 'xarray', 'xESMF']
    },
    {
        name: 'Programming Languages',
        color: 'border-stone-500',
        skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'R']
    },
    {
        name: 'ML & LLMs',
        color: 'border-stone-400',
        skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'LangChain', 'RAG Systems', 'FAISS', 'Embeddings']
    },
    {
        name: 'Big Data & ETL',
        color: 'border-stone-500',
        skills: ['Apache Spark', 'PySpark', 'Kafka', 'ETL Pipelines', 'Batch Processing', 'Ray', 'DeepSpeed']
    },
    {
        name: 'Visualization & Tools',
        color: 'border-stone-300',
        skills: ['Power BI', 'Git', 'Matplotlib', 'VS Code', 'FastAPI', 'TorchServe']
    }
];

export const projects = [
    // FEATURED PROJECTS
    {
        title: 'TruthLens – LLM-Powered RAG System',
        slug: 'truthlens-rag',
        categories: ['Featured', 'LLM / Agents', 'Hackathon'],
        accomplished: 'Built a retrieval-augmented generation system for querying unstructured documents with grounded, citation-based LLM responses',
        measured: 'Hackathon project implementing embeddings, vector search, and prompt orchestration',
        method: 'Implemented embeddings, vector search, and prompt orchestration. Designed guardrails to reduce hallucinations and improve answer grounding. Integrated agent-style workflows for multi-step reasoning.',
        techStack: ['Python', 'LangChain', 'LLMs', 'Vector Search', 'FastAPI', 'AWS'],
        github: 'https://github.com/kishuxz/aws-hackathon-truthlens',
        featured: true
    },
    {
        title: 'Cloud-Based Smart Energy Management System',
        slug: 'smart-energy',
        categories: ['Featured', 'Data Engineering'],
        accomplished: 'Designed a cloud-native data pipeline to ingest, process, and analyze energy consumption data for forecasting and analytics',
        measured: 'Built streaming and batch pipelines for time-series energy data',
        method: 'Built streaming and batch pipelines for time-series energy data. Engineered feature extraction and aggregation workflows. Integrated ML models and analytics dashboards.',
        techStack: ['Python', 'Apache Kafka', 'Apache Spark', 'Spark MLlib', 'AWS', 'Tableau'],
        github: 'https://github.com/kishuxz/smart-energy-management-system',
        featured: true
    },
    {
        title: 'NetworkMap – Open Source Network Visualization',
        slug: 'networkmap',
        categories: ['Featured', 'Data Visualization', 'Open Source'],
        accomplished: 'Developed an open-source web application to visualize complex network and organizational relationships interactively',
        measured: 'Built interactive graph visualizations using frontend frameworks',
        method: 'Built interactive graph visualizations using frontend frameworks. Designed reusable visualization components. Contributed documentation for open-source usage.',
        techStack: ['React', 'JavaScript', 'D3.js', 'Node.js', 'HTML', 'CSS'],
        github: 'https://github.com/kishuxz/info_viz',
        featured: true
    },

    // LLM / AGENTS
    {
        title: 'Multi-Agent LLM Relocator',
        slug: 'multiagent-relocator',
        categories: ['LLM / Agents'],
        accomplished: 'Implemented a multi-agent LLM system to simulate coordination and task-based decision making',
        measured: 'Designed agent roles and message-passing workflows',
        method: 'Designed agent roles and message-passing workflows. Implemented orchestration logic for multi-step reasoning.',
        techStack: ['Python', 'LLMs', 'LangChain', 'Prompt Engineering'],
        github: 'https://github.com/Ramcharxn/MultiAgent-LLM-Relocator',
        featured: false
    },

    // DATA ENGINEERING
    {
        title: 'Distributed Job Scheduler',
        slug: 'job-scheduler',
        categories: ['Data Engineering', 'Software Engineering'],
        accomplished: 'Built a distributed job scheduling system to manage and execute tasks across workers reliably',
        measured: 'Designed scheduling and task assignment logic',
        method: 'Designed scheduling and task assignment logic. Implemented failure handling and job state tracking.',
        techStack: ['Java', 'Multithreading', 'Data Structures', 'System Design'],
        github: 'https://github.com/kishuxz/Job-Scheduler',
        featured: false
    },

    // MACHINE LEARNING
    {
        title: 'COVID-19 CT Scan Deep Learning Models',
        slug: 'covid-ct-dl',
        categories: ['Machine Learning'],
        accomplished: 'Implemented deep learning models to classify COVID-19 from lung CT scan images',
        measured: 'Built CNN-based architectures',
        method: 'Built CNN-based architectures. Designed preprocessing and training pipelines.',
        techStack: ['Python', 'PyTorch', 'TensorFlow', 'CNNs'],
        github: 'https://github.com/kishuxz/COVID-CT-DL-Models',
        featured: false
    },
    {
        title: 'Election Forecast Market Impact',
        slug: 'election-forecast',
        categories: ['Machine Learning', 'Data Analysis', 'Data Visualization'],
        accomplished: 'Analyzed relationships between election forecasts and market behavior using historical data and predictive models',
        measured: 'Performed data cleaning and feature engineering',
        method: 'Performed data cleaning and feature engineering. Built predictive models and visualized market trends.',
        techStack: ['Python', 'Pandas', 'Scikit-learn', 'Data Visualization'],
        github: 'https://github.com/kishuxz/election-forecast-market-impact',
        featured: false
    },

    // DATA ANALYSIS
    {
        title: 'H1B Visa Data Analysis',
        slug: 'h1b-analysis',
        categories: ['Data Analysis', 'Data Visualization'],
        accomplished: 'Conducted exploratory and statistical analysis on H1B visa datasets to identify trends and insights',
        measured: 'Processed large public datasets',
        method: 'Processed large public datasets. Built visualizations to communicate findings clearly.',
        techStack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'SQL'],
        github: 'https://github.com/kishuxz/h1b-data-analysis',
        featured: false
    },

    // DATA VISUALIZATION
    {
        title: 'ILS Z639 Project',
        slug: 'ils-z639',
        categories: ['Data Visualization'],
        accomplished: 'Developed data-driven applications focused on data organization and visualization',
        measured: 'Built data processing and visualization workflows',
        method: 'Built data processing and visualization workflows. Focused on clarity and usability of information presentation.',
        techStack: ['Python', 'Data Analysis', 'Visualization'],
        github: 'https://github.iu.edu/kramkum/KISHORE-25SP-ILS-Z639',
        featured: false
    },

    // SOFTWARE ENGINEERING
    {
        title: 'ADT Project',
        slug: 'adt-project',
        categories: ['Software Engineering'],
        accomplished: 'Implemented core abstract data types and algorithms with a focus on correctness and efficiency',
        measured: 'Built data structures from scratch',
        method: 'Built data structures from scratch. Analyzed algorithmic performance.',
        techStack: ['Java', 'Data Structures', 'Algorithms'],
        github: 'https://github.iu.edu/kramkum/ADT-PROJECT',
        featured: false
    }
];

// Project gradients - used for placeholder images
export const projectGradients = {
    'blue-purple': 'from-blue-500 to-purple-600',
    'green-emerald': 'from-green-500 to-emerald-600',
    'orange-pink': 'from-orange-500 to-pink-600',
    'red-rose': 'from-red-500 to-rose-600',
    'cyan-blue': 'from-cyan-500 to-blue-600',
    'violet-purple': 'from-violet-500 to-purple-600',
};

// SEO & Metadata
export const siteMetadata = {
    title: `${personalInfo.name} | Portfolio`,
    description: personalInfo.tagline,
    keywords: [
        "Full-Stack Developer",
        "Data Engineer",
        "ML Engineer",
        "LLM Systems",
        "React",
        "Next.js",
        "Python",
        "RAG",
        "Machine Learning"
    ],
    ogImage: "/og-image.png",
    twitterHandle: "@yourusername",
};
