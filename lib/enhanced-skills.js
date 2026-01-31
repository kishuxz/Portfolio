// Enhanced skills with project and work experience connections
export const enhancedSkills = [
    {
        name: "React",
        category: "Frontend",
        usedIn: {
            projects: ["RAG Chatbot", "Network Map"],
            companies: ["TechFlow Solutions", "DataStream Corp"]
        }
    },
    {
        name: "Next.js",
        category: "Frontend",
        usedIn: {
            projects: ["RAG Chatbot", "Portfolio"],
            companies: ["TechFlow Solutions"]
        }
    },
    {
        name: "Python",
        category: "Backend & Data",
        usedIn: {
            projects: ["Data Pipeline", "ML Pipeline", "RAG Chatbot"],
            companies: ["TechFlow Solutions", "DataStream Corp", "ML Startup"]
        }
    },
    {
        name: "PostgreSQL",
        category: "Databases",
        usedIn: {
            projects: ["RAG Chatbot", "Data Pipeline"],
            companies: ["TechFlow Solutions", "DataStream Corp"]
        }
    },
    {
        name: "AWS",
        category: "Cloud & Infrastructure",
        usedIn: {
            projects: ["Data Pipeline", "RAG Chatbot"],
            companies: ["TechFlow Solutions", "DataStream Corp"]
        }
    },
    {
        name: "LangChain",
        category: "ML & LLM",
        usedIn: {
            projects: ["RAG Chatbot"],
            companies: ["TechFlow Solutions"]
        }
    },
    {
        name: "Docker",
        category: "DevOps",
        usedIn: {
            projects: ["Data Pipeline", "RAG Chatbot"],
            companies: ["TechFlow Solutions", "DataStream Corp"]
        }
    },
    {
        name: "TypeScript",
        category: "Frontend",
        usedIn: {
            projects: ["Network Map", "Portfolio"],
            companies: ["TechFlow Solutions"]
        }
    },
    {
        name: "Airflow",
        category: "Data Engineering",
        usedIn: {
            projects: ["Data Pipeline"],
            companies: ["DataStream Corp"]
        }
    },
    {
        name: "Supabase",
        category: "Backend",
        usedIn: {
            projects: ["RAG Chatbot"],
            companies: ["TechFlow Solutions"]
        }
    }
];

// Group skills by category for display
export const skillsByCategory = enhancedSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
        acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
}, {});
