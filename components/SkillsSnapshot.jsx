'use client';

import { useState, useEffect, useRef } from 'react';
import { skillCategories } from '@/lib/content-config';
import { enhancedSkills } from '@/lib/enhanced-skills';

export default function SkillsSnapshot() {
    const sectionRef = useRef(null);
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

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

    const handleMouseEnter = (skillName, event) => {
        const rect = event.target.getBoundingClientRect();
        setTooltipPosition({
            x: rect.left + rect.width / 2,
            y: rect.top - 10
        });
        // Find skill data from enhanced skills - using 'skill' property not 'name'
        const skillData = enhancedSkills.find(s => s.skill === skillName);
        setHoveredSkill(skillData);
    };

    const handleMouseLeave = () => {
        setHoveredSkill(null);
    };

    return (
        <section ref={sectionRef} className="py-24 relative" id="skills">
            <div className="container-custom relative z-10">
                <div className="mb-16 md:mb-20 scroll-reveal-left grid md:grid-cols-[200px_1fr] gap-8 items-end">
                    <div>
                        <span className="text-sm font-mono text-[#0A0A0A] font-medium tracking-widest uppercase block mb-4">01 / Skills</span>
                        <h2 className="text-5xl md:text-6xl font-medium text-[#0A0A0A] leading-none tracking-tight"
                            style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                            Technical<br />Stack
                        </h2>
                    </div>
                    <p className="text-lg text-[#4A4A4A] max-w-xl border-l border-[#0A0A0A] pl-6 py-2">
                        Hover over skills to see where I&apos;ve used them in projects and work experience.
                    </p>
                </div>

                {/* Swiss Grid Layout */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-b border-[#0A0A0A] bg-white">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="p-8 border-r border-b border-[#0A0A0A] group hover:bg-white hover:shadow-[inset_0_0_20px_rgba(242,101,48,0.1)] transition-colors duration-300"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <h3 className="text-base font-semibold mb-6 text-[#0A0A0A] flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#F26530] rounded-full"></span>
                                    {category.name}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        onMouseEnter={(e) => handleMouseEnter(skill, e)}
                                        onMouseLeave={handleMouseLeave}
                                        className="px-3 py-1.5 text-sm font-medium text-[#4A4A4A] border border-[#E5E5E5] bg-white
                                            hover:border-[#F26530] hover:text-[#0A0A0A] hover:scale-105 transition-all cursor-pointer hover-scale animate-fadeIn"
                                        style={{ animationDelay: `${idx * 0.05}s` }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Hover Tooltip */}
                {hoveredSkill && (
                    <div
                        className="fixed z-50 pointer-events-none"
                        style={{
                            left: `${tooltipPosition.x}px`,
                            top: `${tooltipPosition.y}px`,
                            transform: 'translate(-50%, -100%)'
                        }}
                    >
                        <div className="bg-black text-white px-4 py-3 rounded-lg shadow-lg max-w-sm">
                            <p className="font-semibold text-base mb-3">{hoveredSkill.skill}</p>

                            {hoveredSkill.used_in && hoveredSkill.used_in.length > 0 && (
                                <>
                                    {/* Projects */}
                                    {hoveredSkill.used_in.filter(item => item.type === 'project').length > 0 && (
                                        <div className="mb-2">
                                            <p className="text-xs text-gray-400 mb-1">Projects:</p>
                                            <p className="text-sm">
                                                {hoveredSkill.used_in
                                                    .filter(item => item.type === 'project')
                                                    .map(item => item.name)
                                                    .join(', ')}
                                            </p>
                                        </div>
                                    )}

                                    {/* Companies/Experience */}
                                    {hoveredSkill.used_in.filter(item => item.type === 'experience').length > 0 && (
                                        <div>
                                            <p className="text-xs text-gray-400 mb-1">Companies:</p>
                                            <p className="text-sm">
                                                {hoveredSkill.used_in
                                                    .filter(item => item.type === 'experience')
                                                    .map(item => item.name)
                                                    .join(', ')}
                                            </p>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}
