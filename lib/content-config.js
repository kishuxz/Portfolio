// lib/content-config.js
// CONFIGURATION FILE - Update this file with your personal information

export const personalInfo = {
    name: "Kishore Kumar",
    email: "kishore.kumar@example.com", // UPDATE THIS
    tagline: "Building production systems across Frontend, Full-Stack, Data, and ML/LLM domains",
    shortBio: "Full-Stack Developer · Data Engineer · ML/LLM Systems Engineer",
    availability: "Available for new opportunities",

    // Social Links - UPDATE THESE
    social: {
        github: "https://github.com/kishuxz",
        linkedin: "https://linkedin.com/in/yourusername", // UPDATE
        leetcode: "https://leetcode.com/yourusername", // UPDATE
        twitter: null, // Optional
        portfolio: "https://yourportfolio.com" // UPDATE after deployment
    },

    // Stats for Hero Section
    stats: {
        experience: "3+", // Years of experience
        projects: "15+", // Projects delivered
        companies: "8+", // Companies worked with
    },

    // Featured in ProofBar
    trustedBy: [
        "React",
        "Next.js",
        "Python",
        "PostgreSQL",
        "AWS",
    ],

    // Education
    education: {
        degree: "MS Data Science",
        school: "Indiana University",
        location: "Bloomington, IN",
        year: "2024",
        focus: "Machine Learning, Distributed Systems, NLP"
    },

    // Resume
    resumePdfUrl: "/resume.pdf", // Add your PDF to public folder
};

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
    ogImage: "/og-image.png", // Create this later
    twitterHandle: "@yourusername", // Optional
};
