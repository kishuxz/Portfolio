import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '@/lib/content-config';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="section-black py-12 md:py-16 border-t border-gray-900">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Left: Name & Copyright */}
                    <div className="text-center md:text-left">
                        <p className="text-lg font-medium mb-2" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                            {personalInfo.name}
                        </p>
                        <p className="text-sm text-gray-500">
                            © {currentYear} All rights reserved.
                        </p>
                    </div>

                    {/* Right: Social Links */}
                    <div className="flex items-center gap-6">
                        {personalInfo.social.github && (
                            <a
                                href={personalInfo.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#F26530] transition-colors"
                                aria-label="GitHub"
                            >
                                <FiGithub className="text-xl" />
                            </a>
                        )}
                        {personalInfo.social.linkedin && (
                            <a
                                href={personalInfo.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#F26530] transition-colors"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin className="text-xl" />
                            </a>
                        )}
                        <a
                            href={`mailto:${personalInfo.email}`}
                            className="text-gray-400 hover:text-[#F26530] transition-colors"
                            aria-label="Email"
                        >
                            <FiMail className="text-xl" />
                        </a>
                    </div>
                </div>

                {/* Bottom: Quick Links */}
                <div className="mt-8 pt-8 border-t border-gray-900">
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                        <a href="/" className="hover:text-white transition-colors">Home</a>
                        <a href="/projects" className="hover:text-white transition-colors">Projects</a>
                        <a href="/resume" className="hover:text-white transition-colors">Resume</a>
                        <a href="/contact" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
