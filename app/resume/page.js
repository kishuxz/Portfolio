'use client';

import Link from 'next/link';
import { FiArrowLeft, FiCode, FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { experiences, personalInfo, skillCategories } from '@/lib/content-config';
import { withBasePath } from '@/lib/runtime-config';

const resumePdfUrl = withBasePath('/KISHORE%20KUMAR%20RAMKUMAR%20SDE%202026.pdf');

export default function ResumePage() {
    return (
        <div className="min-h-screen">
            <section className="section-hero bg-black text-white">
                <div className="container-custom">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
                    >
                        <FiArrowLeft />
                        Back to Home
                    </Link>

                    <h1 className="heading-xxl mb-8">Resume</h1>

                    <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl">
                        Software Engineer · ML & AI Systems · Data Engineering
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href={resumePdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                        >
                            <FiDownload />
                            View PDF
                        </a>
                        <a
                            href={resumePdfUrl}
                            download="Kishore_Kumar_Ramkumar_Resume_2026.pdf"
                            className="px-6 md:px-8 py-3 md:py-4 border-2 border-white bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                        >
                            <FiDownload />
                            Download PDF
                        </a>
                    </div>
                </div>
            </section>

            <section className="section-white border-b border-gray-200">
                <div className="container-custom max-w-4xl">
                    <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                        <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                            <FiMail />
                            {personalInfo.email}
                        </a>
                        <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                            <FiGithub />
                            github.com/kishuxz
                        </a>
                        <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                            <FiLinkedin />
                            linkedin.com/in/kishore-kumar-ramkumar
                        </a>
                        <a href={personalInfo.social.leetcode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                            <FiCode />
                            leetcode.com/u/Kishore_0123
                        </a>
                    </div>
                </div>
            </section>

            <section className="section section-white">
                <div className="container-custom max-w-4xl">
                    <h2 className="heading-lg mb-12">Experience</h2>

                    <div className="space-y-12">
                        {experiences.map((exp) => (
                            <div key={`${exp.company}-${exp.period}`}>
                                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3 gap-2">
                                    <h3 className="text-2xl font-medium" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                        {exp.role}
                                    </h3>
                                    <span className="text-gray-500">{exp.period}</span>
                                </div>
                                <p className="text-lg text-gray-700 mb-2">{exp.company} · {exp.location}</p>
                                {exp.advisor && <p className="text-sm text-gray-500 mb-4">{exp.advisor}</p>}
                                <p className="text-gray-700 italic mb-4">{exp.description}</p>
                                <ul className="space-y-2 text-gray-600">
                                    {exp.achievements.map((achievement) => (
                                        <li key={achievement} className="flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0"></span>
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-black">
                <div className="container-custom max-w-4xl">
                    <h2 className="heading-lg mb-12">Education</h2>

                    <div className="space-y-8">
                        <div>
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3 gap-2">
                                <h3 className="text-2xl font-medium" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                    MS Data Science
                                </h3>
                                <span className="text-gray-400">Aug 2024 - May 2026</span>
                            </div>
                            <p className="text-lg text-gray-300">Indiana University Bloomington · GPA 3.5/4.0</p>
                            <p className="text-gray-400 mt-2">Focus: Machine Learning, Distributed Systems, NLP</p>
                        </div>

                        <div>
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3 gap-2">
                                <h3 className="text-2xl font-medium" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                    B.Tech Computer Science (AI & ML)
                                </h3>
                                <span className="text-gray-400">Jul 2021 - Jun 2024</span>
                            </div>
                            <p className="text-lg text-gray-300">Sri Ramachandra Institute, Chennai · GPA 8.45/10</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-white">
                <div className="container-custom max-w-4xl">
                    <h2 className="heading-lg mb-12">Technical Skills</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {skillCategories.map((category) => (
                            <div key={category.name}>
                                <h3 className="text-xl font-medium mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                    {category.name}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {category.skills.join(', ')}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section-black">
                <div className="container-custom max-w-3xl mx-auto text-center">
                    <h2 className="heading-lg mb-6">Interested in working together?</h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-12">
                        Kishore is graduating in May 2026 and is open to ML, SDE, Data Engineering, LLM, and Agentic Engineering roles.
                    </p>

                    <Link
                        href="/contact"
                        className="px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                    >
                        <FiMail />
                        Contact Me
                    </Link>
                </div>
            </section>
        </div>
    );
}
