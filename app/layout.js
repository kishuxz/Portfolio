import { Space_Grotesk, Manrope } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/contexts/ThemeContext';

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
    metadataBase: new URL('https://portfolio-lpp8zzy4y-kishuxzs-projects.vercel.app'),
    title: 'Kishore Kumar Ramkumar | Software Engineer · ML & AI Systems',
    description: 'Engineer building production systems across data pipelines, ML training, and multi-agent LLM stacks. MS Data Science at Indiana University, May 2026.',
    keywords: [
        'Kishore Kumar Ramkumar',
        'Multi-Agent LLM',
        'LangGraph',
        'Speaker Diarization',
        'ML Engineer',
        'Data Engineer',
        'Software Engineer',
        'AI Engineer',
        'Indiana University',
        'OpenAI Parameter Golf',
        'Stackply',
    ],
    authors: [{ name: 'Kishore Kumar Ramkumar' }],
    openGraph: {
        title: 'Kishore Kumar Ramkumar | Software Engineer · ML & AI Systems',
        description: 'Multi-agent LLM systems · Data engineering · Production ML at scale',
        url: 'https://portfolio-lpp8zzy4y-kishuxzs-projects.vercel.app/',
        siteName: 'Kishore Kumar Ramkumar',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kishore Kumar Ramkumar | Software Engineer · ML & AI Systems',
        description: 'Multi-agent LLM systems · Data engineering · Production ML at scale',
        images: ['/og-image.png'],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
            <body className="antialiased">
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
