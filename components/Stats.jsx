import { personalInfo } from '@/lib/content-config';

export default function Stats() {
    const stats = [
        { number: personalInfo.stats.experience, label: 'Years of Experience' },
        { number: personalInfo.stats.projects, label: 'Projects Delivered' },
        { number: personalInfo.stats.companies, label: 'Companies Worked With' },
    ];

    return (
        <section className="section-white">
            <div className="container-custom">
                <div className="grid md:grid-cols-3 gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div
                                className="text-6xl md:text-7xl font-medium mb-3"
                                style={{ fontFamily: 'var(--font-space-grotesk)' }}
                            >
                                {stat.number}
                            </div>
                            <p className="text-lg text-gray-600">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
