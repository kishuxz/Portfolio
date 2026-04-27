// lib/portfolio-knowledge.js
// Structured knowledge base for the portfolio chatbot
// Sourced from Kishore Kumar Ramkumar's resume and portfolio

export const projectsKnowledge = {
  featured: [
    {
      title: "Multi-Agent Speaker Diarization Pipeline",
      summary: "10-agent LangGraph pipeline for archival TV speaker diarization. 91.1% accuracy. Built under Prof. James Shanahan at IU Media School (RT Project 2101). Stack: Whisper large-v3 + pyannote 3.x + Demucs + LoRA-fine-tuned Llama 3.2 11B. Deployed on IU Big Red 200 HPC via SLURM. Includes novel IHR module and LLM identity resolution agent. Targeting INTERSPEECH 2027.",
      tags: ["LangGraph", "Whisper", "pyannote", "LoRA", "vLLM", "research"]
    },
    {
      title: "Cloud Job Scheduler",
      summary: "Production AWS distributed job scheduler. Idempotent submission, lease-based worker locking, FIFO priority queues, EventBridge cron, CloudWatch dashboards, TTL auto-cleanup. Built on AWS SAM with API Gateway + Lambda + DynamoDB + SQS. ~$15/month at 100K jobs.",
      tags: ["AWS", "Lambda", "DynamoDB", "SQS", "distributed systems", "production"],
      github: "https://github.com/kishuxz/Job-Scheduler"
    },
    {
      title: "Stackply (with TrustHire AI MVP)",
      summary: "AI-native hiring platform. Evaluates candidates on real GitHub work, not resume keywords. Co-founded. Hackathon MVP shipped as TrustHire AI — FastAPI + LangGraph + Qdrant + Next.js with explainable skill scoring. Scaling as Stackply with Groq + Gemini routing on Supabase/Render/Vercel. Vibe-coding detection as technical moat. Applying to Techstars Anywhere June 2026.",
      tags: ["LangGraph", "FastAPI", "Qdrant", "Next.js", "co-founder", "startup"],
      github: "https://github.com/kishuxz/trusthire-ai"
    },
    {
      title: "OpenAI Parameter Golf",
      summary: "Submission to OpenAI's Parameter Golf challenge. Minimizing bits-per-byte at fixed compute (~16M params, int8). Best result: 1.32 bpb in 10-min H100 run. Implementing non-uniform FFN widths + StarReLU. Local MLX pipeline on Apple Silicon, deployed to RunPod. Confirmed dead-ends: depth recurrence and MoE both killed by quantization error amplification.",
      tags: ["PyTorch", "MLX", "CUDA", "quantization", "competition"],
      github: "https://github.com/kishuxz/parameter-golf"
    }
  ],
  earlierWork: [
    {
      title: "NetworkMap (info_viz)",
      summary: "Full-stack event network visualization platform. React + Node.js + MongoDB. JWT auth with token blacklisting. Recharts analytics. CSV export to Gephi/Kumu. Deployed on Netlify + Render + MongoDB Atlas.",
      github: "https://github.com/kishuxz/info_viz"
    },
    {
      title: "COVID-19 CT Scan Detection",
      summary: "Deep learning for COVID detection on 19,685 CT scans. Custom 4-layer CNN (81%), ResNet50 transfer learning (83%), and GAN for synthetic augmentation. Streamlit web app.",
      github: "https://github.com/kishuxz/COVID-CT-DL-Models"
    },
    {
      title: "Election Forecast & Market Impact",
      summary: "Social media mining course project at IU. Sentiment analysis on Reddit (r/India, r/IndiaInvestments) and YouTube vs. NIFTY 50 during the 2024 Indian elections.",
      github: "https://github.com/kishuxz/election-forecast-market-impact"
    },
    {
      title: "H1B Immigration Data Visualization",
      summary: "Data visualization course project at IU. 2.8 GB of LCA disclosure data across FY2020–FY2024. Geographic, demographic, and temporal trend analysis.",
      github: "https://github.com/kishuxz/h1b-data-analysis"
    },
    {
      title: "TruthLens — Bedrock-Powered Content Reliability Scorer",
      summary: "Reliability scoring system for social media posts using Amazon Bedrock Nova Micro. Auditable policy-based scoring with tier weights, evidence floors, and a deterministic local scorer for development. Outputs JSON scorecards per post with a transparent evaluation ladder.",
      tags: ["AWS Bedrock", "Nova Micro", "Python", "AWS"],
      github: "https://github.com/kishuxz/aws-hackathon-truthlens"
    }
  ]
};

export const workAuthorization = {
  currentStatus: "F-1 student visa with Optional Practical Training (OPT) eligibility starting May 2026, immediately upon graduation from MS Data Science at Indiana University.",
  optDetails: "Eligible for 12 months of standard OPT, plus a 24-month STEM OPT extension since the MS Data Science degree is on the STEM Designated Degree Program List. Total potential work authorization without H-1B: 36 months.",
  sponsorship: "Will require H-1B sponsorship after the OPT period (by 2027 at the latest). Open to companies that sponsor H-1B and willing to discuss timing transparently.",
  startDate: "Available to start full-time work in May 26 2026, immediately after graduation.",
  location: "Currently in Bloomington, IN. Open to relocate anywhere in the United States. Preferred metros include SF Bay Area, Seattle, NYC, Boston, Austin, and Chicago, but fully open to any US location for the right role. Also open to remote roles based in the US.",
  sponsorshipFlexibility: "Open to discussing alternative sponsorship paths (cap-exempt employers, OPT-then-H-1B transition timelines, etc.) with prospective employers.",
  citizenship: "No, Kishore is not a US citizen. He is on an F-1 student visa and is OPT-eligible starting May 2026."
};

export const chunks = [
  {
    id: 'intro',
    section: 'About',
    title: 'About Kishore Kumar Ramkumar',
    content: `Kishore Kumar Ramkumar is a Software Engineer focused on ML and AI systems, pursuing a Master of Science in Data Science at Indiana University Bloomington (GPA 3.5, graduating May 2026). He builds production systems across data pipelines, ML training, and multi-agent LLM stacks. He is open to full-time opportunities in ML Engineering, Software Engineering, AI/LLM Engineering, Agentic Engineering, and Data Engineering.`,
    keywords: ['about', 'who', 'kishore', 'introduction', 'bio', 'background', 'summary', 'profile', 'overview'],
    url: '#home'
  },
  {
    id: 'education',
    section: 'Education',
    title: 'Education',
    content: `Indiana University Bloomington — Master of Science in Data Science, GPA 3.5 (Aug 2024 – May 2026, Bloomington IN). Focus areas: Machine Learning, Distributed Systems, NLP.
Sri Ramachandra Institute of Higher Education and Research, Chennai — Bachelor of Technology in Computer Science specializing in AI & ML (Jul 2021 – Jun 2024).`,
    keywords: ['education', 'degree', 'university', 'school', 'gpa', 'indiana', 'bachelor', 'master', 'ms', 'btech', 'college', 'academic'],
    url: '#education'
  },
  {
    id: 'skills-programming',
    section: 'Skills',
    title: 'Programming Languages & Development Skills',
    content: `Programming Languages: Python, Java, SQL, PostgreSQL, MySQL, JavaScript, ReactJS, TypeScript, C++, Git, R.
Software Engineering: Data Structures & Algorithms, Object-Oriented Programming (OOP), Multithreading & Concurrency, System Design, Debugging, Unit Testing.
Backend: REST APIs, Microservices, Distributed Systems, Event-Driven Architecture, HTTP, Message Queues.`,
    keywords: ['programming', 'languages', 'python', 'java', 'javascript', 'typescript', 'sql', 'react', 'skills', 'coding', 'software engineering', 'backend', 'api'],
    url: '#skills'
  },
  {
    id: 'skills-ml',
    section: 'Skills',
    title: 'Machine Learning & AI Skills',
    content: `Machine Learning & AI: PyTorch, Transformers, PEFT (LoRA / QLoRA), vLLM, Whisper, pyannote, Llama, Scikit-learn, Embeddings, LangGraph, LangChain, LangSmith, LlamaIndex, Instructor, Pydantic, Context Engineering, Agent Memory, MCP, DeepSpeed, Ray.
Key frameworks: Hugging Face Transformers, DeepSpeed, vLLM, Ray.`,
    keywords: ['machine learning', 'ml', 'ai', 'llm', 'rag', 'pytorch', 'tensorflow', 'langchain', 'langgraph', 'faiss', 'nlp', 'transformers', 'fine-tuning', 'lora', 'agents', 'multiagent', 'embeddings', 'vector', 'whisper', 'vllm', 'deepspeed'],
    url: '#skills'
  },
  {
    id: 'skills-cloud',
    section: 'Skills',
    title: 'Cloud & DevOps Skills',
    content: `Cloud Architecture & DevOps: AWS (EC2, Lambda, S3, EKS, SQS, DynamoDB, CloudWatch, Bedrock, SageMaker, ECR), Serverless Architecture, Docker, Kubernetes, CI/CD, Linux.
Infrastructure & MLOps: HPC (SLURM clusters, NVIDIA A100 GPUs), Distributed Computing, Parallel Computing, Ray, ETL/ELT pipelines, TorchServe.
Certifications: AWS Certified Machine Learning Engineer – Associate (Nov 2025); AWS Certified Developer – Associate (Jan 2026).`,
    keywords: ['cloud', 'aws', 'docker', 'kubernetes', 'devops', 'lambda', 's3', 'ec2', 'serverless', 'linux', 'mlops', 'hpc', 'bedrock', 'sagemaker', 'gpu', 'a100', 'slurm', 'ci/cd', 'certified'],
    url: '#skills'
  },
  {
    id: 'skills-data',
    section: 'Skills',
    title: 'Data Engineering & Big Data Skills',
    content: `Data & Streaming Systems: Apache Kafka, Apache Spark, PySpark, Spark MLlib, ETL Pipelines, Parallel Computing, Ray, DeepSpeed, xarray, xESMF, NetCDF.
Data Visualization: Power BI, Tableau, Matplotlib, Cartopy.
Databases: PostgreSQL, MySQL, MongoDB, DynamoDB, Redis.`,
    keywords: ['data engineering', 'kafka', 'spark', 'pyspark', 'etl', 'streaming', 'distributed', 'xarray', 'netcdf', 'power bi', 'tableau', 'visualization', 'database', 'mongodb', 'postgresql'],
    url: '#skills'
  },
  {
    id: 'exp-iu-media',
    section: 'Experience',
    title: 'Research Assistant (ML) – Indiana University Media School (Current)',
    content: `Research Assistant (Machine Learning) at the Media School, Communications, Indiana University Bloomington (Jan 2026 – Present).
– Architected a 10-agent LangGraph pipeline for archival speaker diarization across 30+ years of Late Show with David Letterman (1982–2015).
– Combined Whisper large-v3, pyannote 3.x, Demucs, TransNetV2, RetinaFace+LightASD, and LoRA-fine-tuned Llama 3.2 11B.
– Achieved 91.1% speaker resolution accuracy across the corpus, with 4 episodes at 100%.
– Deployed on IU Big Red 200 HPC with vLLM on A100s via SLURM and structured outputs via Instructor + Pydantic.
– Designed Interrogative Host Rescue (IHR) and an LLM identity resolution agent; outputs Final Draft XML for downstream media research.`,
    keywords: ['research', 'indiana university', 'iu', 'media school', 'llama', 'langgraph', 'multimodal', 'nlp', 'speaker attribution', 'whisper', 'pyannote', 'gpu', 'a100', 'current job', 'present', 'lora', 'viterbi', 'slurm'],
    url: '#experience'
  },
  {
    id: 'exp-iu-oneill',
    section: 'Experience',
    title: 'Data Engineer / Research Assistant – IU O\'Neill School',
    content: `Data Engineer / Research Assistant at Indiana University O'Neill School of Public & Environmental Affairs (May 2025 – Aug 2025, Bloomington, IN).
– Processed 530+ GB of CMIP6 precipitation data, regridding to a 1°×1° global grid using xarray and xESMF in Python; staged on Slate storage and published versioned NetCDF outputs for cross-model analysis.
– Reduced preprocessing time by 32% on Quartz HPC by distributing tasks using Spark and optimizing I/O throughput.
– Generated 3-, 6-, and 12-month rolling totals and CONUS maps with Cartopy and Matplotlib, adding drift tests and data CI for predictive analytics and time-series forecasting of regional drought indicators.`,
    keywords: ['data engineer', 'climate', 'cmip6', 'precipitation', 'hpc', 'xarray', 'netcdf', 'drought', 'oneill', 'research', 'spark', 'cartopy', 'conus', 'quartz'],
    url: '#experience'
  },
  {
    id: 'exp-mrar',
    section: 'Experience',
    title: 'ML Associate Engineer Intern – MRAR Intellect Solutions',
    content: `Machine Learning Associate Engineer Intern at MRAR Intellect Solutions (Jan 2024 – Aug 2024, Mississauga, Canada).
– Built a GPU-backed retrieval system + LLM chatbot using PyTorch, Hugging Face Transformers, and FAISS-GPU to enable semantic search over domain-specific automotive documents, deployed via FastAPI on AWS EKS.
– Maintained 95% of inferences under 150ms using CUDA FP16 optimizations with autoscaling and CloudWatch monitoring.
– Fine-tuned GPT-J-6B using Hugging Face Transformers and DeepSpeed, improving domain-specific response quality through supervised fine-tuning.
– Improved LLM training workflows using Ray and DeepSpeed ZeRO-3, enabling distributed multi-GPU training and reliable checkpointing on Amazon S3.
– Containerized and orchestrated ML services using Docker and Kubernetes with CI/CD pipelines (AWS ECR), increasing GPU throughput by 18% through batch size optimization.`,
    keywords: ['internship', 'mrar', 'rag', 'chatbot', 'gpt-j', 'faiss', 'pytorch', 'deepspeed', 'ray', 'aws', 'docker', 'kubernetes', 'fastapi', 'cuda', 'fp16', 'eks', 'ecr'],
    url: '#experience'
  },
  {
    id: 'project-diarization',
    section: 'Projects',
    title: 'Multi-Agent Speaker Diarization Pipeline',
    content: `Multi-Agent Speaker Diarization Pipeline — 10-agent LangGraph pipeline for archival TV speaker diarization. 91.1% accuracy. Built under Prof. James Shanahan at IU Media School (RT Project 2101). Stack: Whisper large-v3, pyannote 3.x, Demucs, LoRA-fine-tuned Llama 3.2 11B, and vLLM. Deployed on IU Big Red 200 HPC via SLURM. Includes novel IHR module and LLM identity resolution agent. Targeting INTERSPEECH 2027.`,
    keywords: ['diarization', 'speaker', 'letterman', 'langgraph', 'whisper', 'pyannote', 'lora', 'vllm', 'research', 'project'],
    url: '#projects'
  },
  {
    id: 'project-job-scheduler',
    section: 'Projects',
    title: 'Cloud Job Scheduler',
    content: `Cloud Job Scheduler. GitHub: https://github.com/kishuxz/Job-Scheduler
Production AWS distributed job scheduler with idempotent submission, lease-based worker locking, FIFO priority queues, EventBridge cron, CloudWatch dashboards, and TTL auto-cleanup. Built on AWS SAM with API Gateway, Lambda, DynamoDB, and SQS. Estimated baseline cost is about $15/month at 100K jobs.`,
    keywords: ['job scheduler', 'cloud job scheduler', 'distributed', 'aws', 'lambda', 'sqs', 'dynamodb', 'serverless', 'scheduler', 'eventbridge', 'fifo', 'cloudwatch'],
    url: '#projects'
  },
  {
    id: 'project-stackply-trusthire',
    section: 'Projects',
    title: 'Stackply with TrustHire AI MVP',
    content: `Stackply is an AI-native hiring platform Kishore is co-founding. It evaluates candidates on real GitHub work, not resume keywords. The hackathon MVP shipped as TrustHire AI and is public on GitHub: https://github.com/kishuxz/trusthire-ai
TrustHire AI uses FastAPI, LangGraph, Qdrant, Sentence Transformers, and Next.js with explainable skill scoring. Kishore is now scaling it as Stackply with Groq + Gemini routing on Supabase, Render, and Vercel. Vibe-coding detection is the technical moat. Applying to Techstars Anywhere in June 2026.`,
    keywords: ['stackply', 'trusthire', 'trusthire ai', 'hiring', 'langgraph', 'fastapi', 'qdrant', 'next.js', 'startup', 'github evidence'],
    url: '#projects'
  },
  {
    id: 'project-parameter-golf',
    section: 'Projects',
    title: 'OpenAI Parameter Golf',
    content: `OpenAI Parameter Golf. GitHub: https://github.com/kishuxz/parameter-golf
Submission to OpenAI's Parameter Golf challenge minimizing bits-per-byte at fixed compute (~16M params, int8). Best result: 1.32 bpb in a 10-minute H100 run. Approach: non-uniform FFN widths + StarReLU. Local MLX pipeline on Apple Silicon, deployed to RunPod. Confirmed dead ends include depth recurrence and MoE due to quantization error amplification.`,
    keywords: ['parameter golf', 'openai', 'pytorch', 'mlx', 'cuda', 'quantization', 'h100', 'runpod', 'competition'],
    url: '#projects'
  },
  {
    id: 'project-networkmap',
    section: 'Projects',
    title: 'NetworkMap – Event Network Visualization Platform',
    content: `NetworkMap / info_viz. GitHub: https://github.com/kishuxz/info_viz
Full-stack event network visualization platform using React, Node.js, Express, and MongoDB. Includes JWT auth with token blacklisting, form builder with country/state/city cascading dropdowns, up to 5 connections per participant, Recharts analytics, and CSV export for Gephi/Kumu.`,
    keywords: ['networkmap', 'info_viz', 'network', 'graph', 'visualization', 'react', 'mongodb', 'fullstack', 'analytics', 'node', 'express', 'gephi', 'kumu'],
    url: '#projects'
  },
  {
    id: 'project-covid',
    section: 'Projects',
    title: 'COVID-19 Lung CT Scan Detection',
    content: `COVID-19 Lung CT Scan Detection using Deep Learning. GitHub: https://github.com/kishuxz/COVID-CT-DL-Models
Deep learning for COVID detection on 19,685 CT scans. Custom 4-layer CNN achieved 81% test accuracy, ResNet50 transfer learning achieved 83%, and a GAN supported synthetic augmentation. Includes a Streamlit web app.`,
    keywords: ['covid', 'ct scan', 'cnn', 'deep learning', 'resnet50', 'medical imaging', 'classification', 'gan', 'streamlit', 'transfer learning'],
    url: '#projects'
  },
  {
    id: 'project-election',
    section: 'Projects',
    title: 'Election Forecast & Market Impact',
    content: `Election Forecast & Market Impact. GitHub: https://github.com/kishuxz/election-forecast-market-impact
Social media mining course project at IU analyzing Reddit (r/India, r/IndiaInvestments), YouTube transcripts, and NIFTY 50 market movement during the 2024 Indian elections. Uses VADER, TextBlob, PRAW, yfinance, and Pandas.`,
    keywords: ['election', 'forecast', 'market', 'sentiment', 'reddit', 'youtube', 'nifty', 'vader', 'textblob', 'praw', 'yfinance'],
    url: '#projects'
  },
  {
    id: 'project-h1b',
    section: 'Projects',
    title: 'H1B Immigration Data Visualization',
    content: `H1B Immigration Data Visualization. GitHub: https://github.com/kishuxz/h1b-data-analysis
Data visualization course project at IU using 2.8 GB of FY2020-FY2024 LCA disclosure data. Covers geographic, demographic, and temporal trend analysis with Python, Pandas, Matplotlib, Seaborn, Plotly, and Jupyter.`,
    keywords: ['h1b', 'immigration', 'visualization', 'lca', 'fy2020', 'fy2024', 'pandas', 'matplotlib', 'seaborn', 'plotly', 'jupyter'],
    url: '#projects'
  },
  {
    id: 'project-truthlens',
    section: 'Projects',
    title: 'TruthLens — Bedrock-Powered Content Reliability Scorer',
    content: `TruthLens. GitHub: https://github.com/kishuxz/aws-hackathon-truthlens
Reliability scoring system for social media posts using Amazon Bedrock Nova Micro. Auditable policy-based scoring with tier weights, evidence floors, and a deterministic local scorer for development. Outputs JSON scorecards per post with a transparent evaluation ladder.`,
    keywords: ['truthlens', 'reliability', 'bedrock', 'aws', 'hackathon', 'llm', 'project', 'nova micro', 'scoring'],
    url: '#projects'
  },
  {
    id: 'certifications',
    section: 'Certifications',
    title: 'AWS Certifications',
    content: `Kishore holds two current AWS certifications:
1. AWS Certified Machine Learning Engineer – Associate (valid November 2025 – November 2028)
2. AWS Certified Developer – Associate (valid January 2026 – January 2029)`,
    keywords: ['certifications', 'aws', 'certified', 'machine learning', 'developer', 'associate', 'certificate'],
    url: '#education'
  },
  {
    id: 'contact',
    section: 'Contact',
    title: 'Contact & Availability',
    content: `Contact Kishore Kumar Ramkumar:
– Email: kishoresk0123@gmail.com
– Phone: +1 (812)-340-2543
– GitHub: https://github.com/kishuxz
– LinkedIn: https://www.linkedin.com/in/kishore-kumar-ramkumar-425744279/
– LeetCode: https://leetcode.com/u/Kishore_0123/
– Location: Bloomington, Indiana (currently)
– Availability: Open to full-time opportunities in ML Engineering, Software Engineering, AI/LLM Engineering, Agentic Engineering, and Data Engineering starting May 2026.`,
    keywords: ['contact', 'email', 'phone', 'linkedin', 'github', 'reach', 'hire', 'available', 'opportunity', 'job', 'work', 'connect', 'leetcode', 'location', 'remote', 'relocate'],
    url: '#contact'
  },
  {
    id: 'work-authorization',
    section: 'Work Authorization',
    title: 'Work Authorization, Sponsorship, Start Date, and Location',
    content: `Work authorization:
– Current status: ${workAuthorization.currentStatus}
– OPT details: ${workAuthorization.optDetails}
– Sponsorship: ${workAuthorization.sponsorship}
– Start date: ${workAuthorization.startDate}
– Location: ${workAuthorization.location}
– Sponsorship flexibility: ${workAuthorization.sponsorshipFlexibility}
– Citizenship: ${workAuthorization.citizenship}`,
    keywords: ['visa', 'sponsorship', 'h-1b', 'h1b', 'opt', 'stem opt', 'work authorization', 'work permit', 'eligible to work', 'citizen', 'green card', 'immigration', 'start date', 'available to start', 'f-1', 'f1', 'ead', 'location', 'relocate', 'remote', 'hybrid', 'onsite'],
    url: '#contact'
  },
  {
    id: 'research-current',
    section: 'Research',
    title: 'Current Research Work',
    content: `Kishore is currently doing research at Indiana University's Media School (Jan 2026 – Present) on multimodal speaker attribution in archival broadcast television. The work involves:
– A 10-agent LangGraph pipeline combining Whisper large-v3, pyannote 3.x, Demucs, TransNetV2, RetinaFace+LightASD, and LoRA-fine-tuned Llama 3.2 11B.
– Achieving 91.1% speaker resolution accuracy across the corpus, with 4 episodes at 100%.
– Running production inference on NVIDIA A100 GPU clusters via SLURM on Indiana University's Big Red 200 HPC system.
– Processing archival Late Show with David Letterman footage from 1982–2015 and generating Final Draft XML transcripts.
This research supports downstream NLP analysis and large-scale media content studies.`,
    keywords: ['research', 'current', 'ongoing', 'now', 'multimodal', 'speaker', 'attribution', 'broadcast', 'television', 'langgraph', 'llama', 'hpc', 'carbonate', 'bigred'],
    url: '#experience'
  }
];

/**
 * Simple keyword-based scoring for chunk retrieval.
 * Returns score 0–∞ based on keyword matches in query.
 */
export function scoreChunk(chunk, query) {
  const q = query.toLowerCase();
  const queryWords = q.split(/\s+/).filter(w => w.length > 2);
  let score = 0;

  const fullText = (chunk.content + ' ' + chunk.title).toLowerCase();

  for (const word of queryWords) {
    // Keyword match (highest weight)
    if (chunk.keywords.some(k => {
      const kl = k.toLowerCase();
      return kl.includes(word) || word.includes(kl);
    })) {
      score += 4;
    }
    // Title match
    if (chunk.title.toLowerCase().includes(word)) score += 3;
    // Content match
    if (fullText.includes(word)) score += 1;
  }

  // Exact phrase bonus
  if (fullText.includes(q)) score += 5;

  return score;
}

/**
 * Retrieve the top-k most relevant chunks for a given query.
 */
export function retrieveRelevantChunks(query, topK = 4) {
  const scored = chunks
    .map(chunk => ({ ...chunk, score: scoreChunk(chunk, query) }))
    .sort((a, b) => b.score - a.score);

  // Always include intro if it scored > 0
  const top = scored.slice(0, topK);
  const hasIntro = top.some(c => c.id === 'intro');
  const introChunk = scored.find(c => c.id === 'intro');
  if (!hasIntro && introChunk && introChunk.score > 0) {
    top[top.length - 1] = introChunk;
  }

  return top;
}
