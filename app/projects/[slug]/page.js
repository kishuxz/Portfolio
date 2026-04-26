import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '@/lib/content-config';

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }) {
    const project = projects.find((item) => item.slug === params.slug);

    if (!project) {
        return {};
    }

    return {
        title: `${project.title} | Kishore Kumar Ramkumar`,
        description: project.accomplished,
    };
}

export default function ProjectPage({ params }) {
    const project = projects.find((item) => item.slug === params.slug);

    if (!project) {
        notFound();
    }

    const primaryLink = project.github || project.website || project.live;

    return (
        <div className="min-h-screen">
            <section className="section-hero bg-black text-white">
                <div className="container-custom">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8"
                    >
                        <FiArrowLeft />
                        Back to Projects
                    </Link>

                    <span className="label-text mb-6 block text-gray-400">
                        {project.categories.join(' / ')}
                    </span>

                    <h1 className="heading-xxl mb-6">
                        {project.title}
                    </h1>

                    {project.subtitle && (
                        <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl">
                            {project.subtitle}
                        </p>
                    )}

                    <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-3xl">
                        {project.accomplished}
                    </p>

                    {primaryLink && (
                        <a
                            href={primaryLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                        >
                            {project.github ? <FiGithub /> : <FiExternalLink />}
                            {project.github ? 'View Code' : 'View Project'}
                        </a>
                    )}
                </div>
            </section>

            <article className="section section-white">
                <div className="container-custom max-w-4xl">
                    <div className="space-y-12">
                        <section>
                            <h2 className="heading-lg mb-6">Impact</h2>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                {project.measured}
                            </p>
                        </section>

                        <section>
                            <h2 className="heading-lg mb-6">Implementation</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {project.method}
                            </p>
                        </section>

                        <section>
                            <h2 className="heading-lg mb-6">Technologies</h2>
                            <div className="flex flex-wrap gap-3">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 text-sm font-medium rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </article>

            <section className="section-white py-20 border-t border-gray-200">
                <div className="container-custom text-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-black hover:text-gray-600 font-medium transition-colors text-lg group"
                    >
                        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        View All Projects
                    </Link>
                </div>
            </section>
        </div>
    );
}
