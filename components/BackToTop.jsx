'use client';

import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 left-8 z-50 w-12 h-12 bg-[#F26530] text-white rounded-full 
                        flex items-center justify-center shadow-lg hover:bg-[#E55520] 
                        transition-all duration-300 hover:scale-110 group"
                    aria-label="Back to top"
                >
                    <FiArrowUp className="text-xl group-hover:-translate-y-0.5 transition-transform" />
                </button>
            )}
        </>
    );
}
