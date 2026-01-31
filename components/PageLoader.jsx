'use client';

import { useState, useEffect } from 'react';

export default function PageLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hide loader after a short delay or when page is ready
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-[#F8F8F8] flex items-center justify-center">
            <div className="relative">
                {/* Orange Spinner */}
                <div className="w-16 h-16 border-4 border-gray-200 border-t-[#F26530] rounded-full animate-spin"></div>

                {/* Optional: Loading Text */}
                <p className="text-[#F26530] font-medium mt-4 text-center animate-pulse">
                    Loading...
                </p>
            </div>
        </div>
    );
}
