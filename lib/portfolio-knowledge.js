// lib/portfolio-knowledge.js
// Structured knowledge base for the portfolio chatbot
// Sourced from Kishore Kumar Ramkumar's resume and portfolio

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
    id: 'exp-iviewsense',
    section: 'Experience',
    title: 'Data Analyst Intern – IVIEWSENSE Private Limited',
    content: `Data Analyst Intern at IVIEWSENSE Private Limited (Jan 2022 – Dec 2022, Chennai, India).
– Collaborated with stakeholders to define KPIs and built interactive Power BI dashboards using SQL and exploratory data analysis.
– Implemented scheduled refresh and validation checks, reducing dashboard refresh time from 42 to 33 minutes (~21% improvement).
– Maintained 98% on-time data updates, improving reliability of reporting workflows.`,
    keywords: ['data analyst', 'iviewsense', 'power bi', 'sql', 'dashboard', 'kpi', 'eda', 'reporting', 'business intelligence', 'bi'],
    url: '#experience'
  },
  {
    id: 'project-truthlens',
    section: 'Projects',
    title: 'TruthLens – AI Reliability Platform',
    content: `TruthLens is an AI Reliability Platform built for an AWS Hackathon. GitHub: https://github.com/kishuxz/aws-hackathon-truthlens
– Led a team to architect a Python-based multimodal reliability agent on AWS Bedrock, producing auditable 0–100 reliability scores with labels, citations, independence checks, and contradiction detection for generative AI outputs.
– Built a React web app and serverless API using AWS Lambda Function URLs, S3, and IAM least-privilege policies, with Pydantic validation, CI/CD pipelines, and monitoring to meet latency and SLO targets.
– Delivered an end-to-end production pipeline with SageMaker OCR for quote card extraction and policy-driven scoring, with planned Bedrock AgentCore orchestration.
Tech stack: Python, AWS Bedrock, Lambda, S3, SageMaker, React, LangChain, LLMs, Pydantic.`,
    keywords: ['truthlens', 'reliability', 'bedrock', 'aws', 'hackathon', 'rag', 'llm', 'project', 'react', 'lambda', 'sagemaker', 'scoring'],
    url: '#projects'
  },
  {
    id: 'project-job-scheduler',
    section: 'Projects',
    title: 'Distributed Job Scheduler (AWS)',
    content: `Distributed Job Scheduler on AWS. GitHub: https://github.com/kishuxz/Job-Scheduler
– Architected a serverless distributed job scheduling system using AWS Lambda, SQS, DynamoDB, and ECS to orchestrate scalable asynchronous batch workloads.
– Implemented idempotent job submission and fault-tolerant execution using SQS queues and DynamoDB state transitions, eliminating duplicate processing in distributed pipelines.
– Developed monitoring and observability using AWS CloudWatch logs and metrics for debugging, reliability tracking, and operational visibility.
Tech stack: AWS Lambda, SQS, DynamoDB, ECS, CloudWatch, Python, Serverless Architecture.`,
    keywords: ['job scheduler', 'distributed', 'aws', 'lambda', 'sqs', 'dynamodb', 'serverless', 'scheduler', 'ecs', 'batch', 'fault tolerant'],
    url: '#projects'
  },
  {
    id: 'project-networkmap',
    section: 'Projects',
    title: 'NetworkMap – Network Analytics Platform',
    content: `NetworkMap is an open-source Network Analytics Platform. GitHub: https://github.com/kishuxz/info_viz
– Built a full-stack analytics platform using React, Node.js, Express, and MongoDB to collect and visualize 1,000+ participant connections.
– Designed secure REST APIs with JWT authentication and validation, enabling scalable ingestion and storage of participant relationship data.
– Implemented network graph generation pipelines converting form responses into node-edge datasets, enabling export for Gephi and other network analysis tools.
Tech stack: React, Node.js, Express, MongoDB, D3.js, JWT authentication, REST APIs, JavaScript.`,
    keywords: ['networkmap', 'network', 'graph', 'visualization', 'd3', 'react', 'mongodb', 'fullstack', 'analytics', 'node', 'express', 'gephi'],
    url: '#projects'
  },
  {
    id: 'project-covid',
    section: 'Projects',
    title: 'COVID-19 Lung CT Scan Detection',
    content: `COVID-19 Lung CT Scan Detection using Deep Learning. GitHub: https://github.com/kishuxz/COVID-CT-DL-Models
– Trained custom CNN and ResNet50 transfer-learning models on 19,685 CT scans (70/15/15 train/val/test split), achieving 83% test accuracy for COVID-19 classification.
– Improved model generalization using OpenCV preprocessing and Keras-based data augmentation; evaluated with confusion matrices, precision, recall, and F1-score.
– Built a GAN-based augmentation pipeline and deployed a Dockerized Streamlit inference app for real-time CT scan classification with confidence-score visualization.
Tech stack: Python, PyTorch, TensorFlow, CNNs, ResNet50, OpenCV, Keras, Docker, Streamlit, GANs.`,
    keywords: ['covid', 'ct scan', 'cnn', 'deep learning', 'resnet', 'medical imaging', 'classification', 'gan', 'streamlit', 'transfer learning'],
    url: '#projects'
  },
  {
    id: 'project-energy',
    section: 'Projects',
    title: 'Cloud-Based Smart Energy Management System',
    content: `Cloud-Based Smart Energy Management System. GitHub: https://github.com/kishuxz/smart-energy-management-system
– Built a Kafka and Spark pipeline processing 10,000 time-series energy records, enabling EDA across hourly, daily, and rolling windows.
– Engineered time-based features and trained regression and decision tree models in Spark MLlib, achieving 12% MAE/RMSE improvement over naive baselines for demand forecasting.
– Evaluated models and delivered Tableau dashboards for usage trends to support planning and optimization decisions.
Tech stack: Python, Apache Kafka, Apache Spark, PySpark, Spark MLlib, AWS, Tableau.`,
    keywords: ['energy', 'kafka', 'spark', 'pyspark', 'time series', 'forecasting', 'tableau', 'smart energy', 'mllib', 'regression'],
    url: '#projects'
  },
  {
    id: 'project-multiagent',
    section: 'Projects',
    title: 'Multi-Agent LLM Relocator',
    content: `Multi-Agent LLM Relocator. GitHub: https://github.com/Ramcharxn/MultiAgent-LLM-Relocator
– Implemented a multi-agent LLM system to simulate coordination and task-based decision-making across autonomous agents.
– Designed agent roles and message-passing workflows, and implemented orchestration logic for multi-step reasoning.
Tech stack: Python, LLMs, LangChain, Prompt Engineering, Multi-Agent Systems.`,
    keywords: ['multiagent', 'multi-agent', 'llm', 'relocator', 'langchain', 'agents', 'orchestration'],
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
– Email: kramkum@iu.edu
– Phone: +1 (812)-340-2543
– GitHub: https://github.com/kishuxz
– LinkedIn: https://www.linkedin.com/in/kishore-kumar-ramkumar-425744279/
– LeetCode: https://leetcode.com/u/Kishore_0123/
– Location: Bloomington, Indiana (currently)
– Availability: Open to full-time opportunities in ML Engineering, Software Engineering, AI/LLM Engineering, Agentic Engineering, and Data Engineering starting May 2026.`,
    keywords: ['contact', 'email', 'phone', 'linkedin', 'github', 'reach', 'hire', 'available', 'opportunity', 'job', 'work', 'connect', 'leetcode'],
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
