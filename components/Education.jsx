'use client';

import { useEffect, useRef } from 'react';
import { FiAward, FiCalendar, FiMapPin, FiStar, FiCheckCircle } from 'react-icons/fi';

export default function Education() {
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

    const education = [
        {
            degree: 'Master of Science in Data Science',
            institution: 'Indiana University Bloomington',
            location: 'Bloomington, IN',
            period: 'Aug 2024 - May 2026',
            gpa: '3.5/4.0',
            achievements: [
                'Research Assistant at Media School and O\'Neill School for climate data analysis and ML systems',
                'Advanced coursework in distributed systems, ML engineering, and large-scale data processing'
            ]
        },
        {
            degree: 'Bachelor of Technology in Computer Science (AI & ML)',
            institution: 'Sri Ramachandra Institute of Higher Education and Research',
            location: 'Chennai, India',
            period: 'Jul 2021 - Jun 2024',
            gpa: '8.45/10.0',
            achievements: [
                'Specialized in Artificial Intelligence and Machine Learning with applied systems coursework',
                'Built ML-based solutions for healthcare and data-driven applications'
            ]
        }
    ];

    const certifications = [
        {
            name: 'AWS Certified Machine Learning Engineer – Associate',
            issuer: 'Amazon Web Services',
            date: 'Nov 2025 - Nov 2028'
        },
        {
            name: 'AWS Certified Developer – Associate',
            issuer: 'Amazon Web Services',
            date: 'Jan 2026 - Jan 2029'
        }
    ];

    const awards = [
        {
            title: 'Best Overall Presentation — FADS Research Showcase',
            organization: 'Indiana University',
            year: '2025',
            description: 'Awarded for excellence in climate data analysis and research presentation on drought signals in CMIP6 models'
        },
        {
            title: 'Runners-Up — SRET 48-Hour Hackathon',
            organization: 'Sri Ramachandra Institute',
            year: '2024',
            description: 'Recognized for building a data-driven ML solution under time constraints'
        }
    ];

    return (
        <section ref={sectionRef} className="section bg-white relative overflow-hidden" id="education">
            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="mb-12 scroll-reveal-left">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs font-mono text-[#9CA3AF] tracking-wider">05 / 05</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-[#E5E5E5] to-transparent"></div>
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-4 text-[#0A0A0A]"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        Education & Credentials
                    </h2>
                    <p className="text-lg text-[#6B6B6B] max-w-2xl">
                        Academic background, certifications, and recognition
                    </p>
                </div>

                <div className="max-w-6xl mx-auto space-y-12">
                    {/* Education Timeline - Credential Gallery */}
                    <div>
                        <h3 className="text-2xl font-light mb-6 text-[#0A0A0A] scroll-reveal-left"
                            style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                            Academic Background
                        </h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            {education.map((edu, index) => (
                                <div key={index} className="scroll-reveal-left">
                                    <div className="group relative bg-white rounded-xl border border-[#E5E5E5] 
                    hover:border-[#0A0A0A] transition-all duration-500 overflow-hidden
                    hover:-translate-y-1 hover:shadow-xl h-full flex flex-col">
                                        {/* Diploma Top Border Effect - Orange */}
                                        <div className="absolute top-0 left-0 h-1.5 w-full bg-[#F26530]"></div>
                                        <div className="absolute top-1.5 left-0 right-0 h-px bg-white/50"></div>

                                        <div className="p-8 flex-1 flex flex-col">
                                            <div className="flex items-start gap-5 mb-6">
                                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A0A0A] to-[#2A2A2A]
                          flex items-center justify-center text-white text-xl shadow-lg flex-shrink-0
                          group-hover:scale-110 transition-transform duration-300">
                                                    <FiAward />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-xl md:text-2xl font-light text-[#0A0A0A] mb-2 leading-tight"
                                                        style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                                        {edu.degree}
                                                    </h4>
                                                    <p className="text-lg text-[#0A0A0A] font-medium mb-1">{edu.institution}</p>
                                                </div>
                                            </div>

                                            <div className="flex flex-wrap gap-4 text-sm text-[#6B6B6B] mb-6 font-mono">
                                                <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-[#E5E5E5]">
                                                    <FiCalendar />
                                                    {edu.period}
                                                </span>
                                                <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-[#E5E5E5]">
                                                    <FiMapPin />
                                                    {edu.location}
                                                </span>
                                                <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-[#E5E5E5]">
                                                    <span className="font-bold text-[#0A0A0A]">GPA:</span> {edu.gpa}
                                                </span>
                                            </div>

                                            <div className="mt-auto pt-6 border-t border-[#E5E5E5]">
                                                <ul className="space-y-2">
                                                    {edu.achievements.map((achievement, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-sm text-[#6B6B6B] group/item">
                                                            <span className="text-[#0A0A0A] mt-1 group-hover/item:text-[#0A0A0A] transition-colors">•</span>
                                                            <span className="group-hover/item:text-[#0A0A0A] transition-colors duration-300">{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications & Awards Grid - Badge Style */}
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* Certifications */}
                        <div className="scroll-reveal-left">
                            <h3 className="text-2xl font-light mb-6 text-[#0A0A0A] flex items-center gap-3"
                                style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                <FiCheckCircle className="text-[#0A0A0A]" />
                                Certifications
                            </h3>
                            {certifications.length > 0 ? (
                                <div className="space-y-4">
                                    {certifications.map((cert, i) => (
                                        <div key={i} className="group bg-white rounded-xl border border-[#E5E0DB] p-5
                                            hover:border-[#0A0A0A] hover:shadow-md transition-all duration-300 flex items-center gap-4">
                                            <div className="w-2 h-12 bg-gray-200 rounded-full group-hover:bg-[#0A0A0A] transition-colors duration-300"></div>
                                            <div className="flex-1">
                                                <p className="text-base font-medium text-[#0A0A0A] mb-1 group-hover:text-[#0A0A0A] transition-colors">
                                                    {cert.name}
                                                </p>
                                                <p className="text-xs text-[#9CA3AF] font-mono uppercase tracking-wide">
                                                    {cert.issuer} · {cert.date}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-white rounded-xl border border-[#E5E0DB] p-8 text-center">
                                    <p className="text-sm text-[#9CA3AF] italic">No certifications listed</p>
                                </div>
                            )}
                        </div>

                        {/* Awards */}
                        <div className="scroll-reveal-right">
                            <h3 className="text-2xl font-light mb-6 text-[#0A0A0A] flex items-center gap-3"
                                style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                <FiStar className="text-[#0A0A0A]" />
                                Awards
                            </h3>
                            <div className="space-y-4">
                                {awards.map((award, i) => (
                                    <div key={i} className="group bg-white rounded-xl border border-[#E5E0DB] p-5
                                        hover:border-[#0A0A0A] hover:shadow-md transition-all duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-full bg-white border border-[#E5E5E5]
                                                flex items-center justify-center text-[#9CA3AF] text-lg flex-shrink-0
                                                group-hover:scale-110 group-hover:bg-[#F26530] group-hover:text-white transition-all duration-300">
                                                <FiStar className="fill-current" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-base font-medium text-[#0A0A0A] mb-1">
                                                    {award.title}
                                                </p>
                                                <p className="text-xs text-[#9CA3AF] font-mono uppercase tracking-wide mb-2">
                                                    {award.organization} · {award.year}
                                                </p>
                                                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                                                    {award.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
