'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FloatingNav() {
    const [isVisible, setIsVisible] = useState(true);  // Changed to true

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(true);  // Always keep visible
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'Skills', href: '#skills' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
    ];

    return (
        <nav
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 
        transition-all duration-500 ease-out
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'}
        hidden md:block`}
        >
            <div className="glass px-6 py-3 rounded-full shadow-lg backdrop-blur-xl
        border border-gray-200/50 flex items-center gap-6">
                {navItems.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="text-sm font-medium text-[#0A0A0A] hover:text-black 
              transition-all duration-300 relative group"
                    >
                        {item.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black 
              group-hover:w-full transition-all duration-300"></span>
                    </Link>
                ))}
                <Link
                    href="/chat"
                    className="text-sm font-medium text-[#0A0A0A] hover:text-black 
              transition-all duration-300 relative group"
                >
                    Chat AI
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black 
              group-hover:w-full transition-all duration-300"></span>
                </Link>
                <Link
                    href="/resume"
                    className="text-sm font-medium px-4 py-1.5 bg-black text-white rounded-full
            hover:bg-gray-800 transition-all duration-300 hover:scale-105"
                >
                    Resume
                </Link>
            </div>
        </nav>
    );
}
