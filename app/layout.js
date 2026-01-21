import { Space_Grotesk, Manrope } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
    weight: ['400', '500', '600'],
    display: 'swap',
});

export const metadata = {
    title: 'Portfolio | Full-Stack Developer · Data Engineer · ML/LLM Systems',
    description: 'I build production-ready data and AI systems — from APIs to distributed pipelines and LLM agents.',
    keywords: ['Full-Stack Developer', 'Data Engineer', 'Machine Learning', 'LLM Systems', 'RAG', 'AI'],
    authors: [{ name: 'Your Name' }],
    openGraph: {
        title: 'Portfolio | Full-Stack Developer · Data Engineer · ML/LLM Systems',
        description: 'I build production-ready data and AI systems — from APIs to distributed pipelines and LLM agents.',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Portfolio | Full-Stack Developer · Data Engineer · ML/LLM Systems',
        description: 'I build production-ready data and AI systems — from APIs to distributed pipelines and LLM agents.',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
