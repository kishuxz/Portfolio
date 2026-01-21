import { personalInfo } from '@/lib/content-config';

export default function ProofBar() {
    return (
        <section className="section-white border-y border-gray-200 py-16 md:py-20">
            <div className="container-custom">
                <p className="label-text text-gray-500 mb-10 text-center text-xs">TECHNOLOGIES & TOOLS</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40 grayscale">
                    {personalInfo.trustedBy.map((tech, index) => (
                        <div key={index} className="text-xl md:text-2xl font-bold text-gray-600">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
