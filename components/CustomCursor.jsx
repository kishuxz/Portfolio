'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);

    // Mouse position using motion values for performance
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Smooth spring animation for the follower
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX - 16); // Center the 32px follower
            cursorY.set(e.clientY - 16);
        };

        const handleMouseEnter = () => setIsHovering(true);
        const handleMouseLeave = () => setIsHovering(false);

        // Add listeners to interactive elements
        const updateListeners = () => {
            const interactiveElements = document.querySelectorAll(
                'a, button, input, textarea, [role="button"], .hover-lift'
            );

            interactiveElements.forEach((el) => {
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });

            return () => {
                interactiveElements.forEach((el) => {
                    el.removeEventListener('mouseenter', handleMouseEnter);
                    el.removeEventListener('mouseleave', handleMouseLeave);
                });
            };
        };

        window.addEventListener('mousemove', moveCursor);
        const cleanupListeners = updateListeners();

        // Re-run listener attachment on mutations (for client-side routing/dynamic content)
        const observer = new MutationObserver(updateListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            cleanupListeners?.();
            observer.disconnect();
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Main Dot - Follows perfectly */}
            <motion.div
                className="fixed top-0 left-0 w-2.5 h-2.5 bg-black rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    translateX: cursorX,
                    translateY: cursorY,
                    x: 12, // Offset to center inside the follower
                    y: 12
                }}
            />

            {/* Neon Follower - Smooth lag */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#D4FF00] pointer-events-none z-[9998]"
                style={{
                    translateX: cursorXSpring,
                    translateY: cursorYSpring,
                    scale: isHovering ? 1.5 : 1,
                    backgroundColor: isHovering ? 'rgba(212, 255, 0, 0.1)' : 'transparent',
                }}
                transition={{ duration: 0.2 }}
            />
        </>
    );
}
