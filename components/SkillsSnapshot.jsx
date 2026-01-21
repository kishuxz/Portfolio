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

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden" id="skills">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E8DFD8] opacity-20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="mb-16 md:mb-20 scroll-reveal-left">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs font-mono text-neutral-500 tracking-wider">02 / 05</span>
                        <div className="h-px w-20 bg-gradient-to-r from-[#D4C5B9] to-transparent"></div>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-light mb-6 text-neutral-900"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        Technical <span className="text-gradient-gold font-normal">Arsenal</span>
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl">
                        A curated stack of technologies I use to build scalable, production-ready systems.
                    </p>
                </div>

                {/* Skills Grid - Glass Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className={`glass-card rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300
                                border-t-4 ${category.color} scroll-reveal stagger-${(index % 3) + 1}`}
                        >
                            <h3 className="text-xl font-medium mb-6 text-neutral-900 flex items-center gap-3">
                                {category.name}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 bg-[#E8DFD8]/30 text-neutral-800 text-sm font-medium rounded-full
                                            border border-transparent hover:border-[#D4C5B9] hover:bg-white transition-all duration-300
                                            cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
