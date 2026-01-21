import { FiBriefcase, FiCalendar } from 'react-icons/fi';

export default function StartupExperience() {
    const experiences = [
        {
            title: 'Real-time Analytics Dashboard',
            company: 'SaaS Startup',
            description: 'Built React dashboard processing 10K+ events/second with D3.js visualizations',
            tech: ['React', 'WebSockets', 'D3.js'],
        },
        {
            title: 'API Platform for IoT',
            company: 'Hardware Startup',
            description: 'Designed RESTful API handling 1M+ device connections across 5 countries',
            tech: ['Node.js', 'Redis', 'PostgreSQL'],
        },
        {
            title: 'ML Model Deployment Pipeline',
            company: 'AI Consulting',
            description: 'Automated ML model deployment reducing ship time from weeks to hours',
            tech: ['Python', 'Docker', 'Kubernetes'],
        },
    ];

    return (
        <section className="section section-black">
            <div className="container-custom">
                <div className="flex items-center gap-4 mb-12 md:mb-16">
                    <span className="text-xs font-mono text-gray-500">04 / 06</span>
                    <h2 className="heading-lg">
                        Startup & Freelance
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all"
                        >
                            {/* Company */}
                            <div className="flex items-center gap-2 mb-4">
                                <FiBriefcase className="text-gray-500 text-sm" />
                                <span className="label-text text-gray-400 text-xs">
                                    {exp.company}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg md:text-xl font-medium mb-3"
                                style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                {exp.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed">
                                {exp.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-900 text-gray-300 border border-gray-800"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
