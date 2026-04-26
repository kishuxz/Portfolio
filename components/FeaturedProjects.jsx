'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FiArrowRight, FiGithub, FiExternalLink, FiCode, FiLayers } from 'react-icons/fi';
import { projects } from '@/lib/content-config';

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
        'LLM / Agents',
        'Software Engineering',
        'Cloud / AWS',
        'Machine Learning',
        'Data Analysis',
        'Data Visualization',
        'Data Engineering'
    ];

    const featuredProjects = projects.filter(p => p.featured);
    const archiveProjects = projects.filter(p => !p.featured);
    const filteredProjects = activeCategory === 'Featured'
        ? featuredProjects
        : projects.filter(p => p.categories.includes(activeCategory));

    return (
        <section ref={sectionRef} className="section" id="projects" style={{ background: '#F8F8F8' }}>
            <div className="container-custom relative z-10">
                {/* Architectural Header */}
                <div className="mb-16 scroll-reveal-left grid md:grid-cols-[200px_1fr] gap-8 items-end">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="font-mono text-[#F26530] text-sm">$</span>
                            <div className="inline-block px-4 py-2 bg-[#F26530]">
                                <span className="text-sm font-mono text-white font-bold tracking-widest uppercase">04 / WORK</span>
                            </div>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-medium text-[#0A0A0A] leading-none tracking-tight"
                            style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                            Selected<br />Projects
                        </h2>
                    </div>

                    {/* Filter Categories - Minimal */}
                    <div className="flex flex-wrap gap-2 md:justify-end">
                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 text-sm font-medium transition-all duration-300 border
                  ${activeCategory === cat
                                        ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                                        : 'bg-transparent text-[#6B6B6B] border-[#E5E5E5] hover:border-[#0A0A0A] hover:text-[#0A0A0A]'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {filteredProjects.map((project, index) => {
                        const projectHref = project.live || project.github || `/projects/${project.slug}`;
                        const isExternal = Boolean(project.live || project.github);

                        return (
                            <div
                                key={project.slug}
                                className={`group scroll-reveal ${index % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'}`}
                            >
                                <Link href={projectHref} target={isExternal ? '_blank' : undefined} className="block h-full">
                                {/* Modern Minimal Card with Orange Accent */}
                                <div className="bg-white border-l-4 border-[#F26530] border-t border-r border-b border-gray-300 rounded-lg p-8 h-full relative transition-all duration-300
                                    hover:shadow-strong hover:-translate-y-1 hover:border-l-[#F26530] flex flex-col group hover-lift">

                                    {/* Project Code Header */}
                                    <div className="flex justify-between items-start mb-8 border-b border-gray-200 pb-6">
                                        <div>
                                            <span className="font-mono text-xs text-[#9CA3AF] uppercase tracking-wider block mb-2 bg-[#F8F8F8] px-2 py-1 inline-block">
                                                <span className="text-[#F26530]">{'//'}</span> Project_{index + 1 < 10 ? `0${index + 1}` : index + 1}
                                            </span>
                                            <h3 className="text-3xl font-medium text-[#0A0A0A] leading-tight group-hover:text-[#F26530] transition-colors duration-300"
                                                style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                                {project.title}
                                            </h3>
                                        </div>
                                        {/* Icon Box */}
                                        <div className="w-10 h-10 border border-[#0A0A0A] flex items-center justify-center 
                                            bg-white group-hover:bg-[#F26530] group-hover:text-white transition-colors">
                                            {project.github ? <FiGithub className="text-lg" /> : <FiLayers className="text-lg" />}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="mb-6">
                                            <div className="flex items-start gap-4 mb-4">
                                                <span className="mt-1.5 w-1.5 h-1.5 bg-[#0A0A0A] flex-shrink-0"></span>
                                                <p className="text-[#0A0A0A] font-medium leading-relaxed">
                                                    {project.accomplished}
                                                </p>
                                            </div>
                                            <p className="text-[#6B6B6B] text-sm leading-relaxed pl-5.5 border-l border-[#E5E5E5] ml-[2.5px] pl-4">
                                                {project.measured}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Tech Stack - Footer */}
                                    <div className="pt-6 mt-6 border-t border-[#E5E5E5] flex flex-wrap gap-2">
                                        {project.techStack.slice(0, 4).map((tech, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 bg-white text-xs font-mono text-[#0A0A0A] border border-[#E5E5E5]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>

                {activeCategory === 'Featured' && (
                    <div className="mt-20 scroll-reveal">
                        <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                            <div>
                                <span className="font-mono text-xs text-[#F26530] uppercase tracking-widest">Archive</span>
                                <h3 className="text-3xl md:text-4xl font-medium text-[#0A0A0A] mt-2"
                                    style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                    Earlier Work
                                </h3>
                            </div>
                            <p className="text-sm text-[#6B6B6B] max-w-xl">
                                Smaller public projects that round out the software, ML, data analysis, and AWS story.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {archiveProjects.map((project) => {
                                const projectHref = project.github || `/projects/${project.slug}`;
                                const isExternal = Boolean(project.github);

                                return (
                                    <Link
                                        key={project.slug}
                                        href={projectHref}
                                        target={isExternal ? '_blank' : undefined}
                                        className="group/archive bg-white border border-[#E5E5E5] p-5 rounded-lg hover:border-[#0A0A0A] hover:shadow-medium transition-all"
                                    >
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <h4 className="text-lg font-medium text-[#0A0A0A] group-hover/archive:text-[#F26530] transition-colors"
                                                style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                                {project.title}
                                            </h4>
                                            {project.github ? <FiGithub className="text-lg flex-shrink-0" /> : <FiLayers className="text-lg flex-shrink-0" />}
                                        </div>
                                        <p className="text-sm text-[#6B6B6B] leading-relaxed mb-4">
                                            {project.accomplished}
                                        </p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {project.techStack.slice(0, 3).map((tech) => (
                                                <span key={tech} className="px-2 py-1 bg-[#F8F8F8] text-[11px] font-mono text-[#4A4A4A] border border-[#E5E5E5]">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* View More Button */}
                <div className="mt-20 text-center scroll-reveal">
                    <Link href="https://github.com/kishuxz" target="_blank"
                        className="inline-flex items-center gap-4 px-10 py-4 bg-transparent border-2 border-[#0A0A0A] text-[#0A0A0A]
                        hover:bg-[#F26530] hover:text-white hover:border-[#F26530] transition-all duration-300 font-medium tracking-wide group">
                        <span>VIEW ARCHIVE</span>
                        <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
