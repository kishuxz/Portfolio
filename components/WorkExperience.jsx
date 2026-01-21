'use client';

import { useEffect, useRef } from 'react';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import { experiences } from '@/lib/content-config';

export default function WorkExperience() {
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

        <section ref={sectionRef} className="section bg-white relative overflow-hidden" id="experience">
            <div className="container-custom relative z-10">
                {/* Architectural Header */}
                <div className="mb-20 md:mb-24 scroll-reveal grid md:grid-cols-[200px_1fr] gap-8 items-end">
                    <div>
                        <span className="text-sm font-mono text-[#0A0A0A] font-medium tracking-widest uppercase block mb-4">02 / Experience</span>
                        <h2 className="text-5xl md:text-6xl font-medium text-[#0A0A0A] leading-none tracking-tight"
                            style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                            Career<br />Timeline
                        </h2>
                    </div>
                    <p className="text-lg text-[#4A4A4A] max-w-xl border-l border-[#0A0A0A] pl-6 py-2">
                        Building production-grade systems and leading engineering teams across startups and enterprise environments.
                    </p>
                </div>

                {/* Architectural Timeline */}
                <div className="max-w-5xl mx-auto relative">
                    {/* Hard Vertical Line */}
                    <div className="absolute left-0 md:left-[120px] top-4 bottom-0 w-px bg-[#E5E5E5] md:block hidden"></div>

                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative grid md:grid-cols-[120px_1fr] gap-8 md:gap-16 group scroll-reveal stagger-1">
                                {/* Period - Left Side on Desktop */}
                                <div className="hidden md:block text-right pt-8 relative">
                                    <span className="text-sm font-mono font-medium text-[#0A0A0A] bg-white relative z-10 py-2 pr-4">
                                        {exp.period}
                                    </span>
                                    {/* Timeline Node - Neon Pop */}
                                    <div className="absolute top-[42px] -right-[5px] w-2.5 h-2.5 bg-[#0A0A0A] rounded-full border-2 border-white z-20 group-hover:scale-150 group-hover:bg-[#F26530] transition-all duration-300"></div>
                                </div>

                                {/* Content Card - Architectural Box + Neon Shadow */}
                                <div className="bg-white border border-[#E5E5E5] p-8 md:p-10 relative transition-all duration-300
                                    hover:border-[#0A0A0A] hover:shadow-medium group-hover:-translate-y-1">

                                    {/* Mobile Period */}
                                    <div className="md:hidden text-sm font-mono font-medium text-[#0A0A0A] mb-4 pb-4 border-b border-[#E5E5E5]">
                                        {exp.period}
                                    </div>

                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                                        <div>
                                            <h3 className="text-2xl font-medium text-[#0A0A0A] mb-1 group-hover:text-[#F26530] transition-colors duration-300">
                                                {exp.role}
                                            </h3>
                                            <div className="text-lg text-[#4A4A4A] font-normal">{exp.company}</div>
                                        </div>
                                        <div className="text-sm text-[#737373] flex items-center gap-2">
                                            <FiMapPin /> {exp.location}
                                        </div>
                                    </div>

                                    <p className="text-lg text-[#0A0A0A] italic font-medium mb-8">
                                        &quot;{exp.description}&quot;
                                    </p>

                                    <ul className="space-y-3 mb-8">
                                        {exp.achievements.map((achievement, idx) => (
                                            <li key={idx} className="flex items-start gap-4 text-[#4A4A4A]">
                                                <span className="mt-2 w-1.5 h-1.5 bg-[#0A0A0A] flex-shrink-0 rotate-45"></span>
                                                <span className="leading-relaxed">
                                                    {achievement}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech Stack - Minimal Borders */}
                                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#E5E5E5]">
                                        {exp.tech.map((t, i) => (
                                            <span key={i} className="text-xs uppercase tracking-wider font-medium px-3 py-1 
                                                border border-[#E5E5E5] text-[#4A4A4A] bg-white">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
