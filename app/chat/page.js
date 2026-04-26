'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getChatApiUrl } from '@/lib/runtime-config';

export default function ChatPage() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: "Hi — I'm an assistant trained on Kishore's portfolio. Ask me about his multi-agent diarization pipeline, Parameter Golf submission, Stackply, or any of his data engineering and ML work."
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (!message.trim() || isLoading) return;

        const userMessage = message.trim();
        setMessage('');
        const nextMessages = [...messages, { role: 'user', content: userMessage }];

        // Add user message
        setMessages(nextMessages);
        setIsLoading(true);

        try {
            const response = await fetch(getChatApiUrl(), {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: userMessage, messages: nextMessages }),
            });

            const data = await response.json();

            if (data.answer) {
                setMessages(prev => [...prev, {
                    role: 'assistant',
                    content: data.answer,
                    citations: data.citations || [],
                    confidence: data.confidence || 'medium'
                }]);
            } else {
                setMessages(prev => [...prev, {
                    role: 'assistant',
                    content: 'Sorry, I encountered an error. Please try again.'
                }]);
            }
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, {
                role: 'assistant',
                content: 'Sorry, I couldn\'t process your question. Please try again.'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#F8F8F8]">
            {/* Floating Nav */}
            <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
                <div className="glass px-6 py-3 rounded-full shadow-lg backdrop-blur-xl border border-gray-200/50 flex items-center gap-6">
                    <Link href="/#home" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
                        Home
                    </Link>
                    <Link href="/#skills" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
                        Skills
                    </Link>
                    <Link href="/#experience" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
                        Experience
                    </Link>
                    <Link href="/#projects" className="text-sm font-medium text-gray-700 hover:text-black transition-colors">
                        Projects
                    </Link>
                    <Link href="/chat" className="text-sm font-medium text-[#0A0A0A]">
                        Chat AI
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#F26530]"></span>
                    </Link>
                    <Link href="/resume" className="text-sm font-medium px-4 py-1.5 bg-[#F26530] text-white rounded-full hover:bg-[#E55520] transition-colors">
                        Resume
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <div className="min-h-screen flex items-center justify-center px-6 pt-20">
                <div className="max-w-3xl w-full space-y-8">
                    {/* Heading */}
                    <div className="text-center space-y-4">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <span className="font-mono text-[#F26530] text-lg">$</span>
                            <div className="inline-block px-4 py-2 bg-[#F26530]">
                                <span className="text-sm font-mono text-white font-bold tracking-widest uppercase">AI CHAT</span>
                            </div>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-[#0A0A0A]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                            <span className="font-mono text-base text-[#F26530]">{'<'}</span>
                            Talk to Kishore&apos;s AI
                            <span className="font-mono text-base text-[#F26530]">{'/>'}</span>
                        </h1>
                        <p className="text-lg text-[#4A4A4A] border-l-4 border-[#F26530] pl-6 py-2 inline-block bg-[#FFF5F0]">
                            <span className="font-mono text-[#F26530] text-sm">{'//'}</span> Context-engineered assistant built with structured retrieval, intent classification, and dynamic context shaping.
                        </p>
                    </div>

                    {/* Beta Notice */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-4 rounded-lg">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-0.5">
                                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium text-blue-900 mb-1">
                                    🚧 Beta Feature – Active Development
                                </p>
                                <p className="text-xs text-blue-700 leading-relaxed">
                                    This AI assistant is currently in beta. While it&apos;s trained on my entire portfolio (projects, experience, skills), responses are being refined for accuracy. Feel free to explore, but some answers may be incomplete.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    {messages.length > 0 && (
                        <div className="bg-white border-2 border-[#E5E5E5] rounded-2xl p-6 space-y-4 max-h-[400px] overflow-y-auto">
                            {messages.map((msg, index) => (
                                <div key={index}>
                                    <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[80%] px-4 py-3 rounded-2xl ${msg.role === 'user'
                                            ? 'bg-[#F26530] text-white'
                                            : 'bg-gray-50 text-[#0A0A0A] border border-[#E5E5E5]'
                                            }`}>
                                            <p className="text-sm leading-relaxed">{msg.content}</p>
                                        </div>
                                    </div>

                                    {/* Citations */}
                                    {msg.citations && msg.citations.length > 0 && (
                                        <div className="mt-2 ml-4 space-y-1">
                                            <p className="text-xs text-[#9CA3AF] font-medium">Sources:</p>
                                            {msg.citations.map((cite, i) => (
                                                <Link
                                                    key={i}
                                                    href={cite.url || '#'}
                                                    className="block text-xs text-[#6B6B6B] hover:text-[#0A0A0A] hover:underline"
                                                >
                                                    • {cite.title} {cite.section && `- ${cite.section}`}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-50 px-4 py-3 rounded-2xl">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Chat Input */}
                    <div className="bg-white border-2 border-[#E5E5E5] rounded-2xl p-4 flex gap-3 items-end shadow-sm">
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSend();
                                }
                            }}
                            placeholder="Ask me about Kishore's skills, projects, experience…"
                            disabled={isLoading}
                            rows={2}
                            className="flex-1 resize-none text-sm text-[#0A0A0A] placeholder-[#9CA3AF] bg-transparent outline-none disabled:opacity-50"
                        />
                        <button
                            onClick={handleSend}
                            disabled={isLoading || !message.trim()}
                            className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#F26530] text-white flex items-center justify-center
                            hover:bg-[#E55520] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                            aria-label="Send"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>

                    <p className="text-xs text-[#9CA3AF] text-center">
                        Context-engineered with structured retrieval • Grounded in portfolio data • Portfolio-only answers
                    </p>

                    {/* Example Questions */}
                    {messages.length === 1 && messages[0].role === 'assistant' && (
                        <div className="space-y-4">
                            <p className="text-sm text-[#6B6B6B] font-medium text-center">Try asking:</p>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    "Tell me about Kishore's diarization pipeline",
                                    "What's his latest job?",
                                    "What ML frameworks does he know?",
                                    "Should I hire him?",
                                ].map((q, i) => (
                                    <button
                                        key={i}
                                        onClick={() => { setMessage(q); }}
                                        disabled={isLoading}
                                        className="px-4 py-3 text-sm bg-white border-2 border-[#E5E5E5] rounded-xl text-[#6B6B6B] text-left hover:border-[#F26530] hover:text-[#0A0A0A] transition-all disabled:opacity-50"
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Footer */}
                    <div className="pt-8 border-t border-[#E5E0DB] space-y-2 text-center">
                        <div className="flex items-center justify-center gap-6 text-xs text-[#9CA3AF]">
                            <span>✓ Grounded Answers</span>
                            <span>•</span>
                            <span>✓ Citations Included</span>
                            <span>•</span>
                            <span>✓ Portfolio Only</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
