'use client';

import { useEffect, useRef } from 'react';
import { FiAward, FiTrendingUp, FiStar, FiCheckCircle } from 'react-icons/fi';

export default function Awards() {
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

    const certifications = [
        {
            name: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            date: 'June 2023',
            credential: 'ABC123XYZ',
            icon: FiAward
        },
        {
            name: 'Google Cloud Professional Data Engineer',
            issuer: 'Google Cloud',
            date: 'March 2023',
            credential: 'GCP-DE-2023',
            icon: FiTrendingUp
        },
        {
            name: 'TensorFlow Developer Certificate',
            issuer: 'TensorFlow',
            date: 'January 2023',
            credential: 'TF-DEV-123',
            icon: FiCheckCircle
        },
        {
            name: 'Kubernetes Application Developer',
            issuer: 'Cloud Native Computing Foundation',
            date: 'November 2022',
            credential: 'CKAD-2022',
            icon: FiStar
        }
    ];

    const awards = [
        {
            title: '1st Place - TechCrunch Disrupt Hackathon',
            organization: 'TechCrunch',
            date: '2024',
            description: 'AI-powered health assistant with 95% symptom accuracy'
        },
        {
            title: 'Global Winner - NASA Space Apps Challenge',
            organization: 'NASA',
            date: '2023',
            description: 'Interactive climate data visualization tool'
        },
        {
            title: 'Best Social Impact Award',
            organization: 'HackMIT',
            date: '2023',
            description: 'Platform connecting 500+ volunteers with local NGOs'
        },
        {
            title: 'Outstanding Student Award',
            organization: 'University CS Department',
            date: '2021',
            description: 'Recognized for academic excellence and research contributions'
        }
    ];

    return (
        <section ref={sectionRef} className="section bg-[#F5F1ED] relative overflow-hidden" id="awards">
            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="mb-16 md:mb-20 scroll-reveal-left">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs font-mono text-[#9CA3AF] tracking-wider">05 / 06</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-[#D4C5B9] to-transparent"></div>
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-4 text-[#0A0A0A]"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        Awards & Certifications
                    </h2>
                    <p className="text-lg text-[#6B6B6B] max-w-2xl">
                        Professional certifications and recognition for technical excellence
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Left: Certifications */}
                    <div className="scroll-reveal-left">
                        <h3 className="text-2xl font-light mb-8 text-[#0A0A0A]"
                            style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                            Professional Certifications
                        </h3>

                        <div className="space-y-4">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-xl border-2 border-[#E5E0DB] p-6
                    hover:border-[#D4C5B9] hover:-translate-x-2 transition-all duration-500
                    hover:shadow-lg relative overflow-hidden"
                                >
                                    {/* Left accent line */}
                                    <div className="absolute left-0 top-0 w-1 h-0 bg-gradient-to-b from-[#D4C5B9] to-[#E8DFD8]
                    group-hover:h-full transition-all duration-700"></div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-[#0A0A0A] flex items-center justify-center
                      text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <cert.icon className="text-lg" />
                                        </div>

                                        <div className="flex-1">
                                            <h4 className="text-lg font-light text-[#0A0A0A] mb-1
                        group-hover:text-[#D4C5B9] transition-colors"
                                                style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                                {cert.name}
                                            </h4>
                                            <p className="text-sm text-[#6B6B6B] mb-2">{cert.issuer}</p>
                                            <div className="flex items-center gap-4 text-xs text-[#9CA3AF]">
                                                <span>{cert.date}</span>
                                                <span className="px-2 py-1 rounded bg-[#F5F1ED] text-[#6B6B6B] font-mono">
                                                    {cert.credential}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Awards */}
                    <div className="scroll-reveal-right">
                        <h3 className="text-2xl font-light mb-8 text-[#0A0A0A]"
                            style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                            Awards & Recognition
                        </h3>

                        <div className="space-y-4">
                            {awards.map((award, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-xl border-2 border-[#E5E0DB] p-6
                    hover:border-[#D4C5B9] hover:translate-x-2 transition-all duration-500
                    hover:shadow-lg relative overflow-hidden"
                                >
                                    {/* Right accent line */}
                                    <div className="absolute right-0 top-0 w-1 h-0 bg-gradient-to-b from-[#D4C5B9] to-[#E8DFD8]
                    group-hover:h-full transition-all duration-700"></div>

                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full border-2 border-[#D4C5B9] flex items-center justify-center
                      text-[#D4C5B9] text-sm font-medium flex-shrink-0 mt-1
                      group-hover:bg-[#D4C5B9] group-hover:text-white transition-all duration-300">
                                            {index + 1}
                                        </div>

                                        <div className="flex-1">
                                            <h4 className="text-lg font-light text-[#0A0A0A] mb-1
                        group-hover:text-[#D4C5B9] transition-colors"
                                                style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                                {award.title}
                                            </h4>
                                            <p className="text-sm text-[#6B6B6B] mb-2">{award.organization} · {award.date}</p>
                                            <p className="text-sm text-[#9CA3AF] leading-relaxed">{award.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
