---
title: "Kishore Kumar Ramkumar – Resume"
type: "resume"
last_updated: "2026-03-23"
---

# Kishore Kumar Ramkumar

**AI/ML Engineer · Data Engineer · Full-Stack Developer**

📧 kramkum@iu.edu | 📞 +1 (812)-340-2543
🔗 [GitHub](https://github.com/kishuxz) | [LinkedIn](https://www.linkedin.com/in/kishore-kumar-ramkumar-425744279/) | [LeetCode](https://leetcode.com/u/Kishore_0123/)

---

## Professional Summary

Software Engineer focused on production systems across data pipelines, ML training, and multi-agent LLM stacks. Research background spans multimodal NLP/CV systems, climate data engineering on HPC, and GPU-optimized LLM inference. Holds two active AWS certifications and is pursuing an MS in Data Science at Indiana University (GPA 3.5, graduating May 2026). Open to full-time opportunities in ML Engineering, Software Engineering, AI/LLM Engineering, Agentic Engineering, and Data Engineering.

---

## Education

**Master of Science in Data Science** — GPA 3.5
Indiana University Bloomington | Aug 2024 – May 2026 | Bloomington, IN
Focus: Machine Learning, Distributed Systems, NLP

**Bachelor of Technology — Computer Science (Specializing in AI & ML)**
Sri Ramachandra Institute of Higher Education and Research | Jul 2021 – Jun 2024 | Chennai, India

---

## Technical Skills

### Programming Languages & Development
Python, Java, SQL, PostgreSQL, MySQL, JavaScript, ReactJS, TypeScript, C++, Git, R

### Machine Learning & AI
PyTorch, Transformers, PEFT (LoRA / QLoRA), vLLM, Whisper, pyannote, Llama, Scikit-learn, Embeddings, LangGraph, LangChain, LangSmith, LlamaIndex, Instructor, Pydantic, Context Engineering, Agent Memory, MCP, DeepSpeed, Ray

### Cloud Architecture & DevOps
AWS (EC2, Lambda, S3, EKS, SQS, DynamoDB, CloudWatch, Bedrock, SageMaker, ECR), Serverless Architecture, Docker, Kubernetes, CI/CD, Linux

### Data Engineering & Big Data
Apache Kafka, Apache Spark, PySpark, Spark MLlib, ETL Pipelines, Parallel Computing, xarray, xESMF, NetCDF, HPC (SLURM), Distributed Computing

### Backend & Systems
REST APIs, Microservices, Distributed Systems, Event-Driven Architecture, HTTP, Message Queues, FastAPI, System Design

### Vector Databases & Retrieval
FAISS (GPU), Embedding Models, Semantic Search, Supabase

### Visualization & Tools
Power BI, Tableau, Matplotlib, Cartopy, D3.js, Git

---

## Experience

### Research Assistant — Multi-Agent LLM Systems
**Indiana University – The Media School (RT Project 2101)** | Jan 2026 – Present | Bloomington, IN

- Built a 10-agent multimodal pipeline orchestrated by LangGraph: Whisper large-v3 + pyannote 3.x + Demucs + TransNetV2 + RetinaFace+LightASD + LoRA-fine-tuned Llama 3.2 11B.
- Achieved 91.1% speaker resolution accuracy across the corpus (4 episodes at 100%) on IU Big Red 200 HPC with vLLM on A100s via SLURM.
- Designed Interrogative Host Rescue (IHR) for short-question recovery and an LLM-based identity resolution agent for character/actor disambiguation.
- Output Final Draft XML for downstream media research; targeting INTERSPEECH 2027, EMNLP 2026, and ACL NLP4DH workshop.

### Data Engineer / Research Assistant
**Indiana University – O'Neill School of Public & Environmental Affairs** | May 2025 – Aug 2025 | Bloomington, IN

- Processed 530+ GB of CMIP6 precipitation data, regridding to a 1°×1° global grid using xarray and xESMF (Python); staged on Slate HPC storage and published versioned NetCDF outputs for cross-model analysis.
- Reduced preprocessing time by 32% on Quartz HPC by distributing tasks with Spark and optimizing I/O throughput.
- Generated 3-, 6-, and 12-month rolling totals and CONUS maps with Cartopy and Matplotlib; added drift tests and data CI for predictive analytics and time-series drought forecasting.

### Machine Learning Associate Engineer Intern
**MRAR Intellect Solutions** | Jan 2024 – Aug 2024 | Mississauga, Canada

- Built a GPU-backed retrieval system + LLM chatbot using GPT-J-6B, FastAPI, and FAISS-GPU enabling semantic search and QA over vehicle documentation; deployed on AWS EKS with autoscaling.
- Maintained 95% of inferences under 150ms using CUDA FP16 optimizations with CloudWatch monitoring.
- Fine-tuned GPT-J-6B using Hugging Face Transformers and DeepSpeed for domain-specific response quality.
- Improved LLM training workflows with Ray and DeepSpeed ZeRO-3, enabling distributed multi-GPU training and reliable S3 checkpointing.
- Containerized ML services with Docker and Kubernetes; implemented CI/CD via AWS ECR, increasing GPU throughput by 18%.

---

## Projects

### TruthLens – AI Reliability Platform
**GitHub:** https://github.com/kishuxz/aws-hackathon-truthlens
AWS Hackathon Project

- Led a team to architect a Python-based multimodal reliability agent on AWS Bedrock producing auditable 0–100 reliability scores with labels, citations, independence checks, and contradiction detection.
- Built a React web app and serverless API using AWS Lambda Function URLs, S3, IAM least-privilege policies, Pydantic validation, CI/CD pipelines, and monitoring.
- Delivered an end-to-end pipeline with SageMaker OCR for quote card extraction and policy-driven scoring.
- Tech: Python, AWS Bedrock, Lambda, S3, SageMaker, React, LangChain, LLMs, Pydantic.

### Distributed Job Scheduler (AWS)
**GitHub:** https://github.com/kishuxz/Job-Scheduler

- Architected a serverless distributed job scheduling system using AWS Lambda, SQS, DynamoDB, and ECS for scalable asynchronous batch workloads.
- Implemented idempotent job submission and fault-tolerant execution via SQS queues and DynamoDB state transitions.
- Built observability with AWS CloudWatch logs and metrics.
- Tech: AWS Lambda, SQS, DynamoDB, ECS, CloudWatch, Python.

### NetworkMap – Network Analytics Platform
**GitHub:** https://github.com/kishuxz/info_viz

- Built a full-stack analytics platform (React, Node.js, Express, MongoDB) to collect and visualize 1,000+ participant connections.
- Designed secure REST APIs with JWT authentication for scalable ingestion of relationship data.
- Implemented network graph generation for Gephi export.
- Tech: React, Node.js, Express, MongoDB, D3.js, JWT, REST APIs.

### COVID-19 Lung CT Scan Detection
**GitHub:** https://github.com/kishuxz/COVID-CT-DL-Models

- Trained custom CNN and ResNet50 transfer-learning models on 19,685 CT scans achieving 83% test accuracy.
- Used OpenCV preprocessing and Keras data augmentation; evaluated with confusion matrices, precision, recall, F1-score.
- Built GAN-based augmentation pipeline and deployed a Dockerized Streamlit app for real-time classification.
- Tech: Python, PyTorch, TensorFlow, CNNs, ResNet50, OpenCV, Docker, Streamlit, GANs.

### Stackply — AI-Native Hiring Platform / TrustHire AI MVP
**GitHub:** https://github.com/kishuxz/trusthire-ai

- Shipped the hackathon MVP as TrustHire AI with FastAPI, LangGraph, Qdrant, Sentence Transformers, and Next.js.
- Built explainable skill scoring across presence, strength, and project evidence; currently scaling as Stackply.
- Tech: LangGraph, FastAPI, Qdrant, Sentence Transformers, Next.js, Supabase, Groq.

### OpenAI Parameter Golf Submission
**GitHub:** https://github.com/kishuxz/parameter-golf

- Optimizing nanoGPT-scale LM training under fixed compute (~16M params, int8 quantization, 1024 vocab).
- Best result: 1.32 bpb in a 10-minute H100 run using RunPod; exploring non-uniform FFN widths + StarReLU.
- Tech: PyTorch, MLX, CUDA, Apple Silicon, RunPod, H100, Quantization.

---

## Certifications

- **AWS Certified Machine Learning Engineer – Associate** | November 2025 – November 2028
- **AWS Certified Developer – Associate** | January 2026 – January 2029

---

## Availability

Actively seeking full-time opportunities in AI/ML Engineering, Data Engineering, and Software Engineering, available from May 2026. Open to roles in the US.
