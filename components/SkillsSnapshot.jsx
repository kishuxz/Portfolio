'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function SkillsSnapshot() {
    const sectionRef = useRef(null);

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

    const skillCategories = [
        {
            name: 'Cloud & Infrastructure',
            color: '#0A0A0A',  // Black instead of blue
            skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CircleCI']
        },
        {
            name: 'Data Engineering',
            color: '#2A2A2A',  // Dark gray instead of green
            skills: ['SQL', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Data Modeling']
        },
        {
            name: 'Programming Languages',
            color: '#4A4A4A',  // Medium gray instead of purple
            skills: ['Python', 'JavaScript', 'Java', 'C++', 'TypeScript', 'R']
        },
        {
            name: 'ML & LLMs',
            color: '#1A1A1A',  // Almost black instead of red
            skills: ['Scikit-learn', 'TensorFlow', 'LangChain', 'Prompt Engineering', 'ReAct', 'Batch Processing']
        },
        {
            name: 'Big Data & ETL',
            color: '#3A3A3A',  // Gray instead of orange
            skills: ['Apache Airflow', 'PySpark', 'Spark', 'Hadoop', 'Batch Processing']
        },
        {
            name: 'Visualization & Tools',
            color: '#5A5A5A',  // Light gray instead of pink
            skills: ['Power BI', 'Tableau', 'Git', 'Linux', 'VS Code', 'System Design']
        }
    ];

    return (
        <section ref={sectionRef} className="section bg-[#FAFAF9] dotted-bg relative overflow-hidden" id="skills">
            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="mb-12 scroll-reveal-left">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs font-mono text-[#9CA3AF] tracking-wider">02 / 05</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-[#D4C5B9] to-transparent"></div>
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-4 text-[#0A0A0A]"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        Technical Skills
                    </h2>
                    <p className="text-lg text-[#6B6B6B] max-w-2xl">
                        Technologies and tools I use to build scalable solutions
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className={`group scroll-reveal ${index % 2 === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'}`}
                        >
                            {/* Skill Category Card */}
                            <div className="bg-white rounded-xl border-2 border-[#E5E0DB] p-6
                hover:border-[#D4C5B9] hover:-translate-y-1 transition-all duration-500
                hover:shadow-lg relative overflow-hidden h-full">
                                {/* Top colored accent line */}
                                <div
                                    className="absolute top-0 left-0 w-full h-1"
                                    style={{ backgroundColor: category.color }}
                                ></div>

                                {/* Category Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div
                                        className="w-3 h-3 rounded-full flex-shrink-0"
                                        style={{ backgroundColor: category.color }}
                                    ></div>
                                    <h3 className="text-lg font-light text-[#0A0A0A]"
                                        style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                        {category.name}
                                    </h3>
                                </div>

                                {/* Skills Pills */}
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 rounded-lg text-xs font-medium
                        border border-[#E5E0DB] text-[#1A1A1A] bg-[#FAFAF9]
                        hover:border-[#D4C5B9] hover:bg-white
                        transition-all duration-200 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
