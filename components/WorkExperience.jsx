'use client';

import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

export default function WorkExperience() {
    const experiences = [
        {
            company: 'Tech Company Name',
            role: 'Senior Full-Stack Engineer',
            location: 'Remote',
            period: '2023 - Present',
            description: 'Leading development of production ML systems and data infrastructure',
            achievements: [
                'Built production RAG chatbot processing 10K+ queries/month with 92% accuracy using LangChain and Supabase',
                'Designed scalable ETL pipeline handling 1M+ records daily with 99.9% uptime using Apache Airflow',
                'Led frontend migration to Next.js 14, improving Core Web Vitals by 40%',
                'Architected microservices infrastructure supporting 100K+ concurrent users'
            ],
            tech: ['React', 'Next.js', 'Python', 'PostgreSQL', 'AWS', 'Docker']
        },
        {
            company: 'Previous Company',
            role: 'Software Engineer',
            location: 'City, State',
            period: '2021 - 2023',
            description: 'Full-stack development focused on real-time systems and IoT platforms',
            achievements: [
                'Developed real-time analytics dashboard processing 10K events/second using WebSockets and D3.js',
                'Implemented API platform handling 1M+ IoT device connections across 5 countries',
                'Reduced deployment time from 2 hours to 15 minutes through CI/CD optimization',
                'Mentored 3 junior engineers on React best practices and system design'
            ],
            tech: ['React', 'Node.js', 'MongoDB', 'Redis', 'Docker', 'Kubernetes']
        },
        {
            company: 'Startup Company',
            role: 'Software Developer',
            location: 'City, State',
            period: '2019 - 2021',
            description: 'Early-stage development building foundational systems and MVPs',
            achievements: [
                'Built MVP for SaaS platform serving 1K+ users in first 3 months',
                'Implemented authentication system supporting OAuth, JWT, and SSO',
                'Optimized database queries reducing response time from 2s to 200ms',
                'Developed RESTful APIs consumed by web and mobile applications'
            ],
            tech: ['Python', 'Django', 'PostgreSQL', 'AWS', 'Vue.js']
        }
    ];

    return (
        <section className="section relative overflow-hidden" id="experience">
            {/* Background Gradient Mesh */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-[#E8DFD8]/40 to-transparent blur-[120px] pointer-events-none"></div>

            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="mb-20 md:mb-24 scroll-reveal">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs font-mono text-neutral-500 tracking-wider">03 / 05</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-[#D4C5B9] to-transparent"></div>
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-neutral-900"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        Experience
                    </h2>
                    <p className="text-lg text-neutral-600 max-w-2xl">
                        Building production-grade systems and leading engineering teams.
                    </p>
                </div>

                {/* Timeline - All Experiences Visible */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        {/* Vertical timeline line - Gradient */}
                        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#0A0A0A] via-[#D4C5B9] to-transparent"></div>

                        {/* Experience Cards */}
                        <div className="space-y-16 md:space-y-24">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative pl-8 md:pl-24 group scroll-reveal stagger-1">
                                    {/* Timeline dot - Pulsing effect */}
                                    <div className="absolute left-0 md:left-8 top-8 -translate-x-1/2 ">
                                        <div className="w-4 h-4 rounded-full bg-[#0A0A0A] ring-4 ring-[#F5F1ED] group-hover:scale-125 transition-transform duration-300 relative z-20"></div>
                                        {index === 0 && <div className="absolute top-0 left-0 w-4 h-4 bg-[#0A0A0A] rounded-full animate-ping opacity-20"></div>}
                                    </div>

                                    {/* Experience Card - Glassmorphism */}
                                    <div className="glass-card rounded-2xl p-8 md:p-10 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group border-l-4 border-l-transparent hover:border-l-[#0A0A0A]">
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                                            <div>
                                                <h3 className="text-2xl md:text-3xl font-medium text-neutral-900 mb-2 group-hover:text-gradient-gold transition-all">
                                                    {exp.role}
                                                </h3>
                                                <div className="text-xl text-[#5C4033] font-medium mb-2">{exp.company}</div>
                                                <div className="flex items-center gap-4 text-sm font-mono text-neutral-500">
                                                    <span>{exp.period}</span>
                                                    <span>•</span>
                                                    <span>{exp.location}</span>
                                                </div>
                                            </div>

                                            {/* Tech Stack Mini-Tags */}
                                            <div className="flex flex-wrap gap-2 lg:justify-end lg:max-w-xs">
                                                {exp.tech.slice(0, 4).map((t, i) => (
                                                    <span key={i} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-neutral-100 text-neutral-600 border border-neutral-200">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <p className="text-lg text-neutral-700 mb-8 italic border-l-2 border-[#D4C5B9] pl-4">
                                            &quot;{exp.description}&quot;
                                        </p>

                                        <ul className="space-y-4 mb-8">
                                            {exp.achievements.map((achievement, idx) => (
                                                <li key={idx} className="flex items-start gap-4">
                                                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#D4C5B9] flex-shrink-0"></span>
                                                    <span className="text-neutral-700 leading-relaxed group-hover:text-neutral-900 transition-colors">
                                                        {achievement}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
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
