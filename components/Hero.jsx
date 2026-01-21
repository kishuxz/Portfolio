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

                        {/* Title */}
                        <div className="scroll-reveal stagger-2 mb-8">
                            <p className="text-2xl sm:text-3xl font-normal text-[#0A0A0A] mb-3 flex items-center gap-3"
                                style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                Software Engineer
                                <span className="w-2 h-2 rounded-full bg-[#0A0A0A]"></span>
                                Full Stack
                            </p>
                        </div>

                        {/* Description - High Contrast */}
                        <p className="text-lg md:text-xl text-[#4A4A4A] mb-12 leading-relaxed max-w-xl scroll-reveal stagger-3 font-medium">
                            Building production-grade systems with <span className="text-[#0A0A0A] border-b border-[#0A0A0A]">precision</span> and <span className="text-[#0A0A0A] border-b border-[#0A0A0A]">performance</span>.
                            Specializing in scalable infrastructure, data engineering, and AI integrations.
                        </p>

                        {/* Action Buttons - Architectural */}
                        <div className="flex flex-wrap gap-6 mb-12 scroll-reveal stagger-3">
                            <MagneticButton>
                                <Link
                                    href="/chat"
                                    className="px-10 py-4 bg-[#0A0A0A] text-white rounded-none
                                        transition-all duration-300 flex items-center gap-3 text-base font-medium
                                        hover:bg-[#D4FF00] hover:text-[#0A0A0A] shadow-[4px_4px_0px_#D4FF00]"
                                >
                                    <span>Talk to my AI</span>
                                </Link>
                            </MagneticButton>
                            <Link
                                href="/resume"
                                className="px-10 py-4 border-2 border-[#0A0A0A] text-[#0A0A0A] rounded-none 
                                    transition-all duration-300 flex items-center gap-3 text-base font-medium
                                    hover:bg-[#0A0A0A] hover:text-white"
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
                                    className="text-[#0A0A0A] hover:text-[#4A4A4A] transition-colors text-2xl"
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
                                    className="text-[#0A0A0A] hover:text-[#4A4A4A] transition-colors text-2xl"
                                    aria-label="GitHub"
                                >
                                    <FiGithub />
                                </a>
                            )}
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="text-[#0A0A0A] hover:text-[#4A4A4A] transition-colors text-2xl"
                                aria-label="Email"
                            >
                                <FiMail />
                            </a>
                        </div>
                    </div>

                    {/* Right: Photo - Architectural Frame */}
                    <div className="scroll-reveal stagger-2 relative max-w-[500px] lg:ml-auto mt-12 lg:mt-0">
                        <div className="relative group">
                            <svg className="absolute -top-12 -left-12 w-24 h-24 text-[#D4FF00] animate-wiggle opacity-80 z-20" viewBox="0 0 100 100">
                                <path d="M10,50 Q30,10 50,50 T90,50" fill="none" stroke="currentColor" strokeWidth="2" />
                                <path d="M85,45 L90,50 L85,55" fill="none" stroke="currentColor" strokeWidth="2" />
                            </svg>

                            <svg className="absolute -bottom-8 -right-8 w-16 h-16 text-[#0A0A0A] animate-float opacity-60 z-20" viewBox="0 0 100 100">
                                <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                                <text x="50" y="55" textAnchor="middle" fontSize="14" fill="currentColor" fontFamily="monospace">IMG_01</text>
                            </svg>

                            {/* Solid Frame Layer */}
                            <div className="absolute top-4 right-4 w-full h-full border-2 border-[#0A0A0A] z-0"></div>

                            {/* Image Container - Full Color */}
                            <div className="relative z-10 overflow-hidden bg-white hover:shadow-[0_0_30px_rgba(212,255,0,0.3)] transition-all duration-700 ease-out">
                                <Image
                                    src="/profile-photo.jpg"
                                    alt={personalInfo.name}
                                    width={500}
                                    height={600}
                                    className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                                    priority
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Status Badge - White/Black/Neon */}
                            <div className="absolute -bottom-6 -left-6 bg-white border border-[#0A0A0A] px-6 py-3 shadow-[4px_4px_0px_#0A0A0A] z-20 flex items-center gap-3">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FF00] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4FF00] border border-[#0A0A0A]"></span>
                                </span>
                                <span className="text-xs font-mono uppercase tracking-wider text-[#0A0A0A]">Open to Work</span>
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
