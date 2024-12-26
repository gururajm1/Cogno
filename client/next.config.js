/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            // Serve the main app at "/dashboard"
            {
                source: '/dashboard/:path*',
                destination: 'http://localhost:3000/:path*',
            },
            {
                source: '/dashboard',
                destination: 'http://localhost:3000/',
            },
            // Serve the microfrontend at "/"
            {
                source: '/',
                destination: 'http://localhost:3001/',
            },
            {
                source: '/:path*',
                destination: 'http://localhost:3001/:path*',
            },
        ];
    },
};

module.exports = nextConfig;
