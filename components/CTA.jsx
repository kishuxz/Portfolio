import { FiMail, FiDownload } from 'react-icons/fi';
import { personalInfo } from '@/lib/content-config';

export default function CTA() {
    return (
        <section className="section section-white">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="heading-lg mb-6">
                        Let's build something impactful.
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
                        I'm interested in discussing new opportunities, challenging projects, and innovative ideas.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href={personalInfo.resumePdfUrl}
                            download
                            className="px-6 md:px-8 py-3 md:py-4 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                        >
                            <FiDownload />
                            Download Resume
                        </a>
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="px-6 md:px-8 py-3 md:py-4 border-2 border-black rounded-full font-medium hover:bg-black hover:text-white transition-colors inline-flex items-center gap-2 text-sm md:text-base"
                        >
                            <FiMail />
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
