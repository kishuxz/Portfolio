'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ChatPage() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (!message.trim() || isLoading) return;

        const userMessage = message.trim();
        setMessage('');

        // Add user message
        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const response = await fetch('/api/rag-simple', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question: userMessage }),
            });

            const data = await response.json();

            if (data.top_matches) {
                // Format the response
                const answer = `Based on my portfolio, here are the most relevant matches:\n\n` +
                    data.top_matches.map((m, i) =>
                        `${i + 1}. ${m.title} - ${m.section}\n   (Similarity: ${(m.similarity * 100).toFixed(1)}%)\n   ${m.content}...`
                    ).join('\n\n');

                const citations = data.top_matches.map(m => ({
                    title: m.title,
                    section: m.section,
                    similarity: m.similarity
                }));

                setMessages(prev => [...prev, {
                    role: 'assistant',
                    content: answer,
                    citations,
                    confidence: 'medium'
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
        <div className="min-h-screen bg-[#FAFAF9] dotted-bg">
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
                    <Link href="/chat" className="text-sm font-medium text-black border-b-2 border-black">
                        Chat AI
                    </Link>
                    <Link href="/resume" className="text-sm font-medium px-4 py-1.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                        Resume
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <div className="min-h-screen flex items-center justify-center px-6 pt-20">
                <div className="max-w-3xl w-full space-y-8">
                    {/* Heading */}
                    <div className="text-center space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-[#0A0A0A]" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                            Ask About My Work
                        </h1>
                        <p className="text-lg text-[#6B6B6B]">
                            RAG-powered AI trained on my portfolio • Grounded answers with citations
                        </p>
                    </div>

                    {/* Chat Messages */}
                    {messages.length > 0 && (
                        <div className="bg-white border-2 border-[#E5E0DB] rounded-2xl p-6 space-y-4 max-h-[400px] overflow-y-auto">
                            {messages.map((msg, index) => (
                                <div key={index}>
                                    <div className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        <div className={`max-w-[80%] px-4 py-3 rounded-2xl ${msg.role === 'user'
                                            ? 'bg-[#0A0A0A] text-white'
                                            : 'bg-[#F5F1ED] text-[#0A0A0A]'
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
                                    <div className="bg-[#F5F1ED] px-4 py-3 rounded-2xl">
                                        <div className="flex gap-1">
                                            <div className="w-2 h-2 bg-[#D4C5B9] rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-[#D4C5B9] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-[#D4C5B9] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Chat Input */}
                    <div className="bg-white border-2 border-[#E5E0DB] rounded-2xl p-5 hover:border-[#D4C5B9] transition-all shadow-lg">
                        <div className="flex items-center gap-4">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask me about my projects, skills, experience..."
                                className="flex-1 bg-transparent text-[#0A0A0A] placeholder-[#9CA3AF] outline-none text-base"
                                disabled={isLoading}
                            />
                            <button
                                onClick={handleSend}
                                disabled={!message.trim() || isLoading}
                                className="w-12 h-12 rounded-full bg-[#0A0A0A] hover:bg-[#1A1A1A] disabled:bg-[#E5E0DB] flex items-center justify-center transition-all"
                            >
                                {isLoading ? (
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                ) : (
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <p className="text-xs text-[#9CA3AF] text-center">
                        Powered by RAG + HuggingFace • Grounded in portfolio data • Zero hallucinations
                    </p>

                    {/* Example Questions - Only show if no messages */}
                    {messages.length === 0 && (
                        <div className="space-y-4">
                            <p className="text-sm text-[#6B6B6B] font-medium text-center">Try asking:</p>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    "What are your main skills?",
                                    "Tell me about your ML projects",
                                    "Your cloud experience?",
                                    "Show me your data engineering work",
                                ].map((q, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setMessage(q)}
                                        disabled={isLoading}
                                        className="px-4 py-3 text-sm bg-white border-2 border-[#E5E0DB] rounded-xl text-[#6B6B6B] text-left hover:border-[#D4C5B9] hover:text-[#0A0A0A] transition-all disabled:opacity-50"
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
