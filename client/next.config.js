/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        optimizeServerReact: true,
        legacyBrowsers: false,
        scrollRestoration: true,
    },
    compiler: {
        styledComponents: true,
    },
    async rewrites() {
        return [
            // Serve the main app at "/games"
            {
                source: '/games/:path*',
                destination: 'http://localhost:3000/:path*',
            },
            {
                source: '/games',
                destination: 'http://localhost:3000/',
            },
            // Serve the microfrontend at "/"
            {
                source: '/',
                destination: 'http://localhost:3000/games',
            },
            {
                source: '/:path*',
                destination: 'http://localhost:3001/:path*',
            },
        ];
    },
};

module.exports = nextConfig;
