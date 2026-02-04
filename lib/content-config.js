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
    {
        title: 'TruthLens – LLM-Powered RAG System',
        slug: 'truthlens-rag',
        categories: ['Featured', 'Machine Learning', 'AWS'],
        accomplished: 'Built agent-driven RAG system for querying large unstructured datasets',
        measured: 'Hackathon project with vector search and grounding',
        method: 'Implemented vector search, grounding, and tool-based reasoning for querying documents with LLM agents.',
        techStack: ['LLMs', 'RAG', 'LangChain', 'AWS'],
        github: 'https://github.com/kishuxz/aws-hackathon-truthlens',
        featured: true
    },
    {
        title: 'Distributed Data Pipeline',
        slug: 'data-pipeline',
        categories: ['Featured', 'Data Engineering', 'Backend'],
        accomplished: 'Designed scalable ETL workflows for large datasets',
        measured: 'Processed 530+ GB with 32% performance improvement',
        method: 'Built HPC-based data processing with validation, retries, and fault tolerance for climate research.',
        techStack: ['Python', 'Airflow', 'AWS', 'PostgreSQL', 'xarray'],
        github: 'https://github.com/kishuxz',
        featured: true
    },
    {
        title: 'NetworkMap – Open Source Visualization',
        slug: 'networkmap',
        categories: ['Featured', 'Full-Stack', 'Open Source'],
        accomplished: 'Built interactive network visualization platform',
        measured: 'Open-source contribution with reusable components',
        method: 'Developed interactive network graphs with D3.js, React components, and Node.js backend.',
        techStack: ['React', 'D3.js', 'Node.js', 'TypeScript'],
        github: 'https://github.com/kishuxz/NetworkMap',
        featured: true
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
