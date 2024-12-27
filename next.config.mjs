/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    transpilePackages: ['mui-tel-input'],
    output : "export",
    images: {
        unoptimized: true,  // Disable image optimization
      },
  };
  
  export default nextConfig;
  