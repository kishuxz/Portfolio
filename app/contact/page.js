'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiSend, FiMail, FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Simulate form submission
        setTimeout(() => {
            setStatus('sent');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        }, 1000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

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
                        Let's Connect
                    </h1>

                    <p className="text-2xl md:text-3xl text-gray-300 mb-4 max-w-3xl">
                        Interested in discussing new opportunities, challenging projects, or innovative ideas?
                    </p>
                    <p className="text-lg text-gray-400 max-w-2xl">
                        I'm always open to interesting conversations.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info - White */}
            <section className="section section-white">
                <div className="container-custom max-w-5xl">
                    <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16">
                        {/* Form */}
                        <div>
                            <h2 className="heading-lg mb-8">Send a Message</h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors text-base"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors text-base"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-black focus:outline-none transition-colors text-base resize-none"
                                        placeholder="Tell me about your project or opportunity..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-colors inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'sending' ? (
                                        <>Sending...</>
                                    ) : status === 'sent' ? (
                                        <>Message Sent! ✓</>
                                    ) : (
                                        <>
                                            <FiSend />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h2 className="heading-lg mb-8">Other Ways to Reach Me</h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                        Email
                                    </h3>
                                    <a
                                        href="mailto:your.email@example.com"
                                        className="text-gray-600 hover:text-black transition-colors flex items-center gap-2"
                                    >
                                        <FiMail />
                                        your.email@example.com
                                    </a>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                        Social
                                    </h3>
                                    <div className="space-y-3">
                                        <a
                                            href="https://github.com/yourusername"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-black transition-colors flex items-center gap-2"
                                        >
                                            <FiGithub />
                                            GitHub
                                        </a>
                                        <a
                                            href="https://linkedin.com/in/yourusername"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-black transition-colors flex items-center gap-2"
                                        >
                                            <FiLinkedin />
                                            LinkedIn
                                        </a>
                                        <a
                                            href="https://leetcode.com/yourusername"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-black transition-colors flex items-center gap-2"
                                        >
                                            <FiCode />
                                            LeetCode
                                        </a>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-gray-200">
                                    <h3 className="text-lg font-medium mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                        Availability
                                    </h3>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                                        <span className="text-gray-600">Available for new opportunities</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ - Black */}
            <section className="section section-black">
                <div className="container-custom max-w-4xl">
                    <h2 className="heading-lg mb-12 text-center">Frequently Asked Questions</h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-medium mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                What type of projects do you work on?
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                I specialize in full-stack web applications, data engineering pipelines, and ML/LLM systems.
                                I'm particularly interested in projects involving RAG systems, production AI infrastructure,
                                and scalable data processing.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                Are you available for freelance work?
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Yes! I'm  open to freelance projects, especially those that involve interesting technical
                                challenges or innovative applications of AI/ML technologies.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium mb-3" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                                What's your typical response time?
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                I aim to respond to all inquiries within 24-48 hours. For urgent matters, feel free to
                                mention that in your message.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
