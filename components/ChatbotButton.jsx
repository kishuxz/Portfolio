'use client';

import { useState } from 'react';
import { FiMessageCircle, FiX, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo } from '@/lib/content-config';

export default function ChatbotButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Floating Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#0A0A0A] text-white rounded-full
          shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center
          group hover:shadow-black/50"
                aria-label="Open chat"
            >
                {isOpen ? (
                    <FiX className="text-2xl" />
                ) : (
                    <FiMessageCircle className="text-2xl group-hover:animate-bounce" />
                )}
            </button>

            {/* Chat Panel */}
            {isOpen && (
                <div className="fixed bottom-28 right-8 z-50 w-80 bg-white rounded-2xl shadow-2xl border-2 border-[#E5E0DB]
          overflow-hidden animate-fadeIn">
                    {/* Header */}
                    <div className="bg-[#0A0A0A] text-white p-4">
                        <h3 className="text-lg font-light" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                            Get in Touch
                        </h3>
                        <p className="text-sm text-[#9CA3AF] mt-1">Let's connect and chat!</p>
                    </div>

                    {/* Content */}
                    <div className="p-6 space-y-4">
                        <p className="text-sm text-[#6B6B6B]">
                            I'm always open to discussing new opportunities, collaborations, or just chatting about tech!
                        </p>

                        {/* Quick Action Buttons */}
                        <div className="space-y-3">
                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="flex items-center gap-3 p-3 rounded-lg border-2 border-[#E5E5E5]
                  hover:border-[#0A0A0A] hover:bg-gray-50 transition-all duration-200 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center
                  text-white group-hover:scale-110 transition-transform">
                                    <FiMail />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-[#0A0A0A]">Send Email</p>
                                    <p className="text-xs text-[#9CA3AF]">Quick response</p>
                                </div>
                            </a>

                            {personalInfo.social.linkedin && (
                                <a
                                    href={personalInfo.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 rounded-lg border-2 border-[#E5E5E5]
                    hover:border-[#0A0A0A] hover:bg-gray-50 transition-all duration-200 group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center
                    text-white group-hover:scale-110 transition-transform">
                                        <FiLinkedin />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-[#0A0A0A]">LinkedIn</p>
                                        <p className="text-xs text-[#9CA3AF]">Professional network</p>
                                    </div>
                                </a>
                            )}

                            {personalInfo.social.github && (
                                <a
                                    href={personalInfo.social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-3 rounded-lg border-2 border-[#E5E5E5]
                    hover:border-[#0A0A0A] hover:bg-gray-50 transition-all duration-200 group"
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#0A0A0A] flex items-center justify-center
                    text-white group-hover:scale-110 transition-transform">
                                        <FiGithub />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm font-medium text-[#0A0A0A]">GitHub</p>
                                        <p className="text-xs text-[#9CA3AF]">Check my code</p>
                                    </div>
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-3 bg-gray-50 border-t border-[#E5E5E5]">
                        <p className="text-xs text-[#9CA3AF] text-center">
                            Usually responds within 24 hours
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
