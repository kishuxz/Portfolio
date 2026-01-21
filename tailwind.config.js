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
                    50: 'hsl(220, 70%, 97%)',
                    100: 'hsl(220, 70%, 92%)',
                    200: 'hsl(220, 70%, 82%)',
                    300: 'hsl(220, 70%, 70%)',
                    400: 'hsl(220, 70%, 58%)',
                    500: 'hsl(220, 70%, 50%)',
                    600: 'hsl(220, 70%, 42%)',
                    700: 'hsl(220, 70%, 34%)',
                    800: 'hsl(220, 70%, 26%)',
                    900: 'hsl(220, 70%, 18%)',
                },
                accent: {
                    50: 'hsl(280, 70%, 97%)',
                    100: 'hsl(280, 70%, 92%)',
                    200: 'hsl(280, 70%, 82%)',
                    300: 'hsl(280, 70%, 70%)',
                    400: 'hsl(280, 70%, 58%)',
                    500: 'hsl(280, 70%, 50%)',
                    600: 'hsl(280, 70%, 42%)',
                    700: 'hsl(280, 70%, 34%)',
                    800: 'hsl(280, 70%, 26%)',
                    900: 'hsl(280, 70%, 18%)',
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
