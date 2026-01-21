'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

// This would come from getAllProjects() in a real implementation
// For now, using static data
const allProjectsData = [
    {
        slug: 'rag-chatbot',
        title: 'LLM-Powered RAG Chatbot',
        category: 'ML/LLM Systems',
        oneLiner: 'Production RAG system with semantic search and zero hallucinations',
        gradient: 'from-blue-500 to-purple-600',
        tech: ['LangChain', 'Next.js', 'Supabase'],
        date: '2024-10',
    },
    {
        slug: 'data-pipeline',
        title: 'Distributed Data Pipeline',
        category: 'Data Engineering',
        oneLiner: 'Automated ETL pipeline processing 1M+ records daily with 99.9% reliability',
        gradient: 'from-green-500 to-emerald-600',
        tech: ['Python', 'Airflow', 'AWS'],
        date: '2024-08',
    },
    {
        slug: 'open-source',
        title: 'Open-Source ML Library',
        category: 'Machine Learning',
        oneLiner: 'Performance optimization merged into production ML library',
        gradient: 'from-orange-500 to-pink-600',
        tech: ['Python', 'C++', 'Testing'],
        date: '2024-06',
    },
];

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Get unique categories
    const categories = useMemo(() => {
        const cats = [...new Set(allProjectsData.map(p => p.category))];
        return ['all', ...cats];
    }, []);

    // Filter projects
    const filteredProjects = useMemo(() => {
        if (selectedCategory === 'all') return allProjectsData;
        return allProjectsData.filter(p => p.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <div className="min-h-screen bg-white">
            <main className="section section-white">
                <div className="container-custom">
                    {/* Header */}
                    <div className="mb-12 md:mb-16">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black transition-colors mb-8"
                        >
                            ← Back to Home
                        </Link>

                        <h1 className="heading-xl mb-6">All Projects</h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                            Comprehensive showcase of production systems across Frontend, Full-Stack, Data Engineering, and ML/LLM domains.
                        </p>
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all text-sm md:text-base ${selectedCategory === category
                                        ? 'bg-black text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category === 'all' ? 'All' : category}
                            </button>
                        ))}
                    </div>

                    {/* Project Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {filteredProjects.map((project) => (
                            <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="group cursor-pointer"
                            >
                                {/* Gradient Placeholder */}
                                <div className={`aspect-[16/9] rounded-2xl bg-gradient-to-br ${project.gradient} 
                  mb-6 overflow-hidden relative
                  group-hover:scale-[1.02] transition-all duration-300
                  flex items-center justify-center`}>
                                    <span className="text-white/10 font-bold text-8xl"
                                        style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                        {project.title[0]}
                                    </span>
                                </div>

                                {/* Title + Category */}
                                <div className="flex items-baseline justify-between mb-3 gap-4">
                                    <h3 className="text-xl md:text-2xl font-medium uppercase tracking-tight"
                                        style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                        {project.title}.
                                    </h3>
                                    <span className="label-text text-gray-500 flex-shrink-0 text-xs">
                                        {project.category}
                                    </span>
                                </div>

                                {/* One-liner */}
                                <p className="text-sm md:text-base text-gray-600 mb-4 leading-relaxed">
                                    {project.oneLiner}
                                </p>

                                {/* Tech Stack Pills */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.slice(0, 3).map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600">
                                            +{project.tech.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Link */}
                                <span className="text-sm font-medium text-black inline-flex items-center gap-1.5
                  group-hover:gap-2.5 transition-all">
                                    View Case Study
                                    <FiArrowUpRight className="text-sm" />
                                </span>
                            </Link>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">
                                No projects found in this category.
                            </p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
