/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,jsx}',
        './components/**/*.{js,jsx}',
        './app/**/*.{js,jsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#F9FAFB',  // Gray 50
                    100: '#F3F4F6', // Gray 100
                    200: '#E5E7EB', // Gray 200
                    300: '#D1D5DB', // Gray 300
                    400: '#9CA3AF', // Gray 400
                    500: '#6B7280', // Gray 500
                    600: '#4B5563', // Gray 600
                    700: '#374151', // Gray 700
                    800: '#1F2937', // Gray 800
                    900: '#111827', // Gray 900
                },
                accent: {
                    50: '#F7FEE7',
                    100: '#ECFCCB',
                    200: '#D9F99D',
                    300: '#BEF264',
                    400: '#A3E635',
                    500: '#84CC16',
                    600: '#65A30D',
                    700: '#4D7C0F',
                    800: '#3F6212',
                    900: '#365314',
                },
            },
            fontFamily: {
                sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
                display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
                body: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-down': 'slideDown 0.4s ease-out',
                'scale-in': 'scaleIn 0.4s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};
