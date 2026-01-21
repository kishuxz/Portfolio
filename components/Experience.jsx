import { personalInfo } from '@/lib/content-config';

export default function Experience() {
    return (
        <section className="section section-black">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="flex items-center gap-4 mb-6 justify-center">
                        <span className="text-xs font-mono text-gray-500">06 / 06</span>
                    </div>
                    <h2 className="heading-lg mb-6">
                        Experience & Education
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                        {personalInfo.education.degree} — {personalInfo.education.school}
                    </p>
                    <p className="text-base text-gray-500 mt-4">
                        {personalInfo.education.focus}
                    </p>
                    <p className="text-sm text-gray-600 mt-8">
                        For detailed work history, view my resume.
                    </p>
                </div>
            </div>
        </section>
    );
}
