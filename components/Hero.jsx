'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiGithub, FiLinkedin, FiCode, FiMail, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '@/lib/content-config';

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
        <section ref={heroRef} className="min-h-screen flex items-center relative overflow-hidden bg-[#FAFAF9] dotted-bg pt-32 md:pt-20" id="home">
            {/* Parallax floating elements */}
            <div
                className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#D4C5B9] opacity-10 blur-3xl transition-transform duration-300"
                style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
            ></div>
            <div
                className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-[#E8DFD8] opacity-10 blur-3xl transition-transform duration-500"
                style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
            ></div>

            {/* Playful Doodles & Annotations - SVG */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                {/* Arrow pointing to photo */}
                <path
                    d="M 250 350 Q 300 320, 350 340"
                    stroke="#D4C5B9"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    className="draw-line opacity-60 hidden lg:block"
                />
                <polygon points="350,340 345,335 348,342 340,342" fill="#D4C5B9" className="opacity-60 hidden lg:block" />

                {/* Curly brace */}
                <path
                    d="M 120 450 Q 100 500, 120 550"
                    stroke="#D4C5B9"
                    strokeWidth="2"
                    fill="none"
                    className="float opacity-40"
                />

                {/* Underline doodles */}
                <path
                    d="M 100 650 Q 180 660, 260 650"
                    stroke="#0A0A0A"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    className="opacity-20"
                />

                {/* Stars/sparkles around photo */}
                <g className="wiggle">
                    <path d="M 500 280 l 5 15 l 15 5 l -15 5 l -5 15 l -5 -15 l -15 -5 l 15 -5 z"
                        fill="#D4C5B9" className="opacity-40" />
                </g>
                <g className="float" style={{ animationDelay: '1s' }}>
                    <path d="M 600 450 l 4 12 l 12 4 l -12 4 l -4 12 l -4 -12 l -12 -4 l 12 -4 z"
                        fill="#D4C5B9" className="opacity-30" />
                </g>
                <g className="float" style={{ animationDelay: '2s' }}>
                    <path d="M 550 220 l 3 9 l 9 3 l -9 3 l -3 9 l -3 -9 l -9 -3 l 9 -3 z"
                        fill="#0A0A0A" className="opacity-20" />
                </g>
            </svg>

            {/* Code annotation near photo - top right */}
            <div className="absolute top-24 right-32 hidden xl:block scroll-reveal-right z-10">
                <div className="relative">
                    <div className="px-4 py-2 bg-white/90 backdrop-blur-sm border-2 border-[#D4C5B9] rounded-lg
            font-mono text-xs text-[#6B6B6B] rotate-2 shadow-md">
                        <div className="text-[#0A0A0A] font-semibold mb-1">{'// Engineer'}</div>
                        <div>passion = <span className="text-[#D4C5B9]">&quot;code&quot;</span>;</div>
                    </div>
                    {/* Hand-drawn arrow */}
                    <svg className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16">
                        <path d="M 8 2 Q 10 20, 8 30" stroke="#D4C5B9" strokeWidth="2" fill="none" strokeLinecap="round" />
                    </svg>
                </div>
            </div>

            {/* Dimension annotation near photo */}
            <div className="absolute top-72 right-24 hidden lg:block scroll-reveal-right z-10">
                <div className="flex items-center gap-2">
                    <div className="w-12 h-px bg-[#D4C5B9]"></div>
                    <span className="text-xs font-mono text-[#9CA3AF]">400px</span>
                </div>
            </div>

            {/* Metric annotation - bottom left of photo */}
            <div className="absolute bottom-40 left-32 hidden lg:block scroll-reveal-left z-10">
                <div className="px-3 py-2 bg-[#0A0A0A] text-white rounded-full text-xs font-mono -rotate-6
          border-2 border-[#D4C5B9] shadow-lg">
                    uptime: 99.9%
                </div>
            </div>

            <div className="container-custom w-full relative z-10 py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
                    {/* Left: Text Content */}
                    <div>
                        {/* Section marker */}
                        <div className="flex items-center gap-4 mb-8 scroll-reveal-left">
                            <span className="text-xs font-mono text-[#9CA3AF] tracking-wider">01 / 05</span>
                            <div className="h-px w-20 bg-gradient-to-r from-[#D4C5B9] to-transparent"></div>
                        </div>

                        {/* LARGE NAME */}
                        <h1 className="scroll-reveal stagger-1 mb-6 relative">
                            <span className="block text-5xl sm:text-6xl md:text-7xl font-light
                text-[#0A0A0A] leading-[0.9] tracking-tight
                hover:tracking-normal transition-all duration-500"
                                style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                {personalInfo.name.split(' ')[0]}
                            </span>
                            <span className="block text-5xl sm:text-6xl md:text-7xl font-light
                text-[#0A0A0A] leading-[0.9] tracking-tight
                hover:tracking-normal transition-all duration-500"
                                style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                {personalInfo.name.split(' ')[1]}
                            </span>
                        </h1>

                        {/* Title with animated underline */}
                        <div className="scroll-reveal stagger-2 mb-6">
                            <div className="inline-block group">
                                <p className="text-2xl sm:text-3xl font-normal text-[#1A1A1A] mb-3"
                                    style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                    Software Engineer
                                </p>
                                <div className="h-0.5 bg-[#D4C5B9] rounded-full transform origin-left
                  group-hover:scale-x-110 transition-transform duration-500"></div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-base md:text-lg text-[#6B6B6B] mb-8 leading-relaxed scroll-reveal stagger-3">
                            Building <span className="inline-block hover:text-[#0A0A0A] transition-colors cursor-default">production</span>{' '}
                            <span className="inline-block hover:text-[#0A0A0A] transition-colors cursor-default">systems</span> across{' '}
                            <span className="inline-block hover:text-[#0A0A0A] transition-colors cursor-default">full-stack</span>{' '}
                            <span className="inline-block hover:text-[#0A0A0A] transition-colors cursor-default">development</span>,{' '}
                            <span className="inline-block hover:text-[#0A0A0A] transition-colors cursor-default">data</span>{' '}
                            <span className="inline-block hover:text-[#0A0A0A] transition-colors cursor-default">engineering</span>, and{' '}
                            <span className="inline-block hover:text-[#0A0A0A] transition-colors cursor-default">ML/LLM</span>{' '}
                            <span className="inline-block hover:text-[#0A0A0A] transition-colors cursor-default">infrastructure</span>.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 mb-10 scroll-reveal stagger-3">
                            <Link
                                href="/chat"
                                className="px-8 py-3.5 bg-[#0A0A0A] hover:bg-[#1A1A1A] text-white rounded-full
                                    transition-all duration-300 flex items-center gap-2 text-sm font-medium
                                    hover:scale-105 hover:shadow-xl"
                            >
                                <span>Let's connect</span>
                            </Link>
                            <Link
                                href="/resume"
                                className="px-8 py-3.5 border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white
                                    text-[#0A0A0A] rounded-full transition-all duration-300 flex items-center gap-2 text-sm font-medium
                                    hover:scale-105 hover:shadow-xl"
                            >
                                <span>Resume</span>
                            </Link>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 scroll-reveal stagger-4">
                            {personalInfo.social.linkedin && (
                                <a
                                    href={personalInfo.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full border-2 border-[#E5E0DB] hover:border-[#0A0A0A]
                                        flex items-center justify-center text-[#6B6B6B] hover:text-[#0A0A0A]
                                        transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                    aria-label="LinkedIn"
                                >
                                    <FiLinkedin className="text-xl" />
                                </a>
                            )}
                            {personalInfo.social.github && (
                                <a
                                    href={personalInfo.social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full border-2 border-[#E5E0DB] hover:border-[#0A0A0A]
                                        flex items-center justify-center text-[#6B6B6B] hover:text-[#0A0A0A]
                                        transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                    aria-label="GitHub"
                                >
                                    <FiGithub className="text-xl" />
                                </a>
                            )}
                            {personalInfo.social.leetcode && (
                                <a
                                    href={personalInfo.social.leetcode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full border-2 border-[#E5E0DB] hover:border-[#0A0A0A]
                                        flex items-center justify-center text-[#6B6B6B] hover:text-[#0A0A0A]
                                        transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                    aria-label="LeetCode"
                                >
                                    <FiCode className="text-xl" />
                                </a>
                            )}
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="w-12 h-12 rounded-full border-2 border-[#E5E0DB] hover:border-[#0A0A0A]
                                    flex items-center justify-center text-[#6B6B6B] hover:text-[#0A0A0A]
                                    transition-all duration-300 hover:scale-110 hover:shadow-lg"
                                aria-label="Email"
                            >
                                <FiMail className="text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Right: Photo with Annotations - BLENDED WITH BACKGROUND */}
                    <div className="scroll-reveal stagger-2 relative max-w-[400px] mt-12 md:mt-0">
                        {/* Photo Container - Blended with cream background */}
                        <div className="relative group">
                            {/* Cream background blob to blend photo */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#F5F1ED] via-[#E8DFD8] to-[#D4C5B9] 
                rounded-3xl transform scale-105 blur-2xl opacity-40"></div>

                            {/* Main photo with subtle border - BLENDED */}
                            <div className="relative overflow-hidden rounded-3xl 
                bg-gradient-to-br from-[#F5F1ED]/50 to-[#E8DFD8]/50 p-2
                group-hover:scale-[1.02] transition-all duration-500 shadow-2xl">
                                <div className="relative overflow-hidden rounded-2xl">
                                    <Image
                                        src="/profile-photo.jpg"
                                        alt={personalInfo.name}
                                        width={400}
                                        height={400}
                                        className="w-full h-auto object-cover"
                                        priority
                                    />

                                    {/* Cream overlay to blend with background */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#F5F1ED]/30 via-transparent to-transparent"></div>

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                        <div className="text-white">
                                            <p className="font-mono text-xs mb-1">{'// Available for opportunities'}</p>
                                            <p className="text-sm">Let's build something amazing</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating badge - top left */}
                            <div className="absolute -top-4 -left-4 bg-[#0A0A0A] text-white px-4 py-2 rounded-full
                text-xs font-mono rotate-[-6deg] shadow-lg border-2 border-[#D4C5B9] wiggle z-10">
                                👋 Hey there!
                            </div>

                            {/* Tech badge - bottom right */}
                            <div className="absolute -bottom-4 -right-4 bg-white px-4 py-2 rounded-full
                text-xs font-medium rotate-[6deg] shadow-lg border-2 border-[#E5E0DB] float z-10">
                                💻 Software Engineer
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 scroll-reveal stagger-5">
                    <div className="flex flex-col items-center gap-2 text-[#9CA3AF] float">
                        <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#D4C5B9] to-transparent"></div>
                        <FiArrowDown className="text-sm animate-bounce" />
                    </div>
                </div>
            </div>
        </section>
    );
}
