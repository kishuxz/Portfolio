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

    // EARLIER WORK / ARCHIVE
    {
        title: 'NetworkMap — Event Network Visualization Platform',
        slug: 'networkmap',
        categories: ['Software Engineering', 'Data Visualization', 'Full-Stack'],
        subtitle: 'Full-Stack React + Node.js + MongoDB',
        accomplished: 'Full-stack network visualization platform with form builder, auth, analytics, and CSV export',
        measured: 'Deployed on Netlify frontend + Render backend + MongoDB Atlas',
        method: 'A full-stack web app for collecting, analyzing, and visualizing participant connections from events. Includes dynamic form builder, JWT auth with token blacklisting, analytics dashboard with Recharts, CSV export to Gephi/Kumu format, and cascading country/state/city dropdowns.',
        techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Recharts', 'Netlify', 'Render'],
        github: 'https://github.com/kishuxz/info_viz',
        featured: false
    },
    {
        title: 'COVID-19 Lung CT Scan Detection',
        slug: 'covid-ct-detection',
        categories: ['Machine Learning', 'Deep Learning'],
        subtitle: 'CNN · ResNet50 Transfer Learning · GAN',
        accomplished: 'Custom CNN + ResNet50 transfer learning + GAN for COVID-19 CT scan classification',
        measured: '19,685 CT scan images · custom CNN at 81% test accuracy · ResNet50 at 83% test accuracy',
        method: 'Deep learning models for COVID-19 detection from CT scans across 19,685 images. Implementations include a custom 4-layer CNN, ResNet50 transfer learning with 14M+ parameters, a GAN for synthetic data augmentation, and a Streamlit web app for interactive predictions.',
        techStack: ['TensorFlow', 'Keras', 'ResNet50', 'GAN', 'Streamlit', 'Transfer Learning'],
        github: 'https://github.com/kishuxz/COVID-CT-DL-Models',
        featured: false
    },
    {
        title: 'Election Forecast & Market Impact Analysis',
        slug: 'election-forecast',
        categories: ['Data Analysis', 'NLP'],
        subtitle: 'Social Media Mining · NIFTY 50 Sentiment',
        accomplished: 'Social media sentiment vs. NIFTY 50 during 2024 Indian elections',
        measured: 'Course project for Social Media Mining at Indiana University',
        method: 'Analysis of the relationship between Indian election predictions, media sentiment, and stock market reactions during the 2024 Indian elections. Sentiment analysis on Reddit (r/India, r/IndiaInvestments) and YouTube transcripts, correlated with NIFTY 50 movements.',
        techStack: ['Python', 'VADER', 'TextBlob', 'PRAW', 'yfinance', 'Pandas'],
        github: 'https://github.com/kishuxz/election-forecast-market-impact',
        featured: false
    },
    {
        title: 'H1B Immigration Data Visualization',
        slug: 'h1b-viz',
        categories: ['Data Analysis', 'Data Visualization'],
        subtitle: 'FY2020–FY2024 LCA Disclosure Data',
        accomplished: 'Data visualization of H1B visa petitions across FY2020–FY2024',
        measured: '2.8 GB raw LCA disclosure data · course project for Data Visualization at IU Bloomington',
        method: 'Comprehensive data visualization analyzing H1B visa petition data across FY2020–FY2024. Includes geographic distribution maps, gender demographics, country-of-birth statistics, and temporal trend analysis.',
        techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter'],
        github: 'https://github.com/kishuxz/h1b-data-analysis',
        featured: false
    },
    {
        title: 'TruthLens — Bedrock-Powered Content Reliability Scorer',
        slug: 'truthlens',
        categories: ['LLM / Agents', 'Cloud / AWS'],
        subtitle: 'Hackathon · Auditable Policy Scoring',
        accomplished: 'Bedrock-powered reliability scorer for social media posts with auditable policy outputs',
        measured: 'Public hackathon repo · Amazon Bedrock Nova Micro + deterministic local scorer',
        method: 'A reliability scoring system for social media posts using Amazon Bedrock Nova Micro. Auditable policy-based scoring with tier weights, evidence floors, and a deterministic local scorer for development. Outputs JSON scorecards per post with a transparent evaluation ladder.',
        techStack: ['AWS Bedrock', 'Nova Micro', 'Python', 'Jupyter', 'AWS'],
        github: 'https://github.com/kishuxz/aws-hackathon-truthlens',
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
