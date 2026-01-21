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
        'Machine Learning',
        'Data Analyst',
        'Data Engineer',
        'Software Engineer',
        'AWS',
        'Hackathons'
    ];



    const filteredProjects = activeCategory === 'Featured'
        ? projects.filter(p => p.featured)
        : projects.filter(p => p.categories.includes(activeCategory));

    return (
        <section ref={sectionRef} className="section bg-white" id="projects">
            <div className="container-custom relative z-10">
                {/* Architectural Header */}
                <div className="mb-16 scroll-reveal-left grid md:grid-cols-[200px_1fr] gap-8 items-end">
                    <div>
                        <span className="text-sm font-mono text-[#0A0A0A] font-medium tracking-widest uppercase block mb-4">04 / Work</span>
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
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className={`group scroll-reveal ${index % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'}`}
                        >
                            <Link href={project.live || project.github || '#'} target="_blank" className="block h-full">
                                {/* Architectural Card Frame - Neon Hover */}
                                <div className="bg-white border-2 border-[#0A0A0A] p-8 h-full relative transition-all duration-300
                                    hover:shadow-[8px_8px_0px_#D4FF00] hover:-translate-y-2 flex flex-col group">

                                    {/* Project Code Header */}
                                    <div className="flex justify-between items-start mb-8 border-b border-[#E5E5E5] pb-6">
                                        <div>
                                            <span className="font-mono text-xs text-[#9CA3AF] uppercase tracking-wider block mb-2">
                                                Project_{index + 1 < 10 ? `0${index + 1}` : index + 1}
                                            </span>
                                            <h3 className="text-3xl font-medium text-[#0A0A0A] leading-tight"
                                                style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                                {project.title}
                                            </h3>
                                        </div>
                                        {/* Icon Box */}
                                        <div className="w-10 h-10 border border-[#0A0A0A] flex items-center justify-center 
                                            bg-white group-hover:bg-[#0A0A0A] group-hover:text-[#D4FF00] transition-colors">
                                            <FiArrowRight className="text-lg" />
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
                    ))}
                </div>

                {/* View More Button */}
                <div className="mt-20 text-center scroll-reveal">
                    <Link href="https://github.com/yourusername" target="_blank"
                        className="inline-flex items-center gap-4 px-10 py-4 bg-transparent border-2 border-[#0A0A0A] text-[#0A0A0A]
                        hover:bg-[#0A0A0A] hover:text-[#D4FF00] hover:border-[#0A0A0A] transition-all duration-300 font-medium tracking-wide group">
                        <span>VIEW ARCHIVE</span>
                        <FiArrowRight className="group-hover:translate-x-2 transition-transform text-[#D4FF00]" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
