'use client';

import { useEffect, useRef } from 'react';
import { skillCategories } from '@/lib/content-config';
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



    return (
        <section ref={sectionRef} className="py-24 relative" id="skills">
            <div className="container-custom relative z-10">
                <div className="mb-16 md:mb-20 scroll-reveal-left grid md:grid-cols-[200px_1fr] gap-8 items-end">
                    <div>
                        <span className="text-sm font-mono text-[#0A0A0A] font-medium tracking-widest uppercase block mb-4">03 / Skills</span>
                        <h2 className="text-5xl md:text-6xl font-medium text-[#0A0A0A] leading-none tracking-tight"
                            style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                            Technical<br />Stack
                        </h2>
                    </div>
                    <p className="text-lg text-[#4A4A4A] max-w-xl border-l border-[#0A0A0A] pl-6 py-2">
                        A curated arsenal of technologies for building scalable, production-ready systems.
                    </p>
                </div>

                {/* Swiss Grid Layout */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-b border-[#0A0A0A] bg-white">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="p-8 border-r border-b border-[#0A0A0A] group hover:bg-white hover:shadow-[inset_0_0_20px_rgba(212,255,0,0.1)] transition-colors duration-300"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-2 h-2 bg-[#0A0A0A] rounded-full group-hover:scale-150 transition-transform"></span>
                                <h3 className="text-lg font-bold text-[#0A0A0A] uppercase tracking-wide font-mono">
                                    {category.name}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 text-sm font-medium text-[#4A4A4A] border border-[#E5E5E5] bg-white
                                            hover:border-[#0A0A0A] hover:text-[#0A0A0A] transition-colors cursor-default"
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
