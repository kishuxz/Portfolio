export default function Highlights() {
    const highlights = [
        {
            title: 'Best FADS Research Showcase Award',
            description: 'Recognized for research quality, methodology, and real-world relevance in data science applications.',
        },
        {
            title: 'Open-Source Contribution',
            description: 'Merged performance optimization to ML library through collaborative review process with maintainers.',
        },
    ];

    return (
        <section className="container-custom section">
            <h2 className="heading-md mb-12">
                Highlights
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
                {highlights.map((highlight, index) => (
                    <div
                        key={index}
                        className="card group cursor-pointer"
                    >
                        <h3 className="text-xl font-semibold text-[rgb(var(--text-primary))] mb-3">
                            {highlight.title}
                        </h3>
                        <p className="text-secondary leading-relaxed">
                            {highlight.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
