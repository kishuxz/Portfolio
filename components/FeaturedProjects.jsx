'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiArrowRight, FiGithub, FiExternalLink, FiCode, FiLayers } from 'react-icons/fi';

export default function FeaturedProjects() {
    const sectionRef = useRef(null);
    const [activeCategory, setActiveCategory] = useState('Featured');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const categories = [
        'Featured',
        'Machine Learning',
        'Data Analyst',
        'Data Engineer',
        'Software Engineer',
        'AWS',
        'Hackathons'
    ];

    const projects = [
        // FEATURED PROJECTS
        {
            title: 'LLM RAG Chatbot',
            slug: 'rag-chatbot',
            categories: ['Featured', 'Machine Learning'],
            accomplished: 'Built production-grade RAG chatbot',
            measured: '92% accuracy, 10K+ queries/month, zero hallucinations',
            method: 'Implementing semantic search with LangChain, vector embeddings in Supabase, and GPT-4 with source attribution',
            techStack: ['Python', 'LangChain', 'Supabase', 'OpenAI GPT-4', 'FastAPI'],
            github: 'https://github.com/yourusername/rag-chatbot',
            live: 'https://demo.ragchatbot.com',
            featured: true
        },
        {
            title: 'Real-time ETL Pipeline',
            slug: 'data-pipeline',
            categories: ['Featured', 'Data Engineer', 'AWS'],
            accomplished: 'Designed scalable data pipeline',
            measured: '1M+ records/day processed, 99.9% uptime, 60% cost reduction',
            method: 'Building automated ETL workflows with Apache Airflow, AWS S3 for data lake, and PostgreSQL for analytics',
            techStack: ['Python', 'Apache Airflow', 'AWS S3', 'PostgreSQL', 'Docker'],
            github: 'https://github.com/yourusername/etl-pipeline',
            featured: true
        },
        {
            title: 'Real-time Analytics Dashboard',
            slug: 'analytics-dashboard',
            categories: ['Featured', 'Software Engineer', 'Data Analyst'],
            accomplished: 'Developed real-time analytics platform',
            measured: '10K events/second, 100K concurrent users, 40% faster insights',
            method: 'Using WebSockets for live data streaming, D3.js for interactive visualizations, and MongoDB for time-series data',
            techStack: ['React', 'Node.js', 'WebSockets', 'D3.js', 'MongoDB'],
            github: 'https://github.com/yourusername/analytics-dashboard',
            live: 'https://analytics-demo.com',
            featured: true
        },
        {
            title: 'AWS Serverless Architecture',
            slug: 'serverless',
            categories: ['Featured', 'AWS', 'Software Engineer'],
            accomplished: 'Architected serverless microservices platform',
            measured: '90% cost reduction, auto-scaling to 1M requests/day',
            method: 'Leveraging AWS Lambda, API Gateway, DynamoDB, and CloudFormation for infrastructure as code',
            techStack: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'S3', 'CloudFormation'],
            github: 'https://github.com/yourusername/serverless-platform',
            featured: true
        },

        // MACHINE LEARNING
        {
            title: 'ML Model Deployment Pipeline',
            slug: 'ml-deployment',
            categories: ['Machine Learning', 'AWS'],
            accomplished: 'Created end-to-end ML deployment system',
            measured: '95% model accuracy, 50% faster deployment cycles',
            method: 'Implementing automated training with MLflow, versioning, and deploying to AWS SageMaker with Docker containers',
            techStack: ['Python', 'TensorFlow', 'MLflow', 'AWS SageMaker', 'Docker'],
            github: 'https://github.com/yourusername/ml-deployment'
        },
        {
            title: 'Computer Vision System',
            slug: 'computer-vision',
            categories: ['Machine Learning'],
            accomplished: 'Built real-time object detection system',
            measured: '98% precision, 30 FPS processing speed',
            method: 'Training custom PyTorch models with transfer learning, deploying with FastAPI and Redis caching',
            techStack: ['Python', 'PyTorch', 'OpenCV', 'FastAPI', 'Redis'],
            github: 'https://github.com/yourusername/computer-vision'
        },
        {
            title: 'NLP Sentiment Analyzer',
            slug: 'sentiment-analysis',
            categories: ['Machine Learning'],
            accomplished: 'Developed multi-language sentiment analysis API',
            measured: '91% F1-score across 5 languages, 1000 requests/min',
            method: 'Fine-tuning BERT transformers, creating REST API with FastAPI, and PostgreSQL for analytics',
            techStack: ['Python', 'Transformers', 'BERT', 'FastAPI', 'PostgreSQL'],
            github: 'https://github.com/yourusername/sentiment-analyzer'
        },

        // DATA ANALYST
        {
            title: 'Business Intelligence Dashboard',
            slug: 'bi-dashboard',
            categories: ['Data Analyst'],
            accomplished: 'Created comprehensive BI dashboard',
            measured: '20+ KPIs tracked, 30% faster decision-making',
            method: 'Designing interactive Tableau dashboards with SQL queries, Python for data processing, and scheduled updates',
            techStack: ['Python', 'Tableau', 'SQL', 'Pandas', 'NumPy'],
            github: 'https://github.com/yourusername/bi-dashboard'
        },
        {
            title: 'Customer Behavior Analytics',
            slug: 'customer-analytics',
            categories: ['Data Analyst', 'Machine Learning'],
            accomplished: 'Built predictive customer analytics system',
            measured: '85% churn prediction accuracy, 25% revenue increase',
            method: 'Analyzing 1M+ customer records with Python, building ML models with Scikit-learn, and Power BI visualizations',
            techStack: ['Python', 'Scikit-learn', 'SQL', 'Power BI', 'Excel'],
            github: 'https://github.com/yourusername/customer-analytics'
        },
        {
            title: 'Sales Forecasting Model',
            slug: 'sales-forecasting',
            categories: ['Data Analyst', 'Machine Learning'],
            accomplished: 'Developed time-series forecasting system',
            measured: '88% forecast accuracy, quarterly predictions automated',
            method: 'Using Prophet for time-series analysis, Pandas for data manipulation, and Plotly for interactive charts',
            techStack: ['Python', 'Prophet', 'Pandas', 'Plotly', 'SQL'],
            github: 'https://github.com/yourusername/sales-forecasting'
        },

        // DATA ENGINEER
        {
            title: 'Data Lakehouse Architecture',
            slug: 'data-lakehouse',
            categories: ['Data Engineer', 'AWS'],
            accomplished: 'Designed enterprise data lakehouse',
            measured: '10TB data managed, sub-second query performance',
            method: 'Building on AWS S3 with Delta Lake for ACID transactions, Apache Spark for processing, and AWS Glue for cataloging',
            techStack: ['AWS S3', 'Apache Spark', 'Delta Lake', 'AWS Glue', 'Athena'],
            github: 'https://github.com/yourusername/data-lakehouse'
        },
        {
            title: 'Streaming Data Pipeline',
            slug: 'streaming-pipeline',
            categories: ['Data Engineer'],
            accomplished: 'Implemented real-time data ingestion system',
            measured: '5ms latency, zero data loss, fully fault-tolerant',
            method: 'Using Apache Kafka for event streaming, Spark Streaming for processing, and Cassandra for writing',
            techStack: ['Apache Kafka', 'Spark Streaming', 'Cassandra', 'Java', 'Docker'],
            github: 'https://github.com/yourusername/streaming-pipeline'
        },

        // SOFTWARE ENGINEER
        {
            title: 'E-commerce Microservices',
            slug: 'ecommerce-platform',
            categories: ['Software Engineer', 'AWS'],
            accomplished: 'Built scalable e-commerce backend',
            measured: 'Handles 50K concurrent users, 99.99% availability',
            method: 'Developing microservices with Node.js and Go, deployed on Kubernetes, communicating via gRPC',
            techStack: ['Node.js', 'Go', 'Kubernetes', 'gRPC', 'Redis'],
            github: 'https://github.com/yourusername/ecommerce-platform'
        },
        {
            title: 'Collaborative Code Editor',
            slug: 'code-editor',
            categories: ['Software Engineer'],
            accomplished: 'Developed real-time collaboration tool',
            measured: 'Sub-100ms sync latency, supports 50+ active users per session',
            method: 'Using Operational Transformation algorithms, WebSockets, and React for the frontend interface',
            techStack: ['React', 'TypeScript', 'WebSockets', 'Node.js', 'Express'],
            github: 'https://github.com/yourusername/code-editor'
        },

        // AWS
        {
            title: 'Cloud Infrastructure Automation',
            slug: 'infra-automation',
            categories: ['AWS', 'Data Engineer'],
            accomplished: 'Automated cloud resource provisioning',
            measured: 'Reduced setup time by 95%, eliminated configuration drift',
            method: 'Writing Terraform modules for VPCs, EC2 code, and RDS databases, integrated into GitHub Actions CI/CD',
            techStack: ['Terraform', 'AWS', 'GitHub Actions', 'Bash', 'Linux'],
            github: 'https://github.com/yourusername/infra-automation'
        },

        // HACKATHONS
        {
            title: 'HealthTech AI Assistant',
            slug: 'health-ai',
            categories: ['Hackathons', 'Machine Learning'],
            accomplished: 'Won "Best Healthcare Solution" at Global Hackathon',
            measured: 'Developed working prototype in 48 hours',
            method: 'Building a symptom checker using OpenAI API and streamlined UI for elderly accessibility',
            techStack: ['OpenAI API', 'React', 'Google Cloud', 'Firebase'],
            github: 'https://github.com/yourusername/health-ai'
        },
        {
            title: 'Sustainable Energy Tracker',
            slug: 'energy-tracker',
            categories: ['Hackathons', 'Data Analyst'],
            accomplished: 'Finalist in Clean Energy Challenge',
            measured: 'Visualized energy usage patterns for 500+ households',
            method: 'Analyzing smart meter data to recommend energy-saving habits via a mobile-responsive dashboard',
            techStack: ['D3.js', 'Python', 'Flask', 'SQLite'],
            github: 'https://github.com/yourusername/energy-tracker'
        }
    ];

    const filteredProjects = activeCategory === 'Featured'
        ? projects.filter(p => p.featured)
        : projects.filter(p => p.categories.includes(activeCategory));

    return (
        <section ref={sectionRef} className="section bg-[#FAFAF9] dotted-bg relative overflow-hidden" id="projects">
            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="mb-16 scroll-reveal-left">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs font-mono text-[#9CA3AF] tracking-wider">04 / 05</span>
                        <div className="h-px w-20 bg-gradient-to-r from-[#D4C5B9] to-transparent"></div>
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 text-[#0A0A0A]"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        Featured Projects
                    </h2>

                    {/* Filter Categories */}
                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                  ${activeCategory === cat
                                        ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                                        : 'bg-white text-[#6B6B6B] border-[#E5E0DB] hover:border-[#D4C5B9] hover:text-[#0A0A0A]'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className={`group scroll-reveal ${index % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'}`}
                        >
                            <Link href={project.live || project.github || '#'} target="_blank" className="block h-full">
                                <div className="glass-card bg-white rounded-2xl border-2 border-[#E5E0DB] p-8 h-full
                                    group-hover:border-[#D4C5B9] transition-all duration-500 relative overflow-hidden
                                    hover:-translate-y-2 hover:shadow-2xl flex flex-col">

                                    {/* Abstract background shape */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-[#F5F1ED] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                                    {/* Icon & Links */}
                                    <div className="flex justify-between items-start mb-6 relative z-10">
                                        <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] flex items-center justify-center text-white
                                            shadow-lg group-hover:scale-110 transition-transform duration-500">
                                            <FiLayers className="text-xl" />
                                        </div>
                                        <div className="flex gap-3">
                                            {project.github && (
                                                <span className="p-2 rounded-full bg-[#F5F1ED] text-[#0A0A0A] hover:bg-[#D4C5B9] transition-colors">
                                                    <FiGithub />
                                                </span>
                                            )}
                                            {project.live && (
                                                <span className="p-2 rounded-full bg-[#F5F1ED] text-[#0A0A0A] hover:bg-[#D4C5B9] transition-colors">
                                                    <FiExternalLink />
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 flex-1 flex flex-col">
                                        <div className="mb-4">
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {project.categories.filter(c => c !== 'Featured').slice(0, 2).map((cat, i) => (
                                                    <span key={i} className="text-xs font-mono font-medium text-[#D4C5B9] uppercase tracking-wider">
                                                        {cat}
                                                    </span>
                                                ))}
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-light text-[#0A0A0A] group-hover:text-[#5C4033] transition-colors duration-300"
                                                style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                                {project.title}
                                            </h3>
                                        </div>

                                        <div className="space-y-4 mb-8 flex-1">
                                            <div className="pl-4 border-l-2 border-[#E5E0DB] group-hover:border-[#D4C5B9] transition-colors duration-300">
                                                <p className="text-sm text-[#9CA3AF] font-medium uppercase tracking-wide mb-1">Impact</p>
                                                <p className="text-[#6B6B6B] leading-relaxed">{project.measured}</p>
                                            </div>

                                            <p className="text-[#6B6B6B] text-sm leading-relaxed">
                                                {project.method}
                                            </p>
                                        </div>

                                        {/* Tech Stack Pills */}
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.techStack.map((tech, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1 bg-[#FAFAF9] rounded-md text-xs font-medium text-[#6B6B6B] border border-[#E5E0DB]
                                                        group-hover:border-[#D4C5B9] group-hover:bg-white transition-all duration-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Arrow indicator */}
                                    <div className="absolute bottom-8 right-8 opacity-0 transform translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                        <FiArrowRight className="text-2xl text-[#D4C5B9]" />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="mt-16 text-center scroll-reveal">
                    <Link href="https://github.com/yourusername" target="_blank"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#0A0A0A] text-white rounded-full
                        hover:bg-[#2A2A2A] hover:scale-105 transition-all duration-300 shadow-xl group">
                        <span className="font-medium">View Full Project Archive</span>
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
