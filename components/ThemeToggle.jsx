'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full bg-transparent border-2 border-[#0A0A0A] dark:border-white
                flex items-center justify-center text-[#0A0A0A] dark:text-white
                hover:bg-[#F26530] hover:border-[#F26530] hover:text-white
                transition-all duration-300"
            aria-label="Toggle theme"
        >
            {theme === 'light' ? <FiMoon className="text-lg" /> : <FiSun className="text-lg" />}
        </button>
    );
}
