const GITHUB_PAGES_BASE_PATH = '/Portfolio';
const VERCEL_RAG_API_URL = 'https://portfolio-lpp8zzy4y-kishuxzs-projects.vercel.app/api/rag';

export function isGitHubPagesRuntime() {
    if (typeof window === 'undefined') {
        return process.env.GITHUB_PAGES === 'true';
    }

    return (
        window.location.hostname === 'kishuxz.github.io' ||
        window.location.pathname.startsWith(`${GITHUB_PAGES_BASE_PATH}/`) ||
        window.location.pathname === GITHUB_PAGES_BASE_PATH
    );
}

export function withBasePath(path) {
    if (!path) return path;
    if (/^(https?:)?\/\//.test(path)) return path;

    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return isGitHubPagesRuntime()
        ? `${GITHUB_PAGES_BASE_PATH}${normalizedPath}`
        : normalizedPath;
}

export function getChatApiUrl() {
    return isGitHubPagesRuntime() ? VERCEL_RAG_API_URL : '/api/rag';
}
