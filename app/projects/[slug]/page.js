import Link from 'next/link';
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// This would use getProjectBySlug() in real implementation
// For now, mock data
const projectData = {
    slug: 'rag-chatbot',
    title: 'LLM-Powered RAG Chatbot',
    category: 'ML/LLM Systems',
    impact: '92% accuracy · 100% source attribution',
    tech: ['LangChain', 'Next.js', 'Supabase', 'Hugging Face', 'Python'],
    github: 'https://github.com/yourusername/rag-chatbot',
    demo: 'https://rag-chatbot-demo.vercel.app',
    gradient: 'from-blue-500 to-purple-600',
    content: `# TL;DR

Built a production-ready Retrieval-Augmented Generation (RAG) chatbot...

# Problem & Motivation

Traditional LLMs suffer from hallucination...
`,
};

export default function ProjectPage({ params }) {
    const project = projectData; // In real app: getProjectBySlug(params.slug)

    return (
        <div className="min-h-screen">
            {/* Hero Section - Black Background */}
            <section className="section-hero bg-black text-white">
                <div className="container-custom">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
                    >
                        <FiArrowLeft />
                        Back to Projects
                    </Link>

                    <span className="label-text mb-6 block text-gray-400">
                        {project.category}
                    </span>

                    <h1 className="heading-xxl mb-8">
                        {project.title}
                    </h1>

                    <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl">
                        {project.impact}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                            >
                                <FiGithub />
                                View Code
                            </a>
                        )}
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 md:px-8 py-3 md:py-4 border-2 border-white rounded-full font-medium hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                            >
                                <FiExternalLink />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </section>

            {/* Project Image - Optional */}
            <section className="bg-white py-0">
                <div className="container-custom">
                    <div className={`aspect-[21/9] rounded-2xl bg-gradient-to-br ${project.gradient} 
            flex items-center justify-center text-white/10 -mt-16`}
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        <span className="text-9xl font-bold">{project.title[0]}</span>
                    </div>
                </div>
            </section>

            {/* Content Section - White Background */}
            <article className="section section-white">
                <div className="container-custom max-w-4xl">
                    <div className="prose prose-lg max-w-none
            prose-headings:font-space-grotesk
            prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6 prose-h1:mt-12
            prose-h2:text-3xl prose-h2:font-semibold prose-h2:mb-4 prose-h2:mt-10
            prose-h3:text-2xl prose-h3:font-medium prose-h3:mb-3 prose-h3:mt-8
            prose-p:text-gray-700 prose-p:leading-relaxed
            prose-a:text-black prose-a:underline hover:prose-a:text-gray-600
            prose-code:text-sm prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-gray-900 prose-pre:text-gray-100
            prose-ul:my-6 prose-li:my-2
            prose-strong:text-black prose-strong:font-semibold">

                        <ReactMarkdown
                            components={{
                                code({ node, inline, className, children, ...props }) {
                                    const match = /language-(\w+)/.exec(className || '');
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            style={vscDarkPlus}
                                            language={match[1]}
                                            PreTag="div"
                                            {...props}
                                        >
                                            {String(children).replace(/\n$/, '')}
                                        </SyntaxHighlighter>
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    );
                                }
                            }}
                        >
                            {project.content}
                        </ReactMarkdown>
                    </div>
                </div>
            </article>

            {/* Tech Stack Section - Black Background */}
            <section className="section section-black">
                <div className="container-custom">
                    <h2 className="heading-lg mb-8">Technologies Used</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, i) => (
                            <span
                                key={i}
                                className="px-5 py-2.5 text-base font-medium rounded-full bg-gray-900 text-white border border-gray-800"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Back to Projects CTA - White Background */}
            <section className="section-white py-20">
                <div className="container-custom text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors text-lg group"
                    >
                        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        View All Projects
                    </Link>
                </div>
            </section>
        </div>
    );
}
