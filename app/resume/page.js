'use client';

import Link from 'next/link';
import { FiDownload, FiArrowLeft, FiMail, FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';

export default function ResumePage() {
    return (
        <div className="min-h-screen">
            {/* Header - Black */}
            <section className="section-hero bg-black text-white">
                <div className="container-custom">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
                    >
                        <FiArrowLeft />
                        Back to Home
                    </Link>

                    <h1 className="heading-xxl mb-8">
                        Resume
                    </h1>

                    <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl">
                        Full-Stack Developer · Data Engineer · ML/LLM Systems
                    </p>

                    <a
                        href="/resume.pdf"
                        download
                        className="px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                    >
                        <FiDownload />
                        Download PDF
                    </a>
                </div>
            </section>

            {/* Contact Info - White */}
            <section className="section-white border-b border-gray-200">
                <div className="container-custom max-w-4xl">
                    <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                        <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                            <FiMail />
                            your.email@example.com
                        </a>
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                            <FiGithub />
                            github.com/yourusername
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                            <FiLinkedin />
                            linkedin.com/in/yourusername
                        </a>
                        <a href="https://leetcode.com/yourusername" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
                            <FiCode />
                            leetcode.com/yourusername
                        </a>
                    </div>
                </div>
            </section>

            {/* Experience - White */}
            <section className="section section-white">
                <div className="container-custom max-w-4xl">
                    <h2 className="heading-lg mb-12">Experience</h2>

                    <div className="space-y-12">
                        {/* Job 1 */}
                        <div>
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3 gap-2">
                                <h3 className="text-2xl font-medium" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                    Full-Stack Engineer
                                </h3>
                                <span className="text-gray-500">2023 - Present</span>
                            </div>
                            <p className="text-lg text-gray-700 mb-4">Company Name · Remote</p>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0"></span>
                                    <span>Built production RAG chatbot processing 10K+ queries/month with 92% accuracy</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0"></span>
                                    <span>Designed scalable ETL pipeline handling 1M+ records daily with 99.9% uptime</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0"></span>
                                    <span>Led frontend migration to Next.js 14, improving performance by 40%</span>
                                </li>
                            </ul>
                        </div>

                        {/* Job 2 */}
                        <div>
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3 gap-2">
                                <h3 className="text-2xl font-medium" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                    Software Engineer
                                </h3>
                                <span className="text-gray-500">2021 - 2023</span>
                            </div>
                            <p className="text-lg text-gray-700 mb-4">Previous Company · City, State</p>
                            <ul className="space-y-2 text-gray-600">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0"></span>
                                    <span>Developed React dashboards for real-time analytics (10K events/second)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0"></span>
                                    <span>Implemented API platform supporting 1M+ IoT device connections</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education - Black */}
            <section className="section section-black">
                <div className="container-custom max-w-4xl">
                    <h2 className="heading-lg mb-12">Education</h2>

                    <div className="space-y-8">
                        <div>
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3 gap-2">
                                <h3 className="text-2xl font-medium" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                    MS Data Science
                                </h3>
                                <span className="text-gray-400">2024</span>
                            </div>
                            <p className="text-lg text-gray-300">Indiana University · Bloomington, IN</p>
                            <p className="text-gray-400 mt-2">Focus: Machine Learning, Distributed Systems, NLP</p>
                        </div>

                        <div>
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3 gap-2">
                                <h3 className="text-2xl font-medium" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                    BS Computer Science
                                </h3>
                                <span className="text-gray-400">2020</span>
                            </div>
                            <p className="text-lg text-gray-300">University Name · City, State</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills - White */}
            <section className="section section-white">
                <div className="container-custom max-w-4xl">
                    <h2 className="heading-lg mb-12">Technical Skills</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-medium mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                Languages & Frameworks
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                JavaScript, TypeScript, Python, React, Next.js, Node.js, Django, Flask
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                Data & ML
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                LangChain, RAG Systems, Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                Databases & Tools
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                PostgreSQL, MongoDB, Redis, Supabase, Airflow, Docker, Kubernetes
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium mb-4" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                Cloud & Infrastructure
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                AWS (EC2, S3, Lambda), Vercel, GitHub Actions, CI/CD
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA - Black */}
            <section className="section section-black">
                <div className="container-custom max-w-3xl mx-auto text-center">
                    <h2 className="heading-lg mb-6">
                        Interested in working together?
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-12">
                        Let's discuss how I can contribute to your team.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                        >
                            <FiMail />
                            Contact Me
                        </Link>
                        <Link
                            href="/"
                            className="px-6 md:px-8 py-3 md:py-4 border-2 border-white rounded-full font-medium hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                        >
                            <FiArrowLeft />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
