// lib/content-config.js
// CONFIGURATION FILE - Update this file with your personal information

export const personalInfo = {
    name: "Kishore Kumar",
    email: "kishore.kumar@example.com",
    tagline: "Building production systems across Frontend, Full-Stack, Data, and ML/LLM domains",
    shortBio: "Full-Stack Developer · Data Engineer · ML/LLM Systems Engineer",
    availability: "Available for new opportunities",
    social: {
        github: "https://github.com/kishuxz",
        linkedin: "https://linkedin.com/in/yourusername", // Placeholder from resume
        leetcode: "https://leetcode.com/yourusername", // Placeholder
        twitter: null,
        portfolio: "https://yourportfolio.com"
    },
    stats: {
        experience: "3+",
        projects: "15+",
        companies: "8+",
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
    resumePdfUrl: "/resume.pdf",
};

export const experiences = [
    {
        company: 'TechFlow Solutions',
        role: 'Senior Full-Stack Engineer',
        location: 'San Francisco, CA (Remote)',
        period: '2023 - Present',
        description: 'Leading the development of enterprise-grade AI applications and distributed systems.',
        achievements: [
            'Architected a RAG-based knowledge system serving 50k+ daily users with 99.9% uptime',
            'Reduced AWS infrastructure costs by 40% through container orchestration optimization',
            'Mentored 4 junior developers and established CI/CD best practices'
        ],
        tech: ['Next.js', 'Python', 'AWS', 'LangChain', 'PostgreSQL']
    },
    {
        company: 'DataStream Corp',
        role: 'Data Engineer',
        location: 'New York, NY',
        period: '2021 - 2023',
        description: 'Built scalable ETL pipelines and data warehouses for real-time analytics.',
        achievements: [
            'Designed distributed data pipelines processing 5TB+ of data daily using Apache Airflow',
            'Implemented real-time fraud detection capabilities reducing false positives by 25%',
            'Migrated legacy on-premise data infrastructure to Azure cloud'
        ],
        tech: ['Apache Spark', 'Airflow', 'Kafka', 'Snowflake', 'Python']
    },
    {
        company: 'Innovate Digital',
        role: 'Software Engineer',
        location: 'Austin, TX',
        period: '2019 - 2021',
        description: 'Developed full-stack web applications and microservices.',
        achievements: [
            'Built and maintained high-performance React frontends for fintech clients',
            'Optimized database queries improving API response times by 300%',
            'Collaborated with design teams to implement pixel-perfect UI components'
        ],
        tech: ['React', 'Node.js', 'MongoDB', 'Docker', 'Redis']
    }
];

export const skillCategories = [
    {
        name: 'Cloud & Infrastructure',
        color: 'border-stone-400',
        skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CircleCI']
    },
    {
        name: 'Data Engineering',
        color: 'border-stone-300',
        skills: ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Data Modeling']
    },
    {
        name: 'Programming Languages',
        color: 'border-stone-500',
        skills: ['Python', 'JavaScript', 'Java', 'C++', 'TypeScript', 'R']
    },
    {
        name: 'ML & LLMs',
        color: 'border-stone-400',
        skills: ['Scikit-learn', 'TensorFlow', 'LangChain', 'Prompt Engineering', 'ReAct', 'Batch Processing']
    },
    {
        name: 'Big Data & ETL',
        color: 'border-stone-500',
        skills: ['Apache Airflow', 'PySpark', 'Spark', 'Hadoop', 'Batch Processing']
    },
    {
        name: 'Visualization & Tools',
        color: 'border-stone-300',
        skills: ['Power BI', 'Tableau', 'Git', 'Linux', 'VS Code', 'System Design']
    }
];

export const projects = [
    {
        title: 'LLM-Powered RAG Chatbot',
        slug: 'rag-chatbot',
        categories: ['Featured', 'Machine Learning', 'Full-Stack'],
        accomplished: 'Built production-ready RAG system',
        measured: '92% response accuracy, zero hallucinations',
        method: 'Embedding domain content into Supabase pgvector, retrieving via semantic search, and generating cited answers with LangChain.',
        techStack: ['LangChain', 'Next.js', 'Supabase', 'Hugging Face'],
        github: 'https://github.com/yourusername/project1',
        featured: true
    },
    {
        title: 'Distributed Data Pipeline',
        slug: 'data-pipeline',
        categories: ['Featured', 'Data Engineering', 'Backend'],
        accomplished: 'Scalable ETL orchestration system',
        measured: 'Processing 1M+ records/day with 99.9% reliability',
        method: 'Orchestrating multi-stage transformations with Apache Airflow, processing in parallel workers, and validating data quality.',
        techStack: ['Python', 'Apache Airflow', 'AWS', 'PostgreSQL'],
        github: 'https://github.com/yourusername/project2',
        featured: true
    },
    {
        title: 'Real-time ML Predictions',
        slug: 'ml-pipeline',
        categories: ['Featured', 'Machine Learning', 'DevOps'],
        accomplished: 'End-to-end inference infrastructure',
        measured: '50ms average latency at 10k requests/day',
        method: 'Serving TensorFlow models via FastAPI, containerized with Docker, and auto-scaled on Kubernetes for high availability.',
        techStack: ['TensorFlow', 'FastAPI', 'Docker', 'Kubernetes', 'AWS'],
        github: 'https://github.com/yourusername/ml-deployment',
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
