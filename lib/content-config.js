// lib/content-config.js
// CONFIGURATION FILE - Update this file with your personal information

export const personalInfo = {
    name: "Kishore Kumar Ramkumar",
    email: "kramkum@iu.edu",
    tagline: "Engineer building production systems across data pipelines, ML training, and multi-agent LLM stacks",
    shortBio: "Software Engineer · ML & AI Systems",
    availability: "Graduating MS Data Science in May 2026 · Open to ML, SDE, Data Engineering, and Agentic Engineering roles",
    social: {
        github: "https://github.com/kishuxz",
        linkedin: "https://www.linkedin.com/in/kishore-kumar-ramkumar-425744279/",
        leetcode: "https://leetcode.com/u/Kishore_0123/",
        twitter: null,
        portfolio: "https://portfolio-lpp8zzy4y-kishuxzs-projects.vercel.app/"
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
    resumePdfUrl: "/KISHORE%20KUMAR%20RAMKUMAR%20SDE%202026.pdf",
};

export const experiences = [
    {
        company: 'Indiana University – The Media School (RT Project 2101)',
        role: 'Research Assistant — Multi-Agent LLM Systems',
        location: 'Bloomington, IN',
        period: 'Jan 2026 - Present',
        advisor: 'Advisor: Prof. James Shanahan',
        description: 'Architecting a 10-agent LangGraph pipeline for archival speaker diarization across 30+ years of Late Show with David Letterman (1982–2015).',
        achievements: [
            'Built a 10-agent multimodal pipeline orchestrated by LangGraph: Whisper large-v3 + pyannote 3.x + Demucs + TransNetV2 + RetinaFace+LightASD + LoRA-fine-tuned Llama 3.2 11B',
            'Achieved 91.1% speaker resolution accuracy across the corpus (4 episodes at 100%) — deployed on IU Big Red 200 HPC with vLLM on A100s via SLURM, structured outputs via Instructor + Pydantic',
            'Designed two novel modules with no published precedent: Interrogative Host Rescue (IHR) for short-question recovery, and an LLM-based identity resolution agent for character/actor disambiguation',
            'Output format: Final Draft XML for downstream media research; targeting INTERSPEECH 2027, EMNLP 2026, and ACL NLP4DH workshop'
        ],
        tech: ['LangGraph', 'LangChain', 'vLLM', 'Whisper', 'pyannote', 'LoRA', 'Llama 3.2', 'SLURM', 'A100']
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
            'Built and deployed GPU-backed retrieval system + LLM chatbot using PyTorch, FAISS-GPU, and FastAPI on AWS EKS',
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
        name: 'Programming Languages',
        color: 'border-stone-500',
        skills: ['Python', 'TypeScript', 'JavaScript', 'Java', 'SQL', 'R', 'Bash']
    },
    {
        name: 'ML & LLMs',
        color: 'border-stone-400',
        skills: ['PyTorch', 'Transformers', 'PEFT (LoRA / QLoRA)', 'vLLM', 'Whisper', 'pyannote', 'Llama', 'Scikit-learn', 'Embeddings']
    },
    {
        name: 'Agent Frameworks & LLM Tooling',
        color: 'border-stone-500',
        skills: ['LangGraph', 'LangChain', 'LangSmith', 'LlamaIndex', 'Instructor', 'Pydantic', 'Context Engineering', 'Agent Memory', 'MCP (Model Context Protocol)']
    },
    {
        name: 'Cloud & Infrastructure',
        color: 'border-stone-400',
        skills: ['AWS (ML Engineer & Developer Associate)', 'Docker', 'Kubernetes', 'FastAPI', 'TorchServe', 'Linux', 'CloudWatch']
    },
    {
        name: 'Data Engineering',
        color: 'border-stone-300',
        skills: ['Apache Spark', 'PySpark', 'Kafka', 'ETL Pipelines', 'PostgreSQL', 'Parquet', 'NetCDF', 'xarray', 'xESMF']
    },
    {
        name: 'HPC & Distributed Training',
        color: 'border-stone-500',
        skills: ['Big Red 200 HPC (SLURM)', 'RunPod (H100)', 'Apple Silicon (MLX)', 'Ray', 'DeepSpeed', 'CUDA']
    },
    {
        name: 'Tools & Visualization',
        color: 'border-stone-300',
        skills: ['Git', 'VS Code', 'Power BI', 'Matplotlib', 'Seaborn']
    }
];

export const projects = [
    // FEATURED PROJECTS
    {
        title: 'Multi-Agent Speaker Diarization Pipeline',
        slug: 'diarization-pipeline',
        categories: ['Featured', 'LLM / Agents'],
        subtitle: 'RT Project 2101 · Indiana University Media School',
        accomplished: '10-agent LangGraph pipeline for archival TV speaker diarization across 30+ years of Letterman footage',
        measured: '91.1% speaker resolution accuracy with 4 episodes at 100%; active research targeting INTERSPEECH 2027 / EMNLP 2026 / ACL NLP4DH',
        method: 'A 10-agent LangGraph pipeline for archival TV transcript identity resolution across 30+ years of Late Show with David Letterman (1982–2015). Includes two novel modules with no published precedent: Interrogative Host Rescue (IHR) for short-question recovery and an LLM-based identity resolution agent for character/actor disambiguation.',
        techStack: ['LangGraph', 'Whisper large-v3', 'pyannote 3.x', 'LoRA', 'Llama 3.2 11B', 'vLLM', 'A100', 'SLURM'],
        github: null,
        featured: true
    },
    {
        title: 'Cloud Job Scheduler — Production AWS Distributed System',
        slug: 'cloud-job-scheduler',
        categories: ['Featured', 'Software Engineering', 'Cloud / AWS'],
        subtitle: 'Idempotent Submission · Distributed Workers · Priority Queues',
        accomplished: 'Production AWS job scheduler with idempotent APIs, distributed workers, FIFO priority queues, and EventBridge cron',
        measured: 'Live deployment · ~$15/month baseline at 100K jobs',
        method: 'A cloud-native job scheduling service handling asynchronous job execution with idempotent submission, lease-based distributed worker locking, automatic retries with exponential backoff, and full lifecycle observability. Built on AWS SAM with API Gateway, Lambda, DynamoDB (TTL + GSI), SQS Standard + FIFO priority queues, EventBridge, and CloudWatch dashboards with structured EMF metrics.',
        techStack: ['AWS Lambda', 'DynamoDB', 'SQS', 'API Gateway', 'EventBridge', 'CloudWatch', 'AWS SAM', 'Python'],
        github: 'https://github.com/kishuxz/Job-Scheduler',
        featured: true
    },
    {
        title: 'Stackply — AI-Native Hiring Platform',
        slug: 'stackply',
        categories: ['Featured', 'LLM / Agents', 'Software Engineering'],
        subtitle: 'Co-founder · MVP shipped as TrustHire AI',
        accomplished: 'AI-native hiring platform that evaluates candidates on real GitHub work, not resume keywords',
        measured: 'MVP public as TrustHire AI · Stackply production build in progress · applying to Techstars Anywhere June 2026',
        method: 'Built and shipped the hackathon MVP as TrustHire AI with a FastAPI backend, LangGraph AI pipelines, Qdrant vector search, Sentence Transformers, and a Next.js frontend with explainable skill scoring across presence, strength, and project evidence. Now scaling as Stackply with multi-provider LLM routing, Supabase + Render + Vercel infrastructure, and vibe-coding detection as the technical moat.',
        techStack: ['LangGraph', 'FastAPI', 'Qdrant', 'Sentence Transformers', 'Next.js', 'Groq', 'Supabase', 'Vercel'],
        github: 'https://github.com/kishuxz/trusthire-ai',
        featured: true
    },
    {
        title: 'OpenAI Parameter Golf Submission',
        slug: 'parameter-golf',
        categories: ['Featured', 'Machine Learning'],
        subtitle: 'Compute-Constrained LM Training Optimization',
        accomplished: "nanoGPT-scale LM training optimization for OpenAI's Parameter Golf challenge",
        measured: 'Active competition · deadline April 30, 2026 · best result: 1.32 bpb in a 10-minute H100 run',
        method: "Submission to OpenAI's Parameter Golf challenge minimizing bits-per-byte at fixed compute (~16M params, int8 quantization, 1024 vocab). Implementing non-uniform FFN widths + StarReLU activation on top of the SOTA baseline. Local MLX pipeline on Apple Silicon, deployed to RunPod H100. Confirmed dead ends: depth recurrence and MoE both killed by quantization error amplification.",
        techStack: ['PyTorch', 'MLX', 'CUDA', 'Apple Silicon', 'RunPod', 'H100', 'Quantization', 'QAT'],
        github: 'https://github.com/kishuxz/parameter-golf',
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
    title: "Kishore Kumar Ramkumar | Software Engineer · ML & AI Systems",
    description: "Engineer building production systems across data pipelines, ML training, and multi-agent LLM stacks. MS Data Science at Indiana University, May 2026.",
    keywords: [
        "Kishore Kumar Ramkumar",
        "Multi-Agent LLM",
        "LangGraph",
        "Speaker Diarization",
        "ML Engineer",
        "Data Engineer",
        "Software Engineer",
        "AI Engineer",
        "Indiana University",
        "OpenAI Parameter Golf",
        "Stackply"
    ],
    ogImage: "/og-image.png",
    twitterHandle: null,
};
