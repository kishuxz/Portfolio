/** @type {import('next').NextConfig} */

// When GITHUB_PAGES=true (set during `npm run deploy`), we build a fully
// static export for GitHub Pages — but API routes won't be available.
// For Vercel (or `npm run dev` / `npm run start`), the full Next.js server
// runs and the /api/rag route is available for the RAG chatbot.
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  // Static export ONLY when deploying to GitHub Pages
  ...(isGitHubPages && {
    output: 'export',
    basePath: '/Portfolio',
    assetPrefix: '/Portfolio/',
  }),

  images: {
    unoptimized: true, // Required for static export; safe to keep for Vercel too
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Optimize production builds
  compress: true,

  // Security headers (ignored in static export mode, used by Vercel)
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
