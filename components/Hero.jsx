'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiCode, FiMail, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '@/lib/content-config';

import MagneticButton from '@/components/MagneticButton';

export default function Hero() {
    const heroRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

        const elements = heroRef.current?.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    // Parallax mouse effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section ref={heroRef} className="min-h-screen flex items-center relative overflow-hidden bg-white dotted-bg pt-32 md:pt-20" id="home">
            {/* Architectural Background Elements */}
            {/* Architectural Background Elements - Pure White */}

            <div className="container-custom w-full relative z-10 py-20">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
                    {/* Left: Text Content - BOLD & CLEAN */}
                    <div>
                        {/* Section marker */}
                        <div className="flex items-center gap-4 mb-10 scroll-reveal-left">
                            <span className="text-sm font-mono text-[#0A0A0A] font-medium tracking-widest uppercase">Portfolio 2026</span>
                            <div className="h-px w-12 bg-[#0A0A0A]"></div>
                        </div>

                        {/* ULTRA LARGE NAME */}
                        <h1 className="scroll-reveal stagger-1 mb-8 relative leading-[0.9]">
                            <span className="block text-6xl sm:text-7xl md:text-8xl font-medium text-[#0A0A0A] tracking-[-0.04em]"
                                style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                {personalInfo.name.split(' ')[0]}
                            </span>
                            <span className="block text-6xl sm:text-7xl md:text-8xl font-medium text-[#0A0A0A]/40 tracking-[-0.04em]"
                                style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                {personalInfo.name.split(' ')[1]}
                            </span>
                        </h1>

                        {/* Role Label - Orange Accent */}
                        <div className="scroll-reveal stagger-2 mb-8">
                            <span className="inline-block px-4 py-2 bg-[#F26530] text-white text-sm font-medium uppercase tracking-wider mb-4">
                                Software Engineer
                            </span>
                            <p className="text-2xl sm:text-3xl font-normal text-[#0A0A0A] flex items-center gap-3"
                                style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                Full Stack
                            </p>
                        </div>

                        {/* Description - High Contrast */}
                        <p className="text-lg md:text-xl text-[#4A4A4A] mb-12 leading-relaxed max-w-xl scroll-reveal stagger-3 font-medium">
                            Building production-grade systems with <span className="text-[#0A0A0A] border-b border-[#0A0A0A]">precision</span> and <span className="text-[#0A0A0A] border-b border-[#0A0A0A]">performance</span>.
                            Specializing in scalable infrastructure, data engineering, and AI integrations.
                        </p>

                        {/* Action Buttons - Orange Accent */}
                        <div className="flex flex-wrap gap-6 mb-12 scroll-reveal stagger-3">
                            <MagneticButton>
                                <Link
                                    href="/chat"
                                    className="px-10 py-4 bg-[#F26530] text-white rounded-lg
                                        transition-all duration-300 flex items-center gap-3 text-base font-medium
                                        hover:bg-[#E55520] shadow-medium hover:shadow-strong hover:scale-[1.02]"
                                >
                                    <span>Talk to my AI</span>
                                </Link>
                            </MagneticButton>
                            <Link
                                href="/resume"
                                className="px-10 py-4 border-2 border-black text-black rounded-lg
                                    transition-all duration-300 flex items-center gap-3 text-base font-medium
                                    hover:bg-black hover:text-white shadow-soft hover:shadow-medium hover:scale-[1.02]"
                            >
                                <span>View Resume</span>
                            </Link>
                        </div>

                        {/* Social Icons - Minimal */}
                        <div className="flex gap-6 scroll-reveal stagger-4 items-center">
                            <span className="text-xs font-mono uppercase tracking-widest text-[#9CA3AF]">Connect</span>
                            <div className="h-px w-8 bg-[#E5E0DB]"></div>
                            {personalInfo.social.linkedin && (
                                <a
                                    href={personalInfo.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#0A0A0A] hover:text-[#F26530] transition-colors text-2xl"
                                    aria-label="LinkedIn"
                                >
                                    <FiLinkedin />
                                </a>
                            )}
                            {personalInfo.social.github && (
                                <a
                                    href={personalInfo.social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#0A0A0A] hover:text-[#F26530] transition-colors text-2xl"
                                    aria-label="GitHub"
                                >
                                    <FiGithub />
                                </a>
                            )}
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="text-[#0A0A0A] hover:text-[#F26530] transition-colors text-2xl"
                                aria-label="Email"
                            >
                                <FiMail />
                            </a>
                        </div>
                    </div>

                    {/* Right: Photo - Simple and Clean */}
                    <div className="scroll-reveal stagger-2 relative max-w-[500px] lg:ml-auto mt-12 lg:mt-0">
                        <div className="relative group">
                            <div className="relative overflow-hidden rounded-lg shadow-medium">
                                <Image
                                    src="/profile-photo.jpg"
                                    alt={personalInfo.name}
                                    width={500}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Minimal Scroll Indicator */}
                <div className="absolute bottom-12 left-0 w-full scroll-reveal stagger-5">
                    <div className="flex items-center gap-4 text-[#0A0A0A]/40 container-custom">
                        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
                        <div className="h-[1px] w-24 bg-[#0A0A0A]/20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
