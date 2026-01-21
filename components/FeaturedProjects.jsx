'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiArrowRight, FiGithub, FiExternalLink } from 'react-icons/fi';

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
            title: 'Stream Processing Pipeline',
            slug: 'stream-processing',
            categories: ['Data Engineer'],
            accomplished: 'Built real-time streaming data pipeline',
            measured: '500K events/second processed, 99.99% uptime',
            method: 'Implementing Apache Kafka for message queuing, Apache Flink for stream processing, and Kubernetes for orchestration',
            techStack: ['Apache Kafka', 'Apache Flink', 'PostgreSQL', 'Docker', 'Kubernetes'],
            github: 'https://github.com/yourusername/stream-pipeline'
        },
        {
            title: 'Data Quality Framework',
            slug: 'data-quality',
            categories: ['Data Engineer'],
            accomplished: 'Created automated data quality system',
            measured: '100+ validation checks, zero data loss incidents',
            method: 'Using Great Expectations for validation rules, Airflow for scheduling, and Grafana for monitoring dashboards',
            techStack: ['Python', 'Great Expectations', 'Airflow', 'PostgreSQL', 'Grafana'],
            github: 'https://github.com/yourusername/data-quality'
        },

        // SOFTWARE ENGINEER
        {
            title: 'Microservices Platform',
            slug: 'microservices',
            categories: ['Software Engineer', 'AWS'],
            accomplished: 'Built cloud-native microservices architecture',
            measured: '1M+ concurrent users supported, 99.9% uptime',
            method: 'Deploying containerized services with Docker, orchestrating with Kubernetes on AWS EKS, and PostgreSQL databases',
            techStack: ['Node.js', 'Docker', 'Kubernetes', 'AWS EKS', 'PostgreSQL'],
            github: 'https://github.com/yourusername/microservices'
        },
        {
            title: 'API Gateway System',
            slug: 'api-gateway',
            categories: ['Software Engineer'],
            accomplished: 'Developed high-performance API gateway',
            measured: '50K requests/second, sub-10ms latency',
            method: 'Building with Go for performance, Redis for caching, Kong for gateway features, and Prometheus for monitoring',
            techStack: ['Go', 'Redis', 'Kong', 'PostgreSQL', 'Prometheus'],
            github: 'https://github.com/yourusername/api-gateway'
        },
        {
            title: 'E-commerce Platform',
            slug: 'ecommerce',
            categories: ['Software Engineer'],
            accomplished: 'Created full-stack e-commerce solution',
            measured: '10K products, $1M+ in transactions processed',
            method: 'Using Next.js for frontend, Node.js backend, Stripe for payments, and MongoDB for product catalog',
            techStack: ['React', 'Next.js', 'Node.js', 'Stripe', 'MongoDB'],
            github: 'https://github.com/yourusername/ecommerce',
            live: 'https://shop-demo.com'
        },

        // AWS
        {
            title: 'Multi-Region DR Setup',
            slug: 'disaster-recovery',
            categories: ['AWS'],
            accomplished: 'Implemented multi-region disaster recovery',
            measured: 'RPO: 15 minutes, RTO: 30 minutes',
            method: 'Configuring AWS Route53 for failover, CloudFront for CDN, RDS replication, and automated S3 backups',
            techStack: ['AWS Route53', 'CloudFront', 'RDS', 'S3 Replication', 'Lambda'],
            github: 'https://github.com/yourusername/aws-dr'
        },

        // HACKATHONS
        {
            title: 'AI Health Assistant',
            slug: 'health-assistant',
            categories: ['Hackathons', 'Machine Learning'],
            accomplished: 'Won 1st place at TechCrunch Disrupt',
            measured: 'Built in 24 hours, 95% symptom accuracy',
            method: 'Rapid prototyping with OpenAI API, React frontend, Firebase backend, and TensorFlow for medical ML',
            techStack: ['Python', 'OpenAI', 'React', 'Firebase', 'TensorFlow'],
            github: 'https://github.com/yourusername/health-assistant',
            live: 'https://health-assistant-demo.com'
        },
        {
            title: 'Climate Data Visualizer',
            slug: 'climate-viz',
            categories: ['Hackathons', 'Data Analyst'],
            accomplished: 'Won Global Winner at NASA Space Apps',
            measured: 'Completed in 48 hours, visualizing 50+ years of climate data',
            method: 'Integrating NASA APIs, creating interactive D3.js visualizations with React, and deploying on Vercel',
            techStack: ['React', 'D3.js', 'Python', 'NASA APIs', 'Vercel'],
            github: 'https://github.com/yourusername/climate-viz',
            live: 'https://climate-viz-demo.com'
        },
        {
            title: 'Social Impact Platform',
            slug: 'social-impact',
            categories: ['Hackathons', 'Software Engineer'],
            accomplished: 'Won Best Social Impact Award',
            measured: 'Built in 36 hours, connecting 500+ volunteers',
            method: 'Developing Next.js platform with Node.js backend, Auth0 authentication, and PostgreSQL database',
            techStack: ['Next.js', 'Node.js', 'PostgreSQL', 'Auth0', 'Vercel'],
            github: 'https://github.com/yourusername/social-impact',
            live: 'https://volunteer-connect.com'
        }
    ];

    // Filter projects based on active category
    const filteredProjects = activeCategory === 'Featured'
        ? projects.filter(p => p.featured)
        : projects.filter(p => p.categories.includes(activeCategory));

    return (
        <section ref={sectionRef} className="section bg-[#0A0A0A] text-white relative overflow-hidden" id="projects">
            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="mb-12 md:mb-16 scroll-reveal-left">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs font-mono text-[#9CA3AF] tracking-wider">02 / 05</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-[#2A2A2A] to-transparent"></div>
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-4 text-white"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        Projects
                    </h2>
                    <p className="text-lg text-[#9CA3AF] max-w-2xl">
                        Technical projects across ML, data engineering, and full-stack development
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="mb-12 overflow-x-auto scrollbar-hide scroll-reveal">
                    <div className="flex gap-3 min-w-max pb-2">
                        {categories.map((category) => {
                            const count = category === 'Featured'
                                ? projects.filter(p => p.featured).length
                                : projects.filter(p => p.categories.includes(category)).length;

                            return (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300
                    ${activeCategory === category
                                            ? 'bg-[#D4C5B9] text-[#0A0A0A] scale-105 shadow-lg'
                                            : 'bg-transparent border-2 border-[#2A2A2A] text-[#9CA3AF] hover:border-[#D4C5B9] hover:text-white'
                                        }`}
                                >
                                    {category}
                                    <span className={`ml-2 text-xs ${activeCategory === category ? 'opacity-70' : 'opacity-50'}`}>
                                        ({count})
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Projects Grid - 2x2 Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {(activeCategory === 'Featured' ? filteredProjects : filteredProjects.slice(0, 3)).map((project, index) => (
                        <div
                            key={project.slug}
                            className="group relative overflow-hidden rounded-2xl border-2 border-[#2A2A2A]
                hover:border-[#D4C5B9] transition-all duration-500
                bg-[#1A1A1A] hover:bg-[#1F1F1F]
                hover:shadow-2xl hover:-translate-y-2
                animate-fadeIn"
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animationFillMode: 'backwards'
                            }}
                        >
                            {/* Content */}
                            <div className="p-8 md:p-10 flex flex-col h-full">
                                {/* Header: Title + Links */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-light mb-3 text-white group-hover:translate-x-2 transition-all duration-500"
                                            style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                            {project.title}
                                        </h3>

                                        {/* Category badges */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.categories.slice(0, 2).map((cat, i) => (
                                                <span key={i} className="px-3 py-1 rounded-md text-xs font-medium border border-[#2A2A2A] 
                          text-[#9CA3AF] group-hover:border-[#D4C5B9] group-hover:text-[#D4C5B9]
                          transition-all duration-300">
                                                    {cat}
                                                </span>
                                            ))}
                                            {project.featured && (
                                                <span className="px-3 py-1 rounded-md text-xs font-medium bg-[#D4C5B9] text-[#0A0A0A]">
                                                    ★ Featured
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3 ml-4">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg border border-[#2A2A2A] text-[#9CA3AF] hover:border-[#D4C5B9] hover:text-white transition-all"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <FiGithub className="text-xl" />
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-lg border border-[#2A2A2A] text-[#9CA3AF] hover:border-[#D4C5B9] hover:text-white transition-all"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <FiExternalLink className="text-xl" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* XYZ Formula */}
                                <div className="mb-6 space-y-3 flex-grow">
                                    <div className="flex items-start gap-3">
                                        <span className="text-[#D4C5B9] text-sm font-medium mt-1 flex-shrink-0">Accomplished:</span>
                                        <p className="text-[#F5F1ED] text-sm leading-relaxed">{project.accomplished}</p>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <span className="text-[#D4C5B9] text-sm font-medium mt-1 flex-shrink-0">Measured by:</span>
                                        <p className="text-[#9CA3AF] text-sm leading-relaxed">{project.measured}</p>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <span className="text-[#D4C5B9] text-sm font-medium mt-1 flex-shrink-0">By doing:</span>
                                        <p className="text-[#9CA3AF] text-sm leading-relaxed">{project.method}</p>
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div className="mb-4">
                                    <h4 className="text-xs font-medium text-[#6B6B6B] uppercase tracking-wider mb-3">Tech Stack</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="text-xs px-3 py-1.5 rounded-lg bg-[#0A0A0A] text-[#9CA3AF]
                        border border-[#2A2A2A] group-hover:border-[#D4C5B9] transition-colors">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Animated accent line */}
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#D4C5B9] to-[#E8DFD8]
                group-hover:w-full transition-all duration-700 ease-out"></div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-[#6B6B6B] text-lg">No projects found in this category yet.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
