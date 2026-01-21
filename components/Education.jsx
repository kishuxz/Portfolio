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
            degree: 'Bachelor of Science in Computer Science',
            institution: 'University Name',
            location: 'City, State',
            period: '2015 - 2019',
            gpa: '3.8/4.0',
            achievements: [
                'Dean\'s List all semesters',
                'Senior thesis on Machine Learning applications',
                'President of Computer Science Club'
            ]
        },
        {
            degree: 'Master of Science in Data Science',
            institution: 'University Name',
            location: 'City, State',
            period: '2019 - 2021',
            gpa: '3.9/4.0',
            achievements: [
                'Research in Natural Language Processing',
                'Published paper on ML optimization techniques',
                'Teaching Assistant for Advanced Algorithms'
            ]
        }
    ];

    const certifications = [
        { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', date: '2023' },
        { name: 'Google Cloud Professional Data Engineer', issuer: 'Google Cloud', date: '2023' },
        { name: 'TensorFlow Developer Certificate', issuer: 'TensorFlow', date: '2023' },
        { name: 'Kubernetes Application Developer', issuer: 'CNCF', date: '2022' }
    ];

    const awards = [
        { title: '1st Place - TechCrunch Disrupt', year: '2024' },
        { title: 'NASA Space Apps Global Winner', year: '2023' },
        { title: 'Best Social Impact Award - HackMIT', year: '2023' }
    ];

    return (
        <section ref={sectionRef} className="section bg-[#F5F1ED] relative overflow-hidden" id="education">
            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="mb-12 scroll-reveal-left">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs font-mono text-[#9CA3AF] tracking-wider">05 / 05</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-[#D4C5B9] to-transparent"></div>
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
                    {/* Education Timeline */}
                    <div>
                        <h3 className="text-2xl font-light mb-6 text-[#0A0A0A] scroll-reveal-left"
                            style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                            Academic Background
                        </h3>

                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <div key={index} className="scroll-reveal-left">
                                    <div className="group relative bg-white rounded-xl border-2 border-[#E5E0DB] 
                    hover:border-[#D4C5B9] transition-all duration-500 overflow-hidden
                    hover:-translate-y-1 hover:shadow-lg">
                                        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#D4C5B9] to-[#E8DFD8]"></div>

                                        <div className="p-6 md:p-8">
                                            <div className="flex items-start gap-4 mb-4">
                                                <div className="w-10 h-10 rounded-lg bg-[#0A0A0A] 
                          flex items-center justify-center text-white flex-shrink-0
                          group-hover:scale-110 transition-transform duration-300">
                                                    <FiAward />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-xl font-light text-[#0A0A0A] mb-1"
                                                        style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                                        {edu.degree}
                                                    </h4>
                                                    <p className="text-base text-[#6B6B6B] mb-2">{edu.institution}</p>
                                                    <div className="flex flex-wrap gap-3 text-sm text-[#9CA3AF]">
                                                        <span className="flex items-center gap-1.5">
                                                            <FiMapPin className="text-xs" />
                                                            {edu.location}
                                                        </span>
                                                        <span className="flex items-center gap-1.5">
                                                            <FiCalendar className="text-xs" />
                                                            {edu.period}
                                                        </span>
                                                        <span className="px-2 py-0.5 rounded-full bg-[#F5F1ED] text-[#0A0A0A] text-xs font-medium">
                                                            GPA: {edu.gpa}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="ml-14">
                                                <ul className="space-y-1.5">
                                                    {edu.achievements.map((achievement, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-[#6B6B6B]">
                                                            <span className="text-[#D4C5B9] mt-1">•</span>
                                                            <span>{achievement}</span>
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

                    {/* Certifications & Awards Grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Certifications */}
                        <div className="scroll-reveal-left">
                            <h3 className="text-xl font-light mb-4 text-[#0A0A0A]"
                                style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                Certifications
                            </h3>
                            <div className="bg-white rounded-xl border-2 border-[#E5E0DB] p-6 space-y-3">
                                {certifications.map((cert, i) => (
                                    <div key={i} className="flex items-start gap-3 pb-3 border-b border-[#F5F1ED] last:border-0 last:pb-0">
                                        <FiCheckCircle className="text-[#D4C5B9] mt-0.5 flex-shrink-0" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-[#0A0A0A] truncate">{cert.name}</p>
                                            <p className="text-xs text-[#9CA3AF]">{cert.issuer} · {cert.date}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Awards */}
                        <div className="scroll-reveal-right">
                            <h3 className="text-xl font-light mb-4 text-[#0A0A0A]"
                                style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                Awards & Recognition
                            </h3>
                            <div className="bg-white rounded-xl border-2 border-[#E5E0DB] p-6 space-y-3">
                                {awards.map((award, i) => (
                                    <div key={i} className="flex items-start gap-3 pb-3 border-b border-[#F5F1ED] last:border-0 last:pb-0">
                                        <FiStar className="text-[#D4C5B9] mt-0.5 flex-shrink-0" />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-[#0A0A0A]">{award.title}</p>
                                            <p className="text-xs text-[#9CA3AF]">{award.year}</p>
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
