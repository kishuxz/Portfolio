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
        <section className="section bg-[#F5F1ED] relative overflow-hidden" id="experience">
            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="mb-16 md:mb-20">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-xs font-mono text-[#9CA3AF] tracking-wider">03 / 05</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-[#D4C5B9] to-transparent"></div>
                    </div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-4 text-[#0A0A0A]"
                        style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                        Work Experience
                    </h2>
                    <p className="text-lg text-[#6B6B6B] max-w-2xl">
                        {experiences.length} companies · Building production systems since 2019
                    </p>
                </div>

                {/* Timeline - All Experiences Visible */}
                <div className="max-w-5xl mx-auto">
                    <div className="relative">
                        {/* Vertical timeline line */}
                        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[#D4C5B9]"></div>

                        {/* Experience Cards */}
                        <div className="space-y-12 md:space-y-16">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative pl-8 md:pl-20 group">
                                    {/* Timeline dot */}
                                    <div className="absolute left-0 md:left-8 top-6 -translate-x-1/2 
                    w-4 h-4 rounded-full bg-[#0A0A0A] border-4 border-[#F5F1ED]
                    group-hover:scale-125 transition-transform duration-300"></div>

                                    {/* Number badge */}
                                    <div className="absolute left-0 md:left-8 top-16 -translate-x-1/2 
                    w-10 h-10 rounded-lg bg-white border-2 border-[#D4C5B9]
                    flex items-center justify-center text-sm font-medium text-[#0A0A0A]
                    group-hover:bg-[#0A0A0A] group-hover:text-white group-hover:scale-110
                    transition-all duration-300">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>

                                    {/* Experience Card */}
                                    <div className="bg-white rounded-2xl border-2 border-[#E5E0DB] 
                    hover:border-[#D4C5B9] transition-all duration-500 overflow-hidden
                    hover:shadow-2xl hover:scale-[1.02]">
                                        {/* Accent line */}
                                        <div className="h-1 w-full bg-gradient-to-r from-[#D4C5B9] to-[#E8DFD8]"></div>

                                        <div className="p-6 md:p-8">
                                            {/* Header */}
                                            <div className="mb-6">
                                                <div className="flex items-start gap-4 mb-4">
                                                    <div className="w-12 h-12 rounded-xl bg-[#0A0A0A] 
                            flex items-center justify-center text-white text-xl font-light flex-shrink-0">
                                                        {exp.company[0]}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-xl md:text-2xl font-light text-[#0A0A0A] mb-2"
                                                            style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                                            {exp.role}
                                                        </h3>

                                                        <div className="flex flex-wrap gap-4 text-[#6B6B6B] text-sm mb-3">
                                                            <span className="flex items-center gap-2">
                                                                <FiBriefcase className="text-sm" />
                                                                {exp.company}
                                                            </span>
                                                            <span className="flex items-center gap-2">
                                                                <FiMapPin className="text-sm" />
                                                                {exp.location}
                                                            </span>
                                                            <span className="flex items-center gap-2">
                                                                <FiCalendar className="text-sm" />
                                                                {exp.period}
                                                            </span>
                                                        </div>

                                                        <p className="text-[#6B6B6B]">{exp.description}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Achievements */}
                                            <div className="mb-6">
                                                <h4 className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-4">
                                                    Key Achievements
                                                </h4>
                                                <ul className="space-y-3">
                                                    {exp.achievements.map((achievement, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-[#1A1A1A] text-sm md:text-base">
                                                            <span className="w-6 h-6 rounded-full border-2 border-[#D4C5B9] 
                                flex items-center justify-center text-[#6B6B6B] text-xs font-medium flex-shrink-0 mt-0.5
                                hover:bg-[#D4C5B9] hover:text-[#0A0A0A] transition-colors cursor-default">
                                                                {i + 1}
                                                            </span>
                                                            <span className="flex-1">{achievement}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Tech Stack */}
                                            <div>
                                                <h4 className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider mb-4">
                                                    Technologies
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.tech.map((tech, i) => (
                                                        <span
                                                            key={i}
                                                            className="px-3 py-1.5 rounded-full text-sm font-medium
                                border border-[#E5E0DB] text-[#1A1A1A] hover:border-[#D4C5B9] hover:bg-[#F5F1ED]
                                transition-colors duration-200"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
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
