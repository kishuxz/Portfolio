'use client';

import { useState, useEffect } from 'react';

export default function IntroOverlay() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasPlayed, setHasPlayed] = useState(false);

    useEffect(() => {
        const introShown = sessionStorage.getItem('introShown');

        if (!introShown) {
            setIsVisible(true);

            const timer = setTimeout(() => {
                handleClose();
            }, 2500); // Reduced to under 3 seconds

            return () => clearTimeout(timer);
        } else {
            setHasPlayed(true);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('introShown', 'true');
        setHasPlayed(true);
    };

    if (hasPlayed) return null;

    return (
        <div
            className={`fixed inset-0 z-50 bg-white dark:bg-[rgb(var(--bg-primary))]
        flex items-center justify-center transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            {/* Skip button */}
            <button
                onClick={handleClose}
                className="fixed top-6 right-6 z-50 px-4 py-2
          text-sm font-medium text-[rgb(var(--text-primary))]
          border border-[rgb(var(--border))] rounded-lg
          hover:bg-[rgb(var(--bg-secondary))] transition-colors"
                aria-label="Skip animation"
            >
                Skip
            </button>

            {/* Content */}
            <div className="text-center space-y-6 fade-in">
                {/* Profile image placeholder */}
                <div className="w-28 h-28 mx-auto rounded-full 
          border-2 border-[rgb(var(--border))] bg-[rgb(var(--bg-secondary))]
          flex items-center justify-center slide-up">
                    <span className="text-4xl">👤</span>
                </div>

                {/* Name */}
                <h1 className="text-4xl md:text-5xl font-bold text-[rgb(var(--text-primary))] slide-up">
                    Your Name
                </h1>

                {/* Subtitle */}
                <p className="text-lg text-secondary slide-up">
                    Full-Stack Developer · Frontend Engineer · Data / ML Systems
                </p>
            </div>
        </div>
    );
}
